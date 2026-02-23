import { motion } from "framer-motion";
import { ArrowLeft, RefreshCw, Sparkles, IndianRupee, Clock } from "lucide-react";

export interface DateIdea {
  id: string;
  title: string;
  description: string;
  budget: string;
  duration: string;
  tags: string[];
  emoji: string;
}

interface InspireMeProps {
  ideas: DateIdea[];
  onBack: () => void;
  onPlanThis: (idea: DateIdea) => void;
  onRefresh: () => void;
  isLoading: boolean;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" as const },
  }),
};

const InspireMe = ({ ideas, onBack, onPlanThis, onRefresh, isLoading }: InspireMeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="px-5 pb-8 space-y-4"
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="p-2 rounded-xl bg-secondary/60 transition-colors">
          <ArrowLeft className="w-4 h-4 text-foreground" />
        </button>
        <div className="flex-1">
          <h2 className="text-lg font-serif font-semibold text-foreground flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-accent" />
            Date Ideas
          </h2>
          <p className="text-xs text-muted-foreground">Valentine's inspiration</p>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onRefresh}
          disabled={isLoading}
          className="p-2 rounded-xl bg-secondary/60 transition-colors"
        >
          <RefreshCw className={`w-3.5 h-3.5 text-foreground ${isLoading ? "animate-spin" : ""}`} />
        </motion.button>
      </div>

      {/* Idea Cards */}
      <div className="space-y-3">
        {ideas.map((idea, i) => (
          <motion.div
            key={idea.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="show"
            className="bg-card rounded-2xl p-4 border border-border space-y-2.5"
          >
            <div className="flex items-start justify-between">
              <h3 className="font-serif text-base font-semibold text-foreground">{idea.title}</h3>
              <span className="text-xl opacity-30">{idea.emoji}</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{idea.description}</p>
            <div className="flex items-center gap-4 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1">
                <IndianRupee className="w-3 h-3" />
                {idea.budget}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {idea.duration}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {idea.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-secondary/50 text-muted-foreground text-[10px] rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => onPlanThis(idea)}
              className="w-full gradient-romantic text-primary-foreground py-2.5 rounded-xl text-sm flex items-center justify-center gap-1.5 mt-1"
            >
              Plan This Date
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default InspireMe;
