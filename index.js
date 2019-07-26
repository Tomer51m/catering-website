let nums = [1, [2], [3,[4]], [5,[6]], [[[7]]], [8, [9, [[10, 11]]]]];

function flatArr(arr) {
    return arr.reduce((acc, item)=>{
        return acc.concat(Array.isArray(item) ? flatArr(item) : item)
    },[])
}

console.log(
    flatArr(nums)
);

