import { getBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import Section from "@/components/sections/Section";

export const metadata = {
  title: "Blog | Tekstil Demo",
  description: "Tekstil sektöründen en güncel haberler ve makaleler",
};

export default async function BlogPage() {
  try {
    console.log("Fetching blog posts...");
    const posts = await getBlogPosts();
    console.log("Found posts:", posts.length);

    return (
      <Section>
        <div className="container py-12">
          <h1 className="mb-8 text-4xl font-bold">Blog</h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </Section>
    );
  } catch (error) {
    console.error("Error in BlogPage:", error);
    return (
      <Section>
        <div className="container py-12">
          <h1 className="mb-8 text-4xl font-bold">Blog</h1>
          <p>Blog yazıları yüklenirken bir hata oluştu.</p>
        </div>
      </Section>
    );
  }
}
