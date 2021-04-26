import React from 'react'
import { useState } from 'react'
import { Form, Card, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import app from '../firebase'
import { useAuth } from '../contexts/AuthContext'

export default function Admin() {
    const [team1, setTeam1] = useState('');
    const [team1img, setTeam1img] = useState('');
    const [team2, setTeam2] = useState('');
    const [team2img, setTeam2img] = useState('');
    const [tipp, setTipp] = useState('');
    const [coef, setCoef] = useState('');
    const [bookmaker, setBookmaker] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const history = useHistory();
    const { currentUser } = useAuth();

    const userEmail = currentUser.email;

    const changeTeam1 = (e) => {
        setTeam1(e.target.value)
    }

    const changeTeam1img = (e) => {
        setTeam1img(e.target.value)
    }

    const changeTeam2 = (e) => {
        setTeam2(e.target.value)
    }

    const changeTeam2img = (e) => {
        setTeam2img(e.target.value)
    }

    const changeTip = (e) => {
        setTipp(e.target.value)
    }

    const changeCoef = (e) => {
        setCoef(e.target.value)
    }

    const changeBook = (e) => {
        setBookmaker(e.target.value)
    }

    const changeDate = (e) => {
        setDate(e.target.value)
    }

    const changeTime = (e) => {
        setTime(e.target.value)
    }

    const testOne = () => {
        const dataRef = app.database().ref("daily-tip")

        const tipData = {
            team1,
            team1img,
            team2,
            team2img,
            tipp,
            coef,
            bookmaker,
            date,
            time,
            userEmail
        }

        dataRef.update(tipData)
        history.push('/')
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Daily Tip</h2>
                    <Form onSubmit={testOne}>
                        <Form.Group style={{ display: "flex"}}>
                            <Form.Group style={{marginRight: "2rem"}}>
                                <Form.Group id="team1">
                                    <Form.Label>Home</Form.Label>
                                    <Form.Control type="text" onChange={changeTeam1} value={team1} required />
                                </Form.Group>
                                <Form.Group id="team1-img">
                                    <Form.Label>Home-Logo</Form.Label>
                                    <Form.Control type="text" onChange={changeTeam1img} value={team1img} required />
                                </Form.Group>
                                <Form.Group id="team2">
                                    <Form.Label>Away</Form.Label>
                                    <Form.Control type="text" onChange={changeTeam2} value={team2} required />
                                </Form.Group>
                                <Form.Group id="team2-img">
                                    <Form.Label>Away-Logo</Form.Label>
                                    <Form.Control type="text" onChange={changeTeam2img} value={team2img} required />
                                </Form.Group>
                            </Form.Group>
                            <Form.Group>
                                <Form.Group id="tipp">
                                    <Form.Label>Tip</Form.Label>
                                    <Form.Control type="text" onChange={changeTip} value={tipp} required />
                                </Form.Group>
                                <Form.Group id="coef">
                                    <Form.Label>Odd</Form.Label>
                                    <Form.Control type="number" onChange={changeCoef} value={coef} required />
                                </Form.Group>
                                <Form.Group id="bookmaker">
                                    <Form.Label>Bookmaker</Form.Label>
                                    <Form.Control type="text" onChange={changeBook} value={bookmaker} required />
                                </Form.Group>
                                <Form.Group style={{ display: "flex", justifyContent: 'space-between' }}>
                                    <Form.Group id="date">
                                        <Form.Label>Date</Form.Label>
                                        <Form.Control type="date" onChange={changeDate} value={date} required />
                                    </Form.Group>
                                    <Form.Group id="time">
                                        <Form.Label>Time</Form.Label>
                                        <Form.Control type="time" onChange={changeTime} value={time} required />
                                    </Form.Group>
                                </Form.Group>
                            </Form.Group>
                        </Form.Group>
                        <Button className="w-100" type="submit"
                            style={{ background: "#FF9100", fontWeight: "bold", borderColor: "#FF9100" }}>
                            Update
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}
