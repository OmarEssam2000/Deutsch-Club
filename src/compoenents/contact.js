import React from 'react';
import Header from './header'
import './contact.css'

function Contact() {
  
    return (  
            <div className="ContactSection">
                <Header />
                <form>
                  <div className='form-div'>
                  <h2>Send us a message</h2>
                  <div className='input'>
                    <label for="username">User Name</label>
                    <input name="username" type="text"/>
                  </div>
                  <div className='input'>
                    <label for="email">Email</label>
                    <input name="email" type="email"/>
                  </div>
                  <div className='input'>
                    <label for="subject">Subject</label>
                    <input name="subject" type="text"/>
                  </div>
                  <div className='subject'>
                    <label for="subject">Message</label>
                    <textarea name="subject" type="text">
                    </textarea>
                  </div>
                  <button>Send</button>
                  </div>
                  
                  
                </form>
            </div>         
    )
                

  
}

export default Contact;