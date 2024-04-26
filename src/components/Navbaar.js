import React from 'react'
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import FlagIcon from '@mui/icons-material/Flag';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Navbaar = () => {
  return (
    <header>
        <nav>
            <div className='left'>
                <div className='navLogo'>
                  
                     <img src='https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png' alt="IMAGE" /> 
                  
                </div>
                <div className='hover:border-2 font-bold justify-between items-center flex text-white'>
                     <LocationOnIcon />
                     <p>Update location</p> 
                </div>

                <div className='nav_searchbaar'>
                    <input type = "text" name="" id="" placeholder='Search in Amazon.in'/>
                    <div className='search_icon'>
                        <SearchIcon/>
                    </div>

                </div>
            </div>

            <div className='right flex justify-between items-center '>    
                <div className='hover:border-2 flex justify-between items-center text-white m-5'>
                     <FlagIcon/>
                     <p>EN</p>
                </div>
            
            <div className='dropdown hover:border-2 justify-between items-center w-1.8/5 text-white m-5 md:block'>
                <button className='dropbtn font-bold'>
                Hello,signIn<br></br> 
                Accounts and lists 
                </button>
                <div class="dropdown-content">
                <a href="#">Your Account</a>
                <a href="#">Your Orders</a>
                <a href="#">Your Wishlist</a>
                </div>
                </div>


                <div className='cart_btn'>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartIcon id='icon'/>
                    </Badge>
                    <p>Cart</p>
                </div>
             
                </div>
        </nav>
    </header>
  )
}

export default Navbaar