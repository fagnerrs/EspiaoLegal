module.exports = {
  server_port : process.env.OPENSHIFT_NODEJS_PORT || 8080,
  server_ip_address : process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
  mongodb_connection_string : (process.env.OPENSHIFT_MONGODB_DB_URL || "null") + (process.env.OPENSHIFT_APP_NAME || "null")
};

//'database': 'mongodb://noder:noderauth&54;proximus.modulusmongo.net:27017/so9pojyN'
