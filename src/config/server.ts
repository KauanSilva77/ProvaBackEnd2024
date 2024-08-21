import { connectDatabases } from "./db";
import app from '../index';


export const port = process.env.PORT!;


connectDatabases();


export default function startServer() {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
