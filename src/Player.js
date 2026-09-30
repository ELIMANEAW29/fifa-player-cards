import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({
  name = "Joueur inconnu",
  team = "Équipe inconnue",
  nationality = "Nationalité inconnue",
  jerseyNumber = 0,
  age = 0,
  image = "https://via.placeholder.com/300x300?text=Player",
}) => {
  return (
    <Card
      style={{
        width: "18rem",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
        border: "none",
        margin: "15px",
      }}
    >
      <Card.Img
        variant="top"
        src={image}
        alt={name}
        style={{ height: "280px", objectFit: "cover" }}
      />
      <Card.Body style={{ backgroundColor: "#111827", color: "white" }}>
        <Card.Title style={{ fontSize: "24px", fontWeight: "bold" }}>
          {name}
        </Card.Title>
        <Card.Text>⚽ <strong>Équipe :</strong> {team}</Card.Text>
        <Card.Text>🌍 <strong>Nationalité :</strong> {nationality}</Card.Text>
        <Card.Text>👕 <strong>Numéro :</strong> #{jerseyNumber}</Card.Text>
        <Card.Text>🎂 <strong>Âge :</strong> {age} ans</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
