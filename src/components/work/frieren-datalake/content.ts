// src/components/work/frieren-datalake/content.ts

const BASE = "/media/workterm/nasdaq-verafin/datalake-developer-intern";

export const media = {
  logo: `${BASE}/logo.png`,
  me: `${BASE}/me.png`,
  snapshot: `${BASE}/snapshot.png`,
  orgChart: `${BASE}/org-chart.png`,
  worldMap: `${BASE}/frieren/world-map.png`,
  heroScroll: `${BASE}/frieren/hero-scroll.png`,
  openBook: `${BASE}/frieren/open-book.png`,

  scenes: {
    castle: `${BASE}/frieren/castle.png`,
    bridge: `${BASE}/frieren/bridge.png`,
    ruins: `${BASE}/frieren/ruins.png`,
    sunset: `${BASE}/frieren/sunset-valley.png`,
    cabin: `${BASE}/frieren/forest-cabin.png`,
    shrine: `${BASE}/frieren/forest-shrine.png`,
  },
};

export const experience = {
  company: "Nasdaq Verafin",
  role: "Datalake Developer Intern",
period: "May 2024 - Aug 2024 & Jan 2025 - Aug 2025",
location: "18 Hebron Way, St. John's, NL, Canada",
summary:
  "Contributed to an enterprise lakehouse platform that ingested, transformed, validated, and prepared high-volume financial data into standardized, linked, warehouse-ready datasets.",
longSummary:
  "I worked on the warehouse data preparation layer of a regulated fintech lakehouse platform. The work focused on source-domain transformations, schema standardization, cross-domain data splitting, object identifier linking, incremental/versioned outputs, and validation workflows that protected data quality, lineage, and relationship integrity across pipeline stages.",
};

export const highlights = [
  {
    title: "Warehouse Data Preparation",
    subtitle: "Standardized, linked outputs",
    type: "Primary Record",
    tags: ["Scala", "Spark", "Schema Mapping"],
    description:
      "Converted transformed source-domain data into standardized warehouse-ready records with consistent schemas, record keys, and version/precombine fields.",
  },
  {
    title: "Cross-Domain Splitting",
    subtitle: "Embedded records to target domains",
    type: "Relationship Seal",
    tags: ["Normalization", "Object IDs", "Relationships"],
    description:
      "Built and validated split logic that extracted embedded domain data, mapped it to the correct target schema, and preserved links back to the source records.",
  },
  {
    title: "Validation and Reconciliation",
    subtitle: "Tests, fixtures, and notebook checks",
    type: "Integrity Ward",
    tags: ["Unit Tests", "Pipeline Tests", "Jupyter", "SQL"],
    description:
      "Checked schemas, counts, null patterns, duplicates, identifiers, relationships, dates, and lake-versus-database outputs to catch transformation issues early.",
  },
  {
    title: "Cloud Debugging and CI/CD",
    subtitle: "Distributed jobs and build pipelines",
    type: "Operations Codex",
    tags: ["AWS", "EMR/Spark", "CloudWatch", "Jenkins"],
    description:
      "Investigated failed builds and cloud pipeline runs by reading CI output, execution histories, Spark job details, and distributed processing logs.",
  },
];

export const techStack = [
  {
    group: "Languages",
    description: "Implementation and validation languages used across data engineering workflows.",
    items: ["Scala", "Python", "SQL", "Java"],
  },
  {
    group: "Cloud and Orchestration",
    description: "AWS services used for object storage, orchestration, monitoring, metadata, and managed compute.",
    items: ["AWS S3", "AWS Lambda", "AWS EMR", "Step Functions", "CloudWatch"],
  },
  {
    group: "Data Processing and Storage",
    description: "Distributed processing and lakehouse-oriented storage patterns for large financial datasets.",
    items: ["Apache Spark", "Apache Parquet", "Hudi-style storage", "AWS Glue"],
  },
  {
    group: "Warehouse and Validation",
    description: "Tools and practices used to confirm reliable warehouse-ready outputs.",
    items: ["PostgreSQL/RDS", "Jupyter notebooks", "Fixture tests", "Lake-to-database reconciliation"],
  },
  {
    group: "Engineering Workflow",
    description: "Professional development practices used to ship and validate changes safely.",
    items: ["Git", "Gradle", "Jenkins", "Pull requests", "Code review"],
  },
];

export const pipelineSteps = [
  {
    title: "Ingest",
    landmark: "Origin Camp",
    description:
      "Raw financial records from external systems entered cloud object storage as the starting point for staged processing.",
  },
  {
    title: "Normalize",
    landmark: "Rune Forge",
    description:
      "Source-specific fields were mapped into common schemas with consistent names, types, date formats, numeric values, and identifiers.",
  },
  {
    title: "Link and Split",
    landmark: "Bridge of Records",
    description:
      "Object identifiers preserved relationships while embedded cross-domain data was extracted into the correct warehouse domains.",
  },
  {
    title: "Validate",
    landmark: "Watchtower",
    description:
      "Automated tests and notebook checks compared schemas, record counts, nulls, duplicates, dates, relationships, and expected fixture outputs.",
  },
  {
    title: "Prepare",
    landmark: "Ende Vault",
    description:
      "Final outputs were prepared as clean, linked, version-aware lakehouse datasets for downstream analytics and compliance-related analysis.",
  },
];

export const impact = [
  {
    value: "Lakehouse",
    label: "Platform contribution",
    description: "Supported staged ingestion, transformation, validation, and warehouse preparation for financial data.",
  },
  {
    value: "Schemas",
    label: "Standardized output",
    description: "Mapped heterogeneous source records into consistent warehouse-ready structures.",
  },
  {
    value: "Object IDs",
    label: "Relationship integrity",
    description: "Preserved links across source and target domains for reliable downstream joins and lineage.",
  },
  {
    value: "Tests",
    label: "Regression safety",
    description: "Used fixture, component, pipeline, notebook, and reconciliation checks to validate data quality.",
  },
];

export const galleryItems = [
  {
    src: media.snapshot,
    alt: "Nasdaq Verafin datalake work snapshot",
    title: "Project Snapshot",
    description: "A visual record connected to the work term experience.",
    variant: "feature",
  },
  {
    src: media.me,
    alt: "Work term memory",
    title: "Work Term Memory",
    description: "A personal image from the internship experience.",
    variant: "portrait",
  },
  {
    src: media.logo,
    alt: "Nasdaq Verafin logo",
    title: "Company Seal",
    description: "The organization behind the experience.",
    variant: "seal",
  },
] as const;

export const reflection = {
  body:
  "This internship strengthened my understanding of enterprise data engineering beyond isolated scripts. I learned how careful schema design, relationship preservation, staged validation, CI/CD discipline, and cloud debugging all work together to make financial data reliable enough for downstream analytics.",  primaryAction: {
    label: "Back to Work",
    href: "/work",
  },
  secondaryAction: {
    label: "View Resume",
    href: "/resume",
  },
};