
import 'dotenv/config';
import nodels, { db } from './models';
import app from './app';
db.sync().then(() => {
    app.listen(process.env.PORT, () => {
    console.log("Express Running At Port http://localhost:"+process.env.PORT);
});
});
