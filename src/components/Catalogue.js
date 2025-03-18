import React, { useContext } from 'react';
import { FaHeart } from "react-icons/fa";
import { FavoritesContext } from './App';
import Navbar from './Navbar';

import Time from './Time';
import Footer from './Footer';
import Data from './DataCatalogue';
import styles from '../styles/Catalogue.module.css';

function Catalogue() {
  const { favoritList, setFavoritList } = useContext(FavoritesContext);

  const handleFavoriteClick = (product) => {
    setFavoritList((prevList) => {
      const isFavorited = prevList.some((item) => item.id === product.id);
      if (isFavorited) {
        return prevList.filter((item) => item.id !== product.id);
      } else {
        return [...prevList, product];
      }
    });
  };

  const handleAddToCart = (product) => {
  
    console.log(`${product.title} added to the cart.`);
  };

  return (
    <div>
      <Navbar />
      {/* <NavNavigation /> */}
      <Time />
      <div className={styles.mainContainer}>
        {Data.map((product) => {
          const { id, img, title, price } = product;
          const isFavorited = favoritList.some((item) => item.id === id);
          return (
            <div key={id} className={styles.BOX}>
              <div className={styles.CARD}>
                <div className={styles.IMG}>
                  <img src={img} alt={title} />
                </div>
                <div className={styles.DESC}>
                  <h1>{title}</h1>
                  <span>{price}DH</span>
                </div>
                <div
                  className={styles.HEART}
                  onClick={() => handleFavoriteClick(product)}
                >
                  <FaHeart className={`${styles.icon} ${isFavorited ? styles.favorited : ''}`} />
                </div>
              </div>
              <button
                className={styles.button}
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Catalogue;
