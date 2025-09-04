// Code your solutions in this file
const names=['Charlie', 'Samip', 'Ali']

const writeCards=(arr, string)=>{
    let newArr = []
    for(let i=0;i<arr.length;i++){
        newArr.push(`Thank you, ${arr[i]}, for the wonderful ${string} gift!`)
    }
    return newArr
}

const countDown=(num)=>{
    while(num>=0){
        console.log(num--)
    }
}
