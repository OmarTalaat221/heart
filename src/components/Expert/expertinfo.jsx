import "./expert.css";

function ExpInfo({ lastElement, e }) {
  return (
    <div className="col-grid">
      <div className="div-img-1">
        <div className="div-img-2">
          <img src={e.image} alt="" />
        </div>
      </div>
      <div className="card-container">
        <h2 className="name"> {e.name}</h2>

        <div className="subject">
          <p>{e.subject}</p>
        </div>

        <button className="btn-more">View More</button>
      </div>
    </div>
  );
}

export default ExpInfo;
