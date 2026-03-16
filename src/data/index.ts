import { Project, Skill, BlogPost, Testimonial, WorkExperience, Education, Certification } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'Chap Mall',
    description: 'Full-stack e-commerce platform with role-based access, inventory tracking, and RESTful APIs.',
    longDescription: 'Designed and developed a full-stack e-commerce platform using React.js, Node.js, Express, and MySQL. Implemented product and variant management, cart functionality, and role-based access for vendors and customers. Integrated RESTful APIs, database relationships, and server-side validation to ensure data integrity. Applied data-driven logic for inventory tracking, availability status, and order management.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    tech: ['React.js', 'Node.js', 'Express', 'MySQL', 'REST API', 'JavaScript'],
    github: 'https://github.com/TofaKM/Advanced-E-commerce-Website',
    demo: 'https://github.com/TofaKM/Advanced-E-commerce-Website',
    featured: true,
    category: 'fullstack',
    year: '2025',
  },
  {
    id: '2',
    title: 'Final Year Project — E-Commerce App',
    description: 'Comprehensive e-commerce web application built as KCA University Final Year Project.',
    longDescription: 'Developed a full e-commerce web application as my Final Year Project at KCA University, showcasing full-stack capabilities across the entire development lifecycle — from database design to a deployed frontend. Demonstrates knowledge from Data Analytics, Database Systems, and Software Engineering coursework.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    tech: ['JavaScript', 'React', 'Node.js', 'MySQL', 'Bootstrap'],
    github: 'https://github.com/TofaKM',
    demo: 'https://github.com/TofaKM',
    featured: true,
    category: 'fullstack',
    year: '2025',
  },
  {
    id: '3',
    title: 'Data Analytics Dashboard',
    description: 'Power BI dashboard for visualizing health data metrics and operational KPIs.',
    longDescription: 'Built during the SHA internship and personal study: a Power BI dashboard visualising cleaned datasets, tracking operational KPIs, and surfacing insights from raw Excel and SQL data. Demonstrates end-to-end analytics workflow from raw data to interactive visuals.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tech: ['Power BI', 'SQL', 'Excel', 'Python', 'Pandas'],
    github: 'https://github.com/TofaKM',
    demo: 'https://github.com/TofaKM',
    featured: false,
    category: 'data',
    year: '2024',
  },
  {
    id: '4',
    title: 'Data Pipeline Project',
    description: 'ETL pipeline for processing and transforming raw datasets using Python and SQL.',
    longDescription: 'Hands-on ALX Data Engineering project: an ETL pipeline that ingests raw CSV data, cleans and transforms it using Pandas and NumPy, loads it into a MySQL database, and serves summary queries. Demonstrates core data engineering concepts including pipeline design, data quality checks, and schema management.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80',
    tech: ['Python', 'Pandas', 'NumPy', 'MySQL', 'SQL'],
    github: 'https://github.com/TofaKM',
    demo: 'https://github.com/TofaKM',
    featured: false,
    category: 'data',
    year: '2025',
  },
]

export const skills: Skill[] = [
  // Frontend
  { name: 'React.js', icon: '⚛️', level: 80, category: 'frontend' },
  { name: 'JavaScript', icon: '🟨', level: 82, category: 'frontend' },
  { name: 'Bootstrap', icon: '🅱️', level: 75, category: 'frontend' },
  { name: 'HTML / CSS', icon: '🌐', level: 85, category: 'frontend' },
  // Backend
  { name: 'Node.js', icon: '🟢', level: 78, category: 'backend' },
  { name: 'Express', icon: '🚂', level: 75, category: 'backend' },
  { name: 'Python', icon: '🐍', level: 85, category: 'backend' },
  { name: 'REST APIs', icon: '🔌', level: 80, category: 'backend' },
  { name: 'C#', icon: '🔷', level: 60, category: 'backend' },
  // Database
  { name: 'MySQL / SQL', icon: '🗄️', level: 85, category: 'database' },
  { name: 'MongoDB', icon: '🍃', level: 65, category: 'database' },
  { name: 'Database Design', icon: '🏗️', level: 78, category: 'database' },
  // DevOps / Data
  { name: 'Pandas', icon: '🐼', level: 82, category: 'devops' },
  { name: 'NumPy', icon: '🔢', level: 78, category: 'devops' },
  { name: 'Matplotlib', icon: '📈', level: 75, category: 'devops' },
  { name: 'Power BI', icon: '📊', level: 80, category: 'devops' },
  // Tools
  { name: 'Git / GitHub', icon: '🐙', level: 85, category: 'tools' },
  { name: 'Excel', icon: '📋', level: 88, category: 'tools' },
  { name: 'VS Code', icon: '💻', level: 92, category: 'tools' },
  { name: 'Postman', icon: '📮', level: 75, category: 'tools' },
]

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'getting-started-data-engineering',
    title: 'Getting Started with Data Engineering in 2025',
    excerpt: 'A practical guide to beginning your data engineering journey — the tools, concepts, and mindset you actually need.',
    content: `# Getting Started with Data Engineering in 2025

Data engineering is one of the most exciting fields to enter right now. As someone going through the ALX Data Engineering Program while building real projects, here's what I wish I'd known from day one.

## What Is a Data Engineer?

A data engineer builds and maintains the infrastructure that enables data analysts and scientists to do their work. Think of it as the plumbing of a data organisation — you make sure clean, reliable data flows where it needs to go.

## The Core Stack to Learn First

### 1. SQL — Non-Negotiable
Before anything else, get strong at SQL. It is the language of data. MySQL, PostgreSQL — pick one and go deep. Joins, window functions, indexing — these matter every day.

### 2. Python for Data
Python with Pandas and NumPy is your daily driver for transformation work. Learn how to read messy CSVs, clean nulls, reshape data, and write it back out cleanly.

### 3. Basic Pipeline Thinking
An ETL pipeline: Extract data from a source → Transform it (clean, reshape) → Load it to a destination. That's the core loop. Start simple, add complexity as needed.

## My Honest Advice

Start with a real project. I built Chap Mall as a full-stack app, but the data layer — the MySQL schema, the query design, the API responses — taught me more than any tutorial. Find a dataset you actually care about and build something with it.

The tools change. SQL and clear thinking don't.`,
    date: '2025-03-10',
    readTime: '6 min read',
    tags: ['Data Engineering', 'Python', 'SQL', 'Career'],
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80',
  },
  {
    id: '2',
    slug: 'building-ecommerce-react-nodejs',
    title: 'Building Chap Mall: Lessons from My First Full-Stack Project',
    excerpt: 'What I learned designing and shipping a full e-commerce platform from scratch using React, Node.js and MySQL.',
    content: `# Building Chap Mall: Lessons from My First Full-Stack Project

Chap Mall started as a university concept and became the most educational thing I've built. Here's what the real lessons were.

## The Stack Decision

React.js for the frontend, Node.js + Express for the backend, MySQL for the database. This stack is battle-tested, has excellent documentation, and the job market loves it. For a first serious project, boring and reliable beats exciting and complex.

## What Surprised Me

### Database Schema Design Is Hard
I redesigned the products table three times. Variants (size, colour) are genuinely tricky to model well. The final schema: products → variants → inventory was cleaner, but getting there took research and mistakes.

### Server-Side Validation Matters
Early on I only validated on the frontend. Then I learned: never trust the client. Every piece of data that hits your API endpoint needs validation on the server. Always.

### Role-Based Access Control
Building vendor vs customer access opened my eyes to how real applications handle permissions. JWT tokens, middleware checks, route guards — these concepts clicked through doing, not reading.

## What I'd Do Differently

Start with a data model diagram before writing a single line of code. I can't stress this enough. Three hours of schema design on paper saves thirty hours of migrations later.`,
    date: '2025-02-18',
    readTime: '8 min read',
    tags: ['React', 'Node.js', 'MySQL', 'Full-Stack'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
  },
  {
    id: '3',
    slug: 'power-bi-beginners-guide',
    title: 'Power BI for Beginners: From Raw Data to Insight',
    excerpt: 'A practical introduction to Power BI — how to connect data sources, build models, and create dashboards that actually answer questions.',
    content: `# Power BI for Beginners: From Raw Data to Insight

Power BI is Microsoft's business intelligence tool, and once you understand it, you'll wonder how anyone makes decisions without it.

## The Mental Model

Power BI has three layers:
1. **Data layer** — connect to your data (Excel, SQL, CSV, APIs)
2. **Model layer** — define relationships between tables
3. **Report layer** — build visuals

Getting this mental model right from the start saves a lot of confusion.

## Start With Clean Data

Garbage in, garbage out. Before building any visual, spend time in Power Query (the built-in data transformation tool) cleaning your data. Remove duplicates, fix date formats, handle nulls. Clean data makes everything downstream easier.

## My Favourite Visuals for Data Work

- **Card visuals** for single KPI numbers (total revenue, record count)
- **Bar/Column charts** for comparisons
- **Line charts** for trends over time
- **Slicers** for interactive filtering

## The One Thing Most Beginners Miss

DAX (Data Analysis Expressions) is the formula language of Power BI. Even basic DAX — like CALCULATE, SUMX, and FILTER — unlocks 80% of what you need. Invest a week learning DAX basics and you'll be dramatically more effective.`,
    date: '2025-01-25',
    readTime: '7 min read',
    tags: ['Power BI', 'Data Analytics', 'Business Intelligence'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Faith Muna',
    role: 'Claim Officer',
    company: 'Social Health Authority, Nanyuki',
    initials: 'FM',
    text: 'Tofa was a reliable and diligent IT intern. He brought a data-first mindset to everything — from data cleaning to system support — and consistently delivered work that was accurate and on time.',
  },
  {
    id: '2',
    name: 'Dacosta Otekoh',
    role: 'HR Manager',
    company: 'Beisa Hotel',
    initials: 'DO',
    text: 'A hard-working and fast-learning developer. Tofa\'s ability to pick up new tools and apply them to real problems is impressive. He is professional, collaborative, and genuinely committed to growing his craft.',
  },
]

export const workExperience: WorkExperience[] = [
  {
    company: 'Social Health Authority',
    role: 'IT Intern',
    period: 'September 2024 – December 2024',
    location: 'Nanyuki, Kenya',
    description: 'Provided technical support and data operations for a government health institution serving the Nanyuki region.',
    achievements: [
      'Provided technical support for computer systems, networks, and user applications ensuring reliable performance',
      'Performed data entry, data cleaning, and report preparation using Excel and internal tools',
      'Assisted with system maintenance, troubleshooting, and basic hardware/software diagnostics',
      'Collaborated with teams to improve IT workflows and enhance data accuracy and efficiency',
    ],
    tech: ['Excel', 'Data Cleaning', 'IT Support', 'Networking', 'Troubleshooting'],
  },
]

export const education: Education[] = [
  {
    school: 'KCA University',
    degree: 'Bachelor of Science (BSc)',
    field: 'Applied Computing / Computer Science',
    period: 'September 2020 – November 2025',
    location: 'Nairobi, Kenya',
    grade: 'Graduate',
    details: [
      'Studied Data Analytics, Database Systems, Software Engineering, and Systems Analysis & Design',
      'Programming Concepts & Languages across multiple paradigms',
      'Final Year Project: full-stack e-commerce application using JavaScript, Node.js, React, and MySQL',
    ],
  },
  {
    school: 'Ndururumo High School',
    degree: 'Kenya Certificate of Secondary Education',
    field: 'Sciences & Computing',
    period: 'January 2016 – November 2019',
    location: 'Nyahururu, Kenya',
    grade: 'B+',
    details: [
      'Studied Mathematics, Physics, Chemistry, Geography, Computer Studies, and CRE',
      'Active in student leadership — served as Academic Secretary in final year',
      'Participated in the National Mathematics Competition',
    ],
  },
  {
    school: 'ALX Africa',
    degree: 'Data Engineering Program',
    field: 'Data Engineering',
    period: 'March 2025 – Present',
    location: 'Remote / Online',
    grade: 'In Progress',
    details: [
      'Learning data engineering concepts, data pipelines, and big-data processing',
      'Working with Python, SQL, and modern data technologies',
      'Completing hands-on projects focused on data processing and analytics',
    ],
  },
]

export const certifications: Certification[] = [
  {
    name: 'Data Analytics',
    issuer: 'Cisco Academy',
    date: 'August 2024',
    credentialUrl: 'https://www.credly.com/badges/aa459c6a-f252-45e4-b56a-49f9cd516354/public_url',
    icon: '📊',
    skills: ['Data Analysis', 'Data Cleaning', 'Visualization', 'Excel', 'SQL', 'Python'],
    status: 'completed',
  },
  {
    name: 'Introduction to Machine Learning',
    issuer: 'Cisco IBM',
    date: 'February 2025',
    credentialUrl: 'https://www.credly.com/badges/d380bf99-8288-47f9-9883-c848a62d8460/public_url',
    icon: '🤖',
    skills: ['Machine Learning', 'Supervised Learning', 'Unsupervised Learning', 'Model Evaluation', 'Python'],
    status: 'completed',
  },
  {
    name: 'ALX Data Engineering Program',
    issuer: 'ALX Africa',
    date: 'March 2025 – Present',
    icon: '🔧',
    skills: ['Data Pipelines', 'Big Data', 'Python', 'SQL', 'ETL'],
    status: 'in-progress',
  },
  {
    name: 'Data Analytics',
    issuer: 'ALX Africa',
    date: '26 September 2025',
    credentialUrl: 'https://savanna.alxafrica.com/certificates/97rGSZN3hJ',
    icon: '📈',
    skills: ['SQL / MySQL', 'Power BI', 'Data Cleaning', 'Analysis', 'Reporting'],
    status: 'completed',
  },
]
