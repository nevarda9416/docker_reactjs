// @ts-ignore
import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {configureStore} from "@reduxjs/toolkit";
import calculatorReducer from './CalculatorSlice';
import Calculator from "./Calculator";
import DisplayValue from "./DisplayValue";
import {Provider} from 'react-redux';

const store = configureStore({
    reducer: {
        calculator: calculatorReducer,
    }
});

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Calculator/>
                <DisplayValue/>
            </Provider>
            <div className="container mt-4">
                <h2 className="text-center mb-4">Registration Form</h2>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter first name"/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter last name"/>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Gender</Form.Label>
                        <div>
                            <Form.Check
                                inline
                                label="Male"
                                name="gender"
                                type="radio"
                                id="genderMale"
                            />
                            <Form.Check
                                inline
                                label="Female"
                                name="gender"
                                type="radio"
                                id="genderFemale"
                            />
                            <Form.Check
                                inline
                                label="Other"
                                name="gender"
                                type="radio"
                                id="genderOther"
                            />
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formCountry">
                        <Form.Label>Country</Form.Label>
                        <Form.Select>
                            <option>Select your country</option>
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Australia</option>
                            <option>India</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formTerms">
                        <Form.Check
                            type="checkbox"
                            label="I agree to the terms and conditions"
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" size="lg" className="w-100">
                        Register
                    </Button>
                </Form>
            </div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
