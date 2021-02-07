import express from 'express';
import routes from './routes/documents.routes';
import * as bodyParser from 'body-parser';


const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
      'Access-Control-Allow-Headers', 
      'Origin, X-Requested-Width, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
});

app.use('/api/documents', routes);

app.listen(8000, async () => {
  console.log('App is live');  
});
