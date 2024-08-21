import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    Nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Cpf: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Endereco: {
        type: DataTypes.JSONB, 
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'User',
});

export default User;
