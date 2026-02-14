import { useParams, Link, Navigate } from 'react-router-dom';
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import CTABanner from '../../components/CTABanner';
import MatchingForm from '../../components/MatchingForm';
import { getBlogPost, BLOG_POSTS } from '../../data/blogData';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPost(slug || '');

  if (!post) return <Navigate to="/blog" replace />;

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: post.image,
    author: { '@type': 'Organization', name: 'Real Estate Mallorca' },
    publisher: { '@type': 'Organization', name: 'Real Estate Mallorca' },
  };

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${slug}`}
        schema={articleSchema}
      />

      <section className="bg-sea-800 text-white">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <nav className="text-sea-200 text-sm mb-6">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{post.category}</span>
          </nav>
          <span className="text-aqua-400 text-sm font-semibold">{post.category}</span>
          <h1 className="max-w-3xl mt-2 mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sea-200 text-sm">
            <span>{post.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-10">
            <article className="lg:col-span-2">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-80 object-cover rounded-xl mb-8"
              />

              <div className="prose prose-gray max-w-none">
                {post.content.map((paragraph, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed mb-5">{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 p-6 bg-sea-50 rounded-xl border border-sea-100">
                <h3 className="font-bold text-sea-800 mb-2">Looking for Property in Mallorca?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Whether you need a short-term rental, a villa to buy, or an investment
                  property, our free matching service delivers 3 curated options in 24 hours.
                </p>
                <Link to="/signup" className="btn-primary text-sm">
                  Get Matched Free <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="mt-8">
                <Link to="/blog" className="text-sea-600 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  <ArrowLeft className="w-4 h-4" /> Back to Blog
                </Link>
              </div>
            </article>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-900 mb-1">Free Property Matching</h3>
                  <p className="text-gray-500 text-sm mb-4">Get 3 options in 24h</p>
                  <MatchingForm sourcePage={`/blog/${slug}`} compact />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((rp) => (
                      <Link key={rp.slug} to={`/blog/${rp.slug}`} className="group flex gap-3">
                        <img src={rp.image} alt={rp.title} className="w-20 h-16 rounded-lg object-cover flex-shrink-0" loading="lazy" />
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-sea-600 transition-colors leading-snug">
                            {rp.title}
                          </h4>
                          <span className="text-xs text-gray-400">{rp.readTime}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
