import { Message } from "../Message";

export const MessageList = () => {
  return (
    <div className="chat-scrollbar w-full flex-1 min-h-0 overflow-y-auto pr-2">
      <div className="min-h-full flex flex-col justify-end items-end">
        <Message text={"Привет! Как дела?"} time="21:20" />
        <Message text="Привет! Как дела?" time="21:20" />
        {/* <Message text="Всё хорошо!" time="21:21" />
        <Message text="Чем занимаешься?" time="21:22" />
        <Message text="Привет! Как дела?" time="21:20" />
        <Message text="Всё хорошо!" time="21:21" />
        <Message text="Чем занимаешься?" time="21:22" />
        <Message text="Привет! Как дела?" time="21:20" />
        <Message text="Всё хорошо!" time="21:21" />
        <Message text="Чем занимаешься?" time="21:22" />
        <Message text="Привет! Как дела?" time="21:20" />
        <Message text="Всё хорошо!" time="21:21" />
        <Message text="Чем занимаешься?" time="21:22" />
        <Message text="Привет! Как дела?" time="21:20" />
        <Message text="Всё хорошо!" time="21:21" />
        <Message text="Чем занимаешься?" time="21:22" />
        <Message text="Привет! Как дела?" time="21:20" />
        <Message text="Всё хорошо!" time="21:21" />
        <Message text="Чем занимаешься?" time="21:22" /> */}
      </div>
    </div>
  );
};
