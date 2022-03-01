
function note_max(tableau){
       let max;
        for(let i=0;i<tableau.length;i++){
           (tableau[i])    
           if(tableau[i]>tableau[i+1])
                max=tableau[i];
        }
       
      
        return max;
        }
const note =[8,18,1,19,16];
console.log(note_max(note));

function note_min(tableau){
    let min;
    for(let i=0;i<tableau.length;i++){
        tableau[i]
        if(tableau[i]<tableau[i+1])
           min=tableau[i];
    }
    return min
}
console.log(note_min(note));

function moyenne(tableau){
    let compteur=0;
    for(let i=0;i<tableau.length;i++){
        compteur+=tableau[i]
    }
    return compteur/tableau.length;
}
console.log(moyenne(note));
    
    
    



 