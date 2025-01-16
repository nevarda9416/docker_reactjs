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
import {useFormik} from "formik";
import * as Yup from "yup";
/**
 * Cùng test kết quả bằng cách hiện giá trị counter cùng 2 nút tăng giảm, mỗi lần ấn vào counter tăng/giảm 5 đơn vị, ta sẽ:
 * - Sử dụng useSelector của react-redux để lấy state counter từ store.
 * - Sử dụng useDispatcher để trả về function dispatch, truyền increment và decrement vào dispatch để gọi 2 action này.
 */
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "./actions/counter";

const store = configureStore({
    reducer: {
        calculator: calculatorReducer,
    }
});

function App() {
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
