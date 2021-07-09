import express, {Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import privateRoutes from './routes/private.routes';
import passport from 'passport';
import passportMidddleware from './middlewares/passport';

// initializations
const app = express();


// settings
app.set('port', process.env.PORT || 5000);



// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMidddleware);



// routes

app.get('/', (req: Request, res: Response) => {
    res.send('<h1> Welcome to Mr Castcode </h1>')
});

app.use(authRoutes);
app.use(privateRoutes);

export default app;