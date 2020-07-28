import React,{Component} from 'react'
import Cards from './Cards';
import Selector from './Tabs';
import axios from 'axios'
import {baseUrl} from './auth/baseUrl'



// Importing our tab and card data. No need to change anything here.
// import { tabData, cardData } from '../data';
import {tabData} from '../data'
const cardURL = `${baseUrl}/Customers`
console.log(Selector['tabs'])

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'All',
    
      tabs: [],
      cards: [],
      
   
  
    };
  };



  handleChange = e =>{
    this.setState({[e.target.name]: e.target.value}, ()=> {
      if (this.props.onChange) {
        this.props.onChange(this.state)
      }
    })
  }

  componentDidMount = async() => {
  
    // Once the component has mounted, get the data and reflect that data on the state.
  await axios.get(cardURL)
    .then((resp) =>{

      this.setState({
        tabs : tabData,
        cards:resp.data
      })
      
    })
    .catch((err) => {console.log(err)})
  }
  changeSelected = tab => {

    // this function should take in the tab and update the state with the new tab.
    this.setState({
      selected: tab,
      
  
    })
  };
 scrollEffect =() => {
   const sticky = Selector.offsetTop
   if (window.pageYOffset > sticky) {
     Selector.className.add("sticky");
   } else {
     Selector.className.remove("sticky")
   }
 }
  filterCards = () => {
    /* Right now this function only returns the cards on state.
      We're going to make this function more dynamic
      by using it to filter out our cards for when a tab is selcted
      Notice that we're passing this function to our <Cards /> component below.
      This function returns an array of cards, so we can just pass it down as such.
      Your algorithim for the logic here is as follows:
        - if the selected tab is 'all' it should return all
          of the items from cardData.
        - else, it should only return those cards whose 'tab' matched this.state.selected.
    */
    if(this.state.selected === 'All') return this.state.cards
  

    let filteredCards = this.state.cards.filter(card => card.tab === this.state.selected)
    return filteredCards
  };

  render() {
    return (
      <div onScroll={this.scrollEffect} className="content-container">
        {/*
          Add 2 props to the Selector component,
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        
        <Selector tabs={this.state.tabs}  selectedTab={this.state.selected} selectedTabHandler={this.changeSelected} onChange={this.handleChange}/>
      
        <Cards cards={this.filterCards() } onChange={this.handleChange} />
     
      </div>
    );
  }
}