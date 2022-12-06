import Element from "./Element/Element";

export const createGame = (length) => {
   
   
    let elements = []
    let bombs = [];

    while(bombs.length < 20){
        var r = Math.floor(Math.random() * length * 10) + 1;
        if(bombs.indexOf(r) === -1) bombs.push(r);
    }
  

    let row = 0;
    for(let i = 0 ; i< length; i++){
        elements.push([]);
        for(let j =0 ; j < length ; j++){
            let key = row+(j+1);
            let count = bombs.filter( x => 
                (x >= key-(length+1) && x <= key-(length-1)) 
            || (x >= key-1 && x <= key+1) 
            || (x >= key+(length-1) && x <= key+(length+1)))
            let title = count.length
            if(bombs.includes(key)) title = '-1'
            let elment = {
                    key: key,
                    title: title,
                    open: false,
                    flag: false
            }
            elements[i][j]=elment;
        }
        row+=length;
    }
    
    
    return elements;
    
    


    
}