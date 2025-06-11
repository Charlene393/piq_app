import express from 'express';
import dotenv from 'dotenv';
import {sql} from './config/db.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT ||5001;

async function initDB(){
    try{
        await sql`CREATE TABLE IF NOT EXISTS rides(
        id SERIAL PRIMARY KEY,
        user_id VARCHAR(255) NOT NULL,
        from_location VARCHAR(255) NOT NULL,
        to_location VARCHAR(255) NOT NULL,
        ride_date DATE NOT NULL,
        ride_time TIME NOT NULL,
        price_per_seat NUMERIC NOT NULL,
        available_seats INT NOT NULL,
        is_active BOOLEAN DEFAULT TRUE,
        is_completed BOOLEAN DEFAULT FALSE,
        is_cancelled BOOLEAN DEFAULT FALSE,
        car_details VARCHAR(255) NOT NULL,
        ride_notes TEXT,
        created_at DATE NOT NULL DEFAULT CURRENT_DATE,
        updated_at DATE NOT NULL DEFAULT CURRENT_DATE
        )`
        console.log("Database initialized successfully.");
    }catch(error){
        console.error("Error initializing database:", error)
        process.exit(1); //status code 1 means failure 0 success
    }
}

app.get('/', (req, res) => {
res.send("Hello, World!");
})

initDB().then(() => {
    app.listen(PORT, () => {
        console.log('Server is running on port:', PORT);
    });
})

