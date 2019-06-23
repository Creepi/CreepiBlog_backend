exports.getMusicsList = async (ctx, next) => {
  ctx.body = {
    code: 0,
    message: '成功',
    data: [
      {
        pic: `/cstatics/images/intro.jpeg`,
        url: `/cstatics/musics/The%20XX%20-%20Intro%20-%20intro.mp3`,
      },
    ],
  };
};
