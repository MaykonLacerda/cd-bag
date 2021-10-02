import 'dotenv/config';
import { app } from './app';

app.listen(process.env.PORT || 3333, () => console.log(' ⚡ Node server proudly running on port ' + `${process.env.PORT}` + ' ⚡'))