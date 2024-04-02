/* eslint-disable */

export type TagType = { id: string; name: string; display: boolean };
export type TagsType = {
  id: string;
  name: string;
  tags: TagType[];
};
export type TagsByCategoryType = {
  [key: string]: TagsType;
};

export type FeatureType = {
  heading: string;
  items: string[];
};

export type ImageType = {
  original: string;
  originalAlt: string;
  thumbnail: string;
};

export type ProjectType = {
  id: string;
  name: string;
  date: string;
  description: string | null;
  features: FeatureType[];
  url: string | null;
  images: ImageType[];
  logo: string;
  employer: {
    id: string;
    name: string;
    logo: string;
  };
  client: {
    id: string;
    name: string;
    logo: string | null;
  };
  tags: string[];
  categories: string[];
  tagsByCategory: TagsByCategoryType;
  displayName: string;
};

export type LocalProjectType = {
  id: string;
  name: string;
  date?: string | null;
  description?: string | null;
  url?: string | null;
  display?: boolean | null;
  logo?: string | null;
  internal?: string | null;
  createdAt: string;
  updatedAt: string;
  formattedFeatures?: FeatureType[];
  formattedImages?: ImageType[];
  displayName?: string;
  tagsByCategory?: TagsByCategoryType;
  tags: string[];
  categories?: string[];
  employer?: {
    id?: string;
    name?: string;
    logo?: string;
  };
  client?: {
    id?: string;
    name?: string;
    logo?: string | null;
  };
};

const projects: ProjectType[] = [
  {
    id: "margarita",
    name: "Margarita",
    date: "2023-02-15",
    description:
      "Margarita (Quantum Metrics Design System)\n\nWorked across teams and departments to create the foundations for Margarita Design System.",
    features: [
      {
        heading: "Responsible For",
        items: [
          "Worked with User Experience Research team to survey engineers about the current ecosystem and pain points  ",
          "Planned and executed solutions for process, documentation, communication, component explorer, design guidelines, component library, Figma integration, automation, developer experience and more...  ",
          "Built accessible, extensible, testable, and reusable components for use by engineers",
          "Shared progress and maintained feedback loop with engineering department",
        ],
      },
    ],
    url: null,
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/margarita/screencapture-margarita-docs-qm-thejsgal-2023-03-04-12_44_39.png",
        originalAlt: "Margarita",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/margarita/screencapture-margarita-docs-qm-thejsgal-2023-03-04-12_44_39.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/margarita/screencapture-margarita-docs-qm-thejsgal-about-team-2023-03-04-12_45_10.png",
        originalAlt: "Margarita",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/margarita/screencapture-margarita-docs-qm-thejsgal-about-team-2023-03-04-12_45_10.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/margarita/screencapture-margarita-docs-qm-thejsgal-design-principles-2023-03-04-12_45_20.png",
        originalAlt: "Margarita",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/margarita/screencapture-margarita-docs-qm-thejsgal-design-principles-2023-03-04-12_45_20.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/margarita/screencapture-margarita-docs-qm-thejsgal-develop-components-checkbox-2023-03-04-12_46_30.png",
        originalAlt: "Margarita",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/margarita/screencapture-margarita-docs-qm-thejsgal-develop-components-checkbox-2023-03-04-12_46_30.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/margarita/screencapture-margarita-docs-qm-thejsgal-design-foundations-typography-2023-03-04-12_47_29.png",
        originalAlt: "Margarita",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/margarita/screencapture-margarita-docs-qm-thejsgal-design-foundations-typography-2023-03-04-12_47_29.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/margarita/screencapture-margarita-docs-qm-thejsgal-design-foundations-color-2023-03-04-12_45_30.png",
        originalAlt: "Margarita",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/margarita/screencapture-margarita-docs-qm-thejsgal-design-foundations-color-2023-03-04-12_45_30.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/margarita/screencapture-margarita-docs-qm-thejsgal-develop-components-toggle-2023-03-04-12_47_03.png",
        originalAlt: "Margarita",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/margarita/screencapture-margarita-docs-qm-thejsgal-develop-components-toggle-2023-03-04-12_47_03.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/margarita/screencapture-margarita-docs-qm-thejsgal-develop-components-button-2023-03-04-12_46_04.png",
        originalAlt: "Margarita",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/margarita/screencapture-margarita-docs-qm-thejsgal-develop-components-button-2023-03-04-12_46_04.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/margarita/screencapture-margarita-docs-qm-thejsgal-design-components-button-2023-03-04-12_45_40.png",
        originalAlt: "Margarita",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/margarita/screencapture-margarita-docs-qm-thejsgal-design-components-button-2023-03-04-12_45_40.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/margarita/screencapture-margarita-docs-qm-thejsgal-develop-foundations-color-2023-03-04-12_45_53.png",
        originalAlt: "Margarita",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/margarita/screencapture-margarita-docs-qm-thejsgal-develop-foundations-color-2023-03-04-12_45_53.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/margarita/screencapture-margarita-docs-qm-thejsgal-develop-foundations-typography-2023-03-04-12_47_15.png",
        originalAlt: "Margarita",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/margarita/screencapture-margarita-docs-qm-thejsgal-develop-foundations-typography-2023-03-04-12_47_15.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/margarita/screencapture-margarita-docs-qm-thejsgal-develop-components-checkbox-group-2023-03-04-12_46_40.png",
        originalAlt: "Margarita",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/margarita/screencapture-margarita-docs-qm-thejsgal-develop-components-checkbox-group-2023-03-04-12_46_40.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/margarita/screencapture-margarita-docs-qm-thejsgal-develop-components-radio-2023-03-04-12_46_49.png",
        originalAlt: "Margarita",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/margarita/screencapture-margarita-docs-qm-thejsgal-develop-components-radio-2023-03-04-12_46_49.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/margarita/quantum-metric_margarita_logo.svg",
    employer: {
      id: "quantum-metric",
      name: "Quantum Metric",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/QM%20Horizontal%20Lockup%20Pink.svg",
    },
    client: {
      id: "quantum-metric",
      name: "Quantum Metric",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/QM%20Horizontal%20Lockup%20Pink.svg",
    },
    tags: [
      "2022",
      "2023",
      "accessibility-508",
      "cross-browser-compatibility",
      "css",
      "design-system",
      "framework-react",
      "front-end",
      "full-stack",
      "html",
      "javascript",
      "json",
      "lead",
      "library-lodash",
      "tooling-babel",
      "tooling-eslint",
      "tooling-prettier",
      "tooling-rollup",
      "type-startup",
      "typescript",
      "ux-accessibility",
      "ux-information-architecture",
      "ux-usability",
      "ux-ux-audit",
    ],
    categories: [
      "framework",
      "language",
      "project-type",
      "role",
      "tooling",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      framework: {
        id: "framework",
        name: "Framework",
        tags: [{ id: "framework-react", name: "React", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "json", name: "JSON", display: true },
          { id: "typescript", name: "TypeScript", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [
          { id: "design-system", name: "Design System", display: true },
          { id: "type-startup", name: "Startup", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "front-end", name: "Front End", display: true },
          { id: "full-stack", name: "Full Stack", display: true },
          { id: "lead", name: "Lead", display: true },
        ],
      },
      tooling: {
        id: "tooling",
        name: "Tooling",
        tags: [
          { id: "tooling-babel", name: "Babel", display: true },
          { id: "tooling-eslint", name: "ESLint", display: true },
          { id: "library-lodash", name: "Lo-Dash", display: true },
          { id: "tooling-prettier", name: "Prettier", display: true },
          { id: "tooling-rollup", name: "Rollup", display: true },
        ],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          { id: "accessibility-508", name: "508 Compliant", display: true },
          { id: "ux-accessibility", name: "Accessibility", display: true },
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
          {
            id: "ux-information-architecture",
            name: "Information Architecture",
            display: true,
          },
          { id: "ux-usability", name: "Usability", display: true },
          { id: "ux-ux-audit", name: "UX Audit", display: true },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [
          { id: "2022", name: "2022", display: true },
          { id: "2023", name: "2023", display: true },
        ],
      },
    },
    displayName: "Margarita (2023)",
  },
  {
    id: "quantum-app",
    name: "Quantum Metric",
    date: "2023-02-14",
    description:
      "Quantum Metric automatically quantifies opportunities in your digital applications, helping you prioritize with more speed and confidence.",
    features: [
      {
        heading: "Worked On",
        items: [
          "Session Replay",
          "Live Replay",
          "Dashboards V3",
          "Sandbox",
          "Atlas",
        ],
      },
    ],
    url: "https://www.quantummetric.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/quantum-app/session-replay_x3.png",
        originalAlt: "Quantum Metric",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/quantum-app/session-replay_x3.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/quantum-app/sandbox_x3.png",
        originalAlt: "Quantum Metric",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/quantum-app/sandbox_x3.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/quantum-app/sandbox-funnels_x3.png",
        originalAlt: "Quantum Metric",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/quantum-app/sandbox-funnels_x3.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/quantum-app/dashboard_x3.png",
        originalAlt: "Quantum Metric",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/quantum-app/dashboard_x3.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/quantum-app/live-replay_x3.png",
        originalAlt: "Quantum Metric",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/quantum-app/live-replay_x3.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/quantum-app/QM%20Horizontal%20Lockup%20Pink.svg",
    employer: {
      id: "quantum-metric",
      name: "Quantum Metric",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/QM%20Horizontal%20Lockup%20Pink.svg",
    },
    client: {
      id: "quantum-metric",
      name: "Quantum Metric",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/QM%20Horizontal%20Lockup%20Pink.svg",
    },
    tags: [
      "2021",
      "2022",
      "2023",
      "css",
      "customer-experience-analytics",
      "framework-react",
      "front-end",
      "html",
      "javascript",
      "json",
      "library-lodash",
      "tooling-babel",
      "tooling-eslint",
      "tooling-prettier",
      "tooling-webpack",
      "type-b2b",
      "type-startup",
      "typescript",
    ],
    categories: [
      "framework",
      "industry",
      "language",
      "project-type",
      "role",
      "tooling",
      "year",
    ],
    tagsByCategory: {
      framework: {
        id: "framework",
        name: "Framework",
        tags: [{ id: "framework-react", name: "React", display: true }],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [
          {
            id: "customer-experience-analytics",
            name: "CX analytics",
            display: true,
          },
        ],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "json", name: "JSON", display: true },
          { id: "typescript", name: "TypeScript", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [
          { id: "type-b2b", name: "B2B", display: true },
          { id: "type-startup", name: "Startup", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [{ id: "front-end", name: "Front End", display: true }],
      },
      tooling: {
        id: "tooling",
        name: "Tooling",
        tags: [
          { id: "tooling-babel", name: "Babel", display: true },
          { id: "tooling-eslint", name: "ESLint", display: true },
          { id: "library-lodash", name: "Lo-Dash", display: true },
          { id: "tooling-prettier", name: "Prettier", display: true },
          { id: "tooling-webpack", name: "Webpack", display: true },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [
          { id: "2021", name: "2021", display: true },
          { id: "2022", name: "2022", display: true },
          { id: "2023", name: "2023", display: true },
        ],
      },
    },
    displayName: "Quantum Metric (2023)",
  },
  {
    id: "tiffanylea-web",
    name: "Tiffany Lea",
    date: "2020-06-01",
    description:
      "My own portfolio site to keep track of projects and have a playground for new tech.",
    features: [],
    url: "https://www.tiffanylea.com/",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web/tiffany-lea-home.png",
        originalAlt: "Tiffany Lea",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web/tiffany-lea-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web/tiffany-lea-about.png",
        originalAlt: "Tiffany Lea",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web/tiffany-lea-about.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web/tiffany-lea-resume.png",
        originalAlt: "Tiffany Lea",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web/tiffany-lea-resume.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web/tiffany-lea-portfolio.png",
        originalAlt: "Tiffany Lea",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web/tiffany-lea-portfolio.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web/tiffany-lea-portfolio-item.png",
        originalAlt: "Tiffany Lea",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web/tiffany-lea-portfolio-item.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web/tiffany-lea-portfolio-filters.png",
        originalAlt: "Tiffany Lea",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web/tiffany-lea-portfolio-filters.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web/tiffany-lea-reviews.png",
        originalAlt: "Tiffany Lea",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web/tiffany-lea-reviews.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web/tiffany-lea-contact.png",
        originalAlt: "Tiffany Lea",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web/tiffany-lea-contact.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web/tiffany-lea__logo.svg",
    employer: {
      id: "tiffany-lea-llc",
      name: "Tiffany Lea LLC",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/tiffany-lea-llc__logo.svg",
    },
    client: {
      id: "tiffany-lea-llc",
      name: "Tiffany Lea LLC",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/tiffany-lea-llc__logo.svg",
    },
    tags: [
      "2020",
      "agile",
      "aws-amplify",
      "aws-appsync",
      "aws-cloudformation",
      "aws-cloudfront",
      "aws-cloudwatch",
      "aws-cognito",
      "aws-dynamodb",
      "aws-elasticsearch",
      "aws-identity-and-access-management-iam",
      "aws-lambda",
      "aws-pinpoint",
      "aws-route-53",
      "aws-simple-email-service",
      "aws-simple-storage-service-s3",
      "cms-custom-in-house",
      "data-dynamodb",
      "framework-react",
      "google-analytics",
      "role-design",
    ],
    categories: [
      "analytics",
      "aws",
      "cms",
      "data",
      "framework",
      "role",
      "sdlc",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      aws: {
        id: "aws",
        name: "AWS",
        tags: [
          { id: "aws-amplify", name: "Amplify", display: true },
          { id: "aws-appsync", name: "AppSync", display: true },
          { id: "aws-cloudformation", name: "CloudFormation", display: true },
          { id: "aws-cloudfront", name: "CloudFront", display: true },
          { id: "aws-cloudwatch", name: "CloudWatch", display: true },
          { id: "aws-cognito", name: "Cognito", display: true },
          { id: "aws-dynamodb", name: "DynamoDB", display: true },
          { id: "aws-elasticsearch", name: "Elasticsearch", display: true },
          {
            id: "aws-identity-and-access-management-iam",
            name: "IAM",
            display: true,
          },
          { id: "aws-lambda", name: "Lambda", display: true },
          { id: "aws-pinpoint", name: "Pinpoint", display: true },
          { id: "aws-route-53", name: "Route 53", display: true },
          { id: "aws-simple-storage-service-s3", name: "S3", display: true },
          { id: "aws-simple-email-service", name: "SES", display: true },
        ],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [
          { id: "cms-custom-in-house", name: "Custom in-house", display: true },
        ],
      },
      data: {
        id: "data",
        name: "Data",
        tags: [{ id: "data-dynamodb", name: "DynamoDB", display: true }],
      },
      framework: {
        id: "framework",
        name: "Framework",
        tags: [{ id: "framework-react", name: "React", display: true }],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [{ id: "role-design", name: "Design", display: true }],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "agile", name: "Agile", display: true }],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2020", name: "2020", display: true }],
      },
    },
    displayName: "Tiffany Lea (2020)",
  },
  {
    id: "tiffanylea-web-admin",
    name: "Tiffany Lea - Admin",
    date: "2020-01-02",
    description: "JSON doc was no longer manageable... so I built a CMS.",
    features: [],
    url: "https://www.tiffanylea.com/admin/",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web-admin/tiffany-lea-admin-projects.png",
        originalAlt: "Tiffany Lea - Admin",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web-admin/tiffany-lea-admin-projects.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web-admin/tiffany-lea-admin-project-detail.png",
        originalAlt: "Tiffany Lea - Admin",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web-admin/tiffany-lea-admin-project-detail.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web-admin/tiffany-lea-admin-employers.png",
        originalAlt: "Tiffany Lea - Admin",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web-admin/tiffany-lea-admin-employers.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web-admin/tiffany-lea-admin-employer-detail.png",
        originalAlt: "Tiffany Lea - Admin",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web-admin/tiffany-lea-admin-employer-detail.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web-admin/tiffany-lea-admin-clients.png",
        originalAlt: "Tiffany Lea - Admin",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web-admin/tiffany-lea-admin-clients.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web-admin/tiffany-lea-admin-client-detail.png",
        originalAlt: "Tiffany Lea - Admin",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web-admin/tiffany-lea-admin-client-detail.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web-admin/tiffany-lea-admin-tags.png",
        originalAlt: "Tiffany Lea - Admin",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web-admin/tiffany-lea-admin-tags.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web-admin/tiffany-lea-admin-tag-detail.png",
        originalAlt: "Tiffany Lea - Admin",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web-admin/tiffany-lea-admin-tag-detail.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web-admin/tiffany-lea-admin__logo.svg",
    employer: {
      id: "tiffany-lea-llc",
      name: "Tiffany Lea LLC",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/tiffany-lea-llc__logo.svg",
    },
    client: {
      id: "tiffany-lea-llc",
      name: "Tiffany Lea LLC",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/tiffany-lea-llc__logo.svg",
    },
    tags: [
      "2020",
      "agile",
      "aws-amplify",
      "aws-appsync",
      "aws-cloudformation",
      "aws-cloudfront",
      "aws-cloudwatch",
      "aws-cognito",
      "aws-dynamodb",
      "aws-elasticsearch",
      "aws-identity-and-access-management-iam",
      "aws-lambda",
      "aws-route-53",
      "aws-simple-email-service",
      "aws-simple-storage-service-s3",
      "cms-custom-in-house",
      "data-dynamodb",
      "framework-react",
    ],
    categories: ["aws", "cms", "data", "framework", "sdlc", "year"],
    tagsByCategory: {
      aws: {
        id: "aws",
        name: "AWS",
        tags: [
          { id: "aws-amplify", name: "Amplify", display: true },
          { id: "aws-appsync", name: "AppSync", display: true },
          { id: "aws-cloudformation", name: "CloudFormation", display: true },
          { id: "aws-cloudfront", name: "CloudFront", display: true },
          { id: "aws-cloudwatch", name: "CloudWatch", display: true },
          { id: "aws-cognito", name: "Cognito", display: true },
          { id: "aws-dynamodb", name: "DynamoDB", display: true },
          { id: "aws-elasticsearch", name: "Elasticsearch", display: true },
          {
            id: "aws-identity-and-access-management-iam",
            name: "IAM",
            display: true,
          },
          { id: "aws-lambda", name: "Lambda", display: true },
          { id: "aws-route-53", name: "Route 53", display: true },
          { id: "aws-simple-storage-service-s3", name: "S3", display: true },
          { id: "aws-simple-email-service", name: "SES", display: true },
        ],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [
          { id: "cms-custom-in-house", name: "Custom in-house", display: true },
        ],
      },
      data: {
        id: "data",
        name: "Data",
        tags: [{ id: "data-dynamodb", name: "DynamoDB", display: true }],
      },
      framework: {
        id: "framework",
        name: "Framework",
        tags: [{ id: "framework-react", name: "React", display: true }],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "agile", name: "Agile", display: true }],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2020", name: "2020", display: true }],
      },
    },
    displayName: "Tiffany Lea - Admin (2020)",
  },
  {
    id: "endpoint-android",
    name: "Endpoint - Android",
    date: "2019-01-01",
    description:
      "Endpoint is a next-generation Title and Escrow company. Whether you’re an agent, broker, buyer, or seller, Endpoint’s mobile app allows you to stay informed and move the process forward.",
    features: [
      {
        heading: "Use Endpoint’s mobile app to",
        items: [
          "Track the progress of your transactions in escrow",
          "Complete To-Do’s and move the process forward",
          "Upload, review and eSign documents",
          "Message your dedicated Endpoint team of closing professionals",
          "Send Earnest Money Deposits",
          "Schedule a mobile notary to sign closing documents",
        ],
      },
    ],
    url: "https://play.google.com/store/apps/details?id=com.endpointapp&hl=en_US",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-android/endpoint-android-1.png",
        originalAlt: "Endpoint - Android",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-android/endpoint-android-1.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-android/endpoint-android-2.png",
        originalAlt: "Endpoint - Android",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-android/endpoint-android-2.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-android/endpoint-android-3.png",
        originalAlt: "Endpoint - Android",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-android/endpoint-android-3.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-android/endpoint-android-4.png",
        originalAlt: "Endpoint - Android",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-android/endpoint-android-4.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-android/endpoint-android__logo.svg",
    employer: {
      id: "endpoint-closing",
      name: "Endpoint Closing",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/endpoint-closing__logo.svg",
    },
    client: {
      id: "endpoint-closing",
      name: "Endpoint Closing",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/endpoint-closing__logo.svg",
    },
    tags: [
      "2019",
      "aws-cloudfront",
      "aws-cloudwatch",
      "aws-dynamodb",
      "aws-lambda",
      "aws-simple-storage-service-s3",
      "data-dynamodb",
      "framework-react-native",
      "scrum",
      "segment-io",
      "type-startup",
      "typescript",
      "ux-usertesting-com",
    ],
    categories: [
      "analytics",
      "aws",
      "data",
      "framework",
      "language",
      "project-type",
      "sdlc",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [{ id: "segment-io", name: "Segment", display: true }],
      },
      aws: {
        id: "aws",
        name: "AWS",
        tags: [
          { id: "aws-cloudfront", name: "CloudFront", display: true },
          { id: "aws-cloudwatch", name: "CloudWatch", display: true },
          { id: "aws-dynamodb", name: "DynamoDB", display: true },
          { id: "aws-lambda", name: "Lambda", display: true },
          { id: "aws-simple-storage-service-s3", name: "S3", display: true },
        ],
      },
      data: {
        id: "data",
        name: "Data",
        tags: [{ id: "data-dynamodb", name: "DynamoDB", display: true }],
      },
      framework: {
        id: "framework",
        name: "Framework",
        tags: [
          { id: "framework-react-native", name: "React-Native", display: true },
        ],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [{ id: "typescript", name: "TypeScript", display: true }],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [{ id: "type-startup", name: "Startup", display: true }],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "scrum", name: "Scrum", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          { id: "ux-usertesting-com", name: "UserTesting.com", display: true },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2019", name: "2019", display: true }],
      },
    },
    displayName: "Endpoint - Android (2018)",
  },
  {
    id: "endpoint-ios",
    name: "Endpoint - iOS",
    date: "2018-09-01",
    description:
      "Endpoint is a next-generation Title and Escrow company. Whether you’re an agent, broker, buyer, or seller, Endpoint’s mobile app allows you to stay informed and move the process forward.",
    features: [
      {
        heading: "Use Endpoint’s mobile app to",
        items: [
          "Track the progress of your transactions in escrow",
          "Complete To-Do’s and move the process forward",
          "Upload, review and eSign documents",
          "Message your dedicated Endpoint team of closing professionals",
          "Send Earnest Money Deposits",
          "Schedule a mobile notary to sign closing documents",
        ],
      },
    ],
    url: "https://apps.apple.com/us/app/endpoint/id1388458874",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-ios/endpoint-ios-1.png",
        originalAlt: "Endpoint - iOS",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-ios/endpoint-ios-1.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-ios/endpoint-ios-2.png",
        originalAlt: "Endpoint - iOS",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-ios/endpoint-ios-2.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-ios/endpoint-ios-3.png",
        originalAlt: "Endpoint - iOS",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-ios/endpoint-ios-3.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-ios/endpoint-ios-4.png",
        originalAlt: "Endpoint - iOS",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-ios/endpoint-ios-4.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-ios/endpoint-ios__logo.svg",
    employer: {
      id: "endpoint-closing",
      name: "Endpoint Closing",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/endpoint-closing__logo.svg",
    },
    client: {
      id: "endpoint-closing",
      name: "Endpoint Closing",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/endpoint-closing__logo.svg",
    },
    tags: [
      "2018",
      "2019",
      "aws-cloudfront",
      "aws-cloudwatch",
      "aws-dynamodb",
      "aws-lambda",
      "aws-simple-storage-service-s3",
      "data-dynamodb",
      "framework-react-native",
      "scrum",
      "segment-io",
      "type-startup",
      "typescript",
      "ux-usertesting-com",
    ],
    categories: [
      "analytics",
      "aws",
      "data",
      "framework",
      "language",
      "project-type",
      "sdlc",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [{ id: "segment-io", name: "Segment", display: true }],
      },
      aws: {
        id: "aws",
        name: "AWS",
        tags: [
          { id: "aws-cloudfront", name: "CloudFront", display: true },
          { id: "aws-cloudwatch", name: "CloudWatch", display: true },
          { id: "aws-dynamodb", name: "DynamoDB", display: true },
          { id: "aws-lambda", name: "Lambda", display: true },
          { id: "aws-simple-storage-service-s3", name: "S3", display: true },
        ],
      },
      data: {
        id: "data",
        name: "Data",
        tags: [{ id: "data-dynamodb", name: "DynamoDB", display: true }],
      },
      framework: {
        id: "framework",
        name: "Framework",
        tags: [
          { id: "framework-react-native", name: "React-Native", display: true },
        ],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [{ id: "typescript", name: "TypeScript", display: true }],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [{ id: "type-startup", name: "Startup", display: true }],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "scrum", name: "Scrum", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          { id: "ux-usertesting-com", name: "UserTesting.com", display: true },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [
          { id: "2018", name: "2018", display: true },
          { id: "2019", name: "2019", display: true },
        ],
      },
    },
    displayName: "Endpoint - iOS (2018)",
  },
  {
    id: "endpoint-web",
    name: "Endpoint - Web",
    date: "2018-09-01",
    description:
      "Endpoint is a next-generation Title and Escrow company. Whether you’re an agent, broker, buyer, or seller, Endpoint’s mobile app allows you to stay informed and move the process forward.",
    features: [
      {
        heading: "Use Endpoint to",
        items: [
          "Track the progress of your transactions in escrow",
          "Complete To-Do’s and move the process forward",
          "Upload, review and eSign documents",
          "Message your dedicated Endpoint team of closing professionals",
          "Send Earnest Money Deposits",
          "Schedule a mobile notary to sign closing documents",
        ],
      },
    ],
    url: "https://endpointclosing.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-web/endpoint-web%400.25x.jpg",
        originalAlt: "Endpoint - Web",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-web/endpoint-web%400.25x.jpg",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-web/endpoint-web__logo.svg",
    employer: {
      id: "endpoint-closing",
      name: "Endpoint Closing",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/endpoint-closing__logo.svg",
    },
    client: {
      id: "endpoint-closing",
      name: "Endpoint Closing",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/endpoint-closing__logo.svg",
    },
    tags: [
      "2018",
      "2019",
      "aws-cloudfront",
      "aws-cloudwatch",
      "aws-dynamodb",
      "aws-lambda",
      "aws-simple-storage-service-s3",
      "data-dynamodb",
      "framework-react",
      "framework-react-native",
      "responsive",
      "scrum",
      "segment-io",
      "type-startup",
      "typescript",
      "ux-usertesting-com",
      "ux-ux-audit",
    ],
    categories: [
      "analytics",
      "aws",
      "data",
      "framework",
      "language",
      "project-type",
      "sdlc",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [{ id: "segment-io", name: "Segment", display: true }],
      },
      aws: {
        id: "aws",
        name: "AWS",
        tags: [
          { id: "aws-cloudfront", name: "CloudFront", display: true },
          { id: "aws-cloudwatch", name: "CloudWatch", display: true },
          { id: "aws-dynamodb", name: "DynamoDB", display: true },
          { id: "aws-lambda", name: "Lambda", display: true },
          { id: "aws-simple-storage-service-s3", name: "S3", display: true },
        ],
      },
      data: {
        id: "data",
        name: "Data",
        tags: [{ id: "data-dynamodb", name: "DynamoDB", display: true }],
      },
      framework: {
        id: "framework",
        name: "Framework",
        tags: [
          { id: "framework-react", name: "React", display: true },
          { id: "framework-react-native", name: "React-Native", display: true },
        ],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [{ id: "typescript", name: "TypeScript", display: true }],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [
          { id: "responsive", name: "Responsive", display: true },
          { id: "type-startup", name: "Startup", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "scrum", name: "Scrum", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          { id: "ux-usertesting-com", name: "UserTesting.com", display: true },
          { id: "ux-ux-audit", name: "UX Audit", display: true },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [
          { id: "2018", name: "2018", display: true },
          { id: "2019", name: "2019", display: true },
        ],
      },
    },
    displayName: "Endpoint - Web (2018)",
  },
  {
    id: "giggles-n-hugs",
    name: "Giggles N Hugs",
    date: "2018-03-15",
    description:
      "Redesigned the entire site (WordPress) to be more modern as well as responsive.  This included everything from planning IA and navigation to actual implementation and launch.",
    features: [],
    url: "https://www.gigglesnhugs.com/",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/giggles-n-hugs/giggles-n-hugs-home.png",
        originalAlt: "Giggles N Hugs",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/giggles-n-hugs/giggles-n-hugs-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/giggles-n-hugs/giggles-n-hugs-about.png",
        originalAlt: "Giggles N Hugs",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/giggles-n-hugs/giggles-n-hugs-about.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/giggles-n-hugs/giggles-n-hugs-parties.png",
        originalAlt: "Giggles N Hugs",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/giggles-n-hugs/giggles-n-hugs-parties.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/giggles-n-hugs/giggles-n-hugs-press.png",
        originalAlt: "Giggles N Hugs",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/giggles-n-hugs/giggles-n-hugs-press.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/giggles-n-hugs/giggles-n-hugs-navigation.png",
        originalAlt: "Giggles N Hugs",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/giggles-n-hugs/giggles-n-hugs-navigation.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/giggles-n-hugs/giggles-n-hugs__logo.svg",
    employer: {
      id: "tiffany-lea-llc",
      name: "Tiffany Lea LLC",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/tiffany-lea-llc__logo.svg",
    },
    client: {
      id: "giggles-n-hugs",
      name: "Giggles N' Hugs",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/giggles-n-hugs__logo.svg",
    },
    tags: [
      "2018",
      "agile",
      "back-end",
      "cms-configuration",
      "cms-wordpress",
      "consultant",
      "data-mysql",
      "e-commerce",
      "ecom-other",
      "front-end",
      "full-stack",
      "responsive",
      "role-design",
      "type-e-commerce",
      "ux-information-architecture",
      "ux-usability",
      "ux-ux-audit",
    ],
    categories: [
      "cms",
      "data",
      "e-commerce",
      "industry",
      "project-type",
      "role",
      "sdlc",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cms-wordpress", name: "Wordpress", display: true }],
      },
      data: {
        id: "data",
        name: "Data",
        tags: [{ id: "data-mysql", name: "MySQL", display: true }],
      },
      "e-commerce": {
        id: "e-commerce",
        name: "E-Commerce",
        tags: [{ id: "ecom-other", name: "Other", display: true }],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "e-commerce", name: "E-Commerce", display: true }],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [
          { id: "type-e-commerce", name: "E-Commerce", display: true },
          { id: "responsive", name: "Responsive", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "back-end", name: "Back End", display: true },
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "consultant", name: "Consultant", display: true },
          { id: "role-design", name: "Design", display: true },
          { id: "front-end", name: "Front End", display: true },
          { id: "full-stack", name: "Full Stack", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "agile", name: "Agile", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          {
            id: "ux-information-architecture",
            name: "Information Architecture",
            display: true,
          },
          { id: "ux-usability", name: "Usability", display: true },
          { id: "ux-ux-audit", name: "UX Audit", display: true },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2018", name: "2018", display: true }],
      },
    },
    displayName: "Giggles N Hugs (2018)",
  },
  {
    id: "skechers-en-gb",
    name: "Skechers - English - Great Britain",
    date: "2017-10-02",
    description:
      "Extended United States e-commerce code for the United Kingdom/Ireland locale.",
    features: [
      {
        heading: "Locale specific",
        items: [
          "Products",
          "Categories",
          "Content",
          "Currency",
          "Translated text",
          "Shipping address requirements",
          "Shipping services",
          "Payment processing",
          "Tax/VAT handling",
          "Laws and regulations",
        ],
      },
    ],
    url: "https://www.skechers.com/en-gb/",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-home.png",
        originalAlt: "Skechers - English - Great Britain",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-navigation-tier-2.png",
        originalAlt: "Skechers - English - Great Britain",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-navigation-tier-2.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-listing.png",
        originalAlt: "Skechers - English - Great Britain",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-listing.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-listing-filters.png",
        originalAlt: "Skechers - English - Great Britain",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-listing-filters.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-detail.png",
        originalAlt: "Skechers - English - Great Britain",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-detail.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-add-to-cart.png",
        originalAlt: "Skechers - English - Great Britain",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-add-to-cart.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-cart.png",
        originalAlt: "Skechers - English - Great Britain",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-cart.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-checkout.png",
        originalAlt: "Skechers - English - Great Britain",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-checkout.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-search.png",
        originalAlt: "Skechers - English - Great Britain",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-search.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb__logo.svg",
    employer: {
      id: "skechers",
      name: "Skechers USA Inc",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/skechers__logo.svg",
    },
    client: {
      id: "skechers",
      name: "Skechers",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/skechers__logo.svg",
    },
    tags: [
      "2016",
      "2017",
      "2018",
      "aws-cloudfront",
      "cms-custom-in-house",
      "coffeescript",
      "data-cloudant",
      "data-couch-db",
      "ecom-custom-in-house",
      "framework-backbone-js",
      "google-tag-manager",
      "javascript",
      "manager",
      "marionette-js",
      "responsive",
      "scrum",
      "tooling-requirejs",
      "type-e-commerce",
    ],
    categories: [
      "analytics",
      "aws",
      "cms",
      "data",
      "e-commerce",
      "framework",
      "language",
      "project-type",
      "role",
      "sdlc",
      "tooling",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          {
            id: "google-tag-manager",
            name: "Google Tag Manager",
            display: true,
          },
        ],
      },
      aws: {
        id: "aws",
        name: "AWS",
        tags: [{ id: "aws-cloudfront", name: "CloudFront", display: true }],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [
          { id: "cms-custom-in-house", name: "Custom in-house", display: true },
        ],
      },
      data: {
        id: "data",
        name: "Data",
        tags: [
          { id: "data-cloudant", name: "Cloudant", display: true },
          { id: "data-couch-db", name: "CouchDB", display: true },
        ],
      },
      "e-commerce": {
        id: "e-commerce",
        name: "E-Commerce",
        tags: [
          {
            id: "ecom-custom-in-house",
            name: "Custom in-house",
            display: true,
          },
        ],
      },
      framework: {
        id: "framework",
        name: "Framework",
        tags: [
          { id: "framework-backbone-js", name: "Backbone.js", display: true },
        ],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "coffeescript", name: "CoffeeScript", display: true },
          { id: "javascript", name: "JavaScript", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [
          { id: "type-e-commerce", name: "E-Commerce", display: true },
          { id: "responsive", name: "Responsive", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [{ id: "manager", name: "Manager", display: true }],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "scrum", name: "Scrum", display: true }],
      },
      tooling: {
        id: "tooling",
        name: "Tooling",
        tags: [
          { id: "marionette-js", name: "Marionette.js", display: true },
          { id: "tooling-requirejs", name: "RequireJS", display: true },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [
          { id: "2016", name: "2016", display: true },
          { id: "2017", name: "2017", display: true },
          { id: "2018", name: "2018", display: true },
        ],
      },
    },
    displayName: "Skechers - English - Great Britain (2017)",
  },
  {
    id: "skechers-es-es",
    name: "Skechers - Spanish - Spain",
    date: "2017-07-02",
    description: "Extended United States e-commerce code for Spain.",
    features: [
      {
        heading: "Features",
        items: [
          "Locale specific products",
          "Locale specific categories",
          "Locale specific content",
          "Locale specific currency",
          "Locale specific translations of the text",
          "Locale specific shipping address requirements",
          "Locale specific shipping services",
          "Locale specific payment processing",
          "Locale specific tax/VAT handling",
          "Locale specific laws and regulations",
        ],
      },
    ],
    url: "https://www.skechers.com/es-es/",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-home.png",
        originalAlt: "Skechers - Spanish - Spain",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-navigation-tier-2.png",
        originalAlt: "Skechers - Spanish - Spain",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-navigation-tier-2.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-listing.png",
        originalAlt: "Skechers - Spanish - Spain",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-listing.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-listing-filters.png",
        originalAlt: "Skechers - Spanish - Spain",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-listing-filters.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-detail.png",
        originalAlt: "Skechers - Spanish - Spain",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-detail.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-add-to-cart.png",
        originalAlt: "Skechers - Spanish - Spain",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-add-to-cart.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-cart.png",
        originalAlt: "Skechers - Spanish - Spain",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-cart.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-checkout.png",
        originalAlt: "Skechers - Spanish - Spain",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-checkout.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-search.png",
        originalAlt: "Skechers - Spanish - Spain",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-search.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es__logo.svg",
    employer: {
      id: "skechers",
      name: "Skechers USA Inc",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/skechers__logo.svg",
    },
    client: {
      id: "skechers",
      name: "Skechers",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/skechers__logo.svg",
    },
    tags: [
      "2016",
      "2017",
      "2018",
      "aws-cloudfront",
      "cms-custom-in-house",
      "coffeescript",
      "data-cloudant",
      "data-couch-db",
      "ecom-custom-in-house",
      "framework-backbone-js",
      "google-tag-manager",
      "javascript",
      "manager",
      "marionette-js",
      "responsive",
      "scrum",
      "tooling-requirejs",
      "type-e-commerce",
    ],
    categories: [
      "analytics",
      "aws",
      "cms",
      "data",
      "e-commerce",
      "framework",
      "language",
      "project-type",
      "role",
      "sdlc",
      "tooling",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          {
            id: "google-tag-manager",
            name: "Google Tag Manager",
            display: true,
          },
        ],
      },
      aws: {
        id: "aws",
        name: "AWS",
        tags: [{ id: "aws-cloudfront", name: "CloudFront", display: true }],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [
          { id: "cms-custom-in-house", name: "Custom in-house", display: true },
        ],
      },
      data: {
        id: "data",
        name: "Data",
        tags: [
          { id: "data-cloudant", name: "Cloudant", display: true },
          { id: "data-couch-db", name: "CouchDB", display: true },
        ],
      },
      "e-commerce": {
        id: "e-commerce",
        name: "E-Commerce",
        tags: [
          {
            id: "ecom-custom-in-house",
            name: "Custom in-house",
            display: true,
          },
        ],
      },
      framework: {
        id: "framework",
        name: "Framework",
        tags: [
          { id: "framework-backbone-js", name: "Backbone.js", display: true },
        ],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "coffeescript", name: "CoffeeScript", display: true },
          { id: "javascript", name: "JavaScript", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [
          { id: "type-e-commerce", name: "E-Commerce", display: true },
          { id: "responsive", name: "Responsive", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [{ id: "manager", name: "Manager", display: true }],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "scrum", name: "Scrum", display: true }],
      },
      tooling: {
        id: "tooling",
        name: "Tooling",
        tags: [
          { id: "marionette-js", name: "Marionette.js", display: true },
          { id: "tooling-requirejs", name: "RequireJS", display: true },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [
          { id: "2016", name: "2016", display: true },
          { id: "2017", name: "2017", display: true },
          { id: "2018", name: "2018", display: true },
        ],
      },
    },
    displayName: "Skechers - Spanish - Spain (2017)",
  },
  {
    id: "skechers-friendship-walk-2017",
    name: "Skechers Friendship Walk",
    date: "2017-06-15",
    description:
      "SKECHERS Pier to Pier Friendship Walk event signup and donation site, email campaigns, system admin. ",
    features: [],
    url: "https://www.skechersfriendshipwalk.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2017/skechers-friendship-walk-2017-home.png",
        originalAlt: "Skechers Friendship Walk",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2017/skechers-friendship-walk-2017-home.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2017/skechers-friendship-walk-2017__logo.svg",
    employer: {
      id: "skechers",
      name: "Skechers USA Inc",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/skechers__logo.svg",
    },
    client: {
      id: "skechers-friendship-walk",
      name: "Skechers Friendship Walk",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/skechers-friendship-walk__logo.svg",
    },
    tags: [
      "2017",
      "manager",
      "responsive",
      "role-design",
      "scrum",
      "type-fundraising",
    ],
    categories: ["project-type", "role", "sdlc", "year"],
    tagsByCategory: {
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [
          { id: "type-fundraising", name: "Fundraising", display: true },
          { id: "responsive", name: "Responsive", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "role-design", name: "Design", display: true },
          { id: "manager", name: "Manager", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "scrum", name: "Scrum", display: true }],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2017", name: "2017", display: true }],
      },
    },
    displayName: "Skechers Friendship Walk (2017)",
  },
  {
    id: "skechers-fr-ca",
    name: "Skechers - French - Canada",
    date: "2017-05-04",
    description: "Extended United States e-commerce code for Canada.",
    features: [
      {
        heading: "Locale specific",
        items: [
          "Products",
          "Categories",
          "Content",
          "Currency",
          "Translated text",
          "Shipping address requirements",
          "Shipping services",
          "Payment processing",
          "Tax/VAT handling",
          "Laws and regulations",
        ],
      },
    ],
    url: "https://www.skechers.com/fr-ca/",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-home.png",
        originalAlt: "Skechers - French - Canada",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-navigation-tier-2.png",
        originalAlt: "Skechers - French - Canada",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-navigation-tier-2.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-listing.png",
        originalAlt: "Skechers - French - Canada",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-listing.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-listing-filters.png",
        originalAlt: "Skechers - French - Canada",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-listing-filters.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-detail.png",
        originalAlt: "Skechers - French - Canada",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-detail.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-add-to-cart.png",
        originalAlt: "Skechers - French - Canada",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-add-to-cart.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-cart.png",
        originalAlt: "Skechers - French - Canada",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-cart.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-checkout.png",
        originalAlt: "Skechers - French - Canada",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-checkout.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-search.png",
        originalAlt: "Skechers - French - Canada",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-search.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca__logo.svg",
    employer: {
      id: "skechers",
      name: "Skechers USA Inc",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/skechers__logo.svg",
    },
    client: {
      id: "skechers",
      name: "Skechers",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/skechers__logo.svg",
    },
    tags: [
      "2016",
      "2017",
      "2018",
      "aws-cloudfront",
      "cms-custom-in-house",
      "coffeescript",
      "data-cloudant",
      "data-couch-db",
      "ecom-custom-in-house",
      "framework-backbone-js",
      "google-tag-manager",
      "javascript",
      "manager",
      "marionette-js",
      "responsive",
      "scrum",
      "tooling-requirejs",
      "type-e-commerce",
    ],
    categories: [
      "analytics",
      "aws",
      "cms",
      "data",
      "e-commerce",
      "framework",
      "language",
      "project-type",
      "role",
      "sdlc",
      "tooling",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          {
            id: "google-tag-manager",
            name: "Google Tag Manager",
            display: true,
          },
        ],
      },
      aws: {
        id: "aws",
        name: "AWS",
        tags: [{ id: "aws-cloudfront", name: "CloudFront", display: true }],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [
          { id: "cms-custom-in-house", name: "Custom in-house", display: true },
        ],
      },
      data: {
        id: "data",
        name: "Data",
        tags: [
          { id: "data-cloudant", name: "Cloudant", display: true },
          { id: "data-couch-db", name: "CouchDB", display: true },
        ],
      },
      "e-commerce": {
        id: "e-commerce",
        name: "E-Commerce",
        tags: [
          {
            id: "ecom-custom-in-house",
            name: "Custom in-house",
            display: true,
          },
        ],
      },
      framework: {
        id: "framework",
        name: "Framework",
        tags: [
          { id: "framework-backbone-js", name: "Backbone.js", display: true },
        ],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "coffeescript", name: "CoffeeScript", display: true },
          { id: "javascript", name: "JavaScript", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [
          { id: "type-e-commerce", name: "E-Commerce", display: true },
          { id: "responsive", name: "Responsive", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [{ id: "manager", name: "Manager", display: true }],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "scrum", name: "Scrum", display: true }],
      },
      tooling: {
        id: "tooling",
        name: "Tooling",
        tags: [
          { id: "marionette-js", name: "Marionette.js", display: true },
          { id: "tooling-requirejs", name: "RequireJS", display: true },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [
          { id: "2016", name: "2016", display: true },
          { id: "2017", name: "2017", display: true },
          { id: "2018", name: "2018", display: true },
        ],
      },
    },
    displayName: "Skechers - French - Canada (2017)",
  },
  {
    id: "skechers-en-ca",
    name: "Skechers - English - Canada",
    date: "2017-05-01",
    description: "Extended United States e-commerce code for Canada.",
    features: [
      {
        heading: "Locale specific",
        items: [
          "Products",
          "Categories",
          "Content",
          "Currency",
          "Translated text",
          "Shipping address requirements",
          "Shipping services",
          "Payment processing",
          "Tax/VAT handling",
          "Laws and regulations",
        ],
      },
    ],
    url: "https://www.skechers.com/en-ca/",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-home.png",
        originalAlt: "Skechers - English - Canada",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-navigation-tier-2.png",
        originalAlt: "Skechers - English - Canada",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-navigation-tier-2.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-listing.png",
        originalAlt: "Skechers - English - Canada",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-listing.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-listing-filters.png",
        originalAlt: "Skechers - English - Canada",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-listing-filters.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-detail.png",
        originalAlt: "Skechers - English - Canada",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-detail.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-add-to-cart.png",
        originalAlt: "Skechers - English - Canada",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-add-to-cart.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-cart.png",
        originalAlt: "Skechers - English - Canada",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-cart.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-checkout.png",
        originalAlt: "Skechers - English - Canada",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-checkout.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-search.png",
        originalAlt: "Skechers - English - Canada",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-search.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca__logo.svg",
    employer: {
      id: "skechers",
      name: "Skechers USA Inc",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/skechers__logo.svg",
    },
    client: {
      id: "skechers",
      name: "Skechers",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/skechers__logo.svg",
    },
    tags: [
      "2016",
      "2017",
      "2018",
      "aws-cloudfront",
      "cms-custom-in-house",
      "coffeescript",
      "data-cloudant",
      "data-couch-db",
      "ecom-custom-in-house",
      "framework-backbone-js",
      "google-tag-manager",
      "javascript",
      "manager",
      "marionette-js",
      "responsive",
      "scrum",
      "tooling-requirejs",
      "type-e-commerce",
    ],
    categories: [
      "analytics",
      "aws",
      "cms",
      "data",
      "e-commerce",
      "framework",
      "language",
      "project-type",
      "role",
      "sdlc",
      "tooling",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          {
            id: "google-tag-manager",
            name: "Google Tag Manager",
            display: true,
          },
        ],
      },
      aws: {
        id: "aws",
        name: "AWS",
        tags: [{ id: "aws-cloudfront", name: "CloudFront", display: true }],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [
          { id: "cms-custom-in-house", name: "Custom in-house", display: true },
        ],
      },
      data: {
        id: "data",
        name: "Data",
        tags: [
          { id: "data-cloudant", name: "Cloudant", display: true },
          { id: "data-couch-db", name: "CouchDB", display: true },
        ],
      },
      "e-commerce": {
        id: "e-commerce",
        name: "E-Commerce",
        tags: [
          {
            id: "ecom-custom-in-house",
            name: "Custom in-house",
            display: true,
          },
        ],
      },
      framework: {
        id: "framework",
        name: "Framework",
        tags: [
          { id: "framework-backbone-js", name: "Backbone.js", display: true },
        ],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "coffeescript", name: "CoffeeScript", display: true },
          { id: "javascript", name: "JavaScript", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [
          { id: "type-e-commerce", name: "E-Commerce", display: true },
          { id: "responsive", name: "Responsive", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [{ id: "manager", name: "Manager", display: true }],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "scrum", name: "Scrum", display: true }],
      },
      tooling: {
        id: "tooling",
        name: "Tooling",
        tags: [
          { id: "marionette-js", name: "Marionette.js", display: true },
          { id: "tooling-requirejs", name: "RequireJS", display: true },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [
          { id: "2016", name: "2016", display: true },
          { id: "2017", name: "2017", display: true },
          { id: "2018", name: "2018", display: true },
        ],
      },
    },
    displayName: "Skechers - English - Canada (2017)",
  },
  {
    id: "skechers-de-de",
    name: "Skechers - German - Germany",
    date: "2017-01-01",
    description: "Extended United States e-commerce code for Germany.",
    features: [
      {
        heading: "Locale specific",
        items: [
          "Products",
          "Categories",
          "Content",
          "Currency",
          "Translated text",
          "Shipping address requirements",
          "Shipping services",
          "Payment processing",
          "Tax/VAT handling",
          "Laws and regulations",
        ],
      },
    ],
    url: "https://www.skechers.com/de-de/",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-home.png",
        originalAlt: "Skechers - German - Germany",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-navigation-tier-2.png",
        originalAlt: "Skechers - German - Germany",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-navigation-tier-2.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-listing.png",
        originalAlt: "Skechers - German - Germany",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-listing.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-listing-filters.png",
        originalAlt: "Skechers - German - Germany",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-listing-filters.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-detail.png",
        originalAlt: "Skechers - German - Germany",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-detail.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-add-to-cart.png",
        originalAlt: "Skechers - German - Germany",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-add-to-cart.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-cart.png",
        originalAlt: "Skechers - German - Germany",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-cart.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-checkout.png",
        originalAlt: "Skechers - German - Germany",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-checkout.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-search.png",
        originalAlt: "Skechers - German - Germany",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-search.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de__logo.svg",
    employer: {
      id: "skechers",
      name: "Skechers USA Inc",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/skechers__logo.svg",
    },
    client: {
      id: "skechers",
      name: "Skechers",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/skechers__logo.svg",
    },
    tags: [
      "2016",
      "2017",
      "2018",
      "aws-cloudfront",
      "cms-custom-in-house",
      "coffeescript",
      "data-cloudant",
      "data-couch-db",
      "ecom-custom-in-house",
      "framework-backbone-js",
      "google-tag-manager",
      "javascript",
      "manager",
      "marionette-js",
      "responsive",
      "scrum",
      "tooling-requirejs",
      "type-e-commerce",
    ],
    categories: [
      "analytics",
      "aws",
      "cms",
      "data",
      "e-commerce",
      "framework",
      "language",
      "project-type",
      "role",
      "sdlc",
      "tooling",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          {
            id: "google-tag-manager",
            name: "Google Tag Manager",
            display: true,
          },
        ],
      },
      aws: {
        id: "aws",
        name: "AWS",
        tags: [{ id: "aws-cloudfront", name: "CloudFront", display: true }],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [
          { id: "cms-custom-in-house", name: "Custom in-house", display: true },
        ],
      },
      data: {
        id: "data",
        name: "Data",
        tags: [
          { id: "data-cloudant", name: "Cloudant", display: true },
          { id: "data-couch-db", name: "CouchDB", display: true },
        ],
      },
      "e-commerce": {
        id: "e-commerce",
        name: "E-Commerce",
        tags: [
          {
            id: "ecom-custom-in-house",
            name: "Custom in-house",
            display: true,
          },
        ],
      },
      framework: {
        id: "framework",
        name: "Framework",
        tags: [
          { id: "framework-backbone-js", name: "Backbone.js", display: true },
        ],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "coffeescript", name: "CoffeeScript", display: true },
          { id: "javascript", name: "JavaScript", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [
          { id: "type-e-commerce", name: "E-Commerce", display: true },
          { id: "responsive", name: "Responsive", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [{ id: "manager", name: "Manager", display: true }],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "scrum", name: "Scrum", display: true }],
      },
      tooling: {
        id: "tooling",
        name: "Tooling",
        tags: [
          { id: "marionette-js", name: "Marionette.js", display: true },
          { id: "tooling-requirejs", name: "RequireJS", display: true },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [
          { id: "2016", name: "2016", display: true },
          { id: "2017", name: "2017", display: true },
          { id: "2018", name: "2018", display: true },
        ],
      },
    },
    displayName: "Skechers - German - Germany (2016)",
  },
  {
    id: "skechers-direct",
    name: "Skechers Direct",
    date: "2016-12-05",
    description:
      "A Business to Business Employee Shoe Program offering discounts and payroll deduction options on safety shoes, corporate shoes, and more.  Used by companies like Starbucks, McDonald's, Amazon and many more.",
    features: [],
    url: "https://www.skechers.com/direct/",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct/skechers-direct-home.png",
        originalAlt: "Skechers Direct",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct/skechers-direct-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct/skechers-direct-logos.png",
        originalAlt: "Skechers Direct",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct/skechers-direct-logos.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct/skechers-direct-starbucks.png",
        originalAlt: "Skechers Direct",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct/skechers-direct-starbucks.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct/skechers-direct-mcdonalds.png",
        originalAlt: "Skechers Direct",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct/skechers-direct-mcdonalds.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct/skechers-direct-ups.png",
        originalAlt: "Skechers Direct",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct/skechers-direct-ups.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct/skechers-direct-taco-bell.png",
        originalAlt: "Skechers Direct",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct/skechers-direct-taco-bell.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct/skechers-direct-amazon.png",
        originalAlt: "Skechers Direct",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct/skechers-direct-amazon.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct/skechers-direct-detail.png",
        originalAlt: "Skechers Direct",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct/skechers-direct-detail.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct/skechers-direct__logo.svg",
    employer: {
      id: "skechers",
      name: "Skechers USA Inc",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/skechers__logo.svg",
    },
    client: {
      id: "skechers",
      name: "Skechers",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/skechers__logo.svg",
    },
    tags: [
      "2015",
      "2016",
      "2017",
      "2018",
      "aws-cloudfront",
      "cms-custom-in-house",
      "coffeescript",
      "css",
      "data-cloudant",
      "data-couch-db",
      "e-commerce",
      "ecom-custom-in-house",
      "framework-backbone-js",
      "front-end",
      "global",
      "google-analytics",
      "html",
      "javascript",
      "lead",
      "manager",
      "marionette-js",
      "responsive",
      "scrum",
      "tooling-requirejs",
      "type-b2b",
      "type-e-commerce",
    ],
    categories: [
      "analytics",
      "aws",
      "cms",
      "data",
      "e-commerce",
      "framework",
      "industry",
      "language",
      "project-type",
      "role",
      "sdlc",
      "tooling",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      aws: {
        id: "aws",
        name: "AWS",
        tags: [{ id: "aws-cloudfront", name: "CloudFront", display: true }],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [
          { id: "cms-custom-in-house", name: "Custom in-house", display: true },
        ],
      },
      data: {
        id: "data",
        name: "Data",
        tags: [
          { id: "data-cloudant", name: "Cloudant", display: true },
          { id: "data-couch-db", name: "CouchDB", display: true },
        ],
      },
      "e-commerce": {
        id: "e-commerce",
        name: "E-Commerce",
        tags: [
          {
            id: "ecom-custom-in-house",
            name: "Custom in-house",
            display: true,
          },
        ],
      },
      framework: {
        id: "framework",
        name: "Framework",
        tags: [
          { id: "framework-backbone-js", name: "Backbone.js", display: true },
        ],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [
          { id: "e-commerce", name: "E-Commerce", display: true },
          { id: "global", name: "Global", display: true },
        ],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "coffeescript", name: "CoffeeScript", display: true },
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [
          { id: "type-b2b", name: "B2B", display: true },
          { id: "type-e-commerce", name: "E-Commerce", display: true },
          { id: "responsive", name: "Responsive", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "front-end", name: "Front End", display: true },
          { id: "lead", name: "Lead", display: true },
          { id: "manager", name: "Manager", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "scrum", name: "Scrum", display: true }],
      },
      tooling: {
        id: "tooling",
        name: "Tooling",
        tags: [
          { id: "marionette-js", name: "Marionette.js", display: true },
          { id: "tooling-requirejs", name: "RequireJS", display: true },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [
          { id: "2015", name: "2015", display: true },
          { id: "2016", name: "2016", display: true },
          { id: "2017", name: "2017", display: true },
          { id: "2018", name: "2018", display: true },
        ],
      },
    },
    displayName: "Skechers Direct (2016)",
  },
  {
    id: "skechers-direct-admin",
    name: "Skechers Direct - Admin",
    date: "2016-12-04",
    description: "Coming soon...",
    features: [],
    url: "https://www.skechers.com/direct/",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct-admin/image-coming-soon.png",
        originalAlt: "Skechers Direct - Admin",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct-admin/image-coming-soon.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct-admin/skechers-direct-admin__logo.svg",
    employer: {
      id: "skechers",
      name: "Skechers USA Inc",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/skechers__logo.svg",
    },
    client: {
      id: "skechers",
      name: "Skechers",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/skechers__logo.svg",
    },
    tags: [
      "2015",
      "2016",
      "2017",
      "2018",
      "cms-custom-in-house",
      "coffeescript",
      "css",
      "data-cloudant",
      "data-couch-db",
      "e-commerce",
      "ecom-custom-in-house",
      "framework-angularjs",
      "front-end",
      "html",
      "javascript",
      "manager",
      "scrum",
      "tooling-requirejs",
    ],
    categories: [
      "cms",
      "data",
      "e-commerce",
      "framework",
      "industry",
      "language",
      "role",
      "sdlc",
      "tooling",
      "year",
    ],
    tagsByCategory: {
      cms: {
        id: "cms",
        name: "CMS",
        tags: [
          { id: "cms-custom-in-house", name: "Custom in-house", display: true },
        ],
      },
      data: {
        id: "data",
        name: "Data",
        tags: [
          { id: "data-cloudant", name: "Cloudant", display: true },
          { id: "data-couch-db", name: "CouchDB", display: true },
        ],
      },
      "e-commerce": {
        id: "e-commerce",
        name: "E-Commerce",
        tags: [
          {
            id: "ecom-custom-in-house",
            name: "Custom in-house",
            display: true,
          },
        ],
      },
      framework: {
        id: "framework",
        name: "Framework",
        tags: [{ id: "framework-angularjs", name: "AngularJS", display: true }],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "e-commerce", name: "E-Commerce", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "coffeescript", name: "CoffeeScript", display: true },
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "front-end", name: "Front End", display: true },
          { id: "manager", name: "Manager", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "scrum", name: "Scrum", display: true }],
      },
      tooling: {
        id: "tooling",
        name: "Tooling",
        tags: [{ id: "tooling-requirejs", name: "RequireJS", display: true }],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [
          { id: "2015", name: "2015", display: true },
          { id: "2016", name: "2016", display: true },
          { id: "2017", name: "2017", display: true },
          { id: "2018", name: "2018", display: true },
        ],
      },
    },
    displayName: "Skechers Direct - Admin (2016)",
  },
  {
    id: "skechers-friendship-walk-2016",
    name: "Skechers Friendship Walk",
    date: "2016-06-15",
    description: "Coming soon...",
    features: [],
    url: "https://www.skechersfriendshipwalk.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2016/skechers-friendship-walk-2016-home.png",
        originalAlt: "Skechers Friendship Walk",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2016/skechers-friendship-walk-2016-home.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2016/skechers-friendship-walk-2016__logo.svg",
    employer: {
      id: "skechers",
      name: "Skechers USA Inc",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/skechers__logo.svg",
    },
    client: {
      id: "skechers-friendship-walk",
      name: "Skechers Friendship Walk",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/skechers-friendship-walk__logo.svg",
    },
    tags: [
      "2016",
      "manager",
      "responsive",
      "role-design",
      "scrum",
      "type-fundraising",
    ],
    categories: ["project-type", "role", "sdlc", "year"],
    tagsByCategory: {
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [
          { id: "type-fundraising", name: "Fundraising", display: true },
          { id: "responsive", name: "Responsive", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "role-design", name: "Design", display: true },
          { id: "manager", name: "Manager", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "scrum", name: "Scrum", display: true }],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2016", name: "2016", display: true }],
      },
    },
    displayName: "Skechers Friendship Walk (2016)",
  },
  {
    id: "fresh-n-healthy",
    name: "Fresh N' Healthy",
    date: "2016-02-15",
    description: "Coming Soon...",
    features: [],
    url: "https://www.freshnhealthycatering.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/fresh-n-healthy/fresh-n-healthy-home.png",
        originalAlt: "Fresh N' Healthy",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/fresh-n-healthy/fresh-n-healthy-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/fresh-n-healthy/fresh-n-healthy-menu.png",
        originalAlt: "Fresh N' Healthy",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/fresh-n-healthy/fresh-n-healthy-menu.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/fresh-n-healthy/fresh-n-healthy-request-qoute.png",
        originalAlt: "Fresh N' Healthy",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/fresh-n-healthy/fresh-n-healthy-request-qoute.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/fresh-n-healthy/fresh-n-healthy-contact-us.png",
        originalAlt: "Fresh N' Healthy",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/fresh-n-healthy/fresh-n-healthy-contact-us.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/fresh-n-healthy/fresh-n-healthy__logo.svg",
    employer: {
      id: "tiffany-lea-llc",
      name: "Tiffany Lea LLC",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/tiffany-lea-llc__logo.svg",
    },
    client: {
      id: "fresh-n-healthy-catering",
      name: "Fresh N' Healthy Catering",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/fresh-n-healthy__logo.svg",
    },
    tags: [
      "2016",
      "agile",
      "cms-wordpress",
      "consultant",
      "data-mysql",
      "responsive",
    ],
    categories: ["cms", "data", "project-type", "role", "sdlc", "year"],
    tagsByCategory: {
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cms-wordpress", name: "Wordpress", display: true }],
      },
      data: {
        id: "data",
        name: "Data",
        tags: [{ id: "data-mysql", name: "MySQL", display: true }],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [{ id: "responsive", name: "Responsive", display: true }],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [{ id: "consultant", name: "Consultant", display: true }],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "agile", name: "Agile", display: true }],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2016", name: "2016", display: true }],
      },
    },
    displayName: "Fresh N' Healthy (2016)",
  },
  {
    id: "skechers-admin",
    name: "Skechers - Admin",
    date: "2015-09-10",
    description:
      "Multi locale admin portal for skechers.com EN-US, DE-DE, EN-CA, FR-CA, ES-ES, EN-GB.",
    features: [
      {
        heading: "Features",
        items: [
          "Manage Page Content",
          "Manage Transactional Emails",
          "Manage Orders",
          "Manage Customers",
          "Manage Shipping",
          "Manage Admin Users",
          "Manage Product content, data and images",
          "Manage Categories, Brands, and Catalog",
          "Manage Translations",
        ],
      },
    ],
    url: null,
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-admin/skechers-admin-content-page-builder.png",
        originalAlt: "Skechers - Admin",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-admin/skechers-admin-content-page-builder.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-admin/skechers-admin-content-saved-widgets.png",
        originalAlt: "Skechers - Admin",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-admin/skechers-admin-content-saved-widgets.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-admin/skechers-admin-catalog-product-detail.png",
        originalAlt: "Skechers - Admin",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-admin/skechers-admin-catalog-product-detail.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-admin/skechers-admin-customers.png",
        originalAlt: "Skechers - Admin",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-admin/skechers-admin-customers.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-admin/skechers-admin-catalog-category-detail.png",
        originalAlt: "Skechers - Admin",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-admin/skechers-admin-catalog-category-detail.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-admin/skechers-admin-emails.png",
        originalAlt: "Skechers - Admin",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-admin/skechers-admin-emails.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-admin/skechers-admin-catalog-product-listing.png",
        originalAlt: "Skechers - Admin",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-admin/skechers-admin-catalog-product-listing.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-admin/skechers-admin-catalog-category-listing.png",
        originalAlt: "Skechers - Admin",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-admin/skechers-admin-catalog-category-listing.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-admin/Admin%20Copy__logo.svg",
    employer: {
      id: "skechers",
      name: "Skechers USA Inc",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/skechers__logo.svg",
    },
    client: {
      id: "skechers",
      name: "Skechers",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/skechers__logo.svg",
    },
    tags: [
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "cms-configuration",
      "cms-custom-in-house",
      "coffeescript",
      "css",
      "data-cloudant",
      "data-couch-db",
      "e-commerce",
      "ecom-custom-in-house",
      "framework-angularjs",
      "front-end",
      "html",
      "javascript",
      "json",
      "lead",
      "library-underscore-js",
      "library-zepto-js",
      "manager",
      "scrum",
      "tooling-babel",
      "tooling-eslint",
      "type-e-commerce",
      "type-intranet",
      "ux-information-architecture",
      "ux-usability",
    ],
    categories: [
      "cms",
      "data",
      "e-commerce",
      "framework",
      "industry",
      "language",
      "project-type",
      "role",
      "sdlc",
      "tooling",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      cms: {
        id: "cms",
        name: "CMS",
        tags: [
          { id: "cms-custom-in-house", name: "Custom in-house", display: true },
        ],
      },
      data: {
        id: "data",
        name: "Data",
        tags: [
          { id: "data-cloudant", name: "Cloudant", display: true },
          { id: "data-couch-db", name: "CouchDB", display: true },
        ],
      },
      "e-commerce": {
        id: "e-commerce",
        name: "E-Commerce",
        tags: [
          {
            id: "ecom-custom-in-house",
            name: "Custom in-house",
            display: true,
          },
        ],
      },
      framework: {
        id: "framework",
        name: "Framework",
        tags: [{ id: "framework-angularjs", name: "AngularJS", display: true }],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "e-commerce", name: "E-Commerce", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "coffeescript", name: "CoffeeScript", display: true },
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "json", name: "JSON", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [
          { id: "type-e-commerce", name: "E-Commerce", display: true },
          { id: "type-intranet", name: "Intranet", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
          { id: "lead", name: "Lead", display: true },
          { id: "manager", name: "Manager", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "scrum", name: "Scrum", display: true }],
      },
      tooling: {
        id: "tooling",
        name: "Tooling",
        tags: [
          { id: "tooling-babel", name: "Babel", display: true },
          { id: "tooling-eslint", name: "ESLint", display: true },
          { id: "library-underscore-js", name: "Underscore.js", display: true },
          { id: "library-zepto-js", name: "Zepto.js", display: true },
        ],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          {
            id: "ux-information-architecture",
            name: "Information Architecture",
            display: true,
          },
          { id: "ux-usability", name: "Usability", display: true },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [
          { id: "2014", name: "2014", display: true },
          { id: "2015", name: "2015", display: true },
          { id: "2016", name: "2016", display: true },
          { id: "2017", name: "2017", display: true },
          { id: "2018", name: "2018", display: true },
        ],
      },
    },
    displayName: "Skechers - Admin (2015)",
  },
  {
    id: "skechers-en-us",
    name: "Skechers - USA",
    date: "2015-09-10",
    description: "Consumer-facing e-commerce site rebuilt from the ground up.",
    features: [],
    url: "https://www.skechers.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-home.png",
        originalAlt: "Skechers - USA",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-navigation-tier-2.png",
        originalAlt: "Skechers - USA",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-navigation-tier-2.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-listing.png",
        originalAlt: "Skechers - USA",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-listing.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-listing-filters.png",
        originalAlt: "Skechers - USA",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-listing-filters.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-detail.png",
        originalAlt: "Skechers - USA",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-detail.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-add-to-cart.png",
        originalAlt: "Skechers - USA",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-add-to-cart.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-cart.png",
        originalAlt: "Skechers - USA",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-cart.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-checkout.png",
        originalAlt: "Skechers - USA",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-checkout.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-search.png",
        originalAlt: "Skechers - USA",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-search.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us__logo.svg",
    employer: {
      id: "skechers",
      name: "Skechers USA Inc",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/skechers__logo.svg",
    },
    client: {
      id: "skechers",
      name: "Skechers",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/skechers__logo.svg",
    },
    tags: [
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "aws-cloudfront",
      "cms-custom-in-house",
      "coffeescript",
      "data-cloudant",
      "data-couch-db",
      "ecom-custom-in-house",
      "framework-backbone-js",
      "framework-react",
      "google-tag-manager",
      "javascript",
      "manager",
      "responsive",
      "scrum",
      "tooling-requirejs",
      "type-e-commerce",
      "ux-user-testing",
    ],
    categories: [
      "analytics",
      "aws",
      "cms",
      "data",
      "e-commerce",
      "framework",
      "language",
      "project-type",
      "role",
      "sdlc",
      "tooling",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          {
            id: "google-tag-manager",
            name: "Google Tag Manager",
            display: true,
          },
        ],
      },
      aws: {
        id: "aws",
        name: "AWS",
        tags: [{ id: "aws-cloudfront", name: "CloudFront", display: true }],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [
          { id: "cms-custom-in-house", name: "Custom in-house", display: true },
        ],
      },
      data: {
        id: "data",
        name: "Data",
        tags: [
          { id: "data-cloudant", name: "Cloudant", display: true },
          { id: "data-couch-db", name: "CouchDB", display: true },
        ],
      },
      "e-commerce": {
        id: "e-commerce",
        name: "E-Commerce",
        tags: [
          {
            id: "ecom-custom-in-house",
            name: "Custom in-house",
            display: true,
          },
        ],
      },
      framework: {
        id: "framework",
        name: "Framework",
        tags: [
          { id: "framework-backbone-js", name: "Backbone.js", display: true },
          { id: "framework-react", name: "React", display: true },
        ],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "coffeescript", name: "CoffeeScript", display: true },
          { id: "javascript", name: "JavaScript", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [
          { id: "type-e-commerce", name: "E-Commerce", display: true },
          { id: "responsive", name: "Responsive", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [{ id: "manager", name: "Manager", display: true }],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "scrum", name: "Scrum", display: true }],
      },
      tooling: {
        id: "tooling",
        name: "Tooling",
        tags: [{ id: "tooling-requirejs", name: "RequireJS", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [{ id: "ux-user-testing", name: "User Testing", display: true }],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [
          { id: "2014", name: "2014", display: true },
          { id: "2015", name: "2015", display: true },
          { id: "2016", name: "2016", display: true },
          { id: "2017", name: "2017", display: true },
          { id: "2018", name: "2018", display: true },
        ],
      },
    },
    displayName: "Skechers - USA (2015)",
  },
  {
    id: "skechers-friendship-walk-2015",
    name: "Skechers Friendship Walk",
    date: "2015-06-15",
    description:
      "SKECHERS Pier to Pier Friendship Walk event signup and donation site, email campaigns, system admin. ",
    features: [],
    url: "https://www.skechersfriendshipwalk.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2015/skechers-friendship-walk-2015-home.png",
        originalAlt: "Skechers Friendship Walk",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2015/skechers-friendship-walk-2015-home.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2015/skechers-friendship-walk-2015__logo.svg",
    employer: {
      id: "skechers",
      name: "Skechers USA Inc",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/skechers__logo.svg",
    },
    client: {
      id: "skechers-friendship-walk",
      name: "Skechers Friendship Walk",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/skechers-friendship-walk__logo.svg",
    },
    tags: [
      "2015",
      "google-analytics",
      "responsive",
      "role-design",
      "scrum",
      "type-fundraising",
    ],
    categories: ["analytics", "project-type", "role", "sdlc", "year"],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [
          { id: "type-fundraising", name: "Fundraising", display: true },
          { id: "responsive", name: "Responsive", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [{ id: "role-design", name: "Design", display: true }],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "scrum", name: "Scrum", display: true }],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2015", name: "2015", display: true }],
      },
    },
    displayName: "Skechers Friendship Walk (2015)",
  },
  {
    id: "skechers-friendship-walk-2014",
    name: "Skechers Friendship Walk",
    date: "2014-06-15",
    description:
      "SKECHERS Pier to Pier Friendship Walk event signup and donation site, email campaigns, system admin. ",
    features: [],
    url: "https://www.skechersfriendshipwalk.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2014/skechers-friendship-walk-2014-home.png",
        originalAlt: "Skechers Friendship Walk",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2014/skechers-friendship-walk-2014-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2014/skechers-friendship-walk-2014-meet-our-kids.png",
        originalAlt: "Skechers Friendship Walk",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2014/skechers-friendship-walk-2014-meet-our-kids.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2014/skechers-friendship-walk-2014-donate.png",
        originalAlt: "Skechers Friendship Walk",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2014/skechers-friendship-walk-2014-donate.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2014/skechers-friendship-walk-2014-about.png",
        originalAlt: "Skechers Friendship Walk",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2014/skechers-friendship-walk-2014-about.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2014/skechers-friendship-walk-2014__logo.svg",
    employer: {
      id: "skechers",
      name: "Skechers USA Inc",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/skechers__logo.svg",
    },
    client: {
      id: "skechers-friendship-walk",
      name: "Skechers Friendship Walk",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/skechers-friendship-walk__logo.svg",
    },
    tags: [
      "2014",
      "google-analytics",
      "responsive",
      "role-design",
      "scrum",
      "type-fundraising",
    ],
    categories: ["analytics", "project-type", "role", "sdlc", "year"],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [
          { id: "type-fundraising", name: "Fundraising", display: true },
          { id: "responsive", name: "Responsive", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [{ id: "role-design", name: "Design", display: true }],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "scrum", name: "Scrum", display: true }],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2014", name: "2014", display: true }],
      },
    },
    displayName: "Skechers Friendship Walk (2014)",
  },
  {
    id: "skechers-corporate",
    name: "Skechers Corporate",
    date: "2014-06-01",
    description:
      "Maintained skx.com (a simple Jekyll site) with routine content updates.",
    features: [],
    url: "https://www.skx.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-corporate/skechers-corporate.png",
        originalAlt: "Skechers Corporate",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-corporate/skechers-corporate.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-corporate/skechers__logo.svg",
    employer: {
      id: "skechers",
      name: "Skechers USA Inc",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/skechers__logo.svg",
    },
    client: {
      id: "skechers",
      name: "Skechers",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/skechers__logo.svg",
    },
    tags: ["2014", "front-end", "manager", "scrum"],
    categories: ["role", "sdlc", "year"],
    tagsByCategory: {
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "front-end", name: "Front End", display: true },
          { id: "manager", name: "Manager", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "scrum", name: "Scrum", display: true }],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2014", name: "2014", display: true }],
      },
    },
    displayName: "Skechers Corporate (2014)",
  },
  {
    id: "university-of-the-virgin-islands-cgtc",
    name: "University of the Virgin Islands - CGTC",
    date: "2014-03-18",
    description: null,
    features: [
      {
        heading: "Features",
        items: [
          "Developed and maintained in Hannon Hill’s Cascade Server content management system",
          "Fully responsive design optimized for desktop, tablet and smartphones",
          "Branded UVI color scheme and graphics, with accent color selected by the client",
          "Rotating home page banner images with captions and thumbnail navigation",
          "Home page video player",
          "Internal micro site only search as well as option to search full main UVI site",
          "Audience-based (“Information For…”) page content and navigation",
          "Easy-to-maintain Spectate forms integrated into Cascade content pages ",
        ],
      },
    ],
    url: null,
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cgtc/university-of-the-virgin-islands-cgtc-home.png",
        originalAlt: "University of the Virgin Islands - CGTC",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cgtc/university-of-the-virgin-islands-cgtc-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cgtc/university-of-the-virgin-islands-cgtc-standard-page.png",
        originalAlt: "University of the Virgin Islands - CGTC",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cgtc/university-of-the-virgin-islands-cgtc-standard-page.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cgtc/university-of-the-virgin-islands-cgtc-news-listng.png",
        originalAlt: "University of the Virgin Islands - CGTC",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cgtc/university-of-the-virgin-islands-cgtc-news-listng.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cgtc/university-of-the-virgin-islands-cgtc-news-detail.png",
        originalAlt: "University of the Virgin Islands - CGTC",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cgtc/university-of-the-virgin-islands-cgtc-news-detail.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cgtc/CGTC__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "university-of-the-virgin-islands",
      name: "University Of The Virgin Islands",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/university-of-the-virgin-islands__logo.svg",
    },
    tags: ["waterfall"],
    categories: ["sdlc"],
    tagsByCategory: {
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
    },
    displayName: "University of the Virgin Islands - CGTC (2014)",
  },
  {
    id: "greensboro-auto-auction",
    name: "Greensboro Auto Auction",
    date: "2014-03-01",
    description: "Coming soon...",
    features: [],
    url: "https://www.greensboroaa.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/greensboro-auto-auction/greensboro-auto-auction-home.png",
        originalAlt: "Greensboro Auto Auction",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/greensboro-auto-auction/greensboro-auto-auction-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/greensboro-auto-auction/greensboro-auto-auction-search-inventory.png",
        originalAlt: "Greensboro Auto Auction",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/greensboro-auto-auction/greensboro-auto-auction-search-inventory.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/greensboro-auto-auction/greensboro-auto-auction-my-vehicle-list.png",
        originalAlt: "Greensboro Auto Auction",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/greensboro-auto-auction/greensboro-auto-auction-my-vehicle-list.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/greensboro-auto-auction/greensboro-auto-auction-vehicle-details.png",
        originalAlt: "Greensboro Auto Auction",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/greensboro-auto-auction/greensboro-auto-auction-vehicle-details.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/greensboro-auto-auction/greensboro-auto-auction__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "greensboro-auto-auction",
      name: "Greensboro Auto Auction",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/greensboro-auto-auction__logo.svg",
    },
    tags: [
      "2014",
      "consultant",
      "front-end",
      "google-analytics",
      "type-auto-auction",
      "ui-design-review",
      "waterfall",
    ],
    categories: [
      "analytics",
      "project-type",
      "role",
      "sdlc",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [
          { id: "type-auto-auction", name: "Auto Auction", display: false },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "consultant", name: "Consultant", display: true },
          { id: "front-end", name: "Front End", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          { id: "ui-design-review", name: "Design Review", display: true },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2014", name: "2014", display: true }],
      },
    },
    displayName: "Greensboro Auto Auction (2014)",
  },
  {
    id: "university-of-the-virgin-islands-cell",
    name: "University of the Virgin Islands - CELL",
    date: "2014-01-23",
    description: "Coming soon...",
    features: [
      {
        heading: "Features",
        items: [
          "Developed and maintained in Hannon Hill’s Cascade Server content management system",
          "Fully responsive design optimized for desktop, tablet and smartphones",
          "Branded UVI color scheme and graphics, with accent color selected by the client",
          "Rotating home page banner images with captions and thumbnail navigation",
          "Home page video player",
          "Internal micro site only search as well as option to search full main UVI site",
          "Audience-based (“Information For…”) page content and navigation",
          "Easy-to-maintain Spectate forms integrated into Cascade content pages ",
        ],
      },
    ],
    url: "https://cell.uvi.edu",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cell/university-of-the-virgin-islands-cell-home.png",
        originalAlt: "University of the Virgin Islands - CELL",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cell/university-of-the-virgin-islands-cell-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cell/university-of-the-virgin-islands-cell-news-listing.png",
        originalAlt: "University of the Virgin Islands - CELL",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cell/university-of-the-virgin-islands-cell-news-listing.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cell/university-of-the-virgin-islands-cell-news-detail.png",
        originalAlt: "University of the Virgin Islands - CELL",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cell/university-of-the-virgin-islands-cell-news-detail.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cell/university-of-the-virgin-islands-cell-course-listing.png",
        originalAlt: "University of the Virgin Islands - CELL",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cell/university-of-the-virgin-islands-cell-course-listing.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cell/university-of-the-virgin-islands-cell-course-detail.png",
        originalAlt: "University of the Virgin Islands - CELL",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cell/university-of-the-virgin-islands-cell-course-detail.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cell/university-of-the-virgin-islands-cell__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "university-of-the-virgin-islands",
      name: "University Of The Virgin Islands",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/university-of-the-virgin-islands__logo.svg",
    },
    tags: [
      "2014",
      "accessibility-508",
      "cascade-server",
      "cms-configuration",
      "cross-browser-compatibility",
      "css",
      "front-end",
      "full-stack",
      "higher-ed",
      "html",
      "javascript",
      "lead",
      "responsive",
      "type-informational",
      "ux-accessibility",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: [
      "cms",
      "industry",
      "language",
      "project-type",
      "role",
      "sdlc",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "higher-ed", name: "Higher Ed", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [
          { id: "type-informational", name: "Informational", display: true },
          { id: "responsive", name: "Responsive", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
          { id: "full-stack", name: "Full Stack", display: true },
          { id: "lead", name: "Lead", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          { id: "accessibility-508", name: "508 Compliant", display: true },
          { id: "ux-accessibility", name: "Accessibility", display: true },
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2014", name: "2014", display: true }],
      },
    },
    displayName: "University of the Virgin Islands - CELL (2014)",
  },
  {
    id: "university-of-the-virgin-islands-sip",
    name: "University of the Virgin Islands - SIP",
    date: "2014-01-23",
    description: "Coming Soon...",
    features: [
      {
        heading: "Features",
        items: [
          "Developed and maintained in Hannon Hill’s Cascade Server content management system",
          "Fully responsive design optimized for desktop, tablet and smartphones",
          "Branded UVI color scheme and graphics, with accent color selected by the client",
          "Rotating home page banner images with captions and thumbnail navigation",
          "Home page video player",
          "Internal micro site only search as well as option to search full main UVI site",
          "Audience-based (“Information For…”) page content and navigation",
          "Easy-to-maintain Spectate forms integrated into Cascade content pages ",
        ],
      },
    ],
    url: "https://safety.uvi.edu",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-sip/university-of-the-virgin-islands-sip-home.png",
        originalAlt: "University of the Virgin Islands - SIP",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-sip/university-of-the-virgin-islands-sip-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-sip/university-of-the-virgin-islands-sip-news-listing.png",
        originalAlt: "University of the Virgin Islands - SIP",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-sip/university-of-the-virgin-islands-sip-news-listing.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-sip/university-of-the-virgin-islands-sip-news-detail.png",
        originalAlt: "University of the Virgin Islands - SIP",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-sip/university-of-the-virgin-islands-sip-news-detail.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-sip/university-of-the-virgin-islands-sip-standard-page.png",
        originalAlt: "University of the Virgin Islands - SIP",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-sip/university-of-the-virgin-islands-sip-standard-page.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-sip/university-of-the-virgin-islands-sip-faqs.png",
        originalAlt: "University of the Virgin Islands - SIP",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-sip/university-of-the-virgin-islands-sip-faqs.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-sip/university-of-the-virgin-islands-sip-consultation-form.png",
        originalAlt: "University of the Virgin Islands - SIP",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-sip/university-of-the-virgin-islands-sip-consultation-form.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-sip/university-of-the-virgin-islands-sip__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "university-of-the-virgin-islands",
      name: "University Of The Virgin Islands",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/university-of-the-virgin-islands__logo.svg",
    },
    tags: [
      "2014",
      "accessibility-508",
      "cascade-server",
      "cms-configuration",
      "cross-browser-compatibility",
      "css",
      "front-end",
      "full-stack",
      "higher-ed",
      "html",
      "javascript",
      "lead",
      "type-informational",
      "ux-accessibility",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: [
      "cms",
      "industry",
      "language",
      "project-type",
      "role",
      "sdlc",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "higher-ed", name: "Higher Ed", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [
          { id: "type-informational", name: "Informational", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
          { id: "full-stack", name: "Full Stack", display: true },
          { id: "lead", name: "Lead", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          { id: "accessibility-508", name: "508 Compliant", display: true },
          { id: "ux-accessibility", name: "Accessibility", display: true },
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2014", name: "2014", display: true }],
      },
    },
    displayName: "University of the Virgin Islands - SIP (2014)",
  },
  {
    id: "bassett-furniture-bnet",
    name: "Bassett Furniture - Bnet",
    date: "2014-01-02",
    description: "Bassett Furniture intranet",
    features: [],
    url: null,
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-bnet/bassett-furniture-bnet-2013-home.png",
        originalAlt: "Bassett Furniture - Bnet",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-bnet/bassett-furniture-bnet-2013-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-bnet/bassett-furniture-bnet-2013-interior.png",
        originalAlt: "Bassett Furniture - Bnet",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-bnet/bassett-furniture-bnet-2013-interior.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-bnet/bassett-furniture-bnet__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "bassett-furniture",
      name: "Bassett Furniture",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/bassett__logo.svg",
    },
    tags: [
      "2014",
      "asp",
      "cascade-server",
      "cms-configuration",
      "cms-custom-in-house",
      "css",
      "front-end",
      "full-stack",
      "html",
      "javascript",
      "lead",
      "type-intranet",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: ["cms", "language", "project-type", "role", "sdlc", "year"],
    tagsByCategory: {
      cms: {
        id: "cms",
        name: "CMS",
        tags: [
          { id: "cascade-server", name: "Cascade Server", display: true },
          { id: "cms-custom-in-house", name: "Custom in-house", display: true },
        ],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "asp", name: "ASP", display: true },
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [{ id: "type-intranet", name: "Intranet", display: true }],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
          { id: "full-stack", name: "Full Stack", display: true },
          { id: "lead", name: "Lead", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2014", name: "2014", display: true }],
      },
    },
    displayName: "Bassett Furniture - Bnet (2014)",
  },
  {
    id: "holyoke-gas-and-electric",
    name: "Holyoke Gas & Electric",
    date: "2013-12-15",
    description: null,
    features: [
      {
        heading: "Features",
        items: [
          "Responsive Design",
          "Audience-Based Site Maps: When a visitor clicks on one of the audience based icons in the site footer (like “Residential”), they are directed to an audience-based site map, displaying the pages that the client has tagged as relevant to that audience within the CMS",
          "Emergency Notifications: For severe emergencies, the notification pops up in an ajax window on every page of the site. For less severe emergencies there is a banner message that appears on every page of the site",
          "Custom Widgets: Widgets that can be included on pages throughout the site like content, images, videos or external links",
          "Animated banner images: Can be incorporated on any internal page on the site",
          "Google Map integration: Client can enter location details into Cascade to display an interactive Google map",
          "Custom “calculators”: Custom .NET forms that allow the visitor to calculate their own energy costs",
          "Web and social media tracking: The site makes extensive use of web and social media tracking tools so that the client can be well informed of all client interaction with the site",
          "Weather feed: weather-related info for the Holyoke area displayed from a 3rd party tool in the site footer",
          "Google Translate: Easy to access Google translate widget in the footer of every page of the site",
        ],
      },
    ],
    url: "https://www.hged.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/holyoke-gas-and-electric/holyoke-gas-and-electric%400.25x.jpg",
        originalAlt: "Holyoke Gas & Electric",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/holyoke-gas-and-electric/holyoke-gas-and-electric%400.25x.jpg",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/holyoke-gas-and-electric/holyoke-gas-and-electric__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "holyoke-gas-and-electric",
      name: "Holyoke Gas & Electric",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/holyoke-gas-and-electric__logo.svg",
    },
    tags: [
      "2013",
      "cascade-server",
      "cms-configuration",
      "consultant",
      "css",
      "front-end",
      "google-analytics",
      "html",
      "javascript",
      "library-jquery",
      "responsive",
      "utilities",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: [
      "analytics",
      "cms",
      "industry",
      "language",
      "project-type",
      "role",
      "sdlc",
      "tooling",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "utilities", name: "Utilities", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [{ id: "responsive", name: "Responsive", display: true }],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "consultant", name: "Consultant", display: true },
          { id: "front-end", name: "Front End", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      tooling: {
        id: "tooling",
        name: "Tooling",
        tags: [{ id: "library-jquery", name: "jQuery", display: true }],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2013", name: "2013", display: true }],
      },
    },
    displayName: "Holyoke Gas & Electric (2013)",
  },
  {
    id: "university-of-the-virgin-islands",
    name: "University of the Virgin Islands",
    date: "2013-09-01",
    description:
      "This site was completed six weeks ahead of the contracted final launch date and uses a wide variety of Cascade and custom-built functionality.",
    features: [
      {
        heading: "General Features",
        items: [
          "1700+ pages of rich content, including video widgets and news, event and announcement modules that can be customized by category",
          "600+ employee profiles containing detailed biographical information.  Department listing pages can be created anywhere on the site to show a subset of faculty/staff members, as needed",
          "Site-wide “mega menu” that is easily customizable by the client via Cascade, including optional call-to-action buttons and images",
          "Extended footer that includes marketing text, links to popular sections, social media integration and call-to-action buttons, which can all be easily modified by the client in Cascade",
          "Ten audience-based gateway landing pages that are accessible from every page of the site and contain specialized marketing text, news, announcements, events, navigation links, and calls-to-action, targeted to a specific visitor group, including current students, prospective students and the media",
          "Alternate Homepage with an emergency message that allows the webmaster to replace the entire homepage with emergency information and quick links to resources",
          "Standardized academic degree pages that simplify the display of extensive academic program information into tabs",
          "Photo gallery page type that can be reproduced in any section of the site to display an unlimited number of  images with captions and completely maintainable in Cascade",
          "Document directory page that that can be reproduced in any section of the site to display files (PDF/Word/Excel/etc) tagged with a specific category, with additional details like title, date added, file size and type (brochure, form/survey, policy/procedure, publication)",
          "A to Z index which displays links to only specific/highly relevant pages (as selected by page creator/editor in Cascade)",
          "Every page has metadata fields (including page keywords, page descriptions) which can be updated to optimize page content/keywords for search engines",
        ],
      },
      {
        heading: "Calendar Features",
        items: [
          "Customized and responsive Cascade-based calendar",
          "Ability to submit events via a public form, which are quickly and easily reviewed by a Cascade administrator via a workflow and added to the public calendar upon approval",
          "Filtering by category/audience",
          "Printable PDFs for specific categories (Academic Calendar, Official Holidays, etc.)",
        ],
      },
    ],
    url: "https://www.uvi.edu",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-home.png",
        originalAlt: "University of the Virgin Islands",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-navigation.png",
        originalAlt: "University of the Virgin Islands",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-navigation.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-current-students.png",
        originalAlt: "University of the Virgin Islands",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-current-students.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-event-calendar.png",
        originalAlt: "University of the Virgin Islands",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-event-calendar.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-event-detail.png",
        originalAlt: "University of the Virgin Islands",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-event-detail.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-event-submit-an-event.png",
        originalAlt: "University of the Virgin Islands",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-event-submit-an-event.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-news-listing.png",
        originalAlt: "University of the Virgin Islands",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-news-listing.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-news-detail.png",
        originalAlt: "University of the Virgin Islands",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-news-detail.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-academics.png",
        originalAlt: "University of the Virgin Islands",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-academics.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-college-landing.png",
        originalAlt: "University of the Virgin Islands",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-college-landing.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-academic-department.png",
        originalAlt: "University of the Virgin Islands",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-academic-department.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-media-gateway.png",
        originalAlt: "University of the Virgin Islands",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-media-gateway.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-standard-page.png",
        originalAlt: "University of the Virgin Islands",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-standard-page.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-a-z-index.png",
        originalAlt: "University of the Virgin Islands",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-a-z-index.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-directory.png",
        originalAlt: "University of the Virgin Islands",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-directory.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "university-of-the-virgin-islands",
      name: "University Of The Virgin Islands",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/university-of-the-virgin-islands__logo.svg",
    },
    tags: [
      "2013",
      "accessibility-508",
      "cascade-server",
      "cms-configuration",
      "cross-browser-compatibility",
      "front-end",
      "full-stack",
      "higher-ed",
      "lead",
      "responsive",
      "ux-accessibility",
      "waterfall",
    ],
    categories: [
      "cms",
      "industry",
      "project-type",
      "role",
      "sdlc",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "higher-ed", name: "Higher Ed", display: true }],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [{ id: "responsive", name: "Responsive", display: true }],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
          { id: "full-stack", name: "Full Stack", display: true },
          { id: "lead", name: "Lead", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          { id: "accessibility-508", name: "508 Compliant", display: true },
          { id: "ux-accessibility", name: "Accessibility", display: true },
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2013", name: "2013", display: true }],
      },
    },
    displayName: "University of the Virgin Islands (2013)",
  },
  {
    id: "university-of-scranton",
    name: "University of Scranton",
    date: "2013-08-13",
    description: "Coming Soon...",
    features: [],
    url: "https://www.scranton.edu",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-scranton/scranton-1.png",
        originalAlt: "University of Scranton",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-scranton/scranton-1.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-scranton/university-of-scranton__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "university-of-scranton",
      name: "University of Scranton",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/university-of-scranton__logo.svg",
    },
    tags: [
      "2013",
      "accessibility-508",
      "cascade-server",
      "cms-configuration",
      "cross-browser-compatibility",
      "css",
      "front-end",
      "google-analytics",
      "higher-ed",
      "html",
      "javascript",
      "library-jquery",
      "responsive",
      "ux-usability",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: [
      "analytics",
      "cms",
      "industry",
      "language",
      "project-type",
      "role",
      "sdlc",
      "tooling",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "higher-ed", name: "Higher Ed", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [{ id: "responsive", name: "Responsive", display: true }],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      tooling: {
        id: "tooling",
        name: "Tooling",
        tags: [{ id: "library-jquery", name: "jQuery", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          { id: "accessibility-508", name: "508 Compliant", display: true },
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
          { id: "ux-usability", name: "Usability", display: true },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2013", name: "2013", display: true }],
      },
    },
    displayName: "University of Scranton (2013)",
  },
  {
    id: "beacon-technologies-2013",
    name: "Beacon Technologies",
    date: "2013-08-01",
    description: null,
    features: [
      {
        heading: "Features",
        items: [
          "Client highlights dynamically appear throughout the website based on the particular page content",
          "Why Beacon: Real-world case studies and testimonials",
          "Client portfolio for Hosting, Development and Marketing",
          " Responsive design to automatically adapt to different devices (desktops, mobile phones, tablets)",
        ],
      },
      {
        heading: "Responsibilities",
        items: [
          "All original front-end development",
          "Custom Cascade Server integration",
        ],
      },
    ],
    url: "https://www.beacontechnologies.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-2013/beacon-technologies-2013-home.png",
        originalAlt: "Beacon Technologies",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-2013/beacon-technologies-2013-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-2013/beacon-technologies-2013-web-marketing.png",
        originalAlt: "Beacon Technologies",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-2013/beacon-technologies-2013-web-marketing.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-2013/beacon-technologies-2013-projects.png",
        originalAlt: "Beacon Technologies",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-2013/beacon-technologies-2013-projects.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-2013/beacon-technologies-2013-web-development.png",
        originalAlt: "Beacon Technologies",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-2013/beacon-technologies-2013-web-development.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-2013/beacon-technologies-2013-web-hosting.png",
        originalAlt: "Beacon Technologies",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-2013/beacon-technologies-2013-web-hosting.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-2013/beacon-technologies__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/beacon-technologies__logo.svg",
    },
    tags: [
      "2013",
      "cascade-server",
      "cms-configuration",
      "cross-browser-compatibility",
      "css",
      "front-end",
      "google-analytics",
      "html",
      "javascript",
      "library-jquery",
      "responsive",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: [
      "analytics",
      "cms",
      "language",
      "project-type",
      "role",
      "sdlc",
      "tooling",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [{ id: "responsive", name: "Responsive", display: true }],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      tooling: {
        id: "tooling",
        name: "Tooling",
        tags: [{ id: "library-jquery", name: "jQuery", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2013", name: "2013", display: true }],
      },
    },
    displayName: "Beacon Technologies (2013)",
  },
  {
    id: "beacon-technologies-blog",
    name: "Beacon Technologies - Blog",
    date: "2013-08-01",
    description: null,
    features: [
      {
        heading: "Responsibilities",
        items: [
          "All original front-end development",
          "All custom WordPress integration",
        ],
      },
    ],
    url: "https://blog.beacontechnologies.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-blog/beacon-technologies-blog-2013-home.png",
        originalAlt: "Beacon Technologies - Blog",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-blog/beacon-technologies-blog-2013-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-blog/beacon-technologies-blog-2013-detail.png",
        originalAlt: "Beacon Technologies - Blog",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-blog/beacon-technologies-blog-2013-detail.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-blog/beacon-technologies-blog-2013-listing.png",
        originalAlt: "Beacon Technologies - Blog",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-blog/beacon-technologies-blog-2013-listing.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-blog/beacon-technologies-blog__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/beacon-technologies__logo.svg",
    },
    tags: [
      "2013",
      "blog",
      "cms-wordpress",
      "cross-browser-compatibility",
      "css",
      "data-mysql",
      "front-end",
      "google-analytics",
      "html",
      "javascript",
      "library-jquery",
      "responsive",
      "role-design",
      "waterfall",
    ],
    categories: [
      "analytics",
      "cms",
      "data",
      "language",
      "project-type",
      "role",
      "sdlc",
      "tooling",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cms-wordpress", name: "Wordpress", display: true }],
      },
      data: {
        id: "data",
        name: "Data",
        tags: [{ id: "data-mysql", name: "MySQL", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [
          { id: "blog", name: "Blog", display: true },
          { id: "responsive", name: "Responsive", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "role-design", name: "Design", display: true },
          { id: "front-end", name: "Front End", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      tooling: {
        id: "tooling",
        name: "Tooling",
        tags: [{ id: "library-jquery", name: "jQuery", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2013", name: "2013", display: true }],
      },
    },
    displayName: "Beacon Technologies - Blog (2013)",
  },
  {
    id: "whitman-school-of-management-responsive",
    name: "Syracuse University, Whitman School of Management",
    date: "2013-06-01",
    description:
      "The project involved extending all original development to be responsive.",
    features: [
      {
        heading: "Responsibilities",
        items: [
          "Project lead for development and design",
          "Training team on responsive techniques/development",
          "Ensuring accurate execution",
        ],
      },
    ],
    url: "https://whitman.syr.edu",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-home.png",
        originalAlt: "Syracuse University, Whitman School of Management",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-navigation.png",
        originalAlt: "Syracuse University, Whitman School of Management",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-navigation.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-faculty-directory.png",
        originalAlt: "Syracuse University, Whitman School of Management",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-faculty-directory.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-faculty-bio.png",
        originalAlt: "Syracuse University, Whitman School of Management",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-faculty-bio.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-testimonial-listing.png",
        originalAlt: "Syracuse University, Whitman School of Management",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-testimonial-listing.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-testimonial-detail.png",
        originalAlt: "Syracuse University, Whitman School of Management",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-testimonial-detail.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-newsroom.png",
        originalAlt: "Syracuse University, Whitman School of Management",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-newsroom.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-news-detail.png",
        originalAlt: "Syracuse University, Whitman School of Management",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-news-detail.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-faculty-research.png",
        originalAlt: "Syracuse University, Whitman School of Management",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-faculty-research.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-prospective-students.png",
        originalAlt: "Syracuse University, Whitman School of Management",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-prospective-students.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-storytelling.png",
        originalAlt: "Syracuse University, Whitman School of Management",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-storytelling.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-contact-us.png",
        originalAlt: "Syracuse University, Whitman School of Management",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-contact-us.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-faq.png",
        originalAlt: "Syracuse University, Whitman School of Management",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-faq.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-school-of-management__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "syracuse-university-whitman-school-of-management",
      name: "Syracuse University, Whitman School of Management",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/whitman-school-of-management__logo.svg",
    },
    tags: [
      "2013",
      "accessibility-508",
      "cascade-server",
      "cms-configuration",
      "cross-browser-compatibility",
      "css",
      "front-end",
      "higher-ed",
      "html",
      "javascript",
      "library-jquery",
      "responsive",
      "ux-usability",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: [
      "cms",
      "industry",
      "language",
      "project-type",
      "role",
      "sdlc",
      "tooling",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "higher-ed", name: "Higher Ed", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [{ id: "responsive", name: "Responsive", display: true }],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      tooling: {
        id: "tooling",
        name: "Tooling",
        tags: [{ id: "library-jquery", name: "jQuery", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          { id: "accessibility-508", name: "508 Compliant", display: true },
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
          { id: "ux-usability", name: "Usability", display: true },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2013", name: "2013", display: true }],
      },
    },
    displayName: "Syracuse University, Whitman School of Management (2013)",
  },
  {
    id: "bassett-furniture",
    name: "Bassett Furniture",
    date: "2013-06-01",
    description:
      "Bassett Furniture has become a major player in the digital space, working very collaboratively, to grow from just an initial website presence to a company that successfully leverages just about every aspect of digital marketing.  Following a well-planned digital growth strategy, Bassett’s highly creative, well-integrated, e-commerce, content-rich, audience-focused approach at the local and national levels has been amazing.",
    features: [
      {
        heading: "Features",
        items: [
          "Cascade Server CMS",
          "Creative, elegant design for national furniture company",
          "Cool custom “Rooms We Love”, “Fabrics We Love” Apps",
          "E-commerce by Geography (Admin function assigns orders to stores)",
          "Home page jQuery component",
          "Custom product interface from JD Edwards ERP",
          "Nextopia Site Search",
          "Regional Stores managed thru common CMS template",
          "Integration to multiple 3rd party software",
          "Comprehensive Digital Marketing Services",
          "Complex Google Analytics Implementation",
          "Custom Dedicated Hosting Services",
        ],
      },
    ],
    url: "https://www.bassettfurniture.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture/bassett-furniture-2013-home.png",
        originalAlt: "Bassett Furniture",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture/bassett-furniture-2013-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture/bassett-furniture-2013-listing.png",
        originalAlt: "Bassett Furniture",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture/bassett-furniture-2013-listing.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture/bassett-furniture-2013-detail.png",
        originalAlt: "Bassett Furniture",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture/bassett-furniture-2013-detail.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture/bassett-furniture__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "bassett-furniture",
      name: "Bassett Furniture",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/bassett__logo.svg",
    },
    tags: ["2013", "waterfall"],
    categories: ["sdlc", "year"],
    tagsByCategory: {
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2013", name: "2013", display: true }],
      },
    },
    displayName: "Bassett Furniture (2013)",
  },
  {
    id: "north-carolina-technology-association",
    name: "North Carolina Technology Association",
    date: "2013-04-01",
    description:
      "With over 1000 members in NC, including major corporations like Cisco, IBM, Red Hat, Time Warner Cable, Google, Microsoft, and many more, NCTA’s website has become its communication portal across the state. ",
    features: [
      {
        heading: "Features",
        items: [
          "Cascade Server CMS",
          "Responsive site redesign for desktop, tablet and mobile devices",
          "Site search installed with Google Custom Search",
          "Custom Event Calendar and Registration",
          "Google Analytics / Search Engine Optimization",
          "Web Hosting Services",
        ],
      },
      {
        heading: "Highlights",
        items: [
          "Technical lead for responsive development",
          "Technical lead for responsive design",
          "Trained team on responsive development",
        ],
      },
    ],
    url: "https://www.nctech.org",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/north-carolina-technology-association/ncta-1.png",
        originalAlt: "North Carolina Technology Association",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/north-carolina-technology-association/ncta-1.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/north-carolina-technology-association/north-carolina-technology-association__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "north-carolina-technology-association",
      name: "North Carolina Technology Association",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/north-carolina-technology-association__logo.svg",
    },
    tags: [
      "2013",
      "cross-browser-compatibility",
      "css",
      "front-end",
      "html",
      "javascript",
      "responsive",
      "waterfall",
    ],
    categories: [
      "language",
      "project-type",
      "role",
      "sdlc",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [{ id: "responsive", name: "Responsive", display: true }],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [{ id: "front-end", name: "Front End", display: true }],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2013", name: "2013", display: true }],
      },
    },
    displayName: "North Carolina Technology Association (2013)",
  },
  {
    id: "burton-and-burton-2013",
    name: "Burton + Burton - RWD",
    date: "2013-03-01",
    description: "Coming Soon...",
    features: [],
    url: "https://burtonandburton.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2013/burton-and-burton-1.png",
        originalAlt: "Burton + Burton - RWD",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2013/burton-and-burton-1.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2013/burton-and-burton__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "burton-and-burton",
      name: "Burton and Burton",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/burton-and-burton__logo.svg",
    },
    tags: [
      "2013",
      "cascade-server",
      "consultant",
      "css",
      "e-commerce",
      "ecom-custom-in-house",
      "front-end",
      "global",
      "google-analytics",
      "html",
      "javascript",
      "library-jquery",
      "responsive",
      "type-b2b",
      "type-e-commerce",
      "ui-design-review",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: [
      "analytics",
      "cms",
      "e-commerce",
      "industry",
      "language",
      "project-type",
      "role",
      "sdlc",
      "tooling",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      "e-commerce": {
        id: "e-commerce",
        name: "E-Commerce",
        tags: [
          {
            id: "ecom-custom-in-house",
            name: "Custom in-house",
            display: true,
          },
        ],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [
          { id: "e-commerce", name: "E-Commerce", display: true },
          { id: "global", name: "Global", display: true },
        ],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [
          { id: "type-b2b", name: "B2B", display: true },
          { id: "type-e-commerce", name: "E-Commerce", display: true },
          { id: "responsive", name: "Responsive", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "consultant", name: "Consultant", display: true },
          { id: "front-end", name: "Front End", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      tooling: {
        id: "tooling",
        name: "Tooling",
        tags: [{ id: "library-jquery", name: "jQuery", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          { id: "ui-design-review", name: "Design Review", display: true },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2013", name: "2013", display: true }],
      },
    },
    displayName: "Burton + Burton - RWD (2013)",
  },
  {
    id: "artsy-abode",
    name: "Artsy Abode",
    date: "2013-02-26",
    description: null,
    features: [
      {
        heading: "Site-Wide",
        items: [
          "Brand-based graphics in site header that link to topic pages maintainable by the client in Admin",
          "The background color is an appconfig that can be changed by the client via Admin simply by adding a new HEX color code!",
        ],
      },
      {
        heading: "Home page",
        items: [
          "Flash home page slide show from original site replaced by a custom Beacon module that is administered in the Admin site",
          "Customer favorites section on home page populated by mapping products to the “Favorites” category",
          "Promotional graphics (under the rotating banner) editable via topic page",
        ],
      },
      {
        heading: "Other",
        items: [
          "Thumbnail images displayed on the search results page (nonstandard functionality for AspDotNetStorefront)",
          "Enabled product option to display ring sizes",
          "Enhanced store locations page with links to Google maps and maintainable by the client in Admin",
          "Direct integration with Constant Contact for newsletter registration",
          "We also updated the design a bit and made it more modern and fresh",
        ],
      },
    ],
    url: "https://artsyabode.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/artsy-abode/asrtsy-abode-home.png",
        originalAlt: "Artsy Abode",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/artsy-abode/asrtsy-abode-home.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/artsy-abode/artsy-abode__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "artsy-abode",
      name: "Artsy Abode",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/artsy-abode__logo.svg",
    },
    tags: [
      "2013",
      "cms-configuration",
      "cross-browser-compatibility",
      "css",
      "e-commerce",
      "ecomm-aspdotnetstorefront",
      "front-end",
      "google-analytics",
      "html",
      "javascript",
      "type-e-commerce",
      "waterfall",
    ],
    categories: [
      "analytics",
      "e-commerce",
      "industry",
      "language",
      "project-type",
      "role",
      "sdlc",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      "e-commerce": {
        id: "e-commerce",
        name: "E-Commerce",
        tags: [
          {
            id: "ecomm-aspdotnetstorefront",
            name: "AspDotNetStorefront",
            display: true,
          },
        ],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "e-commerce", name: "E-Commerce", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [{ id: "type-e-commerce", name: "E-Commerce", display: true }],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2013", name: "2013", display: true }],
      },
    },
    displayName: "Artsy Abode (2013)",
  },
  {
    id: "lucky-dog",
    name: "Lucky Dog",
    date: "2013-01-02",
    description: "Magento E-commerce",
    features: [],
    url: "https://www.luckydogvolleyball.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/lucky-dog/lucky-dog-home.png",
        originalAlt: "Lucky Dog",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/lucky-dog/lucky-dog-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/lucky-dog/lucky-dog-navigation.png",
        originalAlt: "Lucky Dog",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/lucky-dog/lucky-dog-navigation.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/lucky-dog/lucky-dog-listing.png",
        originalAlt: "Lucky Dog",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/lucky-dog/lucky-dog-listing.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/lucky-dog/lucky-dog-detail.png",
        originalAlt: "Lucky Dog",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/lucky-dog/lucky-dog-detail.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/lucky-dog/lucky-dog__logo.svg",
    employer: {
      id: "tiffany-lea-llc",
      name: "Tiffany Lea LLC",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/tiffany-lea-llc__logo.svg",
    },
    client: {
      id: "lucky-dog",
      name: "Lucky Dog",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/lucky-dog__logo.svg",
    },
    tags: [
      "2013",
      "cms-configuration",
      "e-commerce",
      "ecomm-magento",
      "front-end",
      "type-e-commerce",
      "waterfall",
    ],
    categories: [
      "e-commerce",
      "industry",
      "project-type",
      "role",
      "sdlc",
      "year",
    ],
    tagsByCategory: {
      "e-commerce": {
        id: "e-commerce",
        name: "E-Commerce",
        tags: [{ id: "ecomm-magento", name: "Magento", display: true }],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "e-commerce", name: "E-Commerce", display: true }],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [{ id: "type-e-commerce", name: "E-Commerce", display: true }],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2013", name: "2013", display: true }],
      },
    },
    displayName: "Lucky Dog (2013)",
  },
  {
    id: "cuyamaca-college",
    name: "Cuyamaca College",
    date: "2013-01-01",
    description: null,
    features: [
      {
        heading: "Description",
        items: [
          "Web design and development using Cascade Server",
          "4000+ content pages imported and implemented into the templates",
          "Design provided by a third-party vendor and Beacon was responsible for the creation of a responsive design based on that layout",
          "Buckets for displaying content/images on any content page",
          "Accordions for expanding/collapse functionality on any content page",
          "Documents directory template to display contents of a folder",
          "Customized calendar with a public Submit an Event form",
          "News filtered from District listings, based on school",
          "Optional Last Updated date on interior content pages",
          "Mega site menu that is administered in one location in Cascade and does not require full site publish to update",
          "Several built-in emergency information templates",
          "Editable and optional Call to Action buttons",
          "Photo gallery template",
          "Custom faculty profile pages",
        ],
      },
      {
        heading: "Responsibilities",
        items: [
          "All original front-end development",
          "All custom Cascade Server integration",
        ],
      },
    ],
    url: "https://www.cuyamaca.edu",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/cuyamaca-college/cuyamaca-college-responsive.jpg",
        originalAlt: "Cuyamaca College",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/cuyamaca-college/cuyamaca-college-responsive.jpg",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/cuyamaca-college/cuyamaca-college__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "grossmont-cuyamaca-community-college-district",
      name: "Grossmont-Cuyamaca Community College District",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/grossmont-cuyamaca-community-college-district__logo.svg",
    },
    tags: [
      "2013",
      "accessibility-508",
      "cascade-server",
      "cms-configuration",
      "cross-browser-compatibility",
      "css",
      "front-end",
      "google-analytics",
      "higher-ed",
      "html",
      "javascript",
      "library-jquery",
      "responsive",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: [
      "analytics",
      "cms",
      "industry",
      "language",
      "project-type",
      "role",
      "sdlc",
      "tooling",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "higher-ed", name: "Higher Ed", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [{ id: "responsive", name: "Responsive", display: true }],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      tooling: {
        id: "tooling",
        name: "Tooling",
        tags: [{ id: "library-jquery", name: "jQuery", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          { id: "accessibility-508", name: "508 Compliant", display: true },
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2013", name: "2013", display: true }],
      },
    },
    displayName: "Cuyamaca College (2012)",
  },
  {
    id: "grossmont-cuyamaca-community-college-district",
    name: "Grossmont-Cuyamaca Community College District",
    date: "2013-01-01",
    description: null,
    features: [
      {
        heading: "Description",
        items: [
          "Web design and development using Cascade Server",
          "4000+ content pages imported and implemented into the templates",
          "Design provided by a third-party vendor and Beacon was responsible for the creation of a responsive design based on that layout",
          "Buckets for displaying content/images on any content page",
          "Accordions for expanding/collapse functionality on any content page",
          "Documents directory template to display contents of a folder",
          "Customized calendar with a public Submit an Event form",
          "News filtered from District listings, based on school",
          "Optional Last Updated date on interior content pages",
          "Mega site menu that is administered in one location in Cascade and does not require full site publish to update",
          "Several built-in emergency information templates",
          "Editable and optional Call to Action buttons",
          "Photo gallery template",
          "Custom faculty profile pages",
        ],
      },
      {
        heading: "Responsibilities",
        items: [
          "All original front-end development",
          "All custom Cascade Server integration",
        ],
      },
    ],
    url: "https://www.gcccd.edu",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/grossmont-cuyamaca-community-college-district/gcccd-1.png",
        originalAlt: "Grossmont-Cuyamaca Community College District",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/grossmont-cuyamaca-community-college-district/gcccd-1.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/grossmont-cuyamaca-community-college-district/grossmont-cuyamaca-community-college-district__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "grossmont-cuyamaca-community-college-district",
      name: "Grossmont-Cuyamaca Community College District",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/grossmont-cuyamaca-community-college-district__logo.svg",
    },
    tags: [
      "2013",
      "accessibility-508",
      "cascade-server",
      "cms-configuration",
      "cross-browser-compatibility",
      "css",
      "front-end",
      "google-analytics",
      "higher-ed",
      "html",
      "javascript",
      "library-jquery",
      "responsive",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: [
      "analytics",
      "cms",
      "industry",
      "language",
      "project-type",
      "role",
      "sdlc",
      "tooling",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "higher-ed", name: "Higher Ed", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [{ id: "responsive", name: "Responsive", display: true }],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      tooling: {
        id: "tooling",
        name: "Tooling",
        tags: [{ id: "library-jquery", name: "jQuery", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          { id: "accessibility-508", name: "508 Compliant", display: true },
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2013", name: "2013", display: true }],
      },
    },
    displayName: "Grossmont-Cuyamaca Community College District (2012)",
  },
  {
    id: "grossmont-college",
    name: "Grossmont College",
    date: "2013-01-01",
    description: null,
    features: [
      {
        heading: "Description",
        items: [
          "Web design and development using Cascade Server",
          "4000+ content pages imported and implemented into the templates",
          "Design provided by a third-party vendor and Beacon was responsible for the creation of a responsive design based on that layout",
          "Buckets for displaying content/images on any content page",
          "Accordions for expanding/collapse functionality on any content page",
          "Documents directory template to display contents of a folder",
          "Customized calendar with a public Submit an Event form",
          "News filtered from District listings, based on school",
          "Optional Last Updated date on interior content pages",
          "Mega site menu that is administered in one location in Cascade and does not require full site publish to update",
          "Several built-in emergency information templates",
          "Editable and optional Call to Action buttons",
          "Photo gallery template",
          "Custom faculty profile pages",
        ],
      },
      {
        heading: "Responsibilities",
        items: [
          "All original front-end development",
          "All custom Cascade Server integration",
        ],
      },
    ],
    url: "https://www.grossmont.edu",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/grossmont-college/grossmont-college-responsive.jpg",
        originalAlt: "Grossmont College",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/grossmont-college/grossmont-college-responsive.jpg",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/grossmont-college/grossmont-college__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "grossmont-cuyamaca-community-college-district",
      name: "Grossmont-Cuyamaca Community College District",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/grossmont-cuyamaca-community-college-district__logo.svg",
    },
    tags: [
      "2013",
      "accessibility-508",
      "cascade-server",
      "cms-configuration",
      "cross-browser-compatibility",
      "css",
      "front-end",
      "google-analytics",
      "higher-ed",
      "html",
      "javascript",
      "library-jquery",
      "responsive",
      "type-mobile",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: [
      "analytics",
      "cms",
      "industry",
      "language",
      "project-type",
      "role",
      "sdlc",
      "tooling",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "higher-ed", name: "Higher Ed", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [
          { id: "type-mobile", name: "Mobile", display: true },
          { id: "responsive", name: "Responsive", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      tooling: {
        id: "tooling",
        name: "Tooling",
        tags: [{ id: "library-jquery", name: "jQuery", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          { id: "accessibility-508", name: "508 Compliant", display: true },
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2013", name: "2013", display: true }],
      },
    },
    displayName: "Grossmont College (2012)",
  },
  {
    id: "furnitureland-south-2012",
    name: "Furnitureland South",
    date: "2012-11-27",
    description: "Coming Soon...",
    features: [],
    url: "https://www.furniturelandsouth.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/furnitureland-south-2012/image-coming-soon.png",
        originalAlt: "Furnitureland South",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/furnitureland-south-2012/image-coming-soon.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/furnitureland-south-2012/furnitureland-south__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "furnitureland-south",
      name: "Furnitureland South",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/furnitureland-south__logo.svg",
    },
    tags: [
      "2012",
      "e-commerce",
      "ecom-custom-in-house",
      "lead",
      "type-e-commerce",
      "waterfall",
    ],
    categories: [
      "e-commerce",
      "industry",
      "project-type",
      "role",
      "sdlc",
      "year",
    ],
    tagsByCategory: {
      "e-commerce": {
        id: "e-commerce",
        name: "E-Commerce",
        tags: [
          {
            id: "ecom-custom-in-house",
            name: "Custom in-house",
            display: true,
          },
        ],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "e-commerce", name: "E-Commerce", display: true }],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [{ id: "type-e-commerce", name: "E-Commerce", display: true }],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [{ id: "lead", name: "Lead", display: true }],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2012", name: "2012", display: true }],
      },
    },
    displayName: "Furnitureland South (2012)",
  },
  {
    id: "whitman-school-of-management",
    name: "Syracuse University, Whitman School of Management",
    date: "2012-10-01",
    description: null,
    features: [
      {
        heading: "Responsibilities",
        items: [
          "All original front-end development",
          "All custom Cascade Server integration",
        ],
      },
    ],
    url: "https://whitman.syr.edu",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-home.png",
        originalAlt: "Syracuse University, Whitman School of Management",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-navigation.png",
        originalAlt: "Syracuse University, Whitman School of Management",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-navigation.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-storytelling.png",
        originalAlt: "Syracuse University, Whitman School of Management",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-storytelling.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-faculty-directory.png",
        originalAlt: "Syracuse University, Whitman School of Management",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-faculty-directory.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-faculty-bio.png",
        originalAlt: "Syracuse University, Whitman School of Management",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-faculty-bio.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-testimonial-listing.png",
        originalAlt: "Syracuse University, Whitman School of Management",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-testimonial-listing.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-testimonial-detail.png",
        originalAlt: "Syracuse University, Whitman School of Management",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-testimonial-detail.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-newsroom.png",
        originalAlt: "Syracuse University, Whitman School of Management",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-newsroom.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-news-detail.png",
        originalAlt: "Syracuse University, Whitman School of Management",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-news-detail.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-prospective-students.png",
        originalAlt: "Syracuse University, Whitman School of Management",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-prospective-students.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-faqs.png",
        originalAlt: "Syracuse University, Whitman School of Management",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-faqs.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-faculty-research.png",
        originalAlt: "Syracuse University, Whitman School of Management",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-faculty-research.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-contact-us.png",
        originalAlt: "Syracuse University, Whitman School of Management",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-contact-us.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-school-of-management__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "syracuse-university-whitman-school-of-management",
      name: "Syracuse University, Whitman School of Management",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/whitman-school-of-management__logo.svg",
    },
    tags: [
      "2012",
      "accessibility-508",
      "cascade-server",
      "cms-configuration",
      "cross-browser-compatibility",
      "css",
      "front-end",
      "higher-ed",
      "html",
      "javascript",
      "library-jquery",
      "ux-usability",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: [
      "cms",
      "industry",
      "language",
      "role",
      "sdlc",
      "tooling",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "higher-ed", name: "Higher Ed", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      tooling: {
        id: "tooling",
        name: "Tooling",
        tags: [{ id: "library-jquery", name: "jQuery", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          { id: "accessibility-508", name: "508 Compliant", display: true },
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
          { id: "ux-usability", name: "Usability", display: true },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2012", name: "2012", display: true }],
      },
    },
    displayName: "Syracuse University, Whitman School of Management (2012)",
  },
  {
    id: "southeastern-baptist-theological-seminary",
    name: "Southeastern Baptist Theological Seminary",
    date: "2012-08-30",
    description: "Consulted on project implementation",
    features: [
      {
        heading: "Features",
        items: [
          "Cascade Server CMS site",
          "Complex home page, CMS maintained flash components",
          "Complex CMS workflow/approval process for content updates",
          "Emergency, site-wide status message function",
          'Client can create "micro sites" for any department within the university',
          "Integration with campus-based applications including campus calendar and faculty pages",
          "Web Hosting services, including SAAS Cascade Server licensing",
        ],
      },
    ],
    url: "https://www.sebts.edu",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/southeastern-baptist-theological-seminary/sebts-home.png",
        originalAlt: "Southeastern Baptist Theological Seminary",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/southeastern-baptist-theological-seminary/sebts-home.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/southeastern-baptist-theological-seminary/southeastern-baptist-theological-seminary__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "southeastern-baptist-theological-seminary",
      name: "Southeastern Baptist Theological Seminary",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/southeastern-baptist-theological-seminary__logo.svg",
    },
    tags: [
      "2012",
      "accessibility-508",
      "cascade-server",
      "consultant",
      "cross-browser-compatibility",
      "css",
      "google-analytics",
      "higher-ed",
      "html",
      "javascript",
      "ux-accessibility",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: [
      "analytics",
      "cms",
      "industry",
      "language",
      "role",
      "sdlc",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "higher-ed", name: "Higher Ed", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [{ id: "consultant", name: "Consultant", display: true }],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          { id: "accessibility-508", name: "508 Compliant", display: true },
          { id: "ux-accessibility", name: "Accessibility", display: true },
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2012", name: "2012", display: true }],
      },
    },
    displayName: "Southeastern Baptist Theological Seminary (2012)",
  },
  {
    id: "bassett-furniture-hgtv-home",
    name: "Bassett Furniture - HGTV Home",
    date: "2012-07-01",
    description:
      "After being selected as a home furnishings partner/brand for HGTV, Bassett Furniture developed a new website to represent its new line for HGTV.",
    features: [],
    url: "https://www.hgtvhomefurniture.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-hgtv-home/hgtv-home.png",
        originalAlt: "Bassett Furniture - HGTV Home",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-hgtv-home/hgtv-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-hgtv-home/hgtv-collection-listing.png",
        originalAlt: "Bassett Furniture - HGTV Home",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-hgtv-home/hgtv-collection-listing.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-hgtv-home/hgtv-collection-detail.png",
        originalAlt: "Bassett Furniture - HGTV Home",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-hgtv-home/hgtv-collection-detail.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-hgtv-home/bassett-furniture-hgtv-home__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "bassett-furniture",
      name: "Bassett Furniture",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/bassett__logo.svg",
    },
    tags: [
      "2012",
      "consultant",
      "e-commerce",
      "lead",
      "type-brand",
      "type-e-commerce",
      "waterfall",
    ],
    categories: ["industry", "project-type", "role", "sdlc", "year"],
    tagsByCategory: {
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "e-commerce", name: "E-Commerce", display: true }],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [
          { id: "type-brand", name: "Brand", display: false },
          { id: "type-e-commerce", name: "E-Commerce", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "consultant", name: "Consultant", display: true },
          { id: "lead", name: "Lead", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2012", name: "2012", display: true }],
      },
    },
    displayName: "Bassett Furniture - HGTV Home (2012)",
  },
  {
    id: "tufenkian-outlet",
    name: "Tufenkian Outlet",
    date: "2012-06-01",
    description: null,
    features: [
      {
        heading: "Responsibilities",
        items: [
          "All original front-end development",
          "AspDotNetStorefront integration",
        ],
      },
    ],
    url: "https://www.tufenkianoutlet.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tufenkian-outlet/tufenkian-outlet-home.png",
        originalAlt: "Tufenkian Outlet",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tufenkian-outlet/tufenkian-outlet-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tufenkian-outlet/tufenkian-outlet-listing.png",
        originalAlt: "Tufenkian Outlet",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tufenkian-outlet/tufenkian-outlet-listing.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tufenkian-outlet/tufenkian-outlet-detail.png",
        originalAlt: "Tufenkian Outlet",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tufenkian-outlet/tufenkian-outlet-detail.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tufenkian-outlet/tufenkian-outlet-mini-cart.png",
        originalAlt: "Tufenkian Outlet",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tufenkian-outlet/tufenkian-outlet-mini-cart.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tufenkian-outlet/tufenkian-outlet-cart.png",
        originalAlt: "Tufenkian Outlet",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tufenkian-outlet/tufenkian-outlet-cart.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tufenkian-outlet/tufenkian-outlet-care.png",
        originalAlt: "Tufenkian Outlet",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tufenkian-outlet/tufenkian-outlet-care.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tufenkian-outlet/tufenkian__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "tufenkian-outlet",
      name: "Tufenkian Outlet",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/tufenkian__logo.svg",
    },
    tags: [
      "cross-browser-compatibility",
      "css",
      "e-commerce",
      "ecomm-aspdotnetstorefront",
      "front-end",
      "google-analytics",
      "html",
      "javascript",
      "library-jquery",
      "type-e-commerce",
      "waterfall",
    ],
    categories: [
      "analytics",
      "e-commerce",
      "industry",
      "language",
      "project-type",
      "role",
      "sdlc",
      "tooling",
      "user-experience-ux",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      "e-commerce": {
        id: "e-commerce",
        name: "E-Commerce",
        tags: [
          {
            id: "ecomm-aspdotnetstorefront",
            name: "AspDotNetStorefront",
            display: true,
          },
        ],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "e-commerce", name: "E-Commerce", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [{ id: "type-e-commerce", name: "E-Commerce", display: true }],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [{ id: "front-end", name: "Front End", display: true }],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      tooling: {
        id: "tooling",
        name: "Tooling",
        tags: [{ id: "library-jquery", name: "jQuery", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
    },
    displayName: "Tufenkian Outlet (2012)",
  },
  {
    id: "nj-resources",
    name: "NJ Resources",
    date: "2012-05-31",
    description: null,
    features: [
      {
        heading: "Features",
        items: [
          "One of a set of 6 inter-related websites for NJR Services Corporation",
          "Cascade Server CMS implementation",
          "Development of web interfaces to back office systems",
          "Consulting",
          "Ongoing maintenance",
        ],
      },
    ],
    url: null,
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-resources/njr-nj-resources-home.png",
        originalAlt: "NJ Resources",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-resources/njr-nj-resources-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-resources/njr-nj-resources-interior.png",
        originalAlt: "NJ Resources",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-resources/njr-nj-resources-interior.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-resources/njr-nj-resources-news-listing.png",
        originalAlt: "NJ Resources",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-resources/njr-nj-resources-news-listing.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-resources/njr-nj-resources-news-detail.png",
        originalAlt: "NJ Resources",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-resources/njr-nj-resources-news-detail.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-resources/njr-nj-resources-search.png",
        originalAlt: "NJ Resources",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-resources/njr-nj-resources-search.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-resources/njr-nj-resources-sitemap.png",
        originalAlt: "NJ Resources",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-resources/njr-nj-resources-sitemap.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-resources/new-jersey-resources__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "njr-services-corporation",
      name: "NJR Services Corporation",
      logo: null,
    },
    tags: [
      "2012",
      "accessibility-508",
      "asp-net",
      "cascade-server",
      "cms-configuration",
      "cross-browser-compatibility",
      "css",
      "front-end",
      "html",
      "javascript",
      "lead",
      "library-jquery",
      "utilities",
      "ux-accessibility",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: [
      "cms",
      "industry",
      "language",
      "role",
      "sdlc",
      "tooling",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "utilities", name: "Utilities", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "asp-net", name: "ASP.NET", display: true },
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
          { id: "lead", name: "Lead", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      tooling: {
        id: "tooling",
        name: "Tooling",
        tags: [{ id: "library-jquery", name: "jQuery", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          { id: "accessibility-508", name: "508 Compliant", display: true },
          { id: "ux-accessibility", name: "Accessibility", display: true },
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2012", name: "2012", display: true }],
      },
    },
    displayName: "NJ Resources (2012)",
  },
  {
    id: "njr-home-services",
    name: "NJR Home Services",
    date: "2012-05-31",
    description: null,
    features: [
      {
        heading: "Features",
        items: [
          "One of a set of 6 inter-related websites for NJR Services Corporation",
          "Cascade Server CMS implementation",
          "Development of web interfaces to back office systems",
          "Consulting",
          "Ongoing maintenance",
        ],
      },
    ],
    url: "https://www.njrhomeservices.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-home-services/njr-njr-home-services-home.png",
        originalAlt: "NJR Home Services",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-home-services/njr-njr-home-services-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-home-services/njr-njr-home-services-interior.png",
        originalAlt: "NJR Home Services",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-home-services/njr-njr-home-services-interior.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-home-services/njr-njr-home-services-reviews.png",
        originalAlt: "NJR Home Services",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-home-services/njr-njr-home-services-reviews.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-home-services/njr-njr-home-services-search.png",
        originalAlt: "NJR Home Services",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-home-services/njr-njr-home-services-search.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-home-services/njr-njr-home-services-sitemap.png",
        originalAlt: "NJR Home Services",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-home-services/njr-njr-home-services-sitemap.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-home-services/new-jersey-home-services__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "njr-services-corporation",
      name: "NJR Services Corporation",
      logo: null,
    },
    tags: [
      "2012",
      "accessibility-508",
      "asp-net",
      "cascade-server",
      "cms-configuration",
      "cross-browser-compatibility",
      "css",
      "front-end",
      "html",
      "javascript",
      "lead",
      "library-jquery",
      "utilities",
      "ux-accessibility",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: [
      "cms",
      "industry",
      "language",
      "role",
      "sdlc",
      "tooling",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "utilities", name: "Utilities", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "asp-net", name: "ASP.NET", display: true },
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
          { id: "lead", name: "Lead", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      tooling: {
        id: "tooling",
        name: "Tooling",
        tags: [{ id: "library-jquery", name: "jQuery", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          { id: "accessibility-508", name: "508 Compliant", display: true },
          { id: "ux-accessibility", name: "Accessibility", display: true },
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2012", name: "2012", display: true }],
      },
    },
    displayName: "NJR Home Services (2012)",
  },
  {
    id: "njr-energy-services",
    name: "NJR Energy Services",
    date: "2012-05-31",
    description: null,
    features: [
      {
        heading: "Features",
        items: [
          "One of a set of 6 inter-related websites for NJR Services Corporation",
          "Cascade Server CMS implementation",
          "Development of web interfaces to back office systems",
          "Consulting",
          "Ongoing maintenance",
        ],
      },
    ],
    url: null,
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-energy-services/njr-njr-energy-services-home.png",
        originalAlt: "NJR Energy Services",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-energy-services/njr-njr-energy-services-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-energy-services/njr-njr-energy-services-interior.png",
        originalAlt: "NJR Energy Services",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-energy-services/njr-njr-energy-services-interior.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-energy-services/njr-njr-energy-services-search.png",
        originalAlt: "NJR Energy Services",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-energy-services/njr-njr-energy-services-search.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-energy-services/njr-njr-energy-services-sitemap.png",
        originalAlt: "NJR Energy Services",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-energy-services/njr-njr-energy-services-sitemap.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-energy-services/new-jersey-energy-services__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "njr-services-corporation",
      name: "NJR Services Corporation",
      logo: null,
    },
    tags: [
      "2012",
      "accessibility-508",
      "asp-net",
      "cascade-server",
      "cms-configuration",
      "cross-browser-compatibility",
      "css",
      "front-end",
      "html",
      "javascript",
      "lead",
      "library-jquery",
      "utilities",
      "ux-accessibility",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: [
      "cms",
      "industry",
      "language",
      "role",
      "sdlc",
      "tooling",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "utilities", name: "Utilities", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "asp-net", name: "ASP.NET", display: true },
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
          { id: "lead", name: "Lead", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      tooling: {
        id: "tooling",
        name: "Tooling",
        tags: [{ id: "library-jquery", name: "jQuery", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          { id: "accessibility-508", name: "508 Compliant", display: true },
          { id: "ux-accessibility", name: "Accessibility", display: true },
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2012", name: "2012", display: true }],
      },
    },
    displayName: "NJR Energy Services (2012)",
  },
  {
    id: "nj-natural-gas",
    name: "NJ Natural Gas",
    date: "2012-05-31",
    description: null,
    features: [
      {
        heading: "Features",
        items: [
          "One of a set of 6 inter-related websites for NJR Services Corporation",
          "Cascade Server CMS implementation",
          "Development of web interfaces to back office systems",
          "Consulting",
          "Ongoing maintenance",
        ],
      },
    ],
    url: "https://www.njng.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-home.png",
        originalAlt: "NJ Natural Gas",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-interior.png",
        originalAlt: "NJ Natural Gas",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-interior.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-login.png",
        originalAlt: "NJ Natural Gas",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-login.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-account-summary.png",
        originalAlt: "NJ Natural Gas",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-account-summary.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-registration.png",
        originalAlt: "NJ Natural Gas",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-registration.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-ways-to-pay.png",
        originalAlt: "NJ Natural Gas",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-ways-to-pay.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-billpay.png",
        originalAlt: "NJ Natural Gas",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-billpay.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-paperless.png",
        originalAlt: "NJ Natural Gas",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-paperless.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-autopay.png",
        originalAlt: "NJ Natural Gas",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-autopay.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-faqs.png",
        originalAlt: "NJ Natural Gas",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-faqs.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-search.png",
        originalAlt: "NJ Natural Gas",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-search.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-sitemap.png",
        originalAlt: "NJ Natural Gas",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-sitemap.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/new-jersey-natural-gas__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "njr-services-corporation",
      name: "NJR Services Corporation",
      logo: null,
    },
    tags: [
      "2012",
      "accessibility-508",
      "asp-net",
      "cascade-server",
      "cms-configuration",
      "cross-browser-compatibility",
      "css",
      "front-end",
      "html",
      "javascript",
      "lead",
      "library-jquery",
      "utilities",
      "ux-accessibility",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: [
      "cms",
      "industry",
      "language",
      "role",
      "sdlc",
      "tooling",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "utilities", name: "Utilities", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "asp-net", name: "ASP.NET", display: true },
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
          { id: "lead", name: "Lead", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      tooling: {
        id: "tooling",
        name: "Tooling",
        tags: [{ id: "library-jquery", name: "jQuery", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          { id: "accessibility-508", name: "508 Compliant", display: true },
          { id: "ux-accessibility", name: "Accessibility", display: true },
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2012", name: "2012", display: true }],
      },
    },
    displayName: "NJ Natural Gas (2012)",
  },
  {
    id: "hartford-university-2012",
    name: "Hartford University - New Homepage",
    date: "2012-03-01",
    description: "Converted flash homepage 'My Story' to jQuery",
    features: [
      {
        heading: "Homepage My Story Feature",
        items: [
          "Randomized thumbnail order on load after the first visit",
          "Each story links to a story page where it displays a YouTube video player",
          "Current stories that are shown and sort order on the first load are controlled within Cascade Server",
          "All story text and images are controlled within Cascade Server",
        ],
      },
      {
        heading: "Responsibilities",
        items: [
          "All original front-end development",
          "All custom Cascade Server integration",
        ],
      },
    ],
    url: "https://www.hartford.edu",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/hartford-university-2012/university-of-hartford-2012-home.png",
        originalAlt: "Hartford University - New Homepage",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/hartford-university-2012/university-of-hartford-2012-home.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/hartford-university-2012/Homepage__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "university-of-hartford",
      name: "University of Hartford",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/university-of-hartford__logo.svg",
    },
    tags: [
      "2012",
      "accessibility-508",
      "cascade-server",
      "cms-configuration",
      "cross-browser-compatibility",
      "css",
      "front-end",
      "higher-ed",
      "html",
      "javascript",
      "library-jquery",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: [
      "cms",
      "industry",
      "language",
      "role",
      "sdlc",
      "tooling",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "higher-ed", name: "Higher Ed", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      tooling: {
        id: "tooling",
        name: "Tooling",
        tags: [{ id: "library-jquery", name: "jQuery", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          { id: "accessibility-508", name: "508 Compliant", display: true },
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2012", name: "2012", display: true }],
      },
    },
    displayName: "Hartford University - New Homepage (2012)",
  },
  {
    id: "bassett-furniture-mobile",
    name: "Bassett Furniture Mobile Site",
    date: "2012-03-01",
    description: null,
    features: [
      {
        heading: "Responsibilities",
        items: [
          "All original front-end development (HTML/CSS/JS)",
          "Some back-end development (ASP)",
          "jQuery Mobile integration",
          "Cascade Server (CMS) integration",
          "Redesigning parts of site based on User Interface and User Experience",
        ],
      },
    ],
    url: "https://www.bassettfurniture.com/mobile/",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-mobile/bassett-mobile-combo-1.png",
        originalAlt: "Bassett Furniture Mobile Site",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-mobile/bassett-mobile-combo-1.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-mobile/bassett-mobile-combo-2.png",
        originalAlt: "Bassett Furniture Mobile Site",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-mobile/bassett-mobile-combo-2.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-mobile/bassett-furniture-mobile__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "bassett-furniture",
      name: "Bassett Furniture",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/bassett__logo.svg",
    },
    tags: [
      "2012",
      "asp",
      "cascade-server",
      "cms-configuration",
      "consultant",
      "cross-browser-compatibility",
      "css",
      "ecom-custom-in-house",
      "front-end",
      "google-analytics",
      "html",
      "javascript",
      "library-jquery",
      "type-e-commerce",
      "type-mobile",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: [
      "analytics",
      "cms",
      "e-commerce",
      "language",
      "project-type",
      "role",
      "sdlc",
      "tooling",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      "e-commerce": {
        id: "e-commerce",
        name: "E-Commerce",
        tags: [
          {
            id: "ecom-custom-in-house",
            name: "Custom in-house",
            display: true,
          },
        ],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "asp", name: "ASP", display: true },
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [
          { id: "type-e-commerce", name: "E-Commerce", display: true },
          { id: "type-mobile", name: "Mobile", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "consultant", name: "Consultant", display: true },
          { id: "front-end", name: "Front End", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      tooling: {
        id: "tooling",
        name: "Tooling",
        tags: [{ id: "library-jquery", name: "jQuery", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2012", name: "2012", display: true }],
      },
    },
    displayName: "Bassett Furniture Mobile Site (2012)",
  },
  {
    id: "texwipe",
    name: "Texwipe",
    date: "2012-01-01",
    description: null,
    features: [
      {
        heading: "Responsibilities",
        items: [
          "All original front-end development (HTML/CSS/JS)",
          "Custom Cascade Server integration (CMS)",
          "AspDotNetStorefront integration (E-Commerce)",
          "Merging navigation between Cascade Server and AspDotNetStorefront",
          "Region-specific content and navigation (custom Cascade Server setup)",
        ],
      },
    ],
    url: "https://www.texwipe.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/texwipe/texwipe-1.png",
        originalAlt: "Texwipe",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/texwipe/texwipe-1.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/texwipe/texwipe__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "texwipe",
      name: "Texwipe",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/texwipe__logo.svg",
    },
    tags: [
      "2012",
      "cascade-server",
      "cms-configuration",
      "cross-browser-compatibility",
      "css",
      "e-commerce",
      "ecomm-aspdotnetstorefront",
      "front-end",
      "google-analytics",
      "html",
      "javascript",
      "library-jquery",
      "medical",
      "type-e-commerce",
      "type-informational",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: [
      "analytics",
      "cms",
      "e-commerce",
      "industry",
      "language",
      "project-type",
      "role",
      "sdlc",
      "tooling",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      "e-commerce": {
        id: "e-commerce",
        name: "E-Commerce",
        tags: [
          {
            id: "ecomm-aspdotnetstorefront",
            name: "AspDotNetStorefront",
            display: true,
          },
        ],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [
          { id: "e-commerce", name: "E-Commerce", display: true },
          { id: "medical", name: "Medical", display: true },
        ],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [
          { id: "type-e-commerce", name: "E-Commerce", display: true },
          { id: "type-informational", name: "Informational", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      tooling: {
        id: "tooling",
        name: "Tooling",
        tags: [{ id: "library-jquery", name: "jQuery", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2012", name: "2012", display: true }],
      },
    },
    displayName: "Texwipe (2011)",
  },
  {
    id: "tamf-ifound-forum",
    name: "TAMF iFound Forum",
    date: "2011-12-15",
    description: "Texas A&M Foundation intranet forums",
    features: [],
    url: null,
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound-forum/texas-a-and-m-foundation-intranet-forum-list.png",
        originalAlt: "TAMF iFound Forum",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound-forum/texas-a-and-m-foundation-intranet-forum-list.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound-forum/texas-a-and-m-foundation-intranet-forum-detail.png",
        originalAlt: "TAMF iFound Forum",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound-forum/texas-a-and-m-foundation-intranet-forum-detail.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound-forum/texas-a-and-m-foundation-ifound-forum__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "texas-am-foundation",
      name: "Texas A&M Foundation",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/texas-a-and-m-foundation__logo.svg",
    },
    tags: [
      "2011",
      "back-end",
      "cms-configuration",
      "data-mysql",
      "front-end",
      "full-stack",
      "php",
      "type-intranet",
      "waterfall",
    ],
    categories: ["data", "language", "project-type", "role", "sdlc", "year"],
    tagsByCategory: {
      data: {
        id: "data",
        name: "Data",
        tags: [{ id: "data-mysql", name: "MySQL", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [{ id: "php", name: "PHP", display: true }],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [{ id: "type-intranet", name: "Intranet", display: true }],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "back-end", name: "Back End", display: true },
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
          { id: "full-stack", name: "Full Stack", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2011", name: "2011", display: true }],
      },
    },
    displayName: "TAMF iFound Forum (2011)",
  },
  {
    id: "tamf-ifound-blog",
    name: "TAMF iFound Blog",
    date: "2011-12-15",
    description: "Texas A&M Foundation intranet blog",
    features: [],
    url: null,
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound-blog/texas-a-and-m-foundation-intranet-blog-home.png",
        originalAlt: "TAMF iFound Blog",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound-blog/texas-a-and-m-foundation-intranet-blog-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound-blog/texas-a-and-m-foundation-intranet-blog-detail.png",
        originalAlt: "TAMF iFound Blog",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound-blog/texas-a-and-m-foundation-intranet-blog-detail.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound-blog/texas-a-and-m-foundation-ifound-blog__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "texas-am-foundation",
      name: "Texas A&M Foundation",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/texas-a-and-m-foundation__logo.svg",
    },
    tags: [
      "2011",
      "blog",
      "cms-wordpress",
      "data-mysql",
      "type-intranet",
      "waterfall",
    ],
    categories: ["cms", "data", "project-type", "sdlc", "year"],
    tagsByCategory: {
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cms-wordpress", name: "Wordpress", display: true }],
      },
      data: {
        id: "data",
        name: "Data",
        tags: [{ id: "data-mysql", name: "MySQL", display: true }],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [
          { id: "blog", name: "Blog", display: true },
          { id: "type-intranet", name: "Intranet", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2011", name: "2011", display: true }],
      },
    },
    displayName: "TAMF iFound Blog (2011)",
  },
  {
    id: "tamf-ifound",
    name: "TAMF iFound",
    date: "2011-12-15",
    description: "Texas A&M Foundation intranet ",
    features: [],
    url: null,
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound/texas-a-and-m-foundation-intranet-home.png",
        originalAlt: "TAMF iFound",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound/texas-a-and-m-foundation-intranet-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound/texas-a-and-m-foundation-intranet-home%20copy.png",
        originalAlt: "TAMF iFound",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound/texas-a-and-m-foundation-intranet-home%20copy.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound/texas-a-and-m-foundation-intranet-profile.png",
        originalAlt: "TAMF iFound",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound/texas-a-and-m-foundation-intranet-profile.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound/texas-a-and-m-foundation-intranet-calendar-month.png",
        originalAlt: "TAMF iFound",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound/texas-a-and-m-foundation-intranet-calendar-month.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound/texas-a-and-m-foundation-intranet-calendar-week.png",
        originalAlt: "TAMF iFound",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound/texas-a-and-m-foundation-intranet-calendar-week.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound/texas-a-and-m-foundation-intranet-calendar-day.png",
        originalAlt: "TAMF iFound",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound/texas-a-and-m-foundation-intranet-calendar-day.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound/texas-a-and-m-foundation-ifound__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "texas-am-foundation",
      name: "Texas A&M Foundation",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/texas-a-and-m-foundation__logo.svg",
    },
    tags: [
      "2011",
      "back-end",
      "cascade-server",
      "cms-configuration",
      "front-end",
      "full-stack",
      "lead",
      "type-intranet",
      "waterfall",
    ],
    categories: ["cms", "project-type", "role", "sdlc", "year"],
    tagsByCategory: {
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [{ id: "type-intranet", name: "Intranet", display: true }],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "back-end", name: "Back End", display: true },
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
          { id: "full-stack", name: "Full Stack", display: true },
          { id: "lead", name: "Lead", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2011", name: "2011", display: true }],
      },
    },
    displayName: "TAMF iFound (2011)",
  },
  {
    id: "los-alamos-national-laboratory",
    name: "Los Alamos National Laboratory",
    date: "2011-12-01",
    description: "Coming Soon...",
    features: [],
    url: "https://www.lanl.gov",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/los-alamos-national-laboratory/lanl-home.png",
        originalAlt: "Los Alamos National Laboratory",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/los-alamos-national-laboratory/lanl-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/los-alamos-national-laboratory/lanl-listing.png",
        originalAlt: "Los Alamos National Laboratory",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/los-alamos-national-laboratory/lanl-listing.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/los-alamos-national-laboratory/lanl-landing.png",
        originalAlt: "Los Alamos National Laboratory",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/los-alamos-national-laboratory/lanl-landing.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/los-alamos-national-laboratory/lanl-news-and-media.png",
        originalAlt: "Los Alamos National Laboratory",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/los-alamos-national-laboratory/lanl-news-and-media.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/los-alamos-national-laboratory/lanl-interior.png",
        originalAlt: "Los Alamos National Laboratory",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/los-alamos-national-laboratory/lanl-interior.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/los-alamos-national-laboratory/lanl-dev-notes.png",
        originalAlt: "Los Alamos National Laboratory",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/los-alamos-national-laboratory/lanl-dev-notes.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/los-alamos-national-laboratory/los-alamos-national-laboratory__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "los-alamos-national-laboratory",
      name: "Los Alamos National Laboratory",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/los-alamos-national-laboratory__logo.svg",
    },
    tags: [
      "2011",
      "cross-browser-compatibility",
      "front-end",
      "javascript",
      "waterfall",
    ],
    categories: ["language", "role", "sdlc", "user-experience-ux", "year"],
    tagsByCategory: {
      language: {
        id: "language",
        name: "Language",
        tags: [{ id: "javascript", name: "JavaScript", display: true }],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [{ id: "front-end", name: "Front End", display: true }],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2011", name: "2011", display: true }],
      },
    },
    displayName: "Los Alamos National Laboratory (2011)",
  },
  {
    id: "basin-electric-copy-site",
    name: "Basin Electric - Copy Site Script",
    date: "2011-11-01",
    description:
      "This script will copy one site into a new site within Cascade Server CMS. Automating a tedious task that was a full-time 3-month long job for 3 people.",
    features: [],
    url: null,
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/basin-electric-copy-site/basin-eletric-copt-site-script.png",
        originalAlt: "Basin Electric - Copy Site Script",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/basin-electric-copy-site/basin-eletric-copt-site-script.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/basin-electric-copy-site/basin-electric-power-cooperative__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "basin-electric-power-cooperative",
      name: "Basin Electric Power Cooperative",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/basin-electric-power-cooperative__logo.svg",
    },
    tags: [
      "2011",
      "cascade-server",
      "cms-configuration",
      "css",
      "front-end",
      "html",
      "php",
      "utilities",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: ["cms", "industry", "language", "role", "sdlc", "year"],
    tagsByCategory: {
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "utilities", name: "Utilities", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "php", name: "PHP", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2011", name: "2011", display: true }],
      },
    },
    displayName: "Basin Electric - Copy Site Script (2011)",
  },
  {
    id: "hartford-university-calendar",
    name: "Hartford University - Calendar Updates",
    date: "2011-10-10",
    description:
      "Major overhaul of calendars to make them dynamic and less strain on Cascade Server publishing and rendering.",
    features: [],
    url: null,
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/hartford-university-calendar/university-of-hartford-calendar-month.png",
        originalAlt: "Hartford University - Calendar Updates",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/hartford-university-calendar/university-of-hartford-calendar-month.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/hartford-university-calendar/university-of-hartford-calendar-day.png",
        originalAlt: "Hartford University - Calendar Updates",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/hartford-university-calendar/university-of-hartford-calendar-day.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/hartford-university-calendar/university-of-hartford-calendar-next-7.png",
        originalAlt: "Hartford University - Calendar Updates",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/hartford-university-calendar/university-of-hartford-calendar-next-7.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/hartford-university-calendar/university-of-hartford-calendar-category.png",
        originalAlt: "Hartford University - Calendar Updates",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/hartford-university-calendar/university-of-hartford-calendar-category.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/hartford-university-calendar/university-of-hartford-calendar-event-detail.png",
        originalAlt: "Hartford University - Calendar Updates",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/hartford-university-calendar/university-of-hartford-calendar-event-detail.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/hartford-university-calendar/university-of-hartford-calendar-any-page.png",
        originalAlt: "Hartford University - Calendar Updates",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/hartford-university-calendar/university-of-hartford-calendar-any-page.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/hartford-university-calendar/Calendar__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "university-of-hartford",
      name: "University of Hartford",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/university-of-hartford__logo.svg",
    },
    tags: [
      "2011",
      "accessibility-508",
      "asp",
      "back-end",
      "cascade-server",
      "cms-configuration",
      "cross-browser-compatibility",
      "css",
      "front-end",
      "full-stack",
      "higher-ed",
      "html",
      "ux-accessibility",
      "velocity",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: [
      "cms",
      "industry",
      "language",
      "role",
      "sdlc",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "higher-ed", name: "Higher Ed", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "asp", name: "ASP", display: true },
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "velocity", name: "Velocity", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "back-end", name: "Back End", display: true },
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
          { id: "full-stack", name: "Full Stack", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          { id: "accessibility-508", name: "508 Compliant", display: true },
          { id: "ux-accessibility", name: "Accessibility", display: true },
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2011", name: "2011", display: true }],
      },
    },
    displayName: "Hartford University - Calendar Updates (2011)",
  },
  {
    id: "beacon-technologies-kb",
    name: "Beacon Technologies - KB",
    date: "2011-09-01",
    description: "Coming Soon...",
    features: [],
    url: null,
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-kb/image-coming-soon.png",
        originalAlt: "Beacon Technologies - KB",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-kb/image-coming-soon.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-kb/beacon-technologies__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/beacon-technologies__logo.svg",
    },
    tags: ["2011", "data-mysql", "drupal", "role-design", "waterfall"],
    categories: ["cms", "data", "role", "sdlc", "year"],
    tagsByCategory: {
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "drupal", name: "Drupal", display: true }],
      },
      data: {
        id: "data",
        name: "Data",
        tags: [{ id: "data-mysql", name: "MySQL", display: true }],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [{ id: "role-design", name: "Design", display: true }],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2011", name: "2011", display: true }],
      },
    },
    displayName: "Beacon Technologies - KB (2011)",
  },
  {
    id: "university-hartford-mobile",
    name: "University of Hartford - Mobile",
    date: "2011-06-01",
    description: "Project consulting for mobile",
    features: [],
    url: "https://www.hartford.edu/default-m.aspx",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-mobile/university-of-hartford-mobile-combo-1.png",
        originalAlt: "University of Hartford - Mobile",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-mobile/university-of-hartford-mobile-combo-1.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-mobile/university-of-hartford-mobile-combo-3.png",
        originalAlt: "University of Hartford - Mobile",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-mobile/university-of-hartford-mobile-combo-3.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-mobile/university-of-hartford-mobile-combo-2.png",
        originalAlt: "University of Hartford - Mobile",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-mobile/university-of-hartford-mobile-combo-2.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-mobile/Mobile__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "university-of-hartford",
      name: "University of Hartford",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/university-of-hartford__logo.svg",
    },
    tags: [
      "2011",
      "accessibility-508",
      "asp-net",
      "consultant",
      "cross-browser-compatibility",
      "css",
      "higher-ed",
      "html",
      "javascript",
      "type-mobile",
      "ux-accessibility",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: [
      "industry",
      "language",
      "project-type",
      "role",
      "sdlc",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "higher-ed", name: "Higher Ed", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "asp-net", name: "ASP.NET", display: true },
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [{ id: "type-mobile", name: "Mobile", display: true }],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [{ id: "consultant", name: "Consultant", display: true }],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          { id: "accessibility-508", name: "508 Compliant", display: true },
          { id: "ux-accessibility", name: "Accessibility", display: true },
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2011", name: "2011", display: true }],
      },
    },
    displayName: "University of Hartford - Mobile (2011)",
  },
  {
    id: "university-houston-2011",
    name: "University of Houston - You are the pride",
    date: "2011-05-01",
    description: null,
    features: [
      {
        heading: "Features",
        items: [
          "Provide cross-browser and Section 508 compliance by re-writing the HTML/CSS/JavaScript applications",
          "Migrate the entire site from its current format into Cascade Server CMS",
          "Add a Blog listing feature into the Cascade Server implementation, which categorizes each blog site entry, and pulls in data from each blog’s RSS feed",
          "Add a Social Media listing page, which organizes each link by category, and type (Facebook, Twitter, YouTube)",
          "Develop PHP-based registration and login functionality, including an Administration section for managing user access",
          "Insert a commenting application (Echo) on certain pages",
          "Provide customized Cascade Server documentation and training",
        ],
      },
    ],
    url: "https://www.uh.edu",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-houston-2011/university-of-houston-yatp-home.png",
        originalAlt: "University of Houston - You are the pride",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-houston-2011/university-of-houston-yatp-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-houston-2011/university-of-houston-yatp-photos.png",
        originalAlt: "University of Houston - You are the pride",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-houston-2011/university-of-houston-yatp-photos.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-houston-2011/university-of-houston-yatp-videos.png",
        originalAlt: "University of Houston - You are the pride",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-houston-2011/university-of-houston-yatp-videos.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-houston-2011/university-of-houston-yatp-top-stories.png",
        originalAlt: "University of Houston - You are the pride",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-houston-2011/university-of-houston-yatp-top-stories.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-houston-2011/university-of-houston-yatp-directory.png",
        originalAlt: "University of Houston - You are the pride",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-houston-2011/university-of-houston-yatp-directory.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-houston-2011/YATP__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "university-houston",
      name: "University of Houston",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/university-of-houston__logo.svg",
    },
    tags: [
      "2011",
      "accessibility-508",
      "cascade-server",
      "cms-configuration",
      "cross-browser-compatibility",
      "css",
      "front-end",
      "google-analytics",
      "higher-ed",
      "html",
      "javascript",
      "php",
      "ux-usability",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: [
      "analytics",
      "cms",
      "industry",
      "language",
      "role",
      "sdlc",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "higher-ed", name: "Higher Ed", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "php", name: "PHP", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          { id: "accessibility-508", name: "508 Compliant", display: true },
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
          { id: "ux-usability", name: "Usability", display: true },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2011", name: "2011", display: true }],
      },
    },
    displayName: "University of Houston - You are the pride (2011)",
  },
  {
    id: "bassett-furniture-fabrics-we-love",
    name: "Bassett Furniture - Fabrics We Love",
    date: "2011-05-01",
    description:
      "An interactive way for customers to find fabrics they love and save their favorites.",
    features: [],
    url: "https://www.bassettfurniture.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-fabrics-we-love/bassett-furniture-fabrics-we-love-1.png",
        originalAlt: "Bassett Furniture - Fabrics We Love",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-fabrics-we-love/bassett-furniture-fabrics-we-love-1.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-fabrics-we-love/bassett-furniture-fabrics-we-love-2.png",
        originalAlt: "Bassett Furniture - Fabrics We Love",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-fabrics-we-love/bassett-furniture-fabrics-we-love-2.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-fabrics-we-love/bassett-furniture-fabrics-we-love-3.png",
        originalAlt: "Bassett Furniture - Fabrics We Love",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-fabrics-we-love/bassett-furniture-fabrics-we-love-3.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-fabrics-we-love/bassett-furniture-fabrics-we-love__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "bassett-furniture",
      name: "Bassett Furniture",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/bassett__logo.svg",
    },
    tags: [
      "2011",
      "asp",
      "back-end",
      "cascade-server",
      "front-end",
      "full-stack",
      "javascript",
      "lead",
      "type-brand",
      "type-informational",
      "waterfall",
    ],
    categories: ["cms", "language", "project-type", "role", "sdlc", "year"],
    tagsByCategory: {
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "asp", name: "ASP", display: true },
          { id: "javascript", name: "JavaScript", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [
          { id: "type-brand", name: "Brand", display: false },
          { id: "type-informational", name: "Informational", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "back-end", name: "Back End", display: true },
          { id: "front-end", name: "Front End", display: true },
          { id: "full-stack", name: "Full Stack", display: true },
          { id: "lead", name: "Lead", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2011", name: "2011", display: true }],
      },
    },
    displayName: "Bassett Furniture - Fabrics We Love (2011)",
  },
  {
    id: "basin-electric-power-cooperative",
    name: "Basin Electric Power Cooperative",
    date: "2011-05-01",
    description: null,
    features: [
      {
        heading: "Responsibilities",
        items: [
          "Importing the existing site content for both Basin Electric Power Cooperative and Dakota Gasification Company into Cascade Server via a custom Web Services (PHP) script",
          "Cascade Server integration",
          "Back-end PHP work on their existing calendar",
          "Back-end PHP and custom Cascade Server integration for new related items in the right column",
        ],
      },
    ],
    url: "https://www.basinelectric.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/basin-electric-power-cooperative/basin-eletric-home.png",
        originalAlt: "Basin Electric Power Cooperative",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/basin-electric-power-cooperative/basin-eletric-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/basin-electric-power-cooperative/basin-eletric-calendar.png",
        originalAlt: "Basin Electric Power Cooperative",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/basin-electric-power-cooperative/basin-eletric-calendar.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/basin-electric-power-cooperative/basin-eletric-right-sidebar.png",
        originalAlt: "Basin Electric Power Cooperative",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/basin-electric-power-cooperative/basin-eletric-right-sidebar.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/basin-electric-power-cooperative/basin-electric-power-cooperative__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "basin-electric-power-cooperative",
      name: "Basin Electric Power Cooperative",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/basin-electric-power-cooperative__logo.svg",
    },
    tags: [
      "2011",
      "cascade-server",
      "cms-configuration",
      "css",
      "front-end",
      "google-analytics",
      "html",
      "javascript",
      "php",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: ["analytics", "cms", "language", "role", "sdlc", "year"],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "php", name: "PHP", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2011", name: "2011", display: true }],
      },
    },
    displayName: "Basin Electric Power Cooperative (2011)",
  },
  {
    id: "bmi-surplus",
    name: "BMI Surplus",
    date: "2011-05-01",
    description: null,
    features: [
      {
        heading: "Project Highlights",
        items: [
          "AspDotNetStorefront Version 9.1",
          "Rotating banner on home page pulling from Featured Products category",
          "Paginated, sortable and filterable category landing pages",
          "Custom fields pulled from backoffice system for product detail page (condition, tested, location, etc.)",
          "Share this button on product detail page",
          "Customized ‘Email a friend’ form that sends questions to customer service",
          "Customized shipping functionality (allow warehouse pickup, self-shipping)",
          "Wire transfer as a payment option",
          "Integration with back-office inventory system (Fishbowl)",
          "Web marketing analysis and recommendations",
          "eNewsletter signup integrated with Constant Contact",
          "Enhanced basic and advanced site search",
        ],
      },
    ],
    url: "https://www.bmius.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bmi-surplus/bmi-surplus-home.png",
        originalAlt: "BMI Surplus",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bmi-surplus/bmi-surplus-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bmi-surplus/bmi-surplus-listing.png",
        originalAlt: "BMI Surplus",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bmi-surplus/bmi-surplus-listing.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bmi-surplus/bmi-surplus-detail.png",
        originalAlt: "BMI Surplus",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bmi-surplus/bmi-surplus-detail.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bmi-surplus/bmi-surplus__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "bmi-surplus",
      name: "BMI Surplus",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/bmi-surplus__logo.svg",
    },
    tags: [
      "2011",
      "asp-net",
      "back-end",
      "cms-configuration",
      "e-commerce",
      "ecomm-aspdotnetstorefront",
      "front-end",
      "full-stack",
      "google-analytics",
      "lead",
      "type-e-commerce",
      "waterfall",
    ],
    categories: [
      "analytics",
      "e-commerce",
      "industry",
      "language",
      "project-type",
      "role",
      "sdlc",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      "e-commerce": {
        id: "e-commerce",
        name: "E-Commerce",
        tags: [
          {
            id: "ecomm-aspdotnetstorefront",
            name: "AspDotNetStorefront",
            display: true,
          },
        ],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "e-commerce", name: "E-Commerce", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [{ id: "asp-net", name: "ASP.NET", display: true }],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [{ id: "type-e-commerce", name: "E-Commerce", display: true }],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "back-end", name: "Back End", display: true },
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
          { id: "full-stack", name: "Full Stack", display: true },
          { id: "lead", name: "Lead", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2011", name: "2011", display: true }],
      },
    },
    displayName: "BMI Surplus (2011)",
  },
  {
    id: "winston-salem-state-university-mobile",
    name: "Winston-Salem State University - Mobile",
    date: "2011-01-01",
    description: null,
    features: [
      {
        heading: "Features",
        items: [
          "Beacon's first mobile site",
          "Used One Mobile principles to work across many devices",
          "Mobile detection script",
        ],
      },
      {
        heading: "Responsibilities",
        items: [
          "Planning",
          "Design",
          "Development",
          "Cascade Server integration",
        ],
      },
    ],
    url: "https://www.wssu.edu/default-m.aspx",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-mobile/wssu-mobile-combo-home-audience.png",
        originalAlt: "Winston-Salem State University - Mobile",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-mobile/wssu-mobile-combo-home-audience.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-mobile/wssu-mobile-combo-news.png",
        originalAlt: "Winston-Salem State University - Mobile",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-mobile/wssu-mobile-combo-news.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-mobile/wssu-mobile-combo-events.png",
        originalAlt: "Winston-Salem State University - Mobile",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-mobile/wssu-mobile-combo-events.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-mobile/wssu-mobile-combo-interior-map.png",
        originalAlt: "Winston-Salem State University - Mobile",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-mobile/wssu-mobile-combo-interior-map.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-mobile/Mobile__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "winston-salem-state-university",
      name: "Winston-Salem State University",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/winston-salem-state-university__logo.svg",
    },
    tags: [
      "2011",
      "accessibility-508",
      "asp-net",
      "back-end",
      "cascade-server",
      "cms-configuration",
      "consultant",
      "cross-browser-compatibility",
      "css",
      "front-end",
      "full-stack",
      "higher-ed",
      "html",
      "lead",
      "library-jquery",
      "role-design",
      "type-mobile",
      "ux-accessibility",
      "ux-usability",
      "ux-user-testing",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: [
      "cms",
      "industry",
      "language",
      "project-type",
      "role",
      "sdlc",
      "tooling",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "higher-ed", name: "Higher Ed", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "asp-net", name: "ASP.NET", display: true },
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [{ id: "type-mobile", name: "Mobile", display: true }],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "back-end", name: "Back End", display: true },
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "consultant", name: "Consultant", display: true },
          { id: "role-design", name: "Design", display: true },
          { id: "front-end", name: "Front End", display: true },
          { id: "full-stack", name: "Full Stack", display: true },
          { id: "lead", name: "Lead", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      tooling: {
        id: "tooling",
        name: "Tooling",
        tags: [{ id: "library-jquery", name: "jQuery", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          { id: "accessibility-508", name: "508 Compliant", display: true },
          { id: "ux-accessibility", name: "Accessibility", display: true },
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
          { id: "ux-usability", name: "Usability", display: true },
          { id: "ux-user-testing", name: "User Testing", display: true },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2011", name: "2011", display: true }],
      },
    },
    displayName: "Winston-Salem State University - Mobile (2010)",
  },
  {
    id: "winston-salem-state-university",
    name: "Winston-Salem State University",
    date: "2011-01-01",
    description: null,
    features: [
      {
        heading: "Features",
        items: [
          "Cascade Server CMS Implementation",
          "Migrated 3500 pages from the previous website to brand new design & nav structure",
          "Design & Information Architecture",
          "Designed specifically for multiple audiences (students, parents, alumni, faculty)",
          "Trained 40 users and coordinated 14 Content Owner Groups",
          "Homepage Flash Component",
          "An emergency status message that allows administrators to instantly display an emergency message on every page of the website",
          "Incorporation of social media network into the homepage",
          "News and events are dynamically fed to homepage",
          "Advanced Site Search (Google Mini)",
          "ADA compliant website",
        ],
      },
      {
        heading: "Responsibilities",
        items: [
          "Homepage Flash (configurable through Cascade Server)",
          "All front-end development",
          "Cascade Server integration",
        ],
      },
    ],
    url: "https://wssu.edu",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university/wssu-desktop-home.png",
        originalAlt: "Winston-Salem State University",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university/wssu-desktop-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university/wssu-desktop-audience.png",
        originalAlt: "Winston-Salem State University",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university/wssu-desktop-audience.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university/wssu-desktop-landing.png",
        originalAlt: "Winston-Salem State University",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university/wssu-desktop-landing.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university/wssu-desktop-interior.png",
        originalAlt: "Winston-Salem State University",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university/wssu-desktop-interior.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university/wssu-desktop-events.png",
        originalAlt: "Winston-Salem State University",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university/wssu-desktop-events.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university/wssu-desktop-a-z-index.png",
        originalAlt: "Winston-Salem State University",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university/wssu-desktop-a-z-index.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university/wssu-desktop-navigation.png",
        originalAlt: "Winston-Salem State University",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university/wssu-desktop-navigation.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university/winston-salem-state-university__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "winston-salem-state-university",
      name: "Winston-Salem State University",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/winston-salem-state-university__logo.svg",
    },
    tags: [
      "2011",
      "accessibility-508",
      "asp-net",
      "cascade-server",
      "cms-configuration",
      "cross-browser-compatibility",
      "css",
      "front-end",
      "google-analytics",
      "higher-ed",
      "html",
      "javascript",
      "library-jquery",
      "type-mobile",
      "ux-information-architecture",
      "ux-usability",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: [
      "analytics",
      "cms",
      "industry",
      "language",
      "project-type",
      "role",
      "sdlc",
      "tooling",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "higher-ed", name: "Higher Ed", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "asp-net", name: "ASP.NET", display: true },
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [{ id: "type-mobile", name: "Mobile", display: true }],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      tooling: {
        id: "tooling",
        name: "Tooling",
        tags: [{ id: "library-jquery", name: "jQuery", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          { id: "accessibility-508", name: "508 Compliant", display: true },
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
          {
            id: "ux-information-architecture",
            name: "Information Architecture",
            display: true,
          },
          { id: "ux-usability", name: "Usability", display: true },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2011", name: "2011", display: true }],
      },
    },
    displayName: "Winston-Salem State University (2010)",
  },
  {
    id: "apex-analytix",
    name: "Apex Analytix",
    date: "2011-01-01",
    description: null,
    features: [
      {
        heading: "Responsibilities",
        items: [
          "Site Development",
          "Flash Development",
          "Cascade Server Setup and Configuration",
        ],
      },
    ],
    url: "https://www.apexanalytix.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/apex-analytix/apex-analytix-home.png",
        originalAlt: "Apex Analytix",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/apex-analytix/apex-analytix-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/apex-analytix/apex-analytix-interior.png",
        originalAlt: "Apex Analytix",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/apex-analytix/apex-analytix-interior.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/apex-analytix/apex-analytix__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "apex-analytix",
      name: "Apex Analytix",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/apex-analytix__logo.svg",
    },
    tags: ["2011", "front-end", "google-analytics", "waterfall"],
    categories: ["analytics", "role", "sdlc", "year"],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [{ id: "front-end", name: "Front End", display: true }],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2011", name: "2011", display: true }],
      },
    },
    displayName: "Apex Analytix (2010)",
  },
  {
    id: "winston-salem-state-university-campus-maps",
    name: "Winston-Salem State University - Interactive Campus Maps",
    date: "2011-01-01",
    description: null,
    features: [
      {
        heading: "Features",
        items: [
          "2D interactive campus map using Google maps API ",
          "3D interactive campus map using Google maps API and Google Earth",
          "Mobile version",
          "Map data can be modified by client via Cascade Server",
          "Cascade server then publishes KML file read by Google Maps/Google Earth",
          "Detailed information on click via information boxes",
        ],
      },
      {
        heading: "Mapped Data",
        items: [
          "Buildings: administration buildings and student housing",
          "Parking: various parking options and details about restrictions",
          "Transit: shuttle routes, shuttle shelters and WSTA PART",
          "Other: call boxes located around campus",
        ],
      },
    ],
    url: "https://wssu.edu/campus-map/default.aspx",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-campus-maps/wssu-campus-map-only-3d-meters-and-ram.png",
        originalAlt: "Winston-Salem State University - Interactive Campus Maps",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-campus-maps/wssu-campus-map-only-3d-meters-and-ram.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-campus-maps/wssu-campus-map-only-3d-all.png",
        originalAlt: "Winston-Salem State University - Interactive Campus Maps",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-campus-maps/wssu-campus-map-only-3d-all.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-campus-maps/wssu-campus-map-only-2d-parking-transit-shuttle.png",
        originalAlt: "Winston-Salem State University - Interactive Campus Maps",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-campus-maps/wssu-campus-map-only-2d-parking-transit-shuttle.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-campus-maps/wssu-campus-map-only-2d-buildings.png",
        originalAlt: "Winston-Salem State University - Interactive Campus Maps",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-campus-maps/wssu-campus-map-only-2d-buildings.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-campus-maps/wssu-campus-map-only-2d-buildings-infoboxes.png",
        originalAlt: "Winston-Salem State University - Interactive Campus Maps",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-campus-maps/wssu-campus-map-only-2d-buildings-infoboxes.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-campus-maps/wssu-campus-map-only-2d-parking-transit-all.png",
        originalAlt: "Winston-Salem State University - Interactive Campus Maps",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-campus-maps/wssu-campus-map-only-2d-parking-transit-all.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-campus-maps/Campus%20Map__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "winston-salem-state-university",
      name: "Winston-Salem State University",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/winston-salem-state-university__logo.svg",
    },
    tags: [
      "2011",
      "accessibility-508",
      "asp-net",
      "back-end",
      "cascade-server",
      "cms-configuration",
      "cross-browser-compatibility",
      "css",
      "front-end",
      "higher-ed",
      "html",
      "javascript",
      "kml",
      "lead",
      "library-jquery",
      "type-informational",
      "ux-accessibility",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: [
      "cms",
      "industry",
      "language",
      "project-type",
      "role",
      "sdlc",
      "tooling",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "higher-ed", name: "Higher Ed", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "asp-net", name: "ASP.NET", display: true },
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "kml", name: "KML", display: false },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [
          { id: "type-informational", name: "Informational", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "back-end", name: "Back End", display: true },
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
          { id: "lead", name: "Lead", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      tooling: {
        id: "tooling",
        name: "Tooling",
        tags: [{ id: "library-jquery", name: "jQuery", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          { id: "accessibility-508", name: "508 Compliant", display: true },
          { id: "ux-accessibility", name: "Accessibility", display: true },
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2011", name: "2011", display: true }],
      },
    },
    displayName:
      "Winston-Salem State University - Interactive Campus Maps (2010)",
  },
  {
    id: "servigistics",
    name: "Servigistics",
    date: "2010-12-15",
    description: null,
    features: [
      {
        heading: "Responsibilities",
        items: ["Advanced CMS integration", "All Development"],
      },
    ],
    url: "https://www.servigistics.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/servigistics/servigistics-home.png",
        originalAlt: "Servigistics",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/servigistics/servigistics-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/servigistics/servigistics-interior.png",
        originalAlt: "Servigistics",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/servigistics/servigistics-interior.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/servigistics/servigistics-portal.png",
        originalAlt: "Servigistics",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/servigistics/servigistics-portal.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/servigistics/servigistics__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: { id: "servigistics", name: "Servigistics", logo: null },
    tags: ["waterfall"],
    categories: ["sdlc"],
    tagsByCategory: {
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
    },
    displayName: "Servigistics (2010)",
  },
  {
    id: "furnitureland-south-2010",
    name: "Furnitureland South",
    date: "2010-12-01",
    description: null,
    features: [],
    url: "https://www.furniturelandsouth.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/furnitureland-south-2010/furnitureland-south-home.png",
        originalAlt: "Furnitureland South",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/furnitureland-south-2010/furnitureland-south-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/furnitureland-south-2010/furnitureland-south-listing.png",
        originalAlt: "Furnitureland South",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/furnitureland-south-2010/furnitureland-south-listing.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/furnitureland-south-2010/furnitureland-south-detail.png",
        originalAlt: "Furnitureland South",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/furnitureland-south-2010/furnitureland-south-detail.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/furnitureland-south-2010/furnitureland-south__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "furnitureland-south",
      name: "Furnitureland South",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/furnitureland-south__logo.svg",
    },
    tags: ["2010", "waterfall"],
    categories: ["sdlc", "year"],
    tagsByCategory: {
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2010", name: "2010", display: true }],
      },
    },
    displayName: "Furnitureland South (2010)",
  },
  {
    id: "university-houston-2010",
    name: "University of Houston - News Releases",
    date: "2010-12-01",
    description: null,
    features: [
      {
        heading: "Enhanced News Release Functionality",
        items: [
          "Ability to add images with captions to the news detail pages",
          "Addition of article categories and authors",
          "Redesign the listing page to list stories by year and month using a collapsible function",
          "New search feature was also installed, integrated with their Google Mini search appliance",
          "New category listing pages that allows U of H to create a page that only displays stories tagged with certain categories",
          "Modification to the display of the news stories on the homepage",
          "Addition of RSS feeds, including a full listing and an RSS listing for each category",
        ],
      },
    ],
    url: "https://www.uh.edu/news-events",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-houston-2010/university-of-houston-news-releases.png",
        originalAlt: "University of Houston - News Releases",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-houston-2010/university-of-houston-news-releases.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-houston-2010/university-of-houston__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "university-houston",
      name: "University of Houston",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/university-of-houston__logo.svg",
    },
    tags: [
      "2010",
      "accessibility-508",
      "cascade-server",
      "cms-configuration",
      "cross-browser-compatibility",
      "css",
      "front-end",
      "higher-ed",
      "html",
      "ux-usability",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: [
      "cms",
      "industry",
      "language",
      "role",
      "sdlc",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "higher-ed", name: "Higher Ed", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          { id: "accessibility-508", name: "508 Compliant", display: true },
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
          { id: "ux-usability", name: "Usability", display: true },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2010", name: "2010", display: true }],
      },
    },
    displayName: "University of Houston - News Releases (2010)",
  },
  {
    id: "burton-and-burton-2010",
    name: "Burton and Burton",
    date: "2010-11-01",
    description:
      "burton+BURTON is the largest wholesaler of balloon and gift products. The site is multi-platform eCommerce (ASP-based) and Cascade Server content management.",
    features: [
      {
        heading: "Features",
        items: [
          "The new design split the site into three “sub sites” off of the main homepage: About Us, Online Store, and Education",
          "A rewrite of the product listing page and a new, more modern filtering system",
          "Numerous search engine improvements to the site, including URL rewrites and dynamically feeding the meta descriptions and titles for each category and product",
          "Type-ahead AJAX search for their “Quick Order” form",
          "Improved shopping cart experience",
          "Ability to add videos to each of the four homepages",
        ],
      },
    ],
    url: "https://burtonandburton.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2010/burton-and-burton-2010-home.png",
        originalAlt: "Burton and Burton",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2010/burton-and-burton-2010-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2010/burton-and-burton-2010-listing.png",
        originalAlt: "Burton and Burton",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2010/burton-and-burton-2010-listing.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2010/burton-and-burton-2010-product-detail.png",
        originalAlt: "Burton and Burton",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2010/burton-and-burton-2010-product-detail.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2010/burton-and-burton-2010-collection-listing.png",
        originalAlt: "Burton and Burton",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2010/burton-and-burton-2010-collection-listing.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2010/burton-and-burton-2010-collection.png",
        originalAlt: "Burton and Burton",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2010/burton-and-burton-2010-collection.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2010/burton-and-burton-2010-cart.png",
        originalAlt: "Burton and Burton",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2010/burton-and-burton-2010-cart.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2010/burton-and-burton-2010-about-us.png",
        originalAlt: "Burton and Burton",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2010/burton-and-burton-2010-about-us.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2010/burton-and-burton__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "burton-and-burton",
      name: "Burton and Burton",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/burton-and-burton__logo.svg",
    },
    tags: [
      "2010",
      "asp",
      "cascade-server",
      "cms-configuration",
      "css",
      "e-commerce",
      "ecom-custom-in-house",
      "front-end",
      "global",
      "google-analytics",
      "html",
      "javascript",
      "type-b2b",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: [
      "analytics",
      "cms",
      "e-commerce",
      "industry",
      "language",
      "project-type",
      "role",
      "sdlc",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      "e-commerce": {
        id: "e-commerce",
        name: "E-Commerce",
        tags: [
          {
            id: "ecom-custom-in-house",
            name: "Custom in-house",
            display: true,
          },
        ],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [
          { id: "e-commerce", name: "E-Commerce", display: true },
          { id: "global", name: "Global", display: true },
        ],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "asp", name: "ASP", display: true },
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [{ id: "type-b2b", name: "B2B", display: true }],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2010", name: "2010", display: true }],
      },
    },
    displayName: "Burton and Burton (2010)",
  },
  {
    id: "greensboro-radiology",
    name: "Greensboro Radiology",
    date: "2010-09-01",
    description: null,
    features: [
      {
        heading: "Responsibilities",
        items: [
          "All original front-end development",
          "All Cascade Server integration",
        ],
      },
    ],
    url: "https://greensbororadiology.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/greensboro-radiology/greensboro-radiology-home.png",
        originalAlt: "Greensboro Radiology",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/greensboro-radiology/greensboro-radiology-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/greensboro-radiology/greensboro-radiology-about.png",
        originalAlt: "Greensboro Radiology",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/greensboro-radiology/greensboro-radiology-about.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/greensboro-radiology/greensboro-radiology-physicians.png",
        originalAlt: "Greensboro Radiology",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/greensboro-radiology/greensboro-radiology-physicians.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/greensboro-radiology/greensboro-radiology__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "greensboro-radiology",
      name: "Greensboro Radiology",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/greensboro-radiology__logo.svg",
    },
    tags: [
      "2010",
      "asp",
      "cascade-server",
      "cms-configuration",
      "cross-browser-compatibility",
      "css",
      "front-end",
      "google-analytics",
      "html",
      "javascript",
      "medical",
      "type-informational",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: [
      "analytics",
      "cms",
      "industry",
      "language",
      "project-type",
      "role",
      "sdlc",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "medical", name: "Medical", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "asp", name: "ASP", display: true },
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [
          { id: "type-informational", name: "Informational", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2010", name: "2010", display: true }],
      },
    },
    displayName: "Greensboro Radiology (2010)",
  },
  {
    id: "texas-am-foundation",
    name: "Texas A&M Foundation",
    date: "2010-09-01",
    description: null,
    features: [
      {
        heading: "Responsibilities",
        items: [
          "Homepage flash (configurable through Cascade Server)",
          "Publications archive",
          "Cascade Server integration",
        ],
      },
    ],
    url: "https://giving.tamu.edu",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/texas-am-foundation/texas-a-and-m-foundation-main-home.png",
        originalAlt: "Texas A&M Foundation",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/texas-am-foundation/texas-a-and-m-foundation-main-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/texas-am-foundation/texas-a-and-m-foundation-main-publications.png",
        originalAlt: "Texas A&M Foundation",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/texas-am-foundation/texas-a-and-m-foundation-main-publications.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/texas-am-foundation/texas-a-and-m-foundation-main-press-release-listing.png",
        originalAlt: "Texas A&M Foundation",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/texas-am-foundation/texas-a-and-m-foundation-main-press-release-listing.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/texas-am-foundation/texas-a-and-m-foundation-main-press-release-detail.png",
        originalAlt: "Texas A&M Foundation",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/texas-am-foundation/texas-a-and-m-foundation-main-press-release-detail.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/texas-am-foundation/texas-a-and-m-foundation-main-about-us.png",
        originalAlt: "Texas A&M Foundation",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/texas-am-foundation/texas-a-and-m-foundation-main-about-us.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/texas-am-foundation/texas-a-and-m-foundation__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "texas-am-foundation",
      name: "Texas A&M Foundation",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/texas-a-and-m-foundation__logo.svg",
    },
    tags: [
      "2010",
      "accessibility-508",
      "actionscript",
      "cascade-server",
      "cms-configuration",
      "cross-browser-compatibility",
      "css",
      "front-end",
      "google-analytics",
      "html",
      "javascript",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: [
      "analytics",
      "cms",
      "language",
      "role",
      "sdlc",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "actionscript", name: "ActionScript", display: true },
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          { id: "accessibility-508", name: "508 Compliant", display: true },
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2010", name: "2010", display: true }],
      },
    },
    displayName: "Texas A&M Foundation (2010)",
  },
  {
    id: "framingham-university",
    name: "Framingham University",
    date: "2010-08-01",
    description: null,
    features: [
      {
        heading: "Responsibilities",
        items: [
          "Homepage flash (configurable through Cascade Server)",
          "Front-end development",
          "Cascade Server integration",
        ],
      },
    ],
    url: "https://framingham.edu",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/framingham-university/framingham-home.png",
        originalAlt: "Framingham University",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/framingham-university/framingham-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/framingham-university/framingham-home-flash.png",
        originalAlt: "Framingham University",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/framingham-university/framingham-home-flash.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/framingham-university/framingham-landing.png",
        originalAlt: "Framingham University",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/framingham-university/framingham-landing.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/framingham-university/framingham-interior.png",
        originalAlt: "Framingham University",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/framingham-university/framingham-interior.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/framingham-university/framingham-state-university__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "framingham-university",
      name: "Framingham University",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/framingham-state-university__logo.svg",
    },
    tags: [
      "2010",
      "accessibility-508",
      "actionscript",
      "asp",
      "cascade-server",
      "cms-configuration",
      "cross-browser-compatibility",
      "css",
      "front-end",
      "google-analytics",
      "higher-ed",
      "html",
      "javascript",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: [
      "analytics",
      "cms",
      "industry",
      "language",
      "role",
      "sdlc",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "higher-ed", name: "Higher Ed", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "actionscript", name: "ActionScript", display: true },
          { id: "asp", name: "ASP", display: true },
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          { id: "accessibility-508", name: "508 Compliant", display: true },
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2010", name: "2010", display: true }],
      },
    },
    displayName: "Framingham University (2010)",
  },
  {
    id: "united-anesthesia",
    name: "United Anesthesia",
    date: "2010-07-01",
    description: null,
    features: [
      {
        heading: "Responsibilities",
        items: [
          "Original front-end development",
          "Merging existing back-end code into new front-end code",
        ],
      },
    ],
    url: "https://www.unitedanesthesia.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/united-anesthesia/united-anesthsesia-home.png",
        originalAlt: "United Anesthesia",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/united-anesthesia/united-anesthsesia-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/united-anesthesia/united-anesthsesia-about.png",
        originalAlt: "United Anesthesia",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/united-anesthesia/united-anesthsesia-about.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/united-anesthesia/united-anesthsesia-contact.png",
        originalAlt: "United Anesthesia",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/united-anesthesia/united-anesthsesia-contact.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/united-anesthesia/united-anesthesia__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "united-anesthesia",
      name: "United Anesthesia",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/united-anesthesia__logo.svg",
    },
    tags: [
      "2010",
      "asp",
      "cross-browser-compatibility",
      "css",
      "front-end",
      "google-analytics",
      "html",
      "javascript",
      "waterfall",
    ],
    categories: [
      "analytics",
      "language",
      "role",
      "sdlc",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "asp", name: "ASP", display: true },
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [{ id: "front-end", name: "Front End", display: true }],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2010", name: "2010", display: true }],
      },
    },
    displayName: "United Anesthesia (2010)",
  },
  {
    id: "cogent-research",
    name: "Cogent Research",
    date: "2010-04-15",
    description: "Advanced flash site with Cascade Server integration.",
    features: [],
    url: "https://www.cogentresearch.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/cogent-research/cogent-home.png",
        originalAlt: "Cogent Research",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/cogent-research/cogent-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/cogent-research/cogent-interior.png",
        originalAlt: "Cogent Research",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/cogent-research/cogent-interior.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/cogent-research/cogent-news.png",
        originalAlt: "Cogent Research",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/cogent-research/cogent-news.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/cogent-research/cogent-research__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "cogent-research",
      name: "Cogent Research",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/cogent-research__logo.svg",
    },
    tags: [
      "2010",
      "actionscript",
      "cascade-server",
      "cms-configuration",
      "front-end",
      "type-informational",
      "waterfall",
    ],
    categories: ["cms", "language", "project-type", "role", "sdlc", "year"],
    tagsByCategory: {
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [{ id: "actionscript", name: "ActionScript", display: true }],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [
          { id: "type-informational", name: "Informational", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2010", name: "2010", display: true }],
      },
    },
    displayName: "Cogent Research (2010)",
  },
  {
    id: "staub-leadership",
    name: "Staub Leadership",
    date: "2010-04-01",
    description: null,
    features: [
      {
        heading: "Responsibilities",
        items: [
          "Original front-end development",
          "Customized Cascade Server integration",
        ],
      },
    ],
    url: "https://www.staubleadership.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/staub-leadership/eqiq-staub-home.png",
        originalAlt: "Staub Leadership",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/staub-leadership/eqiq-staub-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/staub-leadership/eqiq-staub-about.png",
        originalAlt: "Staub Leadership",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/staub-leadership/eqiq-staub-about.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/staub-leadership/eqiq-staub-articles.png",
        originalAlt: "Staub Leadership",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/staub-leadership/eqiq-staub-articles.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/staub-leadership/eqiq-staub-videos.png",
        originalAlt: "Staub Leadership",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/staub-leadership/eqiq-staub-videos.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/staub-leadership/staub-leadership-international__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "staub-leadership",
      name: "Staub Leadership",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/staub-leadership-international__logo.svg",
    },
    tags: [
      "2010",
      "asp",
      "cascade-server",
      "cms-configuration",
      "cross-browser-compatibility",
      "css",
      "front-end",
      "google-analytics",
      "html",
      "javascript",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: [
      "analytics",
      "cms",
      "language",
      "role",
      "sdlc",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "asp", name: "ASP", display: true },
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2010", name: "2010", display: true }],
      },
    },
    displayName: "Staub Leadership (2010)",
  },
  {
    id: "firefly-store-solutions",
    name: "Firefly Store Solutions",
    date: "2010-03-01",
    description: null,
    features: [
      {
        heading: "Responsibilities",
        items: [
          "Original front-end development",
          "AspDotNetStorefront integration",
        ],
      },
    ],
    url: "https://www.fireflystoresolutions.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/firefly-store-solutions/robert-ham-home.png",
        originalAlt: "Firefly Store Solutions",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/firefly-store-solutions/robert-ham-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/firefly-store-solutions/robert-ham-listing.png",
        originalAlt: "Firefly Store Solutions",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/firefly-store-solutions/robert-ham-listing.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/firefly-store-solutions/robert-ham-detail.png",
        originalAlt: "Firefly Store Solutions",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/firefly-store-solutions/robert-ham-detail.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/firefly-store-solutions/robert-h-ham__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "robert-h-ham",
      name: "Robert H Ham",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/robert-h-ham__logo.svg",
    },
    tags: [
      "2010",
      "cms-configuration",
      "cross-browser-compatibility",
      "css",
      "e-commerce",
      "ecomm-aspdotnetstorefront",
      "front-end",
      "google-analytics",
      "html",
      "javascript",
      "library-jquery",
      "type-e-commerce",
      "waterfall",
    ],
    categories: [
      "analytics",
      "e-commerce",
      "industry",
      "language",
      "project-type",
      "role",
      "sdlc",
      "tooling",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      "e-commerce": {
        id: "e-commerce",
        name: "E-Commerce",
        tags: [
          {
            id: "ecomm-aspdotnetstorefront",
            name: "AspDotNetStorefront",
            display: true,
          },
        ],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "e-commerce", name: "E-Commerce", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [{ id: "type-e-commerce", name: "E-Commerce", display: true }],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      tooling: {
        id: "tooling",
        name: "Tooling",
        tags: [{ id: "library-jquery", name: "jQuery", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2010", name: "2010", display: true }],
      },
    },
    displayName: "Firefly Store Solutions (2010)",
  },
  {
    id: "montgomery-family-law",
    name: "Montgomery Family Law",
    date: "2010-03-01",
    description: null,
    features: [
      {
        heading: "Responsibilities",
        items: [
          "All front-end development",
          "Custom Cascade Server integration",
        ],
      },
    ],
    url: "https://www.montylaw.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/montgomery-family-law/montgomery-family-law-home.png",
        originalAlt: "Montgomery Family Law",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/montgomery-family-law/montgomery-family-law-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/montgomery-family-law/montgomery-family-law-interior.png",
        originalAlt: "Montgomery Family Law",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/montgomery-family-law/montgomery-family-law-interior.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/montgomery-family-law/montgomery-family-law-news.png",
        originalAlt: "Montgomery Family Law",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/montgomery-family-law/montgomery-family-law-news.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/montgomery-family-law/montgomery-family-law__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "montgomery-family-law",
      name: "Montgomery Family Law",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/montgomery-family-law__logo.svg",
    },
    tags: [
      "2010",
      "attorneys-law-firms",
      "cascade-server",
      "cms-configuration",
      "cross-browser-compatibility",
      "css",
      "front-end",
      "google-analytics",
      "html",
      "javascript",
      "type-informational",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: [
      "analytics",
      "cms",
      "industry",
      "language",
      "project-type",
      "role",
      "sdlc",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [
          {
            id: "attorneys-law-firms",
            name: "Attorneys/Law Firms",
            display: true,
          },
        ],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [
          { id: "type-informational", name: "Informational", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2010", name: "2010", display: true }],
      },
    },
    displayName: "Montgomery Family Law (2010)",
  },
  {
    id: "university-hartford-2010",
    name: "University of Hartford",
    date: "2010-02-01",
    description: null,
    features: [
      {
        heading: "Campus Calendar",
        items: [
          "Developed from scratch",
          "Highly flexible calendaring application within Cascade Server CMS",
          "Events are input once but pulled too many different types of displays (home page, Campus Calendar, and Arts & Events Calendar).",
          "The client can create Calendars for specific groups (Library, Athletics, etc.) within Cascade Server",
        ],
      },
      {
        heading: "Newsroom",
        items: [
          "A listing page for press releases and other news",
          "Integration of RSS feed display (U of H in the News)",
          "Editable content areas for “Media Contacts” and “Key Contacts”",
          "Press release detail page",
          "Everything is controlled within Cascade Server CMS",
        ],
      },
      {
        heading: "Responsibilities",
        items: ["Advanced Cascade Server integration", "Homepage Flash"],
      },
    ],
    url: "https://www.hartford.edu",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-2010/university-of-hartford-2010-home.png",
        originalAlt: "University of Hartford",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-2010/university-of-hartford-2010-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-2010/university-of-hartford-2010-newsroom.png",
        originalAlt: "University of Hartford",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-2010/university-of-hartford-2010-newsroom.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-2010/university-of-hartford-2010-press-release-listing.png",
        originalAlt: "University of Hartford",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-2010/university-of-hartford-2010-press-release-listing.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-2010/university-of-hartford-2010-press-release-detail.png",
        originalAlt: "University of Hartford",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-2010/university-of-hartford-2010-press-release-detail.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-2010/university-of-hartford-2010-interior.png",
        originalAlt: "University of Hartford",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-2010/university-of-hartford-2010-interior.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-2010/university-of-hartford-2010-my-story-listing.png",
        originalAlt: "University of Hartford",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-2010/university-of-hartford-2010-my-story-listing.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-2010/university-of-hartford-2010-my-story-detail.png",
        originalAlt: "University of Hartford",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-2010/university-of-hartford-2010-my-story-detail.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-2010/2020__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "university-of-hartford",
      name: "University of Hartford",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/university-of-hartford__logo.svg",
    },
    tags: [
      "2010",
      "accessibility-508",
      "asp",
      "cascade-server",
      "cms-configuration",
      "cross-browser-compatibility",
      "css",
      "front-end",
      "google-analytics",
      "higher-ed",
      "html",
      "javascript",
      "library-jquery",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: [
      "analytics",
      "cms",
      "industry",
      "language",
      "role",
      "sdlc",
      "tooling",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "higher-ed", name: "Higher Ed", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "asp", name: "ASP", display: true },
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      tooling: {
        id: "tooling",
        name: "Tooling",
        tags: [{ id: "library-jquery", name: "jQuery", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          { id: "accessibility-508", name: "508 Compliant", display: true },
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2010", name: "2010", display: true }],
      },
    },
    displayName: "University of Hartford (2010)",
  },
  {
    id: "rollins-university-magazine",
    name: "Rollins University Magazine",
    date: "2010-02-01",
    description: null,
    features: [
      {
        heading: "Responsibilities",
        items: [
          "Original front-end development (HTML/CSS/JS)",
          "Cascade Server integration",
        ],
      },
    ],
    url: "https://www.rollins.edu/magazine/",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/rollins-university-magazine/rollins-magazine-home.png",
        originalAlt: "Rollins University Magazine",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/rollins-university-magazine/rollins-magazine-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/rollins-university-magazine/rollins-magazine-current-issue.png",
        originalAlt: "Rollins University Magazine",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/rollins-university-magazine/rollins-magazine-current-issue.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/rollins-university-magazine/rollins-university__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "rollins-university",
      name: "Rollins University",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/rollins-university__logo.svg",
    },
    tags: [
      "2010",
      "2011",
      "accessibility-508",
      "asp",
      "cascade-server",
      "cms-configuration",
      "cross-browser-compatibility",
      "css",
      "front-end",
      "html",
      "javascript",
      "library-jquery",
      "waterfall",
      "xml",
      "xslt",
    ],
    categories: [
      "cms",
      "language",
      "role",
      "sdlc",
      "tooling",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cascade-server", name: "Cascade Server", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "asp", name: "ASP", display: true },
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "xml", name: "XML", display: true },
          { id: "xslt", name: "XSLT", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      tooling: {
        id: "tooling",
        name: "Tooling",
        tags: [{ id: "library-jquery", name: "jQuery", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          { id: "accessibility-508", name: "508 Compliant", display: true },
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [
          { id: "2010", name: "2010", display: true },
          { id: "2011", name: "2011", display: true },
        ],
      },
    },
    displayName: "Rollins University Magazine (2010)",
  },
  {
    id: "volvo-bus-scr",
    name: "Volvo Bus SCR",
    date: "2010-02-01",
    description:
      "The site provides information about Volvo’s D13 Engine, the engineering of it, its advantages, its availability, and how it affects the environment.",
    features: [
      {
        heading: "Features",
        items: ["Site wide multi-language functionality"],
      },
    ],
    url: "https://www.volvobusscr.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/volvo-bus-scr/volvo-home.png",
        originalAlt: "Volvo Bus SCR",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/volvo-bus-scr/volvo-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/volvo-bus-scr/volvo-home-french.png",
        originalAlt: "Volvo Bus SCR",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/volvo-bus-scr/volvo-home-french.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/volvo-bus-scr/volvo-about.png",
        originalAlt: "Volvo Bus SCR",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/volvo-bus-scr/volvo-about.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/volvo-bus-scr/volvo-faqs.png",
        originalAlt: "Volvo Bus SCR",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/volvo-bus-scr/volvo-faqs.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/volvo-bus-scr/volvo-availability.png",
        originalAlt: "Volvo Bus SCR",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/volvo-bus-scr/volvo-availability.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/volvo-bus-scr/volvo__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "volvo",
      name: "Volvo",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/volvo__logo.svg",
    },
    tags: [
      "2010",
      "asp",
      "cross-browser-compatibility",
      "css",
      "front-end",
      "html",
      "waterfall",
    ],
    categories: ["language", "role", "sdlc", "user-experience-ux", "year"],
    tagsByCategory: {
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "asp", name: "ASP", display: true },
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [{ id: "front-end", name: "Front End", display: true }],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2010", name: "2010", display: true }],
      },
    },
    displayName: "Volvo Bus SCR (2010)",
  },
  {
    id: "furnitureland-south-blog",
    name: "Furnitureland South Blog",
    date: "2009-12-09",
    description: "Coming Soon...",
    features: [],
    url: "https://blog.furniturelandsouth.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/furnitureland-south-blog/furnitureland-south-blog.png",
        originalAlt: "Furnitureland South Blog",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/furnitureland-south-blog/furnitureland-south-blog.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/furnitureland-south-blog/furnitureland-south__logo.svg",
    employer: {
      id: "beacon-technologies",
      name: "Beacon Technologies",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg",
    },
    client: {
      id: "furnitureland-south",
      name: "Furnitureland South",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/furnitureland-south__logo.svg",
    },
    tags: [
      "2009",
      "back-end",
      "blog",
      "cms-configuration",
      "cms-wordpress",
      "data-mysql",
      "front-end",
      "php",
      "waterfall",
    ],
    categories: [
      "cms",
      "data",
      "language",
      "project-type",
      "role",
      "sdlc",
      "year",
    ],
    tagsByCategory: {
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "cms-wordpress", name: "Wordpress", display: true }],
      },
      data: {
        id: "data",
        name: "Data",
        tags: [{ id: "data-mysql", name: "MySQL", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [{ id: "php", name: "PHP", display: true }],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [{ id: "blog", name: "Blog", display: true }],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "back-end", name: "Back End", display: true },
          { id: "cms-configuration", name: "CMS Configuration", display: true },
          { id: "front-end", name: "Front End", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2009", name: "2009", display: true }],
      },
    },
    displayName: "Furnitureland South Blog (2009)",
  },
  {
    id: "carolina-girl-furniture",
    name: "Carolina Girl Furniture",
    date: "2009-11-01",
    description: "Magento E-commerce",
    features: [],
    url: "https://www.carolinagirlfurniture.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/carolina-girl-furniture/carolina-girl-furniture-interior.png",
        originalAlt: "Carolina Girl Furniture",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/carolina-girl-furniture/carolina-girl-furniture-interior.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/carolina-girl-furniture/carolina-girl-furniture-home.png",
        originalAlt: "Carolina Girl Furniture",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/carolina-girl-furniture/carolina-girl-furniture-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/carolina-girl-furniture/carolina-girl-furniture-detail.png",
        originalAlt: "Carolina Girl Furniture",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/carolina-girl-furniture/carolina-girl-furniture-detail.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/carolina-girl-furniture/carolina-girl-furniture__logo.svg",
    employer: {
      id: "get-you-found",
      name: "Get You Found Online Marketing",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/get-you-found__logo.svg",
    },
    client: {
      id: "carolina-girl-furniture",
      name: "Carolina Girl Furniture",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/carolina-girl-furniture__logo.svg",
    },
    tags: [
      "2009",
      "cross-browser-compatibility",
      "css",
      "data-mysql",
      "e-commerce",
      "ecomm-magento",
      "front-end",
      "google-analytics",
      "html",
      "javascript",
      "php",
      "type-e-commerce",
      "waterfall",
    ],
    categories: [
      "analytics",
      "data",
      "e-commerce",
      "industry",
      "language",
      "project-type",
      "role",
      "sdlc",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      data: {
        id: "data",
        name: "Data",
        tags: [{ id: "data-mysql", name: "MySQL", display: true }],
      },
      "e-commerce": {
        id: "e-commerce",
        name: "E-Commerce",
        tags: [{ id: "ecomm-magento", name: "Magento", display: true }],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "e-commerce", name: "E-Commerce", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "php", name: "PHP", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [{ id: "type-e-commerce", name: "E-Commerce", display: true }],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [{ id: "front-end", name: "Front End", display: true }],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2009", name: "2009", display: true }],
      },
    },
    displayName: "Carolina Girl Furniture (2009)",
  },
  {
    id: "envision",
    name: "Envision",
    date: "2009-10-01",
    description: null,
    features: [
      {
        heading: "Responsibilities",
        items: [
          "Homepage Flash",
          "Original front-end development",
          "Drupal customizations including Product Search, Products, Rooms, Collections, Store Locations and Blog",
        ],
      },
    ],
    url: "https://www.envisionfurniture.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/envision/envision-home.png",
        originalAlt: "Envision",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/envision/envision-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/envision/envision-collection-list.png",
        originalAlt: "Envision",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/envision/envision-collection-list.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/envision/envision-collection-detail.png",
        originalAlt: "Envision",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/envision/envision-collection-detail.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/envision/envision-detail.png",
        originalAlt: "Envision",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/envision/envision-detail.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/envision/envision-landing.png",
        originalAlt: "Envision",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/envision/envision-landing.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/envision/envision__logo.svg",
    employer: {
      id: "get-you-found",
      name: "Get You Found Online Marketing",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/get-you-found__logo.svg",
    },
    client: {
      id: "envision",
      name: "Envision",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/envision__logo.svg",
    },
    tags: [
      "2009",
      "actionscript",
      "cross-browser-compatibility",
      "css",
      "data-mysql",
      "drupal",
      "ecom-other",
      "front-end",
      "google-analytics",
      "html",
      "php",
      "type-e-commerce",
      "waterfall",
    ],
    categories: [
      "analytics",
      "cms",
      "data",
      "e-commerce",
      "language",
      "project-type",
      "role",
      "sdlc",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "drupal", name: "Drupal", display: true }],
      },
      data: {
        id: "data",
        name: "Data",
        tags: [{ id: "data-mysql", name: "MySQL", display: true }],
      },
      "e-commerce": {
        id: "e-commerce",
        name: "E-Commerce",
        tags: [{ id: "ecom-other", name: "Other", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "actionscript", name: "ActionScript", display: true },
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "php", name: "PHP", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [{ id: "type-e-commerce", name: "E-Commerce", display: true }],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [{ id: "front-end", name: "Front End", display: true }],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2009", name: "2009", display: true }],
      },
    },
    displayName: "Envision (2009)",
  },
  {
    id: "guilford-college-united-methodist-church",
    name: "GCUMC",
    date: "2009-08-01",
    description: "Custom Modules & Calendar integration",
    features: [],
    url: "https://www.guilfordcollegeumc.org",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/guilford-college-united-methodist-church/gcumc-home.png",
        originalAlt: "GCUMC",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/guilford-college-united-methodist-church/gcumc-home.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/guilford-college-united-methodist-church/guilford-college-united-methodist-church__logo.svg",
    employer: {
      id: "get-you-found",
      name: "Get You Found Online Marketing",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/get-you-found__logo.svg",
    },
    client: {
      id: "guilford-college-united-methodist-church",
      name: "GCUMC",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/guilford-college-united-methodist-church__logo.svg",
    },
    tags: [
      "2009",
      "actionscript",
      "cross-browser-compatibility",
      "css",
      "data-mysql",
      "drupal",
      "front-end",
      "google-analytics",
      "html",
      "javascript",
      "php",
      "waterfall",
    ],
    categories: [
      "analytics",
      "cms",
      "data",
      "language",
      "role",
      "sdlc",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "drupal", name: "Drupal", display: true }],
      },
      data: {
        id: "data",
        name: "Data",
        tags: [{ id: "data-mysql", name: "MySQL", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "actionscript", name: "ActionScript", display: true },
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "php", name: "PHP", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [{ id: "front-end", name: "Front End", display: true }],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2009", name: "2009", display: true }],
      },
    },
    displayName: "GCUMC (2009)",
  },
  {
    id: "northstar-management",
    name: "NorthStar Management",
    date: "2009-07-01",
    description: null,
    features: [
      { heading: "Responsibilities", items: ["All original site development"] },
    ],
    url: "https://northstarone.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/northstar-management/northstar-home.png",
        originalAlt: "NorthStar Management",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/northstar-management/northstar-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/northstar-management/northstar-about.png",
        originalAlt: "NorthStar Management",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/northstar-management/northstar-about.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/northstar-management/northstar-interior.png",
        originalAlt: "NorthStar Management",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/northstar-management/northstar-interior.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/northstar-management/northstar-management__logo.svg",
    employer: {
      id: "get-you-found",
      name: "Get You Found Online Marketing",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/get-you-found__logo.svg",
    },
    client: {
      id: "northstar-management",
      name: "NorthStar Management",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/northstar-management__logo.svg",
    },
    tags: [
      "2009",
      "cross-browser-compatibility",
      "css",
      "front-end",
      "google-analytics",
      "html",
      "javascript",
      "php",
      "waterfall",
    ],
    categories: [
      "analytics",
      "language",
      "role",
      "sdlc",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "php", name: "PHP", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [{ id: "front-end", name: "Front End", display: true }],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2009", name: "2009", display: true }],
      },
    },
    displayName: "NorthStar Management (2009)",
  },
  {
    id: "matlab",
    name: "Matlab",
    date: "2009-06-01",
    description: null,
    features: [
      {
        heading: "Responsibilities",
        items: [
          "Original front-end development",
          "Flash animations throughout the site",
        ],
      },
    ],
    url: "https://www.matlabinc.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/matlab/matlab-home.png",
        originalAlt: "Matlab",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/matlab/matlab-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/matlab/matlab-interior.png",
        originalAlt: "Matlab",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/matlab/matlab-interior.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/matlab/matlab-sitemap.png",
        originalAlt: "Matlab",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/matlab/matlab-sitemap.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/matlab/matlab__logo.svg",
    employer: {
      id: "get-you-found",
      name: "Get You Found Online Marketing",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/get-you-found__logo.svg",
    },
    client: {
      id: "matlab",
      name: "Matlab",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/matlab__logo.svg",
    },
    tags: [
      "2009",
      "actionscript",
      "cross-browser-compatibility",
      "css",
      "front-end",
      "google-analytics",
      "html",
      "javascript",
      "php",
      "waterfall",
    ],
    categories: [
      "analytics",
      "language",
      "role",
      "sdlc",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "actionscript", name: "ActionScript", display: true },
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "php", name: "PHP", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [{ id: "front-end", name: "Front End", display: true }],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2009", name: "2009", display: true }],
      },
    },
    displayName: "Matlab (2009)",
  },
  {
    id: "herron-house",
    name: "Herron House",
    date: "2009-04-01",
    description: null,
    features: [],
    url: "https://www.herronhouse.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/herron-house/heron-house-home.png",
        originalAlt: "Herron House",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/herron-house/heron-house-home.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/herron-house/herron-house-flowers__logo.svg",
    employer: {
      id: "get-you-found",
      name: "Get You Found Online Marketing",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/get-you-found__logo.svg",
    },
    client: {
      id: "herron-house",
      name: "Herron House",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/herron-house-flowers__logo.svg",
    },
    tags: [
      "2009",
      "cross-browser-compatibility",
      "css",
      "data-mysql",
      "drupal",
      "front-end",
      "google-analytics",
      "html",
      "php",
      "waterfall",
    ],
    categories: [
      "analytics",
      "cms",
      "data",
      "language",
      "role",
      "sdlc",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "drupal", name: "Drupal", display: true }],
      },
      data: {
        id: "data",
        name: "Data",
        tags: [{ id: "data-mysql", name: "MySQL", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "php", name: "PHP", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [{ id: "front-end", name: "Front End", display: true }],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2009", name: "2009", display: true }],
      },
    },
    displayName: "Herron House (2009)",
  },
  {
    id: "machines-and-wheels",
    name: "Machines and Wheels",
    date: "2009-04-01",
    description:
      "Machines and Wheels came to Get You Found Online Marketing looking for a complete website overhaul.  They wanted the ability to easily edit and update the site themselves, a fresh look, the ability to request a quote throughout the site, and many other features such as testimonials and featured products on the home page.  Working together with Machines and Wheels and Get You Found we were able to accomplish this using the Drupal content management system.",
    features: [],
    url: "https://www.machinesandwheels.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/machines-and-wheels/machines-and-wheels-home.png",
        originalAlt: "Machines and Wheels",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/machines-and-wheels/machines-and-wheels-home.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/machines-and-wheels/machines-and-wheels-inc__logo.svg",
    employer: {
      id: "get-you-found",
      name: "Get You Found Online Marketing",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/get-you-found__logo.svg",
    },
    client: {
      id: "machines-and-wheels",
      name: "Machines and Wheels",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/machines-and-wheels-inc__logo.svg",
    },
    tags: [
      "2009",
      "actionscript",
      "cross-browser-compatibility",
      "css",
      "data-mysql",
      "drupal",
      "front-end",
      "google-analytics",
      "html",
      "javascript",
      "php",
      "waterfall",
    ],
    categories: [
      "analytics",
      "cms",
      "data",
      "language",
      "role",
      "sdlc",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "drupal", name: "Drupal", display: true }],
      },
      data: {
        id: "data",
        name: "Data",
        tags: [{ id: "data-mysql", name: "MySQL", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "actionscript", name: "ActionScript", display: true },
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "php", name: "PHP", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [{ id: "front-end", name: "Front End", display: true }],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2009", name: "2009", display: true }],
      },
    },
    displayName: "Machines and Wheels (2009)",
  },
  {
    id: "mod-u-kraf",
    name: "Mod-U-Kraf",
    date: "2009-02-01",
    description:
      "Mod-U-Kraf came to Get You Found Online Marketing with a clear vision of how they wanted their site to function.  The site contained a large amount of information about their products and services.",
    features: [],
    url: "https://www.modukraf.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/mod-u-kraf/mod-u-kraf-home.png",
        originalAlt: "Mod-U-Kraf",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/mod-u-kraf/mod-u-kraf-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/mod-u-kraf/mod-u-kraf-company-profile.png",
        originalAlt: "Mod-U-Kraf",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/mod-u-kraf/mod-u-kraf-company-profile.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/mod-u-kraf/mod-u-kraf-build-dream-home.png",
        originalAlt: "Mod-U-Kraf",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/mod-u-kraf/mod-u-kraf-build-dream-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/mod-u-kraf/mod-u-kraf-side-by-side.png",
        originalAlt: "Mod-U-Kraf",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/mod-u-kraf/mod-u-kraf-side-by-side.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/mod-u-kraf/mod-u-kraf-collection-list.png",
        originalAlt: "Mod-U-Kraf",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/mod-u-kraf/mod-u-kraf-collection-list.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/mod-u-kraf/mod-u-kraf-collection-detail.png",
        originalAlt: "Mod-U-Kraf",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/mod-u-kraf/mod-u-kraf-collection-detail.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/mod-u-kraf/mod-u-kraf__logo.svg",
    employer: {
      id: "get-you-found",
      name: "Get You Found Online Marketing",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/get-you-found__logo.svg",
    },
    client: {
      id: "mod-u-kraf",
      name: "Mod-U-Kraf",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/mod-u-kraf__logo.svg",
    },
    tags: [
      "2009",
      "cross-browser-compatibility",
      "css",
      "front-end",
      "google-analytics",
      "html",
      "javascript",
      "php",
      "waterfall",
    ],
    categories: [
      "analytics",
      "language",
      "role",
      "sdlc",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "php", name: "PHP", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [{ id: "front-end", name: "Front End", display: true }],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2009", name: "2009", display: true }],
      },
    },
    displayName: "Mod-U-Kraf (2009)",
  },
  {
    id: "family-abuse-services",
    name: "Family Abuse Services",
    date: "2009-01-01",
    description: null,
    features: [
      {
        heading: "Features",
        items: [
          "Complete overhaul of the existing website",
          "A new look and feel",
          "Prioritizing User Experience for navigation and content structure",
          "Custom CMS setup so Family Abuse Services could maintain the site themselves ",
        ],
      },
      {
        heading: "Responsibilities",
        items: [
          "All Drupal setup, configuration and theming",
          "All front-end development",
          "Information Architecture for site content",
        ],
      },
    ],
    url: "https://familyabuseservices.org",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/family-abuse-services/family-abuse-services-home.png",
        originalAlt: "Family Abuse Services",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/family-abuse-services/family-abuse-services-home.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/family-abuse-services/family-abuse-services__logo.svg",
    employer: {
      id: "carolinanet",
      name: "CarolinaNet",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/carolina-net__logo.svg",
    },
    client: {
      id: "family-abuse-services",
      name: "Family Abuse Services",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/family-abuse-services__logo.svg",
    },
    tags: [
      "2009",
      "cross-browser-compatibility",
      "css",
      "data-mysql",
      "drupal",
      "front-end",
      "google-analytics",
      "html",
      "javascript",
      "non-profit",
      "php",
      "type-informational",
      "waterfall",
    ],
    categories: [
      "analytics",
      "cms",
      "data",
      "industry",
      "language",
      "project-type",
      "role",
      "sdlc",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "drupal", name: "Drupal", display: true }],
      },
      data: {
        id: "data",
        name: "Data",
        tags: [{ id: "data-mysql", name: "MySQL", display: true }],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "non-profit", name: "Non-Profit", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
          { id: "php", name: "PHP", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [
          { id: "type-informational", name: "Informational", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [{ id: "front-end", name: "Front End", display: true }],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2009", name: "2009", display: true }],
      },
    },
    displayName: "Family Abuse Services (2008)",
  },
  {
    id: "a-cleaner-world",
    name: "A Cleaner World",
    date: "2008-01-01",
    description:
      "While at Inter-Tech Communications I worked with Symetri Internet Marketing to provide A Cleaner World with their desired website overhaul.",
    features: [
      {
        heading: "Responsibilities",
        items: [
          "Site wide graphics",
          "Front-end development into existing back-end code",
        ],
      },
    ],
    url: "https://www.acleanerworld.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/a-cleaner-world/a-cleaner-world-home.png",
        originalAlt: "A Cleaner World",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/a-cleaner-world/a-cleaner-world-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/a-cleaner-world/a-cleaner-world-faqs.png",
        originalAlt: "A Cleaner World",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/a-cleaner-world/a-cleaner-world-faqs.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/a-cleaner-world/a-cleaner-world-locations.png",
        originalAlt: "A Cleaner World",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/a-cleaner-world/a-cleaner-world-locations.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/a-cleaner-world/a-cleaner-world-contact-us.png",
        originalAlt: "A Cleaner World",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/a-cleaner-world/a-cleaner-world-contact-us.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/a-cleaner-world/a-cleaner-world__logo.svg",
    employer: {
      id: "inter-tech-communications",
      name: "Inter-Tech Communications",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/inter-tech-communications__logo.svg",
    },
    client: {
      id: "a-cleaner-world",
      name: "A Cleaner World",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/a-cleaner-world__logo.svg",
    },
    tags: [
      "2008",
      "asp",
      "cross-browser-compatibility",
      "css",
      "front-end",
      "google-analytics",
      "html",
      "role-design",
      "type-informational",
      "waterfall",
    ],
    categories: [
      "analytics",
      "language",
      "project-type",
      "role",
      "sdlc",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "asp", name: "ASP", display: true },
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [
          { id: "type-informational", name: "Informational", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [
          { id: "role-design", name: "Design", display: true },
          { id: "front-end", name: "Front End", display: true },
        ],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [{ id: "2008", name: "2008", display: true }],
      },
    },
    displayName: "A Cleaner World (2007)",
  },
  {
    id: "inter-tech-communications",
    name: "Inter-Tech Communications",
    date: "2007-09-01",
    description:
      "At Inter-Tech Communications one of my main focuses was on completely rebuilding and maintaining the company website to provide clients and potential clients with accurate information about all the services offered.",
    features: [],
    url: "https://www.itc123.com",
    images: [
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/inter-tech-communications/inter-tech-communications-home.png",
        originalAlt: "Inter-Tech Communications",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/inter-tech-communications/inter-tech-communications-home.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/inter-tech-communications/inter-tech-communications-about-us.png",
        originalAlt: "Inter-Tech Communications",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/inter-tech-communications/inter-tech-communications-about-us.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/inter-tech-communications/inter-tech-communications-seo.png",
        originalAlt: "Inter-Tech Communications",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/inter-tech-communications/inter-tech-communications-seo.png",
      },
      {
        original:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/inter-tech-communications/inter-tech-communications-blackberry-server.png",
        originalAlt: "Inter-Tech Communications",
        thumbnail:
          "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/inter-tech-communications/inter-tech-communications-blackberry-server.png",
      },
    ],
    logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/inter-tech-communications/inter-tech-communications__logo.svg",
    employer: {
      id: "inter-tech-communications",
      name: "Inter-Tech Communications",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/inter-tech-communications__logo.svg",
    },
    client: {
      id: "inter-tech-communications",
      name: "Inter-Tech Communications",
      logo: "https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/inter-tech-communications__logo.svg",
    },
    tags: [
      "2007",
      "2008",
      "cross-browser-compatibility",
      "css",
      "data-mysql",
      "e-commerce",
      "ecom-other",
      "front-end",
      "google-analytics",
      "html",
      "javascript",
      "joomla",
      "type-e-commerce",
      "type-informational",
      "ux-information-architecture",
      "waterfall",
    ],
    categories: [
      "analytics",
      "cms",
      "data",
      "e-commerce",
      "industry",
      "language",
      "project-type",
      "role",
      "sdlc",
      "user-experience-ux",
      "year",
    ],
    tagsByCategory: {
      analytics: {
        id: "analytics",
        name: "Analytics",
        tags: [
          { id: "google-analytics", name: "Google Analytics", display: true },
        ],
      },
      cms: {
        id: "cms",
        name: "CMS",
        tags: [{ id: "joomla", name: "Joomla!", display: false }],
      },
      data: {
        id: "data",
        name: "Data",
        tags: [{ id: "data-mysql", name: "MySQL", display: true }],
      },
      "e-commerce": {
        id: "e-commerce",
        name: "E-Commerce",
        tags: [{ id: "ecom-other", name: "Other", display: true }],
      },
      industry: {
        id: "industry",
        name: "Industry",
        tags: [{ id: "e-commerce", name: "E-Commerce", display: true }],
      },
      language: {
        id: "language",
        name: "Language",
        tags: [
          { id: "css", name: "CSS", display: false },
          { id: "html", name: "HTML", display: true },
          { id: "javascript", name: "JavaScript", display: true },
        ],
      },
      "project-type": {
        id: "project-type",
        name: "Project Type",
        tags: [
          { id: "type-e-commerce", name: "E-Commerce", display: true },
          { id: "type-informational", name: "Informational", display: true },
        ],
      },
      role: {
        id: "role",
        name: "Role",
        tags: [{ id: "front-end", name: "Front End", display: true }],
      },
      sdlc: {
        id: "sdlc",
        name: "SDLC",
        tags: [{ id: "waterfall", name: "Waterfall", display: true }],
      },
      "user-experience-ux": {
        id: "user-experience-ux",
        name: "User Experience",
        tags: [
          {
            id: "cross-browser-compatibility",
            name: "Browser Compatibility",
            display: true,
          },
          {
            id: "ux-information-architecture",
            name: "Information Architecture",
            display: true,
          },
        ],
      },
      year: {
        id: "year",
        name: "Year",
        tags: [
          { id: "2007", name: "2007", display: true },
          { id: "2008", name: "2008", display: true },
        ],
      },
    },
    displayName: "Inter-Tech Communications (2007)",
  },
];
export default projects;
