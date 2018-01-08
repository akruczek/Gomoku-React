import React from 'react';
import {Modal} from 'react-materialize';

export const WinInfo =(props)=> {
  return (
    <Modal id="winner" header=''>
      {props.win ? <h1 style={{textAlign: "center"}}>YOU WIN!</h1> : <h1>YOU LOSE</h1>}
    </Modal>
  );
}
