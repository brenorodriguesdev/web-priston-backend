import { GetRankingsUseCase } from "../../domain/useCases/get-rankings"
import { Controller } from "../contracts/controller"
import { HttpResponse } from "../contracts/http"
import { ok, serverError } from "../contracts/http-helper"

export class GetRankingsController implements Controller {
    constructor (private readonly getRankingsUseCase: GetRankingsUseCase) {}
    async handle(): Promise<HttpResponse> {
        try {
            const rankings = await this.getRankingsUseCase.get()
            return ok(rankings)
        } catch (error) {
            console.log(error.message)
            return serverError()
        }
    }
}