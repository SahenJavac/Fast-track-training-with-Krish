function linearSearch(ardr, key) {

    for (let i = 0; i < ardr.length; i++) {
        if (ardr[i] == key) {
            return 'found'
        }

    }
    return 'not found'

}
{
    let arr = [2, 4, 5, 12, 54, 1, 3]
    let keyt = 0;
    console.log(linearSearch(arr, keyt));
}