import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { Pref } from '../entity/Pref'
const pref_seed= require("./pref_seed")

export default class CreatePrefs implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Pref)
      .values(pref_seed)
      .execute()
  }
}