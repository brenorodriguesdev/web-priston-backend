import { GetRankingsService } from "../../../data/services/get-rankings"
import { CharacterRepositoryMSSQL } from "../../../infra/character-repository"
import { Controller } from "../../../presentation/contracts/controller"
import { GetRankingsController } from "../../../presentation/controllers/get-rankings"

export const makeGetRankingsController = (): Controller => {
    const characterRepositoryMSSQL = new CharacterRepositoryMSSQL()
    const getRankingsService = new GetRankingsService(characterRepositoryMSSQL)
    return new GetRankingsController(getRankingsService)
}