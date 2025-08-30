import SettingIcon from "@/icons/SettingIcon";
import HeartIcon from "@/icons/HeartIcon";

function Sidebar() {
  const menuItems = [
    {
      icon: <SettingIcon />,
      title: "Basic",
    },
    {
      icon: <HeartIcon />,
      title: "Thank you page",
    },
  ];

  return (
    <div className="h-screen w-56 bg-[#f6f6f6] flex flex-col items-center">
      <div className="my-10">
        <h2 className="text-2xl font-medium">Select</h2>
      </div>
      <div className="flex flex-col gap-3">
        {menuItems.map((item, index) => (
          <div
            className="flex items-center gap-2 hover:bg-[#dadada] px-5 py-2 cursor-pointer"
            key={index}
          >
            {item.icon}
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
