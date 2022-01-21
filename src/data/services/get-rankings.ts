import { GetRankingsModel } from "../../domain/models/get-rankings";
import { GetRankingsUseCase } from "../../domain/useCases/get-rankings";
import { CharacterRepository } from "../contracts/character-repository";

export class GetRankingsService implements GetRankingsUseCase {
    constructor(private readonly characterRepository: CharacterRepository) { }
    async get(): Promise<GetRankingsModel> {
        const charactersTopPvP = await this.characterRepository.getTopBattlePoint(5)
        const charactersTopLevel = await this.characterRepository.getTopLevel(5)
        const charactersTopViciados = await this.characterRepository.getTopViciados(5)
        return {
            topPvP: charactersTopPvP.map(character => ({
                classId: character.class,
                nickname: character.nickname,
                value: character.battlePoint
            })),
            topLevel: charactersTopLevel.map(character => ({
                classId: character.class,
                nickname: character.nickname,
                value: character.level
            })),
            topViciados: charactersTopViciados.map(character => ({
                classId: character.class,
                nickname: character.nickname,
                value: character.minutes
            })),
        }
    }
}