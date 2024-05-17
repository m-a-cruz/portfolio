import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBar, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TextField } from '@mui/material';
import { FormControlLabel, Checkbox, FormControl, Modal } from '@mui/material';
import { Box,Typography} from '@mui/material';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';
import {MenuItem} from '@mui/material';




const Candidates = () => {
  const style = {
    borderRadius: 2,
    position: 'inherit',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: '#eab0ba',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
    const [positions, setPosition] = useState([]);
    const [candidates, setCandidate] = useState([]);
    const [users, setUsers] = useState([]);
    const response = JSON.parse(localStorage.getItem("token"));
    const headers = {
        Authorization: 'bearer' + response.data.authorisation.token,
        'Content-Type': 'application/json',
    }

    useEffect(() => {
        fetchPosition();
        fetchCandidate();
        fetchUsers();
    }, [])

    const fetchPosition = async () => {
        await axios.get('https://delacruz.bscs.tech/public/api/positions', { headers: headers },
        {
            headers: headers
        }).then(({ data }) => {
            setPosition(data)
        })
    }
    const fetchCandidate = async () => {
        await axios.get('https://delacruz.bscs.tech/public/api/candidates', { headers: headers },
        {
            headers: headers
        }).then(({ data }) => {
          setCandidate(data)
        })
    }
    const fetchUsers = async () => {
      await axios.get('https://delacruz.bscs.tech/public/api/users', { headers: headers },
      {
          headers: headers
      }).then(({ data }) => {
        setUsers(data)
      })
  };

    // Read Position Modal 
    const [read_id, setReadId] = useState(null);
    const [read_first_name, setReadFirstName] = useState('');
    const [read_last_name, setReadLastName] = useState('');
    const [read_position_name, setReadPositionName] = useState('');
    const [modalState, setModalState] = useState('');
    
    const readCandidates = async (id,last_name,first_name,position_name) => {
      setReadId(id);
      setReadLastName(last_name);
      setReadFirstName(first_name);
      setReadPositionName(position_name);

      console.log(id);
      console.log(last_name);
      console.log(first_name);
      console.log(position_name);

      setModalState("modal-read-candidate");
    }

    const handleClose = () => {
      setModalState('Close');
    }

    // Update Position Modal
    const [update_candidate_id, setUpdateCandidateId] = useState(null);
    const [update_first_name, setUpdateFirstName ] = useState('');
    const [update_last_name, setUpdateLastName] = useState('');
    const [update_position_id, setUpdatePositionId] = useState('');
    const [update_user_id, setUpdateUserId] = useState('');
    const [validationErrors, setValidationErrors] = useState({});
    const updateCandidates = async (id,last_name,first_name,user_id,position_id) => {
      setUpdateCandidateId(id);
      setUpdateFirstName(first_name);
      setUpdateLastName(last_name); 
      setUpdatePositionId(position_id);
      setUpdateUserId(user_id);
      
      setModalState("modal-update-candidate");
      
    }

    const updateCandidateInfo = async (e) => {
      e.preventDefault();
      const id = update_candidate_id;
      const first_name = update_first_name;
      const last_name = update_last_name; 
      const position_id = update_position_id;
      const user_id = update_user_id;

      const formData = new FormData();

      formData.append('first_name', first_name);
      formData.append('last_name', last_name);
      formData.append('user_id', user_id);
      formData.append('position_id', position_id);

      
        await axios.put(`https://delacruz.bscs.tech/public/api/candidate/${id}`, formData, { headers: headers }).then(({ data }) => {
          Swal.fire({
            text: 'Candidate has been Updated.',
            icon: 'success',
        })
          fetchCandidate();
          handleClose();
        }).catch((response) => {
          if (response.status === 422) {
            setValidationErrors(response.data.errors);
          } else {
            Swal.fire({
              text: response.data.message,
              icon: 'error',
              
            })
          }
        })
        
      }

      // Delete Position Modal
      const deleteCandidate = async (id) => {
        const isConfirm = await Swal.fire({
          title: 'Are you sure?',
          // text: "You won't be able to revert this!",
          text: "Di mo na mababalik ang nakaraan!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'

        }).then((result) => {
          Swal.fire(
                  'Successfully Deleted!',
                  'Makakamove on ka na!',
                  'success'
                )
          return result.isConfirmed;
        
      });

      if(!isConfirm){
        Swal.fire(
                'Congratulation!',
                'Marupok Ka Parin!',
                'error'
              )
              return;
      }
 
      await axios.delete(`https://delacruz.bscs.tech/public/api/candidate/${id}`, { headers: headers }).then(({ data }) => {
          
          fetchCandidate();
        }).catch(({response:{data}}) => {
          Swal.fire({
            text: data.message,
            icon: 'error',
          })
        })
      }

      // Create Position Modal
      const createCandidatesModal = () => {
        setModalState("modal-create-candidate");
        
        setFirstName('');
        setLastName('');
        setUserId('');
        setPositionId('');
      }
        const [first_name, setFirstName] = useState('');
        const [last_name, setLastName] = useState('');
        const [user_id, setUserId] = useState('');
        const [position_id, setPositionId] = useState('');
        
        const [validationError, setValidationError] = useState('');

        const createPosition = async (e) => {
          e.preventDefault();
          const formData = new FormData();
          formData.append('first_name', first_name);
          formData.append('last_name', last_name);
          formData.append('position_id', position_id);

          await axios.post('https://delacruz.bscs.tech/public/api/candidate', formData, { headers: headers }).then(({ data }) => {
            
            fetchCandidate();
            setFirstName('');
            setLastName('');
            setUserId('');
            setPositionId('');
            handleClose();

            Swal.fire({
              title: 'Candidate Successfully Created',
              icon: 'success',
              text: data.message
            })
          }).catch(({response}) => {
            if(response.status===422){
              setValidationError(response.data.errors);
            }else{
              Swal.fire({
                text: response.data.message,
                icon: 'error',
              })
            }
          })
        }
      
    
    return (
    <div>
      <Table striped bordered hover>
        <TableHead>
          <TableRow>
            <TableCell style={{fontSize: '22px'}}><center><strong>Candidate ID</strong></center></TableCell>
            <TableCell style={{fontSize: '22px'}}><center><strong>Candidate Name</strong></center></TableCell>
            <TableCell style={{fontSize: '22px'}}><center><strong>Position Name</strong></center></TableCell>
            {/* <TableCell style={{fontSize: '22px'}}><center><strong>Election</strong></center></TableCell> */}
            <TableCell style={{fontSize: '22px'}}><center><strong>Action
              <Button variant="primary" onClick={createCandidatesModal}>Create</Button>
              </strong></center>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {candidates.length > 0 && (
              candidates.slice(0, 10).map((column, key) => {
                const position = positions.find(position => position.id === column.position_id);
                return (
                  <TableRow key={key} style={{textAlignLast: 'center'}} >
                      <TableCell style={{fontSize: '20px'}}>{column.id}</TableCell>
                      <TableCell style={{fontSize: '20px'}}>{column.last_name}, {column.first_name}</TableCell>
                      <TableCell style={{fontSize: '20px'}}>{position ? `${position.position_name}` : 'User'}</TableCell>
                      {/* <TableCell style={{fontSize: '20px'}}>{election ? election.election_description : 'Position Not Found'}</TableCell> */}
                      <TableCell style={{fontSize: '20px'}}><center>
                          <Button variant="primary" onClick={() => readCandidates(column.id,column.last_name,column.first_name,position.position_name)}>Read</Button>
                          <Button variant="primary" onClick={() => updateCandidates(column.id,column.last_name,column.first_name,column.user_id,column.position_id)}>Update</Button>
                          <Button variant="primary" onClick={() => deleteCandidate(column.id)}>Delete</Button>
                          </center>
                      </TableCell>
                  </TableRow>
                );
              })
          )}
        </TableBody>
      </Table>

      {/* Read Candidates Modal */}
      <Modal open={modalState === "modal-read-candidate"}
      aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <TableContainer >
            <Table aria-label="simple table" >
              <TableHead>
                <TableRow>
                  <TableCell style={{fontSize: '22px'}}><center><strong>Candidate Details</strong></center></TableCell>
                </TableRow>
              <TableBody>
                  <TableRow>
                    <TableCell style={{width: '40%',fontSize: '20px'}}>Candidate ID: </TableCell>
                    <TableCell  style={{width: '100%',fontSize: '20px'}}>{read_id}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{fontSize: '20px'}}>First Name: </TableCell>
                    <TableCell style={{fontSize: '20px'}}>{read_first_name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{fontSize: '20px'}}>Last Name:</TableCell>
                    <TableCell style={{fontSize: '20px'}}>{read_last_name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{fontSize: '20px'}}>Position:</TableCell>
                    <TableCell style={{fontSize: '20px'}}>{read_position_name}</TableCell>
                  </TableRow>
                </TableBody>
              </TableHead>
            </Table>
          </TableContainer>
          <Button style={{float: 'right', marginTop: '20px', color: 'blue', fontWeight: 'bold'}} onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Modal>

      {/* Update Candidates Modal */}
      <Modal open={modalState === "modal-update-candidate"} 
      aria-labelledby="modal-modal-title" 
      aria-describedby="modal-modal-description">
        <Box sx={style}>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{fontSize: '22px'}}><center><strong>Edit Candidate</strong></center></TableCell>
                </TableRow>
                <TableBody>
                  <TableRow>
                    <TableCell style={{fontSize: '20px'}}>User:</TableCell>
                    <TableCell style={{fontSize: '20px'}} id="update_user_id" value={user_id} 
                    onChange={(event) => setUserId(event.target.value)}
                    >
                      {update_user_id}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{fontSize: '20px'}}>Candidate ID: </TableCell>
                    <TableCell style={{fontSize: '20px'}}>{update_candidate_id}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{fontSize: '20px'}}>First Name: </TableCell>
                    {/* <TableCell style={{fontSize: '20px'}}>{update_position_code}</TableCell> */}
                    <TableCell style={{fontSize: '20px'}}>
                      <TextField id="update_first_name" value={update_first_name} defaultValue={update_first_name} 
                      onChange={(event) => setUpdateFirstName(event.target.value)}/>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{fontSize: '20px'}}>Last Name:</TableCell>
                    {/* <TableCell style={{fontSize: '20px'}}>{update_position_name}</TableCell> */}
                    <TableCell style={{fontSize: '20px'}}>
                      <TextField id="update_last_name" value={update_last_name} defaultValue={update_last_name} 
                      onChange={(event) => setUpdateLastName(event.target.value)}/>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{fontSize: '20px'}}>Position:</TableCell>
                    {/* <TableCell style={{fontSize: '20px'}}>{update_election_id}</TableCell> */}
                    <TableCell style={{fontSize: '20px'}}>
                      <TextField sx={{width: '100%'}} 
                      id="update_election_id" select value={update_position_id} defaultValue={update_position_id} 
                      onChange={(event) => setUpdatePositionId(event.target.value)}>
                        {positions.map((position) => (
                          <MenuItem key={position.id} value={position.id}>
                            {position.position_name}
                          </MenuItem>
                        ))}
                      </TextField>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </TableHead>
              <Button style={{float: 'right', marginTop: '20px', color: 'blue', fontWeight: 'bold'}} onClick={updateCandidateInfo}>
                Update
              </Button>
              <Button style={{float: 'right', marginTop: '20px', color: 'blue', fontWeight: 'bold'}} onClick={handleClose}>
                Cancel
              </Button>
            </Table>
          </TableContainer>
        </Box>
      </Modal>

      {/* Create Candidate Modal */}
      <Modal open={modalState === "modal-create-candidate"}
      aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style} >
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{fontSize: '22px'}}><center><strong>Create Candidate</strong></center></TableCell>
                </TableRow>
                <TableBody>
                  <TableRow>
                    <TableCell style={{fontSize: '20px'}}>User:</TableCell>
                    <TableCell style={{fontSize: '20px'}}>
                      <TextField id="user_id" value={user_id} label="User"
                      onChange={(event) => setUserId(event.target.value)}/>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{width: '40%', fontSize: '20px'}}>First Name: </TableCell>
                    <TableCell style={{width: '60%', fontSize: '20px'}}>
                    <TextField id="first_name" value={first_name} label="First Name" required
                      onChange={(event) => setFirstName(event.target.value)}/>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{fontSize: '20px'}}>Last Name:</TableCell>
                    <TableCell style={{fontSize: '20px'}}>
                    <TextField id="last_name" value={last_name} label="Last Name" required
                      onChange={(event) => setLastName(event.target.value)}/>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{fontSize: '20px'}}>Position:</TableCell>
                    <TableCell style={{fontSize: '20px'}}>
                    <TextField sx={{width: '100%'}}
                    id="position_id" select value={position_id} label="Position" required
                      onChange={(event) => setPositionId(event.target.value)}>
                      {positions.map((position) => (
                          <MenuItem key={position.id} value={position.id}>
                            {position.position_name}
                          </MenuItem>
                        ))}
                      </TextField>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </TableHead>
            </Table>
          </TableContainer>
          <Button style={{float: 'right', marginTop: '20px', color: 'blue', fontWeight: 'bold'}} onClick={createPosition}>
            Create
          </Button>
          <Button style={{float: 'right', marginTop: '20px', color: 'blue', fontWeight: 'bold'}} onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  )
}

export default Candidates;
