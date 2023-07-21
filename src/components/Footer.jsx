import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container fluid>
      <div className='socials'>
        <ul>
          <li>
            <a title='fblink' href='facebook.com'><i className="fab fa-facebook-f"></i></a>
          </li>
          <li>
            <a title='fblink' href='facebook.com'><i className="fab fa-facebook-f"></i></a>
          </li>
          <li>
            <a title='fblink' href='facebook.com'><i className="fab fa-facebook-f"></i></a>
          </li>
        </ul>
      </div>
      <div className='copyright'>
          SED2023. All rights reserved
      </div>
    </Container>
  )
}

export default Footer