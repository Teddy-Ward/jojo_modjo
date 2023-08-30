
import { Navbar, Container, Nav, Form, Row, Col, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { supabase } from './supabaseClient';
import ReviewCard from './Reviews';


function Review() {
  const [ label, setLabel ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ image_url, setImage_url ] = useState("");
  const [ reviews, setReviews ] = useState([]);
  const [ uploading, setUploading ] = useState(false);

  useEffect(() => {
    getReviews();
  }, [])

  async function getReviews() {
    try {
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
      if (error) throw error;
      if (data != null) {
        setReviews(data); // [product1,product2,product3]
      }
    } catch (error) {
      alert(error.message);
    }
  }

  async function createReview() {
    try {
      const { data, error } = await supabase
        .from("reviews")
        .insert({

          label: label,
          description: description,
          image_url: image_url,

        })
        .single()
        
      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  console.log(reviews);

  async function uploadImage(event) {
    try {
      setUploading(true)

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = event.target.files[0]
      // const fileExt = file.name.split('.').pop()
      // const fileName = `${Math.random()}.${fileExt}`
      // const filePath = `${fileName}`
      const filePath = file.name

      let { error: uploadError } = await supabase.storage.from('images').upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      setImage_url(filePath)
    } catch (error) {
      alert(error.message)
    } finally {
      setUploading(false)
      alert("Upload Complete")
    }
  }


  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <h3>Create Review</h3>
            <Form.Label>Review Label</Form.Label>
            <Form.Control
              type="text"
              id="label"
              onChange={(e) => setLabel(e.target.value)}
            />
            <Form.Label>Review Description</Form.Label>
            <Form.Control
              type="text"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <Form.Label>Review image url</Form.Label>
            <Form.Group className="mb-3" style={{maxWidth: "500px"}}>
              <Form.Control type="file" accept="image/png, image/jpeg, video/mp4, video/x-m4v, video/*" onChange={(event) => uploadImage(event)}/>
            </Form.Group>
            <br></br>
            <Button onClick={() => createReview()}>Create Review</Button>
          </Col>
        </Row>
        <hr></hr>
        <h3>Current Database Items</h3>
        <Row xs={1} lg={3} className="g-4">
          {reviews.map((review) => (
            <Col>
              <ReviewCard reviews={review} /> 
            </Col>
          )).reverse()}
        </Row>
      </Container>
    </>
  );
}

export default Review;