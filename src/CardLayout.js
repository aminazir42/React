import React from 'react';
import { Card } from 'react-bootstrap';
import './Navbar.css'; // Import CSS file for card layout

function CardLayout() {
  return (
    <div className="card-layout">
      <Card>
        <Card.Img
          variant="top"
          src="https://static.wixstatic.com/media/1987df_11dbcd7caabf40c5a170b75f75888d97~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85/Korean-Nail-Art-Inspiration-For-Your-Next-Appointment-_j3nnailedit.jpg"
          style={{ width: '50%', height: 'auto' }} // Adjust image size
        />
        <Card.Body>
          <Card.Title>Card 1</Card.Title>
          <Card.Text>
            This is a sample card with some content. You can customize it as needed.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://media.glamourmagazine.co.uk/photos/613895a2fe678a516c682f90/1:1/w_1920,h_1920,c_limit/koreanailspb_sq.jpg"
          style={{ width:'50%', height: 'auto' }} // Adjust image size
        />
        <Card.Body>
          <Card.Title>Card 2</Card.Title>
          <Card.Text>
            Another sample card with some content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img
         variant="top"
         src="https://www.itakeyou.co.uk/idea/wp-content/uploads/2022/02/271026562_941839393371535_8192126524496708989_n.jpg"
         style={{ width:'50%', height: 'auto' }} // Adjust image size"
        />
        <Card.Body>
          <Card.Title>Card 3</Card.Title>
          <Card.Text>
            Another sample card with some content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    
  );
}
export default CardLayout;
