export default function handler(req, res) {
    const authors = [
      { id: 'y7w3w242', name: 'John Doe' },
      { id: 'n7232g2', name: 'Marry Deo' },
      { id: 'z9x8c7v6', name: 'Alice Johnson' }
    ];
  
    const categories = [
      { id: 'r4wd2u8', name: 'Science' },
      { id: 'ewd32s3', name: 'Technology' },
      { id: 'q1w2e3r4', name: 'Quantum Computing' }
    ];
  
    const articleTypes = [
      { id: '1', name: 'Text' },
      { id: '2', name: 'Video' }
    ];
  
    const tags = [
      'Science', 'Technology', 'Quantum'
    ];
  
    const articles = [
      {
        title: "GitHub Copilot - About, Features and Use Cases",
        subtitle: "An in-depth look at GitHub Copilot's capabilities and applications.",
        hero: "https://images.ctfassets.net/8aevphvgewt8/5IdZ8KizWhMOGixAmVSw0g/c9851dbb13c9d267c91365b168e35912/1200x630-GitHub-OG-image.jpg",
        articleId: "a2b448sq",
        categoryId: "r4wd2u8",
        authorId: "y7w3w242",
        articleType: "1",
        tags: ["Science", "Technology"]
      },
      {
        title: "Has Codeium Cracked the Code for AI Assistants?",
        subtitle: "Exploring the advancements in AI-powered coding assistants.",
        hero: "https://www.bigdatawire.com/wp-content/uploads/2024/05/AI-copilot_shutterstock_AI-generated.jpg",
        articleId: "b2n2ss92",
        categoryId: "ewd32s3",
        authorId: "n7232g2",
        articleType: "1",
        tags: ["Science", "Technology"]
      },
      {
        title: "The Future of Quantum Computing",
        subtitle: "How quantum computing is shaping the future of technology.",
        hero: "https://informationage-production.s3.amazonaws.com/uploads/2024/09/GettyImages-2156615862.jpg",
        articleId: "c3q4t5u6",
        categoryId: "q1w2e3r4",
        authorId: "z9x8c7v6",
        articleType: "1",
        tags: ["Science", "Technology", "Quantum"]
      }
    ];
  
    res.status(200).json({
      status: 1,
      message: "success",
      data: {
        page: 1,
        categoryId: null,
        tag: "technology",
        authorName: "Anonymous",
        articles,
        authors,
        categories,
        articleTypes,
        tags
      }
    });
  }
  