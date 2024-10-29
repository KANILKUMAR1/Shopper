import React, { useContext } from 'react'; // Import useContext
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';


const CartItems = () => {
    const {  getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext); // Use useContext here

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product && all_product.map((e) => { // Check if all_product is defined
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}> {/* Add a key prop to the outer div */}
                            <div className="cartitems-format ">
                                <img src={e.image} alt={e.name}  className='carticon-product-icon'/>
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>${(e.new_price * cartItems[e.id]).toFixed(2)}</p> {/* Format total */}
                                <img className='cartitems-remove-icon'src={remove_icon} onClick={() => { removeFromCart(e.id); }} alt="Remove" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null; // Return null if cartItems[e.id] is not greater than 0
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>SubTotal</p>
                            <p>${getTotalCartAmount ()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount ()}</h3>
                        </div>

                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If You Have a promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='promocode' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;

