module.exports = {

  /**
   * You could customise the middleware to better fit the application's need.
   *
   * The middleware converts the async function into Express middleware.
   * Reference: https://strongloop.com/strongblog/async-error-handling-expressjs-es7-promises-generators/
   * @param {Function} fn - The function should take `req` as the only input parameters.
   */
  reply(fn) {
    return async (req, res, next) => {
      try {
        const data = await Promise.resolve(fn(req));
        return res.send(data);
      } catch (err) {
        return next(err);
      }
    };
  }
};
