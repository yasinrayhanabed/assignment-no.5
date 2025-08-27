1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer : ( getElementById ) → Selects one element by its id and its can returns a single element.

( getElementsByClassName ) → Selects all elements with a given class and its can returns a live HTMLCollection.

( querySelector ) → Selects the first element that matches a CSS selector and its can  returns a single element.

( querySelectorAll ) → Selects all elements that match a CSS selector and its can  returns a static NodeList.

2. How do you create and insert a new element into the DOM?

Answer : I can create and insert a new element in the DOM using these steps :

Create the element → document.createElement("tagName")

Add attributes → e.g. element.setAttribute()

Insert into the DOM → appendChild

3. What is Event Bubbling and how does it work?

Answer : Event bubbling means that when an event happens on an element like a button click, the event first runs on that element, then it bubbles up (moves) to its parent, then to the parent’s parent, and so on—until it reaches the document.

If anyone click the button, this happens:
Button’s own handler runs → "Child"
Then event bubbles up to → "Parent"
Then to → "Body"

4. What is Event Delegation in JavaScript? Why is it useful?

Answer : Event Delegation is a technique in JavaScript where instead of attaching event listeners to many child elements, I can attach a single event listener to a common parent element. 

It is useful because :
Performance → Instead of hundreds of listeners, I can use one listener.
Dynamic Elements → Works even for elements added later and no need to re-attach listeners.
Cleaner Code → Less repetition, easier to maintain.

5. What is the difference between preventDefault() and stopPropagation() methods?

Answer : The different between peventDefault() and stopPropagation() methods is :
preventDefault() is use to stop the browser’s default action.
stopPropagation() is use to stop the event from moving to parent elements.