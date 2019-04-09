import { gql } from 'apollo-server-core';
import { LeagueDAO, LeagueInput, LeagueModel } from '../../common';

export const leagueMutationTypeDefs = gql`
  extend type Mutation {
    createLeague(league: LeagueInput!): League,
    deleteLeague(id: ID!): [League],
    updateLeague(id: ID!, league: LeagueInput!): League
  }

  input LeagueInput {
    title: String
    season: SeasonField
    year: Int!
  }
`;

export const leagueMutation = {
  Mutation: {
    createLeague: (root: any, args: LeagueInputArgs) => LeagueDAO.create(args.league),
    deleteLeague: (root: any, args: LeagueModel) => LeagueDAO.delete(args.id),
    updateLeague: (root: any, args: LeagueInputArgs) => LeagueDAO.update(args.id, args.league)
  }
};

interface LeagueInputArgs {
  league: LeagueInput;
  id?: string;
}
