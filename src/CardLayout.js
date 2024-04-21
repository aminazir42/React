import React from 'react';
import { Card } from 'react-bootstrap';
import './Navbar.css'; 

function CardLayout() {
  return (
    <>
    
    <div className="card-layout">
      <Card>
        <Card.Img
          variant="top"
          src="https://static.wixstatic.com/media/1987df_11dbcd7caabf40c5a170b75f75888d97~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85/Korean-Nail-Art-Inspiration-For-Your-Next-Appointment-_j3nnailedit.jpg"
          style={{ width: '50%', height: 'auto' }}
        />
        <Card.Body>
          <Card.Title>Art</Card.Title>
          <Card.Text>
          Nail art has evolved into a captivating form of self-expression, transforming ordinary nails into miniature canvases of creativity. From vibrant patterns to intricate designs, the world of nail fashion offers a myriad of possibilities to adorn fingertips with flair          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://media.glamourmagazine.co.uk/photos/613895a2fe678a516c682f90/1:1/w_1920,h_1920,c_limit/koreanailspb_sq.jpg"
          style={{ width:'50%', height: 'auto' }} 
        />
        <Card.Body>
          <Card.Title>Art</Card.Title>
          <Card.Text>
          With social media platforms serving as virtual runways, nail artists and enthusiasts alike share their latest creations, inspiring others to push the boundaries of conventional nail aesthetics.          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img
         variant="top"
         src="https://www.itakeyou.co.uk/idea/wp-content/uploads/2022/02/271026562_941839393371535_8192126524496708989_n.jpg"
         style={{ width:'50%', height: 'auto' }} 
        />
        <Card.Body>
          <Card.Title>Art</Card.Title>
          <Card.Text>
          Each stroke of polish and delicate placement of embellishments speaks volumes about personal style and artistic vision. Whether it's geometric shapes for a modern edge or delicate florals for a touch of elegance, nail art allows individuals to showcase their personality with every manicured detail.          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    </>
  );
}
export default CardLayout;
