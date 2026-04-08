module.exports = {
  apps: [
    {
      name: "sehw-sanya",
      script: "node_modules/.bin/next",
      args: "start -p 3000",
      cwd: "/var/www/sehw-sanya",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
