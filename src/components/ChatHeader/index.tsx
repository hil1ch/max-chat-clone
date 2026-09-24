interface IChatHeader {
  name: string;
}

export const ChatHeader = ({ name }: IChatHeader) => {
  return (
    <div className="bg-white py-3 px-4 border-b border-[#0c0d0e0f] rounded-t-2xl rounded-b-lg text-left mb-4">
      <h2 className="font-semibold">{name}</h2>
    </div>
  );
};
