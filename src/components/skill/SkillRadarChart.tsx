// 各種ライブラリのインポート
import React, { PureComponent } from 'react';
import {
    Radar, RadarChart, PolarGrid, Legend,
    PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

// 表示するデータを配列として定義
const data = [
    {subject: 'クラウド', A: 3, fullMark: 5},
    {subject: 'ネットワーク', A: 2, fullMark: 5},
    {subject: 'サーバ', A: 3, fullMark: 5},
    {subject: 'データベース', A: 3, fullMark: 5},
];

// Chartコンポーネントの定義
export default class SkillRadarChart extends PureComponent {
    render() {
        return (
            <RadarChart  // レーダーチャート全体の設定を記述
                width={500}  // レーダーチャートが記載される幅(この幅よりチャートが大きい場合、はみ出た箇所は表示されない)
                height={500}   // レーダーチャートが記載される高さ
                cx={300}  // 描画枠の左端とチャートの中心点との距離(0にするとチャートの左半分が隠れる。width全体が500だから250だと中心になる)
                cy={300}  // 描画枠の上部とチャートの中心点との距離(0にするとチャートの上半分が隠れる。hight全体が500だから250だと中心になる)
                outerRadius={150}  // レーダーチャート全体の大きさ  
                data={data}  // 表示対象のデータ
            >
                {/* レーダーチャートの蜘蛛の巣のような線 */}
                <PolarGrid />

                {/* 軸を決める項目(サンプルでいう数学や歴史) */}
                <PolarAngleAxis dataKey="subject" />
                
                {/* 目安となる数値が表示される線を指定  */}
                <PolarRadiusAxis 
                    angle={90}  // 中心点から水平を0°とした時の角度 垂直にしたいなら90を指定
                    domain={[0, 5]}  // リストの１番目の要素が最小値、2番目の要素が最大値
                />  
                
                {/* レーダーを表示 */}
                <Radar 
                    name="Aさん"  // そのチャートが誰のデータか指定(チャート下にここで指定した値が表示される)
                    dataKey="A"   // 表示する値と対応するdata内のキー
                    stroke="#8884d8"  // レーダーの外枠の色
                    fill="#8884d8"  // レーダー内の色
                    fillOpacity={0.6}  // レーダー内の色の濃さ(1にすると濃さMAX)
                />

                {/* グラフの下のAさんBさんの表記 */}
                <Legend />
            </RadarChart>
        );
    }
}