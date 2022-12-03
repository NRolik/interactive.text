import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import './GridContainer.css';

import { TextArea } from "./TextArea.jsx";
import { Codes } from "./Codes.jsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Lines } from "./Lines.jsx";
import {SaveButton} from "./SaveButton.jsx";
import {useState} from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FullWidthGrid(props) {
  const [wholeText, setWholeText] = useState('');

  console.log('Code File Body:' + props.codeFile)
  console.log('Section File Body:' + props.sectionFile)
  console.log('Text File Body : ' + props.textFile)

  function saveData(){
    console.log(wholeText);
  }


  return (
    <DndProvider backend={HTML5Backend}>
      <div className='draganddrop__container'>
        <div className='draganddrop__container_left_side'>
          <div className='textContainer'>
            <TextArea text={props.textFile} setWholeText={setWholeText}/>
          </div>
        </div>
        <div className = 'draganddrop__container_right_side'>
          <div className='topCard'>
            <Codes codeText={props.codeFile}/>
          </div>
          <div className='bottomCard'>
            <Lines lineText={props.sectionFile}/>
          </div>
          <div className='bottomCard'>
            <SaveButton saveData={saveData}/>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default FullWidthGrid;
