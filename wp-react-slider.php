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

class WP_React_Slider {

  protected $plugin_options_page = '';

  /**
   * Class constructor
   */
  public function __construct() {
    require('plugin_options.php');
  }

  /**
   * Initialize hooks.
   */
  public function init() {

    add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_frontend_scripts' ) );
  }

  public function enqueue_frontend_scripts($hook) {

    //wp_enqueue_script('react');
    //wp_enqueue_script('react-dom');

    // add react and react-dom from core
    $dep = ''; //['wp-element'];
    $handle = 'wp-react-slider-';

    // enqueue development or production React code
    if(file_exists(dirname(__FILE__) . "/dist/main.js")) {
      $handle .= 'prod';
      wp_enqueue_script( $handle, plugins_url( "/dist/main.js", __FILE__ ), ['wp-element'], '0.1', true );
    } else {
      $handle .= 'dev';
      wp_enqueue_script( $handle, 'http://localhost:3000/assets/main.js', ['wp-element'], '0.1', true );
    }
  }
}

$wp_react_plugin = new WP_React_Plugin();
$wp_react_plugin->init();