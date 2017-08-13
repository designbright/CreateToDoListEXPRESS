# BUILD A TO-DO LIST

Use Express to build a todo list application.You should be able to add new todos and mark todos as complete.

In order to keep the list of todos, you will need to create some data structure and update it from Express, like this example:

const todos = [
  "Wash the car"
];

app.get("/", function (req, res) {
  res.render('index', { todos: todos });
});

app.post("/", function (req, res) {
  todos.push(req.body.todo);
  res.redirect('/');
})

Because your data is being stored in memory, it will disappear every time your app is restarted. It is easiest to seed some todos and completed todos at the start of your app so that you can see them after a restart.


SETUP ATOM FILES  
  Project File Folder (Test-TODO)
    public (folder)
      style.css
    views (folder)
      home.handlebars
    main.js

    ====Package files below will be added when you add npm packages via terminal

    package-lock.json
    package.json   

    README.md
