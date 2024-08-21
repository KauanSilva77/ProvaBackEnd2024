import { Schema, model, Document } from 'mongoose';
import { IUser } from './User';


export interface IPost extends Document {
  Titulo: string;
  Conteudo: string;
  IdUsuario: IUser['_id'];
}


const PostSchema = new Schema<IPost>({
  Titulo: { type: String, required: true },
  Conteudo: { type: String, required: true },
  IdUsuario: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});


const Post = model<IPost>('Post', PostSchema);
export default Post;
