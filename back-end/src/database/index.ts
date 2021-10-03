import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (): Promise<Connection> => {
  try {
    const defaultOptions = await getConnectionOptions();
    const connection = createConnection(
      Object.assign(defaultOptions, {
        database: defaultOptions.database,
      })
    );
    return connection;

  } catch (err) {
    console.error(err);
  }

};
