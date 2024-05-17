import React from 'react'
import Navigation from './Navigation'
import Positions from './crud/Positions'
import Candidates from './crud/Candidates'
import { Container } from '@mui/material'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

const Dashboard = () => {
  const styles = {
    minHeight: '94vh', // Set a minimum height to cover the entire viewport
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
  };
  return (
    <>
      <Container>
      <Navigation />
      <Routes>
        <Route path="/" element={<Positions />} />
        <Route path="/positions" element={<Positions />} />
        <Route path="/candidates" element={<Candidates />} />
      </Routes>
      </Container>
    </>
  )
}

export default Dashboard
