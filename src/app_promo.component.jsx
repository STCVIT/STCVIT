import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
class App_promo extends Component {
  render() {
    return (
      <>
        <section
          className="section section-sm section-hero section-shaped-app-promo"
          id="section-forward"
        >
          <Container>
            <Row className="row-grid align-items-center">
              <Col className="order-md-1" md="6"></Col>
              <Col>
                <div className="pr-md-5 center-tag">
                  <h3 style={{ color: "white" }}>
                    Our app is now available on Google Play.
                  </h3>
                  <p style={{ color: "#C4CBE5" }}>
                    Now get connected with our operations more easily with our
                    our exclusive Android app made for convienience.
                  </p>
                </div>
                <a href="https://play.google.com/store/apps/details?id=com.mstc.mstcapp&hl=en_IN">
                  <div className="small-screen">
                    <img
                      alt="..."
                      className="img-fluid small-screen"
                      width="200px"
                      style={{ paddingTop: "3.5em", marginLeft: "-1em" }}
                      src={require("./assets/img/google-play-badge.png")}
                    />
                  </div>
                </a>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default App_promo;
