import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
            An e-commerce website is an online store that allows customers to buy and sell products, 
            services, and digital products over the internet.
             E-commerce websites are the digital equivalent of a physical store, with product listings, categories, customer reviews, and other features
            </p>
            <p>
            E-commerce websites typically displayed products or services along with detailed descriptions, images , prices and any avalible variations (eg : sizes , colors ) Each product usually has its dedicated page with relavante information . 
            </p>
        </div>

      
    </div>
  )
}

export default DescriptionBox
