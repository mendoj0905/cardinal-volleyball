export const resolvers = {
  Query: {
    _empty: () => 'Graphql is running. Test Query.'
  },
  Mutation: {
    _emptyMutation: (root: any, args: any) =>  args.test
  }
};