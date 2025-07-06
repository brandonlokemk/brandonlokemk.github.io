export type Project = {
    title: string;
    description: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    icon?: string;
    svgPath?: string;
};

const projects: Project[] = [
    {
        title: "Osteoporosis Prediction from Retinal Fundus Images Using Machine Learning",
        description: `A research project focused on detecting osteoporosis using machine learning techniques applied to retinal fundus images.
            The project explores various algorithms and models to improve detection accuracy.`,
        technologies: ["Python", "PyTorch", "OpenCV"],
        // liveUrl: "https://example.com",
        // githubUrl: "https://github.com/username/project",
        // icon: "👁️",
        svgPath: "/icons/project-icons/scan-eye.svg",
    },
    {
        title: "Telegram SG Job Bot",
        description: `A telegram bot that aims to connect job seekers with job opportunities in Singapore.
            Features multi-account management, role-based access, and a virtual currency system.
            Hosted on Google Cloud Run with MySQL database management via Google Cloud SQL.
            
            Currently serving a Telegram channel with over 14,000 members.`,
        technologies: [
            "Python",
            "Flask",
            "MySQL",
            "Google Cloud Platform",
            "Telegram API",
        ],
        liveUrl: "https://t.me/sgparttimetalent",
        githubUrl: "https://github.com/brandonlokemk/telegram-bot",
        // icon: "👁️",
        svgPath: "/icons/project-icons/telegram-svgrepo-com.svg",
    },
    {
        title: "Stock Price Prediction Using LSTM Neural Networks",
        description: `A project that implements Long Short-Term Memory (LSTM) neural networks to predict stock prices based on historical data.
            
            The model is trained to capture temporal dependencies in stock price movements.`,
        technologies: ["Python", "PyTorch", "Pandas", "Seaborn"],
        // liveUrl: "https://example.com",
        // githubUrl: "https://github.com/username/project",
        // icon: "📈",
        svgPath: "/icons/project-icons/chart-candlestick.svg",
    },

    {
        title: "Personal Website",
        description: `Portfolio website showcasing my projects, skills, and experiences.
        Built with React in TypeScript, integrated with Next.js.
        Features a responsive design, dark mode support, and smooth animations.
        Hosted on Vercel for reliable performance and stability.`,
        technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
        liveUrl: "https://brandonloke.vercel.app",
        githubUrl: "https://github.com/brandonlokemk/brandonlokemk.github.io",
        // icon: "👁️",
        svgPath: "/icons/project-icons/panels-top-left.svg",
    },
];

export default projects;
