/**
 *
 * @param a
 * @param b
 * @param c
 * @returns {*[][]}
 */
const getColumns= (a,b,c)=>{
 return [
     [a,b,c],
     [a,c,b],
     [b,a,c],
     [b,c,a],
     [c,a,b],
     [c,b,a]
 ];
}

/**
 *
 * @param a
 * @param b
 * @param c
 * @return {string[][][]}
 */
const generateMatrizes = (a="a",b="b",c="c")=>{
    const all = [];
    const cols = getColumns(a,b,c);
    for (let i =0;i<cols.length;i++){
        for (let j =0;j<cols.length;j++){
            for (let k =0;k<cols.length;k++){
                all.push([cols[i],cols[j],cols[k]])
            }
        }
    }
    return all;
}

export {
    generateMatrizes
}