export interface TodoInterface {
  _id: number;
  title: string;
  description: string;
  date: string;
  status: boolean;
}

export default class Todo {
  static schema = {
    name: 'Todo',
    properties: {
      _id: 'int',
      title: 'string',
      description: 'string',
      date: 'string',
      status: 'boolean',
    },
    primaryKey: '_id',
  };

  static getTodoModelName() {
    return Todo.schema.name;
  }

  static PrimaryKey() {
    return Todo.schema.primaryKey;
  }
}
