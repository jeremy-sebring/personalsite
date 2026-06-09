// Work history data — verbatim from design-handoff prototype (data.jsx).
// Types and WORK array only; helper functions and CATS belong to other modules.

export type Category = "leadership" | "engineering" | "infra" | "support";

export interface Outcome {
  value: string;
  label: string;
}

export interface Role {
  title: string;
  cat: Category;
  start: string;         // "MM/YYYY"
  end: string | null;    // "MM/YYYY" or null (null = Present)
  summary: string;
  highlights?: string[];
  stack?: string[];
  outcomes?: Outcome[];
}

export interface Company {
  company: string;
  current?: boolean;     // emerald glow + "Now"; exactly one company has this
  note?: string;
  roles: Role[];         // newest first
}

export const WORK: Company[] = [
  {
    "company": "Strata Company",
    "current": true,
    "note": "",
    "roles": [
      {
        "title": "Principal Architect & Engineering Lead",
        "cat": "leadership",
        "start": "05/2024",
        "end": null,
        "summary": "Engineering lead and principal architect for a multi-tenant SaaS platform. Player-coach across architecture, AI development tooling, platform security, and hands-on full-stack build for a 10-person team.",
        "highlights": [
          "Stood up an AWS multi-tenant SaaS platform from scratch — OpenTofu IaC modules from day one, all async and batch processing on Temporal.",
          "Build the product hands-on as a player-coach in TypeScript, Fastify, React, Postgres, and Go.",
          "Wrote a shared data-validation library in Rust compiled to WebAssembly with FFI bindings, so one business-rule core serves Node, Python, and C# runtimes instead of being triplicated.",
          "Ship agentic LLM features into product, exposing frontend actions as LLM-callable tools so operators drive the application by chat.",
          "Lead AI development tooling across the team: Claude Code, Cursor, and internal skills and plugins that encode the codebase's API standards and workflows.",
          "Designed the platform's multi-tenant auth — org/user/role RBAC (now extending to relationship-based access control), M2M tokens with mTLS service identity, and least-privilege IAM scoping to AWS.",
          "Own the security and delivery backbone: Datadog observability, supply-chain integrity (SBOM, trivy image scanning, dependency hygiene), strict CI quality gates, and SOC 2 Type 2 audits as engineering owner.",
          "Built a feature-gating layer on OpenFeature — entitlements driven by tenant permissions and contract tier, no hardcoded plan logic.",
          "Led consolidation of a sprawling legacy Python estate (~50 Lambdas plus ECS tasks on FastAPI, async Postgres, SQLAlchemy, strict mypy) onto the platform's TypeScript/Go stack.",
          "Rebalanced the engineering org around the product's new technical direction, hiring and onboarding for technical and cultural fit while holding every delivery commitment through the transition."
        ],
        "stack": ["AWS","TypeScript","Go","Rust / WASM","React","Fastify","Postgres","Temporal","OpenTofu","Python / FastAPI","Datadog","Claude Code"],
        "outcomes": [
          { "value": "Elite", "label": "DORA delivery tier" },
          { "value": "10", "label": "person team" },
          { "value": "2×", "label": "SOC 2 Type 2 audits" }
        ]
      }
    ]
  },
  {
    "company": "Trava",
    "current": false,
    "note": "Series A cybersecurity startup (remote).",
    "roles": [
      {
        "title": "Software Engineering Manager",
        "cat": "leadership",
        "start": "08/2023",
        "end": "02/2024",
        "summary": "Led a distributed engineering team and shipped product as a player-coach, while standing up the team's first formal support and product-discovery practices.",
        "highlights": [
          "Led, coached, and mentored a geographically distributed 5-person team, lifting employee satisfaction by 20%.",
          "Established an outcomes-over-outputs culture within 2 months using discovery and validation — a 30% increase in productivity.",
          "Launched an engineering support process that consolidated customer issues and cut resolution time to 1 day within 4 weeks.",
          "Shipped 10+ features per sprint as a player-coach in React, Node.js, Express, TypeScript, and Go.",
          "Designed Trava's multi-tenant RBAC with authorization context propagating across services, plus M2M tokens and mTLS for service identity and least-privilege AWS IAM.",
          "Led the Stripe integration for subscription billing — plan, checkout, and webhook wiring."
        ],
        "stack": ["React","Node.js","Express","TypeScript","Go","GCP","Stripe","AWS IAM"],
        "outcomes": [
          { "value": "+20%", "label": "employee satisfaction" },
          { "value": "+30%", "label": "team productivity" },
          { "value": "1 day", "label": "issue resolution time" }
        ]
      }
    ]
  },
  {
    "company": "La Vette",
    "current": false,
    "note": "Post-seed video-dating platform (remote).",
    "roles": [
      {
        "title": "Principal Full Stack Engineer (Head of Engineering)",
        "cat": "engineering",
        "start": "06/2022",
        "end": "06/2023",
        "summary": "Built and led the engineering function for a video-dating platform end-to-end — web, mobile, backend, ML, and ops.",
        "highlights": [
          "Led frontend, backend, and mobile teams (10+ contract engineers) to architect and ship the platform on agile cycles.",
          "Designed and deployed a distributed microservice backend on Kubernetes, Helm, AWS, and Terraform — 40% scalability and performance gain.",
          "Built an in-transit video transcoding service for upload, transcoding, and distribution to web and mobile — playback errors cut from 30% to 0.5%.",
          "Architected data pipelines for user-behavior analytics, lifting retention, satisfaction, and acquisition by 11%.",
          "Architected and tested an ML matching model for better user pairings.",
          "Solo-implemented authentication spanning iOS, the React web app, and Node.js backend microservices.",
          "At end of runway, solely maintained the iOS app, React frontend, Node.js microservice backend, and Python workflows."
        ],
        "stack": ["Kubernetes","Helm","AWS","Terraform","React","Node.js","Swift / iOS","Python","Machine Learning","Stripe"],
        "outcomes": [
          { "value": "30% → 0.5%", "label": "video playback errors" },
          { "value": "+40%", "label": "scalability & performance" },
          { "value": "+11%", "label": "retention & acquisition" }
        ]
      }
    ]
  },
  {
    "company": "Guaranty Support Inc",
    "current": false,
    "note": "Managed-cloud and migration consulting practice; concurrent with NCIGF.",
    "roles": [
      {
        "title": "Senior Solutions Architect (CTO)",
        "cat": "engineering",
        "start": "01/2020",
        "end": "06/2022",
        "summary": "Built and led a managed-cloud and migration consulting practice, including the largest insolvent-insurer data transfers in the firm's history.",
        "highlights": [
          "Led the technical effort to transfer 200,000+ claims, 25M+ records, and 25TB+ of claim and policy images from 10+ insolvent companies.",
          "Architected an ETL solution in Django, Python, Celery, Bonobo, and Luigi to extract, transform, and securely transfer claims to multiple organizations.",
          "Architected and led 15 Django/Python web-app projects from first contact through delivery — none late, all under budget.",
          "Grew revenue by $100K+ ARR in year one founding a managed cloud-hosting and migration practice; qualified to Microsoft Silver Partner.",
          "Co-created and led a cybersecurity consulting and remediation practice that hardened multiple client organizations."
        ],
        "stack": ["Python","Django","Pandas","Go","Postgres","Azure","AWS","VMware","Celery","Luigi"],
        "outcomes": [
          { "value": "25 TB+", "label": "claim & policy images migrated" },
          { "value": "25M+", "label": "records transferred" },
          { "value": "$100K+", "label": "ARR in year one" }
        ]
      }
    ]
  },
  {
    "company": "National Conference of Insurance Guaranty Funds (NCIGF)",
    "current": false,
    "note": "Promoted from Helpdesk through DevOps to Director over ~5 years.",
    "roles": [
      {
        "title": "Director of Information Technology Services",
        "cat": "leadership",
        "start": "08/2021",
        "end": "06/2022",
        "summary": "Stepped up from DevOps to direct the IT function — a five-person team — modernizing people-ops while extending the cloud and security program.",
        "highlights": [
          "Directed a five-member engineering team maintaining and upgrading the company's full infrastructure.",
          "Reconfigured team structure and roles, boosting productivity 20% during periods of technical absence.",
          "Ran an RFP and selected a new Managed Detection and Response provider, cutting departmental spend 5%.",
          "Established a one-on-one system for unblocking work, performance feedback, and growth planning.",
          "Built a cybersecurity questionnaire for member organizations in Flask, Python, and Confluence."
        ],
        "stack": ["Leadership","Information Security","Agile","Lean","Kanban","Flask","Python"],
        "outcomes": [
          { "value": "+20%", "label": "productivity during absences" },
          { "value": "-5%", "label": "departmental spend" }
        ]
      },
      {
        "title": "DevOps Engineer",
        "cat": "infra",
        "start": "04/2019",
        "end": "08/2021",
        "summary": "Modernized NCIGF's infrastructure from on-prem VMware to Azure — fully automated CI/CD, MDM-based device management, and a Prometheus/Grafana observability stack.",
        "highlights": [
          "Architected and ran a multi-stage migration from on-prem VMware vCenter to Azure — final DB migration with no unplanned downtime and zero data loss.",
          "Built a fully automated continuous delivery pipeline: 30% faster commits, deployment time from 4 hours to 15 minutes for critical services.",
          "Migrated the virtual firewall from Fortinet to Palo Alto — 80% less firewall management time and an 8x throughput increase.",
          "Led the move from domain controllers and GPOs to MDM via Intune — laptop provisioning from 3 days to under 24 hours.",
          "Stood up Prometheus + Grafana monitoring — 90% fewer manual admin requests, 60% better mean time to repair."
        ],
        "stack": ["Azure","VMware","CI/CD","Microsoft Intune","Palo Alto","SaltStack","Python","Prometheus","Grafana"],
        "outcomes": [
          { "value": "4h → 15m", "label": "deployment time" },
          { "value": "-80%", "label": "firewall management time" },
          { "value": "3d → <24h", "label": "laptop provisioning" }
        ]
      },
      {
        "title": "Helpdesk Technician",
        "cat": "support",
        "start": "07/2017",
        "end": "05/2019",
        "summary": "First-line IT support and Windows administration — the start of a five-year run that grew into the DevOps and Director roles.",
        "highlights": [],
        "stack": ["IT Support","Windows Administration"],
        "outcomes": []
      }
    ]
  },
  {
    "company": "Cisco Meraki",
    "current": false,
    "note": "",
    "roles": [
      {
        "title": "Technical Support Engineer Intern",
        "cat": "support",
        "start": "06/2016",
        "end": "08/2016",
        "summary": "Summer internship in technical support and networking.",
        "highlights": [],
        "stack": ["Networking","Customer Support"],
        "outcomes": []
      }
    ]
  },
  {
    "company": "Purdue Research Foundation",
    "current": false,
    "note": "",
    "roles": [
      {
        "title": "IT Intern",
        "cat": "support",
        "start": "10/2013",
        "end": "05/2014",
        "summary": "IT support internship.",
        "highlights": [],
        "stack": [],
        "outcomes": []
      }
    ]
  },
  {
    "company": "Litchfield Community School District #12",
    "current": false,
    "note": "",
    "roles": [
      {
        "title": "Technology Intern",
        "cat": "support",
        "start": "04/2012",
        "end": "01/2014",
        "summary": "Technology support internship.",
        "highlights": [],
        "stack": [],
        "outcomes": []
      }
    ]
  }
];
