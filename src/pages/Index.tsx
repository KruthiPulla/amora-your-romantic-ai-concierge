import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

import PlanForm, { type PlanFormData } from "@/components/PlanForm";
import DatePlanResult, { type DatePlan } from "@/components/DatePlanResult";
import InspireMe, { type DateIdea } from "@/components/InspireMe";
import { generateMockPlan, generateMockIdeas } from "@/lib/mockData";
import heroBg from "@/assets/hero-bg.jpg";

type View = "splash" | "form" | "result" | "inspire";

const pageTransition = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
  transition: { duration: 0.35, ease: "easeInOut" as const },
};

const Index = () => {
  const [view, setView] = useState<View>("splash");
  const [plan, setPlan] = useState<DatePlan | null>(null);
  const [ideas, setIdeas] = useState<DateIdea[]>([]);
  const [formData, setFormData] = useState<PlanFormData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const simulateLoading = useCallback(async () => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsLoading(false);
  }, []);

  const handlePlanSubmit = useCallback(async (data: PlanFormData) => {
    setFormData(data);
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setPlan(generateMockPlan(data));
    setIsLoading(false);
    setView("result");
  }, []);

  const handleRegenerate = useCallback(async () => {
    if (!formData) return;
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setPlan(generateMockPlan(formData));
    setIsLoading(false);
  }, [formData]);

  const handleInspireMe = useCallback(async () => {
    setIsLoading(true);
    setView("inspire");
    await new Promise((r) => setTimeout(r, 1200));
    setIdeas(generateMockIdeas());
    setIsLoading(false);
  }, []);

  const handleRefreshIdeas = useCallback(async () => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setIdeas(generateMockIdeas());
    setIsLoading(false);
  }, []);

  const handlePlanThis = useCallback((idea: DateIdea) => {
    setView("form");
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden max-w-md mx-auto">
      

      {/* Top gradient overlay */}
      <div className="fixed top-0 left-0 right-0 h-20 bg-gradient-to-b from-background via-background/80 to-transparent z-10 max-w-md mx-auto" />

      <AnimatePresence mode="wait">
        {view === "splash" && (
          <motion.div
            key="splash"
            {...pageTransition}
            className="min-h-screen flex flex-col relative z-[1]"
          >
            {/* Hero Image */}
            <div className="relative h-[55vh] overflow-hidden">
              <img
                src={heroBg}
                alt="Romantic sunset"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-8 -mt-12 relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="w-14 h-14 gradient-romantic rounded-2xl flex items-center justify-center shadow-glow mb-5"
              >
                <Heart className="w-7 h-7 text-primary-foreground" fill="currentColor" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl font-serif font-bold text-foreground text-center"
              >
                Amora
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="text-muted-foreground text-center mt-2 text-sm leading-relaxed max-w-xs"
              >
                Your personal romantic concierge.
                <br />
                <span className="italic">Plan unforgettable dates, effortlessly.</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="w-full space-y-3 mt-8"
              >
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setView("form")}
                  className="w-full gradient-romantic text-primary-foreground py-4 rounded-2xl font-semibold text-sm shadow-glow flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4" />
                  Plan a Date
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={handleInspireMe}
                  className="w-full glass-card py-3.5 rounded-2xl font-medium text-sm text-foreground flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-gold" />
                  Inspire Me
                </motion.button>
              </motion.div>
            </div>

          </motion.div>
        )}

        {view === "form" && (
          <motion.div key="form" {...pageTransition} className="pt-14 relative z-[1]">
            <PlanForm
              onSubmit={handlePlanSubmit}
              onInspireMe={handleInspireMe}
              isLoading={isLoading}
            />
          </motion.div>
        )}

        {view === "result" && plan && (
          <motion.div key="result" {...pageTransition} className="pt-14 relative z-[1]">
            <DatePlanResult
              plan={plan}
              onBack={() => setView("form")}
              onRegenerate={handleRegenerate}
              isLoading={isLoading}
            />
          </motion.div>
        )}

        {view === "inspire" && (
          <motion.div key="inspire" {...pageTransition} className="pt-14 relative z-[1]">
            <InspireMe
              ideas={ideas}
              onBack={() => setView("splash")}
              onPlanThis={handlePlanThis}
              onRefresh={handleRefreshIdeas}
              isLoading={isLoading}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
