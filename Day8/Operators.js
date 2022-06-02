// D=L-S/L *100


var SellingPrice=199
var listPrice=799

var discountPer=((listPrice-SellingPrice)/listPrice) *100
var displayDic=Math.round(discountPer)
console.log(`Discount percentage is ${displayDic}%`)

var result=listPrice>SellingPrice

console.log(typeof result)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence