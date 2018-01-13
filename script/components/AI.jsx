export const Move =(difficulty, chart, size, symbol)=> {
  switch(difficulty) {
    case 'easy': {
      while (true) {
        let x = Math.floor(Math.random() * size);
        let y = Math.floor(Math.random() * size);
        if (chart[x][y].indexOf("-") > -1) { return [Number(x), Number(y)]; }
      }
      break;
    }
    case 'medium': {
      return medium_hard(symbol, size, chart, "medium");
      break;
    }
    case 'hard': {
      return medium_hard(symbol, size, chart, "hard");
      break;
    }
  }
}

const medium_hard =(symbol, size, chart, level)=> {
  while (true) {

    let possibleFields = [];
    let vsSymbol = symbol === "cross" ? "circle" : "cross";

    //THIS DOUBLE LOOP IS CHECKING IS THERE ANY SYMBOL ON THE FIELD. WHEN FOUND IT,
    //CHECKING ALL FOUR POINTS (IF POSSIBLE, MAX 5 FIELDS RANGE) AND ADD THESE FIELDS TO possibleFields ARRAY.
    let possibleDefenceFields = vsSymbolAmount(vsSymbol, size, chart, level);
    if (possibleDefenceFields === false) {
      for (let i=0; i<size; i++) {
        for (let j=0; j<size; j++) {
          if (chart[i][j] === symbol) {

            // > right
            if ((size - i) >= 5) {
              for (let k=1; k<=5; k++) {
                if ((i + k) <= (size - 1)) {
                  if (chart[i+k][j].indexOf("-") > -1) {
                    if (level === "medium") {
                      possibleFields.push(chart[i+k][j]);
                    }
                    else {
                      if ((i - 1) >= 0) {
                        if (chart[i-1][j] === symbol) {
                          possibleFields.push(chart[i+k][j]);
                        }
                      }
                    }
                    break;
                  }
                  else if (chart[i+k][j] === "vsSymbol") {break;}
                }
              }
            }

            // > left
            if (((size - i) <= 9) && (i >= 1)) {
              for (let k=1; k<=5; k++) {
                if ((i - k) >= 0) {
                  if (chart[i-k][j].indexOf("-") > -1) {
                    if (level === "medium") {
                      possibleFields.push(chart[i-k][j]);
                    }
                    else {
                      if ((i + 1) <= (size - 1)) {
                        if (chart[i+1][j] === symbol) {
                          possibleFields.push(chart[i-k][j]);
                        }
                      }
                    }
                    break;
                  }
                  else if (chart[i-k][j] === "vsSymbol") {break;}
                }
              }
            }

            // > top
            if ((size - j) <= 9 && (j >= 1)) {
              for (let k=1; k<=5; k++) {
                if ((j - k) >= 0) {
                  if (chart[i][j-k].indexOf("-") > -1) {
                    if (level === "medium") {
                      possibleFields.push(chart[i][j-k]);
                    }
                    else {
                      if ((j + 1) <= (size -1)) {
                        if (chart[i][j+1] === symbol) {
                          possibleFields.push(chart[i][j-k]);
                        }
                      }
                    }
                    break;
                  }
                  else if (chart[i][j-k] === "vsSymbol") {break;}
                }
              }
            }

            // > bottom
            if ((size - j) >= 5) {
              for (let k=1; k<=5; k++) {
                if ((j + k) <= (size -1)) {
                  if (chart[i][j+k].indexOf("-") > -1) {
                    if (level === "medium") {
                      possibleFields.push(chart[i][j+k]);
                    }
                    else {
                      if ((j - 1) >= 0) {
                        if (chart[i][j-1] === symbol) {
                          possibleFields.push(chart[i][j+k]);
                        }
                      }
                    }
                    break;
                  }
                  else if (chart[i][j+k] === "vsSymbol") {break;}
                }
              }
            }

          }
        }
      }
    }
    else {
      let vsIndex = Math.floor(Math.random() * possibleDefenceFields.length);
      return [Number(possibleDefenceFields[vsIndex].split("-")[0]), Number(possibleDefenceFields[vsIndex].split("-")[1])];
    }

    //IF possibleFields ARRAY CONTAIN VARS, DRAW RANDOM ARRAY ELEMENT.
    if (possibleFields.length > 0) {
      console.log(possibleFields);
      let index = Math.floor(Math.random() * possibleFields.length);
      console.log(index);
      console.log(possibleFields[index]);
      console.log(possibleFields[index].split("-")[0], possibleFields[index].split("-")[1]);
      return [Number(possibleFields[index].split("-")[0]), Number(possibleFields[index].split("-")[1])];
    }
    else {
      //FIRST MOVE
      while (true) {
        let x = Math.floor(Math.random() * size);
        let y = Math.floor(Math.random() * size);
        if (chart[x][y].indexOf("-") > -1) {return [Number(x), Number(y)];}
      }
    }

  }
}

//THIS DOUBLE LOOP CHECKING IF THERE IS ANY vsSymbol ON FIELD AND THEN,
//COUNT HOW MUCH vsSymbols FOUND IN ONE ROW. IF MORE THAN 1 OR 2 (level) STARTS TO SAVE THESE FIELDS.
const vsSymbolAmount=(vsSymbol, size, chart, level)=> {
  console.log(level);
  let possibleDefenceFields = [];
  for (let i=0; i<size; i++) {
    for (let j=0; j<size; j++) {
      if (chart[i][j] === vsSymbol) {

        // > right
        if ((size - i) >= 5) {
          if (chart[i+1][j] === vsSymbol && chart[i+2][j] === vsSymbol) {
            if (level === "hard") {
              (chart[i+3][j].indexOf("-") > -1) && possibleDefenceFields.push(chart[i+3][j]);
            }
            else {
              if (chart[i+3][j] === vsSymbol) {
                (chart[i+4][j].indexOf("-") > -1) && possibleDefenceFields.push(chart[i+4][j]);
              }
              else if (chart[i+3][j].indexOf("-") > -1) {
                possibleDefenceFields.push(chart[i+3][j]);
              }
            }
          }
        }

        // > left
        if ((size - i) <= 9) {
          if (chart[i-1][j] === vsSymbol && chart[i-2][j] === vsSymbol) {
            if (level === "hard") {
              (chart[i-3][j].indexOf("-") > -1) && possibleDefenceFields.push(chart[i-3][j]);
            }
            else {
              if (chart[i-3][j] === vsSymbol) {
                (chart[i-4][j].indexOf("-") > -1) && possibleDefenceFields.push(chart[i-4][j]);
              }
              else if (chart[i-3][j].indexOf("-") > -1) {
                possibleDefenceFields.push(chart[i-3][j]);
              }
            }
          }
        }

        // > top
        if ((size - j) <= 9) {
          if (chart[i][j-1] === vsSymbol && chart[i][j-2] === vsSymbol) {
            if (level === "hard") {
              (chart[i][j-3].indexOf("-") > -1) && possibleDefenceFields.push(chart[i][j-3]);
            }
            else {
              if (chart[i][j-3] === vsSymbol) {
                (chart[i][j-4].indexOf("-") > -1) && possibleDefenceFields.push(chart[i][j-4]);
              }
              else if (chart[i][j-3].indexOf("-") > -1) {
                possibleDefenceFields.push(chart[i][j-3]);
              }
            }
          }
        }

        // > bottom
        if ((size - j) >= 5) {
          if (chart[i][j+1] === vsSymbol && chart[i][j+2] === vsSymbol) {
            if (level === "hard") {
              (chart[i][j+3].indexOf("-") > -1) && possibleDefenceFields.push(chart[i][j+3]);
            }
            else {
              if (chart[i][j+3] === vsSymbol) {
                (chart[i][j+4].indexOf("-") > -1) && possibleDefenceFields.push(chart[i][j+4]);
              }
              else if (chart[i][j+3].indexOf("-") > -1) {
                possibleDefenceFields.push(chart[i][j+3]);
              }
            }
          }
        }

      }
    }
  }

  if (possibleDefenceFields.length > 0) {
    return possibleDefenceFields;
  }
  else {
    return false;
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
