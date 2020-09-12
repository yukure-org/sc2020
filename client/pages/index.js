import Head from 'next/head';
import React, { Component, useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom'

export default function Home({results}) {
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
        <div className="main__left"></div>
        <div className="main__center"><GetCard data={results}/></div>
        <div className="main__right"><RegModal /></div>
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
          textAlign: left;
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
        .main__center{
          width: 100%;
          height: 100vh;
          background-color: #fff;
          border-left: 2px solid #ccc;
          border-right: 2px solid #ccc;
        }
        .main__right{
          width: 375px;
          height: 100vh;
          textAlign: center;
        }
        .red {
          color: red;
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

{/* 投稿された記事一覧取得 */}
class GetCard extends Component {
  render() {
    var circle = {
      'border-radius': '200px',
      'border': '2px solid #ccc',
      'width': '90px'
    }
    var card = {
      'border': '1px solid #ccc',
      'display': 'flex', 
      'padding': '10px'
    }
    var messgae = {
      'padding': '10px 24px',
      'font-size': '',
      'position':'relative',
      'width':'100%'
    }
    var subitem = {
      'display':'flex',
      'position':'absolute',
      'bottom':'0',
      'right':'0',
      'padding':'0 10px'
    }
    const results = this.props.data;
    var list = []
    for(var i in results){
      list.push(
      <div style={card}>
        <div style={{'width':'100px','textAlign':'center','padding':'6px'}}>
          <div><img src={results[i].img_link} alt={results[i].name} style={circle} /></div>
            <p>{results[i].name}</p>
        </div>
        <div style={messgae}>
          <div>{results[i].comment}</div>
          <div style={subitem}>
            <p style={{'font-size':'0.7rem','vertical-align':'bottom'}}>{results[i].trainer_name} / {results[i].version}</p>
            <div style={{'margin-left':'10px', 'display':'grid'}}>
              <Like data={{id:results[i].id, cnt:results[i].like}}/>
            </div>
          </div>
        </div>
      </div>
      );
    }
    return (
      <div>{list}</div>
    );
  }
}

{/* いいねボタン */}
class Like extends Component {
  postBrap(event) {
    var url =  location.host
    // 操作対象のDOM
    let Like = ReactDOM.findDOMNode(this.refs.like)
    let Cnt = ReactDOM.findDOMNode(this.refs.cnt)
    const Dispcnt = Number(Cnt.innerHTML)
    const likeurl = Like.src.slice(Like.src.indexOf(url+'/'),Like.src.length+1)
    const likeurlpath = likeurl.replace(url+'/', '')
    if(likeurlpath === 'like.svg'){
      Like.src = '/onlike.svg'
      Cnt.innerHTML = Dispcnt + 1
    }else{
      Like.src = '/like.svg'
      Cnt.innerHTML = Dispcnt - 1
    }
  }
  render() {
    var nobtn = {
      'overflow':'visible',
      'width':'auto',
	    'padding':'0',
      'margin':'0',
      'background':'none',
      'border':'0',
      'font-size':'0',
      'line-height':'0',
      'overflow':'visible',
      'cursor':'pointer'
    }
    const data = this.props.data;
    return (
        <div>
          <style jsx>{`
            button:focus {
              outline: 0;
            }
          `}</style>
          <button id={data.id} style={nobtn} onClick={()=>this.postBrap()}>
            <img src="/like.svg" width="32px" ref="like"/>
          </button>
          <div style={{'textAlign':'center','font-size':'12px'}} ref="cnt">{data.cnt}</div>
        </div>
    );
  }
}

class RegModal extends Component {
  createModal (){
    const modalArea = document.getElementById('modalArea');
    const closeModal = document.getElementById('closeModal');
    const modalBg = document.getElementById('modalBg');
    const eventList = [closeModal, modalBg]
    modalArea.classList.toggle('is-show');
    for(var i in eventList){
      eventList[i].addEventListener('click', function(){
        modalArea.classList.remove('is-show');
      })
    }
  }
  render(){
    return(
      <div>
        <style jsx>{`
          .modalArea {
            visibility: hidden; /* displayではなくvisibility */
            opacity : 0;
            position: fixed;
            z-index: 10; /* サイトによってここの数値は調整 */
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: .4s;
          }
          
          .modalBg {
            width: 100%;
            height: 100%;
            background-color: rgba(30,30,30,0.9);
          }
          
          .modalWrapper {
            position: absolute;
            top: 50%;
            left: 50%;
            transform:translate(-50%,-50%);
            width: 70%;
            max-width: 500px;
            padding: 10px 30px;
            background-color: #fff;
          }
          
          .closeModal {
            position: absolute;
            top: 0.5rem;
            right: 1rem;
            cursor: pointer;
          }
          
          .is-show { /* モーダル表示用クラス */
            visibility: visible;
            opacity : 1;
          }
        `}</style>
        <button id="openModal" onClick={()=>this.createModal()}>モーダル表示</button>
        <section id="modalArea" className="modalArea">
          <div id="modalBg" className="modalBg"></div>
          <div className="modalWrapper">
            <div className="modalContents">
              <h1>持っているイロチポケモンを自慢する</h1>
              <p></p>
              <button >投稿する</button>
            </div>
            <div id="closeModal" className="closeModal">
              ×
            </div>
          </div>
        </section>
    </div>
    );
  }
}

export async function getStaticProps() {
  const client = axios.create({
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    },
  });
  const result = await client.get('http://api:8888');
  const results = result.data;
  console.log(results);
  return { props: { results } };
}

export async function postStaticProps(request) {
  const client = axios.create({
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    },
  });
  const req = {}
  const result = await client.post('http://api:8888',req);
  const results = result.data;
  console.log(results);
  return { props: { results } };
}

