import React from 'react';
import emailjs from 'emailjs-com';

function Form() {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_6yhp9k8','template_awdydyh',e.target,'user_tjTznEsFN3owt9AuEJEbG')
            .then((result)=>{
                console.log(result.text);
            },(error)=>{
                console.log(error.text);
            });
            e.target.reset()
    }
    return (
        <div>
            <div className="container">
            <form onSubmit={sendEmail}>
                    <div>
                        <div>
                            <input type="text"  placeholder="Name" name="name"/>
                        </div>
                        <div>
                            <input type="email"  placeholder="Email Address" name="email"/>
                        </div>
                        <div>
                            <input type="text"  placeholder="Subject" name="subject"/>
                        </div>
                        <div>
                            <textarea placeholder="Your message" name="message"></textarea>
                        </div>
                        <div>
                            <input type="submit"  value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
