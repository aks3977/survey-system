import React from 'react';
import emailjs from 'emailjs-com';
import '../styling/Form.css';
// import {withRouter} from 'react-router-dom';


function Form() {

    



    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_6yhp9k8', 'template_awdydyh', e.target, 'user_tjTznEsFN3owt9AuEJEbG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (

        <div className="container">

            <form onSubmit={sendEmail}>
                <input type="text" placeholder="Name" name="name" />
                <input type="email" placeholder="Email Address" name="email" />
                <input type="text" placeholder="Subject" name="subject" />
                <textarea placeholder="Your message" name="message"></textarea>
                <input className="form_input" type="submit" value="Send Message"></input>
            </form>

        </div>



    )
}


export default Form;
