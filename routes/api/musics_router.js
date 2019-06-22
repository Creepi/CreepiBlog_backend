const router = require('koa-router')();
var musics_controller = require('../../controllers/musics_controller');
router.get('/getMusics', musics_controller.getMusicsList);
module.exports = router;
