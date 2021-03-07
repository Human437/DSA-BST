const BinarySearchTree = require('./Binary-Search-Tree')

function drill1(arr){
  let bst = new BinarySearchTree()
  for(let i =0;i<arr.length;i++){
    bst.insert(arr[i],arr[i])
  }
  return bst
}

console.log(drill1([3,1,4,6,9,2,5,7]))
console.log(drill1('E A S Y Q U E S T I O N'.split(' ')))