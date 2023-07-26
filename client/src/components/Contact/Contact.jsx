import React from 'react'
import './Contact.scss'
const Contact = () => {
  return (
    <div className='Contact'>
      <div className="wrapper">
        <span>
            Contact Us
        </span>
        <div className="email">
            <input type='text' placeholder='example@planetcode.com'/>
            <button>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
