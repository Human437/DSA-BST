const BinarySearchTree = require('./Binary-Search-Tree')

function drill1(arr){
  let bst = new BinarySearchTree()
  for(let i =0;i<arr.length;i++){
    bst.insert(arr[i],arr[i])
  }
  return bst
}
let testBST = drill1([3,1,4,6,9,2,5,7])
let testBST2 = new BinarySearchTree(5,5,null)
testBST2.left = new BinarySearchTree(8,8,testBST2)
testBST2.right = new BinarySearchTree(9,9,testBST2)
// Code above is the code needed to create a sample BTS

function isBST(tree, left = null, right = null){
  if (tree === null){
    return true
  }
  if(left !== null && tree.value <= left.value){
    return false
  }
  if(right !== null && tree.value >= right.value){
    return false
  }
  return isBST(tree.left,left,tree) && isBST(tree.right,tree,right)
}

console.log(isBST(testBST))
console.log(isBST(testBST2))