import dotenv from 'dotenv';
import { Pool } from 'pg';

// Dotenv is a zero-dependency module that loads environment variables
// from a .env file into process.env

// The dotenv.config() line initializes the environment variables.
// You can't access the env vars unless line 11 exists in your code,
// it typically goes as close to the beginning of the program as possible

dotenv.config();

const { POSTGRES_HOST, POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_TEST_DB, ENV } =
    process.env;

// The process.env property returns an object containing the user environment

// If a gitignore file exists in your project add the .env file there.
// If there isn't a gitignore, add a file called .gitignore to the root of
// the project and add a single line in the file that says just .env
let client: Pool = new Pool();
console.log(ENV);

if (ENV === 'test') {
    client = new Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_TEST_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD
    });
}

if (ENV === 'dev') {
    client = new Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD
    });
}

// pool is a connection to the database

export default client;
