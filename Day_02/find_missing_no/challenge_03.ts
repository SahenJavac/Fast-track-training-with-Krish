function findTheMissingNo(arr) {

    arr.sort(function (a, b) { return a - b });

    for (let i = 0; i < arr.length; i++) {

        if (arr[i + 1] - arr[i] != 1) {
            console.log('Missing no is ' + (arr[i] + 1));
            break;
        }
    }

}

var noSeq = [1, 2, 3, 5, 6, 7, 8, 9, 10];
findTheMissingNo(noSeq);