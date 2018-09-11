function Accordion(items, ...props) {
    return <Base {...props}> // Handle the state
        ({ openIndexes, handleOnClick} => 
            {items.map( elt => 
                <AccordionItem direction="myDirection" >
                    <AccordionButton title="myTitle" onClick={() => myClick} />
                    <AccordionContent>
                        {myContens}
                    </AccordionContent>
                </AccordionItem>
            )}
        )
    </Base>
}

function Tabs(items, ...props) {
    return <Base {...props}> // Handle the state
        ({ openIndexes, handleOnClick} => 
            {items.map( elt => 
                <TabItem direction="myDirection" >
                    <TabButton title="myTitle" onClick={() => myClick} />
                    <TabContent>
                        {myContens}
                    </TabContent>
                </TabItem>
            )}
        )
    </Base>
}

/*
Same logic but different render !
*/