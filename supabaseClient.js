// Mengimpor library Supabase (nanti kita ambil lewat CDN di HTML)
const supabaseUrl = 'ISI_DENGAN_URL_KAMU';
const supabaseKey = 'ISI_DENGAN_ANON_KEY_KAMU';

const supabase = supabase.createClient(supabaseUrl, supabaseKey);

export default supabase;
