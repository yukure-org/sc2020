import Head from 'next/head';
import React, { Component, useState } from 'react';
import axios from 'axios';

const server = 'http://localhost:8888/';

export default function index(params) {
  const [posts, setPosts] = useState([]);
  console.log(params);
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <img className="header__logo" src="/logo.png" alt="irochimon" />
      </header>
      <main className="main">
        <div className="main__left" />
        <div className="main__center">
          <GetCard />
        </div>
        <div className="main__right">
          <OnClick />
        </div>
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
          font-family: Noto Sans JP, 'Hiragino Kaku Gothic Pro';
        }

        main {
          width: 100vw;
          flex: 1;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
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

        .logo {
          height: 1em;
        }

        .header {
          height: 60px;
          width: 100vw;
          color: #fff;
          text-align: left;
          vertical-align: middle;
          background-color: rgb(239, 239, 239);
          padding: 12px;
        }
        .header__logo {
          width: 180px;
        }

        .main__left {
          width: 375px;
          height: 100vh;
        }
        .main__center {
          width: 100%;
          height: 100vh;
          background-color: #fff;
          border-left: 2px solid #ccc;
          border-right: 2px solid #ccc;
        }
        .main__right {
          width: 375px;
          height: 100vh;
          text-align: center;
        }
        .main__postbtn {
        }
        .image__circle {
          border-radius: 200px;
        }

        .main__postbtn {
          background-image: url('/like.png');
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
  );
}

{
  /* 記事投稿処理 */
}
class OnClick extends Component {
  postBrap(event) {
    console.log('handleClick is called');
    {
      /* ここに書くaxios */
    }
    {
      /*axios.post(server, data)*/
    }
  }
  render() {
    return (
      <button className="main__postbtn" onClick={this.postBrap}>
        ここにボタン
      </button>
    );
  }
}

{
  /* 投稿された記事一覧取得 */
}
class GetCard extends Component {
  async getCard() {
    const client = axios.create({
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
          'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      },
    });

    const result = await client.get('http://api:8888');
    return result.data;
  }

  async render() {
    var data = await this.getCard();
    return (
      <div className="card">
        <div className="card__pokeinfo">
          <div className="image__circle">
            <img src="" alt="" />
          </div>
          <p />
        </div>
        <div>
          <div />
          <div>
            <p />
          </div>
        </div>
      </div>
    );
  }
}

{
  /* いいねボタン */
}
{
  /*
class Like extends Component {
  postBrap(event) {
    console.log('handleClick is called');
    axios.post(server, data)
  }
  render() {
      return (
          <button className="main__postbtn" onClick={this.postBrap}>ここにボタン</button>
      );
  }
}
*/
}
