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
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" as const },
  }),
};

const InspireMe = ({ ideas, onBack, onPlanThis, onRefresh, isLoading }: InspireMeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="px-5 pb-8 space-y-5"
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="p-2 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors">
          <ArrowLeft className="w-4 h-4 text-foreground" />
        </button>
        <div className="flex-1">
          <h2 className="text-2xl font-serif font-semibold text-foreground flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-gold" />
            Date Ideas
          </h2>
          <p className="text-sm text-muted-foreground">Valentine's inspiration for you</p>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onRefresh}
          disabled={isLoading}
          className="p-2.5 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors"
        >
          <RefreshCw className={`w-4 h-4 text-foreground ${isLoading ? "animate-spin" : ""}`} />
        </motion.button>
      </div>

      {/* Idea Cards */}
      <div className="space-y-4">
        {ideas.map((idea, i) => (
          <motion.div
            key={idea.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="show"
            className="glass-card-strong rounded-2xl p-5 space-y-3 relative overflow-hidden"
          >
            <div className="absolute top-3 right-3 text-3xl opacity-20">{idea.emoji}</div>
            <h3 className="font-serif text-lg font-semibold text-foreground pr-10">{idea.title}</h3>
            <p className="text-sm text-muted-foreground italic leading-relaxed">{idea.description}</p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
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
                  className="px-2.5 py-1 bg-secondary text-secondary-foreground text-[10px] font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => onPlanThis(idea)}
              className="w-full gradient-romantic text-primary-foreground py-3 rounded-xl font-medium text-sm shadow-glow flex items-center justify-center gap-2 mt-2"
            >
              💕 Plan This Date
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default InspireMe;
