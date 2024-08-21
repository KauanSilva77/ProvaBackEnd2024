import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';
import User from './User';
import Post from './Post';


class Comment extends Model {}


Comment.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    Texto: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Comment',
});


Comment.belongsTo(User, { foreignKey: 'IdUsuario' });
User.hasMany(Comment, { foreignKey: 'IdUsuario' });


Comment.belongsTo(Post, { foreignKey: 'IdPost' });
Post.hasMany(Comment, { foreignKey: 'IdPost' });


export default Comment;
