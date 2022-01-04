module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '14d4850f1a73986d307735de1f10261e'),
  },
});
