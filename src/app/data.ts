//
// DATAクラス
//

//
// 回帰直線のパラメータ クラス
// ==> CTの目標記録を計算するための線形回帰直線関係のパラメータ
export class RegressionLineParam {
    sp: number;       // 専門種目Id
    itemId: number;   // 種目Id
    a: number;        // y = a*x + b
    b: number;        // x: 独立変数(専門種目の記録), y: 目的変数(CT種目の目標記録)  
}

//
// 専門記録の表示範囲
// ==> 専門種目の目標記録を計算する際の上限下限を指定
export class RecordRange {
    sp: number;    // 専門種目Id
    min: number;   // 目標記録を算出する下限値
    max: number;   // 目標記録を算出する下限値
    step: number;  // 刻み幅
}


//
// ライバル選手のIDリスト
// ==> ここで指定したIdの選手がmy-pageの'ライバルの記録一覧'に表示される
export class Rival{
    userId: string;      // ユーザーId
    sp: number;          // 専門種目Id
    rivalsId: string[];  // ユーザーIdのリスト
}

//
// CTの統計メタ情報
// ==>  Overview Pageに使用
export class CtMeta {
    itemId: number;      // 種目Id
    avg: number;         // 平均
    max: number;         // 最高記録
    variance: number;    // 分散
    N: number; // 参加人数(総数)
    NSP: any;  //各専門種目ごとの参加人数(専門種目Idと参加人数のkey-valueオブジェクトの配列)
               // Ex. NSP: any = [ { sp:number, N: number}, ...] 
}


//
// 相関係数
// ==>
export class Correlation{
    itemId: number; // CT種目id
    values: any;    // 相関係数の配列 [ 走幅跳, 三段跳, 走高跳, 棒高跳 ]の順
}
    

//
// ヒストグラム用データセット
//
export class Histgram{
    itemId: number; // 種目Id
    values: any;    // 配列 [ {x:number,y:number}, ....]
}


//
// Overview Page用 人数棒グラフ
//
export class BarChart{
    id: string; // グラフのid
    data: any;  // nvd3用データセット
    // { key: string, color: string, "values": [{label: string, value: number}]}
}
