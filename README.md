# My Supabase App

Node.js application to ping/pulse a Supabase database and writes a random number to a public anonymous table. Useful to prevent your database from being marked to be paused to inactivity.

## Setup Instructions

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Environment Variables**

   Create a `.env` file with the following content:

   ```env
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

   Replace `your_supabase_url` and `your_supabase_anon_key` with your actual Supabase credentials.

4. **Run the Application**

   ```bash
   node index.js
   ```

## Scheduling with Cron

To schedule this script as a cron job:

1. Open your crontab config:

   ```bash
   crontab -e
   ```

2. Add a cron job to run the script at your desired frequency. For example, to run it every day at midnight:

   ```cron
   0 0 * * * /usr/bin/node /path/to/your/supabase-ping/index.js
   ```

   Make sure to replace `/path/to/your/supabase-ping` with the actual path to your project.