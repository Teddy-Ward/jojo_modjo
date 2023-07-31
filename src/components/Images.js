
import { Navbar, Container, Nav, Form, Row, Col, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import ImagesCard from './ImagesCard';
import { supabase } from './supabaseClient';


function Images({type}) {
  const [ images, setImages ] = useState([]);

  console.log(type);

  useEffect(() => {
    getImages();
  }, [])

  async function getImages() {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("category", type)
        .limit(10)
      if (error) throw error;
      if (data != null) {
        setImages(data);
      }
    } catch (error) {
      alert(error.message);
    }
  }



  console.log(images);


  return (
    <>
      <Container className='box-images'>
        <h3>Current Database Items</h3>
        <Row xs={1} lg={3} className="g-4">
          {images.map((image) => (
            <Col>
              <ImagesCard product={image} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Images;