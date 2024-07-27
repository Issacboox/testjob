import React, { useState } from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

const SidebarDesktop = ({ navigation, classNames }) => {
  const [showAdditionalItems, setShowAdditionalItems] = useState(false);

  const toggleAdditionalItems = () => {
    setShowAdditionalItems(!showAdditionalItems);
  };

  return (
    <>
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 p-10">
        <div className="flex flex-col items-center gap-4">
          <img
            alt="Profile Avatar"
            src="https://t4.ftcdn.net/jpg/01/34/29/31/360_F_134293169_ymHT6Lufl0i94WzyE0NNMyDkiMCH9HWx.jpg"
            className="rounded-full"
            style={{ width: '180px', height: '180px' }}
          />
          <div>
            <div className="text-sm font-semibold leading-6 font-prompt">นพ. ทดสอบ ระบบแพทย์</div>
            <div className="text-sm text-gray-500 font-prompt">กระทรวงสาธารณสุข กรมควบคุมโรค</div>
          </div>
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-50 text-indigo-500"
                          : "text-gray-700 hover:bg-gray-50 hover:text-indigo-500",
                        "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 font-prompt"
                      )}
                    >
                      <item.icon
                        aria-hidden="true"
                        className={classNames(
                          item.current
                            ? "text-indigo-600"
                            : "text-gray-400 group-hover:text-indigo-600",
                          "h-6 w-6 shrink-0"
                        )}
                      />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <div className="mt-auto">
            <button
              onClick={toggleAdditionalItems}
              className="w-full text-gray-700 hover:bg-gray-50 hover:text-indigo-500 group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 font-prompt"
            >
              <EllipsisHorizontalIcon
                className="h-6 w-6 text-gray-400 group-hover:text-indigo-500"
                aria-hidden="true"
              />
              <span className="text-[1rem]">More Options</span>
            </button>
            {showAdditionalItems && (
              <div className="absolute bottom-[90px] left-[130px] bg-slate-100 p-2 rounded-xl font-prompt">
                <span className="cursor-pointer text-gray-700 hover:bg-gray-50 hover:text-indigo-500 group flex gap-x-3 rounded-md p-2 font-semibold leading-6">
                  บริการอื่นๆ
                </span>
                <span className="cursor-pointer text-gray-700 hover:bg-gray-50 hover:text-indigo-500 group flex gap-x-3 rounded-md p-2 font-semibold leading-6">
                  คำถามที่พบบ่อย
                </span>
                <span className="cursor-pointer text-gray-700 hover:bg-gray-50 hover:text-indigo-500 group flex gap-x-3 rounded-md p-2 font-semibold leading-6">
                  ออกจากระบบ
                </span>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default SidebarDesktop;
