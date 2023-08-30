import { Card, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { supabase } from "./supabaseClient";

function ReviewCard(props) {
  const review = props.review;

  const [editing, setEditing] = useState(false);
  const [label, setLabel] = useState(review.label);
  const [description, setDescription] = useState(review.description);
  const [image_url, setImage_url] = useState(review.image_url);


  async function updateReview() {
    try {
      const { data, error } = await supabase
        .from("reviews")
        .update({
          label: label,
          description: description,
          image_url: image_url,
        })
        .eq("id", product.id);

      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }


  async function deleteReview() {
    try {
      const { data, error } = await supabase
        .from("reviews")
        .delete()
        .eq("id", review.id);

      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }


  return (
    <Card style={{ width: "24rem", marginLeft: "auto", marginRight: "auto"}}>
      <Card.Body>
        {editing === false ? (
          <>
            <Card.Title>{review.label}</Card.Title>
            <Card.Text>{review.description}</Card.Text>
            <Card.Text>{review.image_url}</Card.Text>
            <Button variant="danger" onClick={() => deleteReview()}>
              Delete Product
            </Button>
            <Button variant="secondary" onClick={() => setEditing(true)}>
              Edit Product
            </Button>
          </>
        ) : (
          <>
            <h4>Editing Product</h4>
            <Button size="sm" onClick={() => setEditing(false)}>
              Go Back
            </Button>
            <br></br>
            <Form.Label>Review Label</Form.Label>
            <Form.Control
              type="text"
              id="label"
              defaultValue={review.label}
              onChange={(e) => setLabel(e.target.value)}
            />
            <Form.Label>Review Description</Form.Label>
            <Form.Control
              type="text"
              id="description"
              defaultValue={review.description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Form.Label>Product Image</Form.Label>
            <Form.Control
              type="text"
              id="image_url"
              defaultValue={review.image_url}
              onChange={(e) => setImage_url(e.target.value)}
            />
            <br></br>
            <Button onClick={() => updateReview()}>
              Update Product in Supabase DB
            </Button>

          </>
        )}            
      </Card.Body>
    </Card>
  );
}

export default ReviewCard;
