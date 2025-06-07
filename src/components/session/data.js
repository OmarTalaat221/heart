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

const subjectData = [
  {
    title: "IB Math",
    levels: [
      {
        id: 1,
        name: "Math AA SL",

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
        ],
      },
      {
        id: 2,
        name: "Math AI SL",

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
      {
        id: 3,
        name: "Math AA HL",
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
            id: 6,
            background: "rgb(230, 226, 254)",
            color: "rgb(41, 10, 194)",
            head: "IB Math AA HL",
            name: "Integrating Quotients",
            desc: "This session will look at various techniques to integrate different families of quotients. It will focus on paper 1 applications and include some paper 2.",
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
            id: 7,
            background: "rgb(230, 226, 254)",
            color: "rgb(41, 10, 194)",
            head: "IB Math AA HL",
            name: "Differential Equations",
            desc: "This session will look at various ways to solve differential equations to find exact solutions. It will also cover Euler’s method to find approximate solutions.",
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
            id: 9,
            background: "rgb(230, 226, 254)",
            color: "rgb(41, 10, 194)",
            head: "IB Math AA HL",
            name: "Complex Numbers",
            desc: "This session will review the conversion between Cartesian, polar, and exponential forms: products, quotients, and integer powers, De Moivre’s theorem, and geometrical interpretations.",
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
      {
        id: 4,
        name: "Math AI HL",

        session: [
          {
            id: 10,
            background: "rgb(230, 226, 254)",
            color: "rgb(41, 10, 194)",
            head: "IB Math AA HL",
            name: "Coupled Differential Equations",
            desc: "In this session, we will find exact and approximate solutions to coupled differential equations. We will also sketch and interpret phase portraits, considering real and complex eigenvalues.",
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
            id: 11,
            background: "rgb(230, 226, 254)",
            color: "rgb(41, 10, 194)",
            head: "IB Math AA HL",
            name: "Complex Numbers and Sinusoidal Functions",
            desc: "We will review conversion between Cartesian, polar, and exponential forms: products, quotients, and integer powers, and add sinusoidal functions with the same frequencies but different phase angles.",
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
    title: "IB Sceinces",
    levels: [
      {
        id: 5,
        name: "Physics SL",
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
      {
        id: 6,
        name: "Physics HL",
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
      {
        id: 7,
        name: "Chemistry SL",
        session: [
          {
            id: 16,
            background: "rgb(209, 250, 223)",
            color: "rgb(5, 96, 58)",
            head: "IB Chemistry SL/HL",
            name: "Organic Chemistry",
            desc: "We will review core content that includes reaction types for alkenes, halogenoalkanes, alcohols, and benzene. HL content will cover SN1 & SN2 mechanisms, Electrophilic Addition & Markovnikov’s rule.",
            teacher: [
              {
                id: 9,
                name: "Erin Dallin",
                image: erin,
                subject: "IB Chemistry",
              },
            ],
            video: "",
            soon: false,
          },
          {
            id: 17,
            background: "rgb(209, 250, 223)",
            color: "rgb(5, 96, 58)",
            head: "IB Chemistry SL/HL",
            name: "Kinetics",
            desc: "This session will review kinetics, including key SL ideas (collision theory, Maxwell-Boltzmann distribution curve, and factors affecting rates) and HL content (rate expressions and mechanisms).",
            teacher: [
              {
                id: 8,
                name: "Jesica Stefanetti",
                image: jesy,
                subject: "IB Chemistry",
              },
            ],
            video: "",
            soon: false,
          },
        ],
      },
      {
        id: 8,
        name: "Chemistry HL",
        session: [
          {
            id: 16,
            background: "rgb(209, 250, 223)",
            color: "rgb(5, 96, 58)",
            head: "IB Chemistry SL/HL",
            name: "Organic Chemistry",
            desc: "We will review core content that includes reaction types for alkenes, halogenoalkanes, alcohols, and benzene. HL content will cover SN1 & SN2 mechanisms, Electrophilic Addition & Markovnikov’s rule.",
            teacher: [
              {
                id: 9,
                name: "Erin Dallin",
                image: erin,
                subject: "IB Chemistry",
              },
            ],
            video: "",
            soon: false,
          },
          {
            id: 17,
            background: "rgb(209, 250, 223)",
            color: "rgb(5, 96, 58)",
            head: "IB Chemistry SL/HL",
            name: "Kinetics",
            desc: "This session will review kinetics, including key SL ideas (collision theory, Maxwell-Boltzmann distribution curve, and factors affecting rates) and HL content (rate expressions and mechanisms).",
            teacher: [
              {
                id: 8,
                name: "Jesica Stefanetti",
                image: jesy,
                subject: "IB Chemistry",
              },
            ],
            video: "",
            soon: false,
          },
          {
            id: 18,
            background: "rgb(209, 250, 223)",
            color: "rgb(5, 96, 58)",
            head: "IB Chemistry HL",
            name: "Spectroscopy",
            desc: "This session will review mass spectrometry, infrared, and NMR spectroscopy. We will practice using these tools in connection with % composition and IHD to deduce molecular structures.",
            teacher: [
              {
                id: 10,
                name: "Margaret Hennessy",
                image: marg,
                subject: "IB Chemistry",
              },
            ],
            video: "",
            soon: false,
          },
          {
            id: 19,
            background: "rgb(209, 250, 223)",
            color: "rgb(5, 96, 58)",
            head: "IB Chemistry HL",
            name: "Enthalpy cycles",
            desc: "This session will review Energetics HL. It includes Hess's Law, Born-Haber cycle, and building cycles with bond dissociation, formation, and combustion enthalpies to determine enthalpies of reaction.",
            teacher: [
              {
                id: 10,
                name: "Margaret Hennessy",
                image: marg,
                subject: "IB Chemistry",
              },
            ],
            video: "",
            soon: false,
          },
          {
            id: 20,
            background: "rgb(209, 250, 223)",
            color: "rgb(5, 96, 58)",
            head: "IB Chemistry HL",
            name: "Enthalpy cycles",
            desc: "This session will review the organic chemistry HL content, including nucleophilic substitution mechanisms (SN1 and SN2) and electrophilic additions of unsymmetrical alkenes (Markovnikov's rule).",
            teacher: [
              {
                id: 8,
                name: "Jesica Stefanetti",
                image: jesy,
                subject: "IB Chemistry",
              },
            ],
            video: "",
            soon: true,
          },
        ],
      },
      {
        id: 9,
        name: "Biology SL",
        session: [
          {
            id: 21,
            background: "rgb(253, 207, 253)",
            color: "rgb(145, 7, 145)",
            head: "IB Biology SL/HL",
            name: "Hormones, Homeostasis, and Reproduction",
            desc: "This session will review the hormones insulin, glucagon, melatonin, leptin, thyroxin, and the reproductive hormones involved in the menstrual cycle. This is relevant to the SL and HL courses.",
            teacher: [
              {
                id: 11,
                name: "Philippa Crick",
                image: phil,
                subject: "IB Biology",
              },
            ],
            video: "",
            soon: false,
          },
        ],
      },
      {
        id: 10,
        name: "Biology HL",
        session: [
          {
            id: 22,
            background: "rgb(253, 207, 253)",
            color: "rgb(145, 7, 145)",
            head: "IB Biology HL",
            name: "Osmoregulation",
            desc: "In this session, we review osmoregulation in insects and humans, including the structure & function of the Malphighian tubule system, the nephron and the kidney, as well as the role of ADH. Both Paper 1 and Paper 2 questions will also be presented.",
            teacher: [
              {
                id: 12,
                name: "Susannah Miller",
                image: susan,
                subject: "IB Biology",
              },
            ],
            video: "",
            soon: true,
          },
          {
            id: 23,
            background: "rgb(253, 207, 253)",
            color: "rgb(145, 7, 145)",
            head: "IB Biology HL",
            name: "Cellular Respiration",
            desc: "In this session, we review mitochondrion structure and function, the stages of cellular respiration, including glycolysis, the link reaction, the Krebs cycle, electron transport, and chemiosmosis.",
            teacher: [
              {
                id: 11,
                name: "Philippa Crick",
                image: phil,
                subject: "IB Biology",
              },
            ],
            video: "",
            soon: true,
          },
          {
            id: 24,
            background: "rgb(253, 207, 253)",
            color: "rgb(145, 7, 145)",
            head: "IB Biology HL",
            name: "Photosynthesis",
            desc: "This session will review chloroplast structure & function. Then we’ll look at the light-dependent & light-independent reactions, including oxidative photophosphorylation and the Calvin cycle.",
            teacher: [
              {
                id: 11,
                name: "Philippa Crick",
                image: phil,
                subject: "IB Biology",
              },
            ],
            video: "",
            soon: false,
          },
          {
            id: 21,
            background: "rgb(253, 207, 253)",
            color: "rgb(145, 7, 145)",
            head: "IB Biology SL/HL",
            name: "Hormones, Homeostasis, and Reproduction",
            desc: "This session will review the hormones insulin, glucagon, melatonin, leptin, thyroxin, and the reproductive hormones involved in the menstrual cycle. This is relevant to the SL and HL courses.",
            teacher: [
              {
                id: 11,
                name: "Philippa Crick",
                image: phil,
                subject: "IB Biology",
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
    title: "IB Human Sciences",
    levels: [
      {
        id: 11,
        name: "Economics SL",
        session: [
          {
            id: 25,
            background: "rgb(253, 207, 253)",
            color: "rgb(145, 7, 145)",
            head: "IB Economics SL/HL",
            name: "National Income and Paper 1",
            desc: "This session will review macroeconomic concepts of the circular flow model of income, Keynesian and Monetarist models, and measure of GDP. Paper 1 strategies will also be covered.",
            teacher: [
              {
                id: 13,
                name: "Melissa Kendall",
                image: melissa,
                subject: "IB Economics",
              },
            ],
            video: "",
            soon: true,
          },
        ],
      },
      {
        id: 12,
        name: "Economics HL",
        session: [
          {
            id: 25,
            background: "rgb(253, 207, 253)",
            color: "rgb(145, 7, 145)",
            head: "IB Economics SL/HL",
            name: "National Income and Paper 1",
            desc: "This session will review macroeconomic concepts of the circular flow model of income, Keynesian and Monetarist models, and measure of GDP. Paper 1 strategies will also be covered.",
            teacher: [
              {
                id: 13,
                name: "Melissa Kendall",
                image: melissa,
                subject: "IB Economics",
              },
            ],
            video: "",
            soon: true,
          },
          {
            id: 26,
            background: "rgb(253, 207, 253)",
            color: "rgb(145, 7, 145)",
            head: "IB Economics HL",
            name: "Market power",
            desc: "This session will focus on diagrams and analysis for perfect competition, monopoly (and everything in between) to show how each model of competition impacts stakeholders.",
            teacher: [
              {
                id: 14,
                name: "Nick Streithorst",
                image: nick,
                subject: "IB Economics",
              },
            ],
            video: "",
            soon: true,
          },
        ],
      },
      {
        id: 13,
        name: "Business Management SL",
        session: [
          {
            id: 27,
            background: "rgb(253, 215, 206)",
            color: "rgb(145, 30, 8)",
            head: "IB Business Management SL/HL",
            name: "Mastering Assessments: Strategies for Papers 1, 2, and 3",
            desc: "This session will review strategies for IB Business Management Paper 1, 2, and 3 exams. It includes insights on question formats, answer structuring, and critical analysis for exam success.",
            teacher: [
              {
                id: 15,
                name: "Maria Sayyed",
                image: maria,
                subject: "IB Business Management",
              },
            ],
            video: "",
            soon: true,
          },
          {
            id: 28,
            background: "rgb(253, 215, 206)",
            color: "rgb(145, 30, 8)",
            head: "IB Business Management SL/HL",
            name: "Assessment Strategies",
            desc: "This session will focus on exam techniques on Finance and Accounts. The session will cover topics of break-even analysis, final accounts and ratio analysis, and will examine questions on these topics.",
            teacher: [
              {
                id: 16,
                name: "Cathal O'Mahony",
                image: cathal,
                subject: "IB Business Management",
              },
            ],
            video: "",
            soon: false,
          },
        ],
      },
      {
        id: 14,
        name: "Business Management HL",
        session: [
          {
            id: 27,
            background: "rgb(253, 215, 206)",
            color: "rgb(145, 30, 8)",
            head: "IB Business Management SL/HL",
            name: "Mastering Assessments: Strategies for Papers 1, 2, and 3",
            desc: "This session will review strategies for IB Business Management Paper 1, 2, and 3 exams. It includes insights on question formats, answer structuring, and critical analysis for exam success.",
            teacher: [
              {
                id: 15,
                name: "Maria Sayyed",
                image: maria,
                subject: "IB Business Management",
              },
            ],
            video: "",
            soon: true,
          },
          {
            id: 28,
            background: "rgb(253, 215, 206)",
            color: "rgb(145, 30, 8)",
            head: "IB Business Management SL/HL",
            name: "Assessment Strategies",
            desc: "This session will focus on exam techniques on Finance and Accounts. The session will cover topics of break-even analysis, final accounts and ratio analysis, and will examine questions on these topics.",
            teacher: [
              {
                id: 16,
                name: "Cathal O'Mahony",
                image: cathal,
                subject: "IB Business Management",
              },
            ],
            video: "",
            soon: false,
          },
        ],
      },
      {
        id: 15,
        name: "Psychology SL",
        session: [
          {
            id: 29,
            background: "rgb(229, 207, 253)",
            color: "rgb(99, 8, 146)",
            head: "IB Psychology SL/HL",
            name: "Research Methods and Ethics for Paper 1",
            desc: "This study session will review research methods and ethics content. It will also provide techniques on how to write solid research methods and ethics SAQs.",
            teacher: [
              {
                id: 17,
                name: "Rachel Davis",
                image: rachel,
                subject: "IB Psychology",
              },
            ],
            video: "",
            soon: false,
          },
          {
            id: 30,
            background: "rgb(229, 207, 253)",
            color: "rgb(99, 8, 146)",
            head: "IB Psychology SL/HL",
            name: "Power Studies in Psychology",
            desc: "We'll review common overlapping or 'power studies' in Psychology. We will also review strategies for writing high-mark responses on Papers 1 and 2, focusing on critical thinking.",
            teacher: [
              {
                id: 18,
                name: "Caitlyn Homol",
                image: caitlyn,
                subject: "IB Psychology",
              },
            ],
            video: "",
            soon: false,
          },
          {
            id: 31,
            background: "rgb(229, 207, 253)",
            color: "rgb(99, 8, 146)",
            head: "IB Psychology SL/HL",
            name: "Cognitive Approaches",
            desc: "In this session, students will cover models of memory and thinking & decision-making models, overlapping studies, and sample paper 1 style questions.",
            teacher: [
              {
                id: 18,
                name: "Caitlyn Homol",
                image: caitlyn,
                subject: "IB Psychology",
              },
            ],
            video: "",
            soon: false,
          },
        ],
      },
      {
        id: 16,
        name: "Psychology HL",
        session: [
          {
            id: 29,
            background: "rgb(229, 207, 253)",
            color: "rgb(99, 8, 146)",
            head: "IB Psychology SL/HL",
            name: "Research Methods and Ethics for Paper 1",
            desc: "This study session will review research methods and ethics content. It will also provide techniques on how to write solid research methods and ethics SAQs.",
            teacher: [
              {
                id: 17,
                name: "Rachel Davis",
                image: rachel,
                subject: "IB Psychology",
              },
            ],
            video: "",
            soon: false,
          },
          {
            id: 30,
            background: "rgb(229, 207, 253)",
            color: "rgb(99, 8, 146)",
            head: "IB Psychology SL/HL",
            name: "Power Studies in Psychology",
            desc: "We'll review common overlapping or 'power studies' in Psychology. We will also review strategies for writing high-mark responses on Papers 1 and 2, focusing on critical thinking.",
            teacher: [
              {
                id: 18,
                name: "Caitlyn Homol",
                image: caitlyn,
                subject: "IB Psychology",
              },
            ],
            video: "",
            soon: false,
          },
          {
            id: 31,
            background: "rgb(229, 207, 253)",
            color: "rgb(99, 8, 146)",
            head: "IB Psychology SL/HL",
            name: "Cognitive Approaches",
            desc: "In this session, students will cover models of memory and thinking & decision-making models, overlapping studies, and sample paper 1 style questions.",
            teacher: [
              {
                id: 18,
                name: "Caitlyn Homol",
                image: caitlyn,
                subject: "IB Psychology",
              },
            ],
            video: "",
            soon: false,
          },
          {
            id: 32,
            background: "rgb(229, 207, 253)",
            color: "rgb(99, 8, 146)",
            head: "IB Psychology HL",
            name: "Paper 3 Tips and Tricks",
            desc: "Learn tips and tricks for Paper 3 questions. You will review relevant content, how to structure your responses to maximize marks and discuss traps to avoid and common mistakes to watch out for.",
            teacher: [
              {
                id: 17,
                name: "Rachel Davis",
                image: rachel,
                subject: "IB Psychology",
              },
            ],
            video: "",
            soon: false,
          },
        ],
      },
      {
        id: 17,
        name: "ESS HL",
        session: [
          {
            id: 33,
            background: "rgb(209, 250, 223)",
            color: "rgb(5, 96, 58)",
            head: "IB ESS SL",
            name: "Climate Change - Mitigation & Adaptation",
            desc: "This session will explore climate change, focusing on adaptation and mitigation strategies. We will evaluate strengths and limitations of the strategies and incorporate exam essay question techniques.",
            teacher: [
              {
                id: 19,
                name: "Steve Basaraba",
                image: steve2,
                subject: "IB ESS",
              },
            ],
            video: "",
            soon: true,
          },
          {
            id: 34,
            background: "rgb(209, 250, 223)",
            color: "rgb(5, 96, 58)",
            head: "IB ESS SL",
            name: "Food Production",
            desc: "We will take a systems approach as we look at both Aquatic and Terrestrial Food Production, particularly with an eye on sustainability. Questions will focus on using examples.",
            teacher: [
              {
                id: 20,
                name: "Tamara Jannink",
                image: tamara,
                subject: "IB ESS",
              },
            ],
            video: "",
            soon: true,
          },
        ],
      },
    ],
  },
  {
    title: "IB English",
    levels: [
      {
        id: 18,
        name: "English Lang Lit SL",
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
              {
                id: 3,
                name: "Dave Giles",
                image: dave,
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
      {
        id: 19,
        name: "English Lang Lit HL",

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
              {
                id: 3,
                name: "Dave Giles",
                image: dave,
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
];

export default subjectData;
