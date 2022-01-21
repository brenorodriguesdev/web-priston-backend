import { getRepository } from "typeorm";
import { CharacterRepository } from "../data/contracts/character-repository";
import { Character } from "../data/entities/character";

export class CharacterRepositoryMSSQL implements CharacterRepository {
    async getTopViciados(limit: number): Promise<Character[]> {
        const characterRepository = getRepository(Character)
        return await characterRepository.find({ skip: 0, take: limit, order: { minutes: 'DESC' } })
    }

    async getTopBattlePoint(limit: number): Promise<Character[]> {
        const characterRepository = getRepository(Character)
        return await characterRepository.find({ skip: 0, take: limit, order: { battlePoint: 'DESC' } })
    }

    async getTopLevel(limit: number): Promise<Character[]> {
        const characterRepository = getRepository(Character)
        return await characterRepository.find({ skip: 0, take: limit, order: { level: 'DESC' } })
    }
}