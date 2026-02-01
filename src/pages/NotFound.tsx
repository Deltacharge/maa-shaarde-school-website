import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Oops! The page you're looking for seems to have wandered off. Let's get you back on track.
        </p>
        <Link to="/">
          <Button variant="hero" size="lg">
            <Home className="w-5 h-5" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
