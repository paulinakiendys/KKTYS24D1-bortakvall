import React from "react";
import useTagsQuery from "../hooks/useTagsQuery";
import { NavLink } from "react-router-dom";
import Spinner from "./Spinner";

export default function Dropdown() {
  const { data: response, isLoading } = useTagsQuery();

  if (isLoading) return <Spinner />;

  if (response?.status === "success")
    return (
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="bi bi-tag"></i>
        </button>
        <ul className="dropdown-menu">
          {response.data.map((tag) => (
            <li key={tag.id}>
              <NavLink
                className="dropdown-item"
                to={`/products/tags/${tag.id}`}
              >
                {tag.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
}
