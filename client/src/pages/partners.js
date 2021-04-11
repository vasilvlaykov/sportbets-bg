import React, { useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { useAuth } from '../contexts/AuthContext'
import app from '../firebase'

export default function Partners() {
    const history = useHistory()
    const { currentUser } = useAuth()
    const [ partnersList, setPartnersList] = useState()

    useEffect(() => {
        const tipsRef = app.database().ref('partners');
        tipsRef.on('value', (snapshot) => {
            const partners = snapshot.val();
            const partnersList = [];
            for (let id in partners) {
                partnersList.push({ id, ...partners[id] });
            }
            setPartnersList(partnersList);
        })
    }, [])

    function toAddPartner() {
        history.push('/add-partner')
    }

    return (
        <>
            <Card style={{ border: "none", minWidth: "800px", display: "flex", justifyContent: "center", alignSelf: "center" }}>
                <h2 style={{ textAlign: "center" }}>Партньори</h2>
                {partnersList ? partnersList.map((partner, index) =>
                    <Card key={index} style={{ maxHeight: "60px", alignSelf: "center", margin:"0.5rem" }}>
                        <a href={partner.url} target="blank"><img src={partner.img} alt="partner-img" style={{height: "60px"}}/></a>
                        <Button type="button" onClick={() => app.database().ref(`partners/${partner.id}`).remove()} style={{ display: currentUser && currentUser.email === 'abv@abv.bgr' ? "flex" : "none", position: "absolute", top: "0", right: "0", padding: "0 0.6rem", background: "#FF9100", borderColor: "#FF9100", fontWeight: "bold" }}>x</Button>
                    </Card>
                ) : ''}
                <Button onClick={toAddPartner}
                    style={{ display: currentUser && currentUser.email === 'abv@abv.bgr' ? "flex" : "none", alignSelf: "center", margin: "0", padding: "12px 20px", background: "#FF9100", fontWeight: "bold", borderColor: "#FF9100" }}
                >Добави партньор</Button>
                            
            </Card>
        </>
    )
}

