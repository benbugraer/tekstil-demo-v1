import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  coverImage: string;
};

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    console.log("Blog directory:", BLOG_DIR);
    const files = fs.readdirSync(BLOG_DIR);
    console.log("Found files:", files);

    const posts = await Promise.all(
      files.map(async (filename) => {
        try {
          const filePath = path.join(BLOG_DIR, filename);
          console.log("Reading file:", filePath);
          const fileContent = fs.readFileSync(filePath, "utf8");
          const { data, content } = matter(fileContent);

          return {
            slug: filename.replace(".mdx", ""),
            title: data.title,
            date: data.date,
            author: data.author,
            excerpt: data.excerpt,
            content: content,
            coverImage: data.coverImage,
          };
        } catch (error) {
          console.error("Error processing file:", filename, error);
          return null;
        }
      })
    );

    const validPosts = posts.filter((post): post is BlogPost => post !== null);
    console.log("Valid posts:", validPosts.length);

    return validPosts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    console.error("Error reading blog directory:", error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title,
      date: data.date,
      author: data.author,
      excerpt: data.excerpt,
      content: content,
      coverImage: data.coverImage,
    };
  } catch {
    return null;
  }
}

export async function getSerializedMDX(content: string) {
  return serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  });
}
