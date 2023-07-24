
import { Navbar, Container, Nav, Form, Row, Col, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { supabase } from './supabaseClient';


function Product() {
  const [ category, setCategory ] = useState("");
  const [ name, setName ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ image_url, setImage_url ] = useState("");
  const [ date, setDate ] = useState("");
  const [ products, setProducts ] = useState([]);
  const [ uploading, setUploading ] = useState(false);

  console.log(category);
  console.log(name);
  console.log(description);
  console.log(image_url);
  console.log(date)

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
          image_url: image_url,
          date: date
        })
        .single()
        
      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  console.log(products);

  async function uploadImage(event) {
    try {
      setUploading(true)

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `${fileName}`

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

  const categoryList = [
    { label: 'Set Category'},
    { label: 'MSLA', value: 'MSLA' },
    { label: 'Spooo', value: 'Spooo'},
    { label: "PixelbyPixel", value: "PixelbyPixel" },
    { label: "Gallery", value: "Gallery" },
    { label: "Vtuber", value: "Vtuber"}
  ]

  const listChange = (event) => {
    setCategory(event.target.value);
  }

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <h3>Create Product For Supabase Database</h3>
            <Form.Label>Product category</Form.Label>
            <select category={category} onChange={listChange}>
              {categoryList.map((option) => (
                <option category={option.value}>{option.label}</option>
              ))}
            </select>
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
            <Form.Group className="mb-3" style={{maxWidth: "500px"}}>
              <Form.Control type="file" accept="image/png, image/jpeg" onChange={(event) => uploadImage(event)}/>
            </Form.Group>
            <Form.Label>Product Date</Form.Label>
            <Form.Control
              type="date"
              id="date"
              onChange={(e) => setDate(e.target.value)}
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