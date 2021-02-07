import express from 'express';
import routes from './routes/documents.routes';
import * as bodyParser from 'body-parser';


const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/documents', routes);

app.listen(8000, async () => {
  console.log('App is live');  
});
