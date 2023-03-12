import { useState } from "react";
function ChatLive() {
  // Tạo 1 state để quản lý xem khung chat có được hiển thị hay không
  //---------------------------------------------------------------------------------------------------------------------------

  const [show_livechat, setShow_livechat] = useState(false);

  return (
    <div>
      <button
        className=" live_chat border-0"
        onClick={() => {
          setShow_livechat(!show_livechat);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="gray"
          class="bi bi-messenger"
          viewBox="0 0 16 16"
        >
          <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />
        </svg>
      </button>

      {show_livechat && (
        <div
          className="w-25 border border-secondary rounded border-0 shadow  bg-light"
          id="box_chat"
        >
          <div className="d-flex justify-content-between px-4 py-3">
            <h2 className="text-dark">Customer Support</h2>
            <button className="border-0 bg-secondary px-3">
              Lets Chat App
            </button>
          </div>
          <div className="mt-5 box-chat px-5">
            <div className="container d-flex justify-content-end">
              <p className="bg-primary text-light d-inline userchat rounded p-2">
                Xin chào
              </p>
            </div>
            <div className="container d-flex justify-content-end">
              <p className=" bg-primary text-light d-inline userchat rounded p-2">
                Làm thế nào để xem các sản phẩm
              </p>
            </div>
            <div className="container d-flex justify-content-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="primary"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
                className="mx-2"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
              <p className="bg-secondary text-light d-inline userchat rounded p-2">
                ADMIN: chào bạn
              </p>
            </div>
            <div className="container d-flex justify-content-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="primary"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
                className="mx-2"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
              <p className="bg-secondary text-light d-inline userchat rounded p-2">
                ADMIN: Bạn có thể vào mục Shop để xem các sản phẩm
              </p>
            </div>
            <div className="p-5"></div>
          </div>
          <div className="container d-flex px-5 py-4  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="primary"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
              className="mx-2"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
            <input placeholder="Enter Message!" className="w-75 p-2" />
            <button className="border-0 mx-2 bg-transparent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="gray"
                class="bi bi-link"
                viewBox="0 0 16 16"
              >
                <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
              </svg>
            </button>
            <button className="border-0 mx-2 bg-transparent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="gray"
                class="bi bi-emoji-laughing"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z" />
              </svg>
            </button>
            <button className="border-0 mx-2 bg-transparent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="blue"
                class="bi bi-send"
                viewBox="0 0 16 16"
              >
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatLive;
