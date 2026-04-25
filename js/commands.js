var githubUrl = 'https://github.com/amlannandy';
var linkedinUrl = 'https://www.linkedin.com/in/amlan-nandy/';
var emailUrl = 'mailto:amlannandy5@gmail.com';
var devpostUrl = 'https://devpost.com/amlannandy5';
var resumeUrl =
  'https://drive.google.com/file/d/1NkGVMKP4215qW7gtPBUWa8DHrAnBXxus/view?usp=sharing';

let banner = [
  `<span class="color2">Welcome to my portfolio! — Type <span class="command">help</span> for a list of supported commands.</span>`,
];

let about = [
  '<br>',
  `<span class="white underline">Hey, I'm Amlan! 👋</span>`,
  '<br>',
  `<span class="color2">· Full Stack Engineer with 4+ years of experience.</span>`,
  `<span class="color2">· Currently working as a <span class="command">Senior Software Engineer</span> 
  at <span class="command">SigNoz (YC W21)</span> — an open-source observability platform.</span>`,
  `<span class="color2">· Core stack: <span class="command">JavaScript · TypeScript · React.js · Next.js · Nest.js</span></span>`,
  `<span class="color2">· Love to build beautiful, performant products from vague problem statements.</span>`,
  `<span class="color2">· Google Summer of Code alumnus (2021) and mentor (2022) with SCoRe Lab.</span>`,
  `<span class="color2">· Type <span class="command">experience</span> to see where I've worked, or <span class="command">projects</span> for what I've built.</span>`,
  `<span class="color2">· Contact: <a href="mailto:amlannandy5@gmail.com">amlannandy5@gmail.com</a></span>`,
  '<br>',
];

let experience = [
  '<br>',
  `<span class="white">── Full-time ──────────────────────────────────────────</span>`,
  '<br>',

  `<span class="command">SigNoz (YC W21)</span><span class="index"> — Senior Software Engineer · Nov 2024 – Present · Remote</span>`,
  `<pre class="color2">
 · Built the Metrics Explorer from scratch, enabling tracking, monitoring and
   visualization of OpenTelemetry metrics in SigNoz, implementing scalable APIs
   and performance driven UIs.
 · Implemented and scaled APIs in Go, designing filter-aware ClickHouse query
   paths across raw/aggregated telemetry tables to power fast, reliable
   OpenTelemetry metric analysis at scale.
 · Optimized and scaled graph components across SigNoz by identifying and
   resolving performance bottlenecks, eliminating memory leaks, reducing
   unnecessary re-renders, and enabling efficient visualization of time-series
   datasets with up to 100k data points.
 · Rebuilt SigNoz's alerting system, modernizing the UX and introducing advanced
   capabilities including multiple alert conditions and thresholds, custom
   evaluation windows, alert grouping, and flexible notification configuration.
 · Improved stability of the alerts codebase by identifying, triaging, and
   resolving critical issues, resulting in a 70% reduction in Sentry alerts
   over two months.
 · Developed a framework-agnostic frontend monitoring SDK that allows users to
   seamlessly instrument their frontend applications with SigNoz, capturing
   OpenTelemetry data (logs, metrics, traces) in form of key signals such as
   web vitals, console errors, JavaScript exceptions, distributed tracing,
   page load performance metrics and real user monitoring.
 · Established the end-to-end testing infrastructure using Playwright and set up
   Playwright Test Agents MCP to automatically generate test cases, create new
   tests, and fix existing ones, improving developer productivity.
</pre>`,

  `<span class="command">Clumio (acquired by Commvault)</span><span class="index"> — Member of Technical Staff II · Jan 2023 – Oct 2024 · Bangalore</span>`,
  `<pre class="color2">
 · Lead Frontend Engineer for the AWS Connections Manager module, responsible
   for securely establishing and managing connections between Clumio and customer
   AWS accounts using CloudFormation and Terraform for backup and restore workflows.
 · Collaborated with cross-functional teams, including API contract discussions
   with backend, UX reviews with design, test plans with automation, and aligning
   feature requirements with product managers.
 · Built the Connection Group onboarding flow from scratch, enabling users to
   connect up to 12 AWS regions simultaneously for a single account, resulting
   in more than 90% faster onboarding times.
 · Refactored and moved away the feature from a monolithic application into its
   separate microfrontend using Webpack Module Federation, improving modularity
   and enabling independent deployments.
 · Revamped the codebase to move into a more modular state management, migrating
   from Redux to Context API and React Query, streamlining data fetching and
   reducing boilerplate across components.
 · Modernized the unit testing setup by migrating from Enzyme to React Testing
   Library, increasing testing reliability and enforcing best practices.
</pre>`,

  `<span class="command">Clumio (acquired by Commvault)</span><span class="index"> — Member of Technical Staff I · Jan 2022 – Dec 2022 · Bangalore</span>`,
  `<pre class="color2">
 · Contributed to building Clumio's Design System, enabling consistent design
   and implementation across teams.
 · Built the Table component, with emphasis on user experience and performance,
   having advanced capabilities including column resizing, row and column
   pinning, and virtualized rendering.
 · Developed other reusable components including Tooltip, Popup, and Navigation
   Menu, prioritizing performance, responsiveness and accessibility.
 · Implemented a color token system to support light and dark themes, replacing
   hardcoded styles with theme-based variables for improved maintainability.
 · Published and maintained the library on Storybook, providing comprehensive
   documentation, interactive examples, and usage guidelines to improve
   developer adoption.
</pre>`,

  '<br>',
  `<span class="white">── Internships ────────────────────────────────────────</span>`,
  '<br>',

  `<span class="command">Trell</span><span class="index"> — Software Development Engineer Intern · Sep 2021 – Dec 2021 · Remote</span>`,
  `<pre class="color2">
 · Collaborated with the frontend team to migrate the Trell Shop application
   from React.js to Next.js, improving routing, server-side rendering, and
   overall application performance.
 · Contributed to migrating data fetching from REST APIs to GraphQL APIs,
   integrating queries using Apollo Client for efficient data retrieval and
   client-side caching.
 · Developed the pre-order workflow, including product wishlisting and cart
   state management across the application.
 · Improved the performance and reliability of the Product Page by implementing
   code splitting, lazy loading, error boundaries, and server-side rendering
   (SSR), optimizing bundle size and improving initial page load performance.
</pre>`,

  `<span class="command">Pointo</span><span class="index"> — Full Stack Developer Intern · Jun 2020 – Dec 2020 · Remote</span>`,
  `<pre class="color2">
 · Contributed to migrating the backend from Firebase to a RESTful API built
   with Node.js, Express.js, and MySQL to support scalable backend services.
 · Developed an admin dashboard using React.js to manage rides, drivers, and
   operational data for an e-mobility platform.
 · Built a mapping interface to visualize live ride routes and monitor ride
   status in real time.
 · Implemented functionality to view upcoming ride routes and assign drivers
   based on proximity and location data.
</pre>`,

  '<br>',
  `<span class="white">── Open Source ────────────────────────────────────────</span>`,
  '<br>',

  `<span class="command">Google Summer of Code 2021</span><span class="index"> — Student Developer · SCoRe Lab · May 2021 – Aug 2021 · Remote</span>`,
  `<pre class="color2">
 · Contributed to LabelLab, a machine learning image classification platform
   for researchers, using Flask, React.js, Flutter, and MySQL to support
   dataset management and collaborative ML workflows across web and mobile.
 · Implemented a Team Management module with role-based access control to
   distribute roles and assign access levels within projects for managing
   ML models and other shared resources.
 · Developed an Activity Tracking System to log project-level changes and map
   actions to specific users and entities, enabling monitoring of task progress
   and maintaining a structured change history.
 · Built a real-time chat system across platforms using Socket.io, enabling
   seamless communication between project members within collaborative ML
   projects.
</pre>`,

  `<span class="command">Google Summer of Code 2022</span><span class="index"> — Mentor · SCoRe Lab · Mar 2022 – Aug 2022 · Remote</span>`,
  `<pre class="color2">
 · Mentored two students in developing an issue tracking system (similar to
   Jira) for LabelLab, a collaborative platform for machine learning researchers.
 · Guided mentees in project planning, system design, and technical reviews
   across frontend, backend, and mobile components using Flask, React.js,
   Flutter, and MySQL.
</pre>`,

  '<br>',
];

let projects = [
  '<br>',

  `<a href="https://github.com/SigNoz/signoz" target="_blank" class="command underline">SigNoz</a><span class="index"> ★ 26k</span>`,
  `<pre class="color2">
 Open-source observability platform native to OpenTelemetry with logs, traces and
 metrics in a single application (Current Employer).
 Owner of Metrics Explorer and Alerts.
 Stack: Go · TypeScript · React.js · PostgreSQL · ClickHouse
</pre>`,

  `<a href="https://github.com/scorelab/LabelLab" target="_blank" class="command underline">LabelLab</a><span class="index"> ★ 81</span>`,
  `<pre class="color2">
 ML image classification platform for researchers supporting dataset management and
 collaborative workflows across web and mobile. GSoC 2021 project with SCoRe Lab.
 Contributions: Team Management, Activity Tracking System, Real-time Chat (Socket.io).
 Stack: Flask · React.js · Flutter · MySQL
</pre>`,

  `<a href="https://github.com/amlannandy/AgroAcres" target="_blank" class="command underline">AgroAcres</a><span class="index"> ★ 16</span>`,
  `<pre class="color2">
 Smart agriculture platform assisting farmers through the crop cycle with a crop
 calendar, chatbot, and e-commerce for direct produce sales.
 Stack: Flutter · Firebase · Python · Flask
</pre>`,

  `<a href="https://github.com/amlannandy/Medigo" target="_blank" class="command underline">MediGo</a><span class="index"> ★ 6</span>`,
  `<pre class="color2">
 Teleconsultation platform connecting users with doctors over text, audio and video.
 Generates medical reports from symptoms; supports digital prescriptions.
 Stack: JavaScript · React.js · Flutter · Node.js · Firebase · Dialogflow
</pre>`,

  `<a href="https://github.com/amlannandy/BuildABot" target="_blank" class="command underline">BuildABot</a><span class="index"> ★ 1</span>`,
  `<pre class="color2">
 No-code platform for building and deploying custom AI chatbots via visual workflows.
 Stack: TypeScript · React.js · Go · Mux · OpenAI API · PostgreSQL
</pre>`,

  `<a href="https://github.com/amlannandy/get-seven" target="_blank" class="command underline">GetSeven</a>`,
  `<pre class="color2">
 Online turn-based high-stakes card game playable with up to 18 players simultaneously.
 Stack: TypeScript · React.js · Node.js · Nest.js · PostgreSQL · Redis · Socket.io
</pre>`,

  `<span class="index">→ More at <a href="https://github.com/amlannandy" target="_blank">github.com/amlannandy</a></span>`,
  '<br>',
];

let skills = [
  '<br>',
  `<pre class="color2"><span class="command">Frontend</span>
 HTML/CSS · JavaScript · TypeScript · React.js · Next.js · TailwindCSS
 Webpack Module Federation · Playwright · Storybook

<span class="command">Backend</span>
 Go · Mux · Node.js · Express.js · Nest.js · GraphQLs · PostgreSQL
 MongoDB · Redis · ClickHouse

<span class="command">Observability & Cloud</span>
 OpenTelemetry · Amazon Web Services · Firebase · Supabase

<span class="command">Tools</span>
 ClaudeCode · Prompt engineering · Figma · Git · Linux · Docker
</pre>`,
  '<br>',
];

let achievements = [
  '<br>',
  `<span class="color2">🎓  <span class="command">Google Summer of Code 2021</span> — Student Developer at SCoRe Lab</span>`,
  `<span class="color2">🧑‍🏫  <span class="command">Google Summer of Code 2022</span> — Mentor at SCoRe Lab</span>`,
  `<span class="color2">🥈  <span class="command">Runners-up — The Global Hack</span> — Mental Health track (€5,000 · 2100+ teams)</span>`,
  `<span class="color2">🏆  <span class="command">Winner — Cisco Code vs COVID19 Hackathon</span></span>`,
  `<span class="color2">🇮🇳  <span class="command">Featured on Digital India Platform</span> — Govt. of India</span>`,
  `<span class="color2">🏅  <span class="command">Felicitated by Cisco</span> — Telehealth & Smart Agriculture projects</span>`,
  `<span class="color2">🎯  <span class="command">Top 6 Teams in India</span> — Cisco ThingQbator Cohort Program</span>`,
  `<span class="color2">🥈  <span class="command">Runners-up — Trithon 2020</span> — Inter-state hackathon, 100+ teams</span>`,
  '<br>',
];

let social = [
  '<br>',
  `<span class="color2">github      <a href="https://github.com/amlannandy" target="_blank">github.com/amlannandy</a></span>`,
  `<span class="color2">linkedin    <a href="https://www.linkedin.com/in/amlan-nandy/" target="_blank">linkedin.com/in/amlan-nandy</a></span>`,
  `<span class="color2">devpost     <a href="https://devpost.com/amlannandy5" target="_blank">devpost.com/amlannandy5</a></span>`,
  `<span class="color2">email       <a href="mailto:amlannandy5@gmail.com">amlannandy5@gmail.com</a></span>`,
  '<br>',
];

let help = [
  `<br><pre class="color2">
<span class="command">about</span>          ↳ Who am I?
<span class="command">experience</span>     ↳ Work history.
<span class="command">projects</span>       ↳ What I've built.
<span class="command">skills</span>         ↳ Tech stack.
<span class="command">achievements</span>   ↳ Awards & recognition.
<span class="command">social</span>         ↳ Links to find me online.
<span class="command">resume</span>         ↳ Open my resume.
<span class="command">email</span>          ↳ Send me an email.
<span class="command">github</span>         ↳ Open GitHub profile.
<span class="command">linkedin</span>       ↳ Open LinkedIn profile.
<span class="command">devpost</span>        ↳ Open Devpost profile.
<span class="command">history</span>        ↳ Command history.
<span class="command">clear</span>          ↳ Clear the terminal.
<span class="command">snake</span>          ↳ Play Snake. 🐍
<span class="command">exit</span>           ↳ Close the terminal.
</pre><br>`,
];
