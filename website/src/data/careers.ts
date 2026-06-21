export interface Career {
  id: string;
  title: string;
  summary: string;
  methods: string[];
  tools: string[];
  path: string;
  industries: string[];
}

export const careers: Career[] = [
  {
    id: "or-analyst",
    title: "Operations Research Analyst",
    summary:
      "Builds analytical models that improve operational decisions across a range of business problems.",
    methods: ["Linear & integer programming", "Simulation", "Statistics"],
    tools: ["Python", "Pyomo", "Gurobi/CPLEX", "Excel"],
    path: "Beginner OR Path → Optimization Practitioner Path",
    industries: ["Government", "Consulting", "Manufacturing", "Transportation"],
  },
  {
    id: "optimization-scientist",
    title: "Optimization Scientist",
    summary:
      "Designs and solves large-scale mathematical programs for high-impact decision systems.",
    methods: ["MIP", "Convex optimization", "Decomposition", "Heuristics"],
    tools: ["JuMP", "Gurobi", "CPLEX", "HiGHS"],
    path: "Optimization Practitioner Path → Researcher / Advanced Path",
    industries: ["Tech", "Logistics", "Energy", "Airlines"],
  },
  {
    id: "supply-chain-analyst",
    title: "Supply Chain Analyst",
    summary: "Plans inventory, sourcing, and distribution across complex multi-echelon networks.",
    methods: ["Inventory theory", "Network flows", "Forecasting"],
    tools: ["Python", "SAP/Kinaxis", "OR-Tools"],
    path: "Beginner OR Path → Supply Chain & Logistics Path",
    industries: ["Retail", "CPG", "Pharma", "Manufacturing"],
  },
  {
    id: "data-scientist-or",
    title: "Data Scientist (OR focus)",
    summary: "Combines predictive models with optimization to drive automated decisions.",
    methods: ["ML", "Forecasting", "Predict-then-optimize"],
    tools: ["Python", "PyTorch", "CVXPY", "OR-Tools"],
    path: "Analytics + OR Path",
    industries: ["Tech", "Finance", "E-commerce"],
  },
  {
    id: "decision-scientist",
    title: "Decision Scientist",
    summary: "Structures complex business decisions under uncertainty and multiple objectives.",
    methods: ["Decision analysis", "Simulation", "Bayesian methods"],
    tools: ["Python", "R", "Excel", "@RISK"],
    path: "Stochastic Systems Path + Analytics + OR Path",
    industries: ["Consulting", "Healthcare", "Energy", "Public sector"],
  },
  {
    id: "optimization-engineer",
    title: "Optimization Engineer",
    summary:
      "Implements optimization models as reliable software components for planning, dispatch, pricing, and allocation systems.",
    methods: ["MIP", "Constraint programming", "Solver engineering", "Validation"],
    tools: ["Python", "FastAPI", "Pyomo/JuMP", "Gurobi/CPLEX/HiGHS"],
    path: "Optimization Practitioner Path → Modern Decision Systems Path",
    industries: ["Tech", "Logistics", "Retail", "Energy"],
  },
  {
    id: "revenue-management",
    title: "Revenue Management Analyst",
    summary: "Sets prices, availability, and capacity controls under demand uncertainty.",
    methods: ["Dynamic pricing", "Choice models", "DP"],
    tools: ["Python", "SQL", "PROS/IDeaS"],
    path: "Optimization Practitioner Path → Analytics + OR Path",
    industries: ["Airlines", "Hotels", "Retail", "Car rental"],
  },
  {
    id: "logistics-optimization-engineer",
    title: "Logistics Optimization Engineer",
    summary: "Designs routing, dispatch, and fleet algorithms that move goods and people.",
    methods: ["VRP", "Scheduling", "Heuristics", "CP-SAT"],
    tools: ["OR-Tools", "Python", "Postgres/PostGIS"],
    path: "Supply Chain & Logistics Path",
    industries: ["E-commerce", "Delivery", "Ride-hail", "Trucking"],
  },
  {
    id: "transportation-planner",
    title: "Transportation Planner / Logistics Scientist",
    summary:
      "Optimizes routing, mobility, fleet operations, network design, and transport policy.",
    methods: ["Network optimization", "Vehicle routing", "Simulation", "Demand modeling"],
    tools: ["Python", "GIS", "OR-Tools", "Traffic simulation tools"],
    path: "Supply Chain & Logistics Path → Healthcare, Energy & Public Systems Path",
    industries: ["Public transit", "Freight", "Mobility", "Government"],
  },
  {
    id: "simulation-analyst",
    title: "Simulation Analyst",
    summary: "Builds discrete-event and agent-based models to test policies before they ship.",
    methods: ["Discrete-event simulation", "Monte Carlo", "Statistical analysis"],
    tools: ["AnyLogic", "Arena", "SimPy", "Simio"],
    path: "Stochastic Systems Path",
    industries: ["Healthcare", "Manufacturing", "Defense", "Logistics"],
  },
  {
    id: "industrial-engineer",
    title: "Industrial Engineer",
    summary: "Improves processes, layouts, and workflows in physical operations.",
    methods: ["Lean", "Queueing", "Scheduling", "Statistics"],
    tools: ["Excel", "Minitab", "Python", "Simulation tools"],
    path: "Beginner OR Path → Supply Chain & Logistics Path",
    industries: ["Manufacturing", "Hospitals", "Warehousing"],
  },
  {
    id: "research-scientist",
    title: "Research Scientist",
    summary: "Develops new algorithms, theory, and decision systems in industry labs or academia.",
    methods: ["Convex analysis", "Integer programming", "DP", "Stochastic programming"],
    tools: ["JuMP", "Python", "Gurobi", "LaTeX"],
    path: "Researcher / Advanced Path",
    industries: ["Academia", "Tech research labs", "National labs"],
  },
  {
    id: "academic-researcher",
    title: "Academic Researcher",
    summary:
      "Develops and teaches new OR models, algorithms, theory, and applications through university research.",
    methods: ["Theory", "Computational experiments", "Mathematical modeling", "Peer review"],
    tools: ["Julia", "Python", "LaTeX", "Benchmark libraries"],
    path: "Researcher / Advanced Path",
    industries: ["Universities", "Research institutes", "Policy labs"],
  },
  {
    id: "quantitative-researcher-financial-engineer",
    title: "Quantitative Researcher / Financial Engineer",
    summary:
      "Applies stochastic models, optimization, simulation, and risk analysis to portfolios, trading, insurance, and treasury decisions.",
    methods: ["Portfolio optimization", "Stochastic processes", "Risk measures", "Simulation"],
    tools: ["Python", "R", "CVXPY", "MOSEK/Gurobi"],
    path: "Stochastic Systems Path → Optimization Practitioner Path",
    industries: ["Asset management", "Banking", "Insurance", "Trading"],
  },
  {
    id: "healthcare-operations-analyst",
    title: "Healthcare Operations Analyst",
    summary:
      "Improves patient flow, capacity, access, scheduling, and treatment-planning decisions.",
    methods: ["Queueing", "Simulation", "Scheduling", "Optimization"],
    tools: ["Python", "SimPy", "AnyLogic", "Gurobi/CPLEX"],
    path: "Healthcare, Energy & Public Systems Path",
    industries: ["Hospitals", "Health systems", "Public health", "Pharma"],
  },
  {
    id: "energy-systems-optimizer",
    title: "Energy Systems Optimizer",
    summary:
      "Models dispatch, unit commitment, storage, expansion, market, and resilience decisions.",
    methods: ["MIP", "Stochastic programming", "Robust optimization", "Optimal power flow"],
    tools: ["JuMP", "Pyomo", "PowerModels.jl", "Gurobi/HiGHS"],
    path: "Optimization Practitioner Path → Healthcare, Energy & Public Systems Path",
    industries: ["Utilities", "Renewables", "Grid operators", "Energy trading"],
  },
  {
    id: "public-sector-or-analyst",
    title: "Public Sector OR Analyst",
    summary:
      "Allocates public resources under cost, coverage, equity, reliability, and policy constraints.",
    methods: ["Facility location", "Multi-objective optimization", "Simulation", "Risk analysis"],
    tools: ["Python", "R", "GIS", "OR-Tools"],
    path: "Healthcare, Energy & Public Systems Path",
    industries: ["Government", "Defense", "Emergency response", "NGOs"],
  },
  {
    id: "decision-systems-engineer",
    title: "Decision Systems Engineer",
    summary:
      "Turns optimization and simulation models into monitored production decision services.",
    methods: ["Solver engineering", "Prescriptive analytics", "Validation", "Responsible OR"],
    tools: ["Python", "FastAPI", "Pyomo/JuMP", "Observability tools"],
    path: "Modern Decision Systems Path",
    industries: ["Tech", "E-commerce", "Logistics", "Finance"],
  },
];
