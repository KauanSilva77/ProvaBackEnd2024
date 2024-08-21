import Post from '../models/mongo/Post';
import ResponseHandler from '../utils/ResponseHandler';
import RouteFunctions from '../utils/RouteFunctions';


const router = RouteFunctions.Router();


router.post('/create', async (req, res) => {
  try {
    
    const createdPost = await RouteFunctions.create(req, Post);

    ResponseHandler.handleSuccess(res, createdPost);
  } catch (error) {
    ResponseHandler.handleError(res, error);
  }
});


router.get('/list', async (req, res) => {
  try {

    const posts = await RouteFunctions.get(Post, 'IdUsuario');

    ResponseHandler.handleSuccess(res, posts);
  } catch (error) {
    ResponseHandler.handleError(res, error);
  }
});


router.patch('/update/:id', async (req, res) => {
  try {
    
    const updatedPost = await RouteFunctions.update(req, Post);

    await ResponseHandler.handleNotFound(res, updatedPost, 'Post');
  } catch (error) {
    ResponseHandler.handleError(res, error);
  }
});


router.delete('/delete/:id', async (req, res) => {
  try {
    
    const deletedPost = await RouteFunctions.delete(req, Post);

    await ResponseHandler.handleNotFound(res, deletedPost, 'Post');
  } catch (error) {
    ResponseHandler.handleError(res, error);
  }
})


export default router;