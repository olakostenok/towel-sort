
// You should implement your task here.

module.exports = function towelSort (matrix) {

     if(matrix == undefined){
        return [];
     }

     if(matrix.length == 0) {
        return [];
     }

     if(matrix.length == 2) {
       matrix[1].sort((a , b) => b - a);
       var mass = matrix[0].concat(matrix[1]);
       return mass;
     }

     if(matrix.length == 3) {
        matrix[1].sort((a , b) => b - a);
        var mass = matrix[0].concat(matrix[1]).concat(matrix[2]);
        return mass;
     }

     if(matrix.length == 4) {
        matrix[1].sort((a , b) => b - a);
        matrix[3].sort((a , b) => b - a);
        var mass = matrix[0].concat(matrix[1]).concat(matrix[2]).concat(matrix[3]);
        return mass;
     }
    
}

   
