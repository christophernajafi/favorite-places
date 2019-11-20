import React from "react";
import { connect } from "react-redux";

const Alerts = props => {
  const { alerts } = props;
  return (
    alerts.length > 0 &&
    alerts.map(alert => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
    ))
  );
};

const mapStateToProps = state => {
  return {
    alerts: state.alert.alerts
  };
};

export default connect(mapStateToProps)(Alerts);
