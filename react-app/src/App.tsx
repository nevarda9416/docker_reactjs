import './App.css';
import React, {Component} from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {configureStore} from "@reduxjs/toolkit";
import calculatorReducer from './CalculatorSlice';
import Calculator from "./Calculator";
import DisplayValue from "./DisplayValue";
import {Provider} from 'react-redux';
import {useFormik} from "formik";
import * as Yup from "yup";
import {BrowserRouter, Router, Routes, Route} from "react-router-dom";
import Dashboard from './components/Dashboard'
/**
 * Cùng test kết quả bằng cách hiện giá trị counter cùng 2 nút tăng giảm, mỗi lần ấn vào counter tăng/giảm 5 đơn vị, ta sẽ:
 * - Sử dụng useSelector của react-redux để lấy state counter từ store.
 * - Sử dụng useDispatcher để trả về function dispatch, truyền increment và decrement vào dispatch để gọi 2 action này.
 */
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "./actions/counter";
import Layout from "./Layout";
import Category from "./components/Category";
import Product from "./components/Product";
import Post from "./components/Post";
import AdvancedBootstrapForm from "./components/AdvancedBootstrapForm";

const store = configureStore({
    reducer: {
        calculator: calculatorReducer,
    }
});

function Home() {
    return <h1>Home Page</h1>;
}

function About() {
    return <h1>About Page</h1>;
}

function Contact() {
    return <h1>Contact Page</h1>;
}

function App() {
    const people = [
        "Creola Katherine Johnson: nhà toán học",
        "Mario José Molina-Pasquel Henríquez: nhà hóa học",
        "Mohammad Abdus Salam: nhà vật lý",
        "Percy Lavon Julian: nhà hóa học",
        "Subrahmanyan Chandrasekhar: nhà thiên văn học",
    ];
    const listItems = people.map((person) =>
        <li>{person}</li>
    );
    // Array object
    const author = [
        {
            id: 0,
            name: "Creola Katherine Johnson",
            professions: "nhà toán học",
        },
        {
            id: 1,
            name: "Mario José Molina-Pasquel Henríquez",
            profession: "nhà hóa học",
        },
        {
            id: 2,
            name: "Mohammad Abdus Salam",
            profession: "nhà vật lý",
        },
        {
            id: 3,
            name: "Percy Lavon Julian",
            profession: "nhà hóa học",
        },
        {
            id: 4,
            name: "Subrahmanyan Chandrasekhar",
            profession: "nhà thiên văn học",
        },
    ];
    const chemists = author.filter((person) => person.profession === "nhà hóa học");
    const listChemists = chemists.map((person) => (
        <li>
            <p>
                <b>{person.name}:</b> {person.profession}
            </p>
        </li>
    ));
    const counter = useSelector((state: any) => state.counter);
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            full_name: "",
            email: "",
            password: "",
            confirm_password: ""
        },
        validationSchema: Yup.object({
            full_name: Yup.string()
                .min(2, "Minium 2 characters")
                .max(15, "Maximum 15 characters")
                .required("Required!"),
            email: Yup.string()
                .email("Invalid email format")
                .required("Required!"),
            password: Yup.string()
                .min(8, "Minimum 8 characters")
                .required("Required!"),
            confirm_password: Yup.string()
                .oneOf([Yup.ref("password")], "Password's not match")
                .required("Required!")
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}/>
                        <Route path="category" element={<Category/>}/>
                        <Route path="product" element={<Product/>}/>
                        <Route path="post" element={<Post/>}>
                    </Route>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/advanced_form" element={<AdvancedBootstrapForm/>}/>
                </Routes>
            </BrowserRouter>
            <ul>{listItems}</ul>
            <ul>{listChemists}</ul>
            <h1>Validation with Formik + Yup</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label>Full Name</label>
                    <input type="text" name="full_name"
                           value={formik.values.full_name}
                           onChange={formik.handleChange}/>
                    {formik.errors.full_name && formik.touched.full_name && (
                        <p>{formik.errors.full_name}</p>
                    )}
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email"
                           value={formik.values.email}
                           onChange={formik.handleChange}/>
                    {formik.errors.email && formik.touched.email && (
                        <p>{formik.errors.email}</p>
                    )}
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password"
                           value={formik.values.password}
                           onChange={formik.handleChange}/>
                    {formik.errors.password && formik.touched.password && (
                        <p>{formik.errors.password}</p>
                    )}
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" name="confirm_password"
                           value={formik.values.confirm_password}
                           onChange={formik.handleChange}/>
                    {formik.errors.confirm_password && formik.touched.confirm_password && (
                        <p>{formik.errors.confirm_password}</p>
                    )}
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            <div>
                <button onClick={() => dispatch(increment(5))}>Increment</button>
                <button onClick={() => dispatch(decrement(5))}>Decrement</button>
                <h1>Counter {counter}</h1>
            </div>
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
