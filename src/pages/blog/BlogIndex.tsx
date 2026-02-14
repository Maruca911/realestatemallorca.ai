import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import CTABanner from '../../components/CTABanner';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../../data/blogData';

export default function BlogIndex() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filtered = activeCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category === activeCategory);

  const featured = BLOG_POSTS[0];
  const rest = filtered.filter((p) => p.slug !== featured.slug || activeCategory !== 'All');

  return (
    <>
      <SEOHead
        title="Mallorca Real Estate Blog - Guides, Market Trends & Tips"
        description="Expert guides on Mallorca real estate: short-term rental tips, property market trends, buying guides, investment analysis, and lifestyle insights."
        canonical="/blog"
      />

      <section className="bg-sea-800 text-white">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <nav className="text-sea-200 text-sm mb-6">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Blog</span>
          </nav>
          <h1 className="max-w-3xl mb-4">Mallorca Real Estate Blog</h1>
          <p className="text-sea-200 text-lg max-w-2xl">
            Expert guides, market analysis, and practical advice for buying, renting,
            and investing in Mallorca property.
          </p>
        </div>
      </section>

      {activeCategory === 'All' && (
        <section className="section-padding pb-0">
          <div className="container-max">
            <Link to={`/blog/${featured.slug}`} className="group grid md:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <img src={featured.image} alt={featured.title} className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <span className="text-aqua-600 text-sm font-semibold mb-2">{featured.category}</span>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-sea-600 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-600 mb-4">{featured.excerpt}</p>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <span>{featured.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="section-padding">
        <div className="container-max">
          <div className="flex flex-wrap gap-2 mb-10">
            {['All', ...BLOG_CATEGORIES].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-sea-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-5">
                  <span className="text-aqua-600 text-xs font-semibold">{post.category}</span>
                  <h3 className="font-bold text-gray-900 mt-1 mb-2 group-hover:text-sea-600 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
