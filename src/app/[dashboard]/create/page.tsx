import Sidebar from "@/components/Sidebar";
import CreateSpacePage from "@/components/CreateSpacePage";
import ThankYouPage from "@/components/ThankYoPage";

function Create() {
  return (
    <div className="flex mt-2">
      {/* Sidebar */}
      <Sidebar />
      {/* main page */}

      {/* Create space section */}
      {/* <CreateSpacePage /> */}

      {/* Thank you page */}
      <ThankYouPage />
    </div>
  );
}

export default Create;
