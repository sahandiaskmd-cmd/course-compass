import { GraduationCap, BookOpen, Award, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <GraduationCap className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Lumina</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <Link to="/">
            <Button
              variant={isActive("/") ? "secondary" : "ghost"}
              className="gap-2"
            >
              <BookOpen className="h-4 w-4" />
              Courses
            </Button>
          </Link>
          <Link to="/my-courses">
            <Button
              variant={isActive("/my-courses") ? "secondary" : "ghost"}
              className="gap-2"
            >
              <User className="h-4 w-4" />
              My Learning
            </Button>
          </Link>
          <Link to="/certificates">
            <Button
              variant={isActive("/certificates") ? "secondary" : "ghost"}
              className="gap-2"
            >
              <Award className="h-4 w-4" />
              Certificates
            </Button>
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
