import { useDispatch, useSelector } from "react-redux";
function PostComp({ item }) {
  const dispatch = useDispatch();

  return (
    <>
      {/* This is a Gound Handling */}
      <div className="card mb-3">
        <img src={item.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="Gound Handling">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          <p className="card-text">
            <small className="text-body-secondary">{item.update}</small>
          </p>
        </div>
      </div>
    </>
  );
}

export default PostComp;
