
//une fonction qui retourne la note max
function note_max(tableau){
       let max;
        for(let i=0;i<tableau.length;i++){
           (tableau[i])    
           if(tableau[i]>tableau[i+1])
                max=tableau[i];
        }
       
      
        return max;
        }


function note_min(tableau){
    let min;
    for(let i=0;i<tableau.length;i++){
        tableau[i]
        if(tableau[i]<tableau[i+1])
           min=tableau[i];
    }
    return min
}


function moyenne(tableau){
    let compteur=0;
    for(let i=0;i<tableau.length;i++){
        compteur+=tableau[i]
    }
    return compteur/tableau.length
    
    
    



 
