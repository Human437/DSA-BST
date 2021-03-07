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

function thirdLargestNode(tree,count = 0){
  if(tree === null){
    return 
  }
  thirdLargestNode(tree.right)
  count += 1
  if(count === 3){
    return tree.value
  }
  return thirdLargestNode(tree.left,count)
}

console.log(thirdLargestNode(testBST))