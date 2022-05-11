var obj = {
    isEmpty: function (array) {
        return array.length == 0;
    },
    // b
    max: function (array) {         //para devolver o maximo array 
        var max = array[0];
        for (var i = 0; i < array.length; i++) {
            if (array[i] > max) 
                max = array[i];
        }
        return max;
    },
    //c

    min: function (array) {       //para devolver o minimo array
        var min = array[0];
        for (var i = 0; i < array.length; i++) {
            if (array[i] < min)
                min = array[i];
        }
        return min;
    },
    //d
    average: function (array) {
        var soma = 0;
        for (var i = 0; i < array.length; i++) {
            soma += array[i];
        }
        return soma / array.length;
    },

    //e
    indexOf: function (array, value) {
        var index = -1;
        for (var i = 0; i < array.length; i++) {
            if (array[i] == value) {
                index = i;
            }
        }
        return index;
    },
    //f
    subarray: function (array, startIndex, endeIndex) {
        var arraynovo = [];
        for(var i = startIndex; i < endeIndex + 1; i++) {
            arraynovo.push(array[i]);
        }
        return arraynovo;
    },
    //g 
    isSamelength: function (a1, a2) {
        var s1 = a1, length;
        var s2 = a2, length;
        if(s1 == s2)
            return true;
        else
            return false;    
        
    },
    //h
    reverse: function (array) {
        var r = [1,3,4,6,8,9];
        for(var i = r.length-1; i>=0; i--) {
            r.push(r[i]);
        }
        return r;
    },
    //i
    swap: function (array, Index1, Index2) {
        var arraynovo = [];
        for(var i = 0; i < array.length; i++){
            if(array[i] == Index1){
                arraynovo.push(Index2);
            }
            else{
                arraynovo.push(array[i]);
            }
        }
        return arraynovo;
    },
    //j
    contains: function (array, value) {
        return this.indexOf(array, value) != -1;
    },
    //k
    concatenate: function (a1, a2) {
        var arraynovo = [];
        for(var i = 0; i < a1.length; i++){
            arraynovo.push(a1[i]);
        }
        for(var i = 0; i < a2.length; i++){
            arraynovo.push(a2[i]);
        }
        return arraynovo;
        
    }



}


module.exports = obj;