import React from 'react'
import { useState } from 'react'
import { Form, Card, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import app from '../firebase'

export default function AddPartner() {
    const [url, setUrl] = useState('');
    const [img, setImg] = useState('');
    const history = useHistory();

    const changeUrl = (e) => {
        setUrl(e.target.value)
    }

    const changeImg = (e) => {
        setImg(e.target.value)
    }

    const testOne = () => {
        const dataRef = app.database().ref("partners")

        const tipData = {
            url,
            img
        }

        dataRef.push(tipData)
        history.push('/partners')
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Add partner</h2>
                    <Form onSubmit={testOne}>
                        <Form.Group id="partnerUrl">
                            <Form.Label>URL</Form.Label>
                            <Form.Control type="text" onChange={changeUrl} value={url} required />
                        </Form.Group>
                        <Form.Group id="partnerImg">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control type="text" onChange={changeImg} value={img} required />
                        </Form.Group>
                        <Button className="w-100" type="submit"
                            style={{ background: "#FF9100", fontWeight: "bold", borderColor: "#FF9100" }}>
                            Add partner
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}
