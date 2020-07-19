<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://harley-devs.com
 * @since             1.0.0
 * @package           Wp_React_Slider
 *
 * @wordpress-plugin
 * Plugin Name:       wp-react-slider
 * Plugin URI:        https://github.com/Harley-Web-Services/wp-react-slider
 * Description:       This is a short description of what the plugin does. It's displayed in the WordPress admin area.
 * Version:           1.0.0
 * Author:            Mike Harley
 * Author URI:        https://harley-devs.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       wp-react-slider
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}


/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'WP_REACT_SLIDER_VERSION', '1.0.0' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-wp-react-slider-activator.php
 */
function activate_wp_react_slider() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-wp-react-slider-activator.php';
	Wp_React_Slider_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-wp-react-slider-deactivator.php
 */
function deactivate_wp_react_slider() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-wp-react-slider-deactivator.php';
	Wp_React_Slider_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_wp_react_slider' );
register_deactivation_hook( __FILE__, 'deactivate_wp_react_slider' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-wp-react-slider.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_wp_react_slider() {

	$plugin = new Wp_React_Slider();
	$plugin->run();

}

run_wp_react_slider();

add_action('admin_enqueue_scripts', function ($hook) {
  // only load scripts on dashboard and settings page
  global $wp_react_slider_settings_page;
  if ($hook != 'index.php' && $hook != $wp_react_slider_settings_page) {
    return;
  }

  if (in_array($_SERVER['REMOTE_ADDR'], array('10.255.0.2', '::1'))) {
    // DEV React dynamic loading
    $js_to_load = 'http://localhost:3000/static/js/bundle.js';
  } else {
    $js_to_load = plugin_dir_url( __FILE__ ) . 'react_wp_slider.js';
    $css_to_load = plugin_dir_url( __FILE__ ) . 'react_wp_slider.css';
  }

  wp_enqueue_style('wp_react_slider_styles', $css_to_load);
  wp_enqueue_script('wp_react_slider_react', $js_to_load, '', mt_rand(10,1000), true);
  wp_localize_script('wp_react_slider_react', 'wp_react_slider_ajax', array(
    'urls'    => array(
      'proxy'    => rest_url('ghost-inspector/v1/proxy'),
      'settings' => rest_url('ghost-inspector/v1/settings')
    ),
    'nonce'   => wp_create_nonce('wp_rest'),
    'suiteId' => get_option('wp_react_slider_suite_id'),
  ));
});

// display dashboard widget
add_action('wp_dashboard_setup', function () {
  wp_add_dashboard_widget('wp_react_slider_widget', 'WP React Slider', 'wp_react_slider_display_widget');
  function wp_react_slider_display_widget() {
    ?>
    <div id="wp_react_slider_dashboard"></div>
    <?php
  }
});

// add to settings menu
add_action('admin_menu', function () {
  global $wp_react_slider_settings_page;
  $wp_react_slider_settings_page = add_options_page('WP React Slider Settings', 'WP React Slider', 'manage_options', 'wp-react-slider-settings', 'wp_react_slider_settings_do_page');
  // Draw the menu page itself
  function wp_react_slider_settings_do_page() {
    ?>
    <div id="wp_react_slider_settings"></div>
    <?php
  }
  });