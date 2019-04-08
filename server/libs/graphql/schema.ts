import { gql, makeExecutableSchema } from 'apollo-server-express';
import { merge } from 'lodash';
import { 
  seasonTypeDefs as Season,
  seasonResolvers
} from '../cardinal-graphql-service/api';
import { resolvers } from './rootResolvers';

const Query = gql`
  type Query {
    _empty: String
  }
`;

export const schema = makeExecutableSchema({
  typeDefs: [ 
    Query, 
    Season 
  ],
  resolvers: merge( 
    resolvers, 
    seasonResolvers 
  )
});