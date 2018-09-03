module.exports = {
  path: '/Users/aorinevo/.zshrc',
  exports: [
    {
      name: 'JAVA_HOME',
      value: "'/Library/Java/JavaVirtualMachines/jdk1.8.0_162.jdk/Contents/Home'"
    },
    {
      name: 'MAVEN_HOME',
      value: "'/usr/local/Cellar/maven/3.5.4/libexec'"
    },
    {
      name: 'MAVEN_OPTS',
      value: "'-Xmx1024m -Xms1024m -XX:MaxPermSize=1162m'"
    },
    {
      name: 'M2_OPTS',
      value: '$MAVEN_OPTS'
    },
    {
      name: 'PATH',
      value: '/usr/local/opt/mysql@5.7/bin:/usr/local/bin:$MAVEN_HOME/bin:$JAVA_HOME/bin:$PATH'
    }
  ],
};
