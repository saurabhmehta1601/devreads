import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { courseFilePaths,COURSES_PATH } from '../../utils/mdxUtils'
import Link from "next/link"
import Section from "../../components/Section"
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Title from "../../components/Title"

const CustomSyntaxHighlighter = (props) => {
  return <SyntaxHighlighter {...props}  style={dark}  />
}

const components = {
  Link,
  Section,
  Title,
  SyntaxHighlighter: CustomSyntaxHighlighter
}

export default function PostPage({ source, frontMatter }) {
  return (<>
      <main>
        <MDXRemote {...source} components={components} />
      </main>
  </>)
}

export const getStaticProps = async ({ params }) => {
  const courseFilePath = path.join(COURSES_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(courseFilePath)

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = courseFilePaths 
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
