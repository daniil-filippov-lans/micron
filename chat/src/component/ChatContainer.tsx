import React, { FC } from 'react';
import { ChatType } from '../models/IChatType';
import ChatItem from './ChatItem';

interface ChatContainerProps {
    chats: ChatType[];
}

const ChatContainer: FC<ChatContainerProps> = ({ chats }) => {
    return (
        <>
            {chats.map((chat) => (
                <ChatItem key={chat.title} chat={chat} />
            ))}
        </>
    );
};

export default ChatContainer;
