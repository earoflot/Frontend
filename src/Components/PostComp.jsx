function PostComp({ Title, Description, Image }) {
  return (
    <>
      {/* This is a Gound Handling */}
      <div className="card mb-3">
        <img src={Image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="Gound Handling">{Title}</h5>
          <p className="card-text">{Description}</p>
          <p className="card-text">
            <small className="text-body-secondary">Updates</small>
          </p>
        </div>
      </div>
    </>
  );
}

export default PostComp;
