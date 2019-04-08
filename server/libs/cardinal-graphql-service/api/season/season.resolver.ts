import { gql } from 'apollo-server-core';

export const seasonTypeDefs = gql`
  extend type Query {
    seasons: [Season]
    season(id: ID!): Season
  }

  type Season {
    id: ID!
    season: String!
    year: Int!
  }
`;

export const seasonResolvers = {
  Query: {
    seasons: () => [
      { id: 1, season: 'Fall', year: 2019 },
      { id: 2, season: 'Winter', year: 2020 },
      { id: 3, season: 'Spring', year: 2020 }
    ]
  }
}
