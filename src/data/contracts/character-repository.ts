import { Character } from "../entities/character";

export interface CharacterRepository {
    getTopLevel: (limit: number) => Promise<Character[]>
    getTopViciados: (limit: number) => Promise<Character[]>
    getTopBattlePoint: (limit: number) => Promise<Character[]>
 }