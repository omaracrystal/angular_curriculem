#Unit 1
###Intro and Setup
1. <b>Why learn Angular JS over other frameworks like Ember, Backbone, Knockout, etc?</b>
> Angular is most popular at the moment which makes it easier to find answers to any questions you may have. Angular also takes up less line of code compared the most other frameworks. It doesn't use setters or getters for data binding. Ember and Angular are similar, and so transition from one to the other wouldn't be that difficult. Backbone is mainly a widget builder that ties HTML with JavaScript into blocks that can them be executed; it asks more as a library then a framework. Angular and Ember are both live templating engines. Updates happen in real time. 

2. <b>People have some very strong opinions about Angular. What are 3 common complaints people have about Angular?</b>
> Some complaints include: Documentation on how to use Angular is lacking clear instructions and information. There is a steep learning curve, it becomes difficult to fully use Angular to it's full potential because of all the inforamtion that is out there. The native router in Angular isn't as diverse as Ember's router, it limited to one route per page. Currently, there is a temporary solution for this problem; AngularUI router. Directives within Angular are hard for some developers to grasp and write. Scopes within the Angular framework are very useful, but also difficult to debug. 

3. <b>Is Angular an MVC framework?</b> After much research I have decided to identify Angular as a MV*/MVW, Model View Whatever... as in what ever works for you. It’s a facet of MVC. So yes it is also a MVC and MVVM. I also ran across an article that claims Angular to be a SDC- (Service, Directive, Controller) saying that a "true" MVC means that the Model contains business Logic, the Controller takes care of communicating user input to the Model, and the View gets its own data from the Model. However, instead of arguing what Angular is exactly is a waste of time since it can be seen as all the above depending on the way it is being used. So it's a MVW. 

4. <b>Turn to the Angular docs. Find ng-app. What is it and what does it do? What does ng stand for?</b> When you try to sound out `ng` it it will sound close to Angular, hence the abbrevition. The `ng-app` is defined in the html and sets the tone as to what areas the angular will be used, and `ng-controllers` can be incorporated within the scope of where `ng-app` is placed.  It sets the stage for two way binding from model to view. 

###Angular MVC
1. **Model**: Model is nothing but data.
2. **View**: View represents this data.
3. **Controller**: Controller mediates between the two.

###Data Binding
1. <b>What does `ng-model` do?</b> 
    The `ng-model` directive binds the value of HTML controls (input, select, textarea) to application data. The ng-model directive can also: Provide type validation for application data (number, email, required). Provide status for application data (invalid, dirty, touched, error). Provide CSS classes for HTML elements. The `ngModel` directive binds an input, select, textarea (or custom form control) to a property on the scope using NgModelController, which is created and exposed by this directive. ngModel is responsible for: Binding the view into the model, which other directives such as input, textarea or select require.
2. <b>What is "dirty checking"?</b>
    The process of checking every `$watch` to detect the changes, is called dirty checking. It waits until something 
3. <b>Find a way to set the initial value of "name" as "BoJack" (without writing a controller).</b>

4. <b>What are those {{ }} expressions? Are they Handlebars?</b>
    
5. <b>Explain what two-way data binding is.</b>
    Data-binding in Angular apps is the automatic synchronization of data between the model and view components. It's shorter code to auto-update between the views and models based on updates from either side. This is called two-way or bi-directional binding. This allows for live template views.

Angular.js makes sure we do not polute the global variable name space.
6. <b>BONUS: Research the `$digest` loop</b> The $digest loop is the <b>Scope Life Cycle</b>. 
The normal flow of a browser receiving an event is that it executes a corresponding JavaScript callback. Once the callback completes the browser re-renders the DOM and returns to waiting for more events.

When the browser calls into JavaScript the code executes outside the Angular execution context, which means that Angular is unaware of model modifications. To properly process model modifications the execution has to enter the Angular execution context using the `$apply` method. Only model modifications which execute inside the `$apply` method will be properly accounted for by Angular. For example if a directive listens on DOM events, such as `ng-click` it must evaluate the expression inside the `$apply` method.

After evaluating the expression, the `$apply` method performs a `$digest`. In the `$digest` phase the scope examines all of the `$watch` expressions and compares them with the previous value. <b>This dirty checking is done asynchronously.</b> This means that assignment such as `$scope.username="angular"` will not immediately cause a `$watch` to be notified, instead the `$watch` notification is delayed until the `$digest` phase. This delay is desirable, since it coalesces multiple model updates into one `$watch` notification as well as guarantees that during the `$watch` notification no other `$watches` are running. If a `$watch` changes the value of the model, it will force additional `$digest` cycle.

>Creation

The root scope is created during the application bootstrap by the $injector. During template linking, some directives create new child scopes.

>Watcher registration

During template linking directives register watches on the scope. These watches will be used to propagate model values to the DOM.

>Model mutation

For mutations to be properly observed, you should make them only within the scope.$apply(). Angular APIs do this implicitly, so no extra $apply call is needed when doing synchronous work in controllers, or asynchronous work with $http, $timeout or $interval services.

>Mutation observation

At the end of $apply, Angular performs a $digest cycle on the root scope, which then propagates throughout all child scopes. During the $digest cycle, all $watched expressions or functions are checked for model mutation and if a mutation is detected, the $watch listener is called.

>Scope destruction

When child scopes are no longer needed, it is the responsibility of the child scope creator to destroy them via scope.$destroy() API. This will stop propagation of $digest calls into the child scope and allow for memory used by the child scope models to be reclaimed by the garbage collector.

#Unit 2 
##Questions A New Structure
1. What are possible issues with this new file structure?
```
app
├── css
├── index.html
└── js
    ├── app.js
    ├── controllers.js
    ├── directives.js
    ├── filters.js
    └── services.js
```

2. When thinking about extending the single responsibility principle to the app structure, what are some other ways that the app could be structured?
3. What are the differences between serving files from an http server and from the file system? It seemed to work fine with just open index.html in the browser...
4. Reflecting on the new structure and thinking back to lesson 1 - is Angular an MVC framework? How does the app structure support/disprove that?

##Questions Routing
1. Why isn't `ngRoute` part of Angular core? Name at least 2 other Angular modules we could use
2. Compare and contrast client-side routing with server-side routing
3. Aside from route definitions, what else can go in a `.config()`?
4. What is `$rootScope`?
5. What is the `$routeChangeSuccess` event?




