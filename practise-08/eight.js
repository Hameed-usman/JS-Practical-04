// alert("welcome $$");

// GENERATE RANDM PASSWORD 

// 01 
// let randomNumber = Math.floor(Math.random() * 100) + 1;
// console.log(randomNumber);

// 02 

// let minNumber = +prompt("Enter the minimum number:");
// let maxNumber = +prompt("Enter the maximum number:");

// randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
// console.log(randomNumber);

// 03 -- COIN TOSS --

// let toss = Math.floor(Math.random() * 2);
// if (toss === 0) {
//   console.log("Heads");
// } else {
//   console.log("Tails");
// }


// RANDOM PASSWORD GENERATOR PROGRAM  

// const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
// let password = "";
// let passwordLength = +prompt("Enter the desired password length:");

// for (let i = 0; i < passwordLength; i++) {
//   password += characters.charAt(Math.floor(Math.random() * characters.length));
// }
// alert("Generated password:", password);

// NOW:
         // Converting Strings to numers and Numbers to string

// let num = "123";
// let num2 = parseInt(num);
// console.log(num2);

// problem:

// let str = "123.45";
// let decimalNumber = parseFloat(str);
// console.log(decimalNumber);


// Controlling the Length of Decimals using toFixed method

// problem:

// let numberValue = 123.45678;
// let formattedNumber = numberValue.toFixed(2);
// console.log(formattedNumber);

// problem :

// let formattedNumber = numberValue.toFixed(4);
// console.log(formattedNumber);


// NOW  --:
// Getting the Current Date and Time

// Problem

// let currentDate = new Date();
// console.log(currentDate);

// probelm :

// let daye = currentDate.toISOString();
// console.log(daye);

// +++++++++  "AGE CALCULATOR"  +++++++++++

// let birthdate = prompt("Enter your birthdate (YYYY-MM-DD):");
// let today = new Date(); 

// let birthYear = parseInt(birthdate.substring(0, 4));
// let birthMonth = parseInt(birthdate.substring(5, 7));
// let birthDay = parseInt(birthdate.substring(8, 10));

// let currentYear = today.getFullYear();
// let currentMonth = today.getMonth() + 1;  
// let currentDay = today.getDate();

// let age = currentYear - birthYear;

// if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
//   age--;
// }

// console.log("Your age is:", age);



// EXTRACTING THE YEAR 

// problem 

// let month = currentDate.getMonth() + 1; // AS month starts form 0
// console.log("Month:", month);


// £££££££££££££££££££   APPOINTMENT SHEDULE £££££££££££££££ /

// let appointmentDate = prompt("Enter the appointment date and time (YYYY-MM-DD HH:MM):");

// let appointment = new Date(appointmentDate);

// let now = new Date();

// if (appointment > now) {
//   console.log("Your appointment is successfully scheduled for: " + appointment);
// } else {
//   console.log("The entered date and time is in the past. Please schedule a future appointment.");
// }




