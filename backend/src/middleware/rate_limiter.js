import ratelimit from '../config/upstash.js';

const rate_limiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("my-rate-limit");

    if (!success) {
      return res.status(429).json({
        message: "Too many requests, please try again later"
      });
    }

    next();
  } catch (error) {
    console.log("Rate Limit Error");
    next(error);
  }
};

export default rate_limiter;