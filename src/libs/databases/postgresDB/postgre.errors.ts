export class PostgresError extends Error {
  public constructor(message = 'Unknown database error') {
    super(message);
  }
}

export class PostgresConfigError extends PostgresError {
  public constructor(message = 'Postgres Database configuration error') {
    super(message);
  }
}
