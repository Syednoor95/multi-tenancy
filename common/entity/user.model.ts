import {
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";

@Table
export class User extends Model {
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  firstName: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  lastName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  mobile: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isActive: boolean;


}
