import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBar, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TextField } from '@mui/material';
import { FormControlLabel, Checkbox, FormControl, Modal } from '@mui/material';
import { Box,Typography} from '@mui/material';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';
import {MenuItem} from '@mui/material';




const Positions = () => {
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
    const [elections, setElection] = useState([]);
    const [users, setUsers] = useState([]);
    const response = JSON.parse(localStorage.getItem("token"));
    const headers = {
        Authorization: 'bearer' + response.data.authorisation.token,
        'Content-Type': 'application/json',
    }

    useEffect(() => {
        fetchPosition(); 
        fetchElection();
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
    const fetchElection = async () => {
        await axios.get('https://delacruz.bscs.tech/public/api/elections', { headers: headers },
        {
            headers: headers
        }).then(({ data }) => {
            setElection(data)
        })
    }
    const fetchUsers = async () => {
        await axios.get('https://delacruz.bscs.tech/public/api/users', { headers: headers },
        {
            headers: headers
        }).then(({ data }) => {
          setUsers(data)
        })
    }

    // Read Position Modal 
    const [read_id, setReadId] = useState(null);
    const [read_position_code, setReadPositionCode] = useState('');
    const [read_position_name, setReadPositionName] = useState('');
    const [read_election_description, setReadElectionDescription] = useState('');
    const [modalState, setModalState] = useState('');
    
    const readPosition = async (id,position_code,position_name,election_description) => {
      setReadId(id);
      setReadPositionCode(position_code);
      setReadPositionName(position_name);
      setReadElectionDescription(election_description);

      console.log(id);
      console.log(position_code);
      console.log(position_name);
      console.log(election_description);

      setModalState("modal-read-position");
    }

    const handleClose = () => {
      setModalState('Close');
    }

    // Update Position Modal
    const [update_position_id, setUpdatePositionId] = useState(null);
    const [update_position_code, setUpdatePositionCode] = useState('');
    const [update_position_name, setUpdatePositionName] = useState('');
    const [update_election_id, setUpdateElectionId] = useState('');
    const [update_user_id, setUpdateUserId] = useState('');
    const [validationErrors, setValidationErrors] = useState({});
    const updatePosition = async (id,position_code,position_name,election_id,user_id) => {
      setUpdatePositionId(id);
      setUpdatePositionCode(position_code);
      setUpdatePositionName(position_name); 
      setUpdateElectionId(election_id);
      setUpdateUserId(user_id);
      
      setModalState("modal-update-position");
      
    }

    const updatePositionInfo = async (e) => {
      e.preventDefault();
      const id = update_position_id;
      const position_code = update_position_code;
      const position_name = update_position_name; 
      const election_id = update_election_id;
      const user_id = update_user_id;

      const formData = new FormData();

      formData.append('position_code', position_code);
      formData.append('position_name', position_name);
      formData.append('user_id', user_id);
      formData.append('election_id', election_id);

      
        await axios.put(`https://delacruz.bscs.tech/public/api/position/${id}`, formData, { headers: headers }).then(({ data }) => {
          Swal.fire({
            text: 'Position has been Updated.',
            icon: 'success',
        })
          fetchPosition();
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
      const deletePosition = async (id) => {
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
                // 'Cancelled',
                // 'Position is safe :)',
                // 'error'
                'Cancelled!',
                'Marupok Ka Parin!',
                'error'
              )
              return;
      }
 
      await axios.delete(`https://delacruz.bscs.tech/public/api/position/${id}`, { headers: headers }).then(({ data }) => {
          Swal.fire({
            title: 'Position Successfully Deleted',
            icon: 'success',
            text: data.message
          })
          fetchPosition();
        }).catch(({response:{data}}) => {
          Swal.fire({
            text: data.message,
            icon: 'error',
          })
        })
      }

      // Create Position Modal
      const createPositionModal = () => {
        setModalState("modal-create-position");
        
        setPositionCode('');
        setPositionName('');
        setUserId('');
        setElectionId('');
      }
        const [position_code, setPositionCode] = useState('');
        const [position_name, setPositionName] = useState('');
        const [user_id, setUserId] = useState('');
        const [election_id, setElectionId] = useState('');
        
        const [validationError, setValidationError] = useState('');

        const createPosition = async (e) => {
          e.preventDefault();
          console.log(user_id);
          console.log(position_code);
          console.log(position_name);
          console.log(election_id);
          const formData = new FormData();
          
          formData.append('user_id', user_id);
          formData.append('position_code', position_code);
          formData.append('position_name', position_name);
          formData.append('election_id', election_id);

          await axios.post('https://delacruz.bscs.tech/public/api/position', formData, { headers: headers }).then(({ data }) => {
            
            fetchPosition();
            setPositionCode('');
            setPositionName('');
            setUserId('');
            setElectionId('');
            handleClose();

            Swal.fire({
              title: 'Position Successfully Created',
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
            <TableCell style={{fontSize: '22px'}}><center><strong>Position ID</strong></center></TableCell>
            <TableCell style={{fontSize: '22px'}}><center><strong>Position Code</strong></center></TableCell>
            <TableCell style={{fontSize: '22px'}}><center><strong>Position Name</strong></center></TableCell>
            {/* <TableCell style={{fontSize: '22px'}}><center><strong>Election</strong></center></TableCell> */}
            <TableCell style={{fontSize: '22px'}}><center><strong>Action
              <Button variant="primary" onClick={createPositionModal}>Create</Button>
              </strong></center>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {positions.length > 0 && (
              positions.slice(0, 10).map((column, key) => {
                const election = elections.find(election => election.id === column.election_id);
                return (
                  <TableRow key={key} style={{textAlignLast: 'center'}} >
                      <TableCell style={{fontSize: '20px'}}>{column.id}</TableCell>
                      <TableCell style={{fontSize: '20px'}}>{column.position_code}</TableCell>
                      <TableCell style={{fontSize: '20px'}}>{column.position_name}</TableCell>
                      {/* <TableCell style={{fontSize: '20px'}}>{election ? election.election_description : 'Position Not Found'}</TableCell> */}
                      <TableCell style={{fontSize: '20px'}}><center>
                          <Button variant="primary" onClick={() => readPosition(column.id,column.position_code,column.position_name,election.election_description)}>Read</Button>
                          <Button variant="primary" onClick={() => updatePosition(column.id,column.position_code,column.position_name,column.user_id,column.election_id)}>Update</Button>
                          <Button variant="primary" onClick={() => deletePosition(column.id)}>Delete</Button>
                          </center>
                      </TableCell>
                  </TableRow>
                );
              })
          )}
        </TableBody>
      </Table>

      {/* Read Position Modal */}
      <Modal open={modalState === "modal-read-position"}
      aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <TableContainer>
            <Table aria-label="simple table" >
              <TableHead>
                <TableRow>
                  <TableCell style={{fontSize: '22px'}}><center><strong>Position Details</strong></center></TableCell>
                </TableRow>
                <TableBody>
                  <TableRow >
                    <TableCell style={{fontSize: '20px'}}>Position ID: </TableCell>
                    <TableCell style={{width: '60%',fontSize: '20px'}}>{read_id}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{fontSize: '20px'}}>Position Code: </TableCell>
                    <TableCell style={{fontSize: '20px'}}>{read_position_code}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{fontSize: '20px'}}>Position Name:</TableCell>
                    <TableCell style={{fontSize: '20px'}}>{read_position_name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{fontSize: '20px'}}>Election:</TableCell>
                    <TableCell style={{fontSize: '20px'}}>{read_election_description}</TableCell>
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

      {/* Update Position Modal */}
      <Modal open={modalState === "modal-update-position"} 
      aria-labelledby="modal-modal-title" 
      aria-describedby="modal-modal-description">
        <Box sx={style}>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{fontSize: '22px'}}><center><strong>Edit Position</strong></center></TableCell>
                </TableRow>
                <TableBody>
                  <TableRow>
                    <TableCell style={{fontSize: '20px'}}>User:</TableCell>
                    <TableCell style={{fontSize: '20px'}}>{update_user_id}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{fontSize: '20px'}}>Position ID: </TableCell>
                    <TableCell style={{fontSize: '20px'}}>{update_position_id}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{fontSize: '20px'}}>Position Code: </TableCell>
                    <TableCell style={{fontSize: '20px'}}>
                      <TextField id="update_position_code" value={update_position_code} defaultValue={update_position_code} 
                      onChange={(event) => setUpdatePositionCode(event.target.value)}/>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{fontSize: '20px'}}>Position Name:</TableCell>
                    <TableCell style={{fontSize: '20px'}}>
                      <TextField id="update_position_name" value={update_position_name} defaultValue={update_position_name} 
                      onChange={(event) => setUpdatePositionName(event.target.value)}/>
                    </TableCell>
                  </TableRow>
                  
                  <TableRow>
                    <TableCell style={{fontSize: '20px'}}>Election:</TableCell>
                    <TableCell style={{fontSize: '20px'}}>
                      <TextField sx={{width: '100%'}} 
                      id="update_election_id" select value={update_election_id} defaultValue={update_election_id} 
                      onChange={(event) => setUpdateElectionId(event.target.value)}>
                        {elections.map((election) => (
                          <MenuItem key={election.id} value={election.id}>
                            {election.election_description}
                          </MenuItem>
                        ))}
                      </TextField>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </TableHead>
              <Button style={{float: 'right', marginTop: '20px', color: 'blue', fontWeight: 'bold'}} onClick={updatePositionInfo}>
                Update
              </Button>
              <Button style={{float: 'right', marginTop: '20px', color: 'blue', fontWeight: 'bold'}} onClick={handleClose}>
                Cancel
              </Button>
            </Table>
          </TableContainer>
        </Box>
      </Modal>

      {/* Create Position Modal */}
      <Modal open={modalState === "modal-create-position"}
      aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style} >
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{fontSize: '22px'}}><center><strong>Create Position</strong></center></TableCell>
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
                    <TableCell style={{fontSize: '20px'}}>Position Code: </TableCell>
                    <TableCell style={{fontSize: '20px'}}>
                    <TextField id="position_code" value={position_code} label="Position Code" required
                      onChange={(event) => setPositionCode(event.target.value)}/>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{fontSize: '20px'}}>Position Name:</TableCell>
                    <TableCell style={{fontSize: '20px'}}>
                    <TextField id="position_name" value={position_name} label="Position Name" required
                      onChange={(event) => setPositionName(event.target.value)}/>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{fontSize: '20px'}}>Election:</TableCell>
                    <TableCell style={{fontSize: '20px'}}>
                    <TextField sx={{width: '100%'}}
                    id="election_id" select value={election_id} label="Election" required
                      onChange={(event) => setElectionId(event.target.value)}>
                      {elections.map((election) => (
                          <MenuItem key={election.id} value={election.id}>
                            {election.election_description}
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

export default Positions
