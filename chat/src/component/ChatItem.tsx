import React, { FC } from 'react';
import { ChatType } from '../models/IChatType';

interface ChatItemProps {
    chat: ChatType;
}

const ChatItem: FC<ChatItemProps> = ({ chat }) => {
    return (
        <div>
            <h4>{chat.title}</h4>
            <p>{chat.users}</p>
        </div>
    );
};

export default ChatItem;
