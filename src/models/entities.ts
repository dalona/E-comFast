import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
  HasMany,
} from "sequelize-typescript";
import { User } from "./user";
import { Orders } from "./order";

@Table({
  tableName: "entities",
  timestamps: true, // Si deseas que Sequelize maneje los timestamps automáticamente
})
export class Entities extends Model<Entities> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  id!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  name!: string;
}
