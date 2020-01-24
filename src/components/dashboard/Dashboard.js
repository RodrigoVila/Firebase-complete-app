import React from "react";
import { connect } from 'react-redux'

import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";

const { projects } = this.props;

const Dashboard = props => {
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={projects} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  );
};

const mapStateToprops = (state) => {
  return {
    projects: state.project.projects
  }
}

export default connect(mapStateToprops)(Dashboard);
