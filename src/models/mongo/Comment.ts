import { Schema, model, Document } from 'mongoose';
import { IPost } from './Post';
import { IUser } from './User';


interface IComment extends Document {
  Texto: string;
  IdPost: IPost['_id'];
  IdUsuario: IUser['_id'];
}


const CommentSchema = new Schema<IComment>({
  Texto: { type: String, required: true },
  IdPost: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
  IdUsuario: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});


const Comentario = model<IComment>('Comentario', CommentSchema);
export default Comentario;
