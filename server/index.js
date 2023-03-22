import express from 'express';
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import helmet from 'helmet';
import morgan from 'morgan';
import path from "path";
import {fileURLToPath} from 'url';

// Configs
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json())
app.use(helmet())
// app.use(helmet.crossOriginEmbedderPolicy({
//     policy: 'cross-origin'
// }))
app.use(function(req, res, next) {
    res.header("Cross-Origin-Embedded-Policy", "require-corp");
    res.header("Cross-Origin-Opener-Policy", "same-origin");
    next();
});
app.use(morgan('common'));
app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
app.use(cors())
app.use('/assets',express.static(path.join(__dirname, 'public/assets')))

// File Storage
const storage = multer.diskStorage({
    destination: function (req, file,cb){
        cb(null,'public/assets');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({storage})

// Mongoose setup

const PORT = process.env.PORT || 3001;
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
}).catch((err)=>{
    console.log(`${err} did not connect`)
})