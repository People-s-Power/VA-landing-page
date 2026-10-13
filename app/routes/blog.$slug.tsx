import type { Route } from "./+types/blog.$slug";
import { Link, useParams } from "react-router";
import PageLayout from "~/components/PageLayout";
import { CALENDLY_STRATEGY_SESSION } from "~/lib/links";
import { getPost, sortedPosts, type ContentBlock } from "~/lib/blog";

export function meta({ params }: Route.MetaArgs) {
  const post = params.slug ? getPost(params.slug) : undefined;
  if (!post) return [{ title: "Article Not Found | HireExpertHub" }];
  return [
    { title: `${post.title} | HireExpertHub` },
    { name: "description", content: post.excerpt },
  ];
}

const Block: React.FC<{ block: ContentBlock }> = ({ block }) => {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
          {block.text}
        </h2>
      );

    case "p":
      return <p className="text-gray-600 leading-relaxed mb-5">{block.text}</p>;

    case "ul":
      return (
        <ul className="mb-6 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-gray-600">
              <span className="text-primary shrink-0 mt-1" aria-hidden="true">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7.629 15.314a1 1 0 0 1-1.414 0l-4.243-4.243a1 1 0 1 1 1.414-1.414l3.536 3.536 7.778-7.778a1 1 0 0 1 1.414 1.414l-8.485 8.485z" />
                </svg>
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol className="mb-6 space-y-3 list-decimal pl-6 text-gray-600">
          {block.items.map((item) => (
            <li key={item} className="leading-relaxed pl-1">
              {item}
            </li>
          ))}
        </ol>
      );

    case "callout":
      return (
        <div className="my-8 rounded-xl border-l-4 border-primary bg-primary/10 p-5">
          <p className="text-gray-700 leading-relaxed">{block.text}</p>
        </div>
      );

    case "table":
      return (
        <div className="my-8 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-gray-300">
                {block.headers.map((header) => (
                  <th
                    key={header}
                    scope="col"
                    className="text-left font-bold text-gray-800 py-3 pr-4"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row[0]} className="border-b border-gray-200">
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className={`py-3 pr-4 align-top leading-relaxed ${
                        cellIndex === 0
                          ? "font-semibold text-gray-800"
                          : "text-gray-600"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "cta": {
      const className =
        "inline-block rounded-full bg-primary px-8 py-3 font-semibold text-white transition hover:brightness-90";
      return (
        <div className="my-10 text-center">
          {block.external ? (
            <a
              href={block.href}
              target="_blank"
              rel="noopener noreferrer"
              className={className}
            >
              {block.text}
            </a>
          ) : (
            <Link to={block.href} className={className}>
              {block.text}
            </Link>
          )}
        </div>
      );
    }
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getPost(slug) : undefined;

  if (!post) {
    return (
      <PageLayout>
        <div className="max-w-2xl mx-auto px-4 pb-16 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            We couldn&apos;t find that article
          </h1>
          <p className="text-gray-600 mb-8">
            It may have been moved or renamed. Browse everything we&apos;ve
            published instead.
          </p>
          <Link
            to="/blog"
            className="inline-block rounded-full bg-primary px-8 py-3 font-semibold text-white transition hover:brightness-90"
          >
            Back to the blog
          </Link>
        </div>
      </PageLayout>
    );
  }

  const related = sortedPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <PageLayout>
      <article className="max-w-3xl mx-auto px-4 pb-16">
        <p className="text-sm text-gray-500 mb-4">
          {post.dateDisplay} · {post.readTime}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
          {post.title}
        </h1>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="border-t border-gray-200 pt-8">
          {post.body.map((block, index) => (
            <Block key={index} block={block} />
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-primary/10 p-8 text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-3">
            Want to talk it through?
          </h2>
          <p className="text-gray-600 mb-6 text-sm">
            Book a free strategy session and we&apos;ll scope the right Trained
            Professional for your business.
          </p>
          <a
            href={CALENDLY_STRATEGY_SESSION}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-primary px-8 py-3 font-semibold text-white transition hover:brightness-90"
          >
            Book Strategy Session
          </a>
        </div>

        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Keep reading
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to={`/blog/${item.slug}`}
                  className="rounded-xl border border-gray-200 bg-white p-5 transition hover:shadow-md"
                >
                  <h3 className="font-bold text-gray-800 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {item.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </PageLayout>
  );
}
