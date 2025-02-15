import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const News = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Tips for Successful Event Planning",
      excerpt: "Discover the essential tips to make your event a success.",
      date: "2023-10-01",
      link: "/blog/top-10-tips-for-successful-event-planning"
    },
    {
      id: 2,
      title: "How to Choose the Perfect Venue for Your Event",
      excerpt: "Learn how to select the best venue that fits your event needs.",
      date: "2023-09-25",
      link: "/blog/how-to-choose-the-perfect-venue"
    },
    {
      id: 3,
      title: "The Latest Trends in Corporate Event Management",
      excerpt: "Stay updated with the latest trends in corporate events.",
      date: "2023-09-18",
      link: "/blog/latest-trends-in-corporate-event-management"
    }
  ];

  return (
    <section className="w-[98%] mx-auto py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Blog & News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <article 
            key={post.id} 
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6">
            <h3 className="text-2xl font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300 mb-3">
              <a href={post.link}>{post.title}</a>
            </h3>
            <p className="text-sm text-gray-500 mb-2">{new Date(post.date).toLocaleDateString()}</p>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <a href={post.link} className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300">Read More</a>
          </article>
        ))}
      </div>
      <div className="text-center mt-12 bg-white p-6 rounded-2xl shadow-lg">
        <p className="text-lg text-gray-700 mb-4">Enjoyed our articles? <a href="/subscribe" className="text-blue-600 font-semibold hover:text-blue-800">Subscribe</a> to our blog for more updates!</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://facebook.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-300"><Facebook size={24} /></a>
          <a href="https://twitter.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-300"><Twitter size={24} /></a>
          <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-300"><Linkedin size={24} /></a>
        </div>
      </div>
    </section>
  );
};

export default News;
