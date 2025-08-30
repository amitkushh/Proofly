import HeartIcon from "@/icons/HeartIcon";

function ThankYouPage() {
  return (
    <div className="flex mx-3">
      {/* Preview section */}
      <div className="flex flex-col items-center bg-[#f6f6f6] py-10 px-5">
        <h2 className="text-2xl font-medium">Live Preview</h2>
        <div className="border flex flex-col items-center gap-5 my-5 p-4">
          <div className="flex flex-col items-center gap-2">
            <span className="text-4xl font-semibold">Thank you!</span>
            <p className="text-center">
              Thank you so much for your shoutout! It means a ton for us! 🙏
            </p>
          </div>
        </div>
      </div>

      {/* Create section */}
      <div className="bg-[#f6f6f6] mx-3 flex flex-col items-center px-5 py-10">
        <h2 className="text-2xl font-medium">Customize thank you page</h2>
        <p className="text-center mt-3 max-w-[500px]">
          Add your personalized message to show your appreciate
        </p>
        <div className="border flex flex-col items-center gap-5 my-5 p-4 w-full">
          <div>
            <input type="file" />
          </div>
          <div className="flex flex-col w-full">
            <label>Thank you title</label>
            <input
              type="text"
              placeholder="Thank you"
              className="border-gray-700 border py-2 pl-4"
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Thank you message</label>
            <textarea
              placeholder="Thank you message"
              className="border-gray-700 border py-2 pl-4 resize-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThankYouPage;
