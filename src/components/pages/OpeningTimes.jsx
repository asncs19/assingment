import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
  margin: 20px;
`

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  color: white;
`
const TableDiv = styled.div`

`

const OpeningTimes = () => {

  const rows = [{ day: "Monday" , hour: "10:00-22:00"},
  { day: "Tuesday" , hour: "10:00-22:00"},
  { day: "Wednesday" , hour: "10:00-22:00"},
  { day: "Thursday" , hour: "10:00-22:00"},
  { day: "Friday" , hour: "10:00-22:00"},
  { day: "Saturday" , hour: "09:00-02:00"},
  { day: "Sunday" , hour: "10:00-23:00"}];
  return (
    <>
      <MainContainer>
        <TitleDiv>
          <Title>Opening Timing</Title>
        </TitleDiv>

        <TableDiv>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 , border: "2px solid Black" }} aria-label="customized table">
              <TableHead>
                <TableRow sx={{border: "2px solid Black"}}>
                  <TableCell><h3>Day of Week</h3></TableCell>
                  <TableCell align="center"><h3>Hours</h3></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.day}>
                    <TableCell component="th" scope="row">
                      {row.day}
                    </TableCell>
                    <TableCell align="center">{row.hour}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TableDiv>
      </MainContainer>

    </>
  )
}

export default OpeningTimes