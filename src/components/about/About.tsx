import './About.css';
import GoBackTopPage from '../common/GoBackTopPage';

function About() {

  return (
    <>
    <div className='goBack'><GoBackTopPage/></div>
    <div className='about'>
        <h2>ABOUT</h2>
      <div className='content'>
        プロフィールをご覧いただきありがとうございます。<br/>
        WEB系のシステム開発を行っているＴです。<br/><br/>

        都内の大学を卒業後、株式会社オージス総研に入社後し、
        電力業界向けのWEBシステムの開発に従事してきました。
        <br/><br/>
        得意領域はバックエンドの開発とAzureの技術選定および運用です。
        参画したプロジェクトでは、要件定義から設計・実装・テストまで一貫して開発業務に携わってきました。
        またAzureの新たなサービス導入やアーキテクチャ改善を行いプロダクト品質改善に努めました。<br/>

      </div>
      <h2>PRIVATE</h2>
        <li>お酒が好きです。</li>
        <li>休日はYotube見たりしてるかお出かけしてます。</li>
        <li>音楽を聴くのが好きです。</li>
      <h2>CERTIFICATE</h2>
        <li>2020年: 基本情報技術者試験</li>
        <li>2022年: 認定スクラムマスター</li>
        <li>2023年: 年応用情報技術者</li>
        <li>2024年: DBスペシャリスト取得予定</li>
    </div>
    </>
  );
}

export default About;