import ArticleSingle from "./ArticleSingle";

type ArticleProps = {
  title: string;
  link: string;
  source: string;
  tags: string[];
  completed: boolean;
};

function ArticleList() {
  const articles = [
    {
      title: "Introduction to JavaScript",
      link: "https://example.com/intro-to-js",
      source: "Coding Magazine",
      tags: ["JavaScript", "Programming", "Beginner"],
      completed: false,
    },
    {
      title: "React.js Fundamentals",
      link: "https://example.com/react-fundamentals",
      source: "TechBlog",
      tags: ["React.js", "Frontend", "Web Development"],
      completed: true,
    },
    {
      title: "Design Patterns in Software Engineering",
      link: "https://example.com/design-patterns",
      source: "Software Engineering Journal",
      tags: ["Software Engineering", "Design Patterns"],
      completed: false,
    },
    {
      title: "Node.js Backend Development",
      link: "https://example.com/nodejs-backend",
      source: "DevOps Today",
      tags: ["Node.js", "Backend", "DevOps"],
      completed: true,
    },
  ];

  return (
    <>
      {articles.map((article: ArticleProps) => {
        return <ArticleSingle {...article} key={Math.random()} />;
      })}
    </>
  );
}

export default ArticleList;
