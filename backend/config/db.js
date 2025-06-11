import {neon} from '@neondatabase/serverless';
import "dotenv/config";
//create sql connection using db url
export const sql = neon(process.env.DATABASE_URL);