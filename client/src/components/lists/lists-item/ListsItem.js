import React from "react";

const ListsItem = props => {
  // eslint-disable-next-line
  const { name, description } = props.list;
  console.log(props);
  return (
    <div className="container">
      <div className="card">
        <div>
          <i className="fas fa-map-marked-alt fa-4x"></i>
        </div>
        <div>
          <p>{name}</p>
          <p>{description}</p>
        </div>
      </div>
      <button className="btn btn-danger">Delete Place</button>
    </div>
  );
};

export default ListsItem;
