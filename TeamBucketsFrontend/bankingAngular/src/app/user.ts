import Todo from './todo';

export default class User {
    id: number;
    username: string;
    password: string;
    todos: Todo[];
}
