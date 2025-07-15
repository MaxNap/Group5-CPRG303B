import { createClient } from "@supabase/supabase-js";3

const supabase = createClient(
    "https://vudgamtpyfxtzsklwdek.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1ZGdhbXRweWZ4dHpza2x3ZGVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1OTgxNTgsImV4cCI6MjA2ODE3NDE1OH0.zD40cStKbULCnO3ZW_ipSk0iua8-8QAb0esqrM37NHE"
)

export default supabase;