import React, { useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { useAuth } from '../contexts/AuthContext'
import app from '../firebase'
import Pagination from '../components/Pagination'

export default function Tips() {
    const history = useHistory()
    const { currentUser } = useAuth()
    const [tipsList, setTipsList] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(5)

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

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    const paginate = pageNumber => setCurrentPage(pageNumber)


    return (
        <>
            <Card style={{ border: "none", minWidth: "800px", display: "flex", justifyContent: "center", alignSelf: "center" }}>
                <h2 style={{ textAlign: "center" }}>Users Tips</h2>
                {tipsList ? tipsList.sort((a, b) => {
                    return a.date.localeCompare(b.date) === 0 ? a.time.localeCompare(b.time) : a.date.localeCompare(b.date) 
                }).slice(indexOfFirstPost, indexOfLastPost).map((tip, index) =>

                    <Card key={index} style={{ borderLeft: "none", borderRight: "none" }}>
                        <Card.Header style={{ border: "none", display: "flex", justifyContent: "space-around", alignItems: "center", background: "#fff", padding: "0rem 0.8rem" }}>
                            <h6 style={{ textAlign: "center", margin: "0", color: "gray" }}>{tip.date}</h6>
                            <h6 style={{ textAlign: "center", margin: "0", color: "gray" }}>{tip.time}</h6>
                        </Card.Header>
                        <h4 style={{ margin: "0", padding: "0", color: "#4D8A4F", fontWeight: "bold", textAlign: "center" }}>{tip.tipp}</h4>
                        <Card.Body style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0rem 0.8rem" }}>
                            <h3 style={{ margin: "0", fontWeight: "bold" }}>{tip.team1}</h3>
                            <h3 style={{ margin: "0", fontWeight: "bold" }}>{tip.team2}</h3>
                            <Button type="button" onClick={() => app.database().ref(`tips/${tip.id}`).remove()} style={{ display: currentUser && (currentUser.email === tip.userEmail || currentUser.email === 'abv@abv.bgr') ? "flex" : "none", position: "absolute", top: "0", right: "0", padding: "0 0.6rem", background: "#FF9100", borderColor: "#FF9100", fontWeight: "bold" }}>x</Button>
                        </Card.Body>
                    </Card>
                ) : ''}
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={tipsList ? tipsList.length : 0}
                    paginate={paginate}
                />
                <Button onClick={toAddTip}
                    style={{ display: !currentUser ? "none" : "flex", alignSelf: "center", margin: "0", padding: "12px 20px", background: "#FF9100", fontWeight: "bold", borderColor: "#FF9100" }}
                >Add Tip</Button>
            </Card>
        </>
    )
}

