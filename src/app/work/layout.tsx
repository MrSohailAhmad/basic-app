import React from "react";

const WorkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>WorkLayout for nested work pages</div>

      <div>{children}</div>
    </div>
  );
};

export default WorkLayout;
