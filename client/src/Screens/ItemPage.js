import React from 'react';
import shirtImg from '../images/angry_gorilla.jpg'
import Styles from './ItemPage.module.css';

function ItemPage() {
    return (
        <>
            <div className={Styles.page_container}>
                <div className={Styles.image_container}>
                    <img src={shirtImg} alt="Chicano Club Logo"/>
                </div>

                <div className={Styles.item_info_container}>
                    <h3>TEST T-SHIRT</h3>
                    <p>$33</p>
                    <div className={Styles.size_Box}>
                            <h3>Size</h3>
                            <a href="/" data-price="$33.00" aria-label="Size: S" role="button">S</a>
                            <a href="/" data-price="$33.00" aria-label="Size: M" role="button">M</a>
                            <a href="/" data-price="$33.00" aria-label="Size: L" role="button">L</a>
                            <a href="/" data-price="$33.00" aria-label="Size: XL" role="button">XL</a>
                            <a href="/" data-price="$33.00" aria-label="Size: XXL" role="button">XXL</a>
                            <a href="/" data-price="$33.00" aria-label="Size: 3XL" role="button">3XL</a>   
                    </div>
                    <button>ADD TO CART</button>
                    
                    <p>Discription</p>
                    {/* <ul> */}
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    {/* </ul> */}

                </div>
            </div>

        </>
    )
}
export default ItemPage;