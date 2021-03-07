function isSameBST(arr1,arr2){
  if(arr1.length !== arr2.length){
    return false
  }
  if(arr1.length === 0 && arr2.length === 0){
    return true
  }

  if(arr1[0] === arr2[0]){
    let leftArr1 =[]
    let rightArr1 = []
    let leftArr2 = []
    let rightArr2 = []
    for(let i =1;i<arr1.length;i++){
      if(arr1[i]>arr1[0]){
        rightArr1.push(arr1[i])
      }else{
        leftArr1.push(arr1[i])
      }
      if(arr2[i]>arr2[0]){
        rightArr2.push(arr2[i])
      }else{
        leftArr2.push(arr2[i])
      }
    }
    return isSameBST(leftArr1,leftArr2) && isSameBST(rightArr1,rightArr2)
  }
  return false
}

console.log(isSameBST([3,5,4,6,1,0,2],[3,1,5,2,4,6,0]))
console.log(isSameBST([2, 4, 3, 1],[1,2,3,4]))