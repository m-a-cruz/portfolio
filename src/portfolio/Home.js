import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <>
    <div style={{ backgroundColor: '#3d5a80', height: '90vh'}}>
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="9" lg="7" xl="9" className="mt-5" >
            <MDBCard style={{backgroundColor: '#293241', borderRadius: '30px' }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black" style={{marginTop: '15px'}}>
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '350px', borderRadius: '10px' }}
                      src='/img/dp2.jpg'
                      alt='Generic placeholder image'
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3" style={{marginTop: '100px'}}>
                    <MDBCardTitle style={{ fontFamily: 'Black Ops One', fontSize: '54px', color: 'white' }}>Ma. Ana De La Cruz</MDBCardTitle>
                    <MDBCardText style={{ fontFamily: 'Archivo Narrow', fontSize: '35px', color: "white" }} >
                    <Typewriter options={{
                        strings: ['Software Developer','Web Developer','Mobile Developer','Freelancer',],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                    </MDBCardText>
                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: '#efefef' }}>
                      <div>
                        <p className="small text-muted mb-1" style={{ fontFamily: 'Archivo Narrow', fontSize: '28px' }}>
                          “Programmer: A machine that turns coffee into code.”
                          </p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', fontFamily: 'Archivo Narrow', fontSize: '20px' }}>
                      <Button href='mailto:maanadelacruz@gbox.ncf.edu.ph'>Hire Me</Button>
                      <Button href='mailto:maanadelacruz@gbox.ncf.edu.ph' style={{ marginLeft: '10px' }}>Contact Me</Button>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
    </>
  )
}

export default Home;
