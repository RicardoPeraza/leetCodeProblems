function romanToInt(s: string): number {

const map1 = new Map();

map1.set("I", 1);
map1.set("V", 5);
map1.set("X", 10);
map1.set("L", 50);
map1.set("C", 100);            
map1.set("D", 500);              
map1.set("M", 1000); 

const arr = s.split('')

let valor = 0
for(let i=0;i<arr.length;i++){
 const actual = map1.get(arr[i])!;
    const siguiente = i + 1 < arr.length ? map1.get(arr[i + 1])! : 0;

    if (actual < siguiente) {
        valor -= actual;
    } else {
        valor += actual;
    }

}

return valor

//Se compara el valor actual con el siguiente:
//Si el actual es menor que el siguiente, se resta (caso de sustracción romana).
//Si no, se suma normalmente.
//Se usa ! para afirmar que map1.get(...) no es undefined (esto es válido si sabes que los datos siempre están bien).
};