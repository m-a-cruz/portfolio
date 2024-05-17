import * as React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';



export default function Education() {
  return (
    <>
    <div style={{ backgroundColor: '#3d5a80', height: '90vh'}}>
      <MDBContainer>
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="9" lg="7" xl="12" className="mt-5" >
            <MDBCard style={{ borderRadius: '20px', backgroundColor: '#293241'}}>
              <MDBCardBody>
                <MDBRow rowspan="60%,*" style={{color: 'white'}}>
                  <MDBCol>
                    <Timeline position="alternate">
                      <TimelineItem>
                        <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body2" color="#eae2b7">
                          2008-2015
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineConnector />
                          <TimelineDot>
                            <Avatar alt="Remy Sharp" src="/img/dmiacs.png" sx={{ width: 56, height: 56 }}/>
                          </TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                          <Typography variant="h6" component="span">
                            Don Manuel I. Abella Central School
                          </Typography>
                        </TimelineContent>
                      </TimelineItem>

                      <TimelineItem>
                        <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body2" color="#eae2b7">
                          2015-2019
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineConnector />
                          <TimelineDot>
                          <Avatar alt="Remy Sharp" src="/img/cnhs.png" sx={{ width: 56, height: 56 }} />
                          </TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                          <Typography variant="h6" component="span">
                            Cararayan National High School
                          </Typography>
                          <Typography>Special Science Class</Typography>
                        </TimelineContent>
                      </TimelineItem>

                      <TimelineItem>
                        <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body2" color="#eae2b7">
                          2019-2021
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineConnector />
                          <TimelineDot>
                          <Avatar alt="Remy Sharp" src="/img/ncshs.png" sx={{ width: 56, height: 56 }}/>
                          </TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                          <Typography variant="h6" component="span">
                            Naga City Science High School
                          </Typography>
                          <Typography>Science, Technology, Engineering, and Mathematics </Typography>
                        </TimelineContent>
                      </TimelineItem>

                      <TimelineItem>
                        <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body2" color="#eae2b7">
                          2015-2019
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineConnector />
                          <TimelineDot>
                          <Avatar alt="Remy Sharp" src="/img/biscast.png" sx={{ width: 56, height: 56 }}/>
                          </TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                          <Typography variant="h6" component="span">
                            Bicol State College of Applied Science and Technology
                          </Typography>
                          <Typography>Bachelor of Science in Architecture</Typography>
                        </TimelineContent>
                      </TimelineItem>

                      <TimelineItem>
                        <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body2" color="#eae2b7">
                          2015-2019
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineConnector />
                          <TimelineDot>
                          <Avatar alt="Remy Sharp" src="/img/ncf.png" sx={{ width: 56, height: 56 }}/>
                          </TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                          <Typography variant="h6" component="span">
                            Naga College Foundation Inc.
                          </Typography>
                          <Typography>Bachelor of Science in Computer Science</Typography>
                        </TimelineContent>
                      </TimelineItem>
                    </Timeline>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
    </>
  );
}