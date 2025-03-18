import React, { useContext } from 'react';
import Navbar from './Navbar';
import NavNavigation from './NavNavigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import styles from '../styles/SearchList.module.css'; 
import { SearchContext } from './App';

function ResultsPage() {
  const { filteredProducts, searchQuery } = useContext(SearchContext);

  return (
    <>
      <Navbar />
      <NavNavigation />
      <div className={styles.resultsPage}> 
        <h2>Search Results for "{searchQuery}"</h2>
        {filteredProducts.length > 0 ? (
          <div className={styles.mainContainer}> 
            {filteredProducts.map((product) => (
              <div key={product.id} className={styles.BOX}> 
                <div className={styles.CARD}> 
                  <div className={styles.IMG}> 
                    <img src={product.img} alt={product.title} />
                  </div>
                  <div className={styles.DESC}> 
                    <h1>{product.title}</h1>
                    <span>{product.price}</span>
                    <p>{product.type}</p>
                    <button className={styles.button}>Add to Cart</button> 
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No products match your search </p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ResultsPage;
