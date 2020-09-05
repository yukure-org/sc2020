import Head from 'next/head'
import React, {Component} from 'react';
{/*import axios from 'axios';*/}

const server = '';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <h1>タイトル</h1>
      </header>
      <main className="main">
        <div className="main__left"></div>
        <div className="main__center">{/*<GetCard/>*/}</div>
        <div className="main__right"><OnClick/></div>
      </main>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .logo {
          height: 1em;
        }

        .header {
          height: 60px;
          width: 1500px;
          color: #fff;
          text-align: center;
          background-color: green;
        }

        .main__left {
          background-color: pink;
        }
        .main__center{
          width: 750px;
          background-color: #fff;
        }
        .main__right{
          width: 100%;
          background-color: orange;
        }

        @media (max-width: 767px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

{/* 記事投稿処理 */}
class OnClick extends Component {
  postBrap(event) {
    console.log('handleClick is called');
    {/* ここに書くaxios */}

  }
  render() {
      return (
          <button onClick={this.postBrap}>ここにボタン</button>
      );
  }
}

{/* 投稿された記事一覧取得 */}
{/* 
class GetCard extends Component {
　getCard(event) {
    console.log("処理開始")
    axios.get(server)
      .then((res)=> {
        console.log(res);

      })
      .catch(console.error);
  }
  render() {
      this.getCard()
      return (
        <div>
        </div>
      );
  }
}
*/}

