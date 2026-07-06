import type { Difficulty } from "./topics";

export interface PathStep {
  title: string;
  description: string;
  difficulty: Difficulty;
  related?: { label: string; url: string }[];
}

export interface LearningPath {
  id: string;
  title: string;
  tagline: string;
  audience: string;
  steps: PathStep[];
}

export const paths: LearningPath[] = [
  {
    id: "beginner",
    title: "Beginner OR Path",
    tagline: "Your first map of the territory.",
    audience: "Students and self-learners new to OR.",
    steps: [
      {
        title: "What is Operations Research?",
        description: "Variables, objectives, constraints, uncertainty — the OR vocabulary.",
        difficulty: "Foundations",
      },
      {
        title: "Modeling Decisions",
        description: "Translate small real problems into mathematical models.",
        difficulty: "Foundations",
      },
      {
        title: "Linear Programming",
        description: "Solve LPs, read shadow prices, run sensitivity analysis.",
        difficulty: "Foundations",
        related: [
          {
            label: "MIT 15.053",
            url: "https://ocw.mit.edu/courses/15-053-optimization-methods-in-management-science-spring-2013/",
          },
        ],
      },
      {
        title: "Network Optimization",
        description: "Shortest paths, flows, assignment, matching.",
        difficulty: "Intermediate",
      },
      {
        title: "Probability & Statistics for OR",
        description: "Distributions, estimation, and input analysis for uncertain decisions.",
        difficulty: "Foundations",
      },
      {
        title: "Simulation Basics",
        description: "Monte Carlo and discrete-event modeling fundamentals.",
        difficulty: "Intermediate",
        related: [{ label: "SimPy", url: "https://simpy.readthedocs.io/" }],
      },
      {
        title: "Software Tools",
        description: "Spreadsheets, Python (Pyomo, PuLP), and OR-Tools.",
        difficulty: "Applied",
        related: [{ label: "OR-Tools", url: "https://developers.google.com/optimization" }],
      },
    ],
  },
  {
    id: "optimization",
    title: "Optimization Practitioner Path",
    tagline: "Build deep fluency in mathematical programming.",
    audience: "Engineers and analysts who solve real models.",
    steps: [
      {
        title: "Linear & Mixed-Integer Programming",
        description: "Formulation patterns, solver behavior, and tightness.",
        difficulty: "Intermediate",
      },
      {
        title: "Duality & Sensitivity",
        description: "Prices, certificates, and what-if analysis.",
        difficulty: "Intermediate",
      },
      {
        title: "Least Squares, QP & Piecewise-Linear Models",
        description: "Estimation, convex quadratic models, and piecewise-linear planning patterns.",
        difficulty: "Intermediate",
      },
      {
        title: "Convex Optimization",
        description: "Conic models, KKT, disciplined convex programming.",
        difficulty: "Advanced",
        related: [{ label: "Boyd & Vandenberghe", url: "https://web.stanford.edu/~boyd/cvxbook/" }],
      },
      {
        title: "Nonlinear Programming (NLP)",
        description: "QP, QCQP, SOCP, smooth NLP, SQP, interior point, and global optimization.",
        difficulty: "Advanced",
      },
      {
        title: "Robust & Stochastic Optimization",
        description: "Uncertainty sets, scenarios, recourse, and chance constraints.",
        difficulty: "Advanced",
      },
      {
        title: "Complementarity & Equilibrium Models",
        description: "LCP/MCP formulations, KKT systems, markets, and traffic equilibria.",
        difficulty: "Advanced",
      },
      {
        title: "Constraint Programming",
        description: "Propagation and search for scheduling and feasibility-heavy models.",
        difficulty: "Intermediate",
      },
      {
        title: "Decomposition & Heuristics",
        description: "Benders, column generation, Lagrangian relaxation, metaheuristics.",
        difficulty: "Advanced",
      },
      {
        title: "Production Deployment",
        description: "Data pipelines, APIs, monitoring, fallbacks, explainability.",
        difficulty: "Applied",
      },
    ],
  },
  {
    id: "stochastic",
    title: "Stochastic Systems Path",
    tagline: "Decisions in a world of noise.",
    audience: "Anyone modeling uncertainty, queues, or risk.",
    steps: [
      {
        title: "Probability Foundations",
        description: "Random variables, distributions, limit theorems.",
        difficulty: "Foundations",
      },
      {
        title: "Stochastic Processes",
        description: "Poisson, renewal, Brownian motion.",
        difficulty: "Intermediate",
      },
      {
        title: "Markov Chains & MDPs",
        description: "State-based dynamics with and without control.",
        difficulty: "Intermediate",
      },
      {
        title: "Queueing Theory",
        description: "Little's Law, M/M/c, networks of queues.",
        difficulty: "Intermediate",
      },
      {
        title: "Simulation",
        description: "Discrete-event simulation, variance reduction, validation.",
        difficulty: "Intermediate",
      },
      {
        title: "Reliability & Maintenance",
        description: "Failure, repair, replacement, availability, and asset upkeep.",
        difficulty: "Intermediate",
      },
      {
        title: "Stochastic & Robust Optimization",
        description: "Scenario-based and worst-case decision models.",
        difficulty: "Advanced",
      },
    ],
  },
  {
    id: "supply-chain",
    title: "Supply Chain & Logistics Path",
    tagline: "From inventory shelves to global networks.",
    audience: "Practitioners in logistics, retail, manufacturing.",
    steps: [
      {
        title: "Inventory Theory",
        description: "EOQ, newsvendor, (s, S), multi-echelon.",
        difficulty: "Intermediate",
      },
      {
        title: "Transportation Problems",
        description: "Classic LP transportation and assignment models.",
        difficulty: "Intermediate",
      },
      {
        title: "Network Flows",
        description: "Min-cost flow, multi-commodity flow.",
        difficulty: "Intermediate",
      },
      {
        title: "Vehicle Routing",
        description: "VRP, VRPTW, last-mile heuristics.",
        difficulty: "Advanced",
      },
      {
        title: "Scheduling",
        description: "Production and crew scheduling under constraints.",
        difficulty: "Advanced",
      },
      {
        title: "Supply Chain Optimization",
        description: "Network design, S&OP, resilience.",
        difficulty: "Applied",
      },
      {
        title: "Production Planning & Manufacturing",
        description: "Lot sizing, capacity, MRP, bottlenecks, and factory flow.",
        difficulty: "Applied",
      },
      {
        title: "Revenue Management",
        description: "Pricing and capacity controls.",
        difficulty: "Applied",
      },
    ],
  },
  {
    id: "analytics",
    title: "Analytics + OR Path",
    tagline: "Predict, then prescribe.",
    audience: "Data scientists moving toward decision systems.",
    steps: [
      {
        title: "Data Science Foundations",
        description: "Statistics, regression, causal thinking.",
        difficulty: "Foundations",
      },
      {
        title: "Forecasting for Decisions",
        description: "Time series, demand, choice models.",
        difficulty: "Intermediate",
      },
      {
        title: "Predict-then-Optimize",
        description: "Use predictions inside optimization models.",
        difficulty: "Intermediate",
      },
      {
        title: "ML + Optimization",
        description: "Decision-focused learning, surrogate models, bandits.",
        difficulty: "Advanced",
      },
      {
        title: "Data-Driven Optimization",
        description: "Contextual optimization, policy learning, and DRO.",
        difficulty: "Advanced",
      },
      {
        title: "Prescriptive Analytics",
        description: "Turn dashboards into automated decisions.",
        difficulty: "Applied",
      },
      {
        title: "Responsible Decision Systems",
        description: "Fairness, explainability, monitoring, fallback.",
        difficulty: "Applied",
      },
    ],
  },
  {
    id: "research",
    title: "Researcher / Advanced Path",
    tagline: "Toward the frontier of the field.",
    audience: "Graduate students and researchers.",
    steps: [
      {
        title: "Convex Analysis & Programming",
        description: "Theory, conic duality, complexity.",
        difficulty: "Advanced",
      },
      {
        title: "Integer & Combinatorial Optimization",
        description: "Polyhedral theory, valid inequalities, branching.",
        difficulty: "Advanced",
      },
      {
        title: "Polyhedral Theory & Cutting Planes",
        description: "Facets, valid inequalities, relaxations, and branch-and-cut.",
        difficulty: "Advanced",
      },
      {
        title: "Dynamic & Stochastic Programming",
        description: "MDPs, multistage stochastic models, SDDP.",
        difficulty: "Advanced",
      },
      {
        title: "Conic & Semidefinite Optimization",
        description: "SOCP, SDP, dual cones, relaxations, and interior-point methods.",
        difficulty: "Advanced",
      },
      {
        title: "Game Theory",
        description: "Equilibria, mechanism design, computational aspects.",
        difficulty: "Advanced",
      },
      {
        title: "Decomposition Methods",
        description: "Benders, Dantzig–Wolfe, Lagrangian.",
        difficulty: "Advanced",
      },
      {
        title: "Benchmarks & Community",
        description: "MIPLIB, journals, INFORMS, MOS, IPCO.",
        difficulty: "Applied",
        related: [
          { label: "MIPLIB", url: "https://miplib.zib.de/" },
          { label: "INFORMS", url: "https://www.informs.org/" },
        ],
      },
    ],
  },
  {
    id: "health-energy-public",
    title: "Healthcare, Energy & Public Systems Path",
    tagline: "High-stakes OR for essential systems.",
    audience: "Analysts working in healthcare, energy, defense, emergency response, or policy.",
    steps: [
      {
        title: "Modeling Decisions",
        description: "Frame stakeholder goals, constraints, uncertainty, and equity concerns.",
        difficulty: "Foundations",
      },
      {
        title: "Queueing Theory",
        description: "Capacity, congestion, access, utilization, and service levels.",
        difficulty: "Intermediate",
      },
      {
        title: "Scheduling & Project Management",
        description: "Operating rooms, maintenance windows, crews, and critical paths.",
        difficulty: "Advanced",
      },
      {
        title: "Healthcare Operations Research",
        description: "Patient flow, beds, clinics, treatment planning, and triage.",
        difficulty: "Applied",
      },
      {
        title: "Energy & Power Systems",
        description: "Unit commitment, dispatch, storage, renewables, and resilience.",
        difficulty: "Advanced",
      },
      {
        title: "Public Sector & Policy OR",
        description: "Coverage, resource allocation, transparency, and robustness.",
        difficulty: "Applied",
      },
      {
        title: "Risk Analysis",
        description: "Stress tests, tail risk, scenario planning, and mitigation.",
        difficulty: "Intermediate",
      },
    ],
  },
  {
    id: "modern-decision-systems",
    title: "Modern Decision Systems Path",
    tagline: "Ship OR as software.",
    audience: "Engineers and data scientists building production decision services.",
    steps: [
      {
        title: "Software Tools & Solvers",
        description: "Pyomo, JuMP, OR-Tools, HiGHS, Gurobi, CPLEX, and modeling APIs.",
        difficulty: "Applied",
      },
      {
        title: "Model Validation & Sensitivity",
        description: "Backtesting, scenario analysis, stress testing, and calibration.",
        difficulty: "Foundations",
      },
      {
        title: "Prescriptive Analytics",
        description: "Translate predictions and business rules into recommendations.",
        difficulty: "Applied",
      },
      {
        title: "Simulation Optimization",
        description: "Tune noisy systems with ranking, selection, and response surfaces.",
        difficulty: "Advanced",
      },
      {
        title: "Digital Twins & What-If Systems",
        description: "Connect simulation, optimization, and live operational data.",
        difficulty: "Applied",
      },
      {
        title: "Solver Engineering & Deployment",
        description: "APIs, warm starts, monitoring, infeasibility handling, and fallbacks.",
        difficulty: "Applied",
      },
      {
        title: "Responsible OR & Decision Governance",
        description: "Fairness, explainability, auditability, and human override.",
        difficulty: "Applied",
      },
      {
        title: "Behavioral OR & Human Decisions",
        description: "Trust, incentives, bias, adoption, and human-in-the-loop decisions.",
        difficulty: "Applied",
      },
    ],
  },
];
