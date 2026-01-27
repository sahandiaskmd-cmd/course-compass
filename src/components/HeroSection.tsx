import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/70" />
      
      <div className="container relative mx-auto px-4 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground">
            Start Learning Today
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-secondary-foreground md:text-5xl lg:text-6xl">
            Unlock Your Potential with Expert-Led Courses
          </h1>
          <p className="mb-8 text-lg text-secondary-foreground/80 md:text-xl">
            Join thousands of learners mastering new skills. Get certified and advance your career with our comprehensive learning platform.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2">
              Browse Courses
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-secondary-foreground/30 bg-secondary-foreground/10 text-secondary-foreground hover:bg-secondary-foreground/20">
              <Play className="h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-8">
            <div>
              <div className="text-3xl font-bold text-secondary-foreground">500+</div>
              <div className="text-sm text-secondary-foreground/70">Courses</div>
            </div>
            <div className="h-10 w-px bg-secondary-foreground/20" />
            <div>
              <div className="text-3xl font-bold text-secondary-foreground">50k+</div>
              <div className="text-sm text-secondary-foreground/70">Students</div>
            </div>
            <div className="h-10 w-px bg-secondary-foreground/20" />
            <div>
              <div className="text-3xl font-bold text-secondary-foreground">95%</div>
              <div className="text-sm text-secondary-foreground/70">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
