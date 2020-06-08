import { gql } from 'apollo-server-core';
import { LeagueDAO, LeagueModel } from '../../common';

export const leagueTypeDefs = gql`
  extend type Query {
    leagues: [League]
    league(id: ID!): League
  }

  type League {
    id: ID!
    title: String
    season: SeasonField
    year: Int!
  }

  enum SeasonField {
    Fall,
    Winter,
    Spring,
    Summer
  }
`;

export const leagueResolvers = {
  Query: {
    leagues: () => LeagueDAO.getAll(),
    league: (root: any, args: LeagueModel) => LeagueDAO.get(args.id)
  }
};
