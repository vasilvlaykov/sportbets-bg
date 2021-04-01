import React from "react"
import { Card } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"

export default function Dashboard() {
  const { currentUser } = useAuth()

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Профил</h2>
          <strong>Имейл:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3" style={{ background: "#FF9100", fontWeight: "bold", borderColor: "#FF9100" }}>
            Обнови профила
          </Link>
        </Card.Body>
      </Card>
    </>
  )
}