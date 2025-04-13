import { a } from "framer-motion/client";
import React, { useState, useEffect } from "react";

const Blog = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [animatedIndex, setAnimatedIndex] = useState(0);

  useEffect(() => {
    setIsLoaded(true);

    // Progressive animation for featured cards
    const interval = setInterval(() => {
      setAnimatedIndex((prev) => {
        if (prev < 10) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  // Blog post data with actual tech images
  const featuredPosts = [
    {
      title: "The Future of Technology",
      category: "Cloud Computing",
      description:
        "Explore the latest trends in technology and their impact on our daily lives.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      author: "Alex Johnson",
      date: "Mar 15, 2025",
      readTime: "5 min read",
      to: "/blog/blog-post-1",
    },
    {
      title: "Web Development Best Practices",
      category: "Cloud Computing",
      description:
        "Learn about modern web development techniques and tools.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      author: "Alex Johnson",
      date: "Mar 15, 2025",
      readTime: "5 min read",
      to: "/blog/blog-post-2",
    },
    {
      title: "Digital Transformation",
      category: "Cloud Computing",
      description:
        "Discover how businesses are adapting to the digital age.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
      author: "Alex Johnson",
      date: "Mar 15, 2025",
      readTime: "5 min read",
      to: "/blog/blog-post-3",
    },
    {
      title: "The Future of Cloud Architecture in 2025",
      category: "Cloud Computing",
      description:
        "Explore how distributed systems are evolving with multi-cloud environments.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      author: "Alex Johnson",
      date: "Mar 15, 2025",
      readTime: "5 min read",
      to: "/blog/blog-post-4",
    },
    {
      title: "AI-Driven Development Practices",
      category: "Artificial Intelligence",
      description:
        "How machine learning is transforming the software development lifecycle.",
      image:
        "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      author: "Sarah Chen",
      date: "Mar 12, 2025",
      readTime: "7 min read",
    },
    {
      title: "Quantum Computing: Breaking Barriers",
      category: "Emerging Tech",
      description:
        "The latest breakthroughs in quantum computing and what they mean for IT.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      author: "James Wilson",
      date: "Mar 10, 2025",
      readTime: "6 min read",
    },
  ];

  const latestArticles = [
    {
      title: "CI/CD Pipeline Optimization Strategies",
      category: "DevOps",
      description:
        "Streamline your development workflow with these proven pipeline techniques.",
      image:
        "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      date: "Mar 10, 2025",
    },
    {
      title: "5G and Edge Computing Integration",
      category: "Networking",
      description:
        "Leveraging 5G networks with edge computing for minimal latency applications.",
      image:
        "https://images.unsplash.com/photo-1520869562399-e772f042f422?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      date: "Mar 9, 2025",
    },
    {
      title: "Containerization Best Practices",
      category: "Infrastructure",
      description:
        "Modern approaches to container orchestration and management.",
      image:
        "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      date: "Mar 8, 2025",
    },
    {
      title: "Sustainable IT Infrastructure",
      category: "Green Tech",
      description:
        "Reducing the carbon footprint of your data centers and operations.",
      image:
        "https://images.unsplash.com/photo-1473308822086-710304d7d30c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      date: "Mar 7, 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className={`relative py-24 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"
          }`}
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1500&auto=format&fit=crop&q=80&ixlib=rb-4.0.3)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-indigo-900 opacity-80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1
                className={`text-4xl font-bold mb-4 transition-all duration-1000 transform ${isLoaded ? "translate-x-0" : "-translate-x-20"
                  }`}
              >
                Latest Insights in Technology
              </h1>
              <p
                className={`text-lg mb-6 transition-all duration-1000 delay-100 transform ${isLoaded
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-20 opacity-0"
                  }`}
              >
                Stay updated with cutting-edge tech trends, tutorials, and
                industry news.
              </p>
              <button
                className={`bg-white text-[#2D7EB5] px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105 duration-300 ${isLoaded ? "opacity-100" : "opacity-0"
                  }`}
              >
                Subscribe Now
              </button>
            </div>
            <div className="md:w-1/2 flex justify-end">
              <div
                className={`relative w-full max-w-md transition-all duration-1000 delay-300 transform ${isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                  }`}
              >
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
                  alt="Tech illustration"
                  className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500 hover:shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2
          className={`text-3xl font-bold text-gray-900 mb-8 transition-all duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
            }`}
        >
          Featured Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <a href={post.to}>
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-700 hover:shadow-xl ${animatedIndex > index
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="bg-blue-100 text-[#2D7EB5] text-xs px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm ml-2">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <div className="flex items-center">
                    <img
                      src={`https://i.pravatar.cc/150?img=${index + 10}`}
                      alt={post.author}
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-medium">{post.author}</p>
                      <p className="text-gray-500 text-sm">{post.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Latest Articles */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Latest Articles
            </h2>
            <a
              href="#"
              className="text-[#2D7EB5] hover:text-indigo-800 font-medium group flex items-center"
            >
              View All
              <svg
                className="h-4 w-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestArticles.map((article, index) => (
              <div
                key={index}
                className={`flex bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-700 hover:shadow-xl ${animatedIndex > index + 3
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                  }`}
                style={{ transitionDelay: `${(index + 3) * 150}ms` }}
              >
                <div className="w-1/3 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 w-2/3">
                  <div className="flex items-center mb-2">
                    <span className="bg-blue-100 text-[#2D7EB5] text-xs px-2 py-1 rounded">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {article.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">
                      {article.date}
                    </span>
                    <button className="text-[#2D7EB5]  font-medium text-sm group flex items-center">
                      Read More
                      <svg
                        className="h-4 w-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter with animated background */}
      <div className="relative py-16 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1500&auto=format&fit=crop&q=80&ixlib=rb-4.0.3)",
            backgroundSize: "cover",
            filter: "blur(8px)",
          }}
        ></div>
        <div className="absolute inset-0 bg-[#2D7EB5] opacity-90 z-0"></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Stay Updated with Tech Trends
          </h2>
          <p className="text-lg mb-8 text-indigo-100">
            Join 20,000+ IT professionals and receive our weekly newsletter with
            exclusive insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-lg text-gray-900 w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            />
            <button className="bg-white hover:bg-gray-300 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>

        {/* Animated particles */}
        {isLoaded &&
          Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white opacity-20 z-10"
              style={{
                width: Math.random() * 10 + 5 + "px",
                height: Math.random() * 10 + 5 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                animation: `float ${Math.random() * 20 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          ))}
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Explore Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            {
              name: "Cloud Computing",
              icon: "☁️",
              color: "bg-blue-100 text-blue-800",
              image:
                "https://images.unsplash.com/photo-1603695901454-090281ad0be1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            },
            {
              name: "Cybersecurity",
              icon: "🔒",
              color: "bg-red-100 text-red-800",
              image:
                "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            },
            {
              name: "AI & Machine Learning",
              icon: "🤖",
              color: "bg-purple-100 text-purple-800",
              image:
                "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            },
            {
              name: "DevOps",
              icon: "⚙️",
              color: "bg-green-100 text-green-800",
              image:
                "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            },
            {
              name: "Web Development",
              icon: "🌐",
              color: "bg-yellow-100 text-yellow-800",
              image:
                "https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            },
            {
              name: "Data Science",
              icon: "📊",
              color: "bg-pink-100 text-pink-800",
              image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            },
            {
              name: "Mobile Development",
              icon: "📱",
              color: "bg-indigo-100 text-indigo-800",
              image:
                "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            },
            {
              name: "Blockchain",
              icon: "🔗",
              color: "bg-teal-100 text-teal-800",
              image:
                "https://images.unsplash.com/photo-1642059883644-9d922598ec18?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            },
          ].map((category, index) => (
            <div
              key={index}
              className={`${category.color
                } rounded-lg shadow-sm hover:shadow-md transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden relative group ${animatedIndex > index + 7 ? "opacity-100" : "opacity-0"
                }`}
              style={{ transitionDelay: `${(index + 7) * 100}ms` }}
            >
              <div
                className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                style={{
                  backgroundImage: `url(${category.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="p-6 relative z-10">
                <div className="text-2xl mb-2">{category.icon}</div>
                <h3 className="font-bold">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>


      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-15px) translateX(15px);
          }
          50% {
            transform: translateY(0px) translateX(30px);
          }
          75% {
            transform: translateY(15px) translateX(15px);
          }
          100% {
            transform: translateY(0px) translateX(0px);
          }
        }
      `}</style>
    </div>
  );
};

export default Blog;
