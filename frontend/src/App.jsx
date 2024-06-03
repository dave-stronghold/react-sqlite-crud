import { Toaster } from "@/components/ui/toaster";
import { Nebula } from "./components/controls-bar";
// import GlobalStyles from "./GlobalStyles";


import Test from "./test";

export default function App() {
  return (
    <div>
      {/* <GlobalStyles /> */}
      <Test />
      {/* <Nebula iconStroke={1.2} glass={true} gap={2} /> */}
      <Toaster />
    </div>
  );
}
