import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY;

// se mancano env in Cloudflare, non crashare tutta la landing
export const supabase = url && anon ? createClient(url, anon) : null;
