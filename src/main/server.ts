import * as dotenv from 'dotenv';
import app from './config/app'

dotenv.config()
app.listen(process.env.PORT || 4500)
import './config/database'