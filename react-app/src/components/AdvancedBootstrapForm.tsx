import React, {useState} from 'react';
import {Form, Button, Row, Col, Alert} from 'react-bootstrap';

const AdvancedBootstrapForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
        hobbies: [],
        additionalInfo: '',
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const handleChange = (e: { target: { name: any; value: any; type: any; checked: any; }; }) => {
        const {name, value, type, checked} = e.target;
        setFormData({...formData, [name]: value});
    }
    const validate = () => {
        const newErrors = {
            name: ''
        };
        if (!formData.name) newErrors.name = 'Name is required';

    }
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' placeholder='name@example.com'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as='textarea' rows={3}/>
            </Form.Group>
        </Form>
    )
}
export default AdvancedBootstrapForm;