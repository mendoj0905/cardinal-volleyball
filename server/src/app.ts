import * as bodyParser from 'body-parser';
import express from 'express';
import * as http from 'http';
import * as mongoose from 'mongoose';
import { Db } from 'mongodb';
import { ApolloServer } from 'apollo-server-express';
import { schema } from '../libs/graphql';

export class App {

  private static db: Db;
  private static mongoClient: any;
  private cardinalGqlServer: express.Application;
  private apolloServer: ApolloServer;

  constructor() {
    this.cardinalGqlServer = express();
    this.initializeMiddleware();
    this.apolloServer = App.getApolloServer();
    this.apolloServer.applyMiddleware({ app:  this.cardinalGqlServer })
  }

  public static getApolloServer(): ApolloServer {

    return new ApolloServer({ schema });

  }

  public static async connectDb(): Promise<Db> {

    const url = 'mongodb://cardinal-mongo:3002/cardinal';

    if (App.db) {
      return App.db
    }

    this.mongoClient = await mongoose.connect(url);

    console.log(`Connected to mongodb at ${url}`);
    return App.db;
  }

  private initializeMiddleware() {
    this.cardinalGqlServer.use(bodyParser.json());
  }

  public startServer(): http.Server {
    const port = 3002;
    return this.cardinalGqlServer.listen(port, () => {
      console.log(`Graphql is running on http://localhost:${port}/graphql`);
    });
  }
}
