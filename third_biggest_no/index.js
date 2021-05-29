function findThirdBiggestNo(arr) {

    arr.sort(function (a, b) { return a - b });
    console.log(arr)
    console.log('Third Biggest Number is - ' + arr[2])
}

var numArray = [12, 45, 6, 1, -34, 78, -6];
findThirdBiggestNo(numArray);