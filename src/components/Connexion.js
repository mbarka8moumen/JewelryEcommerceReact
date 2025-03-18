import React, { useState } from 'react';
import '../styles/Connexion.css';
import Navbar from './Navbar';
// import NavNavigation from './NavNavigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

import SHINEORA from '../assets/SHINEORA.png'

function Connexion() {
  
    const [showSignUp, setShowSignUp] = useState(false);

   
    const toggleForm = () => {
        setShowSignUp(!showSignUp);
    };

    return (  
        <>
            <div>
                <Navbar />
                {/* <NavNavigation /> */}
            
                <div>
                    <h1 id="connexion">Connexion</h1>
                </div>

                <div className="form-container">
                    {!showSignUp ? (
                        <div className="formulaire">
                            <div className="social-icons">
                                <a href="#" className="icon">
                                    <FaFacebook size={24} />
                                </a>
                                <a href="#" className="icon">
                                    <FaTwitter size={24} />
                                </a>
                                <a href="#" className="icon">
                                    <FaInstagram size={24} />
                                </a>
                                <a href="#" className="icon">
                                    <FaEnvelope size={24} />
                                </a>
                            </div>

                            <form className="sign-in-form">
                                <h2>Sign In</h2>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" placeholder="Enter your email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" placeholder="Enter your password" required />
                                </div>
                                <button type="submit" className="btn">Sign In</button>
                            </form>
                        </div>
                    ) : (
                        <div className="signup-formulaire">
                            <p>Créez votre compte</p>
                            <div className="social-icons">
                                <a href="#" className="icon">
                                    <FaFacebook size={24} />
                                </a>
                                <a href="#" className="icon">
                                    <FaTwitter size={24} />
                                </a>
                                <a href="#" className="icon">
                                    <FaInstagram size={24} />
                                </a>
                                <a href="#" className="icon">
                                    <FaEnvelope size={24} />
                                </a>
                            </div>

                            <form className="sign-up-form">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" placeholder="Enter your name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" placeholder="Enter your email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" placeholder="Enter your password" required />
                                </div>
                                <button type="submit" className="btn">Sign Up</button>
                            </form>

                            <p className="signup-link">Already have an account? <a href="#" onClick={toggleForm}>Sign In</a></p>
                        </div>
                    )}

                   
                    {!showSignUp && (
                        <div className="right-side">
                            <p>
                                Vous n'avez pas de compte ? Créez-en un !<br />
                                En créant un compte, vous pourrez passer commande plus rapidement, ajouter plusieurs adresses de livraison, 
                                suivre vos commandes ou consulter l'historique de vos achats.
                            </p>
                            <button className="btn-continue" onClick={toggleForm}>Continue</button>
                        </div>
                    )}
                </div>
                    <div className='Brand'>
                        <img src={SHINEORA} />
                    </div>
                <Footer />
                <div>

            </div>
            </div>
        </>
    );
}

export default Connexion;
