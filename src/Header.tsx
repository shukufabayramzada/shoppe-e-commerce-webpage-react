import './Header.scss';
import logo from './SHOPPE.svg';
import searchButton from './searching.svg'
import shopCart from './shopping cart.svg'
import accountIcon from './account icon.svg'
export const Header = () => {
    return(
        <header>
        <div className="headercontainer">
            <img className="logo" src={logo} alt="logo" />
            <div className="linkline">
                <nav>
                    <a href="#" className="nav-link">Shop</a>
                    <a href="#" className="nav-link">Blog</a>
                    <a href="#" className="nav-link">Our Story</a>
                </nav>
                <div className="line"></div>
                <div className="icons">
                    <button><img src={searchButton}/></button>
                    <button><img src= {shopCart} /></button>
                    <button><img src= {accountIcon} /></button>
                </div>
            </div>
            <div className="buttons">
                <button className="mobile-only"><img src="./assests/shopping cart.svg" /></button>
                <button className="mobile-only"><img src="./assests/Group.svg" /></button>
            </div>
        </div>
        <div className="input-group">
            <button className="mobile-only"><img src="./assests/new search icon.svg" alt="" /></button>
            <input type="text" className="mobile-only" placeholder="Search" />
        </div>
    </header>
    );

};