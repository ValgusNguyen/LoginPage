import { createClient } from "@supabase/supabase-js";


const supabaseUrl: any = process.env.NEXT_URL;
const supabaseKey: any = process.env.NEXT_KEY;
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
