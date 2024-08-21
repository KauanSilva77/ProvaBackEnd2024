import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';
import User from './User';


class Post extends Model {}


Post.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    Titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Conteudo: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Post',
});


Post.belongsTo(User, { foreignKey: 'IdUsuario' });
User.hasMany(Post, { foreignKey: 'IdUsuario' });


export default Post;
