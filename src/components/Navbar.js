import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from './App';
import '../styles/Navbar.css';

// Assets
import jewelery from '../assets/jewelery.jpg';
import Logo from '../assets/Logo.jpg';
import favoris from '../assets/Heart.png';
import user from '../assets/user.png';
// import location from '../assets/location.png';
import shoppingBag from '../assets/shopping-bag.png';
import searchIcon from '../assets/search.png';

// Data
import DataCatalogue from './DataCatalogue';

function MyNavbar() {

  const { setSearchQuery, setFilteredProducts } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

 
  const handleSearch = (e) => {
    const query = e.target.value ? e.target.value.toLowerCase() : '';

    setInputValue(query); 
    setSearchQuery(query); 

    
    const filtered = DataCatalogue.filter((item) =>
      item.type && item.type.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered); 

    
    if (query.trim() !== '') {
      navigate('/SearchList');
    }
  };

  return (
    <>
      
      <img src={jewelery} className="jewelery_img" alt="Jewelry" />
      
      
      <Navbar expand="lg" className="fixed-top">
        <Container className="px-0">
          <Navbar.Brand className="navbar-brand-left">
            <a href="/Home" style={{ textDecoration: 'none' }}>
              <h1>SHINEORA</h1>
            </a>
          </Navbar.Brand>

         
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Looking For"
              className="me-2 search-bar"
              value={inputValue}
              onChange={handleSearch} 
            />
            <Nav.Link>
              <img
                src={searchIcon}
                className="searchIcon"
                onClick={handleSearch}
                alt="Search Icon"
              />
            </Nav.Link>
          </Form>

         
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
             
              <Nav.Link href="/">
                <img src={Logo} className="Logo" alt="Logo" />
              </Nav.Link>
              {/* <Nav.Link href="/">
                <img className="icon_Nav" src={location} alt="Location" />
              </Nav.Link> */}
              <Nav.Link href="/Connexion">
                <img className="icon_Nav" src={user} alt="User" />
              </Nav.Link>
              <Nav.Link href="/Favoris">
                <img className="icon_Nav" src={favoris} alt="Favorites" />
              </Nav.Link>
              <Nav.Link href="/">
                <img className="icon_Nav" src={shoppingBag} alt="Shopping Bag" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

     
      <div className="circul_title">
        
      </div>
    </>
  );
}

export default MyNavbar;
