import Head from 'next/head';
import clientPromise from '../lib/mongodb';
import { InferGetServerSidePropsType } from 'next';
import dynamic from "next/dynamic"

/* Components */
import { Providers } from '@/lib/providers'
import { CircularProgress } from '@mui/material';

export async function getServerSideProps(context: any) {
  try {
    await clientPromise
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}

const MapsContainer = dynamic(
    () => import('@/views/MapsContainer'),
    {
        loading: () => <CircularProgress style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, margin: 'auto', height: "100px", width: "100px" }}/>,
        ssr:false
    }
)

export default function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Providers>
      {/* <Banner /> */}
      <MapsContainer />
    </Providers>
  )
}
