export const createGame = (numberOfBombs , rows , colums) => {
    let elements = []
    let bombs = [];

    while(bombs.length < numberOfBombs){
        var r = Math.floor(Math.random() * rows * colums) ;
        if(bombs.indexOf(r) === -1) bombs.push(r);
    }
   
    console.log(bombs)
    let row = 0;
    for(let i = 0 ; i< rows; i++){
        elements.push([]);
        for(let j =0 ; j < colums ; j++){
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

            if(bombs.includes(key)) title = -1

        

            let elment = {
                    key: key,
                    title: title,
                    open: false,
                    flag: false,
                    index : {
                        x: i,
                        y: j
                    },
                    color : {
                        open : (key+((colums%2) === 0 ? i : 0))%2 === 0  ? '#C0C0C0' : '#E0E0E0',
                        close : (key+((colums%2) === 0 ? i : 0))%2 === 0 ? '#B2DE86' : '#CCFF99'
                    }
                    
            }
            elements[i][j]=elment;
        }
        row+=colums;
    }
    return {elements , bombs} ;
}