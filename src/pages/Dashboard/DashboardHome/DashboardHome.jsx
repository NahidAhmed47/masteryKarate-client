import React from "react";
import useAuth from "../../../hooks/useAuth";
import { Fade } from "react-awesome-reveal";

const DashboardHome = () => {
  const { user } = useAuth();
  return (
    <div className="flex justify-center items-center border-1 w-full h-full">
      <div className="text-2xl md:text-4xl font-kanit font-bold  flex gap-4">
        <Fade delay={1e2} cascade damping={1e-1}>
        Hi, welcome!
        </Fade>
        <Fade delay={1e2}  className="text-primary" cascade damping={1e-1}>
          {user?.displayName}
        </Fade>
      </div>
    </div>
  );
};

export default DashboardHome;
