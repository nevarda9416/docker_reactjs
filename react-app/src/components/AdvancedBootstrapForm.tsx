import React, {useState} from 'react';
import {
    Form,
    Button,
    Row,
    Col,
    Alert,
    InputGroup,
    DropdownButton,
    Dropdown,
    SplitButton,
    FloatingLabel
} from 'react-bootstrap';

const AdvancedBootstrapForm = () => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target),
            formDataObj = Object.fromEntries(formData.entries())
        console.log(formDataObj);
    };
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
        <Form onSubmit={handleSubmit}>
            <Button className="btn btn-primary btn-large centerButton" type="submit">Send</Button>
            <Form.Floating className="mb-3">
                <Form.Control id="floatingInputCustom" type="email" placeholder="name@example.com"/>
                <label htmlFor="floatingInputCustom">Email address</label>
            </Form.Floating>
            <Form.Floating>
                <Form.Control id="floatingPasswordCustom" type="password" placeholder="Password"/>
                <label htmlFor="floatingPasswordCustom">Password</label>
            </Form.Floating>
            <Row className="g-2">
                <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="Email address">
                        <Form.Control type="email" placeholder="name@example.com"/>
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="floatingSelectGrid" label="Works with selects">
                        <Form.Select aria-label="Floating label select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
            </Row>
            <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
                <Form.Control as="textarea" placeholder="Leave a comment here"/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control as="textarea" placeholder="Leave a comment here" style={{height: '100px'}}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control type="email" placeholder="name@example.com"/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password"/>
            </FloatingLabel>
            <InputGroup className="mb-3">
                <SplitButton
                    variant="outline-secondary"
                    title="Action"
                    id="segmented-button-dropdown-1">
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </SplitButton>
                <Form.Control aria-label="Text input with dropdown button" name="splitLeftButton"/>
            </InputGroup>
            <InputGroup className="mb-3">
                <Form.Control aria-label="Text input with dropdown button" name="splitRightButton"/>
                <SplitButton
                    variant="outline-secondary"
                    title="Action"
                    id="segmented-button-dropdown-2">
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </SplitButton>
            </InputGroup>
            <InputGroup className="mb-3">
                <DropdownButton variant="outline-secondary" title="Dropdown" id="input-group-dropdown-3">
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
                <Form.Control aria-label="Text input with 2 dropdown buttons" name="dropDown2Buttons"/>
                <DropdownButton variant="outline-secondary" title="Dropdown" id="input-group-dropdown-4">
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
            </InputGroup>
            <InputGroup className="mb-3">
                <DropdownButton variant="outline-secondary" title="Dropdown" id="input-group-dropdown-1">
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
                <Form.Control aria-label="Text input with dropdown button" name="dropDownLeftButton"/>
            </InputGroup>
            <InputGroup className="mb-3">
                <Form.Control aria-label="Text input with dropdown button" name="dropDownRightButton"/>
                <DropdownButton variant="outline-secondary" title="Dropdown" id="input-group-dropdown-2">
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
            </InputGroup>
            <InputGroup className="mb-3">
                <Form.Control placeholder="Recipient's username"
                              aria-label="Recipient's username with two button addons"/>
                <Button variant="outline-secondary">Button</Button>
                <Button variant="outline-secondary">Button</Button>
            </InputGroup>
            <InputGroup className="mb-3">
                <Button variant="outline-secondary">Button</Button>
                <Button variant="outline-secondary">Button</Button>
                <Form.Control aria-label="Example text with two button addons"/>
            </InputGroup>
            <InputGroup className="mb-3">
                <Form.Control placeholder="Recipient's username" aria-label="Recipient's username"
                              aria-describedby="basic-addon2"/>
                <Button variant="outline-secondary" id="button-addon2">
                    Button
                </Button>
            </InputGroup>
            <InputGroup className="mb-3">
                <Button variant="outline-secondary" id="button-addon1">
                    Button
                </Button>
                <Form.Control aria-label="Example text with button addon" aria-describedby="basic-addon1"/>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <InputGroup.Text>0.00</InputGroup.Text>
                <Form.Control aria-label="Dollar amount (with dot and two decimal places)"/>
            </InputGroup>
            <InputGroup className="mb-3">
                <Form.Control aria-label="Dollar amount (with dot and two decimal places)"/>
                <InputGroup.Text>$</InputGroup.Text>
                <InputGroup.Text>0.00</InputGroup.Text>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text>First and last name</InputGroup.Text>
                <Form.Control aria-label="First name"/>
                <Form.Control aria-label="Last name"/>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Checkbox aria-label="Checkbox for following text input"/>
                <Form.Control aria-label="Text input with checkbox"/>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Radio aria-label="Radio button for following text input"/>
                <Form.Control aria-label="Text input with radio button"/>
            </InputGroup>
            <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
                <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">Default</InputGroup.Text>
                <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
            </InputGroup>
            <InputGroup size="lg" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">Large</InputGroup.Text>
                <Form.Control aria-label="Large" aria-describedby="inputGroup-sizing-lg"/>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                <Form.Control placeholder="Recipient's username" aria-label="Recipient's username"
                              aria-describedby="basic-addon2"/>
            </InputGroup>
            <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon3">https://example.com/users/</InputGroup.Text>
                <Form.Control id="basic-url" aria-describedby="basic-addon3"/>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control aria-label="Amount (to the nearest dollar)"/>
                <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup>
            <InputGroup>
                <InputGroup.Text>With textarea</InputGroup.Text>
                <Form.Control as="textarea" aria-label="With textarea"/>
            </InputGroup>
            <Form.Label>Range</Form.Label>
            <Form.Range/>
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
            {['checkbox', 'radio'].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                    <Form.Check
                        id={`default-${type}`}
                        label={`default ${type}`}/>
                    <Form.Check
                        disabled
                        id={`disabled-default-${type}`}
                        label={`disabled ${type}`}/>
                </div>
            ))}
            <Form.Select size="lg">
                <option>Large select</option>
            </Form.Select>
            <br/>
            <Form.Select>
                <option>Default select</option>
            </Form.Select>
            <br/>
            <Form.Select size="sm">
                <option>Small select</option>
            </Form.Select>
            <br/>
            <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
            <br/>
            <Form.Label htmlFor="inputPassword">Password</Form.Label>
            <Form.Control type="password" id="inputPassword" aria-describedby="passwordHelpBlock"/>
            <Form.Text id="passwordHelpBlock" muted>
                Your password must be 8-20 characters long, contain letters and numbers,
                and must not contain spaces, special characters, or emoji.
            </Form.Text>
            <br/>
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
            <Form.Control type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled
                          readOnly/>
            <br/>
            <Form.Control type="text" placeholder="Disabled readonly input" aria-label="Disabled input example"
                          readOnly/>
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