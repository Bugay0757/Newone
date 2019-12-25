let base=[{name:'jhonny Walker', birthDate:'1995-12-17'},
{name:'Andrew', birthDate:'2001-10-29'},];
let Inputstring=prompt('Input Name',);
function searchByName(somestriing, base1){
  let searcharr = base1.filter(item=> item.name == somestriing);   
  return searcharr;
};
console.log(searchByName(Inputstring,base));
function getBiggestAge(arr){
  let t3=(new Date()).getFullYear();
  let t2 = Infinity;
 for (let i=0; i<arr.length;i++ ){
    let arritem2=arr[i]; 
    for (let [key,value] of Object.entries(arritem2)){
               if(key=='birthDate'){
                var t1 = (new Date(value));
                };
      };
      if (t1<t2){
        t2=t1;
        };
  };
  let age=t3-t2.getFullYear();
  return age;
};
console.log(getBiggestAge(base));

