import img1 from "./assets/people_standing_infront_of_school.png";

import "./section.css";

function Section({}) {
  return (
    <div className="first-page">
      <div className="first-contain">
        <div className="study-session">
          <div className="col-1-study-session">
            <div className="container__">
              <h1 className="title-study-session">Study Sessions</h1>

              <p className="p-1">
                The previous installments of Study Sessions has been so popular,
                we've been inundated with requests for more!
              </p>
              <p className="p-2">
                Our expert IB tutors have put together an even more
                comprehensive series of sessions, based on the most challenging
                topic areas. We're also welcoming any questions you have ahead
                of the sessions to ensure you're getting the best support
                possible.
              </p>
              <p className="p-3">Live sessions are free for all users.</p>
            </div>
          </div>

          <div className="col-2-study-session">
            <div className="container__">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="small-sec">
        <div className="container__">
          <div className="small-flex">
            <p className="p-1">
              in association with the <strong>IB English Guys</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
