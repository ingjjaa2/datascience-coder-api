// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import express from 'express';
import config_app from './infrastructure/config/app';
import CustomRouter  from './infrastructure/router';

const app = express();
const port = config_app.port;
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(CustomRouter.createRoutes());

console.log("Iniciando")

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});