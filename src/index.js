import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Kennel } from "./components/Kennel";
import { AnimalCard } from "./components/animal/AnimalCard";
import { EmployeeCard } from "./components/EmployeeCard"; 
import { LocationCard } from "./components/Location";
import { CustomerCard } from "./components/Customer";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Kennel />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// AnimalCard()
// EmployeeCard()
// LocationCard()
// CustomerCard()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
