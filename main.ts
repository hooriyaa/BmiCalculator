// BMI CALCULATOR USING INQUIRER PROMPT;

import inquirer from "inquirer";
const input1 =await inquirer.prompt([{
    name:'weight',
    type:'number',
    message:'Please enter your weight in kg:',
}])

const input2 =await inquirer.prompt([{
    name:'height',
    type:'number',
    message:'Please enter your height in meter:',
   
}])
const weight:number=input1.weight;
const height:number=input2.height;
const bmiCalculator:number=weight/(height*height)
console.log(bmiCalculator);

// CONDITIONAL STATMENT:
if(bmiCalculator<18.5){
    console.log('you are underweight range!' );
}else if(bmiCalculator<24.9){
    console.log('you are healthy weight range!');
}else if(bmiCalculator<29.9){
    console.log('you are  overweight range!');
}else {
    console.log('your are obese range!');
}

