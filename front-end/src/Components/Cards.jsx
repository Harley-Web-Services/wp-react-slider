import React from 'react'
import Ccard from './Card'
import PropTypes from 'prop-types'

const Cards = props => {
    return (
        <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
       {props.cards.map(card => {
         return <Ccard card={card} key={card.tag} />;
        })}
    </div>

    )
}

Cards.propTypes = {
    cardsObject: PropTypes.shape({
        cards:PropTypes.object,
    })
}
export default Cards            