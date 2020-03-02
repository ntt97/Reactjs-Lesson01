import React from 'react';
function Header() {
  return (
  
          <nav className="navbar navbar-inverse">
            <a href="#" className="navbar-brand">Bài 2: Component</a>
            <ul className="nav navbar-nav">
              <li >
                <a href="#">Trang chủ</a>
              </li>
              <li className="active">
                <a href="#">Danh mục sản phẩm</a>
              </li>
            </ul>
          </nav>
  
  );
}

export default Header;
