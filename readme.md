

What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?


There are differences between getElementById, getElementsByClassName, and querySelector / querySelectorAll.For example:
1- getElementById is used to find a specific element.

2- getElementsByClassName is used to find elements that have same class name.For instance, if you have 6 or more cards with similar class name, you can get an html-collecton of all these cards.
3- querySelector is like getElementById as it also used to find one element.However, there are differences between them.For instance,inside  querySelector one can put many  css selector such as  IDs, classes, tag names, attributes and it will return the first element that matches.


4- while querySelector only returns the first element that matches, one can get all the elements with querySelectorAll.


2. How do you **create and insert a new element into the DOM**?

 To create a new element we pass the tag name that we want create inside document.createElement()

 To insert   a new element in dome, one should first create a new element.then, find the parent container in order to insert  the new element. inserting method 'parentContainer.appendChild(new element)

 3. What is **Event Bubbling** and how does it work?

 Event Bubbling is somthing that  propagates upwards.For example, when an event is triggered on a targeted element it starts propagating upwards.The clicked element propagates to its parent,grandparent and grand grand grandparent all the way to document's root. 
 
4. What is **Event Delegation** in JavaScript? Why is it useful?

Event Delegation is a method in which we add event listeners in parent element instead of each children elements.It is useful for various reasons,for example, while adding event listener to 100000 buttons it is not a good idea to find them throug looping instead we should do it with event delegation 



5. What is the difference between **preventDefault() and stopPropagation()** methods?


preventDefault() is used to prevent browser default behaiviour.For example, when a form list is made it automatically reload.To stop the reloading one can prevent reloading.

On the other hand, stopPropagation() is used in event bubbling.By implamanting  stopPropagation() one can stop the bubbling up

