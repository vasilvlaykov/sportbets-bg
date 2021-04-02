import React, { useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { useAuth } from '../contexts/AuthContext'
import app from '../firebase'

export default function Tips() {
    const history = useHistory()
    const { currentUser } = useAuth()
    const [tipsList, setTipsList] = useState()

    useEffect(() => {
        const tipsRef = app.database().ref('tips');
        tipsRef.on('value', (snapshot) => {
            const tips = snapshot.val();
            const tipsList = [];
            for (let id in tips) {
                tipsList.push({ id, ...tips[id] });
            }
            setTipsList(tipsList);
        })
    }, [])

    function toAddTip() {
        history.push('/add-tip')
    }

    return (
        <>
            <Card style={{ border: "none", minWidth: "800px", display: "flex", justifyContent: "center", alignSelf: "center" }}>
                <h2 style={{ textAlign: "center" }}>Потребителски Прогнози</h2>
                {tipsList ? tipsList.map((tip, index) =>
                    <Card style={{ borderLeft: "none", borderRight: "none" }}>
                        <Card.Header style={{ border: "none", display: "flex", justifyContent: "space-around", alignItems: "center", background: "#fff", padding: "0.2rem 0.8rem" }}>
                            <h6 style={{ textAlign: "center", margin: "0", color: "gray" }}>{tip.date}</h6>
                            <h6 style={{ textAlign: "center", margin: "0", color: "gray" }}>{tip.time}</h6>
                        </Card.Header>
                        <Card.Body style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.2rem 0.8rem" }}>
                            <h3 style={{ margin: "0", fontWeight: "bold" }}>{tip.team1}</h3>
                            <h4 style={{ margin: "0", color: "#4D8A4F", fontWeight: "bold" }}>{tip.tipp}</h4>
                            <h3 style={{ margin: "0", fontWeight: "bold" }}>{tip.team2}</h3>
                        </Card.Body>
                    </Card>
                ) : ''}
                <Button onClick={toAddTip}
                    style={{ display: !currentUser ? "none" : "flex", alignSelf: "center", margin: "0", padding: "12px 20px", background: "#FF9100", fontWeight: "bold", borderColor: "#FF9100" }}
                >Добави прогноза</Button>
            </Card>
        </>
    )
}

