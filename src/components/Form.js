import React,{useState} from 'react';
import emailjs from 'emailjs-com';
import '../styling/Form.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectSignedIn, setFormData } from '../features/userSlice';
import Header from './Header';
// import {withRouter} from 'react-router-dom';


function Form() {
    const isSignedIn = useSelector(selectSignedIn);
    const dispatch = useDispatch();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [subject,setSubject] = useState('');
    const [message,setMessage] = useState('');

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_6yhp9k8', 'template_awdydyh', e.target, 'user_tjTznEsFN3owt9AuEJEbG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        dispatch(setFormData({
            item1:name,
            item2:email,
            item3:subject,
            item4:message,
            id:Date.now()
        }))
    }
    return (
        <div>
            <Header/>
        <div className="container">

            <form onSubmit={sendEmail}>
                <input type="text" placeholder="Name" name="name" onChange={e => setName(e.target.value)} />
                <input type="email" placeholder="Email Address" name="email" onChange={e => setEmail(e.target.value)}/>
                <input type="text" placeholder="Subject" name="subject" onChange={e => setSubject(e.target.value)} />
                <textarea placeholder="Your message" name="message" onChange={e => setMessage(e.target.value)}></textarea>
                <input className="form_input" type="submit" value="Send Message"></input>
            </form>

        </div>
        </div>



    )
}


export default Form;
