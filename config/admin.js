module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '71d30fd98c9279d0ab1b4f323c1653f8'),
  },
});
