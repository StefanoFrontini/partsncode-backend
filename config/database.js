module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'mongoose',
        settings: {
          client: 'mongo',
          host: env('DATABASE_HOST'),
          port: env.int('DATABASE_PORT'),
          database: env('DATABASE_NAME'),
          username: env('DATABASE_USERNAME'),
          password: env('DATABASE_PASSWORD'),
        },
        options: {
          authenticationDatabase: env('AUTHENTICATION_DATABASE'),
          ssl: env('DATABASE_SSL'),
        },
      },
    },
  });
 