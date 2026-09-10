import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import notes_routes from './routes/notes_routes.js';
import { connectDB } from './config/db.js';
import rate_limiter from './middleware/rate_limiter.js';

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
if (process.env.NODE_ENV !== 'production') {
  app.use(
    cors({
      origin: 'http://localhost:5173',
    })
  );
}
app.use(express.json()); //this middleware will parse json bodies

app.use(rate_limiter);

app.use((req,res,next) => {
  console.log(`Request method is ${req.method} and Request URL is ${req.url}`);
  next();
});

app.use('/api/notes', notes_routes);

connectDB().then(() => {
  const server = app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
  });

  server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
      console.error(`Port ${PORT} is already in use.`);
      process.exit(1);
    } else {
      throw error;
    }
  });
});

