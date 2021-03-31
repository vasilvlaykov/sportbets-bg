import React from 'react'
import '../pages-styles/home.css'

const Home = () => {
    return (
        <div className="home-wrapper">
            <section className="home-card">
                <section className="home-card-title">
                    <h1>Прогноза на деня</h1>
                </section>
                <section className="home-card-date">
                    <h4>Date: 12.12.12 12:12</h4>
                </section>
                <section className="home-card-main">
                    <section className="home-card-team">
                        <h2>Manchester United</h2>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/180px-Manchester_United_FC_crest.svg.png" alt="team1"/>
                    </section>
                    <section className="home-card-tipp">
                        Over 2.5
                        <h1>Коефициент: 2.35</h1>
                        <a href="https://sports.bwin.de/de/sports"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Bwin_logo.png" alt="bookmaker"/></a>
                    </section>
                    <section className="home-card-team">
                        <h2>Liverpool</h2>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/180px-Liverpool_FC.svg.png" alt="team2"/>
                    </section>
                </section>
            </section>
        </div>
    )
}

export default Home;
