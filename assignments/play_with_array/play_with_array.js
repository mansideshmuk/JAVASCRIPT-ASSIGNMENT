function getEven(arr) {
    /* 
        Return an array containing only even numbers as a result
        Example
            Input: [1,4,5,77,8,90]
            Output: [4,8,90]

        Write you code below
    */
    var res=[];
    for (var i=0;i<arr.length;i++){
        if ((parseInt(arr[i]))%2===0){
            res.push(arr[i])
        }
    }
    return res

}

function multiplyByN(arr, n) {
    /* 
        Return an array whose elements are multiplied by n
        Example
            Input: [1,3,4,55], 3
            Output: [3,9,13,165]
        Write you code below
    */
    var res=[];
    for (i=0;i<arr.length;i++){
        mul=n*parseInt(arr[i])
        res.push(mul)
    }
    return res
}    

function removeNthElement(arr, n) {
    /*
        Return the array with the element present at index n removed
        Example
            Input: [1,3,4,6,7] 3
            Output: [1,3,4,7]
        Write you code below
    */
    var res=[];
    for (i=0;i<arr.length;i++){
        if ((parseInt(i))!==n){
           res.push(parseInt(arr[i]))
        }
    }
    return res
}

module.exports = {
    getEven,
    multiplyByN,
    removeNthElement
}