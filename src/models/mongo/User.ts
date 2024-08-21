import { Schema, model, Document } from 'mongoose';


export interface IEndereco {
  Estado: string;
  Cidade: string;
  Bairro: string;
  Rua: string;
  Numero: any;
}


export interface IUser extends Document {
  Nome: string;
  Cpf: string;
  Endereco: IEndereco;
}

const EnderecoSchema = new Schema<IEndereco>({
  Estado: {type: String, required: true},
  Cidade: {type: String, required: true},
  Bairro: {type: String, required: true},
  Rua: {type: String, required: true},
  Numero: {type: Schema.Types.Mixed, required: true},
});


const UserSchema = new Schema<IUser>({
  Nome: { type: String, required: true },
  Cpf: { type: String, required: true },
  Endereco: { type: EnderecoSchema, required: true },
});


const Usuario = model<IUser>('Usuario', UserSchema);
export default Usuario;
