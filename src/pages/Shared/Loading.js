import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="flex h-screen items-center justify-center ">
        <div
          style={{borderTopColor:'transparent'}}
          className="w-16 h-16 border-4 border-secondary border-double rounded-full animate-spin"
        ></div>
      </div>
    </div>
  );
};

export default Loading;
