import { Link, NavLink } from "react-router-dom";

function Section2Card({ title, icon, to }) {
  return (
    <div className="">
      <NavLink to={to} className="card card-bg-custom text-decoration-none">
        <div className="card-body d-flex align-items-center py-1">
          {/* Circular Icon */}
          <div className="card-icon-style ms-1 d-flex justify-content-center align-items-center me-3">
            <i className={`${icon} fs-4 text-light`}></i>
          </div>
          {/* Card Title */}
          <h6 className="card-title mb-0 text-truncate">{title}</h6>
        </div>
      </NavLink>
    </div>
  );
}

export default Section2Card;
