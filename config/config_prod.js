module.exports = {
  server_port : process.env.OPENSHIFT_NODEJS_PORT || 8080,
  server_ip_address : process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
  mongodb_connection_string : "mongodb://" + (process.env.OPENSHIFT_MONGODB_DB_USERNAME || "1-null" ) + ":" +
  (process.env.OPENSHIFT_MONGODB_DB_PASSWORD || "2-null" ) + "@" +
  (process.env.OPENSHIFT_MONGODB_DB_HOST || "3-null" ) + ':' +
  (process.env.OPENSHIFT_MONGODB_DB_PORT || "4-null" ) + '/' +
  (process.env.OPENSHIFT_APP_NAME || "5-null" )

};

//'database': 'mongodb://noder:noderauth&54;proximus.modulusmongo.net:27017/so9pojyN'
