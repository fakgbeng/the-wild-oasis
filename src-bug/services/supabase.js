
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tozxavmyozzvftbquftf.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvenhhdm15b3p6dmZ0YnF1ZnRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY1ODgwMjUsImV4cCI6MjAxMjE2NDAyNX0.yxJO8TMKMUb_dCM-ICWcFYbDV0fATxZkicByq-hazAM";
const supabase = createClient(supabaseUrl, supabaseKey);


export default supabase;