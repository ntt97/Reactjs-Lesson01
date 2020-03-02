import React from 'react';
function Product(props) {
    // var product = {
    //     id: 1,
    //     name:"Iphone SE2",
    //     price:"10.000.000",
    //     discount:"0%",
    //     status: true
    // }
    
    return (
            
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="thumbnail">
                    <img src="https://fptshop.com.vn/uploads/images/tin-tuc/101840/Originals/2.jpg" alt="SE2" />
                    <div className="caption">
                        <h3>{props.name}</h3>
                        <p>
                            {props.price}
                        </p>
                        <p>
                            <a href="#" className="btn btn-primary">Mua ngay</a>
                            <a href="#" className="btn btn-default">Thêm vào giỏ hàng</a>
                        </p>
                    </div>
                </div>
            </div>
            


            );
}

export default Product;
