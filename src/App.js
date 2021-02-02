import React from 'react';
//import { Router } from 'react-router';

import { BrowserRouter as Router} from 'react-router-dom';
import Feature from './components/Feature';
import Footer from './components/Footer';
import { GlobalStyle } from './components/globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';


function App() {
  return (
    <Router>
    <GlobalStyle />
    <Hero />
    <Products heading='Wybierz swoją ulubioną...' data={productData} />
    <Feature />
    <Products heading='Słodka uczta dla Ciebie...' data={productDataTwo} />
    <Footer />
    </Router>
  );
}

export default App;
