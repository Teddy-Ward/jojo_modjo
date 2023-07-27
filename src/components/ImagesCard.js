import { Card, Button, Form } from "react-bootstrap";
import { useState } from "react";

function ImagesCard(props) {
  const product = props.product;

  const [editing, setEditing] = useState(false);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        {editing == false ? (
          <>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>{product.category}</Card.Text>
            <Card.Text>{product.image_url}</Card.Text>
            <Card.Text>{product.date}</Card.Text>

          </>
        ) : (
          <>
            <h4>Editing Product</h4>


          </>
        )}            
      </Card.Body>
    </Card>
  );
}

export default ImagesCard;
