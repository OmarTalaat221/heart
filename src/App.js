import "./App.css";

import Section from "./components/study-section/section";
import Session from "./components/session/session";
import Accordion from "./components/accordion/accordion";
import subjectData from "./components/session/data";
import { Button, Modal } from "antd";
import { useState, useEffect } from "react";
// import { Provider, useDispatch, useSelector } from "react-redux";
// import { store } from "./components/rtk/store";

function App() {
  const [modal, setModal] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [showHeart, setShowHeart] = useState(false);

  const closeModal = () => {
    setModal(false);

    setTimeout(() => {
      setModal(true);
    }, 100);
  };

  const oKModal = () => {
    setModal(false);
    setSuccessMessage("Huh I Know U Like Me I Like U too ");
    setTextIndex(0);
    setShowHeart(false);
  };

  useEffect(() => {
    if (successMessage && textIndex < successMessage.length) {
      const timer = setTimeout(() => {
        setDisplayedText(successMessage.substring(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }, 75);
      return () => clearTimeout(timer);
    } else if (successMessage && textIndex === successMessage.length) {
      setTimeout(() => {
        setShowHeart(true);
      }, 150);
    }
  }, [successMessage, textIndex]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Modal
        centered
        open={modal}
        onCancel={closeModal}
        title="Modal"
        footer={
          <div
            className="flex justify-end"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
              gap: "10px",
            }}
          >
            <Button type="primary" onClick={oKModal}>
              Yes
            </Button>
            <Button danger type="default" onClick={closeModal}>
              No
            </Button>
          </div>
        }
      >
        <div className="text-center text-2xl font-bold">Are You like Me ?</div>
      </Modal>

      {successMessage && (
        <div
          className="text-center text-2xl font-bold animated-text"
          style={{
            position: "absolute",
            fontSize: "1.2rem",
            color: "#3586ff",
            fontWeight: "bold",
            textAlign: "center",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textTransform: "capitalize",
          }}
        >
          {displayedText}
          {showHeart && (
            <span
              style={{
                animation: "pulse 1s infinite",
                display: "inline-block",
                marginLeft: "5px",
                color: "#ff3366",
              }}
            >
              ❤️
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
