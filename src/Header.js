import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import './Header.css';
import { useStateValue } from './StateProvider';
import { auth } from 'firebase';
import { getTotalItems } from './reducer';

function Header() {


    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
        if (user) {
            auth().signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"/>
            </Link>
            
        
            <div className="header__search">
                <input 
                    className="header__searchInput"
                    type="text"
                />
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <Link to={!user && '/login'} >
                    <div className="header__option header__login" onClick={handleAuthenticaton}>
                        <span className="header__optionLineOne">
                            Hello,  
                            {
                                user ? user.email : 'Guest'
                            }
                        </span>
                        <span className="header__optionLineTwo">{ user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link to='/orders'>           
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Order</span>
                    </div>
                </Link>            
                
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingCartIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            {getTotalItems(basket)}
                        </span>
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default Header;
