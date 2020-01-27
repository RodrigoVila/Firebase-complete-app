import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

const ProjectDetails = props => {
  const { project } = props;
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depht-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}
            </div>
            <div>3rd September 2am</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p
          style={{
            color: "white",
            fontSize: "25px",
            fontWeight: 500,
            paddingTop: "50px"
          }}
        >
          Loading project...
        </p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
