import React from 'react'
import CreateHabit from './CreateHabit'
import { Row, Col, Button } from 'react-bootstrap'


import './overview.css'

const Overview = () => {
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <>
      <Row> 
        <Col md={2} className='onMobile'>
          <h4>Habits</h4>
        </Col>
      </Row>
      <Row>

        <Col className='d-flex justify-content-end'>
          <Button
            type='button'
            className='bg-danger mt-3 mobile'
            onClick={() => setModalShow(true)}>

            <i className='fa-solid fa-circle-plus'></i> &nbsp;&nbsp; New Habit
          </Button>
          
        </Col>
        <CreateHabit show={modalShow} onHide={() => setModalShow(false)} />
      </Row>
    </>
  )
}

export default Overview
