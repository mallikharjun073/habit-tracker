import { Nav, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <Nav className='bg-danger p-2'>
      <Container className='d-flex align-items-center'>
        <h3 className='fw-bold'>Habit tracker</h3>
      </Container>
    </Nav>
  )
}

export default Header
