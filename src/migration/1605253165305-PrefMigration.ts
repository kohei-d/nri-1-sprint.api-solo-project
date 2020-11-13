import {MigrationInterface, QueryRunner} from "typeorm";

export class PrefMigration1605253165305 implements MigrationInterface {
    name = 'PrefMigration1605253165305'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pref" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_964f002270e05dbef2af37b37ca" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "pref"`);
    }

}
