import { Toaster } from "@/components/ui/toaster";
import {Nebula} from "./components/controls-bar";
export default function App() {
  return (
    <div>
      <Nebula iconStroke={1.2} glass={false} gap={2} />
      <Toaster />
    </div>
  );
}
