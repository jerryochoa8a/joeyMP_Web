import React, { useState, useEffect } from 'react';
import { FaSquareInstagram } from "react-icons/fa6";
// import shirtImg from '../images/angry-gorilla.jpg';
import Styles from './Home.module.css';
import Popup from './ItemPopup';
import axios from 'axios';

function Home() {
    const [openPopup, setPopup] = useState(false);
    const [mainFeed, setMainFeed] = useState([]);// all the items created
    const [popupItem, setPopupItem] = useState([]);

    // Gets all the items created to this page
    useEffect(() => {
        axios.get("/api/itemList")
            .then(res => {
                console.log(res.data)
                setMainFeed(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    ////

    function popupInfo(ID) {
        // Get the info of one Item for the popup
        axios.get("/api/getItem/" + ID)
            .then(res => {
                console.log(res.data)
                setPopupItem(res.data[0]); // set data for popup
                setPopup(true) // open popup
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <>
            <div className={Styles.NewArrivals_container}>
                <h3>Order now by sending us a DM on instagram</h3>
                <a href='https://www.instagram.com/joeymealprep?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
                    <FaSquareInstagram className={Styles.instagram} />
                </a>
                <p>Pay with zelle</p>

            </div>

            {/* Popup */}
            <div>
                <Popup isOpen={openPopup} onClose={() => setPopup(false)}>
                    {popupItem && (
                        <>
                            <h2>{popupItem.name}</h2>
                            <p>{popupItem.description}</p>
                            <p>Price: ${popupItem.price}</p>
                            <button className={Styles.buttonStyle} onClick={() => {
                                window.open("https://www.instagram.com/joeymealprep?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==");
                            }}>Order Now!</button>
                        </>
                    )}
                </Popup>
            </div>
            {/* Popup */}


            <div className={Styles.item_container}>

                {(mainFeed.map((feed, idx) => (
                    <div className={Styles.item_Box}>
                        <div onClick={() => popupInfo(feed._id)} className={Styles.item_Img_box}>
                            <img src={feed.image} alt={feed.name} />
                        </div>
                        <div className={Styles.item_Info_box}>
                            <h3>{feed.name}</h3>
                        </div>
                    </div>
                )))}

            </div>

        </>
    )
}
export default Home;