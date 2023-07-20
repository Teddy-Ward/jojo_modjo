
import { Navbar, Container, Nav, Form, Row, Col, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { supabase } from './supabaseClient';


function Product() {
  const [ category, setCategory ] = useState("");
  const [ name, setName ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ image_url, setImage_url ] = useState("");
  const [ products, setProducts] = useState([]);

  console.log(category);
  console.log(name);
  console.log(description);
  console.log(image_url);

  useEffect(() => {
    getProducts();
  }, [])

  async function getProducts() {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .limit(10)
      if (error) throw error;
      if (data != null) {
        setProducts(data); // [product1,product2,product3]
      }
    } catch (error) {
      alert(error.message);
    }
  }

  async function createProduct() {
    try {
      const { data, error } = await supabase
        .from("products")
        .insert({
          category: category,
          name: name,
          description: description,
          image_url: image_url
        })
        .single()
        
      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  console.log(products);

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <h3>Create Product For Supabase Database</h3>
            <Form.Label>Product category</Form.Label>
            <Form.Control
              type="text"
              id="category"
              onChange={(e) => setCategory(e.target.value)}
            />
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              type="text"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <Form.Label>Product image url</Form.Label>
            <Form.Control
              type="text"
              id="image_url"
              onChange={(e) => setImage_url(e.target.value)}
            />
            <br></br>
            <Button onClick={() => createProduct()}>Create Product in Supabase DB</Button>
          </Col>
        </Row>
        <hr></hr>
        <h3>Current Database Items</h3>
        <Row xs={1} lg={3} className="g-4">
          {products.map((product) => (
            <Col>
              <ProductCard product={product} /> {/* product={product} */}
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Product;