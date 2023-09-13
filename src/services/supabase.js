import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kiinyqneyrponffshfxm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpaW55cW5leXJwb25mZnNoZnhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI5ODQzMjcsImV4cCI6MjAwODU2MDMyN30.BCJu1GgpEmVJYMQx6Oi-3nRAxtVlhhMmMK4xzMROZxg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
