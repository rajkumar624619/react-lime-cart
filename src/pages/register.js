import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.css";

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);
  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

const Register = () => {
  const styles = {
    inputStyle: {
      width: '20%',
      padding: '15px',
      margin: '5px 0 22px 0',
      display: 'inline-block',
      border: 'none',
      background: '#f1f1f1'
    }
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'Right',
        height: '5vh',
        paddingLeft:'20px'
      }}
    >
      <h1>Register Product</h1>
      <label for="email"><b>Product Name</b></label>
      <input type="text" placeholder="Enter Product Name" name="pName" id="pName" style={styles.inputStyle}></input>      
      <label for="psw"><b>Product Cost</b></label>
      <input type="Text" placeholder="Enter Cost" name="pCost" id="pCost" required></input>
      <button type="submit" class="registerbtn">Submit</button>

    <Container className="p-3">
    <Container className="p-5 mb-4 bg-light rounded-3">
      <h1 className="header">Welcome To React-Bootstrap</h1>
      <ExampleToast>
        We now have Toasts
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ExampleToast>
    </Container>
  </Container>

    </div>
  );
};
  
export default Register;