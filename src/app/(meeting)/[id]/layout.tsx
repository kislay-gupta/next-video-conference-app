import React from "react";
import Taskbar from "../_meetingComponents/Taskbar";

const MeetingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=" relative">
      Navbar
      <div className="flex justify-between mx-auto">
        LeftSideBar
        <section className="flex h-96 px-24 justify-center ">
          <div className="mx-auto w-full ">{children}</div>
        </section>
        <div className="">Chat</div>
      </div>
      <div className=" mb-8">
        <Taskbar />
      </div>
    </main>
  );
};

export default MeetingLayout;
