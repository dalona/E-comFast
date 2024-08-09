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
} from "sequelize-typescript";
import { Product } from './product';
import { Role } from "./role";
import { INTEGER } from "sequelize";

@Table({
  tableName: "users",
  timestamps: true, // Si deseas que Sequelize maneje los timestamps automáticamente
})
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,allowNull: false,unique: true,
    validate: { isEmail: { msg : "Invalid Email address"} }
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;


@ForeignKey(() => Role )
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  roleId!: number;
@BelongsTo(() => Role)
role! : Role;

  @HasMany(() => Product)
  products!: Product[];
}
