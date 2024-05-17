import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import Button from 'react-bootstrap/Button';
function Contact() {
  return (
    <>
    <div style={{ backgroundColor: '#3d5a80', height: '90vh' }}>
    <MDBContainer className="container py-5 h-100" >
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: '15px', backgroundColor: '#eae2b7' }}>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                    className="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h4">Ma. Ana De La Cruz</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  @ProgrammerNgBuhayMo
                </MDBCardText>
                <div className="mb-4 pb-2">
                  <Button variant="contained" action href='https://www.facebook.com/maana.delacruz.5/'><FacebookIcon size="lg" /></Button>
                  <Button variant="contained" action href='https://www.instagram.com/d_maana/'><InstagramIcon size="lg" /></Button>
                  <Button variant="contained" action href='mailto:maanadelacruz@gbox.ncf.edu.ph'><EmailIcon size="lg" /></Button>
                </div>
                
                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                  <div>
                    <MDBCardText className="mb-1 h5">8471</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Wallets Balance</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">100,000</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">4751</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Total Transactions</MDBCardText>
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

export default Contact
