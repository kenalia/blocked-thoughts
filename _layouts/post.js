import DefaultLayout from '@layouts/default'
import Head from 'next/head'
import Link from 'next/link'

export default function PostLayout(props) {
    console.log(props);
  return (
    <DefaultLayout>
      <Head>
        <title>{props.title}</title>
      </Head>
      <article>
        <h1>{props.title}</h1>
          <h3>{props.date}</h3>
        <div dangerouslySetInnerHTML={{__html:props.content}}/>
        <div><Link href='/'><a>Home</a></Link></div>
      </article>
    </DefaultLayout>
  )
}