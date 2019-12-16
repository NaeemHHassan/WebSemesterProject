import React from "react";
import NaeemLogo from "../images/Naeem.jpg";
import WaleedLogo from "../images/Waleed.jpg";
import DeveloperCard from "./developerCard";

const About = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm">
          {/* <a
            tabindex="0"
            className="btn btn-secondary"
            data-toggle="popover"
            data-trigger="focus"
            title="Popup title"
            data-content="Popup content"
          >
            Trigger
          </a> */}
          <div>
            <main>
              <h1 style={{ textAlign: "center" }}>About Developers</h1>
              <div className="row">
                <div className="col">
                  <DeveloperCard
                    name="Naeem Hassan"
                    about="something"
                    imagePath={NaeemLogo}
                    lastUpdate="---"
                  />
                </div>
                <div className="col">
                  <DeveloperCard
                    name="Waleed Ahmad"
                    about="something"
                    imagePath={WaleedLogo}
                    lastUpdate="---"
                  />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
