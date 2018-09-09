import React from 'react'
import Wrapper from './Wrapper'
import ListItem from './ListItem'

export default () => {
    return (
        <div className="footerMenu">
            <Wrapper>
                <ListItem>about us</ListItem>
                <ListItem>support</ListItem>
                <ListItem>press</ListItem>
                <ListItem>api</ListItem>
                <ListItem>jobs</ListItem>
                <ListItem>privacy</ListItem>
                <ListItem>terms</ListItem>
                <ListItem>profile</ListItem>
                <ListItem>language</ListItem>
            </Wrapper>
            <span>© 2018 INSTAGRAM</span>
        </div>
    )
}
