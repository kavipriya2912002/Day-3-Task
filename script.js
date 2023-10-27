//Q1: How to compare two JSON have the same properties without order?

let obj1={ name:"person 1",age:5};
let obj2={ age:5,name:"person 1"};

console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

//Q2: Using the rest countries API url , display all the country flags in the console.
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload=function(){
    var data=request.response;
    //console.log(data);
    var result =JSON.parse(data);
    for(var i=0;i<result.length;i++){
        console.log(result[i].flags.png);
    }

}


//Q3: Using the rest countries, print all countries names,regions, sub-regions and populations.
var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true);
request1.send();
request1.onload=function(){
    var data1=request1.response;

    var result1 =JSON.parse(data1);
    
    for(var i=0;i<result1.length;i++){
        console.log(result1[i].name.common,result1[i].region,result1[i].subregion,result1[i].population);
    }

}