// import React from "react";

function Add(a, b){
    let sum= a+b;
    return sum;
}
function Div(a, b){
    let divide= a/b;
    divide= divide.toFixed(2);
    return divide;
}
export {Add, Div};