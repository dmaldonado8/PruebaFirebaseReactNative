import Realm from 'realm';
import Todo from '../storage/schemes/Todo';
import todoAction, {TodoActionInterface} from '../storage/actions/TodoActions';

const realmInstance = new Realm({
  schema: [Todo],
});

export const getRealmInstance = () => realmInstance;

export const todoActions: TodoActionInterface = todoAction(realmInstance);
