import "./watchVideo.css";
function WatchVideo({ ele, borderColor, color }) {
  return (
    <>
      <div className="video-div">
        <button
          style={{
            borderColor: borderColor,
            color: color,
          }}
          onClick={() => console.log(ele)}
          className="video-butt"
        >
          <p>Watch Video</p>
        </button>
      </div>
    </>
  );
}

export default WatchVideo;
