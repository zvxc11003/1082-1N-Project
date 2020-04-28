let c, f;

c = parseFloat(prompt('Enter a temperature in C:')).toFixed(2);

f = ((c * 9) / 5.0 + 32).toFixed(2);

console.log(`${c} C = ${f} F`);
