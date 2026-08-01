// Project Section Logo's
import CustomerBehaviorDashboard from "../public/images/Project_images/Customer_behavior_dashboard.png";
import SalesPerformanceDashboard from "../public/images/Project_images/Sales Performance Dashboard(Gamezone Products).png";
import HR_Dashboard from "../public/images/Project_images/HR Dashboard.png";
import FinancialDashboard from "../public/images/Project_images/Finance Performance Dashboard.png";

// Experience Section Logo's

import dxcLogo from "../public/images/company_logo/Dxc.png";
import codingNinjaLogo from "../public/images/company_logo/codingNinjas.png";

// Education Section Logo's
import apsLogo from "../public/images/education_logo/APS.jpeg";
import microsoftLogo from "../public/images/education_logo/Microsoft_logo.avif";
import googleLogo from "../public/images/education_logo/google-logo.webp";
import amuLogo from "../public/images/education_logo/amu.jpeg";

export const NavLinks = [
  { id: "about", label: "About", url: "#about" },
  { id: "skills", label: "Skills", url: "#skills" },
  { id: "experience", label: "Experience", url: "#experience" },
  { id: "work", label: "Work", url: "#work" },
  { id: "education", label: "Education", url: "#education" },
  { id: "contact", label: "Contact", url: "#contact" },
];

export const experiences = [
  {
    id: 0,
    img: dxcLogo,
    role: "Analyst III",
    company: "DXC Technology",
    date: "Sept 2022 - Sept 2024",
    desc: `• Processed and standardized 100,000+ insurance records for U.S. clients using Excel and SQL, ensuring data accuracy for weekly reporting, policy tracking, and business analysis.
           • Developed automated Excel reports and interactive Power BI dashboards to monitor insurance KPIs, customer trends, and operational performance, reducing manual reporting effort by 40% across 4 departments.
           • Collaborated with 4 analysts and 2 senior managers to validate business requirements, define 6 key KPIs, and deliver accurate reports supporting client operations and decision-making.`,
    skills: ["Advanced Excel", "SQL", "Python", "Power BI"],
  },
  {
    id: 1,
    img: codingNinjaLogo,
    role: "Junior Analyst Intern",
    company: "Coding Ninjas",
    date: "July 2023 - March 2024",
    desc: `• Completed a hands-on Data Analytics internship focused on SQL, Excel, Power BI, Tableau, and Google Sheets.
           • Cleaned, transformed, and analyzed datasets to identify trends, generate business insights, and support data-driven decision-making.
           • Built interactive dashboards and reports to visualize KPIs, sales performance, and operational metrics while strengthening data storytelling and reporting skills.`,
    skills: ["Power BI", "Google Sheets", "Tableau", "SQL"],
  },
];

export const education = [
  {
    id: 0,
    img: microsoftLogo,
    school: "Microsoft",
    date: "July 2026",
    grade: "90%",
    desc: "Validated expertise in Power Query, DAX, data modeling, dashboard development, and business intelligence using Microsoft Power BI.",
    degree: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
  },
  {
    id: 1,
    img: googleLogo,
    school: "Coursera",
    date: "June 2026",
    grade: "85%",
    desc: "Completed 8 hands-on case studies coveringspreadsheets, data cleaning, dashboards, and stakeholder presentations.",
    degree: "Coursera - Google Data Analytics Professional Certificate",
  },
  {
    id: 2,
    img: amuLogo,
    school: "Aligarh Muslim University, Aligarh",
    date: "July 2018 - Aug 2021",
    grade: "63.2%",
    desc: "I completed my Bachelor's degree in Commerce (B.COM(Honrs.)) from AMU, Aligarh. ",
    degree: "Bachelor of Commerce - BCOM(Honours)",
  },
  {
    id: 3,
    img: apsLogo,
    school: "Army Public School Almora, Uttrakhand",
    date: "Apr 2017 - March 2018",
    grade: "67%",
    desc: "I completed my class 12 education from Army Public School, Almora, under the CBSE board, where I studied Accountancy, Business Studies, Economics and Information Practices.",
    degree: "CBSE(XII) - Commerce",
  },
];

export const projects = [
  {
    id: 0,
    title: "Customer Shopping Behavior Analysis",
    description: `This project analyzes customer shopping behavior using Python, SQL, PostgreSQL, and Power BI to uncover meaningful business insights from transactional data.
                  The project follows a complete end-to-end analytics workflow, including data loading, exploratory data analysis (EDA), data cleaning, SQL-based business analysis, dashboard development, reporting, and business presentation.
                  The objective is to help businesses understand customer purchasing behavior, identify sales trends, improve marketing strategies, and support data-driven decision-making.`,
    image: CustomerBehaviorDashboard,
    tags: ["Python", "PostgreSQL", "Power BI"],
    github: "https://github.com/VinodSingh07/Customer_behavior_Analysis",
  },
  {
    id: 1,
    title: "Sales Performance Dashboard (GameZone Products)",
    description: `The GameZone Sales Performance Dashboard provides a comprehensive overview of product sales by combining key business metrics with interactive visualizations. It helps business users identify top-performing products, monitor Average Order Value (AOV), track refunds, compare regional sales performance, and evaluate the effectiveness of marketing channels.
       Designed for sales managers, business analysts, e-commerce teams, and decision-makers, the dashboard transforms raw transactional data into meaningful business insights.`,
    image: SalesPerformanceDashboard,
    tags: ["MS Excel", "Mysql", "Tableau"],
    github:
      "https://github.com/VinodSingh07/Sales-Performance-Dashboard-Gamezone-Products-",
  },

  {
    id: 2,
    title: "HR Analytics Dashboard",
    description: `The HR Analytics Dashboard is designed to visualize key Human Resource metrics in a single interactive report. It provides a clear overview of employee demographics, salary distribution, job roles, education levels, leave balances, gender diversity, and workforce growth over time.
       This dashboard helps HR managers identify workforce trends, monitor employee composition, and support strategic decision-making.`,
    image: HR_Dashboard,
    tags: ["Power BI", "Data Preparation", "Data Modelling", "DAX"],
    github: "https://github.com/VinodSingh07/HR-Analytics-Dashboard-PowerBI",
  },

  {
    id: 3,
    title: "Financial Performance Dashboard",
    description: `An executive-ready Financial Performance Dashboard built in Power BI to track actual sales, target comparisons, performance variances, sales team metrics, and monthly revenue trends.`,
    image: FinancialDashboard,
    tags: [
      "Power BI",
      "Data Preparation",
      "Data Modelling",
      "DAX",
      "Dashboard Visuals",
    ],
    github: "https://github.com/VinodSingh07/Financial-Performance-Dashboard",
  },
];
