import type { TopicResource } from "@/data/topics";

export type TopicDetailResource = TopicResource & { note?: string };

export type TopicDetail = {
  overview: string[];
  conceptNotes: Record<string, string>;
  workflow: string[];
  applicationNotes: string[];
  pitfalls: string[];
  resources: TopicDetailResource[];
};

export const topicDetails: Record<string, TopicDetail> = {
  "what-is-or": {
    overview: [
      "Operations Research is the practice of converting messy operational choices into explicit analytical models. A useful OR model names the decisions, the objective, the constraints, the uncertainty, and the computational method that connects them.",
      "The field matters because it turns tradeoffs into artifacts people can inspect: a staffing policy, a route plan, a production schedule, a capacity investment, or a risk-aware allocation.",
    ],
    conceptNotes: {
      "Decision variables":
        "Name the controllable choices explicitly; vague choices produce vague recommendations.",
      Objectives:
        "State what success means in measurable terms, including whether it is minimized, maximized, or balanced.",
      Constraints:
        "Capture capacities, policies, physics, timing rules, and commitments that make a recommendation feasible.",
      Uncertainty:
        "Represent unknown demand, arrivals, failures, prices, or behavior before treating the output as operational advice.",
      Algorithms:
        "Choose a method whose assumptions, scale, and guarantees fit the model rather than the other way around.",
    },
    workflow: [
      "Write the decision in plain language before introducing variables.",
      "List stakeholders, objectives, hard constraints, and uncertain inputs separately.",
      "Sketch the smallest model that could change a decision.",
      "Check whether the recommendation can be explained without solver jargon.",
      "Use sensitivity analysis to show which assumptions drive the result.",
    ],
    applicationNotes: [
      "Logistics: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Healthcare: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Energy: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Finance: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Government: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Treating OR as only optimization and ignoring simulation, queues, decision analysis, and adoption.",
      "Starting with a solver before agreeing on the real decision.",
      "Hiding tradeoffs inside a single weighted objective nobody reviewed.",
      "Delivering an answer without explaining assumptions and failure modes.",
    ],
    resources: [
      {
        title: "INFORMS — FAQs About O.R. & Analytics",
        url: "https://www.informs.org/Resource-Center/INFORMS-Student-Union/FAQs-About-O.R.-Analytics",
        note: "Use this for the professional definition of OR, analytics, decision support, and applied practice.",
      },
      {
        title: "IFORS — What is Operations Research?",
        url: "https://www.ifors.org/what-is-or/",
        note: "International OR society framing of quantitative decision making and system improvement.",
      },
      {
        title: "INFORMS Journal on Applied Analytics",
        url: "https://pubsonline.informs.org/journal/inte",
        note: "Applied OR case studies focused on implementation, adoption, and business impact.",
      },
    ],
  },
  "modeling-decisions": {
    overview: [
      "Modeling Decisions focuses on translate a real situation into variables, objectives, and constraints. In the map of OR, it connects Problem framing, Abstraction, Assumptions to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Good models begin with the right abstraction. Identify what is chosen, what is optimized, what is fixed, and what is uncertain — before opening a solver. The practical use case is clearest in adjacent OR applications, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "Problem framing":
        "Problem framing is a core checkpoint for Modeling Decisions: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Abstraction:
        "Abstraction is a core checkpoint for Modeling Decisions: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Assumptions:
        "Assumptions is a core checkpoint for Modeling Decisions: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Validation:
        "Validation is a core checkpoint for Modeling Decisions: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with a concrete case from the surrounding OR area: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Problem framing, Abstraction, and Assumptions; define units and data sources for each one.",
      "Build a small instance of Modeling Decisions that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Use this topic as a building block in nearby OR models; connect it to a concrete decision before treating it as a standalone application area.",
    ],
    pitfalls: [
      "Applying Modeling Decisions because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Problem framing as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "INFORMS — FAQs About O.R. & Analytics",
        url: "https://www.informs.org/Resource-Center/INFORMS-Student-Union/FAQs-About-O.R.-Analytics",
        note: "Use this for the professional definition of OR, analytics, decision support, and applied practice.",
      },
      {
        title: "MIT OCW 15.053 — Optimization Methods in Management Science",
        url: "https://ocw.mit.edu/courses/15-053-optimization-methods-in-management-science-spring-2013/",
        note: "Course materials for LP, IP, networks, nonlinear programming, and management science applications.",
      },
      {
        title: "Pyomo Documentation",
        url: "https://pyomo.readthedocs.io/",
        note: "Python algebraic modeling documentation for optimization and production modeling workflows.",
      },
    ],
  },
  "objectives-constraints": {
    overview: [
      "Objectives, Constraints & Uncertainty focuses on tradeoffs made explicit: cost, service, risk, fairness, resilience. In the map of OR, it connects Multi-objective, Hard vs soft constraints, Risk to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Real decisions juggle competing goals against rules and unknowns. OR makes these tradeoffs explicit so they can be compared, audited, and improved. The practical use case is clearest in adjacent OR applications, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "Multi-objective":
        "Multi-objective is a core checkpoint for Objectives, Constraints & Uncertainty: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Hard vs soft constraints":
        "Hard vs soft constraints is a core checkpoint for Objectives, Constraints & Uncertainty: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Risk: "Risk is a core checkpoint for Objectives, Constraints & Uncertainty: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Fairness:
        "Fairness is a core checkpoint for Objectives, Constraints & Uncertainty: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with a concrete case from the surrounding OR area: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Multi-objective, Hard vs soft constraints, and Risk; define units and data sources for each one.",
      "Build a small instance of Objectives, Constraints & Uncertainty that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Use this topic as a building block in nearby OR models; connect it to a concrete decision before treating it as a standalone application area.",
    ],
    pitfalls: [
      "Applying Objectives, Constraints & Uncertainty because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Multi-objective as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "IFORS — What is Operations Research?",
        url: "https://www.ifors.org/what-is-or/",
        note: "International OR society framing of quantitative decision making and system improvement.",
      },
      {
        title: "NEOS Guide",
        url: "https://neos-guide.org/guide/",
        note: "Authoritative optimization guide covering model classes, algorithms, and solver selection.",
      },
      {
        title: "INFORMS Ethics Guidelines",
        url: "https://www.informs.org/About-INFORMS/Governance/INFORMS-Ethics-Guidelines",
        note: "Professional ethics guidance for analytics, models, and decision systems.",
      },
    ],
  },
  "algorithms-computation": {
    overview: [
      "Algorithms & Computation focuses on the methods that find exact, approximate, or robust decisions. In the map of OR, it connects Exact methods, Heuristics, Complexity to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "From simplex to branch-and-bound to metaheuristics, OR pairs models with algorithms. Computational maturity is what makes the field useful in practice. The practical use case is clearest in adjacent OR applications, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "Exact methods":
        "Exact methods is a core checkpoint for Algorithms & Computation: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Heuristics:
        "Heuristics is a core checkpoint for Algorithms & Computation: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Complexity:
        "Complexity is a core checkpoint for Algorithms & Computation: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Numerical stability":
        "Numerical stability is a core checkpoint for Algorithms & Computation: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with a concrete case from the surrounding OR area: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Exact methods, Heuristics, and Complexity; define units and data sources for each one.",
      "Build a small instance of Algorithms & Computation that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Use this topic as a building block in nearby OR models; connect it to a concrete decision before treating it as a standalone application area.",
    ],
    pitfalls: [
      "Applying Algorithms & Computation because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Exact methods as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "MIT OCW 15.053 — Optimization Methods in Management Science",
        url: "https://ocw.mit.edu/courses/15-053-optimization-methods-in-management-science-spring-2013/",
        note: "Course materials for LP, IP, networks, nonlinear programming, and management science applications.",
      },
      {
        title: "NEOS Guide",
        url: "https://neos-guide.org/guide/",
        note: "Authoritative optimization guide covering model classes, algorithms, and solver selection.",
      },
      {
        title: "SCIP Optimization Suite",
        url: "https://www.scipopt.org/",
        note: "Open-source solver suite for MIP, MINLP, and constraint integer programming.",
      },
    ],
  },
  "probability-statistics": {
    overview: [
      "Probability & Statistics for OR focuses on the measurement and uncertainty toolkit behind OR models. In the map of OR, it connects Distributions, Estimation, Regression to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Probability, estimation, regression, hypothesis testing, and experimental design help OR analysts quantify inputs, uncertainty, and model performance. The practical use case is clearest in Demand modeling, Reliability, Simulation input analysis, Forecasting, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      Distributions:
        "Distributions is a core checkpoint for Probability & Statistics for OR: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Estimation:
        "Estimation is a core checkpoint for Probability & Statistics for OR: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Regression:
        "Regression is a core checkpoint for Probability & Statistics for OR: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Sampling:
        "Sampling is a core checkpoint for Probability & Statistics for OR: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Experimental design":
        "Experimental design is a core checkpoint for Probability & Statistics for OR: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Demand modeling: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Distributions, Estimation, and Regression; define units and data sources for each one.",
      "Build a small instance of Probability & Statistics for OR that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Demand modeling: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Reliability: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Simulation input analysis: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Forecasting: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Probability & Statistics for OR because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Distributions as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "MIT 6.041 Probabilistic Systems Analysis",
        url: "https://ocw.mit.edu/courses/6-041-probabilistic-systems-analysis-and-applied-probability-fall-2010/",
        note: "Topic-specific source curated for Probability & Statistics for OR.",
      },
      {
        title: "ProbabilityCourse.com",
        url: "https://www.probabilitycourse.com/",
        note: "Topic-specific source curated for Probability & Statistics for OR.",
      },
      {
        title: "MIT OCW 6.262 — Discrete Stochastic Processes",
        url: "https://ocw.mit.edu/courses/6-262-discrete-stochastic-processes-spring-2011/",
        note: "Poisson processes, Markov chains, renewal processes, and stochastic-process foundations.",
      },
      {
        title: "Algorithms for Decision Making",
        url: "https://algorithmsbook.com/",
        note: "Open book covering planning, MDPs, reinforcement learning, and decision algorithms.",
      },
      {
        title: "INFORMS — FAQs About O.R. & Analytics",
        url: "https://www.informs.org/Resource-Center/INFORMS-Student-Union/FAQs-About-O.R.-Analytics",
        note: "Use this for the professional definition of OR, analytics, decision support, and applied practice.",
      },
    ],
  },
  "model-validation": {
    overview: [
      "Model Validation & Sensitivity focuses on check whether a model is useful, credible, and stable. In the map of OR, it connects Calibration, Backtesting, Scenario analysis to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Validation compares model behavior with reality, tests assumptions, and studies how recommendations change under parameter, data, or scenario shifts. The practical use case is clearest in Policy models, Digital twins, Revenue models, Risk analysis, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      Calibration:
        "Calibration is a core checkpoint for Model Validation & Sensitivity: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Backtesting:
        "Backtesting is a core checkpoint for Model Validation & Sensitivity: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Scenario analysis":
        "Scenario analysis is a core checkpoint for Model Validation & Sensitivity: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Sensitivity:
        "Sensitivity is a core checkpoint for Model Validation & Sensitivity: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Stress testing":
        "Stress testing is a core checkpoint for Model Validation & Sensitivity: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Policy models: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Calibration, Backtesting, and Scenario analysis; define units and data sources for each one.",
      "Build a small instance of Model Validation & Sensitivity that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Policy models: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Digital twins: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Revenue models: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Risk analysis: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Model Validation & Sensitivity because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Calibration as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "INFORMS — FAQs About O.R. & Analytics",
        url: "https://www.informs.org/Resource-Center/INFORMS-Student-Union/FAQs-About-O.R.-Analytics",
        note: "Use this for the professional definition of OR, analytics, decision support, and applied practice.",
      },
      {
        title: "SimPy Documentation",
        url: "https://simpy.readthedocs.io/",
        note: "Process-based discrete-event simulation framework for Python.",
      },
      {
        title: "INFORMS Ethics Guidelines",
        url: "https://www.informs.org/About-INFORMS/Governance/INFORMS-Ethics-Guidelines",
        note: "Professional ethics guidance for analytics, models, and decision systems.",
      },
    ],
  },
  "multiobjective-optimization": {
    overview: [
      "Multi-Objective Optimization focuses on make cost, service, risk, fairness, and emissions visible together. In the map of OR, it connects Pareto efficiency, Weighted sums, Goal programming to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Multi-objective methods expose Pareto frontiers and tradeoff curves when a single objective hides important operational or social goals. The practical use case is clearest in Sustainability, Healthcare triage, Portfolio design, Public policy, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "Pareto efficiency":
        "Pareto efficiency is a core checkpoint for Multi-Objective Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Weighted sums":
        "Weighted sums is a core checkpoint for Multi-Objective Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Goal programming":
        "Goal programming is a core checkpoint for Multi-Objective Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Epsilon constraints":
        "Epsilon constraints is a core checkpoint for Multi-Objective Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Sustainability: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Pareto efficiency, Weighted sums, and Goal programming; define units and data sources for each one.",
      "Build a small instance of Multi-Objective Optimization that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Sustainability: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Healthcare triage: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Portfolio design: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Public policy: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Multi-Objective Optimization because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Pareto efficiency as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "NEOS Guide — Multiobjective Optimization",
        url: "https://neos-guide.org/guide/types/multiobjective/",
        note: "Topic-specific source curated for Multi-Objective Optimization.",
      },
      {
        title: "NEOS Guide",
        url: "https://neos-guide.org/guide/",
        note: "Authoritative optimization guide covering model classes, algorithms, and solver selection.",
      },
      {
        title: "Stanford EE364A — Convex Optimization",
        url: "https://ee364a.stanford.edu/",
        note: "Convex analysis, duality, least squares, quadratic programs, and conic optimization.",
      },
      {
        title: "INFORMS Ethics Guidelines",
        url: "https://www.informs.org/About-INFORMS/Governance/INFORMS-Ethics-Guidelines",
        note: "Professional ethics guidance for analytics, models, and decision systems.",
      },
    ],
  },
  "data-envelopment-analysis": {
    overview: [
      "Data Envelopment Analysis focuses on benchmark efficiency across comparable units. In the map of OR, it connects Efficiency frontier, CCR/BCC models, Peer units to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "DEA uses optimization to compare decision-making units such as hospitals, branches, schools, and plants when multiple inputs and outputs matter. The practical use case is clearest in Hospitals, Bank branches, Universities, Manufacturing plants, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "Efficiency frontier":
        "Efficiency frontier is a core checkpoint for Data Envelopment Analysis: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "CCR/BCC models":
        "CCR/BCC models is a core checkpoint for Data Envelopment Analysis: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Peer units":
        "Peer units is a core checkpoint for Data Envelopment Analysis: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Slack:
        "Slack is a core checkpoint for Data Envelopment Analysis: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Hospitals: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Efficiency frontier, CCR/BCC models, and Peer units; define units and data sources for each one.",
      "Build a small instance of Data Envelopment Analysis that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Hospitals: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Bank branches: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Universities: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Manufacturing plants: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Data Envelopment Analysis because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Efficiency frontier as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "Data Envelopment Analysis — Cooper, Seiford, Zhu",
        url: "https://link.springer.com/book/10.1007/978-1-4419-6151-8",
        note: "Topic-specific source curated for Data Envelopment Analysis.",
      },
      {
        title: "NEOS Guide",
        url: "https://neos-guide.org/guide/",
        note: "Authoritative optimization guide covering model classes, algorithms, and solver selection.",
      },
      {
        title: "INFORMS — FAQs About O.R. & Analytics",
        url: "https://www.informs.org/Resource-Center/INFORMS-Student-Union/FAQs-About-O.R.-Analytics",
        note: "Use this for the professional definition of OR, analytics, decision support, and applied practice.",
      },
      {
        title: "INFORMS Journal on Applied Analytics",
        url: "https://pubsonline.informs.org/journal/inte",
        note: "Applied OR case studies focused on implementation, adoption, and business impact.",
      },
    ],
  },
  "mathematical-optimization": {
    overview: [
      "Mathematical Optimization focuses on the central modeling language of OR. In the map of OR, it connects Feasible region, Duality, Sensitivity to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Represent decisions as variables, limits as constraints, and goals as an objective function. Duality, sensitivity, decomposition, and heuristics extend the toolbox. The practical use case is clearest in adjacent OR applications, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "Feasible region":
        "Feasible region is a core checkpoint for Mathematical Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Duality:
        "Turns constraints into prices, bounds, and diagnostic signals about which limits matter most.",
      Sensitivity:
        "Sensitivity is a core checkpoint for Mathematical Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Decomposition:
        "Decomposition is a core checkpoint for Mathematical Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Robust optimization":
        "Robust optimization is a core checkpoint for Mathematical Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with a concrete case from the surrounding OR area: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Feasible region, Duality, and Sensitivity; define units and data sources for each one.",
      "Build a small instance of Mathematical Optimization that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Use this topic as a building block in nearby OR models; connect it to a concrete decision before treating it as a standalone application area.",
    ],
    pitfalls: [
      "Applying Mathematical Optimization because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Feasible region as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "NEOS Guide",
        url: "https://neos-guide.org/guide/",
        note: "Authoritative optimization guide covering model classes, algorithms, and solver selection.",
      },
      {
        title: "MIT OCW 15.053 — Optimization Methods in Management Science",
        url: "https://ocw.mit.edu/courses/15-053-optimization-methods-in-management-science-spring-2013/",
        note: "Course materials for LP, IP, networks, nonlinear programming, and management science applications.",
      },
      {
        title: "Pyomo Documentation",
        url: "https://pyomo.readthedocs.io/",
        note: "Python algebraic modeling documentation for optimization and production modeling workflows.",
      },
      {
        title: "NVIDIA cuOpt Documentation",
        url: "https://docs.nvidia.com/cuopt/user-guide/latest/introduction.html",
        note: "GPU-accelerated solver documentation for LP, QP, routing, and beta MILP, QCQP, and SOCP workflows.",
      },
    ],
  },
  "linear-programming": {
    overview: [
      "Linear programming is the workhorse model for allocating scarce resources when objectives and constraints can be expressed linearly. It appears in blending, transportation, diet, workforce, portfolio, and production-planning models.",
      "LP is not just a solver input format. Its dual variables, reduced costs, and sensitivity ranges make it one of the clearest tools for explaining marginal value and operational bottlenecks.",
    ],
    conceptNotes: {
      Simplex:
        "Tracks an LP optimum across vertices and remains important for warm starts and sensitivity analysis.",
      "Interior point":
        "Solves large continuous relaxations through barrier methods and is often strong for huge sparse LPs and conic models.",
      Duality:
        "Turns constraints into prices, bounds, and diagnostic signals about which limits matter most.",
      "Shadow prices":
        "Interpret the marginal value of scarce capacity only inside the validity range of the model.",
      "Reduced costs":
        "Show which inactive variables would need better economics before entering the solution.",
    },
    workflow: [
      "Define continuous decision variables with units.",
      "Write conservation, capacity, demand, and policy constraints as linear expressions.",
      "Solve a small instance and inspect binding constraints, dual prices, and reduced costs.",
      "Scale the model only after checking data units and feasibility.",
      "Use sensitivity analysis before presenting the recommendation as stable.",
    ],
    applicationNotes: [
      "Blending: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Production planning: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Diet: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Transportation: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Portfolio: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Using linearity when economies of scale, fixed charges, or logical choices require integer variables.",
      "Interpreting shadow prices outside their valid range.",
      "Mixing units across constraints and silently distorting costs.",
      "Ignoring degeneracy or alternate optima when the business needs a robust plan.",
    ],
    resources: [
      {
        title: "Linear Programming FAQ — NEOS Guide",
        url: "https://neos-guide.org/guide/types/linear-programming/",
        note: "Topic-specific source curated for Linear Programming.",
      },
      {
        title: "MIT 15.053 Optimization Methods",
        url: "https://ocw.mit.edu/courses/15-053-optimization-methods-in-management-science-spring-2013/",
        note: "Topic-specific source curated for Linear Programming.",
      },
      {
        title: "Introduction to Linear Optimization — Bertsimas & Tsitsiklis",
        url: "https://www.athenasc.com/linoptbook.html",
        note: "Topic-specific source curated for Linear Programming.",
      },
      {
        title: "NEOS Guide",
        url: "https://neos-guide.org/guide/",
        note: "Authoritative optimization guide covering model classes, algorithms, and solver selection.",
      },
      {
        title: "Pyomo Documentation",
        url: "https://pyomo.readthedocs.io/",
        note: "Python algebraic modeling documentation for optimization and production modeling workflows.",
      },
      {
        title: "NVIDIA cuOpt Documentation",
        url: "https://docs.nvidia.com/cuopt/user-guide/latest/introduction.html",
        note: "GPU-accelerated LP/PDLP documentation for large-scale linear optimization workflows.",
      },
    ],
  },
  "integer-programming": {
    overview: [
      "Integer and mixed-integer programming model discrete choices: open a depot, assign a crew, select a project, start a machine, or include an arc in a route. The integrality is what makes the recommendation operationally executable.",
      "The craft is formulation. A tight formulation, good bounds, and valid cuts can beat a weak model even when both describe the same business problem.",
    ],
    conceptNotes: {
      "Binary variables":
        "Represent yes/no structure such as facility opening, assignment, route activation, and logical implications.",
      "Branch & bound":
        "Searches discrete choices while pruning regions whose bound cannot beat the incumbent solution.",
      "Branch & cut": "Adds valid inequalities during the search to tighten weak relaxations.",
      "Branch & price":
        "Branch & price is a core checkpoint for Integer & Mixed-Integer Programming: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Formulation strength":
        "A strong formulation closes the relaxation gap and can matter more than switching solvers.",
    },
    workflow: [
      "Start with Facility location: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Binary variables, Branch & bound, and Branch & cut; define units and data sources for each one.",
      "Build a small instance of Integer & Mixed-Integer Programming that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Facility location: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Vehicle routing: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Crew scheduling: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Unit commitment: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Integer & Mixed-Integer Programming because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Binary variables as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "Cornell Optimization Wiki — Integer Programming",
        url: "https://optimization.cbe.cornell.edu/index.php?title=Integer_programming",
        note: "Topic-specific source curated for Integer & Mixed-Integer Programming.",
      },
      {
        title: "SCIP Book",
        url: "https://scipbook.readthedocs.io/",
        note: "Topic-specific source curated for Integer & Mixed-Integer Programming.",
      },
      {
        title: "MIPLIB",
        url: "https://miplib.zib.de/",
        note: "Topic-specific source curated for Integer & Mixed-Integer Programming.",
      },
      {
        title: "SCIP Optimization Suite",
        url: "https://www.scipopt.org/",
        note: "Open-source solver suite for MIP, MINLP, and constraint integer programming.",
      },
      {
        title: "Google OR-Tools",
        url: "https://developers.google.com/optimization",
        note: "Practical toolkit for routing, assignment, CP-SAT, scheduling, flows, LP, and MIP.",
      },
      {
        title: "NVIDIA cuOpt Documentation",
        url: "https://docs.nvidia.com/cuopt/user-guide/latest/introduction.html",
        note: "cuOpt documents beta MILP support focused on fast, high-quality feasible solutions with GPU-accelerated primal heuristics.",
      },
    ],
  },
  "nonlinear-optimization": {
    overview: [
      "Nonlinear Programming (NLP) covers optimization models where an objective or constraint is not purely linear. It includes smooth continuous NLP, quadratic programming, quadratically constrained quadratic programming, second-order cone programming, and nonconvex global optimization cases.",
      "Engineering design, energy, pricing, control, finance, and machine learning all pose nonlinear models. The first practical split is convex versus nonconvex: convex NLP classes such as QP, convex QCQP, and SOCP support reliable global solutions, while nonconvex NLP requires local methods, global optimization, or careful relaxation.",
    ],
    conceptNotes: {
      "Quadratic Programming (QP)":
        "QP keeps the constraints linear while allowing a quadratic objective, making it a common first nonlinear extension of LP.",
      QCQP:
        "QCQP allows quadratic constraints as well as a quadratic objective; convex cases can be tractable, while nonconvex cases often need relaxations or global methods.",
      SOCP: "SOCP is a convex NLP class that represents norm bounds and many convex quadratic constraints through second-order cones.",
      "Gradient methods":
        "Gradient methods is a core checkpoint for Nonlinear Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Newton / quasi-Newton":
        "Newton / quasi-Newton is a core checkpoint for Nonlinear Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      SQP: "SQP is a core checkpoint for Nonlinear Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Interior point":
        "Solves large continuous relaxations through barrier methods and is often strong for huge sparse LPs and conic models.",
      "Global optimization":
        "Global optimization is a core checkpoint for Nonlinear Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Write the nonlinear objective and every nonlinear constraint explicitly, including units and domains.",
      "Classify the model as QP, QCQP, SOCP, general convex NLP, smooth nonconvex NLP, or MINLP before selecting a solver.",
      "Check convexity, differentiability, scaling, bounds, and constraint qualifications on a small instance.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Use this topic as a building block in nearby OR models; connect it to a concrete decision before treating it as a standalone application area.",
    ],
    pitfalls: [
      "Calling a model NLP without separating convex QP/QCQP/SOCP cases from nonconvex local-search cases.",
      "Treating gradients, scaling, and bounds as solver details instead of modeling choices that affect the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "NEOS Guide — Nonlinear Programming",
        url: "https://neos-guide.org/guide/types/nonlinear-programming/",
        note: "Topic-specific source curated for Nonlinear Optimization.",
      },
      {
        title: "Numerical Optimization — Nocedal & Wright",
        url: "https://link.springer.com/book/10.1007/978-0-387-40065-5",
        note: "Topic-specific source curated for Nonlinear Optimization.",
      },
      {
        title: "NLopt",
        url: "https://nlopt.readthedocs.io/",
        note: "Topic-specific source curated for Nonlinear Optimization.",
      },
      {
        title: "NVIDIA cuOpt Documentation",
        url: "https://docs.nvidia.com/cuopt/user-guide/latest/introduction.html",
        note: "GPU-accelerated solver documentation covering LP, QP, VRP, and beta MILP, QCQP, and SOCP support.",
      },
      {
        title: "NEOS Guide",
        url: "https://neos-guide.org/guide/",
        note: "Authoritative optimization guide covering model classes, algorithms, and solver selection.",
      },
      {
        title: "SCIP Optimization Suite",
        url: "https://www.scipopt.org/",
        note: "Open-source solver suite for MIP, MINLP, and constraint integer programming.",
      },
      {
        title: "JuMP Documentation",
        url: "https://jump.dev/JuMP.jl/stable/",
        note: "Julia modeling language documentation for linear, integer, conic, and nonlinear optimization.",
      },
    ],
  },
  "convex-optimization": {
    overview: [
      "Convex optimization is the tractable core of nonlinear decision modeling. When the feasible set and objective are convex, local optimality is global and duality becomes a practical diagnostic tool.",
      "It is especially useful for portfolios, signal processing, estimation, energy dispatch, and machine-learning-adjacent models where reliability matters more than combinatorial detail.",
    ],
    conceptNotes: {
      "Convex sets":
        "Convexity makes interpolation feasible and turns local optimality into global optimality.",
      KKT: "Optimality conditions combine feasibility, stationarity, multipliers, and complementarity.",
      "Conic programming":
        "Conic programming is a core checkpoint for Convex Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Lagrangian duality":
        "Lagrangian duality is a core checkpoint for Convex Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Proximal methods":
        "Proximal methods is a core checkpoint for Convex Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Portfolio: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Convex sets, KKT, and Conic programming; define units and data sources for each one.",
      "Build a small instance of Convex Optimization that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Portfolio: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Signal processing: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "ML: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Control: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Energy dispatch: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Convex Optimization because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Convex sets as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "Convex Optimization — Boyd & Vandenberghe",
        url: "https://web.stanford.edu/~boyd/cvxbook/",
        note: "Topic-specific source curated for Convex Optimization.",
      },
      {
        title: "Stanford EE364A",
        url: "https://web.stanford.edu/class/ee364a/",
        note: "Topic-specific source curated for Convex Optimization.",
      },
      {
        title: "CVXPY Short Course",
        url: "https://www.cvxgrp.org/cvx_short_course/",
        note: "Topic-specific source curated for Convex Optimization.",
      },
      {
        title: "Stanford EE364A — Convex Optimization",
        url: "https://ee364a.stanford.edu/",
        note: "Convex analysis, duality, least squares, quadratic programs, and conic optimization.",
      },
    ],
  },
  "dynamic-programming": {
    overview: [
      "Dynamic Programming focuses on sequential decisions decomposed into stages and states. In the map of OR, it connects State, Bellman equation, Finite & infinite horizon to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "DP underlies inventory control, MDPs, reinforcement learning, and optimal control. The Bellman equation expresses optimal value recursively. The practical use case is clearest in Shortest paths, Inventory, Revenue management, Reinforcement learning, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      State:
        "The state must contain enough information for the next decision; missing state creates invalid recursions.",
      "Bellman equation":
        "The recursive value equation is the organizing principle for sequential decisions.",
      "Finite & infinite horizon":
        "Finite & infinite horizon is a core checkpoint for Dynamic Programming: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Approximate DP":
        "Approximate DP is a core checkpoint for Dynamic Programming: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Shortest paths: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into State, Bellman equation, and Finite & infinite horizon; define units and data sources for each one.",
      "Build a small instance of Dynamic Programming that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Shortest paths: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Inventory: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Revenue management: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Reinforcement learning: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Dynamic Programming because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating State as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "Dynamic Programming and Optimal Control — Bertsekas",
        url: "https://www.athenasc.com/dpbook.html",
        note: "Topic-specific source curated for Dynamic Programming.",
      },
      {
        title: "MIT 6.231",
        url: "https://ocw.mit.edu/courses/6-231-dynamic-programming-and-stochastic-control-fall-2015/",
        note: "Topic-specific source curated for Dynamic Programming.",
      },
      {
        title: "Algorithms for Decision Making",
        url: "https://algorithmsbook.com/",
        note: "Topic-specific source curated for Dynamic Programming.",
      },
      {
        title: "INFORMS — FAQs About O.R. & Analytics",
        url: "https://www.informs.org/Resource-Center/INFORMS-Student-Union/FAQs-About-O.R.-Analytics",
        note: "Use this for the professional definition of OR, analytics, decision support, and applied practice.",
      },
    ],
  },
  "conic-semidefinite-optimization": {
    overview: [
      "Second-Order Cone Programming (SOCP) is a convex nonlinear optimization class built around affine constraints and second-order cone constraints. It captures norm bounds, many convex quadratic constraints, and robust linear constraints in a solver-friendly form.",
      "SOCP sits inside conic optimization, alongside LP and SDP. It is especially useful in portfolio risk, control, power systems, robust optimization, and engineering models where convex quadratic structure should be preserved rather than treated as a general nonlinear program.",
    ],
    conceptNotes: {
      "Second-order cones":
        "Second-order cones represent constraints of the form a norm bounded by an affine expression, which covers many convex quadratic relationships.",
      "Conic programming":
        "Conic programming expresses feasibility through cone membership, giving a common language for LP, SOCP, and SDP.",
      "Convex quadratic constraints":
        "Many convex quadratic constraints can be written as second-order cone constraints, making them easier to solve reliably.",
      "Dual cones":
        "Dual cones support certificates, sensitivity analysis, and robust counterparts in conic models.",
      "Interior-point methods":
        "Interior-point methods are the standard high-accuracy approach for many SOCP and broader conic models.",
      "SDP relaxations":
        "Semidefinite relaxations can bound harder quadratic models, especially when QCQP structure is nonconvex.",
    },
    workflow: [
      "Start with Portfolio: write the decision, time horizon, actors, and objective in operational language.",
      "Identify norm bounds, robust linear constraints, and convex quadratic constraints that can be represented as second-order cones.",
      "Build a small SOCP instance and verify the conic form before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Portfolio: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Control: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Power systems: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Robust optimization: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Treating every quadratic constraint as SOCP-representable without checking convexity and cone form.",
      "Hiding a simple LP or QP inside unnecessary conic notation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "MOSEK Modeling Cookbook",
        url: "https://docs.mosek.com/modeling-cookbook/index.html",
        note: "Topic-specific source curated for Conic & Semidefinite Optimization.",
      },
      {
        title: "Convex Optimization — Boyd & Vandenberghe",
        url: "https://web.stanford.edu/~boyd/cvxbook/",
        note: "Topic-specific source curated for Conic & Semidefinite Optimization.",
      },
      {
        title: "Stanford EE364A — Convex Optimization",
        url: "https://ee364a.stanford.edu/",
        note: "Convex analysis, duality, least squares, quadratic programs, and conic optimization.",
      },
      {
        title: "JuMP Documentation",
        url: "https://jump.dev/JuMP.jl/stable/",
        note: "Julia modeling language documentation for linear, integer, conic, and nonlinear optimization.",
      },
      {
        title: "NVIDIA cuOpt Documentation",
        url: "https://docs.nvidia.com/cuopt/user-guide/latest/introduction.html",
        note: "cuOpt documents beta SOCP support alongside LP, QP, VRP, MILP, and QCQP capabilities.",
      },
    ],
  },
  "stochastic-programming": {
    overview: [
      "Stochastic Programming focuses on optimize decisions before uncertain futures are revealed. In the map of OR, it connects Scenarios, Recourse, Chance constraints to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Two-stage and multistage stochastic programs use scenarios, recourse, chance constraints, and nonanticipativity to plan under probabilistic uncertainty. The practical use case is clearest in Energy planning, Finance, Supply chains, Disaster response, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      Scenarios:
        "Scenarios describe plausible futures and must be weighted, sampled, and stress-tested carefully.",
      Recourse: "Recourse actions model what can still be changed after uncertainty is revealed.",
      "Chance constraints":
        "Chance constraints is a core checkpoint for Stochastic Programming: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      SAA: "SAA is a core checkpoint for Stochastic Programming: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Nonanticipativity:
        "Nonanticipativity is a core checkpoint for Stochastic Programming: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Energy planning: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Scenarios, Recourse, and Chance constraints; define units and data sources for each one.",
      "Build a small instance of Stochastic Programming that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Energy planning: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Finance: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Supply chains: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Disaster response: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Stochastic Programming because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Scenarios as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "Lectures on Stochastic Programming",
        url: "https://www2.isye.gatech.edu/people/faculty/Alex_Shapiro/SPbook.pdf",
        note: "Topic-specific source curated for Stochastic Programming.",
      },
      {
        title: "Stochastic Programming Community",
        url: "https://www.stoprog.org/",
        note: "Topic-specific source curated for Stochastic Programming.",
      },
      {
        title: "NEOS Guide",
        url: "https://neos-guide.org/guide/",
        note: "Authoritative optimization guide covering model classes, algorithms, and solver selection.",
      },
      {
        title: "MIT OCW 6.262 — Discrete Stochastic Processes",
        url: "https://ocw.mit.edu/courses/6-262-discrete-stochastic-processes-spring-2011/",
        note: "Poisson processes, Markov chains, renewal processes, and stochastic-process foundations.",
      },
      {
        title: "Pyomo Documentation",
        url: "https://pyomo.readthedocs.io/",
        note: "Python algebraic modeling documentation for optimization and production modeling workflows.",
      },
    ],
  },
  "robust-optimization": {
    overview: [
      "Robust Optimization focuses on find decisions that survive bounded uncertainty. In the map of OR, it connects Uncertainty sets, Worst case, Adjustable robustness to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Robust optimization protects decisions against worst-case parameter values in uncertainty sets, often producing tractable LP, conic, or integer models. The practical use case is clearest in Supply resilience, Portfolio risk, Energy dispatch, Healthcare planning, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "Uncertainty sets":
        "Robust models depend heavily on whether uncertainty sets are realistic and not merely convenient.",
      "Worst case":
        "Worst case is a core checkpoint for Robust Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Adjustable robustness":
        "Adjustable robustness is a core checkpoint for Robust Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Price of robustness":
        "Price of robustness is a core checkpoint for Robust Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Supply resilience: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Uncertainty sets, Worst case, and Adjustable robustness; define units and data sources for each one.",
      "Build a small instance of Robust Optimization that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Supply resilience: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Portfolio risk: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Energy dispatch: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Healthcare planning: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Robust Optimization because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Uncertainty sets as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "Robust Optimization — Bertsimas, Brown, Caramanis",
        url: "https://www.mit.edu/~dbertsim/papers/Robust%20Optimization/Robust%20Optimization.pdf",
        note: "Topic-specific source curated for Robust Optimization.",
      },
      {
        title: "MIT 15.093J Optimization Methods",
        url: "https://ocw.mit.edu/courses/15-093j-optimization-methods-fall-2009/",
        note: "Topic-specific source curated for Robust Optimization.",
      },
      {
        title: "Stanford EE364A — Convex Optimization",
        url: "https://ee364a.stanford.edu/",
        note: "Convex analysis, duality, least squares, quadratic programs, and conic optimization.",
      },
      {
        title: "NEOS Guide",
        url: "https://neos-guide.org/guide/",
        note: "Authoritative optimization guide covering model classes, algorithms, and solver selection.",
      },
      {
        title: "INFORMS Ethics Guidelines",
        url: "https://www.informs.org/About-INFORMS/Governance/INFORMS-Ethics-Guidelines",
        note: "Professional ethics guidance for analytics, models, and decision systems.",
      },
    ],
  },
  "decomposition-methods": {
    overview: [
      "Decomposition Methods focuses on split large models into pieces solvers can actually handle. In the map of OR, it connects Benders, Column generation, Dantzig-Wolfe to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Benders, Dantzig-Wolfe, column generation, Lagrangian relaxation, and ADMM exploit structure across scenarios, networks, customers, and time periods. The practical use case is clearest in Crew scheduling, Unit commitment, Stochastic programs, Vehicle routing, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      Benders:
        "Separates master decisions from subproblem evaluations when complicating variables create structure.",
      "Column generation":
        "Generates useful variables only when the pricing problem says they can improve the solution.",
      "Dantzig-Wolfe":
        "Dantzig-Wolfe is a core checkpoint for Decomposition Methods: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Lagrangian relaxation":
        "Lagrangian relaxation is a core checkpoint for Decomposition Methods: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      ADMM: "ADMM is a core checkpoint for Decomposition Methods: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Crew scheduling: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Benders, Column generation, and Dantzig-Wolfe; define units and data sources for each one.",
      "Build a small instance of Decomposition Methods that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Crew scheduling: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Unit commitment: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Stochastic programs: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Vehicle routing: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Decomposition Methods because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Benders as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "A Tutorial on Decomposition Methods",
        url: "https://optimization-online.org/tag/decomposition-methods/",
        note: "Topic-specific source curated for Decomposition Methods.",
      },
      {
        title: "MIT OCW 15.053 — Optimization Methods in Management Science",
        url: "https://ocw.mit.edu/courses/15-053-optimization-methods-in-management-science-spring-2013/",
        note: "Course materials for LP, IP, networks, nonlinear programming, and management science applications.",
      },
      {
        title: "SCIP Optimization Suite",
        url: "https://www.scipopt.org/",
        note: "Open-source solver suite for MIP, MINLP, and constraint integer programming.",
      },
      {
        title: "Pyomo Documentation",
        url: "https://pyomo.readthedocs.io/",
        note: "Python algebraic modeling documentation for optimization and production modeling workflows.",
      },
    ],
  },
  "constraint-programming": {
    overview: [
      "Constraint Programming focuses on search and propagation for rich logical constraints. In the map of OR, it connects Domains, Propagation, Global constraints to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "CP models scheduling, timetabling, routing, packing, and feasibility-heavy problems using domains, global constraints, propagation, and search. The practical use case is clearest in Timetabling, Scheduling, Routing, Packing, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      Domains:
        "Domains is a core checkpoint for Constraint Programming: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Propagation:
        "Propagation is a core checkpoint for Constraint Programming: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Global constraints":
        "Global constraints is a core checkpoint for Constraint Programming: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "CP-SAT":
        "CP-SAT is a core checkpoint for Constraint Programming: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Search:
        "Search is a core checkpoint for Constraint Programming: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Timetabling: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Domains, Propagation, and Global constraints; define units and data sources for each one.",
      "Build a small instance of Constraint Programming that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Timetabling: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Scheduling: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Routing: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Packing: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Constraint Programming because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Domains as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "OR-Tools CP-SAT Solver",
        url: "https://developers.google.com/optimization/cp/cp_solver",
        note: "Topic-specific source curated for Constraint Programming.",
      },
      {
        title: "MiniZinc Handbook",
        url: "https://www.minizinc.org/doc-latest/en/",
        note: "Topic-specific source curated for Constraint Programming.",
      },
      {
        title: "Google OR-Tools",
        url: "https://developers.google.com/optimization",
        note: "Practical toolkit for routing, assignment, CP-SAT, scheduling, flows, LP, and MIP.",
      },
      {
        title: "SCIP Optimization Suite",
        url: "https://www.scipopt.org/",
        note: "Open-source solver suite for MIP, MINLP, and constraint integer programming.",
      },
    ],
  },
  metaheuristics: {
    overview: [
      "Heuristics & Metaheuristics focuses on good answers when exact optimization is too slow or brittle. In the map of OR, it connects Local search, Tabu search, Simulated annealing to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Local search, tabu search, simulated annealing, genetic algorithms, large neighborhood search, and matheuristics trade guarantees for speed and scale. The practical use case is clearest in Routing, Scheduling, Packing, Network design, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "Local search":
        "Moves through neighboring solutions and depends on neighborhood design more than slogans about heuristics.",
      "Tabu search":
        "Tabu search is a core checkpoint for Heuristics & Metaheuristics: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Simulated annealing":
        "Simulated annealing is a core checkpoint for Heuristics & Metaheuristics: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      LNS: "LNS is a core checkpoint for Heuristics & Metaheuristics: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Matheuristics:
        "Matheuristics is a core checkpoint for Heuristics & Metaheuristics: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Routing: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Local search, Tabu search, and Simulated annealing; define units and data sources for each one.",
      "Build a small instance of Heuristics & Metaheuristics that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Routing: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Scheduling: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Packing: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Network design: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Heuristics & Metaheuristics because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Local search as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "Essentials of Metaheuristics",
        url: "https://cs.gmu.edu/~sean/book/metaheuristics/",
        note: "Topic-specific source curated for Heuristics & Metaheuristics.",
      },
      {
        title: "Google OR-Tools",
        url: "https://developers.google.com/optimization",
        note: "Practical toolkit for routing, assignment, CP-SAT, scheduling, flows, LP, and MIP.",
      },
      {
        title: "MIPLIB",
        url: "https://miplib.zib.de/",
        note: "Benchmark library for mixed-integer programming models and solver comparisons.",
      },
      {
        title: "INFORMS Journal on Applied Analytics",
        url: "https://pubsonline.informs.org/journal/inte",
        note: "Applied OR case studies focused on implementation, adoption, and business impact.",
      },
    ],
  },
  "global-optimization-minlp": {
    overview: [
      "Global Optimization & MINLP focuses on nonconvex models with continuous and discrete structure. In the map of OR, it connects Nonconvexity, MINLP, Spatial branch-and-bound to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Global optimization tackles nonconvex NLP and MINLP with relaxations, spatial branch-and-bound, bound tightening, and convex envelopes. The practical use case is clearest in Process systems, Energy, Design, Pricing, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      Nonconvexity:
        "Nonconvexity is a core checkpoint for Global Optimization & MINLP: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      MINLP:
        "MINLP is a core checkpoint for Global Optimization & MINLP: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Spatial branch-and-bound":
        "Spatial branch-and-bound is a core checkpoint for Global Optimization & MINLP: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Convex envelopes":
        "Convex envelopes is a core checkpoint for Global Optimization & MINLP: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Process systems: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Nonconvexity, MINLP, and Spatial branch-and-bound; define units and data sources for each one.",
      "Build a small instance of Global Optimization & MINLP that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Process systems: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Energy: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Design: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Pricing: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Global Optimization & MINLP because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Nonconvexity as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "BARON",
        url: "https://minlp.com/baron",
        note: "Topic-specific source curated for Global Optimization & MINLP.",
      },
      {
        title: "SCIP",
        url: "https://www.scipopt.org/",
        note: "Topic-specific source curated for Global Optimization & MINLP.",
      },
      {
        title: "NEOS Guide",
        url: "https://neos-guide.org/guide/",
        note: "Authoritative optimization guide covering model classes, algorithms, and solver selection.",
      },
      {
        title: "Pyomo Documentation",
        url: "https://pyomo.readthedocs.io/",
        note: "Python algebraic modeling documentation for optimization and production modeling workflows.",
      },
    ],
  },
  "combinatorial-optimization": {
    overview: [
      "Combinatorial Optimization focuses on optimize over sets, sequences, trees, matchings, and routes. In the map of OR, it connects Matroids, Matchings, Cuts to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Combinatorial optimization studies discrete structures using polyhedral theory, approximation algorithms, dynamic programming, and specialized graph algorithms. The practical use case is clearest in Assignment, TSP, Network design, Scheduling, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      Matroids:
        "Matroids is a core checkpoint for Combinatorial Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Matchings:
        "Matchings is a core checkpoint for Combinatorial Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Cuts: "Cuts is a core checkpoint for Combinatorial Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Approximation:
        "Approximation is a core checkpoint for Combinatorial Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Polyhedra:
        "Polyhedra is a core checkpoint for Combinatorial Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Assignment: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Matroids, Matchings, and Cuts; define units and data sources for each one.",
      "Build a small instance of Combinatorial Optimization that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Assignment: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "TSP: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Network design: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Scheduling: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Combinatorial Optimization because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Matroids as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "Combinatorial Optimization — Cook et al.",
        url: "https://www.wiley.com/en-us/Combinatorial+Optimization-p-9781118031391",
        note: "Topic-specific source curated for Combinatorial Optimization.",
      },
      {
        title: "MIT OCW 15.053 — Optimization Methods in Management Science",
        url: "https://ocw.mit.edu/courses/15-053-optimization-methods-in-management-science-spring-2013/",
        note: "Course materials for LP, IP, networks, nonlinear programming, and management science applications.",
      },
      {
        title: "MIPLIB",
        url: "https://miplib.zib.de/",
        note: "Benchmark library for mixed-integer programming models and solver comparisons.",
      },
      {
        title: "Google OR-Tools",
        url: "https://developers.google.com/optimization",
        note: "Practical toolkit for routing, assignment, CP-SAT, scheduling, flows, LP, and MIP.",
      },
    ],
  },
  "least-squares-quadratic-optimization": {
    overview: [
      "Quadratic Programming (QP) optimizes a quadratic objective over linear constraints. It is one of the most common nonlinear programming subtopics because it extends LP while preserving strong algorithmic structure in the convex case.",
      "QP appears in least squares, portfolio optimization, control, curve fitting, machine learning, and resource planning. Convex QP can be solved reliably with active-set, interior-point, or operator-splitting methods; nonconvex QP should be treated as a global optimization problem.",
    ],
    conceptNotes: {
      "Quadratic programming":
        "QP uses a quadratic objective and linear constraints, making it a structured NLP class between LP and general nonlinear programming.",
      "Linear constraints":
        "The feasible region remains polyhedral; the nonlinearity is in the objective rather than the constraints.",
      "Quadratic objective":
        "A positive semidefinite quadratic objective gives a convex QP; indefinite objectives create nonconvex QP.",
      "Least squares":
        "Least-squares estimation is a canonical unconstrained or constrained QP pattern.",
      "Piecewise-linear models":
        "Piecewise-linear models is a core checkpoint for Least Squares, QP & Piecewise-Linear Models: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Active set methods":
        "Active-set methods solve QP by predicting which linear constraints bind at the optimum.",
      "Parametric QP":
        "Parametric QP studies how the solution changes as coefficients or right-hand sides vary, which is important in control and sensitivity analysis.",
    },
    workflow: [
      "Start with Regression: write the decision, time horizon, actors, and objective in operational language.",
      "Write the quadratic objective matrix, linear term, linear constraints, bounds, and units.",
      "Check whether the quadratic matrix is positive semidefinite before assuming the QP is convex.",
      "Build a small QP instance that can be solved or inspected before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Regression: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Portfolio: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Control: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Curve fitting: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Resource planning: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Assuming every QP is convex without checking the quadratic objective matrix.",
      "Using a general NLP solver when the model has QP structure a dedicated solver can exploit.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "NEOS Guide — Quadratic Programming",
        url: "https://neos-guide.org/content/quadratic-programming",
        note: "Topic-specific source curated for Least Squares, QP & Piecewise-Linear Models.",
      },
      {
        title: "VMLS — Boyd & Vandenberghe",
        url: "https://vmls-book.stanford.edu/",
        note: "Topic-specific source curated for Least Squares, QP & Piecewise-Linear Models.",
      },
      {
        title: "Stanford EE364A — Convex Optimization",
        url: "https://ee364a.stanford.edu/",
        note: "Convex analysis, duality, least squares, quadratic programs, and conic optimization.",
      },
      {
        title: "Convex Optimization — Boyd & Vandenberghe",
        url: "https://web.stanford.edu/~boyd/cvxbook/",
        note: "Open textbook for convex optimization theory and modeling examples.",
      },
      {
        title: "CVXPY Short Course",
        url: "https://www.cvxgrp.org/cvx_short_course/",
        note: "Hands-on examples for disciplined convex modeling in Python.",
      },
      {
        title: "NVIDIA cuOpt Documentation",
        url: "https://docs.nvidia.com/cuopt/user-guide/latest/introduction.html",
        note: "cuOpt supports QP in its GPU-accelerated optimization stack.",
      },
    ],
  },
  "quadratically-constrained-quadratic-programming": {
    overview: [
      "Quadratically Constrained Quadratic Programming (QCQP) extends QP by allowing quadratic constraints as well as a quadratic objective. It is a natural NLP subtopic for models where risk, distance, energy, variance, or norm-like restrictions cannot be expressed linearly.",
      "The key modeling distinction is convex versus nonconvex QCQP. Convex QCQP can often be solved through conic or interior-point methods, while nonconvex QCQP usually needs semidefinite relaxations, bound tightening, spatial branch-and-bound, or other global optimization machinery.",
    ],
    conceptNotes: {
      "Quadratic constraints":
        "Quadratic constraints limit feasible decisions using squared, bilinear, norm, variance, or energy-like expressions.",
      "Convex QCQP":
        "Convex QCQP has a convex objective and convex feasible set, often making it tractable through conic reformulations or interior-point methods.",
      "Nonconvex QCQP":
        "Nonconvex QCQP can have local optima and weak relaxations, so solver results need stronger validation and bounds.",
      "Semidefinite relaxations":
        "SDP relaxations lift quadratic terms into matrix variables to produce bounds or approximate solutions for hard QCQP instances.",
      "Trust-region models":
        "Trust-region subproblems are a classic QCQP pattern where a quadratic model is optimized inside a norm-bounded region.",
    },
    workflow: [
      "Write each quadratic objective and constraint term explicitly, including matrix symmetry and units.",
      "Classify every quadratic constraint as convex, concave, or indefinite before choosing a solver.",
      "Look for SOCP-representable constraints such as norm bounds, then use SDP or global methods for harder nonconvex structure.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Portfolio risk: variance and tracking-error limits are natural quadratic constraints.",
      "Signal processing: beamforming and estimation models often contain quadratic power or norm limits.",
      "Robust optimization: ellipsoidal uncertainty sets commonly lead to conic or quadratic constraints.",
      "Power systems: AC power-flow relaxations and engineering limits can produce QCQP structure.",
    ],
    pitfalls: [
      "Treating nonconvex QCQP output as globally optimal without a certificate or bound.",
      "Missing an SOCP reformulation that would make a convex quadratic constraint easier to solve.",
      "Letting poorly scaled quadratic terms dominate numerical behavior.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
    ],
    resources: [
      {
        title: "MOSEK Modeling Cookbook",
        url: "https://docs.mosek.com/modeling-cookbook/index.html",
        note: "Practical modeling guide for conic, quadratic, semidefinite, and mixed-integer optimization.",
      },
      {
        title: "Convex Optimization — Boyd & Vandenberghe",
        url: "https://web.stanford.edu/~boyd/cvxbook/",
        note: "Open textbook covering convex quadratic constraints, conic forms, and duality.",
      },
      {
        title: "QPLIB",
        url: "https://qplib.zib.de/",
        note: "Benchmark library for quadratic programming instances, useful for solver comparisons.",
      },
      {
        title: "SCIP Optimization Suite",
        url: "https://www.scipopt.org/",
        note: "Open-source solver suite for MIP, MINLP, and nonconvex quadratic optimization workflows.",
      },
      {
        title: "NVIDIA cuOpt Documentation",
        url: "https://docs.nvidia.com/cuopt/user-guide/latest/introduction.html",
        note: "cuOpt includes beta QCQP support and is useful to track for GPU-accelerated quadratic optimization.",
      },
    ],
  },
  "polyhedral-theory-cutting-planes": {
    overview: [
      "Polyhedral Theory & Cutting Planes focuses on understand the geometry that makes integer optimization effective. In the map of OR, it connects Facets, Valid inequalities, Relaxations to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Polyhedral theory studies facets, valid inequalities, relaxations, and extended formulations; cutting planes turn that geometry into stronger MIP algorithms. The practical use case is clearest in MIP solvers, Routing, Scheduling, Network design, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      Facets:
        "Facets is a core checkpoint for Polyhedral Theory & Cutting Planes: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Valid inequalities":
        "Valid inequalities is a core checkpoint for Polyhedral Theory & Cutting Planes: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Relaxations:
        "Relaxations is a core checkpoint for Polyhedral Theory & Cutting Planes: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Extended formulations":
        "Extended formulations is a core checkpoint for Polyhedral Theory & Cutting Planes: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Branch-and-cut":
        "Branch-and-cut is a core checkpoint for Polyhedral Theory & Cutting Planes: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with MIP solvers: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Facets, Valid inequalities, and Relaxations; define units and data sources for each one.",
      "Build a small instance of Polyhedral Theory & Cutting Planes that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "MIP solvers: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Routing: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Scheduling: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Network design: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Polyhedral Theory & Cutting Planes because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Facets as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "Integer and Combinatorial Optimization — Wolsey",
        url: "https://www.wiley.com/en-us/Integer+Programming%2C+2nd+Edition-p-9781119606536",
        note: "Topic-specific source curated for Polyhedral Theory & Cutting Planes.",
      },
      {
        title: "IPCO Conference",
        url: "https://www.mathopt.org/?nav=ipco",
        note: "Topic-specific source curated for Polyhedral Theory & Cutting Planes.",
      },
      {
        title: "MIPLIB",
        url: "https://miplib.zib.de/",
        note: "Benchmark library for mixed-integer programming models and solver comparisons.",
      },
      {
        title: "SCIP Optimization Suite",
        url: "https://www.scipopt.org/",
        note: "Open-source solver suite for MIP, MINLP, and constraint integer programming.",
      },
      {
        title: "MIT OCW 15.053 — Optimization Methods in Management Science",
        url: "https://ocw.mit.edu/courses/15-053-optimization-methods-in-management-science-spring-2013/",
        note: "Course materials for LP, IP, networks, nonlinear programming, and management science applications.",
      },
    ],
  },
  "complementarity-equilibrium": {
    overview: [
      "Complementarity & Equilibrium Models focuses on model markets, traffic, contact, and KKT systems with either-or conditions. In the map of OR, it connects LCP, MCP, Variational inequalities to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Complementarity models encode mutually exclusive slackness conditions and equilibrium relationships that arise in economics, engineering, games, and optimization optimality systems. The practical use case is clearest in Traffic assignment, Energy markets, Contact mechanics, Economic equilibria, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      LCP: "LCP is a core checkpoint for Complementarity & Equilibrium Models: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      MCP: "MCP is a core checkpoint for Complementarity & Equilibrium Models: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Variational inequalities":
        "Variational inequalities is a core checkpoint for Complementarity & Equilibrium Models: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "KKT systems":
        "KKT systems is a core checkpoint for Complementarity & Equilibrium Models: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Equilibrium:
        "Equilibrium is a core checkpoint for Complementarity & Equilibrium Models: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Traffic assignment: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into LCP, MCP, and Variational inequalities; define units and data sources for each one.",
      "Build a small instance of Complementarity & Equilibrium Models that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Traffic assignment: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Energy markets: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Contact mechanics: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Economic equilibria: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Complementarity & Equilibrium Models because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating LCP as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "NEOS Guide — Complementarity Problems",
        url: "https://neos-guide.org/guide/types/complementarity-problems/",
        note: "Topic-specific source curated for Complementarity & Equilibrium Models.",
      },
      {
        title: "Linear Complementarity, Linear and Nonlinear Programming — Murty",
        url: "https://public.websites.umich.edu/~murty/books/linear_complementarity_webbook/",
        note: "Topic-specific source curated for Complementarity & Equilibrium Models.",
      },
      {
        title: "NEOS Guide",
        url: "https://neos-guide.org/guide/",
        note: "Authoritative optimization guide covering model classes, algorithms, and solver selection.",
      },
      {
        title: "MIT OCW 15.053 — Optimization Methods in Management Science",
        url: "https://ocw.mit.edu/courses/15-053-optimization-methods-in-management-science-spring-2013/",
        note: "Course materials for LP, IP, networks, nonlinear programming, and management science applications.",
      },
      {
        title: "INFORMS — FAQs About O.R. & Analytics",
        url: "https://www.informs.org/Resource-Center/INFORMS-Student-Union/FAQs-About-O.R.-Analytics",
        note: "Use this for the professional definition of OR, analytics, decision support, and applied practice.",
      },
    ],
  },
  "stochastic-processes": {
    overview: [
      "Stochastic Processes focuses on systems that evolve randomly over time. In the map of OR, it connects Poisson, Renewal, Markov chains to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Probability foundations for OR: Poisson processes, renewal processes, Markov chains, MDPs, and reliability models. The practical use case is clearest in Call centers, Inventory, Finance, Maintenance, Healthcare, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      Poisson:
        "Poisson is a core checkpoint for Stochastic Processes: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Renewal:
        "Renewal is a core checkpoint for Stochastic Processes: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Markov chains":
        "Markov chains is a core checkpoint for Stochastic Processes: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      MDPs: "MDPs is a core checkpoint for Stochastic Processes: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Brownian motion":
        "Brownian motion is a core checkpoint for Stochastic Processes: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Call centers: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Poisson, Renewal, and Markov chains; define units and data sources for each one.",
      "Build a small instance of Stochastic Processes that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Call centers: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Inventory: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Finance: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Maintenance: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Healthcare: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Stochastic Processes because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Poisson as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "Introduction to Probability Models — Ross",
        url: "https://www.elsevier.com/books/introduction-to-probability-models/ross/978-0-12-814346-9",
        note: "Topic-specific source curated for Stochastic Processes.",
      },
      {
        title: "MIT 6.262",
        url: "https://ocw.mit.edu/courses/6-262-discrete-stochastic-processes-spring-2011/",
        note: "Topic-specific source curated for Stochastic Processes.",
      },
      {
        title: "ProbabilityCourse.com",
        url: "https://www.probabilitycourse.com/",
        note: "Topic-specific source curated for Stochastic Processes.",
      },
      {
        title: "Algorithms for Decision Making",
        url: "https://algorithmsbook.com/",
        note: "Open book covering planning, MDPs, reinforcement learning, and decision algorithms.",
      },
      {
        title: "INFORMS — FAQs About O.R. & Analytics",
        url: "https://www.informs.org/Resource-Center/INFORMS-Student-Union/FAQs-About-O.R.-Analytics",
        note: "Use this for the professional definition of OR, analytics, decision support, and applied practice.",
      },
    ],
  },
  "queueing-theory": {
    overview: [
      "Queueing Theory focuses on waiting lines, service systems, and congestion. In the map of OR, it connects Arrival process, Service process, Traffic intensity to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Estimate waiting time, utilization, and capacity needs. Little's Law and M/M/c models give powerful first answers. The practical use case is clearest in Hospitals, Call centers, Cloud, Airports, Manufacturing, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "Arrival process":
        "Arrival process is a core checkpoint for Queueing Theory: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Service process":
        "Service process is a core checkpoint for Queueing Theory: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Traffic intensity":
        "Traffic intensity is a core checkpoint for Queueing Theory: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Little's Law":
        "Links average work-in-process, throughput, and flow time under broad steady-state conditions.",
      "M/M/c":
        "M/M/c is a core checkpoint for Queueing Theory: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Hospitals: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Arrival process, Service process, and Traffic intensity; define units and data sources for each one.",
      "Build a small instance of Queueing Theory that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Hospitals: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Call centers: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Cloud: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Airports: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Manufacturing: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Queueing Theory because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Arrival process as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "Queueing Theory Calculator",
        url: "https://www.supositorio.com/rcalc/rcalclite.htm",
        note: "Topic-specific source curated for Queueing Theory.",
      },
      {
        title: "Queueing Theory — Kardi Teknomo",
        url: "https://people.revoledu.com/kardi/tutorial/Queuing/",
        note: "Topic-specific source curated for Queueing Theory.",
      },
      {
        title: "Fundamentals of Queueing Theory — Gross et al.",
        url: "https://www.wiley.com/en-us/Fundamentals+of+Queueing+Theory%2C+5th+Edition-p-9781118943526",
        note: "Topic-specific source curated for Queueing Theory.",
      },
      {
        title: "MIT OCW 15.072J — Queues: Theory and Applications",
        url: "https://ocw.mit.edu/courses/15-072j-queues-theory-and-applications-spring-2006/",
        note: "Queueing theory course material for service systems, congestion, and capacity analysis.",
      },
      {
        title: "MIT OCW 6.262 — Discrete Stochastic Processes",
        url: "https://ocw.mit.edu/courses/6-262-discrete-stochastic-processes-spring-2011/",
        note: "Poisson processes, Markov chains, renewal processes, and stochastic-process foundations.",
      },
      {
        title: "INFORMS — FAQs About O.R. & Analytics",
        url: "https://www.informs.org/Resource-Center/INFORMS-Student-Union/FAQs-About-O.R.-Analytics",
        note: "Use this for the professional definition of OR, analytics, decision support, and applied practice.",
      },
    ],
  },
  simulation: {
    overview: [
      "Simulation is the OR tool for systems whose operational detail is too rich for a clean closed-form model. Instead of solving equations directly, it imitates system behavior under policies and random inputs.",
      "A simulation study is strongest when it compares policies under common random scenarios, reports uncertainty intervals, and validates the model against known behavior.",
    ],
    conceptNotes: {
      "Monte Carlo":
        "Uses repeated random sampling to estimate distributions, tail risks, and expected performance.",
      "Discrete-event":
        "Advances the clock from event to event, which is natural for queues, factories, clinics, and logistics.",
      "Agent-based":
        "Agent-based is a core checkpoint for Simulation: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Variance reduction":
        "Variance reduction is a core checkpoint for Simulation: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Validation:
        "Validation is a core checkpoint for Simulation: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Operations: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Monte Carlo, Discrete-event, and Agent-based; define units and data sources for each one.",
      "Build a small instance of Simulation that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Operations: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Risk: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Healthcare: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Logistics: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Networks: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Simulation because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Monte Carlo as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "Simulation Modeling and Analysis — Law",
        url: "https://www.mheducation.com/highered/product/simulation-modeling-analysis-law/M9781264268770.html",
        note: "Topic-specific source curated for Simulation.",
      },
      {
        title: "SimPy",
        url: "https://simpy.readthedocs.io/",
        note: "Topic-specific source curated for Simulation.",
      },
      {
        title: "Winter Simulation Conference",
        url: "https://meetings.informs.org/wordpress/wsc2024/",
        note: "Major conference source for simulation methodology and simulation optimization practice.",
      },
      {
        title: "INFORMS — FAQs About O.R. & Analytics",
        url: "https://www.informs.org/Resource-Center/INFORMS-Student-Union/FAQs-About-O.R.-Analytics",
        note: "Use this for the professional definition of OR, analytics, decision support, and applied practice.",
      },
    ],
  },
  "decision-analysis": {
    overview: [
      "Decision Analysis focuses on structured choice under uncertainty and multiple criteria. In the map of OR, it connects Decision trees, Utility, Value of information to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Decision trees, utility theory, value-of-information, and multi-criteria methods support transparent, defensible choices. The practical use case is clearest in adjacent OR applications, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "Decision trees":
        "Decision trees is a core checkpoint for Decision Analysis: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Utility:
        "Utility is a core checkpoint for Decision Analysis: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Value of information":
        "Value of information is a core checkpoint for Decision Analysis: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Multi-criteria":
        "Multi-criteria is a core checkpoint for Decision Analysis: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Risk preferences":
        "Risk preferences is a core checkpoint for Decision Analysis: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with a concrete case from the surrounding OR area: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Decision trees, Utility, and Value of information; define units and data sources for each one.",
      "Build a small instance of Decision Analysis that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Use this topic as a building block in nearby OR models; connect it to a concrete decision before treating it as a standalone application area.",
    ],
    pitfalls: [
      "Applying Decision Analysis because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Decision trees as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "INFORMS — FAQs About O.R. & Analytics",
        url: "https://www.informs.org/Resource-Center/INFORMS-Student-Union/FAQs-About-O.R.-Analytics",
        note: "Use this for the professional definition of OR, analytics, decision support, and applied practice.",
      },
      {
        title: "Algorithms for Decision Making",
        url: "https://algorithmsbook.com/",
        note: "Open book covering planning, MDPs, reinforcement learning, and decision algorithms.",
      },
      {
        title: "INFORMS Ethics Guidelines",
        url: "https://www.informs.org/About-INFORMS/Governance/INFORMS-Ethics-Guidelines",
        note: "Professional ethics guidance for analytics, models, and decision systems.",
      },
    ],
  },
  "markov-decision-processes": {
    overview: [
      "Markov Decision Processes focuses on controlled stochastic systems with state, action, and reward. In the map of OR, it connects States, Actions, Rewards to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "MDPs formalize sequential decision-making under uncertainty and connect dynamic programming, reinforcement learning, inventory, queues, and maintenance. The practical use case is clearest in Inventory control, Maintenance, Pricing, Routing, RL, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      States:
        "States is a core checkpoint for Markov Decision Processes: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Actions:
        "Actions is a core checkpoint for Markov Decision Processes: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Rewards:
        "Rewards is a core checkpoint for Markov Decision Processes: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Policies:
        "Policies is a core checkpoint for Markov Decision Processes: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Value iteration":
        "Value iteration is a core checkpoint for Markov Decision Processes: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Inventory control: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into States, Actions, and Rewards; define units and data sources for each one.",
      "Build a small instance of Markov Decision Processes that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Inventory control: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Maintenance: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Pricing: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Routing: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "RL: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Markov Decision Processes because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating States as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "Algorithms for Decision Making",
        url: "https://algorithmsbook.com/",
        note: "Topic-specific source curated for Markov Decision Processes.",
      },
      {
        title: "MIT 6.231 Dynamic Programming",
        url: "https://ocw.mit.edu/courses/6-231-dynamic-programming-and-stochastic-control-fall-2015/",
        note: "Topic-specific source curated for Markov Decision Processes.",
      },
      {
        title: "MIT OCW 6.262 — Discrete Stochastic Processes",
        url: "https://ocw.mit.edu/courses/6-262-discrete-stochastic-processes-spring-2011/",
        note: "Poisson processes, Markov chains, renewal processes, and stochastic-process foundations.",
      },
    ],
  },
  "reliability-maintenance": {
    overview: [
      "Reliability & Maintenance focuses on keep systems available under failure, aging, and repair. In the map of OR, it connects Failure rates, Renewal reward, Replacement to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Reliability models, replacement policies, inspection schedules, and condition-based maintenance quantify availability and lifecycle cost. The practical use case is clearest in Aviation, Manufacturing, Energy assets, Rail, Defense, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "Failure rates":
        "Failure rates is a core checkpoint for Reliability & Maintenance: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Renewal reward":
        "Renewal reward is a core checkpoint for Reliability & Maintenance: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Replacement:
        "Replacement is a core checkpoint for Reliability & Maintenance: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Availability:
        "Availability is a core checkpoint for Reliability & Maintenance: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Condition monitoring":
        "Condition monitoring is a core checkpoint for Reliability & Maintenance: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Aviation: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Failure rates, Renewal reward, and Replacement; define units and data sources for each one.",
      "Build a small instance of Reliability & Maintenance that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Aviation: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Manufacturing: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Energy assets: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Rail: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Defense: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Reliability & Maintenance because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Failure rates as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "Introduction to Probability Models — Ross",
        url: "https://www.elsevier.com/books/introduction-to-probability-models/ross/978-0-12-814346-9",
        note: "Topic-specific source curated for Reliability & Maintenance.",
      },
      {
        title: "MIT OCW 6.262 — Discrete Stochastic Processes",
        url: "https://ocw.mit.edu/courses/6-262-discrete-stochastic-processes-spring-2011/",
        note: "Poisson processes, Markov chains, renewal processes, and stochastic-process foundations.",
      },
      {
        title: "INFORMS — FAQs About O.R. & Analytics",
        url: "https://www.informs.org/Resource-Center/INFORMS-Student-Union/FAQs-About-O.R.-Analytics",
        note: "Use this for the professional definition of OR, analytics, decision support, and applied practice.",
      },
      {
        title: "INFORMS Journal on Applied Analytics",
        url: "https://pubsonline.informs.org/journal/inte",
        note: "Applied OR case studies focused on implementation, adoption, and business impact.",
      },
    ],
  },
  "risk-analysis": {
    overview: [
      "Risk Analysis focuses on quantify downside, tail events, and risk appetite. In the map of OR, it connects Expected shortfall, VaR, Stress tests to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Risk analysis combines probability models, simulation, optimization, and decision analysis to compare exposure, mitigation, and resilience. The practical use case is clearest in Finance, Energy, Public safety, Supply chains, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "Expected shortfall":
        "Expected shortfall is a core checkpoint for Risk Analysis: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      VaR: "VaR is a core checkpoint for Risk Analysis: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Stress tests":
        "Stress tests is a core checkpoint for Risk Analysis: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Scenario planning":
        "Scenario planning is a core checkpoint for Risk Analysis: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Risk measures":
        "Risk measures is a core checkpoint for Risk Analysis: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Finance: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Expected shortfall, VaR, and Stress tests; define units and data sources for each one.",
      "Build a small instance of Risk Analysis that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Finance: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Energy: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Public safety: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Supply chains: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Risk Analysis because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Expected shortfall as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "Risk Analysis: A Quantitative Guide",
        url: "https://www.wiley.com/en-us/Risk+Analysis%3A+A+Quantitative+Guide%2C+3rd+Edition-p-9781118218471",
        note: "Topic-specific source curated for Risk Analysis.",
      },
      {
        title: "INFORMS Ethics Guidelines",
        url: "https://www.informs.org/About-INFORMS/Governance/INFORMS-Ethics-Guidelines",
        note: "Professional ethics guidance for analytics, models, and decision systems.",
      },
      {
        title: "MIT OCW 6.262 — Discrete Stochastic Processes",
        url: "https://ocw.mit.edu/courses/6-262-discrete-stochastic-processes-spring-2011/",
        note: "Poisson processes, Markov chains, renewal processes, and stochastic-process foundations.",
      },
      {
        title: "SimPy Documentation",
        url: "https://simpy.readthedocs.io/",
        note: "Process-based discrete-event simulation framework for Python.",
      },
    ],
  },
  "simulation-optimization": {
    overview: [
      "Simulation Optimization focuses on optimize systems whose performance is estimated by simulation. In the map of OR, it connects Ranking & selection, Response surfaces, SAA to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Simulation optimization uses ranking and selection, response surfaces, stochastic approximation, and Bayesian optimization to choose policies in noisy models. The practical use case is clearest in Call centers, Hospitals, Warehouses, Manufacturing lines, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "Ranking & selection":
        "Ranking & selection is a core checkpoint for Simulation Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Response surfaces":
        "Response surfaces is a core checkpoint for Simulation Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      SAA: "SAA is a core checkpoint for Simulation Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Bayesian optimization":
        "Bayesian optimization is a core checkpoint for Simulation Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Call centers: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Ranking & selection, Response surfaces, and SAA; define units and data sources for each one.",
      "Build a small instance of Simulation Optimization that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Call centers: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Hospitals: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Warehouses: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Manufacturing lines: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Simulation Optimization because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Ranking & selection as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "Winter Simulation Conference",
        url: "https://meetings.informs.org/wordpress/wsc2024/",
        note: "Topic-specific source curated for Simulation Optimization.",
      },
      {
        title: "SimPy Documentation",
        url: "https://simpy.readthedocs.io/",
        note: "Process-based discrete-event simulation framework for Python.",
      },
      {
        title: "Algorithms for Decision Making",
        url: "https://algorithmsbook.com/",
        note: "Open book covering planning, MDPs, reinforcement learning, and decision algorithms.",
      },
    ],
  },
  "game-theory": {
    overview: [
      "Game Theory focuses on strategic interaction among decision-makers. In the map of OR, it connects Nash equilibrium, Mechanism design, Auctions to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Equilibria, mechanism design, auctions, and cooperative games — the mathematics of strategy used in pricing, markets, and policy. The practical use case is clearest in adjacent OR applications, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "Nash equilibrium":
        "Describes strategic stability where no player wants to change unilaterally.",
      "Mechanism design":
        "Mechanism design is a core checkpoint for Game Theory: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Auctions:
        "Auctions is a core checkpoint for Game Theory: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Cooperative games":
        "Cooperative games is a core checkpoint for Game Theory: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with a concrete case from the surrounding OR area: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Nash equilibrium, Mechanism design, and Auctions; define units and data sources for each one.",
      "Build a small instance of Game Theory that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Use this topic as a building block in nearby OR models; connect it to a concrete decision before treating it as a standalone application area.",
    ],
    pitfalls: [
      "Applying Game Theory because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Nash equilibrium as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "INFORMS — FAQs About O.R. & Analytics",
        url: "https://www.informs.org/Resource-Center/INFORMS-Student-Union/FAQs-About-O.R.-Analytics",
        note: "Use this for the professional definition of OR, analytics, decision support, and applied practice.",
      },
      {
        title: "NEOS Guide",
        url: "https://neos-guide.org/guide/",
        note: "Authoritative optimization guide covering model classes, algorithms, and solver selection.",
      },
      {
        title: "MIT OCW 15.053 — Optimization Methods in Management Science",
        url: "https://ocw.mit.edu/courses/15-053-optimization-methods-in-management-science-spring-2013/",
        note: "Course materials for LP, IP, networks, nonlinear programming, and management science applications.",
      },
    ],
  },
  "network-optimization": {
    overview: [
      "Network Optimization focuses on flows, paths, matchings, and connectivity on graphs. In the map of OR, it connects Shortest path, Max flow, Min-cost flow to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Many OR problems live on networks: shortest paths, max flow, min-cost flow, assignment, routing. Specialized algorithms scale far beyond generic LP. The practical use case is clearest in Logistics, Telecom, Transit, Supply chains, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "Shortest path":
        "Finds least-cost movement across a graph and is a primitive inside many larger models.",
      "Max flow": "Measures throughput under arc capacities and exposes bottlenecks in networks.",
      "Min-cost flow":
        "Combines routing and cost minimization with supply, demand, and capacity balances.",
      Matching: "Pairs entities while respecting compatibility, capacity, or stability rules.",
      Routing:
        "Routing is a core checkpoint for Network Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Logistics: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Shortest path, Max flow, and Min-cost flow; define units and data sources for each one.",
      "Build a small instance of Network Optimization that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Logistics: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Telecom: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Transit: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Supply chains: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Network Optimization because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Shortest path as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "Network Flows — Ahuja, Magnanti, Orlin",
        url: "https://www.pearson.com/en-us/subject-catalog/p/network-flows-theory-algorithms-and-applications/P200000003207/9780136175490",
        note: "Topic-specific source curated for Network Optimization.",
      },
      {
        title: "MIT OCW 15.053 — Optimization Methods in Management Science",
        url: "https://ocw.mit.edu/courses/15-053-optimization-methods-in-management-science-spring-2013/",
        note: "Course materials for LP, IP, networks, nonlinear programming, and management science applications.",
      },
      {
        title: "Google OR-Tools",
        url: "https://developers.google.com/optimization",
        note: "Practical toolkit for routing, assignment, CP-SAT, scheduling, flows, LP, and MIP.",
      },
      {
        title: "NEOS Guide",
        url: "https://neos-guide.org/guide/",
        note: "Authoritative optimization guide covering model classes, algorithms, and solver selection.",
      },
    ],
  },
  scheduling: {
    overview: [
      "Scheduling focuses on allocating work over time on machines, people, rooms, or vehicles. In the map of OR, it connects Job-shop, Flow-shop, Project scheduling to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Job-shop, flow-shop, project scheduling, and timetabling — combinatorial problems with rich structure and high real-world stakes. The practical use case is clearest in Manufacturing, Healthcare, Airlines, Education, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "Job-shop":
        "Job-shop is a core checkpoint for Scheduling: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Flow-shop":
        "Flow-shop is a core checkpoint for Scheduling: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Project scheduling":
        "Project scheduling is a core checkpoint for Scheduling: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Timetabling:
        "Timetabling is a core checkpoint for Scheduling: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Manufacturing: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Job-shop, Flow-shop, and Project scheduling; define units and data sources for each one.",
      "Build a small instance of Scheduling that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Manufacturing: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Healthcare: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Airlines: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Education: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Scheduling because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Job-shop as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "Scheduling — Pinedo",
        url: "https://link.springer.com/book/10.1007/978-3-319-26580-3",
        note: "Topic-specific source curated for Scheduling.",
      },
      {
        title: "Google OR-Tools",
        url: "https://developers.google.com/optimization",
        note: "Practical toolkit for routing, assignment, CP-SAT, scheduling, flows, LP, and MIP.",
      },
      {
        title: "MiniZinc Handbook",
        url: "https://www.minizinc.org/doc-latest/en/",
        note: "Constraint-programming modeling handbook with global constraints and search examples.",
      },
      {
        title: "SCIP Optimization Suite",
        url: "https://www.scipopt.org/",
        note: "Open-source solver suite for MIP, MINLP, and constraint integer programming.",
      },
    ],
  },
  "matching-assignment": {
    overview: [
      "Matching & Assignment focuses on pair resources, people, tasks, and markets optimally. In the map of OR, it connects Bipartite matching, Hungarian algorithm, Stable matching to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Assignment and matching models allocate workers to jobs, students to schools, organs to patients, ads to slots, and riders to drivers. The practical use case is clearest in Labor, Education, Healthcare, Ride-hail, Advertising, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "Bipartite matching":
        "Bipartite matching is a core checkpoint for Matching & Assignment: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Hungarian algorithm":
        "Hungarian algorithm is a core checkpoint for Matching & Assignment: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Stable matching":
        "Stable matching is a core checkpoint for Matching & Assignment: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Market design":
        "Market design is a core checkpoint for Matching & Assignment: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Labor: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Bipartite matching, Hungarian algorithm, and Stable matching; define units and data sources for each one.",
      "Build a small instance of Matching & Assignment that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Labor: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Education: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Healthcare: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Ride-hail: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Advertising: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Matching & Assignment because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Bipartite matching as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "Network Flows — Ahuja, Magnanti, Orlin",
        url: "https://www.pearson.com/en-us/subject-catalog/p/network-flows-theory-algorithms-and-applications/P200000003207/9780136175490",
        note: "Topic-specific source curated for Matching & Assignment.",
      },
      {
        title: "Google OR-Tools",
        url: "https://developers.google.com/optimization",
        note: "Practical toolkit for routing, assignment, CP-SAT, scheduling, flows, LP, and MIP.",
      },
      {
        title: "MIT OCW 15.053 — Optimization Methods in Management Science",
        url: "https://ocw.mit.edu/courses/15-053-optimization-methods-in-management-science-spring-2013/",
        note: "Course materials for LP, IP, networks, nonlinear programming, and management science applications.",
      },
      {
        title: "INFORMS — FAQs About O.R. & Analytics",
        url: "https://www.informs.org/Resource-Center/INFORMS-Student-Union/FAQs-About-O.R.-Analytics",
        note: "Use this for the professional definition of OR, analytics, decision support, and applied practice.",
      },
    ],
  },
  "vehicle-routing": {
    overview: [
      "Vehicle routing turns fleet operations into a structured combinatorial decision: which stops go on which route, in what order, with which vehicle, and under which time, capacity, and service constraints.",
      "Real VRP work is rarely just shortest distance. Time windows, driver rules, pickup-delivery precedence, stochastic travel times, and customer priorities usually determine whether a plan can actually run.",
    ],
    conceptNotes: {
      TSP: "TSP is a core checkpoint for Vehicle Routing: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      VRP: "VRP is a core checkpoint for Vehicle Routing: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Time windows":
        "Time windows is a core checkpoint for Vehicle Routing: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Pickup-delivery":
        "Pickup-delivery is a core checkpoint for Vehicle Routing: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Large neighborhood search":
        "Large neighborhood search is a core checkpoint for Vehicle Routing: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Last mile: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into TSP, VRP, and Time windows; define units and data sources for each one.",
      "Build a small instance of Vehicle Routing that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Last mile: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Trucking: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Field service: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Waste collection: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Vehicle Routing because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating TSP as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "OR-Tools Routing",
        url: "https://developers.google.com/optimization/routing",
        note: "Topic-specific source curated for Vehicle Routing.",
      },
      {
        title: "NVIDIA cuOpt",
        url: "https://github.com/NVIDIA/cuopt",
        note: "Open-source CUDA GPU-accelerated solver with Python and server support for routing problems such as TSP, VRP, and pickup-delivery.",
      },
      {
        title: "Exploring NVIDIA cuOpt — Marvik",
        url: "https://www.marvik.ai/blog/exploring-nvidia-cuopt",
        note: "Applied vehicle-routing walkthrough comparing cuOpt usage with hand-modeled Pyomo examples.",
      },
      {
        title: "VRP-REP",
        url: "http://www.vrp-rep.org/",
        note: "Topic-specific source curated for Vehicle Routing.",
      },
      {
        title: "Google OR-Tools",
        url: "https://developers.google.com/optimization",
        note: "Practical toolkit for routing, assignment, CP-SAT, scheduling, flows, LP, and MIP.",
      },
      {
        title: "MIPLIB",
        url: "https://miplib.zib.de/",
        note: "Benchmark library for mixed-integer programming models and solver comparisons.",
      },
      {
        title: "INFORMS Journal on Applied Analytics",
        url: "https://pubsonline.informs.org/journal/inte",
        note: "Applied OR case studies focused on implementation, adoption, and business impact.",
      },
    ],
  },
  "facility-location": {
    overview: [
      "Facility Location focuses on choose where to place warehouses, clinics, depots, and capacity. In the map of OR, it connects p-median, Set covering, Capacitated location to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Location models balance fixed cost, service distance, capacity, coverage, risk, and network flows across long-lived infrastructure decisions. The practical use case is clearest in Warehouses, Clinics, Charging stations, Emergency services, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "p-median":
        "p-median is a core checkpoint for Facility Location: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Set covering":
        "Set covering is a core checkpoint for Facility Location: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Capacitated location":
        "Capacitated location is a core checkpoint for Facility Location: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Hub location":
        "Hub location is a core checkpoint for Facility Location: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Coverage:
        "Coverage is a core checkpoint for Facility Location: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Warehouses: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into p-median, Set covering, and Capacitated location; define units and data sources for each one.",
      "Build a small instance of Facility Location that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Warehouses: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Clinics: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Charging stations: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Emergency services: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Facility Location because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating p-median as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "Facility Location: Applications and Theory",
        url: "https://link.springer.com/book/10.1007/978-3-642-56082-8",
        note: "Topic-specific source curated for Facility Location.",
      },
      {
        title: "MIT OCW 15.053 — Optimization Methods in Management Science",
        url: "https://ocw.mit.edu/courses/15-053-optimization-methods-in-management-science-spring-2013/",
        note: "Course materials for LP, IP, networks, nonlinear programming, and management science applications.",
      },
      {
        title: "NEOS Guide",
        url: "https://neos-guide.org/guide/",
        note: "Authoritative optimization guide covering model classes, algorithms, and solver selection.",
      },
      {
        title: "INFORMS — FAQs About O.R. & Analytics",
        url: "https://www.informs.org/Resource-Center/INFORMS-Student-Union/FAQs-About-O.R.-Analytics",
        note: "Use this for the professional definition of OR, analytics, decision support, and applied practice.",
      },
    ],
  },
  "project-management": {
    overview: [
      "Project Management, PERT & CPM focuses on schedule project activities under precedence, time, and resource limits. In the map of OR, it connects Critical path, PERT, Crashing to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Project networks, critical paths, PERT uncertainty, crashing, and resource-constrained project scheduling connect OR to construction, R&D, and operations. The practical use case is clearest in Construction, Software delivery, R&D, Maintenance turnarounds, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "Critical path":
        "Critical path is a core checkpoint for Project Management, PERT & CPM: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      PERT: "PERT is a core checkpoint for Project Management, PERT & CPM: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Crashing:
        "Crashing is a core checkpoint for Project Management, PERT & CPM: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      RCPSP:
        "RCPSP is a core checkpoint for Project Management, PERT & CPM: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Precedence:
        "Precedence is a core checkpoint for Project Management, PERT & CPM: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Construction: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Critical path, PERT, and Crashing; define units and data sources for each one.",
      "Build a small instance of Project Management, PERT & CPM that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Construction: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Software delivery: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "R&D: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Maintenance turnarounds: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Project Management, PERT & CPM because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Critical path as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "PSPLIB",
        url: "https://www.om-db.wi.tum.de/psplib/",
        note: "Topic-specific source curated for Project Management, PERT & CPM.",
      },
      {
        title: "Google OR-Tools",
        url: "https://developers.google.com/optimization",
        note: "Practical toolkit for routing, assignment, CP-SAT, scheduling, flows, LP, and MIP.",
      },
      {
        title: "SimPy Documentation",
        url: "https://simpy.readthedocs.io/",
        note: "Process-based discrete-event simulation framework for Python.",
      },
      {
        title: "INFORMS Journal on Applied Analytics",
        url: "https://pubsonline.informs.org/journal/inte",
        note: "Applied OR case studies focused on implementation, adoption, and business impact.",
      },
    ],
  },
  "optimal-control": {
    overview: [
      "Optimal Control focuses on optimize decisions in dynamic physical and engineered systems. In the map of OR, it connects State dynamics, Control, HJB to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Optimal control studies continuous-time dynamics, control policies, Hamilton-Jacobi-Bellman equations, and model predictive control. The practical use case is clearest in Robotics, Energy systems, Aerospace, Process control, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "State dynamics":
        "State dynamics is a core checkpoint for Optimal Control: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Control:
        "Control is a core checkpoint for Optimal Control: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      HJB: "HJB is a core checkpoint for Optimal Control: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      MPC: "MPC is a core checkpoint for Optimal Control: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Pontryagin principle":
        "Pontryagin principle is a core checkpoint for Optimal Control: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Robotics: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into State dynamics, Control, and HJB; define units and data sources for each one.",
      "Build a small instance of Optimal Control that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Robotics: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Energy systems: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Aerospace: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Process control: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Optimal Control because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating State dynamics as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "Dynamic Programming and Optimal Control — Bertsekas",
        url: "https://www.athenasc.com/dpbook.html",
        note: "Topic-specific source curated for Optimal Control.",
      },
      {
        title: "MIT OCW 6.231 — Dynamic Programming and Stochastic Control",
        url: "https://ocw.mit.edu/courses/6-231-dynamic-programming-and-stochastic-control-fall-2015/",
        note: "Dynamic programming and stochastic control lectures for sequential decision models.",
      },
      {
        title: "Stanford EE364A — Convex Optimization",
        url: "https://ee364a.stanford.edu/",
        note: "Convex analysis, duality, least squares, quadratic programs, and conic optimization.",
      },
      {
        title: "Algorithms for Decision Making",
        url: "https://algorithmsbook.com/",
        note: "Open book covering planning, MDPs, reinforcement learning, and decision algorithms.",
      },
    ],
  },
  "systems-dynamics": {
    overview: [
      "System Dynamics & Feedback Models focuses on model feedback loops, delays, and policy resistance. In the map of OR, it connects Stocks and flows, Feedback loops, Delays to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "System dynamics complements optimization by simulating stocks, flows, feedback, delays, and nonlinear behavior in complex organizations. The practical use case is clearest in Public policy, Healthcare, Sustainability, Operations strategy, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "Stocks and flows":
        "Stocks and flows is a core checkpoint for System Dynamics & Feedback Models: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Feedback loops":
        "Feedback loops is a core checkpoint for System Dynamics & Feedback Models: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Delays:
        "Delays is a core checkpoint for System Dynamics & Feedback Models: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Policy resistance":
        "Policy resistance is a core checkpoint for System Dynamics & Feedback Models: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Public policy: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Stocks and flows, Feedback loops, and Delays; define units and data sources for each one.",
      "Build a small instance of System Dynamics & Feedback Models that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Public policy: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Healthcare: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Sustainability: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Operations strategy: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying System Dynamics & Feedback Models because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Stocks and flows as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "System Dynamics Society",
        url: "https://systemdynamics.org/",
        note: "Topic-specific source curated for System Dynamics & Feedback Models.",
      },
      {
        title: "SimPy Documentation",
        url: "https://simpy.readthedocs.io/",
        note: "Process-based discrete-event simulation framework for Python.",
      },
      {
        title: "INFORMS — FAQs About O.R. & Analytics",
        url: "https://www.informs.org/Resource-Center/INFORMS-Student-Union/FAQs-About-O.R.-Analytics",
        note: "Use this for the professional definition of OR, analytics, decision support, and applied practice.",
      },
      {
        title: "INFORMS Journal on Applied Analytics",
        url: "https://pubsonline.informs.org/journal/inte",
        note: "Applied OR case studies focused on implementation, adoption, and business impact.",
      },
    ],
  },
  "inventory-theory": {
    overview: [
      "Inventory Theory focuses on how much to order, when, and where to hold it. In the map of OR, it connects EOQ, (s, S) policies, Newsvendor to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "EOQ, (s, S) policies, newsvendor, and multi-echelon inventory — balancing holding cost, ordering cost, and service level under demand uncertainty. The practical use case is clearest in adjacent OR applications, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      EOQ: "EOQ is a core checkpoint for Inventory Theory: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "(s, S) policies":
        "(s, S) policies is a core checkpoint for Inventory Theory: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Newsvendor:
        "Newsvendor is a core checkpoint for Inventory Theory: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Multi-echelon":
        "Multi-echelon is a core checkpoint for Inventory Theory: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Safety stock":
        "Safety stock is a core checkpoint for Inventory Theory: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with a concrete case from the surrounding OR area: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into EOQ, (s, S) policies, and Newsvendor; define units and data sources for each one.",
      "Build a small instance of Inventory Theory that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Use this topic as a building block in nearby OR models; connect it to a concrete decision before treating it as a standalone application area.",
    ],
    pitfalls: [
      "Applying Inventory Theory because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating EOQ as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "Foundations of Inventory Management — Zipkin",
        url: "https://www.mheducation.com/highered/product/foundations-inventory-management-zipkin/M9780256113790.html",
        note: "Topic-specific source curated for Inventory Theory.",
      },
      {
        title: "MIT OCW 6.231 — Dynamic Programming and Stochastic Control",
        url: "https://ocw.mit.edu/courses/6-231-dynamic-programming-and-stochastic-control-fall-2015/",
        note: "Dynamic programming and stochastic control lectures for sequential decision models.",
      },
      {
        title: "MIT OCW 6.262 — Discrete Stochastic Processes",
        url: "https://ocw.mit.edu/courses/6-262-discrete-stochastic-processes-spring-2011/",
        note: "Poisson processes, Markov chains, renewal processes, and stochastic-process foundations.",
      },
      {
        title: "INFORMS — FAQs About O.R. & Analytics",
        url: "https://www.informs.org/Resource-Center/INFORMS-Student-Union/FAQs-About-O.R.-Analytics",
        note: "Use this for the professional definition of OR, analytics, decision support, and applied practice.",
      },
    ],
  },
  "transportation-logistics": {
    overview: [
      "Transportation & Logistics focuses on move goods and people efficiently. In the map of OR, it connects VRP, Fleet sizing, Hub-and-spoke to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Vehicle routing, fleet sizing, hub-and-spoke design, last-mile, and disruption recovery — classic OR successes. The practical use case is clearest in adjacent OR applications, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      VRP: "VRP is a core checkpoint for Transportation & Logistics: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Fleet sizing":
        "Fleet sizing is a core checkpoint for Transportation & Logistics: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Hub-and-spoke":
        "Hub-and-spoke is a core checkpoint for Transportation & Logistics: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Last-mile":
        "Last-mile is a core checkpoint for Transportation & Logistics: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Disruption recovery":
        "Disruption recovery is a core checkpoint for Transportation & Logistics: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with a concrete case from the surrounding OR area: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into VRP, Fleet sizing, and Hub-and-spoke; define units and data sources for each one.",
      "Build a small instance of Transportation & Logistics that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Use this topic as a building block in nearby OR models; connect it to a concrete decision before treating it as a standalone application area.",
    ],
    pitfalls: [
      "Applying Transportation & Logistics because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating VRP as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "Google OR-Tools",
        url: "https://developers.google.com/optimization",
        note: "Practical toolkit for routing, assignment, CP-SAT, scheduling, flows, LP, and MIP.",
      },
      {
        title: "MIT OCW 15.053 — Optimization Methods in Management Science",
        url: "https://ocw.mit.edu/courses/15-053-optimization-methods-in-management-science-spring-2013/",
        note: "Course materials for LP, IP, networks, nonlinear programming, and management science applications.",
      },
      {
        title: "INFORMS Journal on Applied Analytics",
        url: "https://pubsonline.informs.org/journal/inte",
        note: "Applied OR case studies focused on implementation, adoption, and business impact.",
      },
    ],
  },
  "supply-chain": {
    overview: [
      "Supply Chain Optimization focuses on plan flows of materials, information, and money end-to-end. In the map of OR, it connects Network design, Sourcing, S&OP to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Network design, sourcing, production planning, distribution, and inventory placement across a multi-echelon supply chain. The practical use case is clearest in adjacent OR applications, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "Network design":
        "Network design is a core checkpoint for Supply Chain Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Sourcing:
        "Sourcing is a core checkpoint for Supply Chain Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "S&OP":
        "S&OP is a core checkpoint for Supply Chain Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Distribution:
        "Distribution is a core checkpoint for Supply Chain Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Resilience:
        "Resilience is a core checkpoint for Supply Chain Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with a concrete case from the surrounding OR area: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Network design, Sourcing, and S&OP; define units and data sources for each one.",
      "Build a small instance of Supply Chain Optimization that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Use this topic as a building block in nearby OR models; connect it to a concrete decision before treating it as a standalone application area.",
    ],
    pitfalls: [
      "Applying Supply Chain Optimization because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Network design as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "MIT OCW 15.053 — Optimization Methods in Management Science",
        url: "https://ocw.mit.edu/courses/15-053-optimization-methods-in-management-science-spring-2013/",
        note: "Course materials for LP, IP, networks, nonlinear programming, and management science applications.",
      },
      {
        title: "Pyomo Documentation",
        url: "https://pyomo.readthedocs.io/",
        note: "Python algebraic modeling documentation for optimization and production modeling workflows.",
      },
      {
        title: "INFORMS — FAQs About O.R. & Analytics",
        url: "https://www.informs.org/Resource-Center/INFORMS-Student-Union/FAQs-About-O.R.-Analytics",
        note: "Use this for the professional definition of OR, analytics, decision support, and applied practice.",
      },
    ],
  },
  "revenue-management": {
    overview: [
      "Revenue Management focuses on prices, availability, and capacity controls under demand uncertainty. In the map of OR, it connects Dynamic pricing, Overbooking, Capacity control to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Dynamic pricing, overbooking, fare class allocation, and choice-based revenue management for airlines, hotels, retail, and beyond. The practical use case is clearest in adjacent OR applications, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "Dynamic pricing":
        "Adjusts price or availability as capacity, demand, and time-to-departure change.",
      Overbooking:
        "Overbooking is a core checkpoint for Revenue Management: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Capacity control":
        "Capacity control is a core checkpoint for Revenue Management: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Choice models":
        "Choice models is a core checkpoint for Revenue Management: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with a concrete case from the surrounding OR area: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Dynamic pricing, Overbooking, and Capacity control; define units and data sources for each one.",
      "Build a small instance of Revenue Management that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Use this topic as a building block in nearby OR models; connect it to a concrete decision before treating it as a standalone application area.",
    ],
    pitfalls: [
      "Applying Revenue Management because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Dynamic pricing as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "Theory and Practice of Revenue Management — Talluri & van Ryzin",
        url: "https://link.springer.com/book/10.1007/b139000",
        note: "Topic-specific source curated for Revenue Management.",
      },
      {
        title: "MIT OCW 6.231 — Dynamic Programming and Stochastic Control",
        url: "https://ocw.mit.edu/courses/6-231-dynamic-programming-and-stochastic-control-fall-2015/",
        note: "Dynamic programming and stochastic control lectures for sequential decision models.",
      },
      {
        title: "Algorithms for Decision Making",
        url: "https://algorithmsbook.com/",
        note: "Open book covering planning, MDPs, reinforcement learning, and decision algorithms.",
      },
      {
        title: "INFORMS — FAQs About O.R. & Analytics",
        url: "https://www.informs.org/Resource-Center/INFORMS-Student-Union/FAQs-About-O.R.-Analytics",
        note: "Use this for the professional definition of OR, analytics, decision support, and applied practice.",
      },
    ],
  },
  "production-planning": {
    overview: [
      "Production Planning & Manufacturing focuses on plan capacity, lots, materials, and shop-floor execution. In the map of OR, it connects Lot sizing, MRP, Line balancing to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Production planning covers aggregate planning, lot sizing, MRP, sequencing, bottlenecks, line balancing, and factory-flow decisions. The practical use case is clearest in Factories, Semiconductors, Food production, Pharma, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "Lot sizing":
        "Lot sizing is a core checkpoint for Production Planning & Manufacturing: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      MRP: "MRP is a core checkpoint for Production Planning & Manufacturing: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Line balancing":
        "Line balancing is a core checkpoint for Production Planning & Manufacturing: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Bottlenecks:
        "Bottlenecks is a core checkpoint for Production Planning & Manufacturing: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Capacity planning":
        "Capacity planning is a core checkpoint for Production Planning & Manufacturing: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Factories: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Lot sizing, MRP, and Line balancing; define units and data sources for each one.",
      "Build a small instance of Production Planning & Manufacturing that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Factories: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Semiconductors: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Food production: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Pharma: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Production Planning & Manufacturing because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Lot sizing as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "Factory Physics",
        url: "https://www.factoryphysics.com/",
        note: "Topic-specific source curated for Production Planning & Manufacturing.",
      },
      {
        title: "Google OR-Tools",
        url: "https://developers.google.com/optimization",
        note: "Practical toolkit for routing, assignment, CP-SAT, scheduling, flows, LP, and MIP.",
      },
      {
        title: "Pyomo Documentation",
        url: "https://pyomo.readthedocs.io/",
        note: "Python algebraic modeling documentation for optimization and production modeling workflows.",
      },
      {
        title: "MIT OCW 15.053 — Optimization Methods in Management Science",
        url: "https://ocw.mit.edu/courses/15-053-optimization-methods-in-management-science-spring-2013/",
        note: "Course materials for LP, IP, networks, nonlinear programming, and management science applications.",
      },
    ],
  },
  "service-operations": {
    overview: [
      "Service Operations & Staffing focuses on match people, capacity, and service levels under variable demand. In the map of OR, it connects Erlang models, Workforce management, SLAs to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Service OR combines forecasting, queues, staffing, scheduling, and simulation to run call centers, clinics, support desks, and field operations. The practical use case is clearest in Call centers, Healthcare clinics, Customer support, Field service, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "Erlang models":
        "Erlang models is a core checkpoint for Service Operations & Staffing: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Workforce management":
        "Workforce management is a core checkpoint for Service Operations & Staffing: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      SLAs: "SLAs is a core checkpoint for Service Operations & Staffing: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Appointment systems":
        "Appointment systems is a core checkpoint for Service Operations & Staffing: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Call centers: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Erlang models, Workforce management, and SLAs; define units and data sources for each one.",
      "Build a small instance of Service Operations & Staffing that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Call centers: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Healthcare clinics: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Customer support: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Field service: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Service Operations & Staffing because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Erlang models as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "MIT 15.072J Queues",
        url: "https://ocw.mit.edu/courses/15-072j-queues-theory-and-applications-spring-2006/",
        note: "Topic-specific source curated for Service Operations & Staffing.",
      },
      {
        title: "SimPy Documentation",
        url: "https://simpy.readthedocs.io/",
        note: "Process-based discrete-event simulation framework for Python.",
      },
      {
        title: "Google OR-Tools",
        url: "https://developers.google.com/optimization",
        note: "Practical toolkit for routing, assignment, CP-SAT, scheduling, flows, LP, and MIP.",
      },
    ],
  },
  "healthcare-or": {
    overview: [
      "Healthcare Operations Research focuses on improve access, flow, capacity, treatment, and health policy. In the map of OR, it connects Patient flow, Bed capacity, OR scheduling to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Healthcare OR models operating rooms, beds, clinics, organ allocation, radiation therapy, screening, emergency response, and public health policy. The practical use case is clearest in Hospitals, Public health, Radiation therapy, Emergency medicine, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "Patient flow":
        "Patient flow is a core checkpoint for Healthcare Operations Research: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Bed capacity":
        "Bed capacity is a core checkpoint for Healthcare Operations Research: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "OR scheduling":
        "OR scheduling is a core checkpoint for Healthcare Operations Research: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Treatment planning":
        "Treatment planning is a core checkpoint for Healthcare Operations Research: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Triage:
        "Triage is a core checkpoint for Healthcare Operations Research: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Hospitals: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Patient flow, Bed capacity, and OR scheduling; define units and data sources for each one.",
      "Build a small instance of Healthcare Operations Research that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Hospitals: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Public health: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Radiation therapy: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Emergency medicine: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Healthcare Operations Research because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Patient flow as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "INFORMS Health Applications Society",
        url: "https://connect.informs.org/healthapplications/home",
        note: "Topic-specific source curated for Healthcare Operations Research.",
      },
      {
        title: "MIT 15.071 Healthcare Analytics Examples",
        url: "https://ocw.mit.edu/courses/15-071-the-analytics-edge-spring-2017/",
        note: "Topic-specific source curated for Healthcare Operations Research.",
      },
      {
        title: "SimPy Documentation",
        url: "https://simpy.readthedocs.io/",
        note: "Process-based discrete-event simulation framework for Python.",
      },
      {
        title: "Google OR-Tools",
        url: "https://developers.google.com/optimization",
        note: "Practical toolkit for routing, assignment, CP-SAT, scheduling, flows, LP, and MIP.",
      },
      {
        title: "INFORMS Ethics Guidelines",
        url: "https://www.informs.org/About-INFORMS/Governance/INFORMS-Ethics-Guidelines",
        note: "Professional ethics guidance for analytics, models, and decision systems.",
      },
    ],
  },
  "energy-power-systems": {
    overview: [
      "Energy & Power Systems focuses on dispatch, commit, expand, and balance energy systems. In the map of OR, it connects Unit commitment, Economic dispatch, Optimal power flow to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Energy OR includes unit commitment, economic dispatch, transmission planning, storage, renewables integration, market design, and resilience. The practical use case is clearest in Electric grids, Renewables, Natural gas, Microgrids, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "Unit commitment":
        "Unit commitment is a core checkpoint for Energy & Power Systems: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Economic dispatch":
        "Economic dispatch is a core checkpoint for Energy & Power Systems: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Optimal power flow":
        "Optimal power flow is a core checkpoint for Energy & Power Systems: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Storage:
        "Storage is a core checkpoint for Energy & Power Systems: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Markets:
        "Markets is a core checkpoint for Energy & Power Systems: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Electric grids: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Unit commitment, Economic dispatch, and Optimal power flow; define units and data sources for each one.",
      "Build a small instance of Energy & Power Systems that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Electric grids: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Renewables: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Natural gas: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Microgrids: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Energy & Power Systems because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Unit commitment as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "PowerModels.jl",
        url: "https://lanl-ansi.github.io/PowerModels.jl/stable/",
        note: "Topic-specific source curated for Energy & Power Systems.",
      },
      {
        title: "NEOS Electricity and Power Case Studies",
        url: "https://neos-guide.org/case-studies/electricity-and-power/",
        note: "Topic-specific source curated for Energy & Power Systems.",
      },
      {
        title: "Pyomo Documentation",
        url: "https://pyomo.readthedocs.io/",
        note: "Python algebraic modeling documentation for optimization and production modeling workflows.",
      },
      {
        title: "JuMP Documentation",
        url: "https://jump.dev/JuMP.jl/stable/",
        note: "Julia modeling language documentation for linear, integer, conic, and nonlinear optimization.",
      },
      {
        title: "NEOS Guide",
        url: "https://neos-guide.org/guide/",
        note: "Authoritative optimization guide covering model classes, algorithms, and solver selection.",
      },
    ],
  },
  "finance-portfolio-risk": {
    overview: [
      "Finance, Portfolio & Risk focuses on allocate capital under risk, constraints, and market uncertainty. In the map of OR, it connects Mean-variance, CVaR, Transaction costs to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Financial OR models portfolios, asset-liability management, transaction costs, risk measures, trading, credit, and stress scenarios. The practical use case is clearest in Asset management, Banking, Insurance, Treasury, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "Mean-variance":
        "Mean-variance is a core checkpoint for Finance, Portfolio & Risk: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      CVaR: "CVaR is a core checkpoint for Finance, Portfolio & Risk: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Transaction costs":
        "Transaction costs is a core checkpoint for Finance, Portfolio & Risk: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Asset-liability":
        "Asset-liability is a core checkpoint for Finance, Portfolio & Risk: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Stress testing":
        "Stress testing is a core checkpoint for Finance, Portfolio & Risk: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Asset management: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Mean-variance, CVaR, and Transaction costs; define units and data sources for each one.",
      "Build a small instance of Finance, Portfolio & Risk that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Asset management: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Banking: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Insurance: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Treasury: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Finance, Portfolio & Risk because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Mean-variance as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "Portfolio Optimization — CVXPY Short Course",
        url: "https://www.cvxgrp.org/cvx_short_course/docs/applications/notebooks/portfolio_optimization.html",
        note: "Topic-specific source curated for Finance, Portfolio & Risk.",
      },
      {
        title: "CVXPY Short Course",
        url: "https://www.cvxgrp.org/cvx_short_course/",
        note: "Hands-on examples for disciplined convex modeling in Python.",
      },
      {
        title: "Stanford EE364A — Convex Optimization",
        url: "https://ee364a.stanford.edu/",
        note: "Convex analysis, duality, least squares, quadratic programs, and conic optimization.",
      },
      {
        title: "Convex Optimization — Boyd & Vandenberghe",
        url: "https://web.stanford.edu/~boyd/cvxbook/",
        note: "Open textbook for convex optimization theory and modeling examples.",
      },
    ],
  },
  "public-sector-policy": {
    overview: [
      "Public Sector & Policy OR focuses on allocate public resources with equity, transparency, and constraints. In the map of OR, it connects Resource allocation, Coverage, Equity to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Public-sector OR supports policing, emergency response, public health, infrastructure, education, defense, humanitarian logistics, and policy evaluation. The practical use case is clearest in Emergency response, Schools, Defense, Humanitarian logistics, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "Resource allocation":
        "Resource allocation is a core checkpoint for Public Sector & Policy OR: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Coverage:
        "Coverage is a core checkpoint for Public Sector & Policy OR: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Equity:
        "Equity is a core checkpoint for Public Sector & Policy OR: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Policy simulation":
        "Policy simulation is a core checkpoint for Public Sector & Policy OR: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Robustness:
        "Robustness is a core checkpoint for Public Sector & Policy OR: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Emergency response: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Resource allocation, Coverage, and Equity; define units and data sources for each one.",
      "Build a small instance of Public Sector & Policy OR that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Emergency response: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Schools: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Defense: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Humanitarian logistics: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Public Sector & Policy OR because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Resource allocation as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "INFORMS Public Sector OR Section",
        url: "https://connect.informs.org/psor/home",
        note: "Topic-specific source curated for Public Sector & Policy OR.",
      },
      {
        title: "INFORMS Ethics Guidelines",
        url: "https://www.informs.org/About-INFORMS/Governance/INFORMS-Ethics-Guidelines",
        note: "Professional ethics guidance for analytics, models, and decision systems.",
      },
      {
        title: "SimPy Documentation",
        url: "https://simpy.readthedocs.io/",
        note: "Process-based discrete-event simulation framework for Python.",
      },
      {
        title: "IFORS — What is Operations Research?",
        url: "https://www.ifors.org/what-is-or/",
        note: "International OR society framing of quantitative decision making and system improvement.",
      },
    ],
  },
  "telecom-cloud-computing": {
    overview: [
      "Telecom, Cloud & Computing Systems focuses on route traffic, allocate compute, and manage congestion. In the map of OR, it connects Network design, Congestion, Load balancing to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "OR models packet routing, network design, admission control, cloud capacity, load balancing, and service reliability. The practical use case is clearest in Telecom, Cloud platforms, CDNs, Data centers, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "Network design":
        "Network design is a core checkpoint for Telecom, Cloud & Computing Systems: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Congestion:
        "Congestion is a core checkpoint for Telecom, Cloud & Computing Systems: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Load balancing":
        "Load balancing is a core checkpoint for Telecom, Cloud & Computing Systems: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Admission control":
        "Admission control is a core checkpoint for Telecom, Cloud & Computing Systems: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Capacity:
        "Capacity is a core checkpoint for Telecom, Cloud & Computing Systems: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Telecom: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Network design, Congestion, and Load balancing; define units and data sources for each one.",
      "Build a small instance of Telecom, Cloud & Computing Systems that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Telecom: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Cloud platforms: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "CDNs: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Data centers: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Telecom, Cloud & Computing Systems because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Network design as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "Network Flows — Ahuja, Magnanti, Orlin",
        url: "https://www.pearson.com/en-us/subject-catalog/p/network-flows-theory-algorithms-and-applications/P200000003207/9780136175490",
        note: "Topic-specific source curated for Telecom, Cloud & Computing Systems.",
      },
      {
        title: "MIT OCW 15.072J — Queues: Theory and Applications",
        url: "https://ocw.mit.edu/courses/15-072j-queues-theory-and-applications-spring-2006/",
        note: "Queueing theory course material for service systems, congestion, and capacity analysis.",
      },
      {
        title: "Google OR-Tools",
        url: "https://developers.google.com/optimization",
        note: "Practical toolkit for routing, assignment, CP-SAT, scheduling, flows, LP, and MIP.",
      },
      {
        title: "SimPy Documentation",
        url: "https://simpy.readthedocs.io/",
        note: "Process-based discrete-event simulation framework for Python.",
      },
    ],
  },
  "sports-entertainment": {
    overview: [
      "Sports & Entertainment Scheduling focuses on build fair, feasible schedules for leagues, venues, and media. In the map of OR, it connects Round-robin, Breaks, Travel minimization to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Sports OR blends integer programming, constraints, travel minimization, fairness, broadcast value, venue calendars, and uncertainty. The practical use case is clearest in Sports leagues, Broadcasting, Venues, Tournaments, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "Round-robin":
        "Round-robin is a core checkpoint for Sports & Entertainment Scheduling: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Breaks:
        "Breaks is a core checkpoint for Sports & Entertainment Scheduling: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Travel minimization":
        "Travel minimization is a core checkpoint for Sports & Entertainment Scheduling: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Venue constraints":
        "Venue constraints is a core checkpoint for Sports & Entertainment Scheduling: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Fairness:
        "Fairness is a core checkpoint for Sports & Entertainment Scheduling: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Sports leagues: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Round-robin, Breaks, and Travel minimization; define units and data sources for each one.",
      "Build a small instance of Sports & Entertainment Scheduling that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Sports leagues: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Broadcasting: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Venues: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Tournaments: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Sports & Entertainment Scheduling because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Round-robin as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "RobinX Sports Timetabling",
        url: "https://robinxval.ugent.be/",
        note: "Topic-specific source curated for Sports & Entertainment Scheduling.",
      },
      {
        title: "Google OR-Tools",
        url: "https://developers.google.com/optimization",
        note: "Practical toolkit for routing, assignment, CP-SAT, scheduling, flows, LP, and MIP.",
      },
      {
        title: "MiniZinc Handbook",
        url: "https://www.minizinc.org/doc-latest/en/",
        note: "Constraint-programming modeling handbook with global constraints and search examples.",
      },
      {
        title: "MIPLIB",
        url: "https://miplib.zib.de/",
        note: "Benchmark library for mixed-integer programming models and solver comparisons.",
      },
    ],
  },
  "agriculture-natural-resources": {
    overview: [
      "Agriculture & Natural Resources focuses on plan land, water, harvest, conservation, and extraction. In the map of OR, it connects Land allocation, Water planning, Harvest scheduling to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "OR supports crop planning, irrigation, forestry, fisheries, mining, conservation, and climate adaptation with uncertainty and resource constraints. The practical use case is clearest in Farms, Forestry, Fisheries, Mining, Water systems, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "Land allocation":
        "Land allocation is a core checkpoint for Agriculture & Natural Resources: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Water planning":
        "Water planning is a core checkpoint for Agriculture & Natural Resources: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Harvest scheduling":
        "Harvest scheduling is a core checkpoint for Agriculture & Natural Resources: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Conservation:
        "Conservation is a core checkpoint for Agriculture & Natural Resources: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Extraction:
        "Extraction is a core checkpoint for Agriculture & Natural Resources: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Farms: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Land allocation, Water planning, and Harvest scheduling; define units and data sources for each one.",
      "Build a small instance of Agriculture & Natural Resources that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Farms: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Forestry: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Fisheries: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Mining: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Water systems: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Agriculture & Natural Resources because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Land allocation as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "INFORMS Ethics Guidelines",
        url: "https://www.informs.org/About-INFORMS/Governance/INFORMS-Ethics-Guidelines",
        note: "Professional ethics guidance for analytics, models, and decision systems.",
      },
      {
        title: "SimPy Documentation",
        url: "https://simpy.readthedocs.io/",
        note: "Process-based discrete-event simulation framework for Python.",
      },
      {
        title: "NEOS Guide",
        url: "https://neos-guide.org/guide/",
        note: "Authoritative optimization guide covering model classes, algorithms, and solver selection.",
      },
    ],
  },
  "analytics-ml": {
    overview: [
      "Analytics, Data Science & ML focuses on predict, then prescribe. In the map of OR, it connects Forecasting, Predict-then-optimize, Decision-focused learning to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Modern OR combines forecasting and machine learning with optimization: decision-focused learning, predict-then-optimize, bandits, and RL. The practical use case is clearest in adjacent OR applications, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      Forecasting:
        "Forecasting is a core checkpoint for Analytics, Data Science & ML: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Predict-then-optimize":
        "Predict-then-optimize is a core checkpoint for Analytics, Data Science & ML: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Decision-focused learning":
        "Decision-focused learning is a core checkpoint for Analytics, Data Science & ML: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Bandits:
        "Bandits is a core checkpoint for Analytics, Data Science & ML: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      RL: "RL is a core checkpoint for Analytics, Data Science & ML: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with a concrete case from the surrounding OR area: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Forecasting, Predict-then-optimize, and Decision-focused learning; define units and data sources for each one.",
      "Build a small instance of Analytics, Data Science & ML that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Use this topic as a building block in nearby OR models; connect it to a concrete decision before treating it as a standalone application area.",
    ],
    pitfalls: [
      "Applying Analytics, Data Science & ML because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Forecasting as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "Algorithms for Decision Making",
        url: "https://algorithmsbook.com/",
        note: "Open book covering planning, MDPs, reinforcement learning, and decision algorithms.",
      },
      {
        title: "CVXPY Short Course",
        url: "https://www.cvxgrp.org/cvx_short_course/",
        note: "Hands-on examples for disciplined convex modeling in Python.",
      },
      {
        title: "INFORMS — FAQs About O.R. & Analytics",
        url: "https://www.informs.org/Resource-Center/INFORMS-Student-Union/FAQs-About-O.R.-Analytics",
        note: "Use this for the professional definition of OR, analytics, decision support, and applied practice.",
      },
    ],
  },
  "industry-applications": {
    overview: [
      "OR in Industry focuses on where models meet practice across sectors. In the map of OR, it connects Airlines, Healthcare, Energy to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Airlines, healthcare, manufacturing, retail, energy, finance, telecom, transportation, public sector, sports, agriculture, and education all run on OR. The practical use case is clearest in adjacent OR applications, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      Airlines:
        "Airlines is a core checkpoint for OR in Industry: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Healthcare:
        "Healthcare is a core checkpoint for OR in Industry: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Energy:
        "Energy is a core checkpoint for OR in Industry: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Retail:
        "Retail is a core checkpoint for OR in Industry: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Finance:
        "Finance is a core checkpoint for OR in Industry: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Public sector":
        "Public sector is a core checkpoint for OR in Industry: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with a concrete case from the surrounding OR area: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Airlines, Healthcare, and Energy; define units and data sources for each one.",
      "Build a small instance of OR in Industry that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Use this topic as a building block in nearby OR models; connect it to a concrete decision before treating it as a standalone application area.",
    ],
    pitfalls: [
      "Applying OR in Industry because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Airlines as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "INFORMS Journal on Applied Analytics",
        url: "https://pubsonline.informs.org/journal/inte",
        note: "Applied OR case studies focused on implementation, adoption, and business impact.",
      },
      {
        title: "INFORMS — FAQs About O.R. & Analytics",
        url: "https://www.informs.org/Resource-Center/INFORMS-Student-Union/FAQs-About-O.R.-Analytics",
        note: "Use this for the professional definition of OR, analytics, decision support, and applied practice.",
      },
      {
        title: "Google OR-Tools",
        url: "https://developers.google.com/optimization",
        note: "Practical toolkit for routing, assignment, CP-SAT, scheduling, flows, LP, and MIP.",
      },
    ],
  },
  "software-solvers": {
    overview: [
      "Software tools and solvers are the production layer of OR. Modeling languages express decisions and constraints; solvers search for feasible, optimal, or high-quality solutions; deployment code turns those solutions into repeatable decisions.",
      "Tool choice should follow model structure, licensing, scale, latency, explainability, hardware fit, and integration needs rather than popularity alone. GPU-accelerated options such as NVIDIA cuOpt matter when LP, routing, QP, or supported beta model classes need fast large-scale solves.",
    ],
    conceptNotes: {
      "Modeling languages":
        "Modeling languages is a core checkpoint for Software Tools & Solvers: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Python/Julia/R libraries":
        "Python/Julia/R libraries is a core checkpoint for Software Tools & Solvers: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Commercial solvers":
        "Commercial solvers is a core checkpoint for Software Tools & Solvers: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Open-source solvers":
        "Open-source solvers is a core checkpoint for Software Tools & Solvers: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "GPU-accelerated solvers":
        "GPU-accelerated solvers such as NVIDIA cuOpt exploit parallel hardware for large LP, routing, QP, and selected beta MIP/QCQP/SOCP workflows.",
    },
    workflow: [
      "Start with a concrete case from the surrounding OR area: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Modeling languages, Python/Julia/R libraries, and Commercial solvers; define units and data sources for each one.",
      "Build a small instance of Software Tools & Solvers that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Use this topic as a building block in nearby OR models; connect it to a concrete decision before treating it as a standalone application area.",
    ],
    pitfalls: [
      "Applying Software Tools & Solvers because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Modeling languages as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "Google OR-Tools",
        url: "https://developers.google.com/optimization",
        note: "Topic-specific source curated for Software Tools & Solvers.",
      },
      {
        title: "NVIDIA cuOpt",
        url: "https://github.com/NVIDIA/cuopt",
        note: "Open-source CUDA GPU-accelerated decision optimization engine for LP/PDLP, VRP, QP, and beta MILP, QCQP, and SOCP.",
      },
      {
        title: "NVIDIA cuOpt Product Page",
        url: "https://www.nvidia.com/en-us/ai-data-science/products/cuopt/",
        note: "Official overview of cuOpt capabilities, integrations, deployment options, and use cases.",
      },
      {
        title: "NVIDIA Open-Sources cuOpt",
        url: "https://blogs.nvidia.com/blog/cuopt-open-source/",
        note: "Announcement and context for cuOpt as open-source GPU-accelerated optimization software.",
      },
      {
        title: "Pyomo",
        url: "https://www.pyomo.org/",
        note: "Topic-specific source curated for Software Tools & Solvers.",
      },
      {
        title: "JuMP",
        url: "https://jump.dev/JuMP.jl/stable/",
        note: "Topic-specific source curated for Software Tools & Solvers.",
      },
      {
        title: "HiGHS",
        url: "https://highs.dev/",
        note: "Topic-specific source curated for Software Tools & Solvers.",
      },
      {
        title: "Pyomo Documentation",
        url: "https://pyomo.readthedocs.io/",
        note: "Python algebraic modeling documentation for optimization and production modeling workflows.",
      },
    ],
  },
  "datasets-benchmarks": {
    overview: [
      "Datasets & Benchmarks focuses on standard problems to test, learn, and compete. In the map of OR, it connects MIPLIB, TSPLIB, OR-Library to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "MIPLIB, TSPLIB, OR-Library, PSPLIB, and more — canonical instances for benchmarking algorithms and learning. The practical use case is clearest in adjacent OR applications, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      MIPLIB:
        "MIPLIB is a core checkpoint for Datasets & Benchmarks: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      TSPLIB:
        "TSPLIB is a core checkpoint for Datasets & Benchmarks: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "OR-Library":
        "OR-Library is a core checkpoint for Datasets & Benchmarks: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      PSPLIB:
        "PSPLIB is a core checkpoint for Datasets & Benchmarks: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "VRP-REP":
        "VRP-REP is a core checkpoint for Datasets & Benchmarks: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with a concrete case from the surrounding OR area: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into MIPLIB, TSPLIB, and OR-Library; define units and data sources for each one.",
      "Build a small instance of Datasets & Benchmarks that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Use this topic as a building block in nearby OR models; connect it to a concrete decision before treating it as a standalone application area.",
    ],
    pitfalls: [
      "Applying Datasets & Benchmarks because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating MIPLIB as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "MIPLIB",
        url: "https://miplib.zib.de/",
        note: "Topic-specific source curated for Datasets & Benchmarks.",
      },
      {
        title: "TSPLIB",
        url: "http://comopt.ifi.uni-heidelberg.de/software/TSPLIB95/",
        note: "Topic-specific source curated for Datasets & Benchmarks.",
      },
      {
        title: "OR-Library",
        url: "http://people.brunel.ac.uk/~mastjjb/jeb/orlib/",
        note: "Topic-specific source curated for Datasets & Benchmarks.",
      },
      {
        title: "Google OR-Tools",
        url: "https://developers.google.com/optimization",
        note: "Practical toolkit for routing, assignment, CP-SAT, scheduling, flows, LP, and MIP.",
      },
      {
        title: "SCIP Optimization Suite",
        url: "https://www.scipopt.org/",
        note: "Open-source solver suite for MIP, MINLP, and constraint integer programming.",
      },
    ],
  },
  "prescriptive-analytics": {
    overview: [
      "Prescriptive Analytics focuses on move from insight to recommended action. In the map of OR, it connects Decision automation, Business rules, Optimization APIs to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Prescriptive analytics combines prediction, optimization, simulation, business rules, and human review to recommend operational decisions. The practical use case is clearest in Pricing, Workforce, Marketing, Logistics, Healthcare, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "Decision automation":
        "Decision automation is a core checkpoint for Prescriptive Analytics: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Business rules":
        "Business rules is a core checkpoint for Prescriptive Analytics: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Optimization APIs":
        "Optimization APIs is a core checkpoint for Prescriptive Analytics: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Human review":
        "Human review is a core checkpoint for Prescriptive Analytics: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Pricing: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Decision automation, Business rules, and Optimization APIs; define units and data sources for each one.",
      "Build a small instance of Prescriptive Analytics that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Pricing: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Workforce: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Marketing: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Logistics: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Healthcare: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Prescriptive Analytics because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Decision automation as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "MIT 15.071 The Analytics Edge",
        url: "https://ocw.mit.edu/courses/15-071-the-analytics-edge-spring-2017/",
        note: "Topic-specific source curated for Prescriptive Analytics.",
      },
      {
        title: "INFORMS — FAQs About O.R. & Analytics",
        url: "https://www.informs.org/Resource-Center/INFORMS-Student-Union/FAQs-About-O.R.-Analytics",
        note: "Use this for the professional definition of OR, analytics, decision support, and applied practice.",
      },
      {
        title: "Pyomo Documentation",
        url: "https://pyomo.readthedocs.io/",
        note: "Python algebraic modeling documentation for optimization and production modeling workflows.",
      },
      {
        title: "Google OR-Tools",
        url: "https://developers.google.com/optimization",
        note: "Practical toolkit for routing, assignment, CP-SAT, scheduling, flows, LP, and MIP.",
      },
    ],
  },
  "data-driven-optimization": {
    overview: [
      "Data-Driven Optimization focuses on learn decisions from data, not just parameters. In the map of OR, it connects Contextual optimization, DRO, Decision-focused learning to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Contextual optimization, predictive stochastic programming, decision-focused learning, and distributionally robust optimization connect ML and OR. The practical use case is clearest in Personalized medicine, Routing, Pricing, Inventory, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "Contextual optimization":
        "Contextual optimization is a core checkpoint for Data-Driven Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      DRO: "DRO is a core checkpoint for Data-Driven Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Decision-focused learning":
        "Decision-focused learning is a core checkpoint for Data-Driven Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Policy learning":
        "Policy learning is a core checkpoint for Data-Driven Optimization: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Personalized medicine: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Contextual optimization, DRO, and Decision-focused learning; define units and data sources for each one.",
      "Build a small instance of Data-Driven Optimization that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Personalized medicine: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Routing: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Pricing: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Inventory: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Data-Driven Optimization because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Contextual optimization as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "Contextual Optimization Survey",
        url: "https://arxiv.org/abs/2306.10374",
        note: "Topic-specific source curated for Data-Driven Optimization.",
      },
      {
        title: "Algorithms for Decision Making",
        url: "https://algorithmsbook.com/",
        note: "Open book covering planning, MDPs, reinforcement learning, and decision algorithms.",
      },
      {
        title: "CVXPY Short Course",
        url: "https://www.cvxgrp.org/cvx_short_course/",
        note: "Hands-on examples for disciplined convex modeling in Python.",
      },
      {
        title: "INFORMS Ethics Guidelines",
        url: "https://www.informs.org/About-INFORMS/Governance/INFORMS-Ethics-Guidelines",
        note: "Professional ethics guidance for analytics, models, and decision systems.",
      },
    ],
  },
  "digital-twins": {
    overview: [
      "Digital Twins & What-If Systems focuses on living simulations connected to operational data. In the map of OR, it connects State estimation, Scenario testing, Calibration to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Digital twins combine data pipelines, simulation, optimization, and monitoring to test decisions before changing a real system. The practical use case is clearest in Factories, Warehouses, Hospitals, Energy systems, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "State estimation":
        "State estimation is a core checkpoint for Digital Twins & What-If Systems: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Scenario testing":
        "Scenario testing is a core checkpoint for Digital Twins & What-If Systems: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Calibration:
        "Calibration is a core checkpoint for Digital Twins & What-If Systems: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Simulation:
        "Simulation is a core checkpoint for Digital Twins & What-If Systems: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Dashboards:
        "Dashboards is a core checkpoint for Digital Twins & What-If Systems: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Factories: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into State estimation, Scenario testing, and Calibration; define units and data sources for each one.",
      "Build a small instance of Digital Twins & What-If Systems that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Factories: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Warehouses: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Hospitals: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Energy systems: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Digital Twins & What-If Systems because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating State estimation as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "SimPy",
        url: "https://simpy.readthedocs.io/",
        note: "Topic-specific source curated for Digital Twins & What-If Systems.",
      },
      {
        title: "Pyomo Documentation",
        url: "https://pyomo.readthedocs.io/",
        note: "Python algebraic modeling documentation for optimization and production modeling workflows.",
      },
      {
        title: "INFORMS Journal on Applied Analytics",
        url: "https://pubsonline.informs.org/journal/inte",
        note: "Applied OR case studies focused on implementation, adoption, and business impact.",
      },
    ],
  },
  "solver-engineering": {
    overview: [
      "Solver Engineering & Deployment focuses on turning models into reliable production decision services. In the map of OR, it connects model APIs, warm starts, GPU acceleration, infeasibility diagnosis, monitoring, and fallback policies.",
      "Production OR needs data validation, decomposition, service APIs, hardware-aware solver selection, observability, latency budgets, and fallback behavior. GPU-accelerated solvers such as NVIDIA cuOpt can be valuable for large or latency-sensitive routing, LP, QP, and supported beta optimization workflows.",
    ],
    conceptNotes: {
      "Model APIs":
        "Expose optimization as a reliable service with typed inputs, diagnostics, and controlled outputs.",
      "Warm starts":
        "Warm starts is a core checkpoint for Solver Engineering & Deployment: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "GPU acceleration":
        "GPU acceleration is useful when solver kernels or heuristics can exploit massive parallelism, but it still needs model-structure checks, deployment planning, and fallback behavior.",
      "Infeasibility diagnosis":
        "Infeasibility diagnosis is a core checkpoint for Solver Engineering & Deployment: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Monitoring:
        "Monitoring is a core checkpoint for Solver Engineering & Deployment: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Fallbacks:
        "Fallbacks is a core checkpoint for Solver Engineering & Deployment: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Dispatch: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Model APIs, Warm starts, and Infeasibility diagnosis; define units and data sources for each one.",
      "Build a small instance of Solver Engineering & Deployment that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Dispatch: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Pricing: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Inventory: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Ad allocation: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Solver Engineering & Deployment because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Model APIs as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "Gurobi Guidelines for Numerical Issues",
        url: "https://docs.gurobi.com/projects/optimizer/en/current/concepts/numericguide.html",
        note: "Topic-specific source curated for Solver Engineering & Deployment.",
      },
      {
        title: "NVIDIA cuOpt Documentation",
        url: "https://docs.nvidia.com/cuopt/user-guide/latest/introduction.html",
        note: "Developer documentation for cuOpt APIs, supported model classes, and deployment modes.",
      },
      {
        title: "NVIDIA cuOpt Examples",
        url: "https://github.com/NVIDIA/cuopt-examples",
        note: "Examples for cuOpt service APIs, SDK workflows, and integrations with other optimization packages.",
      },
      {
        title: "Pyomo",
        url: "https://www.pyomo.org/",
        note: "Topic-specific source curated for Solver Engineering & Deployment.",
      },
      {
        title: "Pyomo Documentation",
        url: "https://pyomo.readthedocs.io/",
        note: "Python algebraic modeling documentation for optimization and production modeling workflows.",
      },
      {
        title: "JuMP Documentation",
        url: "https://jump.dev/JuMP.jl/stable/",
        note: "Julia modeling language documentation for linear, integer, conic, and nonlinear optimization.",
      },
      {
        title: "SCIP Optimization Suite",
        url: "https://www.scipopt.org/",
        note: "Open-source solver suite for MIP, MINLP, and constraint integer programming.",
      },
    ],
  },
  "responsible-or": {
    overview: [
      "Responsible OR & Decision Governance focuses on make automated decisions auditable, fair, and resilient. In the map of OR, it connects Fairness, Explainability, Auditability to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Responsible OR addresses fairness, transparency, human override, model risk, privacy, security, and operational accountability in decision systems. The practical use case is clearest in Credit, Healthcare, Public policy, Workforce, Pricing, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      Fairness:
        "Fairness is a core checkpoint for Responsible OR & Decision Governance: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Explainability:
        "Explainability is a core checkpoint for Responsible OR & Decision Governance: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Auditability:
        "Auditability is a core checkpoint for Responsible OR & Decision Governance: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Model risk":
        "Model risk is a core checkpoint for Responsible OR & Decision Governance: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Human override":
        "Human override is a core checkpoint for Responsible OR & Decision Governance: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Credit: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Fairness, Explainability, and Auditability; define units and data sources for each one.",
      "Build a small instance of Responsible OR & Decision Governance that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Credit: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Healthcare: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Public policy: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Workforce: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Pricing: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Responsible OR & Decision Governance because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Fairness as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "INFORMS Ethics Guidelines",
        url: "https://www.informs.org/About-INFORMS/Governance/INFORMS-Ethics-Guidelines",
        note: "Topic-specific source curated for Responsible OR & Decision Governance.",
      },
      {
        title: "IFORS — What is Operations Research?",
        url: "https://www.ifors.org/what-is-or/",
        note: "International OR society framing of quantitative decision making and system improvement.",
      },
      {
        title: "INFORMS Journal on Applied Analytics",
        url: "https://pubsonline.informs.org/journal/inte",
        note: "Applied OR case studies focused on implementation, adoption, and business impact.",
      },
    ],
  },
  "or-communication-change": {
    overview: [
      "OR Communication & Change focuses on get models trusted, adopted, and improved. In the map of OR, it connects Stakeholder analysis, Decision narratives, Pilots to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Great OR work includes stakeholder framing, explainable recommendations, experiments, rollout plans, training, and feedback loops. The practical use case is clearest in Consulting, Enterprise analytics, Public programs, Operations teams, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      "Stakeholder analysis":
        "Stakeholder analysis is a core checkpoint for OR Communication & Change: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Decision narratives":
        "Decision narratives is a core checkpoint for OR Communication & Change: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Pilots:
        "Pilots is a core checkpoint for OR Communication & Change: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "A/B tests":
        "A/B tests is a core checkpoint for OR Communication & Change: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Adoption:
        "Adoption is a core checkpoint for OR Communication & Change: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Consulting: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Stakeholder analysis, Decision narratives, and Pilots; define units and data sources for each one.",
      "Build a small instance of OR Communication & Change that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Consulting: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Enterprise analytics: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Public programs: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Operations teams: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying OR Communication & Change because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Stakeholder analysis as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "INFORMS Journal on Applied Analytics",
        url: "https://pubsonline.informs.org/journal/inte",
        note: "Topic-specific source curated for OR Communication & Change.",
      },
      {
        title: "INFORMS — FAQs About O.R. & Analytics",
        url: "https://www.informs.org/Resource-Center/INFORMS-Student-Union/FAQs-About-O.R.-Analytics",
        note: "Use this for the professional definition of OR, analytics, decision support, and applied practice.",
      },
      {
        title: "INFORMS Ethics Guidelines",
        url: "https://www.informs.org/About-INFORMS/Governance/INFORMS-Ethics-Guidelines",
        note: "Professional ethics guidance for analytics, models, and decision systems.",
      },
    ],
  },
  "behavioral-or": {
    overview: [
      "Behavioral OR & Human Decisions focuses on account for how people actually use, resist, and adapt to models. In the map of OR, it connects Bias, Trust, Incentives to decisions that must be modeled, solved, explained, and revised as evidence changes.",
      "Behavioral OR studies judgment, incentives, trust, cognitive bias, strategic response, and organizational adoption when analytical recommendations meet human decision-makers. The practical use case is clearest in Policy design, Workforce planning, Healthcare, Pricing, Operations change, where the method helps turn constraints and tradeoffs into a decision artifact someone can inspect.",
    ],
    conceptNotes: {
      Bias: "Bias is a core checkpoint for Behavioral OR & Human Decisions: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Trust:
        "Trust is a core checkpoint for Behavioral OR & Human Decisions: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Incentives:
        "Incentives is a core checkpoint for Behavioral OR & Human Decisions: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      Adoption:
        "Adoption is a core checkpoint for Behavioral OR & Human Decisions: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
      "Human-in-the-loop decisions":
        "Human-in-the-loop decisions is a core checkpoint for Behavioral OR & Human Decisions: define it concretely, attach units or rules where possible, and test whether stakeholders interpret it the same way.",
    },
    workflow: [
      "Start with Policy design: write the decision, time horizon, actors, and objective in operational language.",
      "Translate the problem into Bias, Trust, and Incentives; define units and data sources for each one.",
      "Build a small instance of Behavioral OR & Human Decisions that can be solved or simulated by hand inspection before using full production data.",
      "Compare the recommendation against a baseline policy, not just against mathematical optimality.",
      "Document assumptions, sensitivity results, and the conditions under which the recommendation should be revisited.",
    ],
    applicationNotes: [
      "Policy design: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Workforce planning: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Healthcare: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Pricing: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
      "Operations change: compare feasible policies, quantify the operating tradeoffs, and make the assumptions behind the recommendation visible.",
    ],
    pitfalls: [
      "Applying Behavioral OR & Human Decisions because the label sounds appropriate while leaving the actual decision boundary vague.",
      "Treating Bias as a technical detail instead of a modeling choice that affects the recommendation.",
      "Reporting one answer without showing sensitivity to demand, capacity, costs, or behavioral assumptions.",
      "Ignoring implementation details such as data quality, explainability, ownership, and how users will override bad recommendations.",
    ],
    resources: [
      {
        title: "Behavioral Operational Research",
        url: "https://link.springer.com/book/10.1057/9781137535511",
        note: "Topic-specific source curated for Behavioral OR & Human Decisions.",
      },
      {
        title: "INFORMS MSOM Society",
        url: "https://connect.informs.org/msom/home",
        note: "Topic-specific source curated for Behavioral OR & Human Decisions.",
      },
      {
        title: "INFORMS Ethics Guidelines",
        url: "https://www.informs.org/About-INFORMS/Governance/INFORMS-Ethics-Guidelines",
        note: "Professional ethics guidance for analytics, models, and decision systems.",
      },
      {
        title: "INFORMS Journal on Applied Analytics",
        url: "https://pubsonline.informs.org/journal/inte",
        note: "Applied OR case studies focused on implementation, adoption, and business impact.",
      },
      {
        title: "INFORMS — FAQs About O.R. & Analytics",
        url: "https://www.informs.org/Resource-Center/INFORMS-Student-Union/FAQs-About-O.R.-Analytics",
        note: "Use this for the professional definition of OR, analytics, decision support, and applied practice.",
      },
    ],
  },
  "forecasting-for-or": {
    overview: [
      "Forecasting for OR turns historical data, domain judgment, and uncertainty estimates into inputs for prescriptive models. The forecast is not the final answer; it is the demand, arrival, workload, price, or failure signal that drives a decision model.",
      "Textbook OR coverage often treats forecasting alongside inventory, capacity, simulation, and decision analysis because bad forecasts can make an otherwise correct optimization model recommend the wrong policy.",
    ],
    conceptNotes: {
      "Time series":
        "Time series methods use temporal patterns such as trend, seasonality, cycles, and autocorrelation to estimate future inputs.",
      "Causal models":
        "Causal or explanatory models connect forecasts to drivers such as price, promotions, weather, calendar effects, or policy changes.",
      "Forecast error":
        "Forecast error should be measured and carried into safety stock, staffing buffers, scenario design, and service-level calculations.",
      "Scenario generation":
        "Scenario generation converts point forecasts into plausible futures that stochastic, robust, and simulation models can evaluate.",
      Bias: "Bias matters because a systematically high or low forecast creates recurring overstaffing, stockouts, excess inventory, or capacity shortages.",
    },
    workflow: [
      "Identify which decision will consume the forecast and what time granularity it needs.",
      "Separate historical signal from calendar effects, interventions, outliers, and one-time shocks.",
      "Estimate both a central forecast and an error distribution or scenario set.",
      "Feed forecast uncertainty into the OR model rather than optimizing against a single point estimate.",
      "Backtest decisions, not only forecast accuracy, because the best statistical forecast is not always the best decision input.",
    ],
    applicationNotes: [
      "Inventory: forecast demand and error distributions to set replenishment quantities and safety stock.",
      "Staffing: forecast arrivals and workload to choose shifts, breaks, and capacity buffers.",
      "Revenue management: forecast demand by segment or fare class before controlling prices and availability.",
      "Capacity planning: forecast long-run load before investing in machines, rooms, vehicles, or infrastructure.",
      "Energy: forecast load, renewable output, and prices before dispatch and commitment decisions.",
    ],
    pitfalls: [
      "Optimizing against a point forecast while ignoring forecast error.",
      "Judging the forecast only by statistical accuracy instead of downstream decision quality.",
      "Training on historical data that no longer reflects pricing, policy, capacity, or customer behavior.",
      "Using aggregate forecasts when the OR model needs disaggregated demand by location, time, product, or class.",
    ],
    resources: [
      {
        title: "Forecasting: Principles and Practice",
        url: "https://otexts.com/fpp3/",
        note: "Open textbook for time-series forecasting methods and forecast evaluation.",
      },
      {
        title: "MIT 15.071 The Analytics Edge",
        url: "https://ocw.mit.edu/courses/15-071-the-analytics-edge-spring-2017/",
        note: "Analytics course material useful for predictive inputs to OR models.",
      },
    ],
  },
  "spreadsheet-algebraic-modeling": {
    overview: [
      "Spreadsheet and algebraic modeling is the bridge between a verbal business problem and a solver-ready OR formulation. It covers how variables, formulas, data tables, constraints, and objectives are organized so the model can be audited.",
      "The topic belongs in an OR map because many textbook examples and real projects begin in spreadsheets before moving to AMPL, Pyomo, JuMP, GAMS, or a production decision service.",
    ],
    conceptNotes: {
      "Spreadsheet models":
        "Spreadsheet models make assumptions visible through cells, formulas, ranges, and scenario tables, but they require disciplined layout and auditing.",
      "Algebraic notation":
        "Algebraic notation separates sets, indices, parameters, variables, constraints, and objectives so the model can scale beyond a toy spreadsheet.",
      "Solver add-ins":
        "Solver add-ins connect spreadsheet formulas to optimization engines and are useful for teaching, prototyping, and small decision models.",
      "Model auditing":
        "Model auditing checks units, formulas, hidden constants, infeasible assumptions, and whether decision cells really represent controllable actions.",
      "Data tables":
        "Data tables keep inputs separate from formulas and make sensitivity analysis, scenarios, and model maintenance easier.",
    },
    workflow: [
      "Lay out inputs, decision variables, calculations, constraints, and outputs in separate blocks.",
      "Write the same model algebraically to verify that the spreadsheet formulas represent the intended formulation.",
      "Run tiny cases with known answers before using real data.",
      "Inspect binding constraints, infeasibilities, and units after each solve.",
      "Move to a modeling language when the model needs sets, indices, version control, automation, or reliable deployment.",
    ],
    applicationNotes: [
      "Teaching: spreadsheets make the relationship between formulas and optimization models visible.",
      "Prototyping: quick spreadsheet models help stakeholders validate assumptions before engineering a full system.",
      "Budgeting: algebraic layouts clarify caps, allocations, priorities, and soft constraints.",
      "Planning: tabular scenarios make capacity, production, and staffing tradeoffs easier to inspect.",
      "Decision support: auditable prototypes help users trust a model before it becomes automated.",
    ],
    pitfalls: [
      "Mixing inputs, formulas, and outputs so errors are hard to find.",
      "Letting spreadsheet convenience dictate the mathematical formulation.",
      "Scaling a fragile prototype into production without tests or version control.",
      "Forgetting that a solver add-in can return a precise answer to the wrong model.",
    ],
    resources: [
      {
        title: "OpenSolver",
        url: "https://opensolver.org/",
        note: "Open-source spreadsheet optimization add-in.",
      },
      {
        title: "Pyomo",
        url: "https://www.pyomo.org/",
        note: "Python algebraic modeling system for optimization.",
      },
      {
        title: "JuMP",
        url: "https://jump.dev/JuMP.jl/stable/",
        note: "Julia algebraic modeling language for optimization.",
      },
    ],
  },
  "goal-programming": {
    overview: [
      "Goal programming models decisions with several aspiration levels instead of a single natural objective. The formulation introduces deviation variables and minimizes the unwanted shortfalls or excesses around each goal.",
      "It fills the gap between plain linear programming and broader multi-objective optimization, especially in managerial settings where targets are easier to negotiate than abstract weights.",
    ],
    conceptNotes: {
      "Aspiration levels":
        "Aspiration levels are target values for goals such as budget, service, output, risk, or staffing balance.",
      "Deviation variables":
        "Deviation variables measure how far a solution falls below or rises above each target.",
      "Preemptive priorities":
        "Preemptive priorities optimize higher-priority goals before lower-priority goals are considered.",
      "Weighted goals":
        "Weighted goals combine deviations in a single objective when priorities are tradeable.",
      "Soft constraints":
        "Soft constraints allow controlled violations that are penalized rather than declared infeasible.",
    },
    workflow: [
      "List the goals separately from the hard constraints.",
      "Define the aspiration level, direction, and units for each goal.",
      "Introduce positive and negative deviation variables where target misses matter.",
      "Choose whether goals are weighted together or ordered by priority.",
      "Review the achieved deviations with stakeholders rather than reporting only the objective value.",
    ],
    applicationNotes: [
      "Budgeting: balance cost limits against service, coverage, and equity targets.",
      "Workforce planning: trade off staffing cost, preference satisfaction, overtime, and coverage.",
      "Public policy: represent negotiated targets for access, fairness, cost, and emissions.",
      "Portfolio design: compare return, risk, liquidity, and allocation targets.",
      "Production planning: balance output, overtime, inventory, and service goals.",
    ],
    pitfalls: [
      "Choosing weights or priorities without stakeholder agreement.",
      "Comparing deviations measured in incompatible units without normalization.",
      "Treating a soft goal as if it were a hard feasibility requirement.",
      "Hiding tradeoffs by reporting only the aggregate weighted objective.",
    ],
    resources: [
      {
        title: "NEOS Guide — Multiobjective Optimization",
        url: "https://neos-guide.org/guide/types/multiobjective/",
        note: "Useful context for goal programming as a multi-objective modeling approach.",
      },
      {
        title: "MIT 15.053 Optimization Methods",
        url: "https://ocw.mit.edu/courses/15-053-optimization-methods-in-management-science-spring-2013/",
        note: "Introductory optimization course with management-science modeling material.",
      },
    ],
  },
  "postoptimal-parametric-analysis": {
    overview: [
      "Postoptimal and parametric analysis asks what happens after a model has been solved. It studies how objective coefficients, right-hand sides, bounds, and other parameters can move before the current basis or recommendation changes.",
      "This topic appears repeatedly in textbook LP coverage because OR recommendations are rarely consumed as one fixed answer; managers ask what capacity is worth, which assumptions matter, and how robust the plan is.",
    ],
    conceptNotes: {
      "Sensitivity ranges":
        "Sensitivity ranges describe intervals over which parts of the current LP solution interpretation remain valid.",
      "Shadow prices":
        "Shadow prices estimate the marginal value of relaxing a binding resource constraint inside its valid range.",
      "Parametric RHS":
        "Parametric right-hand-side analysis tracks how solutions change as capacities, demands, or requirements move.",
      "Parametric costs":
        "Parametric cost analysis tracks how objective changes affect the basis, reduced costs, and selected activities.",
      Reoptimization:
        "Reoptimization uses the previous solve as a starting point when model data changes.",
    },
    workflow: [
      "Identify which coefficients or constraints decision-makers are likely to challenge.",
      "Inspect binding constraints, slack, dual values, and reduced costs.",
      "Compute or estimate valid ranges before interpreting marginal values.",
      "Run targeted scenarios for changes outside the reliable sensitivity range.",
      "Translate the results into business statements about bottlenecks, breakpoints, and value of flexibility.",
    ],
    applicationNotes: [
      "Capacity planning: estimate the value of one more machine hour, vehicle, bed, or worker.",
      "Pricing: understand which cost or revenue changes would alter a plan.",
      "Budget changes: show when an additional dollar changes the optimal allocation.",
      "Scenario review: identify assumptions that deserve full re-solving rather than local interpretation.",
      "Management reports: explain why a recommendation is stable or fragile.",
    ],
    pitfalls: [
      "Using shadow prices after a parameter change has left the valid range.",
      "Assuming sensitivity output from an LP applies unchanged to a MIP.",
      "Reporting too many solver-table numbers without explaining the operating implication.",
      "Ignoring alternate optima and degeneracy when interpreting marginal values.",
    ],
    resources: [
      {
        title: "Linear Programming FAQ — NEOS Guide",
        url: "https://neos-guide.org/guide/types/linear-programming/",
        note: "Background on LP duality, sensitivity, and interpretation.",
      },
      {
        title: "MIT 15.053 Optimization Methods",
        url: "https://ocw.mit.edu/courses/15-053-optimization-methods-in-management-science-spring-2013/",
        note: "Course material for linear programming and management-science sensitivity analysis.",
      },
    ],
  },
  "markov-chains": {
    overview: [
      "Markov chains describe random movement among states when the next state depends on the current state. They are foundational for stochastic-process chapters in OR textbooks and sit naturally before Markov decision processes.",
      "They support steady-state, transient, and absorbing-state analysis for systems such as machine condition, customer migration, queues, inventory status, and service reliability.",
    ],
    conceptNotes: {
      "Transition matrix":
        "The transition matrix stores the probabilities of moving from each state to each possible next state.",
      "State classification":
        "State classification distinguishes recurrent, transient, absorbing, periodic, and communicating states.",
      "Steady state":
        "Steady-state probabilities describe long-run state occupancy when the chain satisfies the needed conditions.",
      "Absorbing states":
        "Absorbing states model endpoints such as failure, churn, completion, or default.",
      "First passage":
        "First-passage quantities estimate the time or probability of reaching a target state.",
    },
    workflow: [
      "Define states so the current state contains enough information to describe the next transition.",
      "Estimate or elicit transition probabilities and check that each row is valid.",
      "Decide whether the question is transient, steady-state, absorbing, or first-passage.",
      "Validate transition assumptions against historical movements or domain judgment.",
      "Use the Markov chain as a stochastic input to queues, reliability, inventory, or MDP models when decisions enter.",
    ],
    applicationNotes: [
      "Reliability: model degradation, repair, and failure states.",
      "Customer migration: estimate churn, retention, and segment movement.",
      "Inventory: describe stock-level transitions under random demand.",
      "Queues: analyze embedded state transitions at arrival or departure epochs.",
      "Web ranking: interpret random walks over linked pages or network states.",
    ],
    pitfalls: [
      "Defining states that omit important history, violating the Markov property.",
      "Using steady-state probabilities before checking whether a limiting distribution is meaningful.",
      "Estimating transition probabilities from sparse data without uncertainty checks.",
      "Confusing Markov chains with MDPs; chains describe random movement, MDPs add controllable actions.",
    ],
    resources: [
      {
        title: "MIT 6.262 Discrete Stochastic Processes",
        url: "https://ocw.mit.edu/courses/6-262-discrete-stochastic-processes-spring-2011/",
        note: "Lecture material on Markov chains and stochastic processes.",
      },
      {
        title: "ProbabilityCourse.com — Markov Chains",
        url: "https://www.probabilitycourse.com/chapter11/11_2_1_introduction.php",
        note: "Free explanatory notes on Markov chains.",
      },
    ],
  },
  "traveling-salesperson-problem": {
    overview: [
      "The Traveling Salesperson Problem asks for the least-cost tour that visits each location once and returns to the start. It is one of the central textbook examples in combinatorial optimization.",
      "TSP is more than a routing puzzle: it introduces subtour elimination, branch-and-cut, approximation, local search, and benchmark-driven algorithm engineering used across routing and sequencing problems.",
    ],
    conceptNotes: {
      "Hamiltonian tours":
        "Hamiltonian tours visit every node exactly once and return to the origin.",
      "Subtour elimination":
        "Subtour elimination constraints prevent disconnected smaller cycles from masquerading as a valid tour.",
      "Branch-and-cut":
        "Branch-and-cut combines enumeration with cutting planes to solve difficult TSP instances exactly.",
      "Local search":
        "Local search improves tours by moves such as 2-opt, 3-opt, swaps, and larger neighborhoods.",
      Approximation:
        "Approximation algorithms give performance guarantees for structured TSP variants such as metric TSP.",
    },
    workflow: [
      "Define nodes, travel costs, symmetry, and whether the route must return to the start.",
      "Choose a formulation or heuristic based on instance size and whether exact optimality matters.",
      "Eliminate subtours explicitly in exact models or use a solver designed for routing structure.",
      "Benchmark against simple nearest-neighbor or insertion heuristics before trusting complex methods.",
      "Extend to VRP when capacity, multiple vehicles, time windows, pickups, or depots enter.",
    ],
    applicationNotes: [
      "Routing: design short tours for service, inspection, or delivery stops.",
      "Sequencing: order jobs, tools, or tasks when changeover cost depends on sequence.",
      "Circuit layout: reduce travel or wiring distance in manufacturing and design settings.",
      "Warehousing: optimize picker paths and visit sequences.",
      "Tour planning: create efficient itineraries across locations.",
    ],
    pitfalls: [
      "Treating a VRP with capacity or time windows as a plain TSP.",
      "Forgetting subtour elimination in integer programming formulations.",
      "Comparing heuristics without consistent benchmark instances or cost definitions.",
      "Optimizing distance while ignoring service time, driver rules, or operational feasibility.",
    ],
    resources: [
      {
        title: "Concorde TSP Solver",
        url: "https://www.math.uwaterloo.ca/tsp/concorde.html",
        note: "Specialized exact TSP solver and reference implementation.",
      },
      {
        title: "TSPLIB",
        url: "http://comopt.ifi.uni-heidelberg.de/software/TSPLIB95/",
        note: "Classic benchmark library for TSP and related routing problems.",
      },
      {
        title: "Google OR-Tools Routing",
        url: "https://developers.google.com/optimization/routing",
        note: "Practical routing toolkit for TSP, VRP, and related variants.",
      },
    ],
  },
};
