import React from 'react';
import Product from './Product'
function Props() {
    return (
        <div>
            <nav className="navbar navbar-inverse">
                <a className="navbar-brand" href="http://localhost:3000/">Tìm hiểu Props</a>
            </nav>
            <div className ="container">
                <div className ="row">
                    <div className ="row">
                        <div className ="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <Product 
                                name = "Apple Iphone SE2 32G"
                                price ="10.000.000 VNĐ"
                                />
                            <Product 
                             name = "Samsung Note 10 64G"
                             price ="19.000.000 VNĐ"
                             />
                            <Product 
                             name = "Oppo R11 Pro 32G"
                             price ="17.000.000 VNĐ"
                             />
                            <Product  
                            name = "Google Pixel XL2"
                                price ="9.000.000 VNĐ"
                            />
                        </div>
                    </div>

                </div>

            </div>
        </div>



    );
}
export default Props;
