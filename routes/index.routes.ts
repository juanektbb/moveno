import { Router } from 'https://deno.land/x/oak/mod.ts'

const router = new Router();

router.get("/", ({response}) => {

    response.body = "hello world"

})

export default router
