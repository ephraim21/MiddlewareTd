import React from 'react'

function SideBar() {
  return (
<div class="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
            <div class="flex flex-row items-center justify-center h-12 w-full">
              <div
                class="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  ></path>
                </svg>
              </div>
              <div class="ml-2 font-bold text-2xl">QuickChat</div>
            </div>
            <div
              class="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg"
            >
              <div class="h-20 w-20 rounded-full border overflow-hidden">
                <img
                  src="https://avatars3.githubusercontent.com/u/2763884?s=128"
                  alt="Avatar"
                  class="h-full w-full"
                />
              </div>
              <div class="text-sm font-semibold mt-2">Aminos Co.</div>
              <div class="text-xs text-gray-500">Lead UI/UX Designer</div>
              <div class="flex flex-row items-center mt-3">
                <div
                  class="flex flex-col justify-center h-4 w-8 bg-indigo-500 rounded-full"
                >
                  <div class="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
                </div>
                <div class="leading-none ml-1 text-xs">Active</div>
              </div>
            </div>
            <div class="flex flex-col mt-8">
              <div class="flex flex-row items-center justify-between text-xs">
                <span class="font-bold">Active Conversations</span>
                <span
                  class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full"
                  >4</span
                >
              </div>
              <div class="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
                <button
                  class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                >
                  <div
                    class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full"
                  >
                    H
                  </div>
                  <div class="ml-2 text-sm font-semibold">Henry Boyd</div>
                </button>
                <button
                  class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                >
                  <div
                    class="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full"
                  >
                    M
                  </div>
                  <div class="ml-2 text-sm font-semibold">Marta Curtis</div>
                  <div
                    class="flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none"
                  >
                    2
                  </div>
                </button>
                <button
                  class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                >
                  <div
                    class="flex items-center justify-center h-8 w-8 bg-orange-200 rounded-full"
                  >
                    P
                  </div>
                  <div class="ml-2 text-sm font-semibold">Philip Tucker</div>
                </button>
                <button
                  class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                >
                  <div
                    class="flex items-center justify-center h-8 w-8 bg-pink-200 rounded-full"
                  >
                    C
                  </div>
                  <div class="ml-2 text-sm font-semibold">Christine Reid</div>
                </button>
                <button
                  class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                >
                  <div
                    class="flex items-center justify-center h-8 w-8 bg-purple-200 rounded-full"
                  >
                    J
                  </div>
                  <div class="ml-2 text-sm font-semibold">Jerry Guzman</div>
                </button>
              </div>
              <div class="flex flex-row items-center justify-between text-xs mt-6">
                <span class="font-bold">Archivied</span>
                <span
                  class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full"
                  >7</span
                >
              </div>
              <div class="flex flex-col space-y-1 mt-4 -mx-2">
                <button
                  class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                >
                  <div
                    class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full"
                  >
                    H
                  </div>
                  <div class="ml-2 text-sm font-semibold">Henry Boyd</div>
                </button>
              </div>
            </div>
          </div>
  )
}

export default SideBar