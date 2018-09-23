const APACHE_ROOT = '/etc/apache2';

module.exports = {
  projectPath: APACHE_ROOT,
  configBarrels: [
    {
      fileName: 'wp-main.conf',
      content: `
    LoadModule vhost_alias_module libexec/apache2/mod_vhost_alias.so
    LoadModule proxy_module libexec/apache2/mod_proxy.so
    LoadModule proxy_connect_module libexec/apache2/mod_proxy_connect.so
    LoadModule proxy_ftp_module libexec/apache2/mod_proxy_ftp.so
    LoadModule proxy_http_module libexec/apache2/mod_proxy_http.so
    LoadModule proxy_fcgi_module libexec/apache2/mod_proxy_fcgi.so
    LoadModule proxy_scgi_module libexec/apache2/mod_proxy_scgi.so
    LoadModule proxy_wstunnel_module libexec/apache2/mod_proxy_wstunnel.so
    LoadModule proxy_ajp_module libexec/apache2/mod_proxy_ajp.so
    LoadModule proxy_balancer_module libexec/apache2/mod_proxy_balancer.so
    LoadModule proxy_express_module libexec/apache2/mod_proxy_express.so
    LoadModule lbmethod_byrequests_module libexec/apache2/mod_lbmethod_byrequests.so
    LoadModule lbmethod_bytraffic_module libexec/apache2/mod_lbmethod_bytraffic.so
    LoadModule lbmethod_bybusyness_module libexec/apache2/mod_lbmethod_bybusyness.so
    LoadModule rewrite_module libexec/apache2/mod_rewrite.so

    Include '${APACHE_ROOT}/wordpress/*.conf'
    `,
      directory: 'wordpress',
    },
  ],
  certificatesAndKeys: [
  ],
};
