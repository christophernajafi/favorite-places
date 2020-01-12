import React from "react";
import { Link } from "react-router-dom";

import "./lists-item.css";

const ListsItem = props => {
  // eslint-disable-next-line
  const { name, description, id } = props.list;

  // console.log(props);

  return (
    <Link
      to={`/lists/${id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="card w-75 list-item-card ">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          {/* <a href="#" class="btn btn-primary">Button</a> */}
        </div>
      </div>
    </Link>
  );
};

export default ListsItem;
