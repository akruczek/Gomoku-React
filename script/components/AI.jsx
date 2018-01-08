export const Move =(difficulty, chart, size)=> {
  switch(difficulty) {
    case 'easy': {
      while (true) {
        let x = Math.floor(Math.random() * size);
        let y = Math.floor(Math.random() * size);
        if (chart[x][y] !== "circle" && chart[x][y] !== "cross") {return `${x}-${y}`;}
      }
      break;
    }
    case 'medium': {

      break;
    }
    case 'hard': {

      break;
    }
  }
}

export const checkWinner =(count, chart, size)=> {
  let counter = 0;
  let checkingSymbol = "";

  //HORIZONTAL
  for (let i=0; i<size; i++) {
    for (let j=0; j<size; j++) {
      if (chart[i][j] === "circle" || chart[i][j] === "cross") {
        if (checkingSymbol === chart[i][j]) {
          counter++;
          if (counter === 5) return checkingSymbol; }
        else {
          checkingSymbol = chart[i][j];
          counter = 1; }
      }
      else {
        checkingSymbol = "";
        counter = 0;
      }
    }
  }

  //VERTICAL
  for (let j=0; j<size; j++) {
    for (let i=0; i<size; i++) {
      if (chart[i][j] === "circle" || chart[i][j] === "cross") {
        if (checkingSymbol === chart[i][j]) {
          counter++;
          if (counter === 5) return checkingSymbol; }
        else {
          checkingSymbol = chart[i][j];
          counter = 1; }
      }
      else {
        checkingSymbol = "";
        counter = 0;
      }
    }
  }
  return false;
}
