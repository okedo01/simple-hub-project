export interface Courses {
    id: number
    title: string
    description: string
    duration: string
    category: string
    experience: string
}

export type Students = {
  docID?: string; 
  id: number; 
  name: string;
  email: string;
  password: string
  course: string;
  courseID: number;
  progress: number;
  courseTitle: string
};

export const Exercises: Record<number, string[]> = {
  
  "1": [
    "What does HTML stand for?",
    "How do you create a link in HTML?",
    "What is the difference between class and id in CSS?",
    "What is the purpose of the `<head>` tag in HTML?",
    "Write a CSS rule to style all `<p>` elements in red.",
    "How do you include external CSS in an HTML file?",
    "What is the use of the box model in CSS?",
    "How do you declare a JavaScript variable?",
    "What is the difference between == and === in JavaScript?",
    "Create a button that shows an alert when clicked."
  ],
  "2": [
    "What are TypeScript generics?",
    "How do you define a functional component with props in TypeScript?",
    "What is a custom React hook?",
    "How do you share global state using Context API?",
    "Create a hook that toggles a boolean state.",
    "How does TypeScript improve type safety in React?",
    "What is the use of useReducer?",
    "What is the difference between type and interface in TypeScript?",
    "How do you type an event in React (e.g., onChange)?",
    "Create a typed form using React Hook Form."
  ],
  "3": [
    "What is the purpose of Pandas in Python?",
    "How do you read a CSV file in Pandas?",
    "What is the difference between `loc` and `iloc`?",
    "How do you handle missing data in Pandas?",
    "How do you group data in a DataFrame?",
    "Create a bar plot using Matplotlib.",
    "How do you merge two DataFrames?",
    "What is data normalization?",
    "How do you sort a DataFrame by a column?",
    "Write a function to visualize a correlation matrix."
  ],
  "4": [
    "What are the key principles of UX design?",
    "What is a wireframe?",
    "What tools are commonly used for UI design?",
    "Explain the concept of usability testing.",
    "What is the difference between low-fidelity and high-fidelity prototypes?",
    "How do you conduct a heuristic evaluation?",
    "What is user-centered design?",
    "Define accessibility in UI/UX.",
    "How do you create a persona?",
    "What is an affinity diagram?"
  ],
  "5": [
    "What does MERN stand for?",
    "How do you connect React with a Node backend?",
    "What is JSX?",
    "Explain the role of Express.js in a MERN app.",
    "What is the purpose of MongoDB?",
    "Create a REST API with Express and MongoDB.",
    "How do you fetch data in React using Axios?",
    "What is the difference between useEffect and useState?",
    "How do you deploy a MERN app?",
    "Write a schema using Mongoose."
  ],
  "6": [
    "What is supervised learning?",
    "Explain the difference between classification and regression.",
    "How do you split a dataset for training and testing?",
    "What is overfitting?",
    "How do you evaluate a model’s performance?",
    "What is scikit-learn used for?",
    "Implement a linear regression model in Python.",
    "What is a confusion matrix?",
    "How do you normalize data for ML?",
    "Explain cross-validation."
  ],
  "7": [
    "What is CI/CD?",
    "What is Docker and why is it used?",
    "Create a simple Dockerfile.",
    "What are Docker volumes?",
    "Explain continuous integration in a DevOps pipeline.",
    "How do you deploy a container to AWS?",
    "What is the use of GitHub Actions?",
    "What is container orchestration?",
    "Explain the role of Jenkins in CI/CD.",
    "What are some best practices in DevOps?"
  ],
  "8": [
    "What is the difference between Flexbox and Grid?",
    "How do you center content using Flexbox?",
    "Create a responsive grid with CSS Grid.",
    "What is a media query?",
    "How do you hide an element on small screens?",
    "Create a responsive navbar layout.",
    "What is mobile-first design?",
    "How do you use auto-fill and auto-fit in Grid?",
    "How can you test responsive design?",
    "What is the rem unit in CSS?"
  ],
  "9": [
    "What is a primary key in SQL?",
    "How do you perform a LEFT JOIN?",
    "Create a table with three columns in SQL.",
    "What is normalization in databases?",
    "What is a foreign key?",
    "Write a query to retrieve data using GROUP BY.",
    "How do you update a row in SQL?",
    "What is the difference between DELETE and TRUNCATE?",
    "How do you design a one-to-many relationship?",
    "What is an index in a database?"
  ],
  "10": [
    "What is a threat model?",
    "How does encryption work?",
    "What is the difference between symmetric and asymmetric encryption?",
    "What is a firewall?",
    "Name 3 common types of cyberattacks.",
    "How do you protect against SQL injection?",
    "What is multi-factor authentication?",
    "What is phishing?",
    "Define penetration testing.",
    "What are some best practices for password security?"
  ]
}

export const ExerciseAnswers: Record<number, string[]> = {
    1: [
        "HyperText Markup Language",
        "Using <a href='url'>link text</a>",
        "Class is reusable, ID is unique",
        "To include meta info like title, links",
        "p { color: red; }",
        "<link rel='stylesheet' href='style.css'>",
        "Defines layout: content, padding, border, margin",
        "let x = 5; or var x = 5; or const x = 5;",
        "=== checks type and value, == checks value only",
        "<button onclick=\"alert('Hello')\">Click Me</button>"
    ],
    2: [
        "Generics are reusable type-safe components",
        "const MyComponent: FC<Props> = ({...}) => {}",
        "A custom function that uses React hooks",
        "Using React.createContext and useContext",
        "const [state, setState] = useState(false); toggle = () => setState(!state);",
        "Avoids runtime errors by checking types at compile time",
        "Alternative to useState, especially for complex state logic",
        "`type` defines shape, `interface` allows declaration merging",
        "onChange={(e: React.ChangeEvent<HTMLInputElement>) => ...}",
        "Use `useForm<FormType>()` and register fields"
    ],
    3: [
        "To manipulate and analyze data in tabular form",
        "`pd.read_csv('file.csv')`",
        "`loc` accesses by label, `iloc` by index",
        "`df.fillna()` or `df.dropna()`",
        "`df.groupby('column')`",
        "`plt.bar(x, y)` using Matplotlib",
        "`pd.merge(df1, df2, on='key')`",
        "Rescale data to standard range (e.g., 0 to 1)",
        "`df.sort_values(by='column')`",
        "Use seaborn.heatmap or matplotlib.imshow on correlation matrix"
    ],
    4: [
        "Usability, consistency, feedback, simplicity",
        "A low-detail layout design of UI",
        "Figma, Sketch, Adobe XD",
        "Testing design with real users",
        "Low = sketch, High = pixel-perfect design",
        "Evaluate UI using Nielsen heuristics",
        "Design focused on users’ needs",
        "Design that includes people with disabilities",
        "A fictional character representing users",
        "A method to organize data from research"
    ],
    5: [
        "MongoDB, Express, React, Node.js",
        "Use fetch/axios or API calls from frontend to Node backend",
        "JavaScript XML syntax for defining UI in React",
        "Handles routing and APIs in backend",
        "Stores data as JSON-like documents",
        "Use `express()` with endpoints, connect to MongoDB using mongoose",
        "`axios.get('/api/data')`",
        "useState holds data, useEffect triggers side effects",
        "Deploy frontend to Vercel/Netlify and backend to Render/Heroku",
        "const UserSchema = new mongoose.Schema({...})"
    ],
    6: [
        "ML task where model learns from labeled data",
        "Classification = categories, Regression = continuous values",
        "`train_test_split()` in scikit-learn",
        "Model fits too closely to training data, performs poorly on new data",
        "Use accuracy, precision, recall, etc.",
        "Python library for ML algorithms",
        "Use `LinearRegression().fit(X, y)`",
        "A table showing predicted vs actual classes",
        "Scale features to a similar range (e.g., 0–1)",
        "Split data multiple times and average results"
    ],
    7: [
        "Continuous Integration / Continuous Deployment",
        "A tool to package apps into containers",
        "FROM node:alpine\nCOPY . .\nRUN npm install\nCMD npm start",
        "Persistent storage for Docker containers",
        "Automated testing/building on code changes",
        "Push image to ECR and deploy via ECS",
        "Automate CI/CD pipelines with workflows",
        "Managing containers (e.g., Kubernetes)",
        "Jenkins automates building, testing, and deploying",
        "Automation, monitoring, versioning, small deployments"
    ],
    8: [
        "Flexbox = one-dimensional, Grid = two-dimensional layouts",
        "justify-content and align-items to center",
        "Use display: grid and grid-template-columns",
        "Conditionally applies CSS based on screen width",
        "`display: none` with media queries",
        "Use Flex/Grid with media queries for layout",
        "Start designing for mobile first, then scale up",
        "`grid-template-columns: repeat(auto-fill, minmax(...))`",
        "Browser dev tools, responsive mode",
        "`rem` is root element font size based unit"
    ],
    9: [
        "Unique identifier for table row",
        "`SELECT * FROM A LEFT JOIN B ON A.id = B.a_id`",
        "`CREATE TABLE users (id INT, name TEXT, email TEXT);`",
        "Process of organizing DB to reduce redundancy",
        "Key linking to a primary key in another table",
        "`SELECT dept, COUNT(*) FROM employees GROUP BY dept;`",
        "`UPDATE users SET email = 'new@example.com' WHERE id = 1;`",
        "DELETE removes rows; TRUNCATE removes all rows without logging",
        "Use foreign keys referencing primary key",
        "Faster query performance using B-trees etc."
    ],
    10: [
        "Process to identify and mitigate threats",
        "Transform data to unreadable format using key",
        "Symmetric = same key, Asymmetric = public/private key",
        "Network security system that monitors traffic",
        "Phishing, malware, DDoS",
        "Sanitize inputs or use ORM",
        "Two or more forms of identity verification",
        "Fake emails or sites to steal info",
        "Simulated attack to identify vulnerabilities",
        "Use strong, unique passwords and password managers"
    ]
}