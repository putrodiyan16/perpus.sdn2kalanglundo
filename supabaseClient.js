// Kita harus mengambil fungsi createClient dari library yang sudah dimuat di index.html
const { createClient } = window.supabase;

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Gunakan fungsi createClient yang sudah kita ambil tadi
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
