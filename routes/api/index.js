const router = require('koa-router')();
const musics_router = require('./musics_router');

router.use('/musics', musics_router.routes(), musics_router.allowedMethods());
module.exports = router;
