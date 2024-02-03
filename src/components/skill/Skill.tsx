import './Skill.css';
import { FaHtml5 } from "react-icons/fa";


function Skill() {
  return (
    <div>
      
      <div className='header'>
      </div >
      <div className='skills'>
      <h1>SKILL</h1>

        <div className='row'>
          <div className='design'>
            <div className='header'>
            </div>
            <b>言語</b><br/>

            <FaHtml5 size={100}/>
            HTML ★★★★☆<br/>
            CSS　★★★★☆<br/>
            React　★★★★☆<br/><br/>
            <b>フレームワーク</b><br/>
            Redux　★★★★☆<br/>
            Angular　★★★★☆<br/>
            <br/>
            HTML・CSSの基本的な扱い方、レイアウト調整が可能です。
          </div><br/>
          <div className='design'>
            <div className='header'>
                サーバー<br/>
              </div>
              Node.js ★★★★☆<br/>
              TypeScript　★★★★☆<br/>
              <br/>
              HTML・CSSの基本的な扱い方、レイアウト調整が可能です。
          </div><br/>
        </div>
        <div className='row'>
          <div className='design'>
            <div className='header'>
                DB<br/>
              </div>
                SQL Server ★★★★☆<br/>
                <br/>
                HTML・CSSの基本的な扱い方、レイアウト調整が可能です。<br/>
          </div>
          <div className='design'>
          <div className='header'>
            クラウド<br/>
          </div>
            Azure ★★★★☆<br/>
            firebase<br/>
            <br/>
            HTML・CSSの基本的な扱い方、レイアウト調整が可能です。
          </div><br/>
        </div>
        <div className='row'>
          <div className='design'>
          <div className='header'>
              保有資格<br/>
            </div>
            基本情報技術者試験<br/>
            応用情報技術者試験<br/>
            認定スクラムマスター<br/>
            <br/>
            今後、
          </div>
          <div className='design'>
            <div className='header'>
                プログラミング<br/>
              </div>
              JavaScript ★★★★☆<br/>
              TypeScript　★★★★☆<br/>
              <br/>
              ３年ほど経験してきました。
            </div><br/>
          </div>
      </div>
    </div>
  );
}

export default Skill;