import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminRoute from '../components/AdminRoute';
import 'bootstrap/dist/css/bootstrap.css';
import Navagation from './Navagation';
// import ItemPage from './ItemPage';
// import Cart from './Cart';
import Login from "./Login";
import Admin from './Admin';
import Home from './Home';


function Main() {
    return (
        <>
            <Navagation />

            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/login" element={<Login />} />  {/* Login route */}
                    {/* Admin protected route */}
                    <Route
                        path="/admin"
                        element={
                            <AdminRoute>
                                <Admin />
                            </AdminRoute>
                        }
                    />
                </Routes>
            </Router>
        </>
    );
}

export default Main;