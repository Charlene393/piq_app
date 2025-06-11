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
        car_plates VARCHAR(255) NOT NULL UNIQUE,
        car_model VARCHAR(255) NOT NULL,
        car_color VARCHAR(255) NOT NULL,
        additional_notes TEXT,
        created_at DATE NOT NULL DEFAULT CURRENT_DATE,
        updated_at DATE NOT NULL DEFAULT CURRENT_DATE
        )`
        console.log("Database initialized successfully.");
    }catch(error){
        console.error("Error initializing database:", error)
        process.exit(1); //status code 1 means failure 0 success
    }
}
//build in middleware
app.use(express.json());

app.get("/api/rides/:user_id", async (req, res) => {
    try{
       const {user_id} = req.params;
        const rides = await sql `SELECT * FROM rides WHERE user_id = ${user_id} ORDER BY created_at DESC`;
        res.status(200).json(rides);
    }catch(error){
        console.error("Error fetching rides:", error);
        res.status(500).json({error: "Internal server error"});
    }
})

app.post("/api/rides",async (req,res)=>{
    try{
        const {user_id, from_location, to_location, ride_date, ride_time, price_per_seat, available_seats,car_plates, car_model, car_color } = req.body;
        if(!user_id || !from_location || !to_location || !ride_date || !ride_time || !price_per_seat || !available_seats || !car_plates || !car_model || !car_color){
            return res.status(400).json({error: "All fields are required"});
        }
        const ride = await sql `INSERT INTO rides (user_id, from_location, to_location, ride_date, ride_time, price_per_seat, available_seats, car_plates, car_model, car_color)
        VALUES (${user_id}, ${from_location}, ${to_location}, ${ride_date}, ${ride_time}, ${price_per_seat}, ${available_seats}, ${car_plates}, ${car_model}, ${car_color})
        RETURNING *
        `;
        console.log(ride)
        res.status(201).json({message: "Ride created successfully"});
    }catch(error){
        console.error("Error creating ride:", error)
        res.status(500).json({error: "Internal server error"});

    }
})
app.delete("/api/rides/:id",async(req, res)=>{

    try{
        const {id} = req.params;
        if (isNaN(parseInt(id))) {
           return res.status(400).json({error: "Invalid ride ID"}); 
        }
        const result = await sql `DELETE FROM rides WHERE id = ${id} RETURNING *`;
        if(result.length === 0){
            return res.status(404).json({error: "Ride not found"});
        }
        res.status(200).json({message: "Ride deleted successfully"});
    }catch(error){
        console.error("Error deleting ride:", error);
        res.status(500).json({error: "Internal server error"});
    }
})

initDB().then(() => {
    app.listen(PORT, () => {
        console.log('Server is running on port:', PORT);
    });
})

