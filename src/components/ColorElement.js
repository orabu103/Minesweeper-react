import randomColor from "randomcolor";


export const getTextColor = (title) => {
    switch(title){ 
        case 1:
          return '#0066cc';
        case 2:
          return '#006600';
        case 3:
          return '#ff3333';
        case 4:
          return '#cccc00';  
        case 5: 
          return '#0066cc';  
        case 6:   
          return '#7f00ff'; 
        default:
          return randomColor()
      }
}

export const getBgColor = (index , open) => {
  if(open)
    return (index.x+index.y)%2 === 0 ? '#C0C0C0' : '#E0E0E0'
  else 
    return (index.x+index.y)%2 === 0 ? '#B2DE86' : '#CCFF99'
}


