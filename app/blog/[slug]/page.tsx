import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogPost } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { Metadata } from "next";

interface PageProps {
  params: { slug: string };
  searchParams: Record<string, string | string[] | undefined>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container py-12">
      <div className="relative mb-8 aspect-[21/9] overflow-hidden rounded-lg">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
      <div className="mb-8 flex items-center gap-4 text-muted-foreground">
        <p>Yazar: {post.author}</p>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
      </div>
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Tekstil Demo`,
    description: post.excerpt,
  };
}
