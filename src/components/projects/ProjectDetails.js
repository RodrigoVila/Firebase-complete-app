import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depht-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquam perferendis vero dolorum saepe, iure unde debitis voluptate, molestiae, eligendi cum at autem libero sint nostrum itaque eos! Enim laudantium voluptatem velit vitae quasi minus modi totam mollitia nobis a.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Another guy</div>
          <div>3rd September 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
