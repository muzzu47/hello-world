function cll(){
    let age = prompt('Your age?', 18);
    let valu = Number(age);
switch (valu) {
  case 18:
    alert("Won't work");
    break; // the result of prompt is a string, not a number

  case "18":
    alert("This works!");
    break;

  default:
    alert("Any value not equal to one above");
}
}

 