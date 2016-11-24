ct-app
====

Angular2 based application for visualize the result of 'Contorol Test', physical ability assessment in Athletics.



## Description

陸上競技におけるコントロールテストの結果をビジュアルかつパーソナライズさせて提示するアプリケーションです。このアプリはフロント部分のみを提供します。データ処理は別のプロジェクトで行います。angular2ベースで作成しました。

## Demo

開発中
データは実際のデータではありません。
デバック用のためtopページがログインした状態になっています。

<https://tafdata.github.io/ct-app/>

## Requirement

特になし

## Usage
### データの差し替え

実際のデータを使用してアプリケーションを使用するためには、このプロジェクトをcloneして以下のファイルを変更してください。データの形式は別途クラスを定義しているのでそちらを参考にしてください。

1. src/app/in-memory-data.service.ts
ユーザーに関する情報
*users*の配列の中に以下のクラスを格納する。
データ形式: class User　(/src/app/user.ts)
`
	// ユーザークラス
	export class User {
	    id: string;   // ユーザーID
	    name: string; // ユーザー名
	    team: string; // チームID
	    sex: string;  // 性別(M/W)
	    SP1: number;  // 専門種目ID(1つめ) idは 'mock-item.ts'で決めたもの。タグは"sp"
	    SP2: number;  // 専門種目ID(2つめ)
	}
`
Ex.
`  { id: 'OSK14001', name: 'Imagawa',   team: "OSK", sex: "W", SP1: 101  },`


2. src/app/mock-data.ts
複数形式の情報(詳細は以下を参照)

**RegressionLineParams**
専門種目と各CT種目について線形回帰分析を行った時に得られるパラメータ
y = a*x + b

+ y: CT種目の推定目標値
+ x: 専門種目の目標値(独立変数)
+ a: 回帰直線の傾き
+ b: 回帰直線の切片

`
	//
	// 回帰直線のパラメータ クラス
	// ==> CTの目標記録を計算するための線形回帰直線関係のパラメータ
	export class RegressionLineParam {
	    sp: number;       // 専門種目Id
	    itemId: number;   // 種目Id
    	    a: number;        // y = a*x + b
	    b: number;        // x: 独立変数(専門種目の記録), y: 目的変数(CT種目の目標記録)  
	}
`
Ex.
`{ sp: 101, itemId: 1, a: 2.34, b: 0.3 },`

**RecordRange**
回帰分析によってCT種目の推定目標値を算出する際の、独立変数Xの範囲と刻み幅を指定する。
`
	//
	// 専門記録の表示範囲
	// ==> 専門種目の目標記録を計算する際の上限下限を指定
	export class RecordRange {
	    sp: number;    // 専門種目Id
	    min: number;   // 目標記録を算出する下限値
	    max: number;   // 目標記録を算出する下限値
	    step: number;  // 刻み幅
	}
`
Ex.
`{ sp: 101, min:  6.00, max:  8.00, step: 0.10 },`

**Rivals**
my-pageで目標とすべき選手一覧の記録に表示したい選手を指定する。
`
	// ライバル選手のIDリスト
	// ==> ここで指定したIdの選手がmy-pageの'ライバルの記録一覧'に表示される
	export class Rival{
	    userId: string;      // ユーザーId
	    sp: number;          // 専門種目Id
	    rivalsId: string[];  // ユーザーIdのリスト
	}
`
Ex.
`{ userId: "OSK14001", sp: 101, rivalsId: ["OSK15005","OSK15003","OSK16006",] },	`

3. src/app/mock-item.ts
種目に関する情報をまとめる。ここでいう種目はCT種目(コントロールテストの種目)と専門種目の両方がある。tagによって区別。
+ tag
  + ct: CT種目
  + ct-meta: CTメタ情報(総合得点など)
  + sp: 専門種目
  + L: リフティング系種目
  + J: ジャンプ系種目
  + S: スプリント系種目

`
	// 種目クラス
	export class Item {
	    id: number;      // 種目Id
	    name: string;    // 種目名   
	    unit: string;    // 記録の単位[m, sec, min, kg ...]
	    tag:  string[];  // タグ
	}
`
Ex.
`    { id:  1, name: "スナッチ",         unit: "kg", tag: ["L","ct"] }, `

4. src/app/mock-record.ts
コントロールテストなどの記録を各ユーザーごとに格納。
`
	// レコードクラス
	export class Record {
	    id: string;       // ユーザーId
	    records: Mark[];  // 記録(Mark)クラスの配列
	}

	// 記録クラス
	export class Mark{
	    id: number;       // 種目Id
	    name: string;     // 種目名
	    mark: number;     // 記録[ex. 6.00]
	    score: number;    // スコア
	    rank: number;     // 総合順位
	    rankSP1: number;  // 専門種目1内での順位
	    rankSP2: number;  // 専門種目2内での順位
	}
`
Ex.
`
    {
	id: 'OSK14001',
	records: [
	    {id: 0,name: "総合スコア",mark: 5020,score: 1020,rank: 5,rankSP1: 3,rankSP2: 0},
	    {id: 1,name: "スナッチ",mark: 40,score: 670,rank: 5,rankSP1: 3,rankSP2: 0},
	    {id: 2,name: "クリーン",mark: 72.5,score: 789,rank: 5,rankSP1: 3,rankSP2: -1},
	    ...
	],
    },
`

5. src/app/mock-team.ts
チーム情報。
`
	// Team用クラス
	export class Team {
	    id: string;    // チームId
	     name: string;  // チーム名
	}
`
Ex.
`{ id: "OSK", name: "チームOSK"},`



## Licence

[MIT](https://github.com/tcnksm/tool/blob/master/LICENCE)

## Author

[T.A.F. Data](https://github.com/tafdata)



## angular-cli
This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.19-3.

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

### Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

