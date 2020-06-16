import { Router } from 'https://deno.land/x/oak/mod.ts'

import * as sexyController from "../controllers/index.controllers.ts"

const router = new Router()

router.get("/", ({response}) => {

    response.body = "hello world"

})

router.get("/movie", sexyController.getMovie)

export default router
