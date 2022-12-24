
const sSortASC = (arr) => {
    const sortedArr = [...arr].sort( (a,b) => {
        console.log(a,b)
    }  )
    return sortedArr;
}
export {sSortASC}