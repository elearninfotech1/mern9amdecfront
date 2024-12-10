import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import footerStyles from "./footer.module.css";
const Footer = () => {
  return (
    <>
      <section className={`${footerStyles.footerbg}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>&copy; 2024 Elearn Infotech</p>
            </div>
            <div className="col-md-6">
              <p className="float-end">Designed by Elearn Infotech</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
