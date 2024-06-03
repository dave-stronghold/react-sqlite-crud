import { Button } from "@/components/ui/button";
import {
  Bird,
  Share,
  Keyboard,
  LocateFixed,
  ThermometerSun,
  Backpack,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { motion } from "framer-motion";
import { useState } from "react";
const SeparatorLine = () => {
  return (
    <div className="flex w-4 items-center justify-center">
      <svg
        viewBox="0 0 2 30"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        width="1.25px"
        height="30px"
      >
        <path d="M1 0, L1 30" stroke="#868686" strokeWidth="1.25" />
      </svg>
    </div>
  );
};

const strokeWidth = 1.2;
const defaultGap = 2;
const icons = [
  { Component: Bird, key: "bird" },
  { Component: SeparatorLine, key: "line" },
  { Component: LocateFixed, key: "locate-fixed" },
  { Component: Share, key: "share" },
  { Component: ThermometerSun, key: "thermometer-sun" },
  { Component: SeparatorLine, key: "liner" },
  { Component: Keyboard, key: "keyboard" },
  { Component: Backpack, key: "backpack" },
];

const Icon = ({ Component, iconStroke, glass, engage }) => {
  const { toast } = useToast();
  const handleToast = () => {
    toast({
      title: "Scheduled: Catch up",
      variant: "default",
      description: "Friday, February 10, 2023 at 5:57 PM",
      action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
    });
  };
  const handleClick = Component === Keyboard ? handleToast : undefined;
  if (Component === SeparatorLine) return <Component />;

  return (
    <motion.div
      // onMouseEnter={addWillChange}
      // onMouseLeave={removeWillChange}
      whileHover={{
        // scale: (1, 1.2, 1.2),
        translateY: -1.4,
        
        transition: { duration: 0.2 },
      }}
      onClick={handleClick}
      variant="outline"
      size="icon"
      className={`origin-center rounded-full border-transparent p-1 shadow-none ${
        glass
          ? "bg-zinc-100 bg-opacity-[0.02] text-zinc-900 hover:bg-zinc-900 hover:text-white"
          : "bg-transparent text-zinc-300 hover:bg-zinc-800 hover:text-white"
      }`}
    >
      <Component
        strokeWidth={iconStroke || strokeWidth}
        className="text-inherit"
      />
    </motion.div>
  );
};

export const Nebula = ({ iconStroke, gap, glass }) => {
  const [engage, setEngage] = useState(false);
  return (
    <div className="relative flex h-screen items-center">
      <div className="bottom-4 flex w-full justify-center transition-all sm:bottom-6 md:bottom-10">
        <div
          onMouseEnter={() => setEngage(true)}
          onMouseLeave={() => setEngage(false)}
          className={`flex w-min flex-row items-center justify-center rounded-full px-4 py-3 ${
            glass
              ? "border border-gray-50/50 bg-zinc-100 bg-opacity-40 backdrop-blur-md backdrop-filter"
              : "bg-zinc-950"
          }`}
          style={{ gap: `${gap * 0.25}rem` }} // Tailwind gap unit conversion
        >
          {icons.map(({ Component, key }) => (
            <Icon
              key={key}
              glass={glass}
              Component={Component}
              iconStroke={iconStroke}
              engage={engage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
