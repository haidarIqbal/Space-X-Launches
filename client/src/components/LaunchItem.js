import React from "react";

export default function LaunchItem(launch) {
  const mission_name = launch.mission_name;
  const launch_data_local = launch.launch_data_local;
  console.log(mission_name, launch);
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-9">
          <h4>Mission: {mission_name}</h4>
          <p>Date Launch: {launch_data_local}</p>
        </div>
        <div className="col-3">
          <button className="btn btn-primary">See Details</button>
        </div>
      </div>
    </div>
  );
}
