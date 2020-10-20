
import 'dotenv/config';
import app from './app';

    app.listen(process.env.PORT, () => {
    console.log("Express Running At Port http://localhost:"+process.env.PORT);
});

