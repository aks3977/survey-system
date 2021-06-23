import React from 'react';
import Header from './components/Header';
import Homepage from './components/Homepage';
// import Form from './components/Form';
import { BrowserRouter as Router,Link, Route, Switch } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectSignedIn } from './features/userSlice';
import './App.css';
// import ProtectedRoute from './ProtectedRoute';
import Form from './components/Form';

function App() {
  const isSignedIn = useSelector(selectSignedIn);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Header />
            {!isSignedIn &&(<Homepage />)}
            {isSignedIn && (
            <Link to="/form">  
            <img className="add_icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAABHR0f4+Pjc3Nzy8vL7+/tPT0/MzMykpKSoqKiHh4f19fVjY2NLS0vf39/U1NSVlZUsLCxYWFhzc3N/f3/Dw8Pn5+dfX1+NjY20tLRoaGiXl5cTExM3Nzfs7OweHh4mJiavr6++vr4LCwswMDC61V6SAAADy0lEQVR4nO2di1LiQBBFHYUQkEeQh2gCouD//+IuxdYqazLTPclW30nd8wPeU5GZNMlc7u4IIYQQQgi5ZVHkeV48W8f4PwyqnfvLuRz3THO4fHL/cphk1rG64+WH3vVKjq2DdURe73fhfWEdrguqZsHfnKzjtWfjFXRuYh2wLY8BQederSO24yMo6FxuHbINC4Ggc0PrmC34uQvWMbKOGc9EJJjwgpqdhYbv1kljGQsF011PZZ/CCwfrqHEUYkHnBtZhowhv9l+8WIeN4qgwfLIOG8NUIehcirOiZ2iqIcVbN+l2fyXFESM0Nt2ysY4bQakyLK3jRrALa31jZx03gpHKMMX54l5leG8dNwIa0hAfGtIQHxrSEB8a0hAfGtIQHxrSEB8a0hAfGtIQHxrSEB8a0hAfGtIQHxrSEB8a0hAfGtIQHxrSEB8a0hAfGtIQn7nKcG4Vc3Cq1rPV/F7PfK8y3Ef9jdVsXZ3iexmmr7pDIXaUr9MIv8XaOreKjbYNZpiW34XNg0ZQUoWAh+LQe3oX8MpSKqhb55FYywQP1jlbMJMIprJF1CM4FK473IrHNiT4Zp2wNaHNP9Vl9IvHvl/C0EVsaFZLCv+u+G4drwM+fYID63Sd4Bun5J05yPjKClfW4TrBd7Zf3gqEjKcKZmidrSOaC+CeraN1RPO8L6vIw6d5Me3HZuHr1aJhKjQb9v9z2IfJ4oLnu1NNxRouZ8/8pHtehIpvuOjDeOj/wk3XIoeKb7bIrMN1gvdxm65GDhPvjN+LHTHw9KIHM3DgC9P0L2KwgVHTHAtJuP885UdPTlQrnfagL3qCmPK2L6zN3lrnjEb8ZpWmiRsJ0RPgK29JDhmVXPAuxfdNRtq3v6aV7sU0Y+bBp9s1ZKeZdW4hx5f4t/eKyXp1wP1uY/85Kpfb9r/ikj1EkCnfoI37I63d2tD/d4RpSEN8aEhDfGhIQ3xoSEN8aEhDfGhIQ3xoSEN8aEhDfGhIQ3xoSEN8aEhDfGhIQ3xoSEN8aEhDfGhIQ3xoSEN8aEhDfEYqw5F13Ah2KkNftxMqug7N0jpuBLqD78HTu4Dout8m1nEj0J3TzK3jRqCrRoupHDdHI3i0DhuFZqkJ1KqCojkTXliHjUN+btHTdAiNvLHI15mDjHg1PduelGyB9CKmuN3/QSaY6qfwgmw5jT+IDYDk/1TQt4JM+Ei/oOsfm5BimnczN/hrmRJeRr/wjFH75qbRpMiaLmOqtzI1DJc/m8IP42TvZOoZVN/WnHM51v4CVSI8F3meFz2VI4QQQgghLfgFpLRSoOw1LQoAAAAASUVORK5CYII="/>
            </Link>)}
          </Route>
          <Route exact path='/form'>
            <Form/>
          </Route>
          
        </Switch>
      </div>
   </Router>
  );
}

export default App;
