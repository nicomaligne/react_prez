

/* Step 1 example */

function Accordion(props) {
    return <div>Shitty component</div>
} 

const items = [
    {
        // BTW this is more props, nested props in another component apropscalypse
        title='myTitle',
        iconTitle='myIcon',
        content='myText',
        // etc
    }
];

const ui = <Accordion 
    items={myItems}
    position="a position"
    single
    preventClose={false}
    someEventHandler={() => console.log('myEventHandler')}
    someCssClassName="myClassName"
    moreEventHandler={() => console.log('moreEventHandler')}
    moreConditionProps={false}
    thisIsMadness
/>


/*
Bad solution for maintenability and readibility.
But also for bundle size => Why because you got more logic (and more line of codes) that you really need, 
you have a lots of feats you don't need 
*/
