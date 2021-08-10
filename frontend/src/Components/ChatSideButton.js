function ChatSideButton() {
  return (
    <div className="bg-gray-200 border border-l-0 border-gray-300 px-5 py-3">
      <div className="flex items-center justify-between">
        <div className=" flex items-center justify-center">
          <input type="checkbox" name="" id="" className="h-10 mr-2" />
          <div className="flex flex-col justify-center">
            <h5 className="text-lg font-medium">Aadil Ghani</h5>
            <p className="text-gray-400">Facebook DM</p>
          </div>
        </div>

        <p>10m</p>
      </div>
      <div>
        <p className="font-medium">Awesome Product</p>
        <p className="text-gray-400">
          Hey There! I probably did one of the bes...
        </p>
      </div>
    </div>
  );
}

export default ChatSideButton;
