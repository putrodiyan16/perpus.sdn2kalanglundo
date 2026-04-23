const supabaseUrl = 'https://vdkjyvdfddybtmyytqdx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZka2p5dmRmZGR5YnRteXl0cWR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY5MzE1MjUsImV4cCI6MjA5MjUwNzUyNX0.jT72qRw6-AbO4vTZb5P5H7rOPZLYhOrkKcRHSfSc5wI';
const { createClient } = supabase; // Ambil fungsi dari library
const _supabase = createClient(supabaseUrl, supabaseKey); // Gunakan nama variabel berbeda, misal _supabase

// Fungsi Pindah Halaman
function tampilkanHalaman(idHalaman) {
    document.getElementById('menu-utama').classList.add('hidden');
    document.querySelectorAll('.halaman').forEach(h => h.classList.add('hidden'));
    document.getElementById(idHalaman).classList.remove('hidden');
}

function kembaliKeMenu() {
    document.querySelectorAll('.halaman').forEach(h => h.classList.add('hidden'));
    document.getElementById('menu-utama').classList.remove('hidden');
}

// Logika Simpan Registrasi (Yang sudah kita tes berhasil)
const btnSimpan = document.getElementById('btnSimpan');
btnSimpan.addEventListener('click', async () => {
    const nama = document.getElementById('namaSiswa').value;
    const kelas = document.getElementById('kelasSiswa').value;

    if(!nama || !kelas) {
        alert("Isi nama dan kelas dulu ya!");
        return;
    }

    const { data, error } = await supabase
        .from('Perpus digital') // Sesuaikan dengan nama tabel barumu jika berubah
        .insert([{ "Nama Siswa": nama, "Kelas": kelas }]);

    if (error) {
        console.error(error);
        alert("Gagal simpan: " + error.message);
    } else {
        alert("Data siswa berhasil disimpan! ID otomatis telah dibuat di sistem.");
        document.getElementById('namaSiswa').value = '';
        document.getElementById('kelasSiswa').value = '';
        kembaliKeMenu();
    }
});
