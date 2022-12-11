export const createGame = (numberOfBombs , rows , colums) => {
    let elements = []
    let bombs = [];
    let indexBombs = []
    while(bombs.length < numberOfBombs){
        var r = Math.floor(Math.random() * rows * colums) ;
        if(bombs.indexOf(r) === -1) bombs.push(r);
    }
 
    let row = 0;
    for(let i = 0 ; i< rows; i++){
        elements.push([]);
        for(let j =0 ; j < colums ; j++){
            let index = {
                x: i,
                y: j
            }
            let key = row+j;
            let count = bombs.filter( x => 
                (x === key - colums) ||
                (x === key - colums + 1 && j < colums - 1) ||
                (x === key - colums - 1 && j > 0) ||
                (x === key - 1 && j > 0) ||
                (x === key + 1 && j < colums - 1) ||
                (x === key + colums - 1 && j > 0) ||
                (x === key + colums + 1 && j < colums - 1) ||
                (x === key + colums))
            let title = count.length

            if(bombs.includes(key)) {
                title = -1
                indexBombs.push(index)
            }

        

            let elment = {
                    key: key,
                    title: title,
                    open: false,
                    flag: false,
                    index : index,
                    
            }
            elements[i][j]=elment;
        }
        row+=colums;
    }
    return {elements,indexBombs } ;
}

export const getLevelGame = (level) => {
    
    switch(level){ 
        case '0':
            return {
                rows: 5,
                colums : 5,
                numberOfBombs : 5
            }
        case '1':
            return {
                rows: 10,
                colums : 10,
                numberOfBombs : 10        
        }
        case '2':
            return {
                rows: 15,
                colums : 15,
                numberOfBombs : 20
            }
        default:
            return {
                rows: 5,
                colums : 5,
                numberOfBombs : 5
            }
      }
}