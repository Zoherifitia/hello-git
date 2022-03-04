
//une fonction qui retourne la note max
function note_max(tableau){
       let max;
        for(let i=0;i<tableau.length;i++){    
           if(tableau[i]>tableau[i+1])
                max=tableau[i];
        }
       
      
        return max;
        }

//une fonction qui retourne le note min
function note_min(tableau){
    let min;
    for(let i=0;i<tableau.length;i++){
        if(tableau[i]<tableau[i+1])
           min=tableau[i];
    }
    return min
}

//une fonction qui retourne la moyenne
function moyenne(tableau){
    let compteur=0;
       //on fait une boucle pour pouvoir accumuler les notes dans une valeur
    for(let i=0;i<tableau.length;i++){
        compteur+=tableau[i]
    }
    return compteur/tableau.length
    
    
    



 
