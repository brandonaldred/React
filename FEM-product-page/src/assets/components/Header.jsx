import React from 'react'
import Menu from './Menu'
import logo from '../logo.svg'
import cart from '../icon-cart.svg'
import avatar from '../image-avatar.png'
import hamburger from '../icon-menu.svg'
import close from '../icon-close.svg'

export default function Header(props) {
    const [showMenu, setShowMenu] = React.useState(false)
    function toggleMenu() {
        setShowMenu(!showMenu)
    }
    if (showMenu && props.width > 999) {
        setShowMenu(false);
    }
    const itemCount = props.cartItems && props.cartItems.reduce((acc, item) => {
         return acc + item.qty
    }, 0)


    return(
        <header>
            <div className="header-elements">
               {props.width < 1000 && (<img className="menu-icon pointer" src={showMenu ? close : hamburger} onClick={toggleMenu} alt="menu" />)}
                <img className="pointer logo" src={logo} alt="Sneaker Company" />
                {props.width > 999 && (<Menu />)}
                <div className={`cart-container ${itemCount > 0 && "cart-icon"}`} data-items={itemCount ? itemCount : 0}><img onClick={props.toggleCart} className="pointer" src={cart} alt="Shopping Cart" /></div>
                <img className="account-avatar pointer" src={avatar} alt="Account" /> 
            </div>
            {showMenu && <Menu />}
            {showMenu && <div className="disabled" onClick={toggleMenu}></div>}
        </header> 
    )
}