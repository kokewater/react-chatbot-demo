import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import NoProfile from '../assets/img/no-profile.png'
import AnimalPig from '../assets/img/animal-pig.png'

const Chat = (props) => {
    const isQuestion = (props.type === 'question')
    const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse'

    return(
        <ListItem>
            <ListItemAvatar>
                {isQuestion ? (
                    <Avatar alt="icon" src={AnimalPig} />
                ) : (
                    <Avatar alt="icon" src={NoProfile} />
                )}
                
            </ListItemAvatar>
            <div className="p-chat__babble">
                {props.text}
            </div>
        </ListItem>
    )
}

export default Chat