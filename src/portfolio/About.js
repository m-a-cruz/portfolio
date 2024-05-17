import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Typewriter from 'typewriter-effect';

function About() {
  return (
    <>
    <div style={{ backgroundColor: '#3d5a80', height: '90vh'}}>
      <Container>
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="9" lg="7" xl="12" className="mt-5" >
            <MDBCard style={{ borderRadius: '20px', backgroundColor: '#293241'}}>
              <MDBCardBody>
                <MDBRow rowspan="60%,*" style={{color: 'white'}}>
                  <MDBCol style={{fontFamily: 'Gla', fontSize: '20px'}}>
                    <MDBCardTitle>
                      <p style={{ fontFamily: 'Black Ops One', fontSize: '30px', color: '#eae2b7'}}>ABOUT ME</p>
                    </MDBCardTitle>
                    <p style={{color: '#e0fbfc', fontFamily: "Archivo Narrow"}}>
                      I am a student from Naga College Foundation Inc. taking the course 
                      Bachelor of Science in Computer Science. I am currently in my sophomore 
                      year having basic knowledge with Python, C, C++, Larave, Postman,
                      JavaScript, CSS, and HTML programming languages.
                    </p>
                    <div style={{fontFamily: "Archivo Narrow", fontSize: '20px', color: '#eae2b7'}}>
                      <p><br />Name: <span style={{color: '#e0fbfc'}}>Ma. Ana De La Cruz</span></p>
                      <p>Age: <span style={{color: '#e0fbfc'}}>20</span></p>
                      <p>Gender: <span style={{color: '#e0fbfc'}}>Female</span></p>
                      <p>Birthday : <span style={{color: '#e0fbfc'}}>May 15, 2003</span></p>
                      <p>Course : <span style={{color: '#e0fbfc'}}>Bachelor of Science in Computer Science</span></p>
                      <p>School : <span style={{color: '#e0fbfc'}}>Naga College Foundation Inc.</span></p>
                      <p>Status : <span style={{color: '#e0fbfc'}}><Button variant="outline-primary">Active</Button>{' '}</span></p>
                    </div>
                  </MDBCol>

                  <MDBCol>
                    <MDBCardTitle>
                    <p style={{ fontFamily: 'Black Ops One', fontSize: '30px', color: '#eae2b7'}}>SKILLS</p>
                    </MDBCardTitle>

                    <MDBRow style={{marginTop: '50px'}}>
                      <MDBCol>
                        <MDBCardImage src='/img/python-logo.png' fluid style={{ width: '150px', height: '150px' }} />
                      </MDBCol>
                      <MDBCol>
                        <MDBCardImage src='/img/javascript-39395.png' fluid style={{ width: '150px', height: '150px' }} />
                      </MDBCol>
                      <MDBCol>
                        <MDBCardImage src='/img/php-logo-20748.png' fluid style={{ width: '150px', height: '150px' }} />
                      </MDBCol>
                    </MDBRow>

                    <MDBRow style={{marginTop: '100px'}}>
                      <MDBCol>
                        <MDBCardImage src='/img/logo-mysql-26295.png' fluid style={{ width: '150px', height: '150px' }} />  
                      </MDBCol>
                      <MDBCol>
                        <MDBCardImage src='/img/one-piece-logo-71.jpg' fluid style={{ width: '150px', height: '150px' }} />  
                      </MDBCol>
                      <MDBCol>
                        <MDBCardImage src='/img/logo.png' fluid style={{ width: '150px', height: '150px' }} />
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </Container>
    </div>
    </>
  )
};

export default About;

