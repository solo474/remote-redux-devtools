export const defaultSocketOptions = {
  secure: true,
  hostname: 'localhost',
  port: 9000,
  autoReconnect: true,
  autoReconnectOptions: {
    randomness: 30000
  }
};
