import './About.css';
import GoBackTopPage from '../common/GoBackTopPage';

function About() {

  return (
    <>
    <div className='about'>
        <h2>ABOUT</h2>
      <div className='content'>
        <p>はじめまして。26歳エンジニアのたつやです。</p>
        <p>大学卒業後、インフラ業界向けのシステム開発を行うSIerに入社し<br/>
        電力業界向けのWEBシステムの開発に従事。<br/>
        開発・テストを中心に直近では要件定義・設計にも携わるようになってきました。<br/>
        クラウドやアジャイル開発に関する知識を有し、サポートなども行っています。</p>
      </div>
      <h2>PRIVATE</h2>
        <li>お酒： ビール、ハイボールが好きです。</li>
        <li>アニメ： 名探偵コナン、ドラゴンボール、etc...</li>
        <li>ライブ: perfume、Martin Garrix、Afrojack</li>
    </div>
    <GoBackTopPage/>
    </>
  );
}

export default About;