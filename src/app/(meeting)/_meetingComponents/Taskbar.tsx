"use client";
import { Button } from "@/components/ui/button";
import { Camera, CameraOff, Mic, MicOff } from "lucide-react";
import React, { useState } from "react";

const Taskbar = () => {
  const [cameraState, setCameraState] = useState(true);
  const [micState, setMicState] = useState(true);
  return (
    <div className="flex justify-center bg-background">
      <Button
        className="bg-transparent"
        onClick={() => {
          setCameraState(!cameraState);
        }}
      >
        {cameraState ? (
          <>
            <Camera />
          </>
        ) : (
          <>
            <CameraOff />
          </>
        )}
      </Button>
      <Button
        className="bg-transparent"
        onClick={() => {
          setMicState(!micState);
        }}
      >
        {micState ? (
          <>
            <Mic />
          </>
        ) : (
          <>
            <MicOff />
          </>
        )}
      </Button>
    </div>
  );
};

export default Taskbar;
