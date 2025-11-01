import "./App.css";
import { useState, useEffect, useRef } from "react";
import { Button, Modal, Input, message } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import {
  HeartOutlined,
  LockOutlined,
  SoundOutlined,
  MutedOutlined,
} from "@ant-design/icons";
import Confetti from "react-confetti";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

function App() {
  // ============ STATES ============
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [showHeart, setShowHeart] = useState(false);
  const [hearts, setHearts] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const [noButtonText, setNoButtonText] = useState("No 💔");

  const audioRef = useRef(null);
  const backgroundAudioRef = useRef(null);

  // ============ CONFIGURATION ============
  const correctPassword = "iloveyou";

  // Load all 19 images from public/images folder
  const allImages = Array.from(
    { length: 19 },
    (_, i) => `/images/${i + 1}.jpg`
  );

  // Distribute images across steps (3-4 images per step)
  const getImagesForStep = (step) => {
    const imagesPerStep = Math.ceil(allImages.length / 6);
    const startIndex = step * imagesPerStep;
    const endIndex = Math.min(startIndex + imagesPerStep, allImages.length);
    return allImages.slice(startIndex, endIndex);
  };

  // ============ APOLOGY STEPS WITH SONGS ============
  const apologySteps = [
    {
      text: "I'm truly sorry for hurting you... 💔",
      song: "/audio/مقدرش ع النسيان .mp3",
      title: "I'm Sorry...",
    },
    {
      text: "You mean everything to me 🌍",
      song: "/audio/ولا ع باله.mp3",
      title: "You're My World",
    },
    {
      text: "Every moment without your smile feels empty 🥺",
      song: "/audio/قصاد عيني .mp3",
      title: "I Miss You",
    },
    {
      text: "I promise to be better, to listen more 💕",
      song: "/audio/كل حياتي.mp3",
      title: "My Promise",
    },
    {
      text: "Please give me another chance to make you happy ❤️",
      song: "/audio/خليك معايا.mp3",
      title: "Second Chance",
    },
    {
      text: "You're the best thing that ever happened to me 🌹",
      song: "/audio/الف ليله.mp3",
      title: "Forever Grateful",
    },
  ];

  // Get current step images
  const currentImages = getImagesForStep(currentStep);

  // ============ AUDIO SETUP ============
  useEffect(() => {
    backgroundAudioRef.current = new Audio("/audio/background.mp3");
    backgroundAudioRef.current.loop = true;
    backgroundAudioRef.current.volume = 0.2;

    return () => {
      if (backgroundAudioRef.current) {
        backgroundAudioRef.current.pause();
        backgroundAudioRef.current = null;
      }
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // ============ WINDOW RESIZE HANDLER ============
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ============ PASSWORD HANDLER ============
  const handlePasswordSubmit = () => {
    if (password.toLowerCase().trim() === correctPassword.toLowerCase()) {
      setIsAuthenticated(true);
      setModal(true);
      message.success("Welcome, my love! ❤️", 3);
      playBackgroundMusic();

      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    } else {
      message.error("Wrong password! Try again 💔", 2);
      setPassword("");

      const input = document.querySelector(".password-input input");
      if (input) {
        input.classList.add("shake");
        setTimeout(() => input.classList.remove("shake"), 500);
      }
    }
  };

  // ============ AUDIO CONTROLS ============
  const playBackgroundMusic = () => {
    if (backgroundAudioRef.current) {
      backgroundAudioRef.current.play().catch((err) => {
        console.log("Background music failed:", err);
      });
      setAudioPlaying(true);
    }
  };

  const playStepSong = (stepIndex) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    if (backgroundAudioRef.current) {
      backgroundAudioRef.current.pause();
    }

    audioRef.current = new Audio(apologySteps[stepIndex].song);
    audioRef.current.volume = 0.5;
    audioRef.current.play().catch((err) => {
      console.log("Step song failed:", err);
      message.info("Click unmute to hear the song 🎵");
    });
    setAudioPlaying(true);

    audioRef.current.onended = () => {
      if (backgroundAudioRef.current) {
        backgroundAudioRef.current.play();
      }
    };
  };

  const toggleAudio = () => {
    if (audioPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if (backgroundAudioRef.current) {
        backgroundAudioRef.current.pause();
      }
      setAudioPlaying(false);
    } else {
      if (audioRef.current && !audioRef.current.ended) {
        audioRef.current.play();
      } else if (backgroundAudioRef.current) {
        backgroundAudioRef.current.play();
      }
      setAudioPlaying(true);
    }
  };

  // ============ MODAL HANDLERS ============
  const closeModal = () => {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;

    setNoButtonStyle({
      transform: `translate(${randomX}px, ${randomY}px)`,
      transition: "all 0.3s ease",
    });

    const messages = [
      "Please... 🥺",
      "Don't say no... 💔",
      "I'm begging you... 😢",
      "Just one more chance? 🙏",
    ];

    setNoButtonText(messages[Math.floor(Math.random() * messages.length)]);
    message.warning("Please say yes! 🥺", 2);
  };

  const oKModal = () => {
    setModal(false);
    setSuccessMessage(apologySteps[currentStep].text);
    setTextIndex(0);
    setShowHeart(false);
    setNoButtonStyle({});
    setNoButtonText("No 💔");

    startHeartAnimation();
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 8000);

    playStepSong(currentStep);

    message.success("Thank you for forgiving me! 💖", 3);
  };

  // ============ HEART ANIMATION ============
  const startHeartAnimation = () => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Math.random(),
        left: Math.random() * 100,
        animationDuration: 3 + Math.random() * 3,
        size: 20 + Math.random() * 30,
        emoji: ["❤️", "💕", "💖", "💗", "💝", "💘"][
          Math.floor(Math.random() * 6)
        ],
      };

      setHearts((prev) => [...prev, newHeart]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((heart) => heart.id !== newHeart.id));
      }, 6000);
    }, 200);

    return () => clearInterval(interval);
  };

  // ============ TYPING ANIMATION ============
  useEffect(() => {
    if (successMessage && textIndex < successMessage.length) {
      const timer = setTimeout(() => {
        setDisplayedText(successMessage.substring(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }, 80);
      return () => clearTimeout(timer);
    } else if (successMessage && textIndex === successMessage.length) {
      setTimeout(() => {
        setShowHeart(true);
      }, 200);
    }
  }, [successMessage, textIndex]);

  // ============ NAVIGATION HANDLERS ============
  const nextStep = () => {
    if (currentStep < apologySteps.length - 1) {
      const newStep = currentStep + 1;
      setCurrentStep(newStep);
      setSuccessMessage(apologySteps[newStep].text);
      setTextIndex(0);
      setDisplayedText("");
      setShowHeart(false);

      playStepSong(newStep);

      if (newStep === apologySteps.length - 1) {
        setTimeout(() => {
          setShowConfetti(true);
        }, 3000);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      const newStep = currentStep - 1;
      setCurrentStep(newStep);
      setSuccessMessage(apologySteps[newStep].text);
      setTextIndex(0);
      setDisplayedText("");
      setShowHeart(false);
      setShowConfetti(false);

      playStepSong(newStep);
    }
  };

  // ============ PASSWORD SCREEN ============
  if (!isAuthenticated) {
    return (
      <div className="password-screen">
        <div className="background-hearts">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="bg-heart"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}
            >
              ❤️
            </div>
          ))}
        </div>

        <div className="password-container">
          <div className="lock-icon-wrapper">
            <div className="lock-icon">
              <LockOutlined />
            </div>
          </div>

          <h1 className="password-title">For My Special One</h1>
          <div className="title-hearts">💕</div>

          <p className="password-subtitle">
            Enter the password to unlock my heart
          </p>

          <div className="password-input-wrapper">
            <Input.Password
              size="large"
              placeholder="Type the magic words..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onPressEnter={handlePasswordSubmit}
              prefix={<HeartOutlined style={{ color: "#ff3366" }} />}
              className="password-input"
            />
          </div>

          <Button
            type="primary"
            size="large"
            onClick={handlePasswordSubmit}
            className="password-button"
            icon={<HeartOutlined />}
          >
            Unlock My Heart
          </Button>

          <div className="password-hint">
            <p>💡 Hint: Three words, no spaces</p>
            <p className="hint-detail">
              (Think about what I always say to you)
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ============ MAIN APP SCREEN ============
  return (
    <div className="app-container">
      {showConfetti && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          numberOfPieces={500}
          recycle={false}
          gravity={0.3}
          colors={[
            "#ff3366",
            "#ff6b9d",
            "#ffc0cb",
            "#ff1493",
            "#fff",
            "#ffb6c1",
            "#ff69b4",
          ]}
        />
      )}

      <div className="hearts-container">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="floating-heart"
            style={{
              left: `${heart.left}%`,
              animationDuration: `${heart.animationDuration}s`,
              fontSize: `${heart.size}px`,
            }}
          >
            {heart.emoji}
          </div>
        ))}
      </div>

      <div className="audio-control">
        <Button
          type="primary"
          shape="circle"
          size="large"
          onClick={toggleAudio}
          icon={audioPlaying ? <SoundOutlined /> : <MutedOutlined />}
          className={audioPlaying ? "audio-playing" : ""}
        />
      </div>

      {successMessage && audioPlaying && (
        <div className="now-playing">
          <div className="now-playing-content">
            <span className="music-note">🎵</span>
            <span className="now-playing-text">
              {apologySteps[currentStep].title}
            </span>
          </div>
        </div>
      )}

      <Modal
        centered
        open={modal}
        onCancel={closeModal}
        closable={false}
        maskClosable={false}
        className="forgiveness-modal"
        title={
          <div className="modal-title">
            <HeartOutlined className="modal-heart-icon" />
            <span>A Question From My Heart</span>
          </div>
        }
        footer={null}
      >
        <div className="modal-content">
          <h2>Will You Forgive Me?</h2>
          <p>I know I messed up, and I'm truly sorry...</p>
          <p>You mean everything to me 💕</p>

          <div className="modal-buttons">
            <Button
              type="primary"
              size="large"
              onClick={oKModal}
              className="yes-button"
              icon={<HeartOutlined />}
            >
              Yes, I Forgive You ❤️
            </Button>

            <Button
              danger
              size="large"
              onClick={closeModal}
              className="no-button"
              style={noButtonStyle}
            >
              {noButtonText}
            </Button>
          </div>
        </div>
      </Modal>

      {successMessage && (
        <div className="success-container">
          <div className="message-card">
            <div className="step-title">{apologySteps[currentStep].title}</div>
            <div className="animated-text">
              {displayedText}
              <span className="cursor">|</span>
            </div>

            {showHeart && (
              <div className="pulse-heart-container">
                <span className="pulse-heart">❤️</span>
              </div>
            )}
          </div>

          {showHeart && (
            <div className="swiper-section">
              <div className="swiper-header">
                <h3>Our Beautiful Memories</h3>
                <p>Step {currentStep + 1} - Special Moments 💕</p>
              </div>

              <Swiper
                key={currentStep} // Re-render swiper on step change
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                navigation={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                className="memories-swiper"
              >
                {currentImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="swiper-slide-content">
                      <img
                        src={img}
                        alt={`Memory ${index + 1}`}
                        onError={(e) => {
                          // Fallback if image doesn't load
                          e.target.src = `https://via.placeholder.com/400x600/ff3366/ffffff?text=Memory+${
                            index + 1
                          }`;
                        }}
                      />
                      <div className="image-overlay">
                        <div className="image-caption">
                          <HeartOutlined />
                          <span>
                            Memory #
                            {currentStep * Math.ceil(19 / 6) + index + 1}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}

          {showHeart && (
            <div className="navigation-section">
              <Button
                onClick={prevStep}
                disabled={currentStep === 0}
                size="large"
                className="nav-button prev-button"
              >
                ← Previous
              </Button>

              <div className="step-indicator">
                <div className="step-dots">
                  {apologySteps.map((_, index) => (
                    <span
                      key={index}
                      className={`dot ${
                        index === currentStep ? "active" : ""
                      } ${index < currentStep ? "completed" : ""}`}
                    />
                  ))}
                </div>
                <span className="step-text">
                  {currentStep + 1} / {apologySteps.length}
                </span>
              </div>

              <Button
                onClick={nextStep}
                disabled={currentStep === apologySteps.length - 1}
                type="primary"
                size="large"
                className="nav-button next-button"
              >
                Next →
              </Button>
            </div>
          )}

          {currentStep === apologySteps.length - 1 && showHeart && (
            <div className="final-message">
              <div className="final-heart">💖</div>
              <h1>I Love You Forever!</h1>
              <p>Thank you for being in my life</p>
              <p>You're my everything ❤️</p>
              <div className="final-hearts">
                <span>💕</span>
                <span>💖</span>
                <span>💗</span>
                <span>💝</span>
                <span>💘</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
