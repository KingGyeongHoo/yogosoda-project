'use client';
import yogo from '@devShared/images/chatBot/yogo.svg';
import send from '@devShared/images/chatBot/send.svg';
import React, { useEffect, useRef, useState } from 'react';
import { MessageType } from '@devfeatures/chatBot/chatting/api';
import { UseSendMessage } from '@devfeatures/chatBot/chatting/model';
import { StartMessage } from '@devShared/constants/chatBot/message';
import ChatBotMessage from '@devWidgets/chatBot/botMessage/ChatBotMessage';
import Chatting from '@devWidgets/chatBot/chatting/Chatting';
import { ReactComponent as RightArrow } from '@devShared/svg/chevron-right-solid.svg';
import { useRouter } from 'next/navigation';

const Yogo = () => {
    const router = useRouter();
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const [inputMessage, setInputMessage] = useState<string>('');

    const [messages, setMessages] = useState<MessageType[]>([]);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const { event, state } = UseSendMessage({
        messages,
        setMessages,
        inputMessage,
        setInputMessage,
    });

    return (
        <div className={'max-h-screen block overflow-hidden'}>
            <header className={'relative w-full h-[5rem] item-center'}>
                <div
                    className="absolute top-1/2 left-4 w-fit h-4 -translate-y-1/2"
                    onClick={() => router.back()}
                >
                    <RightArrow
                        width={24}
                        height={24}
                        fill="black"
                        className="rotate-180"
                    />
                </div>
                <img src={yogo} alt={'요고봇'} width={100} height={50} />
            </header>
            <main
                className={
                    'block border-t-2 overflow-auto no-scrollbar px-[1.5rem] pb-[1.5rem]'
                }
                style={{
                    height: 'calc(100vh - 10.5rem)',
                }}
            >
                <ChatBotMessage text={StartMessage} />
                <Chatting messages={messages} />
                {state && <ChatBotMessage text={''} loading={state} />}
                <div ref={messagesEndRef} />
            </main>
            <footer
                className={
                    'w-full h-[5.5rem] flex-with-row item-center gap-4 p-4'
                }
            >
                <textarea
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            if (state || inputMessage.trim() === '') {
                                return;
                            }
                            event();
                        }
                    }}
                    disabled={state}
                    placeholder="메시지를 입력해주세요."
                    className="h-[3rem] flex-1 p-3 pl-5 border-none rounded-full focus:outline-none resize-none overflow-y-auto bg-[#DDD] disabled:opacity-50 font-neo-rg text[#7C7C7C]"
                />
                <button
                    onClick={event}
                    className="h-[3rem] w-[3rem] rounded-full bg-[#DDD] disabled:opacity-50 relative"
                    disabled={inputMessage.trim() === '' || state}
                >
                    <img
                        src={send}
                        alt={'전송'}
                        className={
                            'w-[2.2rem] absolute top-[55%] left-[45%] transform -translate-x-1/2 -translate-y-1/2'
                        }
                    />
                </button>
            </footer>
        </div>
    );
};

export default Yogo;
