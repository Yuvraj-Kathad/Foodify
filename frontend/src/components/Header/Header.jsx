import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();
  
  const handleViewMenu = () => {
    // Navigate to home with hash to update URL
    navigate('/#explore-menu');
    // Delay to ensure navigation completes, then scroll
    setTimeout(() => {
      const element = document.getElementById('explore-menu');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Delicious meals delivered to your doorstep</p>
        <button onClick={handleViewMenu}>View Menu</button>
      </div>
    </div>
  )
}

export default Header

