import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://kcdjmcwhkacytgkylxmp.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjZGptY3doa2FjeXRna3lseG1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU5MTc5MTksImV4cCI6MjA5MTQ5MzkxOX0.nhA0JTg0CawiLiwKyo9SwLCidRNRojG5pVL---qIp7A'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
