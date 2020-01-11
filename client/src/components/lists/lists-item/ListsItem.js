import React from "react";

import "./lists-item.css";

const ListsItem = props => {
  // eslint-disable-next-line
  const { name, description } = props.list;

  // console.log(props);

  return (
    <div className="card w-75 list-item-card ">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        {/* <a href="#" class="btn btn-primary">Button</a> */}
      </div>
    </div>
  );
};

export default ListsItem;
