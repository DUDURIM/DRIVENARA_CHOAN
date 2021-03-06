import React from 'react';
import { Modal, Button, Form, Container } from 'react-bootstrap';
import {GoogleLogin} from 'react-google-login';
import HorizontalLine from '../components/HorizonLine';

const SignInModal = ({ show, onHide }) => {
    return (
        <div>
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Container>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Sign in
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text> */}
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Button block varient="info" type="button" className="my-3">
                                Sign In
                            </Button>
                            <HorizontalLine text={"OR"} />
                            <GoogleLogin 
                                render={renderProps=> {
                                    return <Button className="my-3"
                                    onClick={renderProps.onClick} 
                                    disabled={renderProps.disabled}
                                    block
                                    style={{
                                        backgroundColor:"#176bef", 
                                        borderColor:"#176bef",
                                    }}
                                    >
                                        <i className="fab fa-google"></i>&nbsp; Sign In with Google
                                    </Button>
                                }}
                            />


                            {/* ???????????? */}
                            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}

                        </Form>
                    </Modal.Body>
                    {/* <Modal.Footer>
                        <Button variant="primary" type="button">
                            Submit
                        </Button>
                        <Button onClick={onHide.onHide}>Close</Button>
                    </Modal.Footer> */}
                </Container>
            </Modal>
        </div>
    )
}

export default SignInModal;