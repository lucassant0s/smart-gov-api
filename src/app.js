import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import schema from './graphql-auth/schema';
import schemAPI from './graphql-api/schema';
import {
  isAuthenticate
} from './utils';
import active from './routes/active';

const app = express();
app.disable('x-powered-by');

// View engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(logger('dev', {
  skip: () => app.get('env') === 'test'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/', active);

//graphql auth
app.use('/graphql-auth', cors(), bodyParser.json(), graphqlExpress({
  schema
}));

app.use('/graphiql-auth', cors(), graphiqlExpress({
  endpointURL: '/graphql-auth'
}));

app.use('/graphql-api', cors(), isAuthenticate, bodyParser.json(), graphqlExpress(req => ({
  schema: schemAPI,
  context: { userId: req.userId }
})));

app.use('/graphiql-api', cors(), isAuthenticate, graphiqlExpress({
  endpointURL: '/graphql-api'
}));

export default app;
