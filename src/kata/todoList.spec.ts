/* Todo-List
Chaque tâche peut être soit :
- une tâche à faire (To-Do)
- une tâche en cours (In Progress)
- une tâche terminée (Done)
*/

// Niveau 1 : pouvoir ajouter une todo dans le système.
// Niveau 2 : Je souhaite pouvoir supprimer une todo si et seulement si elle n'est pas terminée
// Niveau 3 : je souhaite catégoriser les todos qui traitent de la même catégorie, et les lister groupés par catégorie
// Niveau 4 : Je souhaite enregister les todos dans une base de données de sorte à les garder si crash il y a
// Niveau 5 : ne pas pouvoir ajouter un todo après 20h le soir.
import { todoManagerFactory } from "./todoList.ts";

describe("Todo-List Management", () => {
  let todoManager: ReturnType<typeof todoManagerFactory>;

  beforeEach(() => {
    todoManager = todoManagerFactory();
  });

  it("should add a todo to todos", () => {
    todoManager.addTodo({ name: "first todo", status: "To-Do" });
    expect(todoManager.getTodos()).toStrictEqual([
      { name: "first todo", status: "To-Do" },
    ]);
  });

  it("should delete a non-terminated todo", () => {
    todoManager.addTodo({ name: "a todo", status: "In Progress" });
    todoManager.deleteTodo("a todo");
    expect(todoManager.getTodos()).toStrictEqual([]);
  });

  it("should not be possible to delete a todo if it's done", () => {
    todoManager.addTodo({ name: "a todo", status: "Done" });
    todoManager.deleteTodo("a todo");
    expect(todoManager.getTodos()).toStrictEqual([
      { name: "a todo", status: "Done" },
    ]);
  });

  it("should categorise todos", () => {
    todoManager.addTodo({ name: "a todo", status: "Done", category: "home" });
    todoManager.addTodo({
      name: "b todo",
      status: "In Progress",
      category: "course",
    });
    todoManager.addTodo({ name: "c todo", status: "Done", category: "home" });
    todoManager.classify();
    // expect(todoManager.getTodos()).toStrictEqual([
    //   {
    //     home: [
    //       { name: "a todo", status: "Done", category: "home" },
    //       { name: "c todo", status: "Done", category: "home" },
    //     ],
    //     course: [
    //       {
    //         name: "b todo",
    //         status: "In Progress",
    //         category: "course",
    //       },
    //     ],
    //   },
    // ]);
  });
});
