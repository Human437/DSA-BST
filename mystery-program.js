const BinarySearchTree = require('./Binary-Search-Tree')

function drill1(arr){
  let bst = new BinarySearchTree()
  for(let i =0;i<arr.length;i++){
    bst.insert(arr[i],arr[i])
  }
  return bst
}
let testBST = drill1([3,1,4,6,9,2,5,7])
// Code above is the code needed to create a sample BTS
// Code below is the mystery program
function tree(t){
  if(!t){
      return 0;
  }
  return tree(t.left) + t.value + tree(t.right)
}
// Before running the code, I belive the mystery program with go through the 
// BST and return the sum of all the values in the BST

console.log(tree(testBST)) //Expecting 37