import React from "react";
import "../index.css";
import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
  return (
    <div style={{ marginTop: "15px", marginBottom: "15px", padding: "15px" }}>
      <footer
        id="contact"
        style={{
          marginLeft: "0px",
          marginRight: "0px",
          backgroundColor: "#242729",
          backgroundImage: "none",
          backgroundPosition: "top left",
          backgroundRepeat: "no-repeat",
          borderTop: "0",
          backgroundSize: "auto",
          color: "#6a737c",
          paddingTop: "0",
          paddingBottom: "0",
          width: "100%"
        }}
      >
        <div>
          <div className="row" style={{ margin: "0px" }}>
            <div className="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">
              <h5 className="mb-4 font-weight-bold">ABOUT US</h5>
              <p className="mb-4">Etiam laoreet in ex quis efficitur.</p>
              <ul className="f-address">
                <li>
                  <div className="row">
                    <div className="col-1">
                      <i className="fas fa-map-marker"></i>
                    </div>
                    <div className="col-10">
                      <h6 className="font-weight-bold mb-0">Address:</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-1">
                      <i className="far fa-envelope"></i>
                    </div>
                    <div className="col-10">
                      <h6 className="font-weight-bold mb-0">
                        Have any questions?
                      </h6>
                      <p>
                        <a href="#.com">Support@userthemes.com</a>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-1">
                      <i className="fas fa-phone-volume"></i>
                    </div>
                    <div className="col-10">
                      <h6 className="font-weight-bold mb-0">Address:</h6>
                      <p>
                        <a href="#.com">+XX (0) XX XX-XXXX-XXXX</a>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">
              <h5 className="mb-4 font-weight-bold">FRESH TWEETS</h5>
              <ul className="f-address">
                <li>
                  <div className="row">
                    <div className="col-1">
                      <i className="fa fa-twitter"></i>
                    </div>
                    <div className="col-10">
                      <p className="mb-0">
                        <a href="#.com">@userthemesrel </a> HTML Version Out Now
                      </p>
                      <label>10 Mins Ago</label>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-1">
                      <i className="fa fa-twitter"></i>
                    </div>
                    <div className="col-10">
                      <p className="mb-0">
                        <a href="#.com">@userthemesrel </a> HTML Version Out Now
                      </p>
                      <label>10 Mins Ago</label>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-1">
                      <i className="fa fa-twitter"></i>
                    </div>
                    <div className="col-10">
                      <p className="mb-0">
                        <a href="#.com">@userthemesrel </a> HTML Version Out Now
                      </p>
                      <label>10 Mins Ago</label>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">
              <h5 className="mb-4 font-weight-bold">LATEST UPDATES</h5>
              <ul className="recent-post">
                <li>
                  <label className="mr-3">
                    28 <br />
                    <span>APR</span>
                  </label>
                  <span>Rendomised words which dont look eveable.</span>
                </li>
                <li>
                  <label className="mr-3">
                    29 <br />
                    <span>APR</span>
                  </label>
                  <span>Rendomised words which dont look eveable.</span>
                </li>
                <li>
                  <label className="mr-3">
                    30 <br />
                    <span>APR</span>
                  </label>
                  <span>Rendomised words which dont look eveable.</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">
              <h5 className="mb-4 font-weight-bold">CONNECT WITH US</h5>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email Address"
                />
                <span className="input-group-addon" id="basic-addon2">
                  <i className="fas fa-check"></i>
                </span>
              </div>
              <ul className="social-pet mt-4">
                <li>
                  <a href="#.com" title="facebook">
                    <i className="fa fa-facebook-f"></i> Facebook
                  </a>
                </li>
                <li>
                  <a href="#.com" title="twitter">
                    <i className="fa fa-twitter"></i> Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12 ">
                <div className="text-center text-white">
                  &copy; 2019 BooksEasy.com. All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};
export default Footer;
