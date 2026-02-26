import "./App.css";
import { useState, useEffect } from "react";

function App() {
  // ============ STATES ============
  const [isLoveGone] = useState(true); // Always true 💔
  const [displayedText, setDisplayedText] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showFinalHeart, setShowFinalHeart] = useState(false);
  const [fallingHearts, setFallingHearts] = useState([]);

  // ============ THE LETTER ============
  const letterLines = [
    "This website is not under maintenance...",
    "There are no fixes being made...",
    "The domain didn't expire...",
    "The page isn't broken...",
    "There's no error...",
    "",
    "My love just left 💔",
    "And walked away...",
    "",
    "All that remains...",
    "Are memories...",
    "And a broken heart...",
    "",
    "I loved you...",
    "And I always will... forever 💔",
  ];

  // ============ TYPING ANIMATION ============
  useEffect(() => {
    if (!isLoveGone) return;

    if (currentLineIndex < letterLines.length) {
      const currentLine = letterLines[currentLineIndex];

      if (currentCharIndex < currentLine.length) {
        const timer = setTimeout(() => {
          setDisplayedText((prev) => prev + currentLine[currentCharIndex]);
          setCurrentCharIndex(currentCharIndex + 1);
        }, 80);

        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setDisplayedText((prev) => prev + "\n");
          setCurrentLineIndex(currentLineIndex + 1);
          setCurrentCharIndex(0);
        }, 600);

        return () => clearTimeout(timer);
      }
    } else {
      setTimeout(() => {
        setShowFinalHeart(true);
      }, 1000);
    }
  }, [currentLineIndex, currentCharIndex, isLoveGone]);

  // ============ FALLING BROKEN HEARTS ============
  useEffect(() => {
    if (!isLoveGone) return;

    const interval = setInterval(() => {
      const newHeart = {
        id: Math.random(),
        left: Math.random() * 100,
        animationDuration: 5 + Math.random() * 5,
        size: 15 + Math.random() * 20,
        emoji: ["💔", "🖤", "😢", "💧", "🥀", "☁️"][
          Math.floor(Math.random() * 6)
        ],
        opacity: 0.3 + Math.random() * 0.4,
      };

      setFallingHearts((prev) => [...prev, newHeart]);

      setTimeout(() => {
        setFallingHearts((prev) =>
          prev.filter((heart) => heart.id !== newHeart.id)
        );
      }, 10000);
    }, 400);

    return () => clearInterval(interval);
  }, [isLoveGone]);

  // ============ RENDER ============
  if (isLoveGone) {
    return (
      <div className="goodbye-screen">
        {/* Falling broken hearts */}
        <div className="falling-hearts-container">
          {fallingHearts.map((heart) => (
            <div
              key={heart.id}
              className="falling-heart"
              style={{
                left: `${heart.left}%`,
                animationDuration: `${heart.animationDuration}s`,
                fontSize: `${heart.size}px`,
                opacity: heart.opacity,
              }}
            >
              {heart.emoji}
            </div>
          ))}
        </div>

        {/* Rain effect */}
        <div className="rain-container">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="rain-drop"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${0.5 + Math.random() * 0.5}s`,
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="goodbye-container">
          {/*<div className="broken-heart-icon">
            <span>💔</span>
          </div>*/}

          <h1 className="goodbye-title">Gone...</h1>

          <div className="letter-container">
            <div className="letter-paper">
              <div className="letter-header">
                <span>A Final Letter...</span>
              </div>

              <div className="letter-content">
                <pre className="letter-text">
                  {displayedText}
                  <span className="typing-cursor">|</span>
                </pre>
              </div>

              {showFinalHeart && (
                <div className="letter-footer">
                  <div className="signature">
                    <span>— From a broken heart 💔</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {showFinalHeart && (
            <div className="final-section">
              {/* <div className="pulse-broken-heart">💔</div>
              <p className="final-words">
                "Some people come into our lives just to teach us how to let
                go..."
              </p>
              <div className="fading-memories">
                <span>🥀</span>
                <span>💔</span>
                <span>🖤</span>
                <span>💔</span>
                <span>🥀</span>
              </div> */}

              <div className="goodbye-stats">
                <div className="stat">
                  <span className="stat-number">∞</span>
                  <span className="stat-label">Memories</span>
                </div>
                <div className="stat">
                  <span className="stat-number">1</span>
                  <span className="stat-label">Broken Heart</span>
                </div>
                <div className="stat">
                  <span className="stat-number">0</span>
                  <span className="stat-label">Regrets for Loving</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom quote */}
        <div className="bottom-quote">
          <p>"The hardest goodbye is the one without words"</p>
        </div>
      </div>
    );
  }

  return null;
}

export default App;
