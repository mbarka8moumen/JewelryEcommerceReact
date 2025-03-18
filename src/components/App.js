import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from './Home';
import Catalogue from './Catalogue';
import Connexion from './Connexion';
import SearchList from './SearchList';
import Favoris from './Favoris';
import Navbar from './Navbar';


export const SearchContext = createContext();
export const FavoritesContext = createContext();

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [favoritList, setFavoritList] = useState([]);


  const toggleFavorite = (product) => {
    setFavoritList((prevFavorites) => {
      if (prevFavorites.some(item => item.id === product.id)) {
        return prevFavorites.filter(item => item.id !== product.id);  
      }
      return [...prevFavorites, product];  
    });
  };

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, filteredProducts, setFilteredProducts }}>
      <FavoritesContext.Provider value={{ favoritList, setFavoritList, toggleFavorite }}>
        <BrowserRouter>
          <Navbar />
          <div>
            <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', padding: '10px', margin: 0 }}>
              <li><Link to='/Home'>Home</Link></li>
              <li><Link to='/Catalogue'>Catalogue</Link></li>
              <li><Link to='/Connexion'>Connexion</Link></li>
              <li><Link to='/SearchList'>Search Results</Link></li>
              <li><Link to='/Favoris'>Favoris</Link></li>
            </ul>
            <hr/>
          </div>
          <div className="main-route-place" >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Catalogue" element={<Catalogue />} />
              <Route path="/Connexion" element={<Connexion />} />
              <Route path="/SearchList" element={<SearchList />} />
              <Route path="/Favoris" element={<Favoris />} />
            </Routes>
          </div>
        </BrowserRouter>
      </FavoritesContext.Provider>
    </SearchContext.Provider>
  );
}

export default App;
