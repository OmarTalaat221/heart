import steve from "./assets/steve_smyth.png";
import clement from "./assets/clem.webp";
import andrew from "./assets/andrew_cohen.webp";
import dave from "./assets/dave_giles.webp";
import vero from "./assets/vero_santocildes.webp";

export const data = [
  {
    subject: "IB Math",
    levels: [
      {
        levelTitle: "Math AA SL",
        id: 1,
        sessions: [
          {
            id: 1,
            title: "IB Math AA SL/HL",
            name: "Probability",
            video: "",
            info: "This session will begin with Venn diagrams and conditional probability. It will include SL and HL content (clearly identified by the tutor) building into the concept of random variables.",
            teacher: [
              {
                name: "Steve Smyth",
                image: steve,
              },
            ],
            soon: true,
          },
          {
            id: 2,
            title: "IB Math AA SL/HL",
            name: "Kinematics",
            video: "",
            info: "In this session, we will review kinematic problems involving displacement, distance, velocity, and acceleration for both paper 1 and paper 2.",
            teacher: [
              {
                name: "Steve Smyth",
                image: steve,
              },
            ],
            soon: false,
          },
          {
            id: 3,
            title: "IB Math AA SL/HL",
            name: "Solving Equations",
            video: "",
            info: "In this session we will look at methods to solve a variety of different types of questions including, quadratics, trigonometric, combinatorial, exponential and logarithmic. The session will be (P1) non-GDC focused and will be relevant for both SL and HL students.",
            teacher: [
              {
                name: "Steve Smyth",
                image: steve,
              },
            ],
            soon: false,
          },
        ],
      },
      {
        levelTitle: "Math AI SL",
        id: 2,
        sessions: [
          {
            id: 4,
            title: "IB Math AI SL/HL",
            name: "Hypothesis Testing",
            video: "",
            info: "In this session, we will look at chi-squared tests and t-tests for SL, then tests for binomial, Poisson, and bivariate normal distributions for HL, including type I and type II errors.",
            teacher: [
              {
                name: "Clement Mustchin",
                image: clement,
              },
            ],
            soon: true,
          },
          {
            id: 5,
            title: "IB Math AI SL",
            name: "Applications of Functions",
            video: "",
            info: "In this session, we will look at mathematical modeling with a range of different functions (quadratic, cubic, exponential, sinusoidal) and investigate the key features of graphs of functions not specifically mentioned in topic 2.",
            teacher: [
              {
                name: "Clement Mustchin",
                image: clement,
              },
            ],
            soon: false,
          },
        ],
      },
      {
        levelTitle: "Math AA HL",
        id: 3,
        sessions: [
          {
            id: 1,
            title: "IB Math AA SL/HL",
            name: "Probability",
            video: "",
            info: "This session will begin with Venn diagrams and conditional probability. It will include SL and HL content (clearly identified by the tutor) building into the concept of random variables.",
            teacher: [
              {
                name: "Steve Smyth",
                image: steve,
              },
            ],
            soon: true,
          },
          {
            id: 2,
            title: "IB Math AA SL/HL",
            name: "Kinematics",
            video: "",
            info: "In this session, we will review kinematic problems involving displacement, distance, velocity, and acceleration for both paper 1 and paper 2.",
            teacher: [
              {
                name: "Steve Smyth",
                image: steve,
              },
            ],
            soon: false,
          },
          {
            id: 3,
            title: "IB Math AA SL/HL",
            name: "Solving Equations",
            video: "",
            info: "In this session we will look at methods to solve a variety of different types of questions including, quadratics, trigonometric, combinatorial, exponential and logarithmic. The session will be (P1) non-GDC focused and will be relevant for both SL and HL students.",
            teacher: [
              {
                name: "Steve Smyth",
                image: steve,
              },
            ],
            soon: false,
          },
          {
            id: 6,
            title: "IB Math AA HL",
            name: "Integrating Quotients",
            video: "",
            info: "This session will look at various techniques to integrate different families of quotients. It will focus on paper 1 applications and include some paper 2.",
            teacher: [
              {
                name: "Steve Smyth",
                image: steve,
              },
            ],
            soon: true,
          },
          {
            id: 7,
            title: "IB Math AA HL",
            name: "Differential Equations",
            video: "",
            info: "This session will look at various ways to solve differential equations to find exact solutions. It will also cover Euler’s method to find approximate solutions.",
            teacher: [
              {
                name: "Steve Smyth",
                image: steve,
              },
            ],
            soon: false,
          },
          {
            id: 8,
            title: "IB Math AA HL",
            name: "Differential Equations",
            video: "",
            info: "In this session we will look at methods to solve a variety of different types of questions including, quadratics, trigonometric, combinatorial, exponential and logarithmic. The session will be (P1) non-GDC focused and will be relevant for both SL and HL students.",
            teacher: [
              {
                name: "Clement Mustchin",
                image: clement,
              },
            ],
            soon: false,
          },
          {
            id: 9,
            title: "IB Math AA HL",
            name: "Complex Numbers",
            video: "",
            info: "This session will review the conversion between Cartesian, polar, and exponential forms: products, quotients, and integer powers, De Moivre’s theorem, and geometrical interpretations.",
            teacher: [
              {
                name: "Steve Smyth",
                image: steve,
              },
            ],
            soon: false,
          },
        ],
      },
      {
        levelTitle: "Math AI HL",
        id: 4,
        sessions: [
          {
            id: 4,
            title: "IB Math AI SL/HL",
            name: "Hypothesis Testing",
            video: "",
            info: "In this session, we will look at chi-squared tests and t-tests for SL, then tests for binomial, Poisson, and bivariate normal distributions for HL, including type I and type II errors.",
            teacher: [
              {
                name: "Clement Mustchin",
                image: clement,
              },
            ],
            soon: true,
          },
          {
            id: 10,
            title: "IB Math AI HL",
            name: "Coupled Differential Equations",
            video: "",
            info: "In this session, we will find exact and approximate solutions to coupled differential equations. We will also sketch and interpret phase portraits, considering real and complex eigenvalues.",
            teacher: [
              {
                name: "Clement Mustchin",
                image: clement,
              },
            ],
            soon: false,
          },
          {
            id: 11,
            title: "IB Math AI HL",
            name: "Complex Numbers and Sinusoidal Functions",
            video: "",
            info: "We will review conversion between Cartesian, polar, and exponential forms: products, quotients, and integer powers, and add sinusoidal functions with the same frequencies but different phase angles.",
            teacher: [
              {
                name: "Clement Mustchin",
                image: clement,
              },
            ],
            soon: false,
          },
        ],
      },
    ],
  },

  {
    subject: "IB English",

    levels: [
      {
        levelTitle: "English Lang Lit HL",
        id: 1,
        sessions: [
          {
            id: 1,
            title: "IB English LL SL/HL",
            name: "Paper 1 & Paper 2 Exam Review",
            video: "",
            info: "This session will review a sample Paper 1 and discuss the attributes needed for a strong answer. For Paper 2, we’ll show you how to break down questions and showcase rich comparative ideas.",

            teachers: [
              {
                name: "Andrew Cohen",

                image: andrew,
              },

              {
                name: "Dave Giles",
                image: dave,
              },
            ],

            soon: false,
          },
          {
            id: 2,
            title: "IB English LL SL/HL",
            name: "Paper 1 & Paper 2 Exam Review",
            video: "",
            info: "This session will review a sample Paper 1 and discuss the attributes needed for a strong answer. For Paper 2, we’ll show you how to break down questions and showcase rich comparative ideas.",

            teachers: [
              {
                name: "Veronica Santocildes",
                image: vero,
              },
            ],

            soon: false,
          },
        ],
      },
      {
        levelTitle: "English Lang Lit SL",
        id: 2,
        sessions: [
          {
            id: 1,
            title: "IB English LL SL/HL",
            name: "Paper 1 & Paper 2 Exam Review",
            video: "",
            info: "This session will review a sample Paper 1 and discuss the attributes needed for a strong answer. For Paper 2, we’ll show you how to break down questions and showcase rich comparative ideas.",

            teachers: [
              {
                name: "Andrew Cohen",

                image: andrew,
              },

              {
                name: "Dave Giles",
                image: dave,
              },
            ],

            soon: false,
          },
          {
            id: 2,
            title: "IB English LL SL/HL",
            name: "Paper 1 & Paper 2 Exam Review",
            video: "",
            info: "This session will review a sample Paper 1 and discuss the attributes needed for a strong answer. For Paper 2, we’ll show you how to break down questions and showcase rich comparative ideas.",

            teachers: [
              {
                name: "Veronica Santocildes",
                image: vero,
              },
            ],

            soon: false,
          },
        ],
      },
    ],
  },
];

export default data;
