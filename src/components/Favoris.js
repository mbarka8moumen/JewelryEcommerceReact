import React, { useContext } from 'react';
import '../styles/Favoris.css'; // Fichier CSS pour ce composant
import Navbar from './Navbar';
import Footer from './Footer';
import { FavoritesContext } from './App';

function Favoris() {
  const { favoritList } = useContext(FavoritesContext);

  return (
    <div className="favoris-container">
      <Navbar />
      <div className="favoris-content">
        <h1>Favoris</h1>
        <div className="favoris-list">
          {favoritList.length > 0 ? (
            favoritList.map(({ id, img, title, price }) => (
              <div key={id} className="favoris-item">
                <img src={img} alt={title} className="favoris-img" />
                <h3>{title}</h3>
                <p>{price} DH</p>
              </div>
            ))
          ) : (
            <p className="no-items-message">No items in your favorites list.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Favoris;
