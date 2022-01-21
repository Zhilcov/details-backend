export default () => ({
  port: parseInt(process.env.PORT, 10) || 3003,
  jwtSecret: process.env.JWt_SECRET,
});
