import express from 'express';
import routes from './routes/routes.js';
import cors from 'cors';
import connect from './database/db.js';

const app = express();
connect();

app.use(cors());
app.use('/', routes);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`);
});
