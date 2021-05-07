import Todo, {TodoInterface} from '../schemes/Todo';

export interface TodoActionInterface {
  saveTodo(todoProps: TodoInterface): Promise<Todo>;
  retrieveAllTodos(): TodoInterface;
}

export default (realmInstance: any): TodoActionInterface => {
  return {
    saveTodo: (todoProps: TodoInterface): Promise<Todo> => {
      return new Promise((resolve, reject) => {
        try {
          realmInstance.write(() => {
            const createdCustomer = realmInstance.create(
              Todo.getTodoModelName(),
              todoProps,
              true,
            );
            resolve(createdCustomer);
          });
        } catch (error) {
          reject(error);
        }
      });
    },
    retrieveAllTodos: (): TodoInterface => {
      return realmInstance.objects(Todo.getTodoModelName());
    },
  };
};
