const checkTriangleType = (a,b,c)=>{
    if (a=== b && b === c) {
        return "equilaterals";    
    }
    else if (a === b || b === c || c === a ){
        return "isosceles"
    }
    return " Scalene";
}

console.log(checkTriangleType(3,4,3));
console.log(checkTriangleType(5,68,8));
console.log(checkTriangleType(3,3,4));