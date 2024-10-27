import { Link, NavLink } from "react-router-dom";

function Section2Card({ title, icon, to }) {
  return (
    <div>
      <NavLink to={to} className="card card-bg-custom text-decoration-none">
        <div className="card-body d-flex align-items-center p-2">
          {/* Circular Icon */}
          <div className="card-icon-style ms-1 d-flex justify-content-center align-items-center me-3">
            <i className={`${icon} fs-4 text-light`}></i>
          </div>
          {/* Card Title */}
          <h5 className="card-title mb-0 text-truncate">{title}</h5>
        </div>
      </NavLink>
    </div>
  );
}

export default Section2Card;
