import React from 'react';
import { Wrapper, Card as Ccard } from 'bushido-strap';

// import {adminUrl} from  './auth/baseUrl'
const Card = props => {
//  const token = localStorage.getItem('token')
//  const handleSubmit = async (key) =>{
  
//      await localStorage.setItem("card-id",key)
//      return window.location.replace(`${adminUrl}/#/Customers/${key}`)
//  }
//  const isAuth = () => {
//      if(token){
//          return (
//              <button type="button" id="editButton" name="Edit" key={props.card.id} onClick={() => handleSubmit(props.card.id)}>Edit</button>
//          )
//      }
//      return 
//  }
    return (
        <Wrapper className="card">
            <Ccard>
            <div className="headline">{props.card.tab}</div>
            <div className="company"  style={{textAlign:"center"}}>
                <div className="img-container">
                    <img src={props.card.src} width="350" height="350" alt={props.card.src.alt} />
                </div>
                <span>{props.card.customer}</span><br/>
                <p>{props.card.comment}</p>
                 
            </div>
         
            </Ccard>
        </Wrapper>
    )
}



export default Card