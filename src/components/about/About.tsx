import './About.css';
import GoBackTopPage from '../common/GoBackTopPage';

function About() {

  return (
    <>
    <div className='goBack'><GoBackTopPage/></div>
    <div className='about'>
        <h2>ABOUT</h2>
      <div className='content'>
        <p>はじめまして。26歳エンジニアのたつやです。</p>
        <p>大学卒業後、インフラ業界向けのシステム開発を行うSIerに入社し、
        電力業界向けのWEBシステムの開発に従事。<br/>
        開発・テストを中心に直近では要件定義・設計にも携わるようになってきました。<br/>
        クラウドやアジャイル開発に関する知識を有し、サポートなども行っています。</p>
      </div>
      <h2>PRIVATE</h2>
        <li>Drink: ビール、ハイボールが好きです</li>
        <li>Movie: 名探偵コナン、ドラゴンボール、などなど</li>
        <li>Music: perfume、ヨルシカ、BeBe lexha、Martin Garrix...</li>
      <h2>CERTIFICATE</h2>
      <li>2020年: 基本情報技術者試験</li>
      <li>2022年: 認定スクラムマスター</li>
      <li>2023年: 年応用情報技術者</li>
    </div>
    </>
  );
}

export default About;