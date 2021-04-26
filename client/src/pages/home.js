import React, { useState, useEffect } from 'react'
import '../pages-styles/home.css'
import { useAuth } from '../contexts/AuthContext'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router'
import app from '../firebase'

const Home = () => {
    const { currentUser } = useAuth();
    const history = useHistory();
    const [dailyTip, setDailyTip] = useState();



    function editDaily() {
        history.push('/admin')
    }

    useEffect(() => {
        const tipRef = app.database().ref('daily-tip');
        tipRef.on('value', (snapshot) => {
            const dailyTip = snapshot.val();
            setDailyTip(dailyTip);
        })
    }, [])

    return (
        <div className="home-wrapper" style={{display: "flex", flexDirection: "column"}}>
            <section className="home-card">
                <section className="home-card-title">
                    <h1>Tip of the day</h1>
                </section>
                <section className="home-card-date">
                    <h4>Date: {dailyTip ? dailyTip.date : ''} {dailyTip ? dailyTip.time : ''}</h4>
                </section>
                <section className="home-card-main">
                    <section className="home-card-team">
                        <h2>{dailyTip ? dailyTip.team1 : ''}</h2>
                        <img src={dailyTip ? dailyTip.team1img : ''} alt="team1"/>
                    </section>
                    <section className="home-card-tipp">
                    {dailyTip ? dailyTip.tipp : ''}
                        <h1>Odd:{dailyTip ? dailyTip.coef : ''}</h1>
                        <img src={dailyTip ? dailyTip.bookmaker : ''} alt="bookmaker"/>
                    </section>
                    <section className="home-card-team">
                        <h2>{dailyTip ? dailyTip.team2 : ''}</h2>
                        <img src={dailyTip ? dailyTip.team2img : ''} alt="team2"/>
                    </section>
                </section>
            </section>
            <Button onClick={editDaily}
                style={{display: currentUser && currentUser.email === 'abv@abv.bgr' ? "flex" : "none" ,margin: "1rem", background: "#FF9100", fontWeight: "bold", borderColor: "#FF9100"}}
            >Edit Tip</Button>
        </div>
    )
}

export default Home;
