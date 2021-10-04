import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCD1633382594272 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'cd',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'user_id',
                        type: 'uuid'
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'artist',
                        type: 'varchar'
                    },
                    {
                        name: 'release_year',
                        type: 'varchar'
                    },
                    {
                        name: 'genre',
                        type: 'varchar'
                    },
                    {
                        name: 'duration',
                        type: 'varchar'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],

                foreignKeys: [
                    {
                        name: 'FKcd',
                        referencedTableName: 'users',
                        referencedColumnNames: ['id'],
                        columnNames: ['user_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('cd');
    }

}
