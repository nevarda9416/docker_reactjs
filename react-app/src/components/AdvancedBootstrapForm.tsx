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
            {['checkbox', 'radio'].map((type) => (
                <div key={type} className="mb-3">
                    <Form.Check id={`check-api-${type}`}>
                        <Form.Check.Input isValid/>
                        <Form.Check.Label>{`Custom api ${type}`}</Form.Check.Label>
                        <Form.Control.Feedback type="valid">
                            You dit it!
                        </Form.Control.Feedback>
                    </Form.Check>
                </div>
            ))}
            <Form.Check aria-label="option 1"/>
            <Form.Check type="radio" aria-label="radio 1"/>
            {['checkbox', 'radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                        reverse
                        name="group1"
                        type="radio"
                        id={`inline-${type}-1`}
                        label="1"/>
                    <Form.Check
                        reverse
                        name="group1"
                        id={`inline-${type}-2`}
                        label="2"/>
                    <Form.Check
                        reverse
                        disabled
                        id={`inline-${type}-3`}
                        label="3 (disabled)"/>
                </div>
            ))}
            {['checkbox', 'radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                        inline
                        name="group1"
                        type="radio"
                        id={`inline-${type}-1`}
                        label="1"/>
                    <Form.Check
                        inline
                        name="group1"
                        id={`inline-${type}-2`}
                        label="2"/>
                    <Form.Check
                        inline
                        disabled
                        id={`inline-${type}-3`}
                        label="3 (disabled)"/>
                </div>
            ))}
            <Form.Check
                type="switch"
                id="custom-switch"
                label="Check this switch"
            />
            <Form.Check
                disabled
                type="switch"
                id="disabled-custom-switch"
                label="disabled switch"
            />
            {['checkbox', 'radio'].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                    <Form.Check
                        type="radio"
                        id={`default-${type}`}
                        label={`default ${type}`}/>
                    <Form.Check
                        disabled
                        id={`disabled-default-${type}`}
                        label={`disabled ${type}`}/>
                </div>
            ))}            
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