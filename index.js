const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') })
const { createClient } = require('@supabase/supabase-js');


const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function insertRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 1000);

    const { data, error } = await supabase
        .from('random_numbers')
        .insert([{ number: randomNumber }])
        .select();

    if (error) {
        console.error('Error inserting data:', error);
        return;
    }

    if (data) {
        console.log('Inserted data:', data);
    } else {
        console.log('No data returned, but no error encountered. Check table configuration.');
    }
}

insertRandomNumber();

