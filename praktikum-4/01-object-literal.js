//01-object-literal.js

const mahasiswa = {
    nama     : 'Budi Santoso',
    umur     : 20,
    jurusan  : 'Teknik Informatika',
    ipk      :3.75,
    aktif    :true,
};

console.log('===Akses Property ===');
console.log('Nama   :', mahasiswa.nama);
console.log('Jurusan:', mahasiswa['Jurusan']);

const keyYangDicari = 'ipk';
console.log('IPK     :', mahasiswa[keyYangDicari]);

mahasiswa.email = 'budi@gmail.com';
mahasiswa.umur  = 21;

console.log('\nSetelah diubah:', mahasiswa);

delete mahasiswa.aktif;
console.log('Setelah delete:', mahasiswa);

const dosen = {
    nama         :'Dr. Ahmad Fauzi',
    mataKuliah   :'Struktur Data',
    pengalaman   : 10, //tahun

    perkenalan() {
       return 'Halo, saya ${this.nama}, mengajar ${this.mataKuliah}.';
    },

    StatusSenior() {
        if (this.pengalaman >= 10) {
            return '${this.nama} adalah dosen senior.';
        }
        return '${this.nama} adalah dosen junior.';
    }
};

console.log('\n=== Method Object ===');
console.log(dosen.perkenalan());
console.log(dosen.StatusSenior());

console.log('\n=== Iterasi Object ===');
for (const key in dosen) {
    if (typeof dosen[key] !=='function') {
        console.log('  ${key}:  ${dosen[key]}');
    }
}
// Object.keys(), 0bject values(), Object.entries()
console.log('Keys  :', Object.keys(mahasiswa));
console.log('Values:', Object.values(mahasiswa));

//latihan
const buku ={
    judul : 'Pelangi Sesaat',
    pengarang : 'Ratisya Dwi Putri',
    tahunTerbit : '2017',
    harga : '250000',
    tersedia : 'true',

info(){
    return `${this.judul} oleh ${this.pengarang} (${this.tahunTerbit}) - Rp${this.harga} - ${this.tersedia ? "Tersedia" : "Tidak Tersedia"}`;
    },
    diskon(persen){
        return this.harga * (1 - persen / 100);
    }
}

const koleksiBuku = [
    {
        judul: 'Raja Karsa',
        pengarang: 'Rebsa Arta',
        tahunTerbit: 2008,
        harga: '150000',
        tersedia :true,
        info(){
            return `${this.judul} oleh ${this.pengarang} (${this.tahunTerbit}) - Rp${this.harga} - ${this.tersedia ? "tersedia" : "Tidak Tersedia"}`;
        },
        diskon(persen) {
            return this.harga *(1 - persen / 100);
        }


},
{
    judul: 'Ivanna',
    pengarang: 'Risa Saraswati',
    tahunTerbit: '2005',
    harga : 165000,
    tersedia: false,
    info(){
        return `${this.judul} oleh ${this.pengarang} (${this.tahunTerbit}) - Rp${this.harga} - ${this.tersedia ? "Tersedia " : "Tidak Tersedia"}`;
    },
    diskon(persen){
        return this.harga * (1 - persen / 100);
    }
},
{
    judul: 'Angkasa Hayalan',
    pengarang: 'Syakira',
    tahunTerbit: '2021', 
    harga: '1700000',
    tersedia: true,
    info(){
        return `${this.judul} oleh ${this.pengarang} (${this.tahunTerbit}) - Rp${this.harga} - ${this.tersedia ? "Tersedia " : "Tidak Tersedia"}`;
    },
    diskon(persen){
        return this.harga * (1 - persen / 100);
    }
}];
koleksiBuku.forEach(buku => {
    console.log(buku.info());
});

console.log('Buku tersedia (filter):')
const bukuTersedia = koleksiBuku.filter(buku => buku.tersedia === true);
console.log('Total buku tersedia: ' + bukuTersedia.length + ' judul\n');
bukuTersedia.forEach(buku => {
    console.log(buku.info());
});