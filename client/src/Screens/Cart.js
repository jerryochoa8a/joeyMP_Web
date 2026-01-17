import React from 'react';
import shirt from '../images/angry-gorilla.jpg'
import Styles from './Cart.module.css';

function Cart() {
    return (
        <>
            <div className={Styles.page_container}>


                <div className={Styles.item_container}>
                    
                    <div className={Styles.item_Box}>
                        <div className={Styles.image_container}>
                            <img alt='shirt' src={shirt} />
                        </div>
                        <div className={Styles.nameprice_container}>
                            <div className={Styles.name_box}>
                                <h3>SHIRT NAME - BLACK / XL</h3>
                                <div>
                                    <input type='number' placeholder='1'/>
                                    <a href='/'>Remove</a>
                                </div>
                            </div>
                            <div className={Styles.price_box}>
                                <p>$36.00</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className={Styles.item_Box}>
                        <div className={Styles.image_container}>
                            <img alt='shirt' src={shirt} />
                        </div>
                        <div className={Styles.nameprice_container}>
                            <div className={Styles.name_box}>
                                <h3>SHIRT NAME - BLACK / XL</h3>
                                <div>
                                    <input type='number' placeholder='1'/>
                                    <a href='/' >Remove</a>
                                </div>
                            </div>
                            <div className={Styles.price_box}>
                                <p>$36.00</p>
                            </div>
                        </div>
                        
                    </div>

                    
                
                
                </div>
                {/* end of item box */}


                <div className={Styles.item_info_container}>
                    <h3>Subtotal: $78.15</h3>
                    <button>CHECKOUT</button>

                    {/* other info later */}
                    <p>* Discounts, shipping & taxes are calculated at checkout.</p>

                </div>


            </div>

        </>
    )
}
export default Cart;