import React from 'react';
import './Card.css'

function Card({title, icon, price, transactions, cash_back, limit, darkBg}) {
    return (
        <div className={['card', darkBg? 'dark_bg': ''].join(" ")}>
            <img src={icon} alt="icon"/>
    <h3 className="card_title">{title}</h3>
    <h2 className="card_price">{price}</h2>
    <p className="month">per month</p>
    <div className="card_details">

    
        <p>{transactions} Transactions</p>
        <p>{cash_back}% Cash Back</p>
        <p>{limit}</p>
    </div>

    <button className="card_button">Choose Plan</button>
        </div>
    )
}

export default Card
