import React from 'react'

function Contact(props) {
    return (
        <div className={`container my-3 text-${props.mode==='dark'?'light':'dark'}`}>
            <h1>Connect With Us</h1>
            <p>Email : prakashjdh2019@gmail.com</p>
            <p>Phone : +91 6376154794 </p>
        </div>
    )
}

export default Contact
