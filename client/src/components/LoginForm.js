import { Form, Button, Alert, Card, Row} from 'react-bootstrap';
import { useState } from 'react';

function LoginForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('') ;
  
  const handleSubmit = (event) => {
      event.preventDefault();
      setErrorMessage('');
      
      if(username.trim() === '' || password.trim() === '' || password.length < 6)
        setErrorMessage('Invalid Username or Password.')
      else{
        const credentials = { username, password };
        props.login(credentials);
      }    
  }

  return (
    <Row  className="below-nav-center" >
      <Card border="secondary" className="mx-auto"  style={{width: '440px', height:'400px'}}>
        <Card.Header className="bg-success">
          Login
        </Card.Header>
        <Card.Body>
        <Form>
          {errorMessage ? <Alert variant='danger'>{errorMessage}</Alert> : ''}
          <Form.Group controlId='username'>
              <Form.Label >email</Form.Label>
              <Form.Control  type='email' value={username} placeholder="email" onChange={ev => setUsername(ev.target.value)} />
          </Form.Group>
          <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control  type='password' value={password} placeholder="password" onChange={ev => setPassword(ev.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>Login</Button>
        </Form>
        </Card.Body>
        </Card>
        </Row>
        
 
    )
}



export default LoginForm ;