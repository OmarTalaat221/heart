import steve from "../Expert/assets/steve_smyth.png";
import clem from "../Expert/assets/clem.webp";
import vero from "../Expert/assets/vero_santocildes.webp";
import dave from "../Expert/assets/dave_giles.webp";
import andrew from "../Expert/assets/andrew_cohen.webp";
import gordon from "../Expert/assets/Gordon.png";
import jim from "../Expert/assets/jim_irvine.webp";
import tony from "../Expert/assets/Tony.png";
import jesy from "../Expert/assets/Jesica.jpeg";
import erin from "../Expert/assets/Erin.png";
import marg from "../Expert/assets/margaret_hennessy.webp";
import phil from "../Expert/assets/Phillipa.png";
import susan from "../Expert/assets/susannah_miller.jpeg";
import melissa from "../Expert/assets/MelissaKendall.jpeg";
import nick from "../Expert/assets/Nick.png";
import maria from "../Expert/assets/maria_sayyed.webp";
import cathal from "../Expert/assets/Cathal.jpeg";
import rachel from "../Expert/assets/rachel_davis.webp";
import caitlyn from "../Expert/assets/Caitlyn.jpeg";
import steve2 from "../Expert/assets/steve_basaraba.jpeg";
import tamara from "../Expert/assets/Tamara.jpeg";

export const groupsData = [
  {
    group_id: 1,
    group_name: "Languages",
    description:
      "This group focuses on learning different languages, exploring their grammar, literature, and culture.",
    subjects: [
      {
        subject_id: 101,
        subject_name: "Chinese",
        description:
          "An in-depth study of the Chinese language, including its grammar, literature, and cultural practices.",
        image_url:
          "https://img.freepik.com/free-vector/chalkboard-with-math-elements_1411-88.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721779200&semt=sph",
        levels: [
          {
            level_id: 1001,
            level_name: "HL",
            description:
              "Higher Level Chinese language studies focusing on advanced grammar and literature.",
            topics: [
              {
                topic_id: 10001,
                topic_name: "Chinese Literature",
                description:
                  "Explores classic and modern Chinese literary works.",
                videos: [
                  {
                    video_id: 30001,
                    title: "Introduction to Chinese Literature",
                    url: "https://example.com/video1",
                  },
                  {
                    video_id: 30002,
                    title: "Famous Chinese Authors",
                    url: "https://example.com/video2",
                  },
                ],
              },
              {
                topic_id: 10002,
                topic_name: "Chinese Culture",
                description:
                  "Covers various aspects of Chinese culture, including traditions and customs.",
                videos: [
                  {
                    video_id: 30003,
                    title: "Traditional Chinese Festivals",
                    url: "https://example.com/video3",
                  },
                  {
                    video_id: 30004,
                    title: "Chinese Tea Ceremony",
                    url: "https://example.com/video4",
                  },
                ],
              },
            ],
          },
          {
            level_id: 1002,
            level_name: "SL",
            description:
              "Standard Level Chinese language studies with a focus on basic grammar and conversation.",
            topics: [
              {
                topic_id: 10004,
                topic_name: "Basic Chinese Grammar",
                description:
                  "Introduction to the fundamental grammatical structures of the Chinese language.",
                videos: [
                  {
                    video_id: 30005,
                    title: "Introduction to Chinese Grammar",
                    url: "https://example.com/video5",
                  },
                  {
                    video_id: 30006,
                    title: "Common Grammar Mistakes",
                    url: "https://example.com/video6",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        subject_id: 102,
        subject_name: "English",
        description:
          "Comprehensive studies of the English language, covering literature, grammar, and communication skills.",
        image_url:
          "https://media.istockphoto.com/id/1047570732/vector/english.jpg?s=612x612&w=0&k=20&c=zgafUJxCytevU-ZRlrZlTEpw3mLlS_HQTIOHLjaSPPM=",
        levels: [
          {
            level_id: 1003,
            level_name: "HL",
            description:
              "Advanced studies in English, focusing on literature and writing skills.",
            topics: [
              {
                topic_id: 10007,
                topic_name: "English Literature",
                description:
                  "Analysis and study of classic and modern English literary works.",
                // videos: [
                //   {
                //     video_id: 30007,
                //     title: "Introduction to English Literature",
                //     url: "https://example.com/video7",
                //   },
                //   {
                //     video_id: 30008,
                //     title: "Analysis of Classic Novels",
                //     url: "https://example.com/video8",
                //   },
                // ],

                session: [
                  {
                    id: 35,
                    background: "rgb(203, 249, 255)",
                    color: "rgb(43, 105, 115)",
                    head: "IB English LL SL/HL",
                    name: "Paper 1 & Paper 2 Exam Review",
                    desc: "This session will review a sample Paper 1 and discuss the attributes needed for a strong answer. For Paper 2, we’ll show you how to break down questions and showcase rich comparative ideas.",
                    teacher: [
                      {
                        id: 4,
                        name: "Andrew Cohen",
                        image: andrew,
                        subject: "IB English",
                      },
                    ],
                    video: "",
                    soon: true,
                  },
                  {
                    id: 36,
                    background: "rgb(203, 249, 255)",
                    color: "rgb(43, 105, 115)",
                    head: "IB English LL SL/HL",
                    name: "Paper 1 & Paper 2 Exam Review",
                    desc: "This session will review a sample Paper 1 and discuss the attributes needed for a strong answer. For Paper 2, we’ll show you how to break down questions and showcase rich comparative ideas.",
                    teacher: [
                      {
                        id: 2,
                        name: "Veronica Santocildes",
                        image: vero,
                        subject: "IB English",
                      },
                    ],
                    video: "",
                    soon: false,
                  },
                ],
              },
            ],
          },
          {
            level_id: 1004,
            level_name: "SL",
            description:
              "Basic level English studies with a focus on foundational grammar and literature.",
            topics: [
              {
                topic_id: 10010,
                topic_name: "Grammar Basics",
                description: "Covers the fundamental rules of English grammar.",
                // videos: [
                //   {
                //     video_id: 30009,
                //     title: "Basic Grammar Rules",
                //     url: "https://example.com/video9",
                //   },
                //   {
                //     video_id: 30010,
                //     title: "Common Grammar Errors",
                //     url: "https://example.com/video10",
                //   },
                // ],
                session: [
                  {
                    id: 35,
                    background: "rgb(203, 249, 255)",
                    color: "rgb(43, 105, 115)",
                    head: "IB English LL SL/HL",
                    name: "Paper 1 & Paper 2 Exam Review",
                    desc: "This session will review a sample Paper 1 and discuss the attributes needed for a strong answer. For Paper 2, we’ll show you how to break down questions and showcase rich comparative ideas.",
                    teacher: [
                      {
                        id: 4,
                        name: "Andrew Cohen",
                        image: andrew,
                        subject: "IB English",
                      },
                    ],
                    video: "",
                    soon: true,
                  },
                  {
                    id: 36,
                    background: "rgb(203, 249, 255)",
                    color: "rgb(43, 105, 115)",
                    head: "IB English LL SL/HL",
                    name: "Paper 1 & Paper 2 Exam Review",
                    desc: "This session will review a sample Paper 1 and discuss the attributes needed for a strong answer. For Paper 2, we’ll show you how to break down questions and showcase rich comparative ideas.",
                    teacher: [
                      {
                        id: 2,
                        name: "Veronica Santocildes",
                        image: vero,
                        subject: "IB English",
                      },
                    ],
                    video: "",
                    soon: false,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    group_id: 2,
    group_name: "Arts",
    description:
      "This group is dedicated to the study of various forms of art, including visual arts, music, dance, and theater.",
    subjects: [
      {
        subject_id: 201,
        subject_name: "Dance",
        description:
          "An exploration of different dance styles, techniques, and the history of dance.",
        image_url:
          "https://media.istockphoto.com/id/1047570732/vector/english.jpg?s=612x612&w=0&k=20&c=zgafUJxCytevU-ZRlrZlTEpw3mLlS_HQTIOHLjaSPPM=",
        levels: [
          {
            level_name: "HL",
            level_id: 2001,
            description:
              "Higher Level dance studies focusing on choreography and contemporary dance techniques.",
            topics: [
              {
                topic_id: 20001,
                topic_name: "Advanced Choreography",
                description:
                  "Techniques and methods for creating complex dance routines.",
                videos: [
                  {
                    video_id: 30011,
                    title: "Choreography Basics",
                    url: "https://example.com/video11",
                  },
                ],
              },
            ],
          },
          {
            level_id: 2002,
            level_name: "SL",
            description:
              "Standard Level dance studies focusing on foundational dance techniques and performance.",
            topics: [
              {
                topic_id: 20004,
                topic_name: "Basic Dance Techniques",
                description:
                  "Introduction to the fundamental techniques of various dance styles.",
                videos: [
                  {
                    video_id: 30012,
                    title: "Basic Dance Movements",
                    url: "https://example.com/video12",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        subject_id: 202,
        subject_name: "Music",
        description:
          "Studies in music theory, composition, and the history of music.",
        image_url:
          "https://cdn.pixabay.com/photo/2016/11/29/13/06/notes-1866645_1280.jpg",
        levels: [
          {
            level_id: 2003,
            level_name: "HL",
            description:
              "Advanced studies in music composition, theory, and history.",
            topics: [
              {
                topic_id: 20007,
                topic_name: "Music Composition",
                description:
                  "Techniques and methods for composing music across various genres.",
                videos: [
                  {
                    video_id: 30013,
                    title: "Introduction to Composition",
                    url: "https://example.com/video13",
                  },
                ],
              },
            ],
          },
          {
            level_id: 2004,
            level_name: "SL",
            description:
              "Basic music studies focusing on theory and instrumental performance.",
            topics: [
              {
                topic_id: 20010,
                topic_name: "Basic Music Theory",
                description:
                  "Introduction to the fundamentals of music theory.",
                videos: [
                  {
                    video_id: 30014,
                    title: "Music Theory Basics",
                    url: "https://example.com/video14",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    group_id: 3,
    group_name: "Sciences",
    description:
      "This group covers various scientific disciplines, including physics, chemistry, and biology.",
    subjects: [
      {
        subject_id: 301,
        subject_name: "Physics",
        description:
          "Studies in the fundamental principles of physics, including mechanics, thermodynamics, and electromagnetism.",
        image_url:
          "https://media.istockphoto.com/id/1047570732/vector/english.jpg?s=612x612&w=0&k=20&c=zgafUJxCytevU-ZRlrZlTEpw3mLlS_HQTIOHLjaSPPM=",
        levels: [
          {
            level_id: 3001,
            level_name: "HL",
            description:
              "Higher Level physics studies focusing on advanced topics like quantum mechanics and relativity.",
            topics: [
              {
                topic_id: 30001,
                topic_name: "Quantum Mechanics",
                description:
                  "Explores the principles of quantum mechanics and its applications.",
                // videos: [
                //   {
                //     video_id: 30015,
                //     title: "Introduction to Quantum Mechanics",
                //     url: "https://example.com/video15",
                //   },
                // ],

                session: [
                  {
                    id: 12,
                    background: "rgb(253, 215, 206)",
                    color: "rgb(145, 30, 8)",
                    head: "IB Physics SL/HL",
                    name: "Simple Harmonic Motion and Wave Interference",
                    desc: "In this session, we will find exact and approximate solutions to coupled differential equations. We will also sketch and interpret phase portraits, considering real and complex eigenvalues.",
                    teacher: [
                      {
                        id: 5,
                        name: "Gordon Hirons",
                        image: gordon,
                        subject: "IB Physics",
                      },
                    ],
                    video: "",
                    soon: false,
                  },
                  {
                    id: 14,
                    background: "rgb(253, 215, 206)",
                    color: "rgb(145, 30, 8)",
                    head: "IB Physics HL",
                    name: "Simple Harmonic Motion and Wave Interference - HL Content",
                    desc: "This session will cover HL simple harmonic motion and then move on to diffraction gratings, single-slit diffraction patterns, resolution, and thin films.",
                    teacher: [
                      {
                        id: 5,
                        name: "Gordon Hirons",
                        image: gordon,
                        subject: "IB Physics",
                      },
                    ],
                    video: "",
                    soon: true,
                  },
                  {
                    id: 15,
                    background: "rgb(253, 215, 206)",
                    color: "rgb(145, 30, 8)",
                    head: "IB Physics HL",
                    name: "Wave-Particle Duality",
                    desc: "In this session, we will review wave-particle duality in two aspects: how light behaves like a particle through the photoelectric effect and how matter can behave like waves, through particle diffraction.",
                    teacher: [
                      {
                        id: 7,
                        name: "Anthony Ferraro",
                        image: tony,
                        subject: "IB Physics",
                      },
                    ],
                    video: "",
                    soon: false,
                  },
                ],
              },
            ],
          },
          {
            level_id: 3002,
            level_name: "SL",
            description:
              "Standard Level physics studies focusing on basic concepts like Newtonian mechanics.",
            topics: [
              {
                topic_id: 30002,
                topic_name: "Newtonian Mechanics",
                description:
                  "Covers the basics of motion, force, and energy as described by Newton's laws.",
                // videos: [
                //   {
                //     video_id: 30016,
                //     title: "Newton's Laws of Motion",
                //     url: "https://example.com/video16",
                //   },
                // ],

                session: [
                  {
                    id: 12,
                    background: "rgb(253, 215, 206)",
                    color: "rgb(145, 30, 8)",
                    head: "IB Physics SL/HL",
                    name: "Simple Harmonic Motion and Wave Interference",
                    desc: "In this session, we will find exact and approximate solutions to coupled differential equations. We will also sketch and interpret phase portraits, considering real and complex eigenvalues.",
                    teacher: [
                      {
                        id: 5,
                        name: "Gordon Hirons",
                        image: gordon,
                        subject: "IB Physics",
                      },
                    ],
                    video: "",
                    soon: false,
                  },
                  {
                    id: 13,
                    background: "rgb(253, 215, 206)",
                    color: "rgb(145, 30, 8)",
                    head: "IB Physics SL",
                    name: "Gravitation and Circular Motion",
                    desc: "This session will review the main ideas of gravitation and circular motion with practice problems for both featured. It will also cover the role of circular motion in other topics.",
                    teacher: [
                      {
                        id: 6,
                        name: "Jim Irvine",
                        image: jim,
                        subject: "IB Physics",
                      },
                    ],
                    video: "",
                    soon: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        subject_id: 302,
        subject_name: "Biology",
        description:
          "Studies in the biological sciences, covering topics like genetics, ecology, and human biology.",
        image_url:
          "https://img.freepik.com/free-vector/chalkboard-with-math-elements_1411-88.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721779200&semt=sph",
        levels: [
          {
            level_id: 3003,
            level_name: "HL",
            description:
              "Advanced studies in biology, focusing on molecular biology and biochemistry.",
            topics: [
              {
                topic_id: 30003,
                topic_name: "Molecular Biology",
                description:
                  "Explores the structure and function of biological macromolecules.",
                videos: [
                  {
                    video_id: 30017,
                    title: "Introduction to Molecular Biology",
                    url: "https://example.com/video17",
                  },
                ],
              },
            ],
          },
          {
            level_id: 3004,
            level_name: "SL",
            description:
              "Basic biology studies focusing on foundational topics like cell biology and genetics.",
            topics: [
              {
                topic_id: 30004,
                topic_name: "Cell Biology",
                description:
                  "Introduction to the structure and function of cells.",
                videos: [
                  {
                    video_id: 30018,
                    title: "Cell Structure and Function",
                    url: "https://example.com/video18",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    group_id: 4,
    group_name: "Mathematics",
    description:
      "This group focuses on the study of mathematical theories, applications, and problem-solving techniques.",
    subjects: [
      {
        subject_id: 401,
        subject_name: "Algebra",
        description:
          "Studies in algebraic principles, including equations, inequalities, and polynomials.",
        image_url:
          "https://img.freepik.com/free-vector/chalkboard-with-math-elements_1411-88.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721779200&semt=sph",
        levels: [
          {
            level_id: 4001,
            level_name: "HL",
            description:
              "Higher Level algebra studies focusing on complex equations and abstract algebra.",
            topics: [
              {
                topic_id: 40001,
                topic_name: "Abstract Algebra",
                description:
                  "Explores the structure of algebraic systems such as groups, rings, and fields.",
                // videos: [
                //   {
                //     video_id: 30019,
                //     title: "Introduction to Abstract Algebra",
                //     url: "https://example.com/video19",
                //   },
                // ],

                session: [
                  {
                    id: 1,
                    background: "rgb(230, 226, 254)",
                    color: "rgb(41, 10, 194)",
                    head: "IB Math AA SL/HL",
                    name: "Probability",
                    desc: "This session will begin with Venn diagrams and conditional probability. It will include SL and HL content (clearly identified by the tutor) building into the concept of random variables.",
                    teacher: [
                      {
                        id: 21,
                        name: "Steve Smyth",
                        image: steve,
                        subject: "IB Mathematics",
                      },
                    ],
                    video: "",
                    soon: true,
                  },

                  {
                    id: 2,
                    background: "rgb(230, 226, 254)",
                    color: "rgb(41, 10, 194)",
                    head: "IB Math AA SL/HL",
                    name: "Kinematics",
                    desc: "In this session, we will review kinematic problems involving displacement, distance, velocity, and acceleration for both paper 1 and paper 2.",
                    teacher: [
                      {
                        id: 21,
                        name: "Steve Smyth",
                        image: steve,
                        subject: "IB Mathematics",
                      },
                    ],
                    video: "",
                    soon: false,
                  },
                ],
              },
            ],
          },
          {
            level_id: 4002,
            level_name: "SL",
            description:
              "Standard Level algebra studies focusing on foundational topics like linear equations and inequalities.",
            topics: [
              {
                topic_id: 40002,
                topic_name: "Linear Equations",

                description:
                  "Introduction to solving linear equations and inequalities.",

                session: [
                  {
                    id: 3,
                    background: "rgb(230, 226, 254)",
                    color: "rgb(41, 10, 194)",
                    head: "IB Math AA SL/HL",
                    name: "Solving Equations",
                    desc: "In this session we will look at methods to solve a variety of different types of questions including, quadratics, trigonometric, combinatorial, exponential and logarithmic. The session will be (P1) non-GDC focused and will be relevant for both SL and HL students.",
                    teacher: [
                      {
                        id: 21,
                        name: "Steve Smyth",
                        image: steve,
                        subject: "IB Mathematics",
                      },
                    ],
                    video: "",
                    soon: false,
                  },

                  {
                    id: 8,
                    background: "rgb(230, 226, 254)",
                    color: "rgb(41, 10, 194)",
                    head: "IB Math AA HL",
                    name: "Differential Equations",
                    desc: "This session will look at various ways to solve differential equations to find exact solutions. It will also cover Euler’s method to find approximate solutions.",
                    teacher: [
                      {
                        id: 1,
                        name: "Clement Mustchin",
                        image: clem,
                        subject: "IB Mathematics",
                      },
                    ],
                    video: "",
                    soon: false,
                  },

                  {
                    id: 5,
                    background: "rgb(230, 226, 254)",
                    color: "rgb(41, 10, 194)",
                    head: "IB Math AI SL",
                    name: "Applications of Functions",
                    desc: "In this session, we will look at mathematical modeling with a range of different functions (quadratic, cubic, exponential, sinusoidal) and investigate the key features of graphs of functions not specifically mentioned in topic 2.",
                    teacher: [
                      {
                        id: 1,
                        name: "Clement Mustchin",
                        image: clem,
                        subject: "IB Mathematics",
                      },
                    ],
                    video: "",
                    soon: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        subject_id: 402,
        subject_name: "Calculus",
        description:
          "Studies in calculus, covering topics like limits, derivatives, and integrals.",
        image_url:
          "https://img.freepik.com/free-vector/chalkboard-with-math-elements_1411-88.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721779200&semt=sph",
        levels: [
          {
            level_id: 4003,
            level_name: "HL",
            description:
              "Advanced calculus studies focusing on multivariable calculus and differential equations.",
            topics: [
              {
                topic_id: 40003,
                topic_name: "Multivariable Calculus",
                description:
                  "Explores calculus of functions of multiple variables, including partial derivatives and multiple integrals.",
                // videos: [
                //   {
                //     video_id: 30021,
                //     title: "Introduction to Multivariable Calculus",
                //     url: "https://example.com/video21",
                //   },
                // ],

                session: [
                  {
                    id: 4,
                    background: "rgb(230, 226, 254)",
                    color: "rgb(41, 10, 194)",
                    head: "IB Math AI SL/HL",
                    name: "Hypothesis Testing",
                    desc: "In this session, we will look at chi-squared tests and t-tests for SL, then tests for binomial, Poisson, and bivariate normal distributions for HL, including type I and type II errors.",
                    teacher: [
                      {
                        id: 1,
                        name: "Clement Mustchin",
                        image: clem,
                        subject: "IB Mathematics",
                      },
                    ],
                    video: "",
                    soon: false,
                  },
                ],
              },
            ],
          },
          {
            level_id: 4004,
            level_name: "SL",
            description:
              "Basic calculus studies focusing on single-variable calculus topics like limits and derivatives.",
            topics: [
              {
                topic_id: 40004,
                topic_name: "Limits and Continuity",
                description:
                  "Introduction to the concept of limits and the analysis of continuous functions.",
                // videos: [
                //   {
                //     video_id: 30022,
                //     title: "Understanding Limits",
                //     url: "https://example.com/video22",
                //   },
                // ],

                session: [
                  {
                    id: 4,
                    background: "rgb(230, 226, 254)",
                    color: "rgb(41, 10, 194)",
                    head: "IB Math AI SL/HL",
                    name: "Hypothesis Testing",
                    desc: "In this session, we will look at chi-squared tests and t-tests for SL, then tests for binomial, Poisson, and bivariate normal distributions for HL, including type I and type II errors.",
                    teacher: [
                      {
                        id: 1,
                        name: "Clement Mustchin",
                        image: clem,
                        subject: "IB Mathematics",
                      },
                    ],
                    video: "",
                    soon: false,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    group_id: 5,
    group_name: "History",
    description:
      "This group covers historical studies across different eras and regions, focusing on key events, figures, and cultural developments.",
    subjects: [
      {
        subject_id: 501,
        subject_name: "Ancient History",
        description:
          "Studies in the history of ancient civilizations, including their cultures, governments, and key historical figures.",
        image_url:
          "https://img.freepik.com/free-vector/chalkboard-with-math-elements_1411-88.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721779200&semt=sph",
        levels: [
          {
            level_id: 5001,
            level_name: "HL",
            description:
              "Advanced studies in ancient history, focusing on detailed analyses of specific ancient civilizations.",
            topics: [
              {
                topic_id: 50001,
                topic_name: "Ancient Egypt",
                description:
                  "Explores the history, culture, and achievements of Ancient Egypt.",
                videos: [
                  {
                    video_id: 30023,
                    title: "The Pyramids of Egypt",
                    url: "https://example.com/video23",
                  },
                ],
              },
            ],
          },
          {
            level_id: 5002,
            level_name: "SL",
            description:
              "Basic studies in ancient history, providing an overview of key ancient civilizations.",
            topics: [
              {
                topic_id: 50002,
                topic_name: "Ancient Greece",
                description:
                  "Introduction to the history and culture of Ancient Greece.",
                videos: [
                  {
                    video_id: 30024,
                    title: "The Greek Polis",
                    url: "https://example.com/video24",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        subject_id: 502,
        subject_name: "Modern History",
        description:
          "Studies in modern history, covering significant events and developments from the Renaissance to the present day.",
        image_url:
          "https://media.istockphoto.com/id/1047570732/vector/english.jpg?s=612x612&w=0&k=20&c=zgafUJxCytevU-ZRlrZlTEpw3mLlS_HQTIOHLjaSPPM=",
        levels: [
          {
            level_id: 5003,
            level_name: "HL",
            description:
              "Advanced studies in modern history, focusing on detailed analyses of key events and movements.",
            topics: [
              {
                topic_id: 50003,
                topic_name: "World War II",
                description:
                  "In-depth exploration of the causes, events, and consequences of World War II.",
                videos: [
                  {
                    video_id: 30025,
                    title: "Causes of World War II",
                    url: "https://example.com/video25",
                  },
                ],
              },
            ],
          },
          {
            level_id: 5004,
            level_name: "SL",
            description:
              "Basic studies in modern history, providing an overview of key events from the Renaissance to modern times.",
            topics: [
              {
                topic_id: 50004,
                topic_name: "The Industrial Revolution",
                description:
                  "Introduction to the Industrial Revolution and its impact on society.",
                videos: [
                  {
                    video_id: 30026,
                    title: "The Rise of Industry",
                    url: "https://example.com/video26",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
