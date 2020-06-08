import { gql, makeExecutableSchema } from 'apollo-server-express';
import { merge } from 'lodash';
import { 
  leagueTypeDefs as League,
  leagueMutationTypeDefs,
  leagueResolvers,
  leagueMutation
} from '../cardinal-graphql-service/api';
import { resolvers } from './rootResolvers';

const Root = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _emptyMutation(test: String): String
  }
`;

export const schema = makeExecutableSchema({
  typeDefs: [ 
    League,
    leagueMutationTypeDefs,
    Root
  ],
  resolvers: merge( 
    leagueResolvers,
    leagueMutation,
    resolvers
  )
});