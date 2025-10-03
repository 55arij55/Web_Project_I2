import React from 'react';
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

function Login() {
  const navigate = useNavigate();

  return (
    <MDBContainer fluid>
      {/* Background image */}
      <div
        className="p-5 bg-image"
        style={{
          backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)',
          height: '300px'
        }}
      ></div>

      <MDBCard
        className="mb-5 p-5 shadow-5 mx-auto"
        style={{
          marginTop: '-100px',
          maxWidth: '600px',
          background: 'hsla(0, 0%, 100%, 0.8)',
          backdropFilter: 'blur(30px)'
        }}
      >
        <MDBCardBody className="p-5 text-center">
          <h2 className="fw-bold mb-5">Hello!</h2>

          {/* First / Last name side by side */}
          <MDBRow>
            {/* Ajoute ici les inputs si besoin */}
          </MDBRow>

          {/* Shorter email input */}
          <div className="d-flex justify-content-center">
            <MDBInput
              wrapperClass="mb-4 w-50"
              label="Email"
              id="form3"
              type="email"
            />
          </div>

          {/* Shorter password input */}
          <div className="d-flex justify-content-center">
            <MDBInput
              wrapperClass="mb-4 w-50"
              label="Password"
              id="form4"
              type="password"
            />
          </div>

          <div className="d-flex justify-content-center mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Subscribe to our newsletter"
            />
          </div>

          <MDBBtn className="w-100 mb-4" size="md" onClick={() => navigate("../home_page")}>
            Sign in
          </MDBBtn>

          <MDBBtn className="w-100 mb-4" size="md" onClick={() => navigate("/signup")}>
            Sign up
          </MDBBtn>

          <div className="text-center">
            <MDBBtn tag="a" color="none" className="mx-3" style={{ color: '#1266f1' }}>
              <MDBIcon fab icon="facebook-f" size="sm" />
            </MDBBtn>
            <MDBBtn tag="a" color="none" className="mx-3" style={{ color: '#1266f1' }}>
              <MDBIcon fab icon="twitter" size="sm" />
            </MDBBtn>
            <MDBBtn tag="a" color="none" className="mx-3" style={{ color: '#1266f1' }}>
              <MDBIcon fab icon="google" size="sm" />
            </MDBBtn>
            <MDBBtn tag="a" color="none" className="mx-3" style={{ color: '#1266f1' }}>
              <MDBIcon fab icon="github" size="sm" />
            </MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;