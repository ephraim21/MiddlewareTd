import React from 'react';
import SideBar from '../SideBar';

const messageData = [
  { id: 1, sender: 'A', content: 'Hey, how are you today?', type: 'received' },
  { id: 2, sender: 'A', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', type: 'received' },
  { id: 3, sender: 'B', content: "I'm okay, what about you?", type: 'sent' },
  { id: 4, sender: 'B', content: 'Lorem ipsum dolor sit amet?', type: 'sent' },
  { id: 5, sender: 'A', content: 'Lorem ipsum dolor sit amet!', type: 'received' },
  { id: 6, sender: 'B', content: 'Lorem ipsum dolor sit amet consectetur adipisicing.', type: 'sent', seen: true },
  // Add more messages as needed
];

function Chats() {
  return (
    <>
      <SideBar />
      <div className="flex flex-col flex-auto h-full p-6">
        <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
          <div className="flex flex-col h-full overflow-x-auto mb-4">
            <div className="flex flex-col h-full">
              <div className="grid grid-cols-12 gap-y-2">
                {messageData.map((msg) => (
                  <div
                    key={msg.id}
                    className={`col-start-${msg.type === 'received' ? 1 : 6} col-end-${msg.type === 'received' ? 8 : 13} p-3 rounded-lg`}
                  >
                    <div className={`flex flex-row items-center ${msg.type === 'sent' ? 'flex-row-reverse' : ''}`}>
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                        {msg.sender}
                      </div>
                      <div className={`relative ${msg.type === 'sent' ? 'mr-3' : 'ml-3'} text-sm ${msg.type === 'sent' ? 'bg-indigo-100' : 'bg-white'} py-2 px-4 shadow rounded-xl`}>
                        <div>{msg.content}</div>
                        {msg.seen && (
                          <div className="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">
                            Seen
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
            <div>
              <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex-grow ml-4">
              <div className="relative w-full">
                <input
                  type="text"
                  className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                />
                <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="ml-4">
              <button className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
                <span>Send</span>
                <span className="ml-2">
                  <svg
                    className="w-4 h-4 transform rotate-45 -mt-px"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chats;
