import React from 'react';
 
import Title from './title';
// import './App.css';
const App = (props) => {
    return (
        <div>
            <h1>Here's our fancy App.</h1>
            <p>Hey pretty cool!</p>
            <Title />
            <Title />
            <Title />
        </div>  
    );
};
export default App;