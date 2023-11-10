import React, { useState } from 'react';
import Accounts from './Accounts';
import Bonus from './Bonus';
import { useDispatch, useSelector } from 'react-redux';
import { tobmir } from './redux/Actions.jsx/Action';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const WallpaperContainer = styled(Box)`
  border: 2px solid rgb(39 11 11 / 99%);
  margin: 20px;
  padding: 1px;
  background-color: #333333;
`;

export default function Home() {
  const amount = useSelector(state => state.amount.amount);
  const bonus = useSelector(state => state.bonus.point);
  const BMI = useSelector(state => state.BMI.bmi);
  const acc = useSelector(state => state.amount);
  const dispatch = useDispatch();

  return (
    <WallpaperContainer>
      <Typography variant="h1" style={{ color:"white" }}>
        BODY MASS INDEX
      </Typography>
      <h2 style={{color:"red"}}> **Dont Forget to Click on addvalue button after filling value to box** </h2>

      {acc.pending ? (
        <Typography variant="body1" style={{ color: '#ffffff' }}>
          ...loading
        </Typography>
      ) : acc.error ? (
        <Typography variant="body1" style={{ color: '#ffffff' }}>
          {acc.error}
        </Typography>
      ) : BMI < 18.5 ? (
        <Typography variant="h3" style={{ color: 'red' }}>
          Underweight
        </Typography>
      ) : BMI >= 18.5 && BMI <= 24.9 ? (
        <Typography variant="h3" style={{ color: 'red' }}>
          Normal Weight
        </Typography>
      ) : BMI >= 24.9 && BMI <= 29.9 ? (
        <Typography variant="h3" style={{ color:'red' }}>
          Overweight
        </Typography>
      ) : (
        <Typography variant="h3" style={{ color: 'red' }}>
          Obesity
        </Typography>
      )}

      <Box>
        <Typography variant="h3" style={{ color: '#ffffff' }}>
          BMI: {Math.round(BMI)}
        </Typography>
        <Typography variant="h3" style={{ color: '#ffffff' }}>
          HEIGHT(CM): {amount}
        </Typography>
        <Typography variant="h3" style={{ color: '#ffffff' }}>
          WEIGHT(KG): {bonus}
        </Typography>
      </Box>

      <Accounts />
      <Bonus />

      <Button onClick={() => dispatch(tobmir(amount, bonus))} variant="contained">
        Submit
      </Button>
    </WallpaperContainer>
  );
}