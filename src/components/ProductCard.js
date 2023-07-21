import { Card, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { supabase } from "./supabaseClient";

function ProductCard(props) {
  const product = props.product;

  const [editing, setEditing] = useState(false);
  const [category, setCategory] = useState(product.category);
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [image_url, setImage_url] = useState(product.image_url);

  async function updateProduct() {
    try {
      const { data, error } = await supabase
        .from("products")
        .update({
          category: category,
          name: name,
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

  function deleteAll() {
    deleteProduct();
    deleteImage();
  }

  async function deleteProduct() {
    try {
      const { data, error } = await supabase
        .from("products")
        .delete()
        .eq("id", product.id);

      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  async function deleteImage(image_url) {
    const { error } = await supabase
      .storage
      .from('images')
      .remove(image_url)
    
    if(error) {
      alert(error);
    } else {
        updateProduct();
      }
  }

  const categoryList = [
    { label: "Set Category" },
    { label: "MSLA", value: "MSLA" },
    { label: "Spooo", value: "Spooo" },
  ];

  const listChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        {editing === false ? (
          <>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>{product.category}</Card.Text>
            <Card.Text>{product.image_url}</Card.Text>
            <Button variant="danger" onClick={() => deleteAll(product.image_url)}>
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
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              id="name"
              defaultValue={product.name}
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              type="text"
              id="description"
              defaultValue={product.description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Form.Label>Product Category</Form.Label>
            <select category={category} onChange={listChange}>
              {categoryList.map((option) => (
                <option category={option.value}>{option.label}</option>
              ))}
            </select>
            <Form.Label>Product Image</Form.Label>
            <Form.Control
              type="text"
              id="image_url"
              defaultValue={product.image_url}
              onChange={(e) => setImage_url(e.target.value)}
            />
            <br></br>
            <Button onClick={() => updateProduct()}>
              Update Product in Supabase DB
            </Button>

          </>
        )}            
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
