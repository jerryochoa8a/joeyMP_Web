import React, { useState, useEffect } from 'react';
import Styles from './Admin.module.css';
import Popup from './ItemPopup';
import axios from 'axios'

function Admin() {

    const [name, setName] = useState('');
    const [imageFile, setImageFile] = useState();
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');

    const [openPopup, setPopup] = useState(false);
    const [mainFeed, setMainFeed] = useState([])// all the items created
    const [errors, setErrors] = useState("")

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


    // Make an Item
    const createItem = e => {
        e.preventDefault(); // Prevents form from submiting early
        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("image", imageFile);

        if (name === '' || price === 0 || description === '') {
            setErrors("Please fill out all fields fuck ass dude.")
        } else {

            axios.post('/api/appt/create', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then(res => {
                console.log(res);
                window.location.reload(true)
            })
            .catch(err => {
                console.log(err)
                    setErrors(err);
            })
        }
    }


    //Delete
    const deleteItem = (item_ID) => {
        axios.delete('/api/item/' + item_ID + '/delete')
            .then(res => {
                console.log(res);
                // navigate('/')
                window.location.reload(true)
            })
            .catch(err => {
                console.log(err);
            })
    }
    ////

    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };

    return (
        <>
            <div className={Styles.admin_Box}>

                <button className={Styles.delete_button} onClick={() => logout()}>logout</button>


                <h3 className={Styles.admin_title}>Admin</h3>

                <button className={Styles.delete_button} onClick={() => setPopup(true)}>Create Item</button>

                <Popup isOpen={openPopup} onClose={() => setPopup(false)}>
                    <>
                        <h3 className={Styles.admin_title}>Create Item</h3>
                        <p>{errors}</p>
                        <form onSubmit={createItem} encType="multipart/form-data">

                            <div className={Styles.input_group}>
                                <input className={Styles.input_art} type='text' value={name} onChange={(e) => setName(e.target.value)} />
                                <label className={Styles.user_label}>Item Name</label>

                                <input className={Styles.input_art2} type='file' accept='image/*' onChange={(e) => setImageFile(e.target.files[0])} />
                                <label className={Styles.user_label}>Image</label>

                                <input className={Styles.input_art} type='number' value={price} onChange={(e) => setPrice(e.target.value)}></input>
                                <label className={Styles.user_label}>Price</label>

                                <textarea className={Styles.input_art} value={description} onChange={(e) => setDescription(e.target.value)} />
                                <label className={Styles.user_label}>Description</label>
                            </div>

                            <button className={Styles.delete_button} type='submit'>Submit</button>

                        </form>
                    </>
                </Popup>

                <table className={Styles.item_table}>
                    <thead className={Styles.item_table_head}>
                        <tr className={Styles.item_table_row}>
                            <th className={Styles.name_box}>Name</th>
                            <th className={Styles.price_box}>Price</th>
                            <th className={Styles.description_box}>Description</th>
                            <th className={Styles.actions_box}>Actions</th>
                        </tr>
                    </thead>
                    <tbody className={Styles.item_table_body}>
                        {mainFeed && mainFeed.length > 0 ? (
                            mainFeed.map((feed, idx) => (
                                <tr className={Styles.item_table_row} key={idx}>
                                    <td className={Styles.name_box}>{feed.name}</td>
                                    <td className={Styles.price_box}>${feed.price.toFixed(2)}</td>
                                    <td className={Styles.description_box}>{feed.description}</td>
                                    <td className={Styles.actions_box}>
                                        <button
                                            className={Styles.delete_button}
                                            onClick={() => deleteItem(feed._id)}
                                        >
                                            DELETE
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr className={Styles.item_table_row}>
                                <td className={Styles.no_data} colSpan="4">
                                    No data available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>
        </>
    )
}
export default Admin;