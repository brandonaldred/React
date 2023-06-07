import { useState } from 'react'

import '../../App.css'

export default function Header () {

    const [open, setOpen] = useState(false)
    function setMenu() {
      setOpen(!open)
    }
  
    const [search, setSearch] = useState(true)
    function setSearchType() {
      setSearch(!search)
    }

    return(
        <header>
      <div className="primary-bg">
        <div className="above-logo-marketing">
          <p>Free Shipping On Orders Over $99. <a href="#">Learn More {'>'}</a></p>
          <p className="header-phone">1-800-705-2215</p>
        </div>
      </div>
      {open && <div onClick={() => { setMenu() }} className="menu-cover"></div> }
      <div className="black-bg top-nav">
        <ul className="nav-menu">
          <li><p><a className="header-icons menu-icon" href="#" onClick={ ()=> { setMenu() } }>Menu</a></p></li>
          <li><p><a className="header-logo" href="#">AMain Hobbies</a></p></li>
          <li>
            <div className="header-search">
              <form>
                <input type="text" placeholder="What can we help you find?" />
              </form>
            </div>
          </li>
          <li><p><a className="header-icons account-icon" href="#">Account</a></p></li>
          <li><p><a className="header-icons contact-icon" href="#">Contact</a></p></li>
          <li><p><a className="header-icons chat-icon" href="#">Chat</a></p></li>
          <li><p><a className="header-icons cart-icon" href="#">Cart</a></p></li>
        </ul>
      </div>
      <div className="header-search  sm-search">
        <div className="search-select">
            <a onClick={ !search ? setSearchType : undefined } className={`search ${ search ? 'selected' : 'un-selected' }`}>Search</a>
            <a onClick={ search ? setSearchType : undefined } className={`parts-finder ${ search ? 'un-selected' : 'selected' }`}>Parts Finder</a>
        </div>
        {search &&
        <form>
          <input type="text" placeholder="What can we help you find?" />
        </form>
        }
        {!search &&
        <form>
        <select>
            <option value="Select Vehicle Type">Select Vehicle Type</option>
            <option value="Airplane">Airplane</option>
            <option value="Car">Car or Truck</option>
            <option value="Heli">Helicopter</option>
          </select>
          <select>
            <option value="Select Vehicle Brand">Select Vehicle Brand</option>
            <option value="Traxxas">Traxxas</option>
            <option value="Arrma">Arrma</option>
            <option value="Team Associated">Team Associated</option>
          </select>
          <select>
            <option value="Select Vehicle Brand">Select Vehicle Model</option>
            <option value="Traxxas">RC8B4</option>
            <option value="Arrma">RC8B4E</option>
            <option value="Team Associated">RC8TE</option>
          </select>
        </form>
        }
      </div>
      <div className={`nav-container lt-gray-bg ${!open && 'closed'}`}>
        <nav className="desktop-nav">
          <ul className="main-menu nav-menu">
            <li className="close-menu" onClick={ ()=> { setMenu() } }><span>Close Menu</span></li>
            <li className="no-hover"><h2>Categories</h2></li>
            <li><a href="#">Airplanes</a></li> 
            <li><a href="#">Cars & Trucks</a></li>
            <li><a href="#">Drones</a></li>
            <li><a href="#">FPV</a></li>
            <li><a href="#">Helicopters</a></li>
            <li><a href="#">Rock Crawlers</a></li>
            <li><a href="#">Toys & Hobbies</a></li>
            <li className="primary-bg highlighted-nav"><a href="#" className="menu-specials">Specials</a></li>
            <li className="primary-bg highlighted-nav"><a href="#">Blog</a></li>
            <li className="primary-bg highlighted-nav"><a href="#">Brands</a></li>
          </ul>
        </nav>
      </div>
    </header>
    )
}