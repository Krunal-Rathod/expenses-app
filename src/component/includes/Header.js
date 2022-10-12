import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

class Header extends Component {
    componentDidMount = () => {
        $('.menu i').on('click', function() {
            $('.navigation-sub').slideToggle();
        })
    }
    render() {
        return (
            <>
                <header className="navigation">
                    <div className='container'>
                        <div className='menu'><i className="fa fa-bars" aria-hidden="true"></i></div>
                        <div className="navigation-sub">
                            <NavLink to='/home' className="item item-home">Home</NavLink>
                            <NavLink to='/about' className="item">About</NavLink>
                            <NavLink to='/expenses' className="item">Expenses</NavLink>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}

export default Header