// import React from 'react';
// import ReactDOM from 'react-dom';
//
// function HelloMessage(props) {
//     return <h1>Hello {props.name}!</h1>;
// }
//
// const element = <HelloMessage name="Runoob"/>;
//
// ReactDOM.render(
//     element,
//     document.getElementById('app')
// );

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Count from './pages/Count.jsx';
//
// ReactDOM.render(
//     <Count/>,
//     document.getElementById('app')
// );

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'

import PrimaryLayout from './router'



const HomePage =() => <div>Home Page</div>
const UsersPage = () => <div>Users Page</div>

const App = () => (
    <BrowserRouter>
        <PrimaryLayout />
    </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('app'))


