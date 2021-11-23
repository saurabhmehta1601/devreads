import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { courseFilePaths,COURSES_PATH } from '../../utils/mdxUtils'
import Link from "next/link"
import Section from "../../components/Section"
import { Typography } from 'antd'

const components = {
  Link,
}

export default function PostPage({ source, frontMatter }) {
  return (
    <Section>
        <Typography.Title  style={{textAlign:'center',textDecoration:'underline'}} level={1}>{frontMatter.title}</Typography.Title>
      <main>
        <MDXRemote {...source} components={components} />
      </main>
      <Typography.Paragraph code={true}>this is a paragraph</Typography.Paragraph >
    </Section>
  )
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