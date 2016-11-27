//
// Team用クラス
export class Team {
    id: string;    // チームId
    name: string;  // チーム名
    participant: any; // 各専門種目ごとの参加者延べ人数
                      // [ { sp: number, N: number} ... ]
}
