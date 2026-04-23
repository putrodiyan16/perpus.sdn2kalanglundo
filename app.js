// Kita ambil fungsi 'supabase' yang sudah kamu buat di supabaseClient.js
import supabase from './supabaseClient.js';

const btnSimpan = document.getElementById('btnSimpan');
const inputNama = document.getElementById('namaSiswa');
const inputKelas = document.getElementById('kelasSiswa');

btnSimpan.addEventListener('click', async () => {
    const nama = inputNama.value;
    const kelas = inputKelas.value;

    // Proses mengirim data ke Supabase
    const { data, error } = await supabase
        .from('Perpus uji 1') // Harus sama persis dengan nama tabel di Supabase
        .insert([
            { 
                "Nama": nama, 
                "Kelas": kelas, 
                "Status Pinjam": "Bebas Pinjam" // Default saat pertama daftar
            }
        ]);

    if (error) {
        console.error('Gagal simpan:', error.message);
        alert('Gagal menyimpan data!');
    } else {
        alert('Data siswa berhasil disimpan!');
        inputNama.value = ''; // Kosongkan input setelah berhasil
    }
});
