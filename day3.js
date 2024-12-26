
const countChart = (word , char)=>{
    word = word.toLowerCase();
    char = char.toLowerCase();

   const totalCount =  word.split("").reduce((accum,curChar) =>{
    if (curChar === char) {
        accum++;
    }
    return accum;
   }, 0);
   return totalCount;
   console.log(totalCount);

   totalCount
}


console.log(countChart("messsiiijsldfdlfaoidfaiisisdiaiiiaiiaIppisiwior","i"));