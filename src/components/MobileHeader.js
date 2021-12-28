import React from 'react'
import logo from '../images/logo.png'
import search from '../images/search.png'

export default function MobileHeader() {
    return (
        <div className="header">
            <img src="https://img.icons8.com/material-outlined/24/000000/menu--v3.png" style={{ 'width': '2em', 'height': '2em' }} />
            <img src={logo} alt="logo" className="image-fluid logo" />
            <img src={search} alt="search Icon" className="image-fluid" style={{ 'width': '2em', 'height': '2em' }}
            />
            <h3 style={{ fontWeight: 'normal' }}>Cart 0</h3>
        </div>
    )
}
