import { Container, Row, Col, } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Table from 'react-bootstrap/Table'
import Layout from './layouts/Layout';
import LandingPage from './components/views/Landing/LandingPage';
import Board from './components/views/Landing/Board';

function App() {
  return (
    <Layout>
      <Container style={{ minHeight: "75vh", }}>
        <Carousel style={{ height: '400px', background: 'rgba(125,125,125,0.3)' }}>
          <Carousel.Item interval={2000}>
            <img style={{ height: '400px' }}
              className="d-block w-100"
              src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160225_271%2Flydia1372_14563813480261bljU_JPEG%2Froad-672036_960_720.jpg&type=sc960_832"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 style={{ color: 'white' }}>드라이브 나라에 오신것을 환영합니다.</h3>
              <p>오픈기념 모든 서비스는 무료로 제공됩니다.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img style={{ height: '400px' }}
              className="d-block w-100"
              src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMDJfMTk2%2FMDAxNjA0MzI3OTA1MDg5.lH5apolqj6hE4cYJenZN-s8gAaP4Gkq1sSQZZxR_D2Ag.TyCfLmk3VHewcTVqvlGv2jIFsujezo6rKi8j1Lrj9S0g.JPEG.partnermin12%2F52.jpg&type=sc960_832"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3 style={{ color: 'white' }}>직선도로를 마음껏 달려보세요.</h3>
              <p>규정속도는 지켜주시는 센스!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={{ height: '400px' }}
              className="d-block w-100"
              src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140504_30%2Ftheredstone_13991327671489LVEr_JPEG%2F16.jpg&type=sc960_832"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 style={{ color: 'white' }}>산길 드라이브로 힐링하세요.</h3>
              <p>고속 와인딩은 위험해서 안돼요!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>


        <Row>
          <Col><LandingPage /></Col>
          <Col style={{ marginTop: '50px', overflow: 'scroll', height: '400px', }}>
            <Board />
            <Table striped bordered hover variant="dark"></Table></Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default App;