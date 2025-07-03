import React from 'react'
import Form from 'react-bootstrap/Form'
function Register() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name </Form.Label>
                <Form.Control type="text"  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Surname</Form.Label>
                <Form.Control type="text"  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email </Form.Label>
                <Form.Control type="text"  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Password </Form.Label>
                <Form.Control type="paswsword"  />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
               
                <Form.Control type="file" />
            </Form.Group>
        </Form>
    )
}

export default Register