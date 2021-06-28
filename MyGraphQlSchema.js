const { default: axios } = require("axios");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
  GraphQLInt,
} = require("graphql");

const LaunchType = new GraphQLObjectType({
  name: "Launches",
  fields: () => ({
    flight_number: { type: GraphQLString },
    mission_name: { type: GraphQLString },
    launch_year: { type: GraphQLString },
    launch_data_local: { type: GraphQLString },
    launch_success: { type: GraphQLBoolean },
    rocket: { type: RocketType },
  }),
});

const RocketType = new GraphQLObjectType({
  name: "Rocket",
  fields: () => ({
    rocket_id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString },
    reused: { type: GraphQLBoolean },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    launches: {
      type: new GraphQLList(LaunchType),
      async resolve(parent, args) {
        const result = await axios.get(
          "https://api.spacexdata.com/v3/launches"
        );
        return result.data;
      },
    },
    launch: {
      type: LaunchType,
      args: {
        flight_number: { type: GraphQLInt },
      },
      async resolve(parent, args) {
        const result = await axios.get(
          `https://api.spacexdata.com/v3/launches/${args.flight_number}`
        );
        return result.data;
      },
    },
    },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
