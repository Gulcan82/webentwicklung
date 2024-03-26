const beispielArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let arrayLänge: number = beispielArray.length;
console.log("Arraylänge: " + arrayLänge);

let zufallsZahl: number = Math.random() * arrayLänge;
console.log("Zufallszahl " + zufallsZahl);

let gerundeteZufallszahl: number = Math.round(Math.random() * arrayLänge);

console.log("gerundete Zufallszahl " + gerundeteZufallszahl);