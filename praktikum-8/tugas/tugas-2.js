function subArrayJumlahK(arr, k) {
    const map = new Map();

    map.set(0, 1);

    let sum = 0;
    let count = 0;

    for (const num of arr) {
        sum += num;

        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }

        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
}

function karakterPertamaUnik(s) {
    const map = new Map();

    for (const c of s) {
        map.set(c, (map.get(c) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
}

// O(n)

// 3. Top K Frequent
function topKFrequent(arr, k) {
    const freq = new Map();

    for (const num of arr) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    return [...freq.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(item => item[0]);
}

// O(n log n)

console.log("=== Subarray Sum K ===");
console.log(subArrayJumlahK([1, 1, 1], 2));

console.log("\n=== Karakter Pertama Unik ===");
console.log(karakterPertamaUnik("leetcode"));

console.log("\n=== Top K Frequent ===");
console.log(topKFrequent([1,1,1,2,2,3], 2));