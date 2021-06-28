import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import LaunchItem from "./LaunchItem";
const LAUNCHES_QUERY = gql`
  query LaunchQuery {
    launches {
      flight_number
      mission_name
      launch_success
      launch_data_local
    }
  }
`;
export class Launches extends Component {
  render() {
    return (
      <div
        style={{ textAlign: "left", display: "block" }}
        className="container mt-5"
      >
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h1>Loading ...</h1>;
            if (error) return <h1>error ...</h1>;
            return data.launches.map((launch) => {
              return <LaunchItem key={launch.flight_number} launch={launch} />;
            });
          }}
        </Query>
      </div>
    );
  }
}

export default Launches;
