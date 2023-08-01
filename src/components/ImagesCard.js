import { Card, Button, Form } from "react-bootstrap";
import { useState } from "react";

const CDN = process.env.REACT_APP_SUPABASE_IMAGES_CDN;


function ImagesCard(props) {
  const product = props.product;

  const [editing, setEditing] = useState(false);

  function formatDate (input) {
    let datePart = input.match(/\d+/g),
    year = datePart[0].substring(2), // get only two digits
    month = datePart[1], day = datePart[2];
  
    function getMonthName(monthNumber) {
      const date = new Date();
      date.setMonth(monthNumber - 1);
    
      return date.toLocaleString('en-US', { month: 'long' });
    }

    return day+' '+getMonthName(month)+' 20'+year;
  }

  const ukDate = formatDate(product.date)
  const imageLink = CDN + product.image_url
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        {editing == false ? (
          <>
            <Card.Title>{product.name}</Card.Title>
            <img 
              src={imageLink}
              width={200}
            />
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>{ukDate}</Card.Text>
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
