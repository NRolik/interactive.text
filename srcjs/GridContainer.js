import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import './GridContainer.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FullWidthGrid(props) {

  console.log('Code File Body:' + props.codeFile)
  console.log('Section File Body:' + props.sectionFile)

  return (
    <div className='draganddrop__container'>
      <div className='draganddrop__container_left_side'>
        <div className='textContainer'></div>
      </div>
      <div className = 'draganddrop__container_right_side'>
        <div className='topCard'></div>
        <div className='bottomCard'></div>
      </div>
    </div>
  );
}

export default FullWidthGrid;
