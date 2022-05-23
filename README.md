1.My ‘todos’ are going to be objects that you’ll want to dynamically create, which means either using factories or constructors/classes to generate them.

2.Brainstorm what kind of properties your todo-items are going to have. At a minimum they should have a title, description, dueDate and priority. You might also want to include notes or even a checklist.

3. My todo list should have projects or separate lists of todos. When a user first opens the app, Users should be able to create new projects and choose which project their todos go into.

4.it should separate your application logic (i.e. creating new todos, setting todos as complete which strikes a line to properties, changing todo priority etc.) from the DOM-related stuff, so keep all of those things in separate modules.

5.The look of the User Interface is up to me, but it does the following:
    view all projects
    view all todos in each project
    expand a single todo to see/edit its details
    delete a todo
    
6.Since I am probably already using webpack, adding external libraries from npm is a cinch! I considered using the following useful library in my code:
   I used date-fns since it gives me a bunch of handy functions for formatting and manipulating dates and times.
   
7. I used LocalStorage to store data especially my objects which is being displayed after the page has been refreshed but i wasn't able to include it for when a user creates a project and choose which project their todos go into. 


