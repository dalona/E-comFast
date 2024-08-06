import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
  HasMany
} from "sequelize-typescript";
import { User } from "./user";
import { Cart } from "./cart";
import { Product } from "./product";
import { Orders } from "./order";

@Table({
  tableName: "productCart",
  timestamps: true, // Si deseas que Sequelize maneje los timestamps automáticamente
})
export class ProductCart extends Model<ProductCart> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  id!: number;

  @ForeignKey(() => Cart)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  cartId!: number;

  @BelongsTo(() => Cart)
  CartId!: Cart;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  productId!: number;

  @BelongsTo(() => Product)
  ProductId!: Cart;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity!: number;

  @HasMany(() => Product)
  products!: Product[];

 @HasMany(() => Orders)
 orders!: Orders[]
 
}
