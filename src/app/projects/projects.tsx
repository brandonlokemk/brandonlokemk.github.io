export type Project = {
    title: string;
    description: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    icon?: string;
    svgPath?: string
};

const projects: Project[] = [
    {
        title: "Osteoporosis Prediction from Retinal Fundus Images Using Machine Learning",
        description:
            `A research project focused on detecting osteoporosis using machine learning techniques applied to retinal fundus images.
            The project explores various algorithms and models to improve detection accuracy.`,
        technologies: ["Python", "PyTorch", "OpenCV"],
        // liveUrl: "https://example.com",
        // githubUrl: "https://github.com/username/project",
        // icon: "👁️",
        svgPath: "/icons/project-icons/scan-eye.svg"
    },
    {
        title: "Stock Price Prediction Using LSTM Neural Networks",
        description:
            `A project that implements Long Short-Term Memory (LSTM) neural networks to predict stock prices based on historical data.
            The model is trained to capture temporal dependencies in stock price movements.`,
        technologies: ["Python", "PyTorch", "Pandas", "Seaborn"],
        // liveUrl: "https://example.com",
        // githubUrl: "https://github.com/username/project",
        // icon: "📈",
        svgPath: "/icons/project-icons/chart-candlestick.svg"
    },
    {
        title: "Telegram SG Job Bot",
        description: `A telegram bot that aims to connect job seekers with job opportunities in Singapore.
            Acts as a platform for users to post and find job listings, enhancing the job search experience.
            Leverages Google Cloud Run for deployment and AWS S3 for storage.
            Currently serving as the main bot in a Telegram Channel with over 14,000 members.`,
        technologies: ["Python", "Flask", "Telegram API", "Google Cloud"],
        liveUrl: "https://t.me/sgparttimetalent",
        githubUrl: "https://github.com/brandonlokemk/telegram-bot",
        // icon: "👁️",
        svgPath: "/icons/project-icons/telegram-svgrepo-com.svg"
    },
    {
        title: "Personal Website",
        description: `Personal portfolio website showcasing my projects, skills, and experiences.
        Built with React and TypeScript, integrated with Next.js for server-side rendering and static site generation.
        Features a responsive design, dark mode support, and smooth animations.
        Hosted on Vercel for reliable performance and stability.`,
        technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
        liveUrl: "https://brandonloke.vercel.app",
        githubUrl: "https://github.com/brandonlokemk/brandonlokemk.github.io",
        // icon: "👁️",
        svgPath: "/icons/project-icons/panels-top-left.svg"
    },
];

export default projects;
