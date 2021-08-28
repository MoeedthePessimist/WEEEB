import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import Pusher from 'pusher'
import DBmodel from './DBmodel.js'

//app config
const app = express();
const port = process.env.PORT || 8070;
const pusher = new Pusher({
    appId: "1189907",
    key: "887621dc82dc6fd6e589",
    secret: "7a61d6ef698edf4f34bc",
    cluster: "eu",
    useTLS: true
});




//middlewares
app.use(express.json());
app.use(cors());


//DB config
const connection_url = "mongodb+srv://eden:rGFvPACLjGKQNYGB@cluster0.bf6ox.mongodb.net/insta-cloneDB?retryWrites=true&w=majority"
mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
    console.log('DB is connected');

    const changeStream = mongoose.connection.collection('post').watch();
    changeStream.on('change', (change) => {
        console.log('change stream triggered');
        console.log(change);
        console.log('End of change');

        if(change.operationType === 'insert') {
            console.log('img upload');
            const postDetails = change.fullDocument;
            pusher.trigger('post', 'inserted', {
                user: postDetails.user,
                caption: postDetails.caption,
                image: postDetails.image
            });
        } else {
            console.log('Error in pusher');
        }
    });
});


//api routes
app.get('/', (req,res) => res.status(200).send('hello world'));
app.post('/upload', (req, res) => {
    const body = req.body;

    DBmodel.create(body, (err, data) => {
        if (err){
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});
app.get('/sync', (req, res) => {
    DBmodel.find((err, data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});


//listening port
app.listen(port, () => console.log(`listening to localhost: ${port}`));