export const profile = {
  name: "VICKRAM D",
  title: "SOC Analyst | IT Infrastructure & Cybersecurity",
  headline: "IT Infrastructure, SOC operations, and compliance-focused cybersecurity",
  summary:
    "B.Tech IT graduate with hands-on experience in IT Infrastructure, Networking, and Cybersecurity Operations. Skilled in network configuration, endpoint protection, and security compliance aligned with ITIL and ISO 27001 standards. Experienced in network scanning, vulnerability assessment, and SIEM monitoring using Nmap, SpiderFoot, Splunk, and Wazuh. Strong understanding of access management, risk assessment, and audit documentation within SOC2 and ISO frameworks.",
  highlights: [
    "Network security",
    "Vulnerability assessment",
    "SIEM monitoring",
    "Access management",
    "Risk assessment",
    "Governance & compliance",
  ],
  stats: {
    years: "3.5+",
    incidents: "29+",
  },
  email: "vickramdurai111@gmail.com",
  phone: "+91 6380215490",
  location: "India",
  website: "",
  linkedin: "https://linkedin.com/in/vickram-d05",
  github: "https://github.com/vickram-5",
  resumeUrl: "/src/assets/Vickram_D Resume.pdf",
  photo: "/src/assets/IMG_0005.png",
}

export const skills: string[] = [
  "IT Infrastructure Management",
  "Security Monitoring & Incident Response",
  "Network Config, VPN & Troubleshooting",
  "Risk Assessment & SOC2/ISO 27001",
  "Governance, Policy & Audit Documentation",
  "Access Control & Privileged Management",
  "Automation & Patch Management",
  "Continuous Improvement",
  "Cybersecurity & SOC Operations",
  "Cloud Security",
  "IT Service Management (ITIL/ITSM)",
  "Ethical Hacking & Risk Assessment",
  "Data Analysis & Business Intelligence",
  "Generative AI & Automation in Security",
]

export type Certification = { name: string; issuer: string; year: string; image?: string }
export const certifications: Certification[] = [
  { name: "Cybersecurity Fundamentals", issuer: "IBM SkillsBuild", year: "Feb 2025" },
  { name: "Software Engineering Job Simulation", issuer: "Accenture", year: "Nov 2025", image: "/f9H4CHchzrKQbnbmK_4sLyCPgmsy8DA6Dh3_8JAowuqnNHZoqjFD6_1740126322561_completion_certificate_page-0001.jpg" },
  { name: "Cybersecurity Job Simulation", issuer: "PwC India", year: "Nov 2025", image: "/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_8JAowuqnNHZoqjFD6_1762496526135_completion_certificate_page-0001.jpg" },
  { name: "Cyber Security Associate Certification Programme", issuer: "Reliance Foundation", year: "Oct 2025", image: "/relaines_page-0001.jpg" },
  { name: "Social Engineering & Ethical Hacking", issuer: "CapriccioSec University", year: "Aug 2025" },
  { name: "IT Service Management (ITSM) Professional", issuer: "Atlassian", year: "May 2025" },
  { name: "Advance Your Skills as an IT Help Desk Specialist", issuer: "LinkedIn", year: "May 2025" },
  { name: "Certified Information Security Manager (CISM)", issuer: "ISACA Vancouver Chapter", year: "May 2025" },
  { name: "Explore a Career in IT Support", issuer: "LinkedIn", year: "May 2025" },
  { name: "BCS Business Analysis Certified", issuer: "Microsoft", year: "Mar 2025" },
  { name: "Certified Ethical Hacker (CEH)", issuer: "LinkedIn", year: "Mar 2025" },
  { name: "Certified Information Systems Security Professional (CISSP)", issuer: "LinkedIn", year: "Mar 2025" },
  { name: "CompTIA Cybersecurity Analyst (CySA+)", issuer: "LinkedIn Learning Community", year: "Mar 2025" },
  { name: "ITIL Fundamentals", issuer: "CompTIA", year: "Mar 2025" },
  { name: "Data Analysis", issuer: "Microsoft", year: "Mar 2025" },
  { name: "Data Analyst Certification", issuer: "LinkedIn", year: "Mar 2025" },
  { name: "Generative AI Fundamentals", issuer: "Microsoft", year: "Mar 2025" },
  { name: "Azure AI Essentials Professional", issuer: "Microsoft Azure Communities", year: "Mar 2025" },
  { name: "Azure AI Essentials Professional Certificate", issuer: "Microsoft", year: "Mar 2025" },
  { name: "Microsoft Certified: Azure Fundamentals", issuer: "Simplilearn", year: "Mar 2025" },
  { name: "Software Development Certification", issuer: "Microsoft", year: "Mar 2025" },
  { name: "Windows 11 for IT Support: Troubleshooting Basics", issuer: "LinkedIn", year: "Mar 2025" },
  { name: "AI Security & Governance", issuer: "Securiti", year: "Feb 2025", image: "/securiti 1.jpg" },
  { name: "Foundation Level Threat Intelligence Analyst", issuer: "arcX", year: "Feb 2025", image: "/acrx.jpeg" },
  { name: "PrivacyOps Certification", issuer: "Securiti", year: "Feb 2025", image: "/securiti 2.jpg" },
  { name: "Cybersecurity Job Simulation (Forage)", issuer: "PwC Switzerland", year: "Feb 2025" },
  { name: "Cybersecurity Analyst Job Simulation (Forage)", issuer: "Tata Group", year: "Feb 2025" },
  { name: "Cyber Security Program (Cyber Defence, Risk, and Network Security)", issuer: "Tech Mahindra Foundation", year: "Jan 2025", image: "/tech magendra_page-0001.jpg" },
]

export type Metric = { label: string; value: string }
export type Project = {
  title: string
  year: string
  summary: string
  tags: string[]
  metrics: Metric[]
  link?: string
}
export const projects: Project[] = [
  {
    title: "Network Scanning & Vulnerability Enumeration",
    year: "2024",
    summary:
      "Executed subnet scans (192.168.1.0/24) using Nmap to identify live hosts, open ports, and running services. Performed TCP SYN, service version and OS detection scans to map vulnerabilities and assess potential risks. Created reports to prioritize risk mitigation and incident response actions within a simulated SOC lab. Tools: Nmap, Wireshark, pfSense, Snort.",
    tags: ["Networking", "Vulnerability Assessment", "Incident Response"],
    metrics: [
      { label: "Techniques", value: "TCP SYN, Service version, OS detection" },
      { label: "Focus", value: "Risk prioritization & reporting" },
      { label: "Tools", value: "Nmap, Wireshark, pfSense, Snort" },
    ],
    link: "https://www.linkedin.com/posts/vickram-d05_cybersecurity-nmap-networkscanning-activity-7393688527932133377-rjMx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZPHfcBavnXYcU0R1cugX1kL4s-AEAak9w",
  },
  {
    title: "OSINT-Based System Footprinting",
    year: "2024",
    summary:
      "Configured and executed SpiderFoot for open-source intelligence (OSINT) reconnaissance. Discovered domain, IP, and host data to assess exposure and external correlations. Visualized collected data through network relationship graphs to improve asset discovery and risk visibility. Tools: SpiderFoot, Maltego, WHOIS, DNSdumpster.",
    tags: ["Network Intelligence", "Governance", "Risk Identification"],
    metrics: [
      { label: "Outcome", value: "Exposure mapped & relationships visualized" },
      { label: "Tools", value: "SpiderFoot, Maltego, WHOIS, DNSdumpster" },
      { label: "Artifacts", value: "Relationship graphs" },
    ],
    link: "https://www.linkedin.com/posts/vickram-d05_osint-spiderfoot-threatintelligence-activity-7393683439230533632-KiVl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZPHfcBavnXYcU0R1cugX1kL4s-AEAak9w",
  },
  {
    title: "Security Compliance & Risk Assessment Framework",
    year: "2023",
    summary:
      "Built a simulated compliance framework aligned with SOC2, ISO 27001, and NIST SP 800-53. Performed user access reviews, vulnerability scans, and patch validation to assess risk posture. Developed security policies, incident response plans, and audit readiness documentation. Tools: Nessus, Wazuh, ISO templates, NIST guidance.",
    tags: ["Risk Assessment", "Compliance", "Governance"],
    metrics: [
      { label: "Standards", value: "SOC2, ISO 27001, NIST" },
      { label: "Tools", value: "Nessus, Wazuh" },
      { label: "Outcome", value: "Policy & audit readiness" },
    ],
    // placeholder link — replace with a specific post URL if you have one
    link: profile.linkedin,
  },
  {
    title: "IT Infrastructure & Service Delivery Automation",
    year: "2023",
    summary:
      "Implemented an ITIL-based service delivery framework to improve uptime and user experience. Configured Active Directory and Microsoft 365 for centralized account and policy management. Automated patching, backup processes, and VPN-based secure access for remote operations. Tools: Windows Server, Active Directory, Microsoft 365 Admin, PowerShell, ServiceNow.",
    tags: ["IT Infrastructure", "Service Management", "Automation"],
    metrics: [
      { label: "Systems", value: "Active Directory, Windows Server, M365" },
      { label: "Processes", value: "Patching, Backup, Automation" },
      { label: "Tools", value: "PowerShell, ServiceNow, VPN" },
    ],
    // placeholder link — replace with a specific post URL if you have one
    link: profile.linkedin,
  },
  {
    title: "Splunk SIEM Security Monitoring & Threat Detection",
    year: "2024",
    summary:
      "Configured Splunk Enterprise to collect and monitor logs across endpoints and servers. Built dashboards for privilege escalation, brute-force detection, and suspicious login patterns. Correlated alerts with the MITRE ATT&CK framework for actionable threat response. Tools: Splunk Enterprise, Sysmon, Windows Event Logs.",
    tags: ["SIEM", "Security Monitoring", "Threat Response"],
    metrics: [
      { label: "Dashboards", value: "Privilege escalation, brute-force" },
      { label: "Framework", value: "MITRE ATT&CK" },
      { label: "Tools", value: "Splunk, Sysmon" },
    ],
    link: "https://www.linkedin.com/posts/vickram-d05_splunk-spl-siem-activity-7381717237776138241-ofVg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZPHfcBavnXYcU0R1cugX1kL4s-AEAak9w",
  },
  {
    title: "Windows Endpoint Hardening & Access Control",
    year: "2024",
    summary:
      "Implemented endpoint protection and data security policies across enterprise systems. Configured BitLocker encryption, Windows Defender, and audit/lockout policies to meet ISO 27001 standards. Ensured compliance through periodic review of access control, password policy, and system logs. Tools: GPO, BitLocker, Windows Defender, PowerShell.",
    tags: ["Endpoint Hardening", "Access Control", "Compliance Alignment"],
    metrics: [
      { label: "Controls", value: "GPOs, BitLocker, Defender" },
      { label: "Policies", value: "Password, Audit, Lockout" },
      { label: "Baseline", value: "ISO 27001" },
    ],
    // placeholder link — replace with a specific post URL if you have one
    link: profile.linkedin,
  },
  {
    title: "Wazuh SIEM Installation and Configuration",
    year: "2024",
    summary: "Installed and configured Wazuh for log collection, rule management, and alerting across endpoints and servers. Integrated with Filebeat and ELK for visualization and monitoring. Tools: Wazuh, ELK Stack, Filebeat.",
    tags: ["SIEM", "Endpoint Monitoring", "Log Management"],
    metrics: [
      { label: "Outcome", value: "Agent deployment & alerting" },
      { label: "Tools", value: "Wazuh, ELK" },
    ],
    link: "https://www.linkedin.com/posts/vickram-d05_wazuh-siem-cybersecurity-activity-7382435431025573888-zSA6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZPHfcBavnXYcU0R1cugX1kL4s-AEAak9w",
  },
  {
    title: "Exploring OpenCVE – Smarter Vulnerability Intelligence",
    year: "2024",
    summary: "Evaluated OpenCVE for aggregating CVE data and improving vulnerability intelligence workflows. Produced alerts and trackers for prioritized CVEs.",
    tags: ["Vulnerability Management", "Threat Intelligence"],
    metrics: [
      { label: "Outcome", value: "CVE aggregation & tracking" },
      { label: "Tools", value: "OpenCVE" },
    ],
    link: "https://www.linkedin.com/posts/vickram-d05_cybersecurity-vulnerabilitymanagement-threatintelligence-activity-7369062356493987841-Z1V7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZPHfcBavnXYcU0R1cugX1kL4s-AEAak9w",
  },
  {
    title: "Hands-on with Tenable Nessus Essentials",
    year: "2024",
    summary: "Performed vulnerability scans using Tenable Nessus Essentials to identify common misconfigurations and vulnerabilities across lab hosts. Generated executive and technical reports for remediation.",
    tags: ["Vulnerability Assessment", "Reporting"],
    metrics: [
      { label: "Scans", value: "Host & network scans" },
      { label: "Tools", value: "Nessus" },
    ],
    link: "https://www.linkedin.com/posts/vickram-d05_cybersecurity-vulnerabilityassessment-nessus-activity-7369784148757987330-PCeM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZPHfcBavnXYcU0R1cugX1kL4s-AEAak9w",
  },
  {
    title: "Cyber Threat Intelligence Update",
    year: "2025",
    summary: "Curated threat intelligence updates focusing on ransomware indicators and emerging TTPs; shared insights with peers and on professional network.",
    tags: ["Threat Intelligence", "OSINT"],
    metrics: [
      { label: "Topic", value: "Ransomware trends" },
      { label: "Channels", value: "OSINT, LinkedIn" },
    ],
    link: "https://www.linkedin.com/posts/vickram-d05_cybersecurity-threatintelligence-ransomware-activity-7370354235038744576-kCdd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZPHfcBavnXYcU0R1cugX1kL4s-AEAak9w",
  },
  {
    title: "Kali Linux Home Lab – Cybersecurity Practice Environment",
    year: "2024",
    summary: "Built a home lab using Kali Linux for hands-on practice: vulnerability scanning, exploitation labs, and SIEM integration for detection tuning.",
    tags: ["Lab", "Training", "Hands-on"],
    metrics: [
      { label: "Environment", value: "Kali, VirtualBox" },
      { label: "Focus", value: "Practice & detection" },
    ],
    link: "https://www.linkedin.com/posts/vickram-d05_cybersecurity-kalilinux-homelab-activity-7382808733086560257-DzNL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZPHfcBavnXYcU0R1cugX1kL4s-AEAak9w",
  },
]

export const tools: string[] = [
  // Network Scanning & Analysis
  "Nmap",
  "Wireshark",
  "Zenmap",
  "Masscan",
  "Advanced IP Scanner",
  "tcpdump",
  "Angry IP Scanner",
  "pfSense",
  "Snort",
  // Vulnerability Assessment & Penetration Testing
  "Nessus",
  "OpenVAS",
  "Nikto",
  "Burp Suite",
  "OWASP ZAP",
  "Metasploit",
  "Hydra",
  "SQLmap",
  "John the Ripper",
  "Aircrack-ng",
  // SIEM, EDR & Log Analysis
  "Splunk",
  "Wazuh",
  "Security Onion",
  "ELK Stack",
  "Graylog",
  "OSSEC",
  "Sysmon",
  "CrowdStrike Falcon",
  "SentinelOne",
  // OSINT & Threat Intelligence
  "SpiderFoot",
  "Maltego",
  "TheHarvester",
  "Shodan",
  "Censys",
  "VirusTotal",
  "AbuseIPDB",
  // Endpoint Hardening & Protection
  "BitLocker",
  "Windows Defender",
  "AppLocker",
  "Group Policy (GPO)",
  "Sysinternals Suite",
  "Microsoft Baseline Security Analyzer (MBSA)",
  // Cloud Security & Infrastructure
  "Azure Security Center",
  "Microsoft 365 Admin",
  "AWS GuardDuty",
  "Google Cloud Security Command Center",
  "VirtualBox",
  "Docker",
  // Incident Response & Forensics
  "Autopsy",
  "Volatility Framework",
  "FTK Imager",
  "Redline",
  "Caine",
  "Log2Timeline (Plaso)",
  // Governance, Risk & Compliance
  "ServiceNow GRC",
  "AuditBoard",
  "ISO 27001 Toolkit",
  "SOC 2 Compliance Tracker",
  "NIST CSF Tools",
  "GDPR Compliance Checker",
  // Scripting & Automation
  "PowerShell",
  "Bash",
  "Python",
  "YARA",
  "Regex101",
]

export type Experience = {
  role: string
  company: string
  period: string
  points: string[]
}

export const experiences: Experience[] = [
  {
    role: "Officer",
    company: "Bajaj Finance Limited",
    period: "16-Jan-2025 – 10-Jul-2025",
    points: [
      "Managed endpoint systems for performance, patch updates, and access control compliance",
      "Supported VPN setup, account management, and system hardening under ITIL best practices",
      "Assisted in incident escalation and resolution through ServiceNow and internal monitoring tools",
      "Ensured user access governance aligned with ISO 27001 security standards",
      "Contributed to IT audits, maintaining documentation for SOC2 readiness and internal compliance",
      "Location: India (Hybrid)",
      "Technologies: Active Directory, ServiceNow, Windows Server, VPN, ISO 27001, ITIL Framework",
    ],
  },
  {
    role: "IT Support & CRM Analyst",
    company: "TeamLease Services Private Ltd",
    period: "19-Mar-2024 – 15-Jan-2025",
    points: [
      "Delivered Level 1 & 2 technical support for end users, networks, and CRM tools",
      "Administered Active Directory users, groups, and permissions, ensuring secure account access",
      "Monitored system performance, managed patching schedules, and validated endpoint security",
      "Created ServiceNow incident workflows and tracked SLA compliance for IT requests",
      "Collaborated with InfoSec team for vulnerability scans, remediation, and audit reporting",
      "Supported Microsoft 365 administration, including mailbox, license, and backup management",
      "Client: Bajaj Finance Ltd",
      "Technologies: Active Directory, Microsoft 365, ServiceNow, VPN, Windows 10/11, Wazuh, Splunk (basic monitoring)",
    ],
  },
  {
    role: "Customer Care Executive",
    company: "Cogent E Services Limited",
    period: "01-Jun-2018 – 10-Oct-2018",
    points: [
      "Provided technical and customer support for product-related queries",
      "Logged incidents in internal ticketing tools, ensuring timely escalation to higher support levels",
      "Improved customer experience metrics by providing accurate information and quick resolutions",
      "Technologies: Ticketing Systems, MS Office, Communication Tools",
    ],
  },
  {
    role: "Sales Executive",
    company: "Bajaj Finance Branch (RR Financial Services)",
    period: "01-Sep-2022 – 18-Mar-2024",
    points: [
      "Assisted in customer onboarding, verification, and CRM record maintenance",
      "Supported IT team with branch-level system troubleshooting and access management",
      "Maintained data accuracy and confidentiality, ensuring compliance with internal security policies",
      "Identified and escalated technical and application issues to IT support teams",
      "Technologies: CRM Tools, MS Excel, Ticketing Systems, Network Troubleshooting (basic)",
    ],
  },
]

export type Education = {
  program: string
  institution: string
  period: string
  details?: string
}

export const education: Education[] = [
  {
    program: "B.Tech, Information Technology",
    institution: "SS International University",
    period: "2016 – 2020",
    details: "Key coursework: Networking, Operating Systems, Database Systems, Information Security Fundamentals. Final project: Network Security and Vulnerability Assessment — performed subnet scanning, vulnerability enumeration and basic SIEM correlation (Nmap, Nessus, Splunk).",
  },
  {
    program: "Cybersecurity Training & Hands-on Practice",
    institution: "LinkedIn E-Learning",
    period: "2019 – Present",
  },
]

export type Achievement = {
  icon: string
  title: string
  company: string
  description: string
  date: string
  image?: string
}

export const achievements: Achievement[] = [
  {
    icon: "🥇",
    title: "Early Star Award",
    company: "TeamLease Services Pvt. Ltd",
    description: "For exceptional performance",
    date: "April 2024",
    image: "/april.jpg",
  },
  {
    icon: "🏅",
    title: "Star of the Month Award",
    company: "TeamLease Services Pvt. Ltd",
    description: "For consistent outstanding results",
    date: "June 2024",
    image: "/jun.jpg",
  },
  {
    icon: "🛡️",
    title: "Vigilance Award",
    company: "Bajaj Finance Limited",
    description: "For identifying and preventing fraud under the RSA process",
    date: "May 2024",
    image: "/RSA.jpg",
  },
]