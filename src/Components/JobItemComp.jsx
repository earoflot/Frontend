import styles from "../styles/JobItemComp.module.css";

function PostComp({ item }) {
  return (
    /** col-12 mobile... col-sm-6 mobaile landscape col-md-4 Air paid.. col-lg-3 desktop........ */
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      {/* This is a Gound Handling */}
      <div className="card mb-3">
        <img src={item.image} className="img-fluid" alt="..." />

        <div className="card-body">
          <h5 className="Gound Handling">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          <p className="card-text">
            <small className="text-body-secondary">{item.updated}</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostComp;
