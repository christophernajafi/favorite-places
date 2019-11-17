import React, { Fragment } from "react";

const alerts = [];

const Alerts = () => {
  return (
    <Fragment>
      alerts.length > 0 && alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
      )) );
    </Fragment>
  );
};

export default Alerts;
