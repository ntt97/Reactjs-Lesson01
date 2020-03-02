import React from 'react';
import Header from './components/Header'
import Product from './components/Product'
function App() {
  return (
    <div>    
      <Header />
      
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Product />
          <Product />

        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Product />
            <Product />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Product />
            <Product />

        </div>
      </div>
      
    </div>
  );
}

export default App;
