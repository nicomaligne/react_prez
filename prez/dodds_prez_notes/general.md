#### Lifecycle with business evolution
#### How to resolve problem with pattern (maintenability)


NB: Look at downshift => show pattern impl
NB: Presentation more on rendering than behavior


#### Step 1
Simple Accordeon :
 - icon change on click (like caret)
 - text below
 - different icon per accordion

 <Accordion items={myItems} />

 #### Step 2

 Example of new business need :
 - text above (so caret icon have to point up and not down) => above={boolean}
 - text right (same with appropriate caret icon) => position="positionString"
 - open only one at a time => single={boolean}
 - forbidden close all, always one open => preventClose={boolean}
 - What about a tab ui ?!? just click on icon and show content ! => tabs={true} (two different render methods...) 
 (PS : I like this one ! :)
 - And what about render the content above the tab (mindblow)
 - Etc ending creating a new component Tabs with a lots of duplicate code or a lots of if condition...

Conlusion : 
Bad solution for maintenability and readibility. Increase complexity so increase the possibility of bugs.
Bad reusability a complex api mean a complex utilisation (read all props, figure out stuff, need a strong doc).
But also for bundle size => Why ? Because you got more logic (and more line of codes) that you really need, 
you have a lots of feats you don't need 

==> apropcalypse

 #### Step 3

 inversion of control to the rescue (children as func === render props / state reducer) 
 inverison of control === give control and responsability

 The base is here to handle the state management and logic. Using render props allow to give the control render to the user of the api.
 To have a mininum control the builder of the api, create a library of component to be used in the accordion.
Here show that when we give the rendering control to the user it can switch component directly to tweak his render.

===> But we have nothing to control the rendering api => Compound pattern ?

#### Step 4 (Dodds prez, we will not do it like this, but the example is really cool)

WE HAVE TO SHOW HOW IT'S EASY TO HIDE TABS LOGIC BEHIND ACCORDION (using state logic and only change rendering)

State reducer === show how we can hard code implement some behavoir but allowing the user to add his own need
allow composition of behavior of the component outside ==> inversion of control
For example accrodion vs tabs ==> we can easyly share chunk of code and only override some behavior

#### Step 5 Compound pattern

Have to make our own
Compound pattern (ref adv workshop egghead)
More controlled rendering but props drilling

#### Step 6 Solve props drilling with the api context and the provider pattern


