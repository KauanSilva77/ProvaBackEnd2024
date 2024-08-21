import User from "../models/mongo/User";
import ResponseHandler from "../utils/ResponseHandler";
import RouteFunctions from "../utils/RouteFunctions";


const router = RouteFunctions.Router();


router.post('/create', async (req, res) => {
    try {

      const createdUser = await RouteFunctions.create(req, User);

      ResponseHandler.handleSuccess(res, createdUser);
    } catch (error) {
      ResponseHandler.handleError(res, error);
    }
});


router.get('/list', async (req, res) => {
  try {

      const users = await RouteFunctions.get(User);

      ResponseHandler.handleSuccess(res, users);
    } catch (error) {
      ResponseHandler.handleError(res, error);
    }
});


router.patch('/update/:id', async (req, res) => {
  try {
    
    const updatedUser = await RouteFunctions.update(req, User)

    await ResponseHandler.handleNotFound(res, updatedUser, 'User');
  } catch (error) {
    ResponseHandler.handleError(res, error);
  }
});


router.delete('/delete/:id', async (req, res) => {
  try {
    
    const deletedUSer = await RouteFunctions.delete(req, User);
    
  await ResponseHandler.handleNotFound(res, deletedUSer, 'User');
  } catch (error) {
    ResponseHandler.handleError(res, error);
  }
});


export default router;

