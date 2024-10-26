function Section3Card({ title, subtext, icon }) {
  return (
    <>
      <div className="col-12 col-md-12 col-lg-4">
        <div className="card p-4 h-100 text-start card-bg-custom">
          <div className="d-flex align-items-center mb-4">
            <div className="rounded-circle d-flex justify-content-center align-items-center card-icon-style">
              <i className={`${icon} fs-4 text-white`}></i>
            </div>
            <h5 className="ms-3 fw-bold mb-0">{title}</h5>
          </div>
          <p className="text-body-secondary">{subtext}</p>
        </div>
      </div>
    </>
  );
}

export default Section3Card;
