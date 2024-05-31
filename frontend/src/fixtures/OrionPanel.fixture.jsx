import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../components/mode-toggle";
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
import { Toaster } from "@/components/ui/toaster";


const SeparatorLine = () => {
  return (
    <div className="flex items-center justify-center w-3">
      <svg
        viewBox="0 0 2 30"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        width="1.25px"
        height="30px"
      >
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="30"
          stroke="#868686"
          strokeWidth="1.25"
        />
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

const Icon = ({ Component, iconStroke, glass }) => {
  const {toast}=useToast()
  const handleToast = () => {
    toast({
      title: "Scheduled: Catch up",
      variant: "default",
      description: "Friday, February 10, 2023 at 5:57 PM",
      action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
    });
  };
  if (Component === SeparatorLine) return <Component />;
  return (
    <Button
      onClick={handleToast}
      variant="outline"
      size="icon"
      className={`p-1 border-transparent rounded-full transform-gpu origin-center transition-all duration-100  hover:scale-125 shadow-none ${
        glass
          ? "bg-zinc-100 bg-opacity-[0.02] text-zinc-900 hover:bg-zinc-900 hover:text-white"
          : "bg-transparent text-zinc-300 hover:bg-zinc-800 hover:text-white"
      }`}
    >
      <Component
        strokeWidth={iconStroke || strokeWidth}
        className="text-inherit"
      />
    </Button>
  );
};

const Nebula = ({ iconStroke, gap, glass }) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="h-screen relative flex items-center">
        <div className=" w-full bottom-4 flex justify-center sm:bottom-6 md:bottom-10 transition-all">
          <div
            className={`w-min flex flex-row justify-center items-center px-4 py-3 rounded-full ${
              glass
                ? "bg-zinc-100 backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-50/50"
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
              />
            ))}
          </div>
        </div>
      </div>
      <Toaster />
    </ThemeProvider>
  );
};

export default {
  "Nebula Ribbon Glass": (
    <Nebula iconStroke={strokeWidth} gap={defaultGap} glass />
  ),
  "Nebula Ribbon Black": (
    <Nebula iconStroke={strokeWidth} gap={defaultGap} glass={false} />
  ),
};
