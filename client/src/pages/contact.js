import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import { Form, Card, Button, Alert } from 'react-bootstrap'

export default function Contact() {
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_5ww1z25', 'template_zjbamcf', e.target, 'user_QvjszyF6o78wF7Ib3Bzyd')
            .then((result) => {
                setMessage('Message sent')
                setError('')
            }, (error) => {
                setError('Message not sent')
            });

        e.target.reset()
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Contact</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={sendEmail}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" required name="email" />
                        </Form.Group>
                        <Form.Group id="username">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" required name="username" />
                        </Form.Group>
                        <Form.Group id="subject">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" required name="subject" />
                        </Form.Group>
                        <Form.Group id="message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control type="text" required rows={4} as="textarea" name="message"
                                style={{ minWidth: "400px", resize: "vertical" }}
                            />
                        </Form.Group>
                        <Button className="w-100" type="submit"
                            style={{ background: "#FF9100", fontWeight: "bold", borderColor: "#FF9100" }}>
                            Send
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}
