

document.querySelector("#btnFind").addEventListener("click" , ()=>{
    const arr =[22 , 2, 66, 565, 666 , 47 , 8, 87 ];
    const maxNumber=getMaxNumber(arr);
    document.querySelector("#result").innerHTML=maxNumber;
} )

const getMaxNumber = (arr) => {
    if (!arr || typeof(arr)!=="object" || arr.lenght<=0) return false;
let =maxNum =arr[0]

    for (let i=0; i<arr.length; i++){
if(arr[i]>maxNum){
    maxNum =arr[i];
}
    }
    return maxNum;
}
getMaxNumber(null);


/*
document.querySelector("#btnFind").addEventListener("click", ()=>{
    const arr =[12,3,5,12,34,67,12,5,76,8];
    const maxNumber = getMaxNumber(arr);
    document.querySelector("#result").innerHTML = maxNumber;
});
const getMaxNumber = (arr) => {
    if(!arr || typeof(arr)!=="object" || arr.length<=0 ) return false;
    let maxNum = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>maxNum){
            maxNum = arr[i];
        }
    }
    return maxNum;
}
getMaxNumber(null); */