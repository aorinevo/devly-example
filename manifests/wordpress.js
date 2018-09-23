const DNS = 'local.wordpress.aorinevo.org';
const PORT = 8080;

module.exports = {
  databaseName: 'wordpress',
  wordpressUsername: 'wordpress',
  port: PORT,
  hostname: 'localhost',
  projectPath: '/Users/aorinevo/Repositories/WordPress',
  vHosts: `
  # WordPress Virtual Host

  <VirtualHost *:80>
    ProxyPreserveHost off
    ServerName ${DNS}
    ServerAlias www.${DNS}

    ProxyPass / http://${DNS}:${PORT}/
  </VirtualHost>
  `
};
