import "./sessionMessage.css";
import WatchVideo from "./../watchVideo/watchVideo";

function SessionMessage({ e }) {
  return (
    <div className="col-1-course">
      <div
        className="head-container"
        style={{
          backgroundColor: e.background,
        }}
      >
        <h5
          className="header"
          style={{
            color: e.color,
          }}
        >
          {e.head}
        </h5>
        <p
          className="p-1"
          style={{
            color: e.color,
          }}
        >
          {e.name}
        </p>
      </div>

      <div className="info">
        <p>{e.desc}</p>
      </div>

      <div className="teacher-contain">
        {e?.teacher?.map((ele, index) => (
          <div className="img-flex">
            <div className="img-div">
              <img src={ele.image} alt="" />
            </div>

            <div className="name">
              <p>{ele.name}</p>
            </div>
          </div>
        ))}
      </div>

      <WatchVideo ele={e} color={e.color} />
    </div>
  );
}
export default SessionMessage;
