import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import useTheme from "../../hooks/useTheme";

const CountInView = ({ start, end, duration }) => {
    const {isDarkMode} = useTheme();
  const [ref, inView] = useInView({ triggerOnce: false });
  return (
    <div ref={ref}>
      {inView ? (
        <div className={`text-2xl md:text-4xl font-extrabold flex items-center gap-1 justify-center md:justify-end ${isDarkMode ? 'text-slate-300' : ''}`}><CountUp start={start} end={end} duration={duration} /><span className="text-primary text-lg">+</span></div>
      ) : (
        <div className="text-3xl md:text-5xl font-bold">0</div>
      )}
    </div>
  );
};

export default CountInView;