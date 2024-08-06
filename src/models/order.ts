
import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
} from "sequelize-typescript";
import { User } from "./user";
import { ProductCart } from "./productCart";

@Table({
  tableName: "orders",
  timestamps: true, // Si deseas que Sequelize maneje los timestamps automáticamente
})
export class Orders extends Model<Orders> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  id!: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId!: number;

  @BelongsTo(() => User)
  user!: User;

  @ForeignKey(() => ProductCart)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  productCartId!: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  total!: number;
}


