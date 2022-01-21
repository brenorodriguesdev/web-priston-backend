import { GetRankingsModel } from "../models/get-rankings";

export interface GetRankingsUseCase {
    get: () => Promise<GetRankingsModel>
}