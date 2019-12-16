import React from "react";

const DeveloperCard = ({ name, imagePath, about, lastUpdate }) => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm">
          <div className="card" style={{}}>
            <img src={imagePath} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{about}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">{lastUpdate}</small>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DeveloperCard;
