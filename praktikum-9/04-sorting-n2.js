function bubbleSort(arr) {
    const a = [...arr];
    for (let i = 0; i < a.length - 1; i++) {
        let sudahTerurut = true;
        for (let j = 0; j < a.length - i - 1; j++) {
            if (a[j] > a[j+1]) {
            [a[j], a[j+1]] = [a[j+1], a[j]];
            sudahTerurut = false;
        }
    }
    if (sudahTerurut) break; 
    }
    return a;
}

function selectionSort(arr) {
    const a = [...arr];
    for (let i = 0; i < a.length - 1; i++) {
        let idxMin = i;
        for (let j = i+1; j < a.length; j++)
            if (a[j] < a[idxMin]) idxMin = j;
        if (idxMin !== i) [a[i], a[idxMin]] = [a[idxMin], a[i]];
    }
    return a;
}

function insertionSort(arr) {
    const a = [...arr];
    for (let i = 1; i < a.length; i++) {
        const kunci = a[i];
        let j = i - 1;
        while (j >= 0 && a[j] > kunci) {
            a[j+1] = a[j];
            j--;
        }
        a[j+1] = kunci; 
    }
    return a;
}

const contoh = [64, 34, 25, 12, 22, 11, 90];
console.log('Input :', contoh);
console.log('Bubble Sort :', bubbleSort(contoh));
console.log('Selection Sort:', selectionSort(contoh));
console.log('Insertion Sort:', insertionSort(contoh));

console.log('\n=== Benchmark n=5000 ===');
const N = 5000;
const acak = Array.from({length:N},()=>Math.floor(Math.random()*N));
['bubbleSort','selectionSort','insertionSort'].forEach(nama => {
    const fn = {bubbleSort,selectionSort,insertionSort}[nama];
    const t = Date.now(); fn([...acak]); console.log(`${nama}: ${Date.now()-t} ms`);
});

console.log('\n=== Insertion Sort pada data hampir terurut (n=5000) ===');
const hampirTerurut =
Array.from({length:N},(_,i)=>i).map((x,i)=>i%50===0?x+Math.floor(Math.random()*10):x);
let t = Date.now(); insertionSort(hampirTerurut); console.log('Insertion Sort:', Date.now()-t,
'ms (jauh lebih cepat!!)');