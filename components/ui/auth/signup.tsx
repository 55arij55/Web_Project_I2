import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

function App() {
  const [phone, setPhone] = useState('');

  return (
    <MDBContainer fluid className="my-5">
      <MDBRow className="g-0 align-items-center">
        {/* Left column with smaller card */}
        <MDBCol col="6" className="d-flex justify-content-center">
          <MDBCard
            className="my-5 cascading-right mx-auto"
            style={{
              maxWidth: '500px',
              background: 'hsla(0, 0%, 100%, 0.55)',
              backdropFilter: 'blur(30px)'
            }}
          >
            <MDBCardBody className="p-4 shadow-5 text-center">
              <h2 className="fw-bold mb-5">Sign up now</h2>

              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="First name"
                    id="form1"
                    type="text"
                  />
                </MDBCol>

                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Last name"
                    id="form2"
                    type="text"
                  />
                </MDBCol>
              </MDBRow>

              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="form3"
                type="email"
              />

              {/* 📱 Phone number input with region selector */}
              <div className="mb-4">
                <label style={{ display: "block", marginBottom: "8px" }}>Phone number</label>
                <PhoneInput
                  country={"fr"} // default country
                  value={phone}
                  onChange={setPhone}
                  inputStyle={{ width: "100%" }}
                />
              </div>

              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form4"
                type="password"
              />

              <MDBInput
                wrapperClass="mb-4"
                label="Confirm Password"
                id="form5"
                type="password"
              />

              <div className="d-flex justify-content-center mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Subscribe to our newsletter"
                />
              </div>

              <MDBBtn className="w-100 mb-4" size="md">
                Sign up
              </MDBBtn>

              <div className="text-center">
                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: '#1266f1' }}
                >
                  <MDBIcon fab icon="facebook-f" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: '#1266f1' }}
                >
                  <MDBIcon fab icon="twitter" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: '#1266f1' }}
                >
                  <MDBIcon fab icon="google" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: '#1266f1' }}
                >
                  <MDBIcon fab icon="github" size="sm" />
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        {/* Right column with image */}
        <MDBCol col="6">
          <img
            src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
            className="w-100 rounded-4 shadow-4"
            alt=""
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
