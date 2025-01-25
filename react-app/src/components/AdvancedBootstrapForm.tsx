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
    return (
        <Form>
            <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
            <Form.Control type="color" id="exampleColorInput"
                defaultValue="#563d7c" title="Choose your color"/>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Default file input example</Form.Label>
                <Form.Control type="file"/>
            </Form.Group>
            <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Multiple files input example</Form.Label>
                <Form.Control type="file" multiple/>
            </Form.Group>
            <Form.Group controlId="formFileDisabled" className="mb-3">
                <Form.Label>Disabled files input example</Form.Label>
                <Form.Control type="file" disabled/>
            </Form.Group>
            <Form.Group controlId="formFileSm" className="mb-3">
                <Form.Label>Small file input example</Form.Label>
                <Form.Control type="file" size="sm"/>
            </Form.Group>
            <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Label>Large file input example</Form.Label>
                <Form.Control type="file" size="lg"/>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Email
                </Form.Label>
                <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue="email@example.com"/>
                </Col>
            </Form.Group>
            <Form.Control type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled readOnly/>
            <br/>
            <Form.Control type="text" placeholder="Disabled readonly input" aria-label="Disabled input example" readOnly/>    
            <br/>
            <Form.Control size="lg" type="text" placeholder="Large text"/>
            <br/>
            <Form.Control type="text" placeholder="Normal text"/>
            <br/>
            <Form.Control size="sm" type="text" placeholder="Small text"/>
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