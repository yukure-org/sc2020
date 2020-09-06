import Head from 'next/head';
import axios from 'axios';

export default function Home({ results }) {
  return (
    <div>
      {results.map((data) => {
        return <h1>{data.name}</h1>;
      })}
    </div>
  );
}

export async function getStaticProps() {
  const client = axios.create({
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    },
  });
  const res = await client.get(process.env.API_URL);
  const results = res.data;

  return { props: { results } };
}
