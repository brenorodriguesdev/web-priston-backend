interface RankPlayer {
    classId: number
    nickname: string
    value: number
}

export interface GetRankingsModel {
    topPvP: RankPlayer[]
    topViciados: RankPlayer[]
    topLevel: RankPlayer[]
}