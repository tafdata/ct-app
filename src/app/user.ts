// ユーザークラス
export class User {
    id: string;   // ユーザーID
    name: string; // ユーザー名
    team: string; // チームID
    sex: string;  // 性別(M/W)
    SP1: number;  // 専門種目ID(1つめ) idは 'mock-item.ts'で決めたもの。タグは"sp"
    SP2: number;  // 専門種目ID(2つめ)
}
