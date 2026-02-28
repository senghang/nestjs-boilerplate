import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUser1772279283826 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "users" (
         "id" SERIAL PRIMARY KEY,
         "status" VARCHAR(100),
         "email" VARCHAR(255) NOT NULL UNIQUE,
         "password" VARCHAR(255) NOT NULL,
         "is_admin" BOOLEAN NOT NULL DEFAULT false,
         "created_at" TIMESTAMP NOT NULL DEFAULT now(),
         "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
         "deleted_at" TIMESTAMP NULL,
         "created_by" INTEGER NULL,
         "updated_by" INTEGER NULL
       );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users" `);
  }
}
