const DELETED = Symbol("deleted");

class HashMapLinearProbing {
    constructor(kapasitas = 8) {
        this.kapasitas = kapasitas;
        this.ukuran = 0;
        this.table = new Array(kapasitas);
    }

    _hash(key) {
        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            hash = (hash * 31 + key.charCodeAt(i)) % this.kapasitas;
        }

        return hash;
    }

    _resize() {
        const oldTable = this.table;

        this.kapasitas *= 2;
        this.table = new Array(this.kapasitas);
        this.ukuran = 0;

        for (const item of oldTable) {
            if (item && item !== DELETED) {
                this.set(item.key, item.value);
            }
        }
    }

    set(key, value) {
        if ((this.ukuran + 1) / this.kapasitas > 0.7) {
            this._resize();
        }

        let idx = this._hash(key);

        while (
            this.table[idx] &&
            this.table[idx] !== DELETED &&
            this.table[idx].key !== key
        ) {
            idx = (idx + 1) % this.kapasitas;
        }

        if (!this.table[idx] || this.table[idx] === DELETED) {
            this.ukuran++;
        }

        this.table[idx] = { key, value };
    }

    get(key) {
        let idx = this._hash(key);

        while (this.table[idx]) {
            if (
                this.table[idx] !== DELETED &&
                this.table[idx].key === key
            ) {
                return this.table[idx].value;
            }

            idx = (idx + 1) % this.kapasitas;
        }

        return undefined;
    }

    delete(key) {
        let idx = this._hash(key);

        while (this.table[idx]) {
            if (
                this.table[idx] !== DELETED &&
                this.table[idx].key === key
            ) {
                this.table[idx] = DELETED;
                this.ukuran--;
                return true;
            }

            idx = (idx + 1) % this.kapasitas;
        }

        return false;
    }
}

const map = new HashMapLinearProbing();

map.set("A", 10);
map.set("B", 20);
map.set("C", 30);

console.log(map.get("B"));

map.delete("B");

console.log(map.get("B"));