export type Difficulty = "Foundations" | "Intermediate" | "Advanced" | "Applied";
export type TopicType = "Theory" | "Method" | "Application" | "Software" | "Resource";

export interface TopicResource {
  title: string;
  url: string;
}

export interface Topic {
  id: string;
  region: string;
  regionIndex: number;
  topicIndex: number;
  title: string;
  short: string;
  description: string;
  concepts: string[];
  applications?: string[];
  difficulty: Difficulty;
  type: TopicType;
  resources: TopicResource[];
  next?: string[];
}

export const regions = [
  {
    id: "foundations",
    title: "Foundations of OR",
    index: 1,
    blurb:
      "The vocabulary of decisions: variables, objectives, constraints, uncertainty, and algorithms.",
  },
  {
    id: "optimization-core",
    title: "Optimization Core",
    index: 2,
    blurb: "Mathematical programming — the engine room of OR.",
  },
  {
    id: "stochastic",
    title: "Uncertainty & Stochastic Systems",
    index: 3,
    blurb: "Modeling randomness, queues, simulation, and decisions under risk.",
  },
  {
    id: "networks-games",
    title: "Networks, Games & Systems",
    index: 4,
    blurb: "Flows, strategy, sequencing, and structured combinatorial problems.",
  },
  {
    id: "applications",
    title: "Operations Applications",
    index: 5,
    blurb: "Inventory, logistics, supply chains, and revenue — where OR meets industry.",
  },
  {
    id: "modern",
    title: "Modern OR Practice",
    index: 6,
    blurb: "Analytics, ML, software, datasets, and the contemporary practice stack.",
  },
] as const;

export const topics: Topic[] = [
  // ─── Foundations ─────────────────────────────────────────
  {
    id: "what-is-or",
    region: "foundations",
    regionIndex: 1,
    topicIndex: 1,
    title: "What is Operations Research?",
    short: "The discipline of building analytical models to improve decisions.",
    description:
      "OR takes a messy real-world system and turns it into a model with decision variables, an objective, constraints, uncertainty, and an algorithm. It answers not only ‘what will happen?’ but ‘what should we do?’",
    concepts: ["Decision variables", "Objectives", "Constraints", "Uncertainty", "Algorithms"],
    applications: ["Logistics", "Healthcare", "Energy", "Finance", "Government"],
    difficulty: "Foundations",
    type: "Theory",
    resources: [],
    next: ["modeling-decisions", "linear-programming"],
  },
  {
    id: "modeling-decisions",
    region: "foundations",
    regionIndex: 1,
    topicIndex: 2,
    title: "Modeling Decisions",
    short: "Translate a real situation into variables, objectives, and constraints.",
    description:
      "Good models begin with the right abstraction. Identify what is chosen, what is optimized, what is fixed, and what is uncertain — before opening a solver.",
    concepts: ["Problem framing", "Abstraction", "Assumptions", "Validation"],
    difficulty: "Foundations",
    type: "Method",
    resources: [],
    next: ["linear-programming", "network-optimization"],
  },
  {
    id: "objectives-constraints",
    region: "foundations",
    regionIndex: 1,
    topicIndex: 3,
    title: "Objectives, Constraints & Uncertainty",
    short: "Tradeoffs made explicit: cost, service, risk, fairness, resilience.",
    description:
      "Real decisions juggle competing goals against rules and unknowns. OR makes these tradeoffs explicit so they can be compared, audited, and improved.",
    concepts: ["Multi-objective", "Hard vs soft constraints", "Risk", "Fairness"],
    difficulty: "Foundations",
    type: "Theory",
    resources: [],
  },
  {
    id: "algorithms-computation",
    region: "foundations",
    regionIndex: 1,
    topicIndex: 4,
    title: "Algorithms & Computation",
    short: "The methods that find exact, approximate, or robust decisions.",
    description:
      "From simplex to branch-and-bound to metaheuristics, OR pairs models with algorithms. Computational maturity is what makes the field useful in practice.",
    concepts: ["Exact methods", "Heuristics", "Complexity", "Numerical stability"],
    difficulty: "Foundations",
    type: "Theory",
    resources: [],
  },
  {
    id: "probability-statistics",
    region: "foundations",
    regionIndex: 1,
    topicIndex: 5,
    title: "Probability & Statistics for OR",
    short: "The measurement and uncertainty toolkit behind OR models.",
    description:
      "Probability, estimation, regression, hypothesis testing, and experimental design help OR analysts quantify inputs, uncertainty, and model performance.",
    concepts: ["Distributions", "Estimation", "Regression", "Sampling", "Experimental design"],
    applications: ["Demand modeling", "Reliability", "Simulation input analysis", "Forecasting"],
    difficulty: "Foundations",
    type: "Theory",
    resources: [
      {
        title: "MIT 6.041 Probabilistic Systems Analysis",
        url: "https://ocw.mit.edu/courses/6-041-probabilistic-systems-analysis-and-applied-probability-fall-2010/",
      },
      { title: "ProbabilityCourse.com", url: "https://www.probabilitycourse.com/" },
    ],
    next: ["stochastic-processes", "simulation"],
  },
  {
    id: "model-validation",
    region: "foundations",
    regionIndex: 1,
    topicIndex: 6,
    title: "Model Validation & Sensitivity",
    short: "Check whether a model is useful, credible, and stable.",
    description:
      "Validation compares model behavior with reality, tests assumptions, and studies how recommendations change under parameter, data, or scenario shifts.",
    concepts: ["Calibration", "Backtesting", "Scenario analysis", "Sensitivity", "Stress testing"],
    applications: ["Policy models", "Digital twins", "Revenue models", "Risk analysis"],
    difficulty: "Foundations",
    type: "Method",
    resources: [],
    next: ["decision-analysis", "responsible-or"],
  },
  {
    id: "multiobjective-optimization",
    region: "foundations",
    regionIndex: 1,
    topicIndex: 7,
    title: "Multi-Objective Optimization",
    short: "Make cost, service, risk, fairness, and emissions visible together.",
    description:
      "Multi-objective methods expose Pareto frontiers and tradeoff curves when a single objective hides important operational or social goals.",
    concepts: ["Pareto efficiency", "Weighted sums", "Goal programming", "Epsilon constraints"],
    applications: ["Sustainability", "Healthcare triage", "Portfolio design", "Public policy"],
    difficulty: "Intermediate",
    type: "Method",
    resources: [
      {
        title: "NEOS Guide — Multiobjective Optimization",
        url: "https://neos-guide.org/guide/types/multiobjective/",
      },
    ],
    next: ["decision-analysis", "responsible-or"],
  },
  {
    id: "data-envelopment-analysis",
    region: "foundations",
    regionIndex: 1,
    topicIndex: 8,
    title: "Data Envelopment Analysis",
    short: "Benchmark efficiency across comparable units.",
    description:
      "DEA uses optimization to compare decision-making units such as hospitals, branches, schools, and plants when multiple inputs and outputs matter.",
    concepts: ["Efficiency frontier", "CCR/BCC models", "Peer units", "Slack"],
    applications: ["Hospitals", "Bank branches", "Universities", "Manufacturing plants"],
    difficulty: "Intermediate",
    type: "Application",
    resources: [
      {
        title: "Data Envelopment Analysis — Cooper, Seiford, Zhu",
        url: "https://link.springer.com/book/10.1007/978-1-4419-6151-8",
      },
    ],
  },
  {
    id: "forecasting-for-or",
    region: "foundations",
    regionIndex: 1,
    topicIndex: 9,
    title: "Forecasting for OR",
    short: "Turn historical data into decision inputs, not just predictions.",
    description:
      "Forecasting estimates demand, arrivals, failures, prices, workloads, and other uncertain inputs that feed inventory, staffing, pricing, capacity, and simulation models.",
    concepts: ["Time series", "Causal models", "Forecast error", "Scenario generation", "Bias"],
    applications: ["Inventory", "Staffing", "Revenue management", "Capacity planning", "Energy"],
    difficulty: "Foundations",
    type: "Method",
    resources: [
      { title: "Forecasting: Principles and Practice", url: "https://otexts.com/fpp3/" },
      {
        title: "MIT 15.071 The Analytics Edge",
        url: "https://ocw.mit.edu/courses/15-071-the-analytics-edge-spring-2017/",
      },
    ],
    next: ["probability-statistics", "stochastic-programming", "inventory-theory"],
  },
  {
    id: "spreadsheet-algebraic-modeling",
    region: "foundations",
    regionIndex: 1,
    topicIndex: 10,
    title: "Spreadsheet & Algebraic Modeling",
    short: "Build transparent OR models in spreadsheets and modeling languages.",
    description:
      "Classical OR textbooks emphasize spreadsheet models, algebraic notation, and solver-ready formulations because many real projects start as auditable prototypes before becoming production optimization services.",
    concepts: [
      "Spreadsheet models",
      "Algebraic notation",
      "Solver add-ins",
      "Model auditing",
      "Data tables",
    ],
    applications: ["Teaching", "Prototyping", "Budgeting", "Planning", "Decision support"],
    difficulty: "Foundations",
    type: "Software",
    resources: [
      { title: "OpenSolver", url: "https://opensolver.org/" },
      { title: "Pyomo", url: "https://www.pyomo.org/" },
      { title: "JuMP", url: "https://jump.dev/JuMP.jl/stable/" },
    ],
    next: ["modeling-decisions", "software-solvers", "solver-engineering"],
  },

  // ─── Optimization Core ───────────────────────────────────
  {
    id: "mathematical-optimization",
    region: "optimization-core",
    regionIndex: 2,
    topicIndex: 1,
    title: "Mathematical Optimization",
    short: "The central modeling language of OR.",
    description:
      "Represent decisions as variables, limits as constraints, and goals as an objective function. Duality, sensitivity, decomposition, and heuristics extend the toolbox.",
    concepts: ["Feasible region", "Duality", "Sensitivity", "Decomposition", "Robust optimization"],
    difficulty: "Intermediate",
    type: "Theory",
    resources: [],
    next: ["linear-programming", "integer-programming", "convex-optimization"],
  },
  {
    id: "linear-programming",
    region: "optimization-core",
    regionIndex: 2,
    topicIndex: 2,
    title: "Linear Programming",
    short: "Linear objective, linear constraints — the workhorse of OR.",
    description:
      "LP is expressive, mature, and widely used. Simplex and interior-point methods solve very large instances. Duality gives shadow prices and sensitivity.",
    concepts: ["Simplex", "Interior point", "Duality", "Shadow prices", "Reduced costs"],
    applications: ["Blending", "Production planning", "Diet", "Transportation", "Portfolio"],
    difficulty: "Foundations",
    type: "Method",
    resources: [
      {
        title: "Linear Programming FAQ — NEOS Guide",
        url: "https://neos-guide.org/guide/types/linear-programming/",
      },
      {
        title: "MIT 15.053 Optimization Methods",
        url: "https://ocw.mit.edu/courses/15-053-optimization-methods-in-management-science-spring-2013/",
      },
      {
        title: "Introduction to Linear Optimization — Bertsimas & Tsitsiklis",
        url: "https://www.athenasc.com/linoptbook.html",
      },
    ],
    next: ["integer-programming", "network-optimization"],
  },
  {
    id: "integer-programming",
    region: "optimization-core",
    regionIndex: 2,
    topicIndex: 3,
    title: "Integer & Mixed-Integer Programming",
    short: "Discrete decisions: yes/no, counts, assignments, logic.",
    description:
      "MIP unlocks facility location, routing, scheduling, and unit commitment. Branch-and-bound, cutting planes, and column generation tame combinatorial complexity.",
    concepts: [
      "Binary variables",
      "Branch & bound",
      "Branch & cut",
      "Branch & price",
      "Formulation strength",
    ],
    applications: ["Facility location", "Vehicle routing", "Crew scheduling", "Unit commitment"],
    difficulty: "Intermediate",
    type: "Method",
    resources: [
      {
        title: "Cornell Optimization Wiki — Integer Programming",
        url: "https://optimization.cbe.cornell.edu/index.php?title=Integer_programming",
      },
      { title: "SCIP Book", url: "https://scipbook.readthedocs.io/" },
      { title: "MIPLIB", url: "https://miplib.zib.de/" },
    ],
    next: ["scheduling", "network-optimization"],
  },
  {
    id: "nonlinear-optimization",
    region: "optimization-core",
    regionIndex: 2,
    topicIndex: 4,
    title: "Nonlinear Optimization",
    short: "When objectives or constraints stop being linear.",
    description:
      "Engineering design, energy, pricing, and ML pose nonlinear models. Gradient, Newton, SQP, interior-point, and derivative-free methods each have their niche.",
    concepts: [
      "Gradient methods",
      "Newton / quasi-Newton",
      "SQP",
      "Interior point",
      "Global optimization",
    ],
    difficulty: "Advanced",
    type: "Method",
    resources: [
      {
        title: "NEOS Guide — Nonlinear Programming",
        url: "https://neos-guide.org/guide/types/nonlinear-programming/",
      },
      {
        title: "Numerical Optimization — Nocedal & Wright",
        url: "https://link.springer.com/book/10.1007/978-0-387-40065-5",
      },
      { title: "NLopt", url: "https://nlopt.readthedocs.io/" },
    ],
  },
  {
    id: "convex-optimization",
    region: "optimization-core",
    regionIndex: 2,
    topicIndex: 5,
    title: "Convex Optimization",
    short: "Where every local optimum is global.",
    description:
      "Convex structure yields clean theory and reliable computation. Conic programming, Lagrangian duality, and disciplined convex programming power modern modeling.",
    concepts: ["Convex sets", "KKT", "Conic programming", "Lagrangian duality", "Proximal methods"],
    applications: ["Portfolio", "Signal processing", "ML", "Control", "Energy dispatch"],
    difficulty: "Advanced",
    type: "Theory",
    resources: [
      {
        title: "Convex Optimization — Boyd & Vandenberghe",
        url: "https://web.stanford.edu/~boyd/cvxbook/",
      },
      { title: "Stanford EE364A", url: "https://web.stanford.edu/class/ee364a/" },
      { title: "CVXPY Short Course", url: "https://www.cvxgrp.org/cvx_short_course/" },
    ],
  },
  {
    id: "dynamic-programming",
    region: "optimization-core",
    regionIndex: 2,
    topicIndex: 6,
    title: "Dynamic Programming",
    short: "Sequential decisions decomposed into stages and states.",
    description:
      "DP underlies inventory control, MDPs, reinforcement learning, and optimal control. The Bellman equation expresses optimal value recursively.",
    concepts: ["State", "Bellman equation", "Finite & infinite horizon", "Approximate DP"],
    applications: ["Shortest paths", "Inventory", "Revenue management", "Reinforcement learning"],
    difficulty: "Advanced",
    type: "Method",
    resources: [
      {
        title: "Dynamic Programming and Optimal Control — Bertsekas",
        url: "https://www.athenasc.com/dpbook.html",
      },
      {
        title: "MIT 6.231",
        url: "https://ocw.mit.edu/courses/6-231-dynamic-programming-and-stochastic-control-fall-2015/",
      },
      { title: "Algorithms for Decision Making", url: "https://algorithmsbook.com/" },
    ],
  },
  {
    id: "conic-semidefinite-optimization",
    region: "optimization-core",
    regionIndex: 2,
    topicIndex: 7,
    title: "Conic & Semidefinite Optimization",
    short: "LP, SOCP, and SDP as one convex modeling family.",
    description:
      "Conic optimization generalizes linear programming through cones such as nonnegative orthants, second-order cones, and positive semidefinite matrices.",
    concepts: ["SOCP", "SDP", "Dual cones", "Interior-point methods", "Relaxations"],
    applications: ["Portfolio", "Control", "Power systems", "Robust optimization"],
    difficulty: "Advanced",
    type: "Method",
    resources: [
      {
        title: "MOSEK Modeling Cookbook",
        url: "https://docs.mosek.com/modeling-cookbook/index.html",
      },
      {
        title: "Convex Optimization — Boyd & Vandenberghe",
        url: "https://web.stanford.edu/~boyd/cvxbook/",
      },
    ],
    next: ["convex-optimization", "robust-optimization"],
  },
  {
    id: "stochastic-programming",
    region: "optimization-core",
    regionIndex: 2,
    topicIndex: 8,
    title: "Stochastic Programming",
    short: "Optimize decisions before uncertain futures are revealed.",
    description:
      "Two-stage and multistage stochastic programs use scenarios, recourse, chance constraints, and nonanticipativity to plan under probabilistic uncertainty.",
    concepts: ["Scenarios", "Recourse", "Chance constraints", "SAA", "Nonanticipativity"],
    applications: ["Energy planning", "Finance", "Supply chains", "Disaster response"],
    difficulty: "Advanced",
    type: "Method",
    resources: [
      {
        title: "Lectures on Stochastic Programming",
        url: "https://www2.isye.gatech.edu/people/faculty/Alex_Shapiro/SPbook.pdf",
      },
      { title: "Stochastic Programming Community", url: "https://www.stoprog.org/" },
    ],
    next: ["robust-optimization", "decomposition-methods"],
  },
  {
    id: "robust-optimization",
    region: "optimization-core",
    regionIndex: 2,
    topicIndex: 9,
    title: "Robust Optimization",
    short: "Find decisions that survive bounded uncertainty.",
    description:
      "Robust optimization protects decisions against worst-case parameter values in uncertainty sets, often producing tractable LP, conic, or integer models.",
    concepts: ["Uncertainty sets", "Worst case", "Adjustable robustness", "Price of robustness"],
    applications: ["Supply resilience", "Portfolio risk", "Energy dispatch", "Healthcare planning"],
    difficulty: "Advanced",
    type: "Method",
    resources: [
      {
        title: "Robust Optimization — Bertsimas, Brown, Caramanis",
        url: "https://www.mit.edu/~dbertsim/papers/Robust%20Optimization/Robust%20Optimization.pdf",
      },
      {
        title: "MIT 15.093J Optimization Methods",
        url: "https://ocw.mit.edu/courses/15-093j-optimization-methods-fall-2009/",
      },
    ],
    next: ["stochastic-programming", "conic-semidefinite-optimization"],
  },
  {
    id: "decomposition-methods",
    region: "optimization-core",
    regionIndex: 2,
    topicIndex: 10,
    title: "Decomposition Methods",
    short: "Split large models into pieces solvers can actually handle.",
    description:
      "Benders, Dantzig-Wolfe, column generation, Lagrangian relaxation, and ADMM exploit structure across scenarios, networks, customers, and time periods.",
    concepts: ["Benders", "Column generation", "Dantzig-Wolfe", "Lagrangian relaxation", "ADMM"],
    applications: ["Crew scheduling", "Unit commitment", "Stochastic programs", "Vehicle routing"],
    difficulty: "Advanced",
    type: "Method",
    resources: [
      {
        title: "A Tutorial on Decomposition Methods",
        url: "https://optimization-online.org/tag/decomposition-methods/",
      },
    ],
    next: ["integer-programming", "stochastic-programming"],
  },
  {
    id: "constraint-programming",
    region: "optimization-core",
    regionIndex: 2,
    topicIndex: 11,
    title: "Constraint Programming",
    short: "Search and propagation for rich logical constraints.",
    description:
      "CP models scheduling, timetabling, routing, packing, and feasibility-heavy problems using domains, global constraints, propagation, and search.",
    concepts: ["Domains", "Propagation", "Global constraints", "CP-SAT", "Search"],
    applications: ["Timetabling", "Scheduling", "Routing", "Packing"],
    difficulty: "Intermediate",
    type: "Method",
    resources: [
      {
        title: "OR-Tools CP-SAT Solver",
        url: "https://developers.google.com/optimization/cp/cp_solver",
      },
      { title: "MiniZinc Handbook", url: "https://www.minizinc.org/doc-latest/en/" },
    ],
    next: ["scheduling", "integer-programming"],
  },
  {
    id: "metaheuristics",
    region: "optimization-core",
    regionIndex: 2,
    topicIndex: 12,
    title: "Heuristics & Metaheuristics",
    short: "Good answers when exact optimization is too slow or brittle.",
    description:
      "Local search, tabu search, simulated annealing, genetic algorithms, large neighborhood search, and matheuristics trade guarantees for speed and scale.",
    concepts: ["Local search", "Tabu search", "Simulated annealing", "LNS", "Matheuristics"],
    applications: ["Routing", "Scheduling", "Packing", "Network design"],
    difficulty: "Advanced",
    type: "Method",
    resources: [
      {
        title: "Essentials of Metaheuristics",
        url: "https://cs.gmu.edu/~sean/book/metaheuristics/",
      },
    ],
    next: ["vehicle-routing", "scheduling"],
  },
  {
    id: "global-optimization-minlp",
    region: "optimization-core",
    regionIndex: 2,
    topicIndex: 13,
    title: "Global Optimization & MINLP",
    short: "Nonconvex models with continuous and discrete structure.",
    description:
      "Global optimization tackles nonconvex NLP and MINLP with relaxations, spatial branch-and-bound, bound tightening, and convex envelopes.",
    concepts: ["Nonconvexity", "MINLP", "Spatial branch-and-bound", "Convex envelopes"],
    applications: ["Process systems", "Energy", "Design", "Pricing"],
    difficulty: "Advanced",
    type: "Method",
    resources: [
      { title: "BARON", url: "https://minlp.com/baron" },
      { title: "SCIP", url: "https://www.scipopt.org/" },
    ],
  },
  {
    id: "combinatorial-optimization",
    region: "optimization-core",
    regionIndex: 2,
    topicIndex: 14,
    title: "Combinatorial Optimization",
    short: "Optimize over sets, sequences, trees, matchings, and routes.",
    description:
      "Combinatorial optimization studies discrete structures using polyhedral theory, approximation algorithms, dynamic programming, and specialized graph algorithms.",
    concepts: ["Matroids", "Matchings", "Cuts", "Approximation", "Polyhedra"],
    applications: ["Assignment", "TSP", "Network design", "Scheduling"],
    difficulty: "Advanced",
    type: "Theory",
    resources: [
      {
        title: "Combinatorial Optimization — Cook et al.",
        url: "https://www.wiley.com/en-us/Combinatorial+Optimization-p-9781118031391",
      },
    ],
    next: ["network-optimization", "integer-programming"],
  },
  {
    id: "least-squares-quadratic-optimization",
    region: "optimization-core",
    regionIndex: 2,
    topicIndex: 15,
    title: "Least Squares, QP & Piecewise-Linear Models",
    short: "Optimization workhorses between linear models and full nonlinear programs.",
    description:
      "Least squares, quadratic programming, separable convex functions, and piecewise-linear models appear in estimation, finance, control, ML, and planning.",
    concepts: [
      "Least squares",
      "Quadratic programming",
      "Piecewise-linear models",
      "Active set methods",
      "Parametric QP",
    ],
    applications: ["Regression", "Portfolio", "Control", "Curve fitting", "Resource planning"],
    difficulty: "Intermediate",
    type: "Method",
    resources: [
      {
        title: "NEOS Guide — Quadratic Programming",
        url: "https://neos-guide.org/content/quadratic-programming",
      },
      {
        title: "VMLS — Boyd & Vandenberghe",
        url: "https://vmls-book.stanford.edu/",
      },
    ],
    next: ["convex-optimization", "nonlinear-optimization"],
  },
  {
    id: "polyhedral-theory-cutting-planes",
    region: "optimization-core",
    regionIndex: 2,
    topicIndex: 16,
    title: "Polyhedral Theory & Cutting Planes",
    short: "Understand the geometry that makes integer optimization effective.",
    description:
      "Polyhedral theory studies facets, valid inequalities, relaxations, and extended formulations; cutting planes turn that geometry into stronger MIP algorithms.",
    concepts: [
      "Facets",
      "Valid inequalities",
      "Relaxations",
      "Extended formulations",
      "Branch-and-cut",
    ],
    applications: ["MIP solvers", "Routing", "Scheduling", "Network design"],
    difficulty: "Advanced",
    type: "Theory",
    resources: [
      {
        title: "Integer and Combinatorial Optimization — Wolsey",
        url: "https://www.wiley.com/en-us/Integer+Programming%2C+2nd+Edition-p-9781119606536",
      },
      { title: "IPCO Conference", url: "https://www.mathopt.org/?nav=ipco" },
    ],
    next: ["integer-programming", "combinatorial-optimization"],
  },
  {
    id: "complementarity-equilibrium",
    region: "optimization-core",
    regionIndex: 2,
    topicIndex: 17,
    title: "Complementarity & Equilibrium Models",
    short: "Model markets, traffic, contact, and KKT systems with either-or conditions.",
    description:
      "Complementarity models encode mutually exclusive slackness conditions and equilibrium relationships that arise in economics, engineering, games, and optimization optimality systems.",
    concepts: ["LCP", "MCP", "Variational inequalities", "KKT systems", "Equilibrium"],
    applications: [
      "Traffic assignment",
      "Energy markets",
      "Contact mechanics",
      "Economic equilibria",
    ],
    difficulty: "Advanced",
    type: "Method",
    resources: [
      {
        title: "NEOS Guide — Complementarity Problems",
        url: "https://neos-guide.org/guide/types/complementarity-problems/",
      },
      {
        title: "Linear Complementarity, Linear and Nonlinear Programming — Murty",
        url: "https://public.websites.umich.edu/~murty/books/linear_complementarity_webbook/",
      },
    ],
    next: ["game-theory", "nonlinear-optimization"],
  },
  {
    id: "goal-programming",
    region: "optimization-core",
    regionIndex: 2,
    topicIndex: 18,
    title: "Goal Programming",
    short: "Optimize deviations from multiple aspiration levels.",
    description:
      "Goal programming extends linear programming for settings where managers specify target levels for several goals and minimize weighted or prioritized deviations from those targets.",
    concepts: [
      "Aspiration levels",
      "Deviation variables",
      "Preemptive priorities",
      "Weighted goals",
      "Soft constraints",
    ],
    applications: [
      "Budgeting",
      "Workforce planning",
      "Public policy",
      "Portfolio design",
      "Production planning",
    ],
    difficulty: "Intermediate",
    type: "Method",
    resources: [
      {
        title: "NEOS Guide — Multiobjective Optimization",
        url: "https://neos-guide.org/guide/types/multiobjective/",
      },
      {
        title: "MIT 15.053 Optimization Methods",
        url: "https://ocw.mit.edu/courses/15-053-optimization-methods-in-management-science-spring-2013/",
      },
    ],
    next: ["multiobjective-optimization", "linear-programming"],
  },
  {
    id: "postoptimal-parametric-analysis",
    region: "optimization-core",
    regionIndex: 2,
    topicIndex: 19,
    title: "Postoptimal & Parametric Analysis",
    short: "Understand how optimal solutions change when inputs move.",
    description:
      "Postoptimal and parametric analysis studies sensitivity ranges, right-hand-side changes, objective coefficient changes, and reoptimization so recommendations remain useful after model inputs shift.",
    concepts: [
      "Sensitivity ranges",
      "Shadow prices",
      "Parametric RHS",
      "Parametric costs",
      "Reoptimization",
    ],
    applications: [
      "Capacity planning",
      "Pricing",
      "Budget changes",
      "Scenario review",
      "Management reports",
    ],
    difficulty: "Intermediate",
    type: "Method",
    resources: [
      {
        title: "Linear Programming FAQ — NEOS Guide",
        url: "https://neos-guide.org/guide/types/linear-programming/",
      },
      {
        title: "MIT 15.053 Optimization Methods",
        url: "https://ocw.mit.edu/courses/15-053-optimization-methods-in-management-science-spring-2013/",
      },
    ],
    next: ["linear-programming", "model-validation"],
  },

  // ─── Stochastic Systems ──────────────────────────────────
  {
    id: "stochastic-processes",
    region: "stochastic",
    regionIndex: 3,
    topicIndex: 1,
    title: "Stochastic Processes",
    short: "Systems that evolve randomly over time.",
    description:
      "Probability foundations for OR: Poisson processes, renewal processes, Markov chains, MDPs, and reliability models.",
    concepts: ["Poisson", "Renewal", "Markov chains", "MDPs", "Brownian motion"],
    applications: ["Call centers", "Inventory", "Finance", "Maintenance", "Healthcare"],
    difficulty: "Intermediate",
    type: "Theory",
    resources: [
      {
        title: "Introduction to Probability Models — Ross",
        url: "https://www.elsevier.com/books/introduction-to-probability-models/ross/978-0-12-814346-9",
      },
      {
        title: "MIT 6.262",
        url: "https://ocw.mit.edu/courses/6-262-discrete-stochastic-processes-spring-2011/",
      },
      { title: "ProbabilityCourse.com", url: "https://www.probabilitycourse.com/" },
    ],
  },
  {
    id: "queueing-theory",
    region: "stochastic",
    regionIndex: 3,
    topicIndex: 2,
    title: "Queueing Theory",
    short: "Waiting lines, service systems, and congestion.",
    description:
      "Estimate waiting time, utilization, and capacity needs. Little's Law and M/M/c models give powerful first answers.",
    concepts: ["Arrival process", "Service process", "Traffic intensity", "Little's Law", "M/M/c"],
    applications: ["Hospitals", "Call centers", "Cloud", "Airports", "Manufacturing"],
    difficulty: "Intermediate",
    type: "Theory",
    resources: [
      {
        title: "Queueing Theory Calculator",
        url: "https://www.supositorio.com/rcalc/rcalclite.htm",
      },
      {
        title: "Queueing Theory — Kardi Teknomo",
        url: "https://people.revoledu.com/kardi/tutorial/Queuing/",
      },
      {
        title: "Fundamentals of Queueing Theory — Gross et al.",
        url: "https://www.wiley.com/en-us/Fundamentals+of+Queueing+Theory%2C+5th+Edition-p-9781118943526",
      },
    ],
  },
  {
    id: "markov-chains",
    region: "stochastic",
    regionIndex: 3,
    topicIndex: 9,
    title: "Markov Chains",
    short: "State-to-state stochastic models without decisions.",
    description:
      "Markov chains model systems that move randomly among states according to transition probabilities, supporting steady-state analysis, absorption probabilities, reliability, queues, inventory, and ranking models.",
    concepts: [
      "Transition matrix",
      "State classification",
      "Steady state",
      "Absorbing states",
      "First passage",
    ],
    applications: ["Reliability", "Customer migration", "Inventory", "Queues", "Web ranking"],
    difficulty: "Intermediate",
    type: "Theory",
    resources: [
      {
        title: "MIT 6.262 Discrete Stochastic Processes",
        url: "https://ocw.mit.edu/courses/6-262-discrete-stochastic-processes-spring-2011/",
      },
      {
        title: "ProbabilityCourse.com — Markov Chains",
        url: "https://www.probabilitycourse.com/chapter11/11_2_1_introduction.php",
      },
    ],
    next: ["stochastic-processes", "markov-decision-processes"],
  },
  {
    id: "simulation",
    region: "stochastic",
    regionIndex: 3,
    topicIndex: 3,
    title: "Simulation",
    short: "Imitating system behavior when analysis is too hard.",
    description:
      "Monte Carlo, discrete-event, and agent-based simulation let you study uncertainty, interactions, and operational detail in silico.",
    concepts: ["Monte Carlo", "Discrete-event", "Agent-based", "Variance reduction", "Validation"],
    applications: ["Operations", "Risk", "Healthcare", "Logistics", "Networks"],
    difficulty: "Intermediate",
    type: "Method",
    resources: [
      {
        title: "Simulation Modeling and Analysis — Law",
        url: "https://www.mheducation.com/highered/product/simulation-modeling-analysis-law/M9781264268770.html",
      },
      { title: "SimPy", url: "https://simpy.readthedocs.io/" },
    ],
  },
  {
    id: "decision-analysis",
    region: "stochastic",
    regionIndex: 3,
    topicIndex: 4,
    title: "Decision Analysis",
    short: "Structured choice under uncertainty and multiple criteria.",
    description:
      "Decision trees, utility theory, value-of-information, and multi-criteria methods support transparent, defensible choices.",
    concepts: [
      "Decision trees",
      "Utility",
      "Value of information",
      "Multi-criteria",
      "Risk preferences",
    ],
    difficulty: "Intermediate",
    type: "Theory",
    resources: [],
  },
  {
    id: "markov-decision-processes",
    region: "stochastic",
    regionIndex: 3,
    topicIndex: 5,
    title: "Markov Decision Processes",
    short: "Controlled stochastic systems with state, action, and reward.",
    description:
      "MDPs formalize sequential decision-making under uncertainty and connect dynamic programming, reinforcement learning, inventory, queues, and maintenance.",
    concepts: ["States", "Actions", "Rewards", "Policies", "Value iteration"],
    applications: ["Inventory control", "Maintenance", "Pricing", "Routing", "RL"],
    difficulty: "Advanced",
    type: "Method",
    resources: [
      { title: "Algorithms for Decision Making", url: "https://algorithmsbook.com/" },
      {
        title: "MIT 6.231 Dynamic Programming",
        url: "https://ocw.mit.edu/courses/6-231-dynamic-programming-and-stochastic-control-fall-2015/",
      },
    ],
    next: ["dynamic-programming", "analytics-ml"],
  },
  {
    id: "reliability-maintenance",
    region: "stochastic",
    regionIndex: 3,
    topicIndex: 6,
    title: "Reliability & Maintenance",
    short: "Keep systems available under failure, aging, and repair.",
    description:
      "Reliability models, replacement policies, inspection schedules, and condition-based maintenance quantify availability and lifecycle cost.",
    concepts: [
      "Failure rates",
      "Renewal reward",
      "Replacement",
      "Availability",
      "Condition monitoring",
    ],
    applications: ["Aviation", "Manufacturing", "Energy assets", "Rail", "Defense"],
    difficulty: "Intermediate",
    type: "Application",
    resources: [
      {
        title: "Introduction to Probability Models — Ross",
        url: "https://www.elsevier.com/books/introduction-to-probability-models/ross/978-0-12-814346-9",
      },
    ],
    next: ["stochastic-processes", "markov-decision-processes"],
  },
  {
    id: "risk-analysis",
    region: "stochastic",
    regionIndex: 3,
    topicIndex: 7,
    title: "Risk Analysis",
    short: "Quantify downside, tail events, and risk appetite.",
    description:
      "Risk analysis combines probability models, simulation, optimization, and decision analysis to compare exposure, mitigation, and resilience.",
    concepts: ["Expected shortfall", "VaR", "Stress tests", "Scenario planning", "Risk measures"],
    applications: ["Finance", "Energy", "Public safety", "Supply chains"],
    difficulty: "Intermediate",
    type: "Method",
    resources: [
      {
        title: "Risk Analysis: A Quantitative Guide",
        url: "https://www.wiley.com/en-us/Risk+Analysis%3A+A+Quantitative+Guide%2C+3rd+Edition-p-9781118218471",
      },
    ],
    next: ["stochastic-programming", "robust-optimization"],
  },
  {
    id: "simulation-optimization",
    region: "stochastic",
    regionIndex: 3,
    topicIndex: 8,
    title: "Simulation Optimization",
    short: "Optimize systems whose performance is estimated by simulation.",
    description:
      "Simulation optimization uses ranking and selection, response surfaces, stochastic approximation, and Bayesian optimization to choose policies in noisy models.",
    concepts: ["Ranking & selection", "Response surfaces", "SAA", "Bayesian optimization"],
    applications: ["Call centers", "Hospitals", "Warehouses", "Manufacturing lines"],
    difficulty: "Advanced",
    type: "Method",
    resources: [
      {
        title: "Winter Simulation Conference",
        url: "https://meetings.informs.org/wordpress/wsc2024/",
      },
    ],
    next: ["simulation", "digital-twins"],
  },

  // ─── Networks, Games & Systems ───────────────────────────
  {
    id: "game-theory",
    region: "networks-games",
    regionIndex: 4,
    topicIndex: 1,
    title: "Game Theory",
    short: "Strategic interaction among decision-makers.",
    description:
      "Equilibria, mechanism design, auctions, and cooperative games — the mathematics of strategy used in pricing, markets, and policy.",
    concepts: ["Nash equilibrium", "Mechanism design", "Auctions", "Cooperative games"],
    difficulty: "Advanced",
    type: "Theory",
    resources: [],
  },
  {
    id: "network-optimization",
    region: "networks-games",
    regionIndex: 4,
    topicIndex: 2,
    title: "Network Optimization",
    short: "Flows, paths, matchings, and connectivity on graphs.",
    description:
      "Many OR problems live on networks: shortest paths, max flow, min-cost flow, assignment, routing. Specialized algorithms scale far beyond generic LP.",
    concepts: ["Shortest path", "Max flow", "Min-cost flow", "Matching", "Routing"],
    applications: ["Logistics", "Telecom", "Transit", "Supply chains"],
    difficulty: "Intermediate",
    type: "Method",
    resources: [
      {
        title: "Network Flows — Ahuja, Magnanti, Orlin",
        url: "https://www.pearson.com/en-us/subject-catalog/p/network-flows-theory-algorithms-and-applications/P200000003207/9780136175490",
      },
    ],
  },
  {
    id: "scheduling",
    region: "networks-games",
    regionIndex: 4,
    topicIndex: 3,
    title: "Scheduling",
    short: "Allocating work over time on machines, people, rooms, or vehicles.",
    description:
      "Job-shop, flow-shop, project scheduling, and timetabling — combinatorial problems with rich structure and high real-world stakes.",
    concepts: ["Job-shop", "Flow-shop", "Project scheduling", "Timetabling"],
    applications: ["Manufacturing", "Healthcare", "Airlines", "Education"],
    difficulty: "Advanced",
    type: "Application",
    resources: [
      {
        title: "Scheduling — Pinedo",
        url: "https://link.springer.com/book/10.1007/978-3-319-26580-3",
      },
    ],
  },
  {
    id: "matching-assignment",
    region: "networks-games",
    regionIndex: 4,
    topicIndex: 4,
    title: "Matching & Assignment",
    short: "Pair resources, people, tasks, and markets optimally.",
    description:
      "Assignment and matching models allocate workers to jobs, students to schools, organs to patients, ads to slots, and riders to drivers.",
    concepts: ["Bipartite matching", "Hungarian algorithm", "Stable matching", "Market design"],
    applications: ["Labor", "Education", "Healthcare", "Ride-hail", "Advertising"],
    difficulty: "Intermediate",
    type: "Method",
    resources: [
      {
        title: "Network Flows — Ahuja, Magnanti, Orlin",
        url: "https://www.pearson.com/en-us/subject-catalog/p/network-flows-theory-algorithms-and-applications/P200000003207/9780136175490",
      },
    ],
    next: ["network-optimization", "game-theory"],
  },
  {
    id: "vehicle-routing",
    region: "networks-games",
    regionIndex: 4,
    topicIndex: 5,
    title: "Vehicle Routing",
    short: "Plan routes for fleets with capacity, time windows, and uncertainty.",
    description:
      "VRP variants model delivery, pickup, service technicians, school buses, waste collection, and emergency response.",
    concepts: ["TSP", "VRP", "Time windows", "Pickup-delivery", "Large neighborhood search"],
    applications: ["Last mile", "Trucking", "Field service", "Waste collection"],
    difficulty: "Advanced",
    type: "Application",
    resources: [
      { title: "OR-Tools Routing", url: "https://developers.google.com/optimization/routing" },
      { title: "VRP-REP", url: "http://www.vrp-rep.org/" },
    ],
    next: ["transportation-logistics", "metaheuristics"],
  },
  {
    id: "facility-location",
    region: "networks-games",
    regionIndex: 4,
    topicIndex: 6,
    title: "Facility Location",
    short: "Choose where to place warehouses, clinics, depots, and capacity.",
    description:
      "Location models balance fixed cost, service distance, capacity, coverage, risk, and network flows across long-lived infrastructure decisions.",
    concepts: ["p-median", "Set covering", "Capacitated location", "Hub location", "Coverage"],
    applications: ["Warehouses", "Clinics", "Charging stations", "Emergency services"],
    difficulty: "Intermediate",
    type: "Application",
    resources: [
      {
        title: "Facility Location: Applications and Theory",
        url: "https://link.springer.com/book/10.1007/978-3-642-56082-8",
      },
    ],
    next: ["supply-chain", "public-sector-policy"],
  },
  {
    id: "traveling-salesperson-problem",
    region: "networks-games",
    regionIndex: 4,
    topicIndex: 10,
    title: "Traveling Salesperson Problem",
    short: "Find a minimum-cost tour visiting each location once.",
    description:
      "The TSP is a canonical routing and combinatorial optimization problem. It motivates exact branch-and-cut, approximation, local search, and heuristics used in routing, sequencing, and logistics.",
    concepts: [
      "Hamiltonian tours",
      "Subtour elimination",
      "Branch-and-cut",
      "Local search",
      "Approximation",
    ],
    applications: ["Routing", "Sequencing", "Circuit layout", "Warehousing", "Tour planning"],
    difficulty: "Intermediate",
    type: "Method",
    resources: [
      { title: "Concorde TSP Solver", url: "https://www.math.uwaterloo.ca/tsp/concorde.html" },
      { title: "TSPLIB", url: "http://comopt.ifi.uni-heidelberg.de/software/TSPLIB95/" },
      {
        title: "Google OR-Tools Routing",
        url: "https://developers.google.com/optimization/routing",
      },
    ],
    next: ["vehicle-routing", "combinatorial-optimization", "metaheuristics"],
  },
  {
    id: "project-management",
    region: "networks-games",
    regionIndex: 4,
    topicIndex: 7,
    title: "Project Management, PERT & CPM",
    short: "Schedule project activities under precedence, time, and resource limits.",
    description:
      "Project networks, critical paths, PERT uncertainty, crashing, and resource-constrained project scheduling connect OR to construction, R&D, and operations.",
    concepts: ["Critical path", "PERT", "Crashing", "RCPSP", "Precedence"],
    applications: ["Construction", "Software delivery", "R&D", "Maintenance turnarounds"],
    difficulty: "Intermediate",
    type: "Application",
    resources: [{ title: "PSPLIB", url: "https://www.om-db.wi.tum.de/psplib/" }],
    next: ["scheduling", "risk-analysis"],
  },
  {
    id: "optimal-control",
    region: "networks-games",
    regionIndex: 4,
    topicIndex: 8,
    title: "Optimal Control",
    short: "Optimize decisions in dynamic physical and engineered systems.",
    description:
      "Optimal control studies continuous-time dynamics, control policies, Hamilton-Jacobi-Bellman equations, and model predictive control.",
    concepts: ["State dynamics", "Control", "HJB", "MPC", "Pontryagin principle"],
    applications: ["Robotics", "Energy systems", "Aerospace", "Process control"],
    difficulty: "Advanced",
    type: "Method",
    resources: [
      {
        title: "Dynamic Programming and Optimal Control — Bertsekas",
        url: "https://www.athenasc.com/dpbook.html",
      },
    ],
    next: ["dynamic-programming", "conic-semidefinite-optimization"],
  },
  {
    id: "systems-dynamics",
    region: "networks-games",
    regionIndex: 4,
    topicIndex: 9,
    title: "System Dynamics & Feedback Models",
    short: "Model feedback loops, delays, and policy resistance.",
    description:
      "System dynamics complements optimization by simulating stocks, flows, feedback, delays, and nonlinear behavior in complex organizations.",
    concepts: ["Stocks and flows", "Feedback loops", "Delays", "Policy resistance"],
    applications: ["Public policy", "Healthcare", "Sustainability", "Operations strategy"],
    difficulty: "Intermediate",
    type: "Method",
    resources: [{ title: "System Dynamics Society", url: "https://systemdynamics.org/" }],
    next: ["simulation", "public-sector-policy"],
  },

  // ─── Operations Applications ─────────────────────────────
  {
    id: "inventory-theory",
    region: "applications",
    regionIndex: 5,
    topicIndex: 1,
    title: "Inventory Theory",
    short: "How much to order, when, and where to hold it.",
    description:
      "EOQ, (s, S) policies, newsvendor, and multi-echelon inventory — balancing holding cost, ordering cost, and service level under demand uncertainty.",
    concepts: ["EOQ", "(s, S) policies", "Newsvendor", "Multi-echelon", "Safety stock"],
    difficulty: "Intermediate",
    type: "Application",
    resources: [
      {
        title: "Foundations of Inventory Management — Zipkin",
        url: "https://www.mheducation.com/highered/product/foundations-inventory-management-zipkin/M9780256113790.html",
      },
    ],
  },
  {
    id: "transportation-logistics",
    region: "applications",
    regionIndex: 5,
    topicIndex: 2,
    title: "Transportation & Logistics",
    short: "Move goods and people efficiently.",
    description:
      "Vehicle routing, fleet sizing, hub-and-spoke design, last-mile, and disruption recovery — classic OR successes.",
    concepts: ["VRP", "Fleet sizing", "Hub-and-spoke", "Last-mile", "Disruption recovery"],
    difficulty: "Applied",
    type: "Application",
    resources: [],
  },
  {
    id: "supply-chain",
    region: "applications",
    regionIndex: 5,
    topicIndex: 3,
    title: "Supply Chain Optimization",
    short: "Plan flows of materials, information, and money end-to-end.",
    description:
      "Network design, sourcing, production planning, distribution, and inventory placement across a multi-echelon supply chain.",
    concepts: ["Network design", "Sourcing", "S&OP", "Distribution", "Resilience"],
    difficulty: "Applied",
    type: "Application",
    resources: [],
  },
  {
    id: "revenue-management",
    region: "applications",
    regionIndex: 5,
    topicIndex: 4,
    title: "Revenue Management",
    short: "Prices, availability, and capacity controls under demand uncertainty.",
    description:
      "Dynamic pricing, overbooking, fare class allocation, and choice-based revenue management for airlines, hotels, retail, and beyond.",
    concepts: ["Dynamic pricing", "Overbooking", "Capacity control", "Choice models"],
    difficulty: "Advanced",
    type: "Application",
    resources: [
      {
        title: "Theory and Practice of Revenue Management — Talluri & van Ryzin",
        url: "https://link.springer.com/book/10.1007/b139000",
      },
    ],
  },
  {
    id: "production-planning",
    region: "applications",
    regionIndex: 5,
    topicIndex: 5,
    title: "Production Planning & Manufacturing",
    short: "Plan capacity, lots, materials, and shop-floor execution.",
    description:
      "Production planning covers aggregate planning, lot sizing, MRP, sequencing, bottlenecks, line balancing, and factory-flow decisions.",
    concepts: ["Lot sizing", "MRP", "Line balancing", "Bottlenecks", "Capacity planning"],
    applications: ["Factories", "Semiconductors", "Food production", "Pharma"],
    difficulty: "Applied",
    type: "Application",
    resources: [{ title: "Factory Physics", url: "https://www.factoryphysics.com/" }],
    next: ["scheduling", "queueing-theory"],
  },
  {
    id: "service-operations",
    region: "applications",
    regionIndex: 5,
    topicIndex: 6,
    title: "Service Operations & Staffing",
    short: "Match people, capacity, and service levels under variable demand.",
    description:
      "Service OR combines forecasting, queues, staffing, scheduling, and simulation to run call centers, clinics, support desks, and field operations.",
    concepts: ["Erlang models", "Workforce management", "SLAs", "Appointment systems"],
    applications: ["Call centers", "Healthcare clinics", "Customer support", "Field service"],
    difficulty: "Applied",
    type: "Application",
    resources: [
      {
        title: "MIT 15.072J Queues",
        url: "https://ocw.mit.edu/courses/15-072j-queues-theory-and-applications-spring-2006/",
      },
    ],
    next: ["queueing-theory", "scheduling"],
  },
  {
    id: "healthcare-or",
    region: "applications",
    regionIndex: 5,
    topicIndex: 7,
    title: "Healthcare Operations Research",
    short: "Improve access, flow, capacity, treatment, and health policy.",
    description:
      "Healthcare OR models operating rooms, beds, clinics, organ allocation, radiation therapy, screening, emergency response, and public health policy.",
    concepts: ["Patient flow", "Bed capacity", "OR scheduling", "Treatment planning", "Triage"],
    applications: ["Hospitals", "Public health", "Radiation therapy", "Emergency medicine"],
    difficulty: "Applied",
    type: "Application",
    resources: [
      {
        title: "INFORMS Health Applications Society",
        url: "https://connect.informs.org/healthapplications/home",
      },
      {
        title: "MIT 15.071 Healthcare Analytics Examples",
        url: "https://ocw.mit.edu/courses/15-071-the-analytics-edge-spring-2017/",
      },
    ],
    next: ["simulation", "scheduling"],
  },
  {
    id: "energy-power-systems",
    region: "applications",
    regionIndex: 5,
    topicIndex: 8,
    title: "Energy & Power Systems",
    short: "Dispatch, commit, expand, and balance energy systems.",
    description:
      "Energy OR includes unit commitment, economic dispatch, transmission planning, storage, renewables integration, market design, and resilience.",
    concepts: ["Unit commitment", "Economic dispatch", "Optimal power flow", "Storage", "Markets"],
    applications: ["Electric grids", "Renewables", "Natural gas", "Microgrids"],
    difficulty: "Advanced",
    type: "Application",
    resources: [
      { title: "PowerModels.jl", url: "https://lanl-ansi.github.io/PowerModels.jl/stable/" },
      {
        title: "NEOS Electricity and Power Case Studies",
        url: "https://neos-guide.org/case-studies/electricity-and-power/",
      },
    ],
    next: ["integer-programming", "stochastic-programming"],
  },
  {
    id: "finance-portfolio-risk",
    region: "applications",
    regionIndex: 5,
    topicIndex: 9,
    title: "Finance, Portfolio & Risk",
    short: "Allocate capital under risk, constraints, and market uncertainty.",
    description:
      "Financial OR models portfolios, asset-liability management, transaction costs, risk measures, trading, credit, and stress scenarios.",
    concepts: ["Mean-variance", "CVaR", "Transaction costs", "Asset-liability", "Stress testing"],
    applications: ["Asset management", "Banking", "Insurance", "Treasury"],
    difficulty: "Advanced",
    type: "Application",
    resources: [
      {
        title: "Portfolio Optimization — CVXPY Short Course",
        url: "https://www.cvxgrp.org/cvx_short_course/docs/applications/notebooks/portfolio_optimization.html",
      },
    ],
    next: ["convex-optimization", "risk-analysis"],
  },
  {
    id: "public-sector-policy",
    region: "applications",
    regionIndex: 5,
    topicIndex: 10,
    title: "Public Sector & Policy OR",
    short: "Allocate public resources with equity, transparency, and constraints.",
    description:
      "Public-sector OR supports policing, emergency response, public health, infrastructure, education, defense, humanitarian logistics, and policy evaluation.",
    concepts: ["Resource allocation", "Coverage", "Equity", "Policy simulation", "Robustness"],
    applications: ["Emergency response", "Schools", "Defense", "Humanitarian logistics"],
    difficulty: "Applied",
    type: "Application",
    resources: [
      { title: "INFORMS Public Sector OR Section", url: "https://connect.informs.org/psor/home" },
    ],
    next: ["facility-location", "multiobjective-optimization"],
  },
  {
    id: "telecom-cloud-computing",
    region: "applications",
    regionIndex: 5,
    topicIndex: 11,
    title: "Telecom, Cloud & Computing Systems",
    short: "Route traffic, allocate compute, and manage congestion.",
    description:
      "OR models packet routing, network design, admission control, cloud capacity, load balancing, and service reliability.",
    concepts: ["Network design", "Congestion", "Load balancing", "Admission control", "Capacity"],
    applications: ["Telecom", "Cloud platforms", "CDNs", "Data centers"],
    difficulty: "Applied",
    type: "Application",
    resources: [
      {
        title: "Network Flows — Ahuja, Magnanti, Orlin",
        url: "https://www.pearson.com/en-us/subject-catalog/p/network-flows-theory-algorithms-and-applications/P200000003207/9780136175490",
      },
    ],
    next: ["network-optimization", "queueing-theory"],
  },
  {
    id: "sports-entertainment",
    region: "applications",
    regionIndex: 5,
    topicIndex: 12,
    title: "Sports & Entertainment Scheduling",
    short: "Build fair, feasible schedules for leagues, venues, and media.",
    description:
      "Sports OR blends integer programming, constraints, travel minimization, fairness, broadcast value, venue calendars, and uncertainty.",
    concepts: ["Round-robin", "Breaks", "Travel minimization", "Venue constraints", "Fairness"],
    applications: ["Sports leagues", "Broadcasting", "Venues", "Tournaments"],
    difficulty: "Applied",
    type: "Application",
    resources: [{ title: "RobinX Sports Timetabling", url: "https://robinxval.ugent.be/" }],
    next: ["scheduling", "integer-programming"],
  },
  {
    id: "agriculture-natural-resources",
    region: "applications",
    regionIndex: 5,
    topicIndex: 13,
    title: "Agriculture & Natural Resources",
    short: "Plan land, water, harvest, conservation, and extraction.",
    description:
      "OR supports crop planning, irrigation, forestry, fisheries, mining, conservation, and climate adaptation with uncertainty and resource constraints.",
    concepts: [
      "Land allocation",
      "Water planning",
      "Harvest scheduling",
      "Conservation",
      "Extraction",
    ],
    applications: ["Farms", "Forestry", "Fisheries", "Mining", "Water systems"],
    difficulty: "Applied",
    type: "Application",
    resources: [],
    next: ["stochastic-programming", "multiobjective-optimization"],
  },

  // ─── Modern OR Practice ──────────────────────────────────
  {
    id: "analytics-ml",
    region: "modern",
    regionIndex: 6,
    topicIndex: 1,
    title: "Analytics, Data Science & ML",
    short: "Predict, then prescribe.",
    description:
      "Modern OR combines forecasting and machine learning with optimization: decision-focused learning, predict-then-optimize, bandits, and RL.",
    concepts: [
      "Forecasting",
      "Predict-then-optimize",
      "Decision-focused learning",
      "Bandits",
      "RL",
    ],
    difficulty: "Advanced",
    type: "Theory",
    resources: [],
  },
  {
    id: "industry-applications",
    region: "modern",
    regionIndex: 6,
    topicIndex: 2,
    title: "OR in Industry",
    short: "Where models meet practice across sectors.",
    description:
      "Airlines, healthcare, manufacturing, retail, energy, finance, telecom, transportation, public sector, sports, agriculture, and education all run on OR.",
    concepts: ["Airlines", "Healthcare", "Energy", "Retail", "Finance", "Public sector"],
    difficulty: "Applied",
    type: "Application",
    resources: [],
  },
  {
    id: "software-solvers",
    region: "modern",
    regionIndex: 6,
    topicIndex: 3,
    title: "Software Tools & Solvers",
    short: "Modeling languages, libraries, and solvers.",
    description:
      "From AMPL and Pyomo to JuMP, Gurobi, CPLEX, HiGHS, and OR-Tools — the practical stack that makes OR usable.",
    concepts: [
      "Modeling languages",
      "Python/Julia/R libraries",
      "Commercial solvers",
      "Open-source solvers",
    ],
    difficulty: "Applied",
    type: "Software",
    resources: [
      { title: "Google OR-Tools", url: "https://developers.google.com/optimization" },
      { title: "Pyomo", url: "https://www.pyomo.org/" },
      { title: "JuMP", url: "https://jump.dev/JuMP.jl/stable/" },
      { title: "HiGHS", url: "https://highs.dev/" },
    ],
  },
  {
    id: "datasets-benchmarks",
    region: "modern",
    regionIndex: 6,
    topicIndex: 4,
    title: "Datasets & Benchmarks",
    short: "Standard problems to test, learn, and compete.",
    description:
      "MIPLIB, TSPLIB, OR-Library, PSPLIB, and more — canonical instances for benchmarking algorithms and learning.",
    concepts: ["MIPLIB", "TSPLIB", "OR-Library", "PSPLIB", "VRP-REP"],
    difficulty: "Applied",
    type: "Resource",
    resources: [
      { title: "MIPLIB", url: "https://miplib.zib.de/" },
      { title: "TSPLIB", url: "http://comopt.ifi.uni-heidelberg.de/software/TSPLIB95/" },
      { title: "OR-Library", url: "http://people.brunel.ac.uk/~mastjjb/jeb/orlib/" },
    ],
  },
  {
    id: "prescriptive-analytics",
    region: "modern",
    regionIndex: 6,
    topicIndex: 5,
    title: "Prescriptive Analytics",
    short: "Move from insight to recommended action.",
    description:
      "Prescriptive analytics combines prediction, optimization, simulation, business rules, and human review to recommend operational decisions.",
    concepts: ["Decision automation", "Business rules", "Optimization APIs", "Human review"],
    applications: ["Pricing", "Workforce", "Marketing", "Logistics", "Healthcare"],
    difficulty: "Applied",
    type: "Method",
    resources: [
      {
        title: "MIT 15.071 The Analytics Edge",
        url: "https://ocw.mit.edu/courses/15-071-the-analytics-edge-spring-2017/",
      },
    ],
    next: ["analytics-ml", "solver-engineering"],
  },
  {
    id: "data-driven-optimization",
    region: "modern",
    regionIndex: 6,
    topicIndex: 6,
    title: "Data-Driven Optimization",
    short: "Learn decisions from data, not just parameters.",
    description:
      "Contextual optimization, predictive stochastic programming, decision-focused learning, and distributionally robust optimization connect ML and OR.",
    concepts: ["Contextual optimization", "DRO", "Decision-focused learning", "Policy learning"],
    applications: ["Personalized medicine", "Routing", "Pricing", "Inventory"],
    difficulty: "Advanced",
    type: "Method",
    resources: [
      { title: "Contextual Optimization Survey", url: "https://arxiv.org/abs/2306.10374" },
    ],
    next: ["analytics-ml", "stochastic-programming"],
  },
  {
    id: "digital-twins",
    region: "modern",
    regionIndex: 6,
    topicIndex: 7,
    title: "Digital Twins & What-If Systems",
    short: "Living simulations connected to operational data.",
    description:
      "Digital twins combine data pipelines, simulation, optimization, and monitoring to test decisions before changing a real system.",
    concepts: ["State estimation", "Scenario testing", "Calibration", "Simulation", "Dashboards"],
    applications: ["Factories", "Warehouses", "Hospitals", "Energy systems"],
    difficulty: "Applied",
    type: "Application",
    resources: [{ title: "SimPy", url: "https://simpy.readthedocs.io/" }],
    next: ["simulation", "model-validation"],
  },
  {
    id: "solver-engineering",
    region: "modern",
    regionIndex: 6,
    topicIndex: 8,
    title: "Solver Engineering & Deployment",
    short: "Turn models into reliable production decision services.",
    description:
      "Production OR needs data validation, warm starts, decomposition, service APIs, infeasibility handling, observability, latency budgets, and fallback policies.",
    concepts: ["Model APIs", "Warm starts", "Infeasibility diagnosis", "Monitoring", "Fallbacks"],
    applications: ["Dispatch", "Pricing", "Inventory", "Ad allocation"],
    difficulty: "Applied",
    type: "Software",
    resources: [
      {
        title: "Gurobi Guidelines for Numerical Issues",
        url: "https://docs.gurobi.com/projects/optimizer/en/current/concepts/numericguide.html",
      },
      { title: "Pyomo", url: "https://www.pyomo.org/" },
    ],
    next: ["software-solvers", "responsible-or"],
  },
  {
    id: "responsible-or",
    region: "modern",
    regionIndex: 6,
    topicIndex: 9,
    title: "Responsible OR & Decision Governance",
    short: "Make automated decisions auditable, fair, and resilient.",
    description:
      "Responsible OR addresses fairness, transparency, human override, model risk, privacy, security, and operational accountability in decision systems.",
    concepts: ["Fairness", "Explainability", "Auditability", "Model risk", "Human override"],
    applications: ["Credit", "Healthcare", "Public policy", "Workforce", "Pricing"],
    difficulty: "Applied",
    type: "Theory",
    resources: [
      {
        title: "INFORMS Ethics Guidelines",
        url: "https://www.informs.org/About-INFORMS/Governance/INFORMS-Ethics-Guidelines",
      },
    ],
    next: ["multiobjective-optimization", "model-validation"],
  },
  {
    id: "or-communication-change",
    region: "modern",
    regionIndex: 6,
    topicIndex: 10,
    title: "OR Communication & Change",
    short: "Get models trusted, adopted, and improved.",
    description:
      "Great OR work includes stakeholder framing, explainable recommendations, experiments, rollout plans, training, and feedback loops.",
    concepts: ["Stakeholder analysis", "Decision narratives", "Pilots", "A/B tests", "Adoption"],
    applications: ["Consulting", "Enterprise analytics", "Public programs", "Operations teams"],
    difficulty: "Applied",
    type: "Method",
    resources: [
      {
        title: "INFORMS Journal on Applied Analytics",
        url: "https://pubsonline.informs.org/journal/inte",
      },
    ],
    next: ["prescriptive-analytics", "responsible-or"],
  },
  {
    id: "behavioral-or",
    region: "modern",
    regionIndex: 6,
    topicIndex: 11,
    title: "Behavioral OR & Human Decisions",
    short: "Account for how people actually use, resist, and adapt to models.",
    description:
      "Behavioral OR studies judgment, incentives, trust, cognitive bias, strategic response, and organizational adoption when analytical recommendations meet human decision-makers.",
    concepts: ["Bias", "Trust", "Incentives", "Adoption", "Human-in-the-loop decisions"],
    applications: [
      "Policy design",
      "Workforce planning",
      "Healthcare",
      "Pricing",
      "Operations change",
    ],
    difficulty: "Applied",
    type: "Theory",
    resources: [
      {
        title: "Behavioral Operational Research",
        url: "https://link.springer.com/book/10.1057/9781137535511",
      },
      { title: "INFORMS MSOM Society", url: "https://connect.informs.org/msom/home" },
    ],
    next: ["decision-analysis", "or-communication-change"],
  },
];

export const difficulties: Difficulty[] = ["Foundations", "Intermediate", "Advanced", "Applied"];
export const topicTypes: TopicType[] = ["Theory", "Method", "Application", "Software", "Resource"];
