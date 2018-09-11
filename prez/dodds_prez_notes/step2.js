function Accordion(items, ...props) {
    return <Base {...props}> // Handle the state
        ({ openIndexes, handleOnClick} => 
            {items.map( elt => 
                <Item direction="myDirection" >
                    <Button title="myTitle" onClick={() => myClick} />
                    <Content>
                        {myContens}
                    </Content>
                </Item>
            )}
        )
    </Base>
}