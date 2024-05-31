import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../components/mode-toggle";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";

const Node = ({label}) => {
  const { toast } = useToast();
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex w-full h-screen justify-center gap-2 bg-muted/40 items-center">
        <ModeToggle />
        <Button
          onClick={() => {
            toast({
              title: "Scheduled: Catch up",
              variant:"default",
              description: "Friday, February 10, 2023 at 5:57 PM",
              action: (
                <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
              ),
            });
          }}
        >
          {label||'Click Me'}
        </Button>
      </div>
      <Toaster />
    </ThemeProvider>
  );
};

export default {
  'Customisable Button': <Node label='' />,
  'Customisable Button 2': <Node label='Liverpool' />,
};
