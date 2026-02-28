**Requirement Install:**

* Nodejs
* NPM
* Nest CIL

**How to run:**

* npm install
* npm run start:dev

**Generate:**

* nest generate --help
* nest g mo auth
* nest g co auth/controller --no-spec
* nest g s auth/service --no-spec

**Generate Migration:**
npx typeorm migration:create src/database/migrations/create_table_user

npx typeorm-ts-node-commonjs migration:run -d ./src/common/config/database.providers.ts