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

function heightBTS(tree){
  if(!tree){
    return -1
  }
  let heightOfLeftTree = heightBTS(tree.left)
  let heightOfRightTree = heightBTS(tree.right)
  if(heightOfLeftTree > heightOfRightTree){
    return heightOfLeftTree + 1
  }else{
    return heightOfRightTree + 1
  }
}

console.log(heightBTS(testBST))