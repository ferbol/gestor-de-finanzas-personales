
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient("https://ggrrvvuihiubvqptsnnd.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdncnJ2dnVpaGl1YnZxcHRzbm5kIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NjY3MTI3NywiZXhwIjoyMDAyMjQ3Mjc3fQ.UUmDpDyJEW94jGzD_d9XxgqTtUXHN_brf9NEPNoL9qo");

async function consultarMovimientos(){
    const { data, error } = await supabase
    .from('Movimientos')
    .select()
}