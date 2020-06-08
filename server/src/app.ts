import * as bodyParser from 'body-parser';
import express from 'express';
import * as http from 'http';
import mongoose from 'mongoose';
import { Db } from 'mongodb';
import { ApolloServer } from 'apollo-server-express';
import { schema } from '../libs/graphql';

export class Server {

  private static db: Db;
  private cardinalGqlServer: express.Application;
  private apolloServer: ApolloServer;

  constructor() {
    this.cardinalGqlServer = express();
    this.initializeMiddleware();
    Server.connectDb();
    this.apolloServer = Server.getApolloServer();
    this.apolloServer.applyMiddleware({ app:  this.cardinalGqlServer })
  }

  public static getApolloServer(): ApolloServer {
    return new ApolloServer({ schema });
  }

  public static async connectDb() {
    const url = 'mongodb://cardinal-mongo:3001/cardinal'; // TODO: move to application.json configuration file

    mongoose.connect(url, { useNewUrlParser: true });
    mongoose.connection.on('error', error => console.log(error));

    console.log(`Connected to mongodb at ${url}`);
  }

  private initializeMiddleware() {
    this.cardinalGqlServer.use(bodyParser.json());
  }

  public startServer(): http.Server {
    const port = 3002; // TODO: move to application.json configuration file

    return this.cardinalGqlServer.listen(port, () => {
      console.log(`Graphql is running on http://localhost:${port}/graphql`);
    });
  }
}
