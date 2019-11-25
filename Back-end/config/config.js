var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  process.env.PORT = 4000;
  process.env.MONGODB_URI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER_URL}}/test?retryWrites=true&w=majority`;
}