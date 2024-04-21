import Header from './components/Header'
import Overview from './components/Overview'
import HabitDisplay from './components/HabitDisplay'

import { Row, Col, Container } from 'react-bootstrap'


function App() {
  return (
    <>
      <Header />
      <Container>
        <Row className='mt-5'>
          <Col md={12}>
            {/* Overview component */}
            <Overview />
          </Col>
          <Col md={12}>
            {/*  HabitDetails Component*/}
            <HabitDisplay />
          </Col>
        </Row>
        <h4 className='text-light d-flex  mt-5  justify-content-center'>
          <span className='tag'></span>
        </h4>
      </Container>
    </>
  )
}

export default App
