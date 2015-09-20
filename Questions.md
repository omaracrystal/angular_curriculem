#Unit 1
###Intro and Setup
1. Why learn Angular JS over other frameworks like Ember, Backbone, Knockout, etc?
> Angular is most popular at the moment which makes it easier to find answers to any questions you may have. Angular also takes up less line of code compared the most other frameworks. It doesn't use setters or getters for data binding. Ember and Angular are similar, and so transition from one to the other wouldn't be that difficult. Backbone is mainly a widget builder that ties HTML with JavaScript into blocks that can them be executed; it asks more as a library then a framework. Angular and Ember are both live templating engines. Updates happen in real time. 

2. People have some very strong opinions about Angular. What are 3 common complaints people have about Angular? 
> Some complaints include: Documentation on how to use Angular is lacking clear instructions and information. There is a steep learning curve, it becomes difficult to fully use Angular to it's full potential because of all the inforamtion that is out there. The native router in Angular isn't as diverse as Ember's router, it limited to one route per page. Currently, there is a temporary solution for this problem; AngularUI router. Directives within Angular are hard for some developers to grasp and write. Scopes within the Angular framework are very useful, but also difficult to debug. 

3. Is Angular an MVC framework? After much research I have decided to identify Angular as a MV*/MVW, Model View Whatever... as in what ever works for you. It’s a facet of MVC. So yes it is also a MVC and MVVM. I also ran across an article that claims Angular to be a SDC- (Service, Directive, Controller) saying that a "true" MVC means that the Model contains business Logic, the Controller takes care of communicating user input to the Model, and the View gets its own data from the Model. However, instead of arguing what Angular is exactly is a waste of time since it can be seen as all the above depending on the way it is being used. So it's a MVW. 

4. Turn to the Angular docs. Find ng-app. What is it and what does it do? What does ng stand for? When you try to sound out `ng` it it will sound close to Angular, hence the abbrevition. The `ng-app` is defined in the html and sets the tone as to what areas the angular will be used, and `ng-controllers` can be incorporated within the scope of where `ng-app` is placed.  It sets the stage for two way binding from model to view. 

###Angular MVC
1. **Model**: Model is nothing but data.
2. **View**: View represents this data.
3. **Controller**: Controller mediates between the two.

###Data Binding
1. What does `ng-model` do? The `ng-model` directive binds the value of HTML controls (input, select, textarea) to application data. The ng-model directive can also: Provide type validation for application data (number, email, required). Provide status for application data (invalid, dirty, touched, error). Provide CSS classes for HTML elements. The `ngModel` directive binds an input, select, textarea (or custom form control) to a property on the scope using NgModelController, which is created and exposed by this directive. ngModel is responsible for: Binding the view into the model, which other directives such as input, textarea or select require.

2. What is "dirty checking"? The process of checking every `$watch` to detect the changes, is called dirty checking. It waits until something 
3. Find a way to set the initial value of "name" as "BoJack" (without writing a controller).
4. What are those {{ }} expressions? Are they Handlebars?
5. Explain what two-way data binding is.
6. BONUS: Research the $digest loop




