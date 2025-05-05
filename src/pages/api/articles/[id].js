export default function handler(req, res) {
  const { id } = req.query;

  const articles = [
    {
      articleId: "a2b448sq",
      articleType: "1",
      published: "2024-12-24 13:45",
      author: {
        authorId: "c3js6384",
        authorImage: "https://randomuser.me/api/portraits/men/33.jpg",
        authorName: "John Doe"
      },
      category: {
        categoryId: "a9d7hds2",
        categoryName: "Technology"
      },
      tags: ["technology", "Gen AI", "Copilot"],
      title: "GitHub Copilot - About, Features and Use Cases",
      subtitle: "quantifying GitHub Copilot’s impact on developer productivity and happiness",
      hero: "https://images.ctfassets.net/8aevphvgewt8/5IdZ8KizWhMOGixAmVSw0g/c9851dbb13c9d267c91365b168e35912/1200x630-GitHub-OG-image.jpg",
      description: `<p>Have you ever wondered how coding could become even more efficient? With GitHub Copilot, you can utilise the power of AI to generate code suggestions according to your specific context</p>
        <h2 id='1'>Features of GitHub Copilot</h2>
        <ul>
          <li>GitHub Copilot uses an AI model trained on a large corpus of code from publicly available sources, including code on GitHub itself. This allows it to understand and generate programming patterns, functions, and entire classes.</li>
          <li>It assists in writing new code and contributing to existing code. The tool can suggest complete methods, boilerplate code, tests, and even complex algorithms.</li>
        </ul>`
    },
    {
      articleId: "b2n2ss92",
      articleType: "1",
      title: "Has Codeium Cracked the Code for AI Assistants?",
      subtitle: "Exploring the advancements in AI-powered coding assistants.",
      hero: "https://www.bigdatawire.com/wp-content/uploads/2024/05/AI-copilot_shutterstock_AI-generated.jpg",
      description: "<p>Codeium is revolutionizing code generation by leveraging AI...</p>",
      published: "2024-11-10 10:00",
      author: {
        authorId: "n7232g2",
        authorImage: "https://randomuser.me/api/portraits/women/34.jpg",
        authorName: "Marry Doe"
      },
      category: {
        categoryId: "ewd32s3",
        categoryName: "AI Tools"
      },
      tags: ["technology", "AI"]
    },
    {
      articleId: "c3q4t5u6",
      articleType: "1",
      title: "The Future of Quantum Computing",
      subtitle: "How quantum breakthroughs could redefine technology.",
      hero: "https://informationage-production.s3.amazonaws.com/uploads/2024/09/GettyImages-2156615862.jpg",
      description: "<p>Quantum computing promises to solve problems beyond the reach of classical machines, potentially transforming industries like cryptography, medicine, and logistics...</p>",
      published: "2024-11-12 09:30",
      author: {
        authorId: "z9x8c7v6",
        authorImage: "https://randomuser.me/api/portraits/men/45.jpg",
        authorName: "Alice Johnson"
      },
      category: {
        categoryId: "q1w2e3r4",
        categoryName: "Quantum Computing"
      },
      tags: ["quantum", "future", "technology"]
    }
  ];

  const article = articles.find(a => a.articleId === id);

  if (article) {
    res.status(200).json({
      status: 1,
      message: "success",
      data: article
    });
  } else {
    res.status(404).json({
      status: 0,
      message: "Article not found",
      data: null
    });
  }
}
