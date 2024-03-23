import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import '../page-css/AboutPage.css'

export default function AboutPage() {
  return (
    <>
      <section className='intro-section'>
        <div className="page-title">
          <h1>About Us</h1>
        </div>
        <Container fluid className='container introduction-container'>
          <Row>
            <Col xm={6} className='title-container'>
              <div className='intro-font'>
                <h5>Who are we?</h5>
              </div>
              <div className='intro-font'>
                <h1><span>Financial </span>Frontier</h1>
              </div>
              <div className='intro-font'>
                <h4>An <span>interactive</span> & <span>entertaining</span> gateway to financial literacy</h4>
              </div>
            </Col>
            <Col xm={4}>
              <div className='img-container'>
                <img src='../Resources/introduction-intro.png'/>
              </div>
            </Col>
          </Row>
        </Container>
      
        <Container fluid className='container introduction-container'>
          <Row>
              <Col xm={6} className='title-container'>
                <div className='intro-font'>
                  <h5><span>Financial </span>Frontier</h5>
                </div>
                <div className='intro-font'>
                  <h1>Education</h1>
                </div>
                <div className='intro-font'>
                  <h4>By incorporating gamification, we enhance the learning experience of financial literacy.</h4>
                </div>
                <div className='button-container'>
                  <Button variant="view-more">
              VIEW MORE <i className="bi bi-chevron-right"></i>
            </Button>
                </div>
              </Col>
              <Col xm={4}>
                <div className='img-container'>
                  <img src='../Resources/education-intro.svg'/>
                </div>
              </Col>
            </Row>
        </Container>

        <Container fluid className='container introduction-container'>
          <Row>
              <Col xm={6} className='title-container'>
                <div className='intro-font'>
                  <h5><span>Financial </span>Frontier</h5>
                </div>
                <div className='intro-font'>
                  <h1>Challenge</h1>
                </div>
                <div className='intro-font'>
                  <h4>Trade real-time stocks, track performance, and compete for prizes in a dynamic virtual trading environment.</h4>
                </div>
                <div className='button-container'>
                  <Button variant="view-more">
              VIEW MORE <i className="bi bi-chevron-right"></i>
            </Button>
                </div>
              </Col>
              <Col xm={4}>
                <div className='img-container'>
                  <img src='../Resources/challenge-intro.svg'/>
                </div>
              </Col>
            </Row>
        </Container>
      </section>
      <section className='intro-section subscription'>
        <Container fluid>
            <Row>
              <Col xm={6} className='title-container'>
                <div className='intro-font'>
                  <h5><span>Financial </span>Frontier</h5>
                </div>
                <div className='intro-font'>
                  <h1>Our Subscription Plan</h1>
                </div>
                <div className='intro-font'>
                  <h4>Premium brings you more!</h4>
                </div>
                <div className='button-container'>
                  <Button variant="view-more">
              UPGRADE NOW <i className="bi bi-chevron-right"></i>
            </Button>
                </div>
              </Col>
              <Col xm={4}>
                <div className='img-container'>
                  <img src='../Resources/subscription-intro.svg'/>
                </div>
              </Col>
            </Row>
          </Container>
      </section>
    </>
  );
}
