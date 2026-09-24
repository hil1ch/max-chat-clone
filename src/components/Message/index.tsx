interface IMessage {
  text: string;
  time: string;
}

export const Message = ({ text, time }: IMessage) => {
  return (
    <div className="relative pt-2 px-2.5 pb-2.5 bg-[#e9fdff] max-w-3/4 w-fit mb-1 flex justify-self-end rounded-2xl text-left text-[#011c29]">
      <p className="wrap-break-word whitespace-pre-wrap after:inline-block after:h-(--metaHeight) after:w-8 after:content-['']">
        {text}
      </p>
      <span className="text-[#0784b8] text-[11px] absolute bottom-1 right-2.5">
        {time}
      </span>
    </div>
  );
};
