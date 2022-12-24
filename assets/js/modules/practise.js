
const sSortASC = (arr) => {
    const sortedArr = [...arr].sort( (a,b) => {
       // console.log(a,b,a.localeCompare (b))
        return a.localeCompare (b)
    }  )
    return sortedArr;
}

const sSortDESC = (arr) => {
    const sortedArr = [...arr].sort( (a,b) => {
       // console.log(a,b,b.localeCompare (a))
        return a.localeCompare (b)
    }  )
    return sortedArr;
}

const nSortASC = (arr) => {
    const sortedArr = [...arr].sort( (a,b) => {
        console.log(a,b ,a-b)
        return a-b;
})
return sortedArr;
}


export {sSortASC , sSortDESC ,nSortASC}