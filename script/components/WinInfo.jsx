import React from 'react';
import {Modal} from 'react-materialize';

export const WinInfo =(props)=> {
  return (
    <Modal id="winner" header='' actions={<button class="btn waves-effect waves-light btn-flat modal-action modal-close">{props.text.Close}</button>}>
      {props.win ?
        <h1 style={{textAlign: "center", textTransform: "uppercase"}}>{props.text.you_win}</h1>
      : <h1 style={{textAlign: "center", textTransform: "uppercase"}}>{props.text.you_lose}</h1>}
    </Modal>
  );
}
