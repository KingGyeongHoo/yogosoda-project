import bot from '@devShared/images/chatBot/yogobot_image.svg';
import React, { memo } from 'react';
import Message from '@devWidgets/chatBot/message/Message';

const ChatBotMessage = ({
    text,
    time,
    loading = false,
}: ChatBotMessageProps) => {
    return (
        <div
            className={
                'flex-with-row justify-items-start gap-2.5 max-w-full mt-7'
            }
        >
            <img src={bot} alt={'챗봇'} className={'w-[3rem] h-[3rem]'} />
            <div
                className={'font-[1rem] font-neo-bd flex-with-col gap-2 flex-1'}
            >
                <div>요고봇</div>
                <Message
                    text={text}
                    type={'model'}
                    time={time}
                    loading={loading}
                />
            </div>
        </div>
    );
};

export default memo(ChatBotMessage);

type ChatBotMessageProps = {
    text: string;
    loading?: boolean;
    time?: string;
};
