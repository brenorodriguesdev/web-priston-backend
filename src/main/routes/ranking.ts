import { Router } from "express"
import { adaptRouter } from "../adapters/express-controller"
import { makeGetRankingsController } from "../factories/controllers/get-rankings"

export default (router: Router): void => {
    router.get('/ranking', adaptRouter(makeGetRankingsController()))
}