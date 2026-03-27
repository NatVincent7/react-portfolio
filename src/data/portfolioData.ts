// 1. Import your images at the very top of the file
import tfiLogo from '../assets/images/tfi-logo.jpg'; 
import scmLogo from '../assets/images/scm-logo.jpg';
import binusLogo from '../assets/images/binus-logo.png';
import ruangguruLogo from '../assets/images/ruangguru-logo.jpg';
import revouLogo from '../assets/images/revou-logo.png';

export interface ExperienceItem {
  date: string;
  title: string;
  subtitle: string;
  description: string[];
  logo?: string;
}

export interface EducationItem {
  date: string;
  title: string;
  subtitle: string;
  description: string[];
  typeText?: string;
  logo?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
  logoText: string;
  logoColor: string;
  logoUrl: string;
}

export interface ProjectData {
  title: string;
  description: string;
  detailedDescription?: string;
  thumbnail: string;
  imgUrl?: string;
  techStack: string[];
  github?: string;
  demo?: string;
  link?: string;
  longDescription?: string;
}

export const workExperience: ExperienceItem[] = [
  {
    date: 'July 2024 - Present',
    title: 'Career Break for Professional Development',
    subtitle: '',
    description: [
      'Improved IELTS score from 4.5 to 6.5 through intensive preparation.',
      'Completed certifications in SQL, Python, machine learning, and data analytics via HackerRank, DataCamp, Kaggle, and RevoU.',
      'Applied skills through independent projects and consulting job simulations focused on data-driven business insights.',
    ],
    logo: '',
  },
  {
    date: 'June 2023 - December 2023',
    title: 'PT. Surya Citra Media, Tbk',
    subtitle: 'Business Analyst for CEO Office',
    description: [
      'Conducted market entry and competitor analysis using MySQL and Excel, contributing to 7% potential yearly revenue uplift.',
      'Built executive Power BI dashboards tracking KPIs enabling 3 high-impact strategic projects.',
      'Delivered corporate strategy decks achieving 32.3% cost efficiency improvement.',
    ],
    logo: scmLogo,
  },
  {
    date: 'January 2023 - June 2023',
    title: 'PT. Ruang Raya Indonesia',
    subtitle: 'Digital Marketing Specialist',
    description: [
      'Implemented SEO and funnel analysis with Google tools, boosting organic traffic 230% and monthly revenue 42% within four months.',
      'Improved conversion rates by 16% and scaled impressions to 400k+ monthly.',
      'Achieved top-5 Google rankings across multiple campaigns through on-page optimization and competitor benchmarking.',
    ],
    logo: ruangguruLogo,
  },
];

export const orgExperience: ExperienceItem[] = [
  {
    date: 'September 2020 - December 2023',
    title: 'Teach For Indonesia',
    subtitle: 'Chairman of Event & Volunteer',
    description: [
      'Managed a team of 4 volunteers to design and execute community initiatives, including a large-scale greening project.',
      'Organized and launched community campaigns addressing 3 Sustainable Development Goals, increasing community engagement and awareness.',
      'Coordinated with over 10 local authorities to ensure project compliance and optimize resource allocation across community initiatives.',
    ],
    logo: tfiLogo,
  },
];

export const educationList: EducationItem[] = [
  {
    date: 'October 2025 - February 2026',
    title: 'RevoU',
    subtitle: 'Full-stack Data Analytics Bootcamp',
    description: [
      'Completed intensive training delivering end-to-end analytics projects using SQL, Python, and statistical methods.',
      'Transformed raw data into actionable insights and interactive BI dashboards to support data-driven decision-making.',
    ],
    typeText: '🎓',
    logo: revouLogo,
  },
  {
    date: 'August 2020 - July 2024',
    title: 'Bina Nusantara University',
    subtitle: 'Bachelor of Economics in International Business Management',
    description: [
      'GPA: 3.59/4.00',
      'Thesis: The Impact of E-Trust and E-Service Quality on E-Loyalty with E-Satisfaction as a Mediating Variable in Online Travel Agencies in Semarang City.',
    ],
    typeText: '🎓',
    logo: binusLogo,
  },
];

export const certifications: CertificationItem[] = [
  {
    name: 'Data Analyst Certification',
    issuer: 'BSNP',
    year: 'February 2026',
    logoText: 'BSNP',
    logoColor: '#1d4ed8',
    logoUrl: '',
  },
  {
    name: 'Python (Basic)',
    issuer: 'HackerRank',
    year: 'November 2025',
    logoText: 'HR',
    logoColor: '#00c853',
    logoUrl: '',
  },
  {
    name: 'SQL (Intermediate)',
    issuer: 'HackerRank',
    year: 'February 2025',
    logoText: 'HR',
    logoColor: '#00c853',
    logoUrl: '',
  },
  {
    name: 'IELTS Preparation (Score: 6.5)',
    issuer: 'Alfalink',
    year: 'November 2024',
    logoText: 'IELTS',
    logoColor: '#dc2626',
    logoUrl: '',
  },
];

export interface ProjectData {
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  imgUrl?: string;
  techStack: string[];
  github?: string;
  link?: string;
  background: string;
  scopeOfWork: string[];
  process: string;
  processDiagram?: string;
  results: string[];
}

export const projectsData: ProjectData[] = [
  {
    title: 'E-commerce Analytics: Revenue & Funnel Optimization',
    category: 'Data Analysis',
    description: 'Analyzed TheLook e-commerce data to identify a 39.7% purchase-stage drop-off and recommend revenue uplift strategies without increasing marketing spend.',
    thumbnail: '',
    imgUrl: '',
    techStack: ['SQL', 'BigQuery', 'Python', 'Tableau', 'Excel', 'Google Analytics'],
    github: '',
    link: 'https://drive.google.com/file/d/1yoBKrgPniSIZvLRL6xWQPggolVqDYaGU/view?usp=drive_link',
    background: 'TheLook is a North American digital fashion e-commerce platform specializing in apparel and accessories. The project analyzes e-commerce data — including events, orders, and users — to identify revenue-uplift opportunities amidst persistent U.S. macroeconomic weakness and rising customer acquisition costs squeezing profitability.',
    scopeOfWork: [
      'Funnel analysis across all customer journey stages to identify drop-off points',
      'Category performance evaluation by GMV contribution',
      'Buyer behavior segmentation: new vs repeat customers',
      'Revenue trend analysis and AOV benchmarking',
      'Strategic recommendations for retention and upselling without additional marketing spend',
    ],
    process: 'Followed a six-step framework: problem understanding, data preparation and cleaning, exploratory data analysis, data analysis and visualization, concluding with insights and recommendations. Key metrics analyzed included funnel sessions, GMV, AOV, category performance, traffic source effectiveness, and repeat buyer shares.',
    processDiagram: '',
    results: [
      'Identified 39.7% drop-off at the purchase stage — highest friction point in the funnel',
      '5 categories led by Outerwear & Coats accounted for 50% of total GMV',
      'Repeat buyers generated 60% of GMV — proposed retention-focused loyalty program',
      'Confirmed 200% YoY revenue growth in 2023 while identifying stagnant AOV as a key upselling opportunity',
      'Search and organic sources drive 80% of revenue, validating SEO as primary growth lever',
    ],
  },
  {
    title: 'TokoBli Campaign Performance & Product Page A/B Testing',
    category: 'Marketing Analytics',
    description: 'Analyzed twin-date campaign performance (10/10, 11/11, 12/12) and conducted A/B testing on product pages to optimize revenue and transaction volume for a major Indonesian e-commerce platform.',
    thumbnail: '',
    imgUrl: '',
    techStack: ['Google Sheets', 'Python', 'Statistics', 'A/B Testing', 'Excel'],
    github: '',
    link: 'https://docs.google.com/presentation/d/1DWpCyGg_xcG2mA6yioYSJRbocyWkxpkiADDz5k6wVJw/edit?usp=drive_link',
    background: 'TokoBli is a major Indonesian e-commerce platform. The project evaluates the impact of "twin date" marketing events on business value and tests a new product page design to identify which drives higher customer spending.',
    scopeOfWork: [
      'Campaign performance evaluation across 10/10, 11/11, and 12/12 events',
      'A/B testing on product detail pages to measure impact on transaction value',
      'Data cleaning: handling missing values, duplicates, and outliers',
      'Descriptive statistics on AOV and total revenue per campaign',
      'Actionable plans to increase future transaction volumes by over 10x',
    ],
    process: 'Cleaned and profiled 10,159 rows of e-commerce data in Google Sheets, removing 5 duplicates and 11 outliers. Used pivot tables to compare campaign performance. Conducted a two-sample t-test to validate the new product page design. Segmented customers to identify high-value spending patterns.',
    processDiagram: '',
    results: [
      '12/12 campaign achieved the highest efficiency with a 5,854.15% ROI',
      'New product page significantly increased transaction value (t = -8), proving statistical significance',
      'Customers purchase an average of 1.26 items — leading to bundle-based cross-selling recommendations',
      'Recommended rolling out new product page in stages, prioritizing Men\'s fashion due to high ROI',
      'Identified top 5% big-spending customers for VIP segment building',
    ],
  },
  {
    title: 'RevoBank: Customer Behaviour & Segmentation Analysis',
    category: 'Data Analysis',
    description: 'Segmented RevoBank credit card customers using K-means clustering to drive targeted marketing strategies and increase transaction frequency.',
    thumbnail: '',
    imgUrl: '',
    techStack: ['Python', 'Pandas', 'Scikit-learn', 'K-means Clustering', 'EDA'],
    github: '',
    link: 'https://docs.google.com/presentation/d/1_e4MT188-aHbyZrKA3YASNMcfRfNDSSzzYdGCoCrnOo/edit?usp=drive_link',
    background: 'RevoBank seeks to increase credit card transaction frequency and volume by analyzing six months of sales performance data. The project focuses on understanding customer behavior through segmentation to drive targeted marketing strategies and enhance overall profitability.',
    scopeOfWork: [
      'Data cleaning: converting data types, handling missing values, removing duplicates',
      'Exploratory Data Analysis on fraud rates and card brand performance',
      'K-means clustering using Elbow and Silhouette methods',
      'Customer persona development for 4 distinct segments',
      'Targeted marketing recommendations per segment',
    ],
    process: 'Performed extensive data cleaning in Python including type conversion, null handling, and removing 31 duplicate IDs. Conducted EDA on fraud rates and card brands. Applied K-means clustering and validated the optimal number of clusters using both the Elbow method and Silhouette score.',
    processDiagram: '',
    results: [
      'Identified net profit of Rp 682.8B generated over the last six months',
      'Segmented customers into 4 groups with silhouette score of 0.4 for strong business interpretability',
      'Cluster 2 ("The Prime Sleeper") identified as primary growth target: high credit score (754), low debt-to-income ratio (0.14)',
      'Validated safe fraud rate of 0.10%, ensuring growth strategies remain within acceptable risk thresholds',
      'Recommended sign-up bonuses for Cluster 2 and personalized loyalty programs for Power Users (Cluster 0)',
    ],
  },
  {
    title: 'RevoGrocers: Sales Performance Analysis',
    category: 'Data Analysis',
    description: 'Analyzed sales performance for a multi-location grocery retailer using BigQuery SQL to optimize revenue strategies and enhance customer experience.',
    thumbnail: '',
    imgUrl: '',
    techStack: ['BigQuery', 'SQL', 'Google Sheets', 'Data Visualization'],
    github: '',
    link: 'https://docs.google.com/presentation/d/1xJKKLHdeNcOdNru4EbLYEyJo2xNkURQzRIGvDYMj-g0/edit?usp=drive_link',
    background: 'RevoGrocers is a fictional grocery retail business operating in multiple locations selling a diverse range of grocery products. The project analyzes sales performance using a Kaggle dataset to optimize sales strategies, enhance customer experience, and increase revenue through data-driven decision-making.',
    scopeOfWork: [
      'Data cleaning and transformation using BigQuery',
      'SQL queries to analyze revenue by product category',
      'Customer loyalty evaluation via repeat purchase rates',
      'Pricing analysis: AOV by category',
      'Four targeted business strategies for category prioritization and loyalty enhancement',
    ],
    process: 'Followed a structured methodology beginning with data cleaning and transformation in BigQuery. Developed SQL queries to address specific business questions on sales performance, pricing, and customer loyalty. Interpreted query outputs to identify trends, anomalies, and actionable insights across product categories.',
    processDiagram: '',
    results: [
      'Confections emerged as top category generating 573.8M in revenue — 12.87% of total',
      'Top categories like Confections and Meat maintain repeat purchase rates of approximately 99%',
      'Grain maintained the highest AOV of 799 despite lower sales volume — premium strategy opportunity',
      'Identified 4 targeted business strategies focusing on category prioritization and high-value shopper loyalty',
    ],
  },
  {
    title: 'RevoFinance: Expense & Budget Utilization Dashboard',
    category: 'Product & Business Analytics',
    description: 'Built an interactive personal finance dashboard to analyze spending behavior, monitor budget utilization, and identify financial risk patterns using Tableau.',
    thumbnail: '',
    imgUrl: '',
    techStack: ['Tableau', 'Data Visualization', 'LOD Calculations', 'Dashboard Design', 'Business Analytics'],
    github: '',
    link: 'https://docs.google.com/presentation/d/1yLxvMHtWWei1MHJAteuca_DQvv_2Dn5w9Btz6GaiEFQ/edit?slide=id.g3b5e3652149_0_0#slide=id.g3b5e3652149_0_0',
    background: 'RevoFinance is a digital banking product designed to help users manage personal finances. This project focuses on building an interactive Expense and Budget Utilization Dashboard to monitor spending behavior, identify risky financial patterns, and recommend product features or nudges to improve financial health.',
    
    scopeOfWork: [
      'Developed interactive Tableau dashboard to monitor budget utilization and spending patterns',
      'Connected Annual Budget, Merchant Master, and Personal Expenses datasets using logical data model',
      'Created Level of Detail (LOD) calculations to track advanced financial metrics',
      'Engineered ranking filters to identify top five merchants by spending',
      'Built drill-down hierarchies for category-level and merchant-level analysis',
      'Implemented color-coded indicators to highlight over-budget spending categories',
      'Visualized online vs offline transaction distribution and monthly expense growth'
    ],

    process: 'Started by connecting three datasets (Annual Budget, Merchant Master, and Personal Expenses) using Tableau logical layer to ensure flexibility and data integrity. Designed scorecards for key financial metrics and built hierarchical drill-down structures for deeper analysis. Developed multiple visualizations including dual-axis bar charts, line charts, and geographic maps. Applied advanced calculations such as Level of Detail (LOD) expressions and ranking filters to identify spending patterns and top merchants.',

    processDiagram: '',

    results: [
      'Identified over-budget spending categories using budget utilization tracking',
      'Highlighted top five merchants contributing to highest expenses',
      'Analyzed monthly expense growth compared to income trends to detect financial risk',
      'Visualized online-to-offline transaction ratio to reduce online exposure',
      'Mapped offline spending locations in Jakarta to understand spending concentration',
      'Provided actionable recommendations for product nudges and financial behavior improvements'
    ],
  },
  {
    title: 'Revoshion: Corporate Segment Profit Optimization',
    category: 'Business & Product Analytics',
    description: 'Conducted end-to-end structured business analysis to identify root causes of profit decline and designed strategic recommendations to improve corporate segment profitability.',
    thumbnail: '',
    imgUrl: '',
    techStack: ['Business Analysis', 'Root Cause Analysis', 'Hypothesis Testing', 'Data Analysis', 'Strategic Frameworks'],
    github: '',
    link: '',
    
    background: 'Revoshion is a fictional business scenario focused on optimizing the Corporate Segment profitability. Despite a 20.4% increase in sales, the Corporate Segment experienced a 13.6% profit decline. This project aimed to conduct an end-to-end structured business analysis to identify root causes and propose strategic recommendations to improve profitability and operational efficiency.',

    scopeOfWork: [
      'Conducted end-to-end structured business analysis for Corporate Segment profitability',
      'Analyzed 13.6% profit decline despite 20.4% sales growth',
      'Developed hypothesis-driven root cause analysis across revenue and cost drivers',
      'Applied DARCI model for stakeholder alignment and structured decision-making',
      'Prioritized five hypothesis branches including pricing, product mix, and operational costs',
      'Evaluated discount strategies and corporate pricing efficiency',
      'Developed profit optimization strategy targeting 15% growth within three months'
    ],

    process: 'Applied structured business analysis methodology using DARCI for stakeholder management and alignment. Conducted root cause analysis focusing on revenue drivers, cost structure, and operational expenses. Developed hypotheses including excessive discounting, low-margin product shift, and inefficient operational ROI. Prioritized hypotheses using OBIPR framework and evaluated data insights to identify key profitability drivers and strategic opportunities.',

    processDiagram: '',

    results: [
      'Identified excessive discounting as primary driver of 13.6% profit decline',
      'Detected shift toward low-margin product categories impacting profitability',
      'Uncovered inefficient operational and logistics cost structure',
      'Recommended minimum margin thresholds for corporate contracts',
      'Proposed incentive realignment toward high-margin products',
      'Designed strategic roadmap targeting 15% profit increase within three months'
    ],
  }
];