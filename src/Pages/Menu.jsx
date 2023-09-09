import React from 'react';
import MenuItem from '../Component/MenuItem';
import { MenuList } from '../Component/MenuList'; 
import "../AllCss/Menu.css"

const Menu = () => {
  return (
    <section className="Menu">
      <div className="MenuContainer">
        <div className="MenuTitle">
          <h2>Menu</h2>
          <p style={{ textAlign: "center" }}>Best Local Dishes</p>
        </div>
      </div>
      <div className="p">
        <div className="menuListContainer">
        <div className="menuList">
          {MenuList.map((menu, key) => {
            return (
              <MenuItem key={key} pic={menu.pic} name={menu.name} price={menu.price}/>
            );
          })}
        </div>
      </div></div>
      
    </section>
  );
};

export default Menu;