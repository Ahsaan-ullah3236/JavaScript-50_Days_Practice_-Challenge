const isPlanidrome = (str) =>{
    str = str.toLowerCase().replace(/\W/g, " ");
    let n_str = str.split("").reverse().join("")   
    console.log(n_str);
    return str === n_str ? true : false;
}
console.log(isPlanidrome("A men, a pan,  A canal,  Panama")); 
console.log(isPlanidrome("racecar")); 
console.log(isPlanidrome("hello"));

