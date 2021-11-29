import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { courseFilePaths,COURSES_PATH } from '../../utils/mdxUtils'
import Link from "next/link"
import Section from "../../components/Section"
import { Typography } from 'antd'
import  Head from  "next/head"

const Title = ({children}) => {
  return <Typography.Title  style={{textAlign:'center',textDecoration:'underline'}} level={1}>{children}</Typography.Title>

}
const components = {
  Link,
  Section,
  Title
}

export default function PostPage({ source, frontMatter }) {
  return (<>
    <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css"></link>
    </Head>
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
