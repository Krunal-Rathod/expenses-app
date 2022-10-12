import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='container'>
          <h4>Footer</h4>
          <ul className="d-flex list-unstyled mb-0">
            <li>
              <Link to='/'><i className="fa fa-facebook" aria-hidden="true"></i></Link>
            </li>
            <li>
              <Link to='/'><i className="fa fa-twitter" aria-hidden="true"></i></Link>
            </li>
            <li>
              <Link to='/'><i className="fa fa-instagram" aria-hidden="true"></i></Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer