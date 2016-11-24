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
