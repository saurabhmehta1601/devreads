import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { courseFilePaths, COURSES_PATH } from "../../utils/mdxUtils";
import Link from "next/link";
import {Section,Title,Heading,Sidebar,SidebarTriggerButton} from "../../components/exports"
import { GiHamburgerMenu } from "react-icons/gi";

const components = {
  Link,
  Section,
  h2: Heading,
};

export default function PostPage({ source, frontMatter }) {
  return (
    <>
      <Sidebar data={frontMatter.breakpoints} />
      <main>
        <Title> {frontMatter.title} </Title>
        <MDXRemote {...source} components={components} />
      </main>
      <SidebarTriggerButton icon={<GiHamburgerMenu />} />
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const courseFilePath = path.join(COURSES_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(courseFilePath);

  const { content, data } = matter(source);
  const mdxSource = await serialize(content, {
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = courseFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
