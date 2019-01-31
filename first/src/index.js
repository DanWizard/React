import React from 'react';
import ReactDOM from 'react-dom';

 
import App from './App';
ReactDOM.render(<App />, document.getElementById('root'));
// we can create a simple element to display on our HTML page
// const App = React.createElement("h1", null, "Hello World");
 
// with JSX we can perform the same React.createElement() call with the following:
//const App = <h1>Hello World</h1>;

// const App = (props) => {
//     return (
//         <div>
//             <h1>Hello Dojo</h1>
//             <p>Now we are getting somewhere!</p>
//         </div>
//     );
// }
// ReactDOM.render(<App />, document.getElementById("root"));

// and load our App into the DOM targeting the div located 'in /public/index.html'
// ReactDOM.render(App, document.getElementById('root'));