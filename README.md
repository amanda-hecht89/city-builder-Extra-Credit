## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
//drew out photo of website
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
//a header.
//a div for activity
//a div for season
//a div for the drop downs
//a div for slogan (catchphrase) x2
// a button
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
//slogan
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
//header for greeting and explaination
//div to hold activity dropdown
//div to hold season dropdown
//div to type slogan
//div to hold slogan in place
//div for button to add slogan
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

***** credit for ART ******
Hiking icon by Icons8
Ski icon by Icons8
Shopaholic icon by Icons8
Bouldering Skin Type 1 icon by Icons8
Winter icon by Icons8
Summer icon by Icons8
Spring icon by Icons8
Fallen Leaf icon by Icons8

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
