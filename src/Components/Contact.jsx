import React from 'react'

export default function Contact() {
    return (
        <div id='contact'>
            <h1>Book your table</h1>
            <form action="">
                <input type="text" placeholder='Full Name'/>
                <input type="email" placeholder='Type your E-Mail'/>
                <textarea  placeholder='Write here.......'></textarea>
                <input type="submit" value='BOOK'/>
            </form>
        </div>
    )
}
