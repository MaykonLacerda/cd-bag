import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (): Promise<Connection> => {
  try {
    const defaultOptions = await getConnectionOptions();
    return createConnection(
      Object.assign(defaultOptions, {
        database: defaultOptions.database,
      })
    );

  } catch (err) {
    console.error(err);
  }

};
