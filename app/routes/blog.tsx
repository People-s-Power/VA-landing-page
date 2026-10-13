import type { Route } from "./+types/blog";
import { Link } from "react-router";
import PageLayout from "~/components/PageLayout";
import { sortedPosts } from "~/lib/blog";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blog | HireExpertHub" },
    {
      name: "description",
      content:
        "Practical guidance on delegating, hiring, and working with full-time virtual assistants — written for US small businesses.",
    },
  ];
}

export default function BlogIndex() {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">
            Resources
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-5">
            The HireExpertHub Blog
          </h1>
          <p className="text-gray-600 text-lg">
            Straight answers about what it costs to hire help, which model fits
            your workload, and how to delegate without losing control of the
            work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sortedPosts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:shadow-md"
            >
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-3">
                {post.dateDisplay} · {post.readTime}
              </p>
              <h2 className="text-xl font-bold text-gray-800 mb-3 leading-snug">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <Link
                to={`/blog/${post.slug}`}
                className="mt-auto inline-flex items-center gap-1 font-semibold text-sm text-primary hover:gap-2 transition-all"
              >
                Read article
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
