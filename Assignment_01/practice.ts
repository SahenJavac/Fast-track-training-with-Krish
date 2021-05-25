function bubbleSorter(arr) {

    for (let i = 0; i < arr.length; i++){

        for (let j = 0; j < arr.length-(i+1); j++){
            if(arr[j]>arr[j+1]){
                let temp= arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
             }
        }
    }

    return arr;

}

var arr = [12,4,123,5,6,1,9];
console.log(bubbleSorter(arr)); 