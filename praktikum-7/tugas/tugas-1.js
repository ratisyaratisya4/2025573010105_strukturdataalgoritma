class Node {
 constructor(data) {
  this.data = data;
  this.next = null;
 }
}

class Queue {
 constructor() {
  this.head = null;
  this.tail = null;
  this.size = 0;
 }

 enqueue(data) {
  const node = new Node(data);

  if (!this.tail) {
   this.head = this.tail = node;
  } else {
   this.tail.next = node;
   this.tail = node;
  }

  this.size++;
 }

 dequeue() {
  if (this.isEmpty()) return null;

  const val = this.head.data;
  this.head = this.head.next;

  if (!this.head) this.tail = null;

  this.size--;
  return val;
 }

 isEmpty() {
  return this.size === 0;
 }
}

class Pasien {
 constructor(id, nama, prioritas, waktuDaftar) {
  this.id = id;
  this.nama = nama;
  this.prioritas = prioritas;
  this.waktuDaftar = waktuDaftar;
 }
}

class AntrianRS {
 constructor() {
  this.antrianDarurat = new Queue();
  this.antrianBiasa = new Queue();
 }

 daftar(pasien) {
  if (pasien.prioritas === "darurat")
   this.antrianDarurat.enqueue(pasien);
  else
   this.antrianBiasa.enqueue(pasien);
 }

 layani() {
  let pasien = null;

  if (!this.antrianDarurat.isEmpty())
   pasien = this.antrianDarurat.dequeue();
  else if (!this.antrianBiasa.isEmpty())
   pasien = this.antrianBiasa.dequeue();

  if (pasien) {
   console.log(
    `Melayani: ${pasien.nama} (${pasien.prioritas})`
   );
  }
 }

 tampilkanAntrian() {
  console.log("Darurat :", this.antrianDarurat.size);
  console.log("Biasa   :", this.antrianBiasa.size);
 }
}

const rs = new AntrianRS();

for (let i = 1; i <= 10; i++) {
 const prioritas = Math.random() > 0.5 ? "darurat" : "biasa";

 rs.daftar(
  new Pasien(
   i,
   `Pasien-${i}`,
   prioritas,
   new Date()
  )
 );
}

rs.tampilkanAntrian();

console.log("\n=== Proses Pelayanan ===");

while (
 !rs.antrianDarurat.isEmpty() ||
 !rs.antrianBiasa.isEmpty()
) {
 rs.layani();
}