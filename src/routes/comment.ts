import Comentario from '../models/mongo/Comment';
import ResponseHandler from '../utils/ResponseHandler';
import HelpfulFunctions, { RouteFunctions } from '../utils/RouteFunctions';


const router = RouteFunctions.Router();


router.post('/create', async (req, res) => {
  try {

    const comment = await RouteFunctions.create(req, Comment);

    ResponseHandler.handleSuccess(res, comment);
  } catch (error) {
    ResponseHandler.handleError(res, error);
  }
});


router.get('/list', async (req, res) => {
  try {

    const comments = await HelpfulFunctions.get(Comentario, 'IdPost');
    
    ResponseHandler.handleSuccess(res, comments);
  } catch (error) {
    ResponseHandler.handleError(res, error);
  }
});


router.patch('/update/:id', async (req, res) => {
  try {
    
    const updatedComment = await HelpfulFunctions.update(req, Comentario);

    await ResponseHandler.handleNotFound(res, updatedComment, 'Comment');
  } catch (error){
    ResponseHandler.handleError(res, error);
  }
});


router.delete('/delete/:id', async (req, res) => {
  try {
    
    const deletedComment = await HelpfulFunctions.delete(req, Comentario);

    await ResponseHandler.handleNotFound(res, deletedComment, 'Comment');
  } catch (error){
    ResponseHandler.handleError(res, error);
  }
})


export default router;
