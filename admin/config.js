// config.js — Admin ImpactoTV
// Todos estos valores son PÚBLICOS (van al navegador), no son secretos.
// El supabaseAnonKey es la "anon key" pensada para usarse en el cliente;
// el acceso real está controlado por las políticas RLS del lado del servidor.

const APP_CONFIG = {
  supabaseUrl: "https://sdfwredxmyawvolxuifp.supabase.co",
  supabaseAnonKey: "sb_publishable_D4UuH4ue_5dG1rQ3Qr_DBg_kKoEhMK0",

  // ⚠️ TODO: completar cuando crees la App de OneSignal nueva para ImpactoTV
  // (Web Push → dominio impactotv.alastecno.com). Ahí te dan el App ID
  // (público, va acá) — el REST API Key NO va acá, ese es secreto de servidor.
  oneSignalAdminAppId: "01952a84-9556-4224-9373-b06c96f5647d",
  serviceWorkerPath: "/admin/OneSignalSDKWorker.js",
  serviceWorkerScope: "/admin/",
};