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

    let errorsObj = {name:"",email:"",subject:"",message:""};
    const [errors,setErrors] = useState(errorsObj);

    function sendEmail(e) {
        e.preventDefault();
        let error = false;
        const errorObj = {...errorsObj};

        if(name === ''){
            errorObj.name = '* Name is required';
            error = true;
        }

        if(email === ''){
            errorObj.email = '* Email is required';
            error = true;
        }
        
        if(subject === ''){
            errorObj.subject = '* Subject is required';
            error = true;
        }

        if(message === ''){
            errorObj.message = '* Message is required';
            error = true;
        }

        setErrors(errorObj);

        if(!error){
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
        
    }
    return (
        <div>
            <Header/>
        <div className="container">

            <form onSubmit={sendEmail}>
                <input type="text" placeholder="Name" name="name" onChange={e => setName(e.target.value)} />
                {errors.name && <div style={{color:'red'}}>{errors.name}</div>}
                <input type="email" placeholder="Email Address" name="email" onChange={e => setEmail(e.target.value)}/>
                {errors.email && <div style={{color:'red'}}>{errors.email}</div>}
                <input type="text" placeholder="Subject" name="subject" onChange={e => setSubject(e.target.value)} />
                {errors.subject && <div style={{color:'red'}}>{errors.subject}</div>}
                <textarea placeholder="Your message" name="message" onChange={e => setMessage(e.target.value)}></textarea>
                {errors.message && <div style={{color:'red'}}>{errors.message}</div>}
                <input className="form_input" type="submit" value="Send Message"></input>
            </form>

        </div>
        </div>



    )
}


export default Form;
