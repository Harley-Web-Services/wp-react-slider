import React from 'react';
import { Wrapper, Card } from 'bushido-strap';
import PropTypes from 'prop-types';
const Ccard = props => {
    return (
        <Wrapper>
            <Card>
            <div className="headline">{props.card.tag}</div>
            <div className="company"  style={{textAlign:"center"}}>
                <div className="img-container">
                    <img src={props.card.src} width="350" height="350" alt={props.card.src.alt} />
                </div>
                <span>{props.card.customer}</span>
            </div>
            </Card>
        </Wrapper>
    )
}


Ccard.propTypes = {
    cardObject: PropTypes.shape({
        card: PropTypes.string,
        cardImg: PropTypes.string,
        cardDesign: PropTypes.string

    })
}
export default Ccard