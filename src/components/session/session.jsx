import { useEffect, useState } from "react";
import "./session.css";
import { groupsData } from "./elsayed";
import BackButt from "../back-butt/back";
import SessionMessage from "./../session-message/sessionMessage";
import SubButton from "../subButton";
import ExpInfo from "../Expert/expertinfo";
function Session({}) {
  const [course, setCourse] = useState({
    group_name: "",
    subject_data: [],
    group_data: [],
    session_data: [],
  });
  const [steps, setSteps] = useState([]);

  const lastElement = course[course.length - 1];

  function handleAction(newCourseArray, newStepsArray) {
    setCourse(newCourseArray);
    setSteps(newStepsArray);
  }

  return (
    <>
      <div className="second-page">
        <div className="second-container">
          <div className="title-second-page-session">
            <h2>Sessions</h2>
          </div>

          {steps.length === 0 ? (
            <>
              <div className="subject-grid">
                {groupsData.map((e) => (
                  <SubButton
                    onClick={() => handleAction([e], ["first"])}
                    title={e.group_name}
                    e={e}
                  />
                ))}
              </div>

              <div className="third-page">
                <div className="third-container">
                  <div className="header">
                    <h2>Expert IB Tutors</h2>
                  </div>

                  <div className="card-grid">
                    {groupsData
                      .flatMap((group) =>
                        group.subjects.flatMap((subject) =>
                          subject.levels.flatMap(
                            (level) =>
                              level.topics?.flatMap(
                                (topic) =>
                                  topic.session?.flatMap(
                                    (session) => session.teacher
                                  ) || []
                              ) || []
                          )
                        )
                      )
                      .reduce((acc, teacher) => {
                        if (!acc.some((t) => t.id === teacher.id)) {
                          acc.push(teacher);
                        }
                        return acc;
                      }, [])
                      ?.map((teacher, index) => (
                        <ExpInfo key={index} e={teacher} />
                      ))}
                  </div>
                </div>
              </div>
            </>
          ) : steps[steps.length - 1] === "first" ? (
            <>
              <BackButt
                onClick={() =>
                  handleAction(course.slice(0, -1), steps.slice(0, -1))
                }
              />
              <div className="subject-grid">
                {lastElement?.subjects?.map((e) => (
                  <SubButton
                    onClick={() =>
                      handleAction([...course, e], [...steps, "second"])
                    }
                    title={e.subject_name}
                    e={e}
                  />
                ))}
              </div>

              <div className="third-page">
                <div className="third-container">
                  <div className="header">
                    <h2>Expert IB Tutors</h2>
                  </div>

                  <div className="card-grid">
                    {lastElement?.subjects
                      ?.flatMap((subject) =>
                        subject.levels?.flatMap((level) =>
                          level.topics?.flatMap((topic) =>
                            (topic.session || [])?.flatMap(
                              (session) => session.teacher
                            )
                          )
                        )
                      )
                      ?.reduce((acc, teacher) => {
                        if (!acc?.some((t) => t.id === teacher.id)) {
                          acc?.push(teacher);
                        }
                        return acc;
                      }, [])
                      ?.map((teacher, index) => (
                        <ExpInfo key={index} e={teacher} />
                      ))}
                  </div>
                </div>
              </div>
            </>
          ) : steps[steps.length - 1] === "second" ? (
            <>
              <BackButt
                onClick={() =>
                  handleAction(course.slice(0, -1), steps.slice(0, -1))
                }
              />
              <div className="subject-grid">
                {lastElement?.levels?.map((e) => (
                  <SubButton
                    onClick={() =>
                      handleAction([...course, e], [...steps, "third"])
                    }
                    title={e.level_name}
                    e={e}
                  />
                ))}
              </div>

              <div className="third-page">
                <div className="third-container">
                  <div className="header">
                    <h2>Expert IB Tutors</h2>
                  </div>

                  <div className="card-grid">
                    {lastElement.levels
                      ?.flatMap((level) =>
                        level.topics?.flatMap((topic) =>
                          (topic.session || [])?.flatMap(
                            (session) => session.teacher
                          )
                        )
                      )
                      ?.reduce((acc, teacher) => {
                        if (!acc?.some((t) => t.id === teacher.id)) {
                          acc?.push(teacher);
                        }
                        return acc;
                      }, [])
                      ?.map((teacher, index) => (
                        <ExpInfo key={index} e={teacher} />
                      ))}
                  </div>
                </div>
              </div>
            </>
          ) : steps[steps.length - 1] === "third" ? (
            <>
              <BackButt
                onClick={() =>
                  handleAction(course.slice(0, -1), steps.slice(0, -1))
                }
              />
              <div className="subject-grid">
                {lastElement?.topics?.map((e) => (
                  <SubButton
                    onClick={() =>
                      handleAction([...course, e], [...steps, "fourth"])
                    }
                    title={e.topic_name}
                    e={e}
                  />
                ))}
              </div>

              <div className="third-page">
                <div className="third-container">
                  <div className="header">
                    <h2>Expert IB Tutors</h2>
                  </div>

                  <div className="card-grid">
                    {lastElement.topics
                      ?.flatMap((topic) =>
                        (topic.session || [])?.flatMap(
                          (session) => session.teacher
                        )
                      )

                      ?.reduce((acc, teacher) => {
                        if (!acc?.some((t) => t.id === teacher.id)) {
                          acc?.push(teacher);
                        }
                        return acc;
                      }, [])
                      ?.map((teacher, index) => (
                        <ExpInfo key={index} e={teacher} />
                      ))}
                  </div>
                </div>
              </div>
            </>
          ) : steps[steps.length - 1] === "fourth" ? (
            <>
              <BackButt
                onClick={() =>
                  handleAction(course.slice(0, -1), steps.slice(0, -1))
                }
              />

              <div className="course-grid">
                {lastElement?.session?.map((e) => (
                  <SessionMessage e={e} />
                ))}
              </div>

              <div className="third-page">
                <div className="third-container">
                  <div className="header">
                    <h2>Expert IB Tutors</h2>
                  </div>

                  <div className="card-grid">
                    {lastElement?.session
                      ?.flatMap((e) => e.teacher)
                      ?.reduce((acc, teacher) => {
                        if (!acc.some((t) => t.id === teacher.id)) {
                          acc.push(teacher);
                        }
                        return acc;
                      }, [])
                      ?.map((teacher, index) => (
                        <ExpInfo key={index} e={teacher} />
                      ))}
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Session;
