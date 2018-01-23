function longestConsec(strarr, k) {
  var mot = strarr[0];
  var position = 0;
  var n = 0;
    if(k <= 0 ){
      return ""
    }
    
    if(k>position)
    
  
    if(strarr.length>k){
      for (var i = 0; i<strarr.length; i++){
        if(strarr[i].length > mot.length){
          mot = strarr[i];
          position = strarr.indexOf(strarr[i]);
        }
      }
      if(position+k > strarr.length){
        for(var i = position ; i > position-k; i--){
          mot += strarr[i]; 
        }
      }
        for (var i = position+1; i < position+k; i++){
           mot += strarr[i]; 
        }
      return mot 
    }
  
    return "";
 
    
}
