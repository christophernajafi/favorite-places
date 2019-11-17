import React from "react";

// const alerts = [{ id: "1", type: "danger", msg: "Hi there!" }];
const alerts = [];

const Alerts = () => {
  return (
    alerts.length > 0 &&
    alerts.map(alert => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
    ))
  );
};

export default Alerts;
