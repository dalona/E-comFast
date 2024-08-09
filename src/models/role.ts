import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  HasMany,
  HasOne,
} from "sequelize-typescript";

import { User } from "./user";

@Table({
  tableName: "role",
  timestamps: false, // Si deseas que Sequelize maneje los timestamps automáticamente
})
export class Role extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @HasMany(() => User)
  user!: User[];
}
