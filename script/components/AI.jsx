export const Move =(difficulty, chart, size)=> {
  switch(difficulty) {
    case 'easy': {
      while (true) {
        let x = Math.floor(Math.random() * size);
        let y = Math.floor(Math.random() * size);
        // console.log(x, y);
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
