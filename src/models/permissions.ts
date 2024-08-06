import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  HasMany,
  ForeignKey,
  BelongsTo,
  HasOne,
} from "sequelize-typescript";
import { Product } from "./product";
import { Role } from "./role";
import { Orders } from "./order";
import { Entities } from "./entities";

@Table({
  tableName: "users",
  timestamps: true, // Si deseas que Sequelize maneje los timestamps automáticamente
})
export class Permissions extends Model<Permissions> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  id!: number;

  @ForeignKey(() => Role)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  roleId!: number;

  @BelongsTo(() => Role)
  role!: Role;

  @ForeignKey(() => Entities)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  EntitiesId!: number;

  @BelongsTo(() => Entities)
  entities!: Entities;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  canCreate!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  canUpdate!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  canDelete!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  canGet!: boolean;
  //   @HasMany(() => Product)
  //   products!: Product[];

  //   @HasMany(() => Orders)
  //   orders!: Orders[];
}
