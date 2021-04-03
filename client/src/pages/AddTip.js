import React from 'react'
import { useState } from 'react'
import { Form, Card, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import app from '../firebase'
import { useAuth } from '../contexts/AuthContext'

export default function AddTip() {
    const [team1, setTeam1] = useState('');
    const [team2, setTeam2] = useState('');
    const [tipp, setTipp] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const history = useHistory();
    const { currentUser } = useAuth();

    const userEmail = currentUser.email;

    const changeTeam1 = (e) => {
        setTeam1(e.target.value)
    }

    const changeTeam2 = (e) => {
        setTeam2(e.target.value)
    }

    const changeTip = (e) => {
        setTipp(e.target.value)
    }

    const changeDate = (e) => {
        setDate(e.target.value)
    }

    const changeTime = (e) => {
        setTime(e.target.value)
    }

    const testOne = () => {
        const dataRef = app.database().ref("tips")

        const tipData = {
            team1,
            team2,
            tipp,
            date,
            time,
            userEmail
        }

        dataRef.push(tipData)
        history.push('/tips')
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Нова прогноза</h2>
                    <Form onSubmit={testOne}>
                        <Form.Group id="team1">
                            <Form.Label>Домакин</Form.Label>
                            <Form.Control type="text" onChange={changeTeam1} value={team1} required />
                        </Form.Group>
                        <Form.Group id="team2">
                            <Form.Label>Гост</Form.Label>
                            <Form.Control type="text" onChange={changeTeam2} value={team2} required />
                        </Form.Group>
                        <Form.Group id="tipp">
                            <Form.Label>Прогноза</Form.Label>
                            <Form.Control type="text" onChange={changeTip} value={tipp} required />
                        </Form.Group>
                        <Form.Group style={{ display: "flex", justifyContent: 'space-between' }}>
                            <Form.Group id="date">
                                <Form.Label>Дата</Form.Label>
                                <Form.Control type="date" onChange={changeDate} value={date} required />
                            </Form.Group>
                            <Form.Group id="time">
                                <Form.Label>Час</Form.Label>
                                <Form.Control type="time" onChange={changeTime} value={time} required />
                            </Form.Group>
                        </Form.Group>
                        <Button className="w-100" type="submit"
                            style={{ background: "#FF9100", fontWeight: "bold", borderColor: "#FF9100" }}>
                            Добави
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}
