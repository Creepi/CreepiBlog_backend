exports.getMusicsList = async (ctx, next) => {
  console.log(222);
  ctx.body = {
    code: 0,
    message: '成功',
    data: [
      {
        pic: `${__dirname}/images/intro.jpeg`,
        url: `${__dirname}/musics/The%20XX%20-%20Intro%20-%20intro.mp3`,
      },
    ],
  };
};
