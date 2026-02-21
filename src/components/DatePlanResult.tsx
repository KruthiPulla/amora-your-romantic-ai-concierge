import { motion } from "framer-motion";
import { ArrowLeft, Clock, MapPin, IndianRupee, Heart, RefreshCw, Bookmark, Sparkles, Utensils, Gift } from "lucide-react";

export interface DatePlan {
  title: string;
  tagline: string;
  theme: string;
  timeline: { time: string; activity: string; detail: string; icon: string }[];
  foodRecs: { name: string; type: string; cost: string }[];
  costBreakdown: { item: string; cost: string }[];
  totalCost: string;
  surpriseTips: string[];
}

interface DatePlanResultProps {
  plan: DatePlan;
  onBack: () => void;
  onRegenerate: () => void;
  isLoading: boolean;
}

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const DatePlanResult = ({ plan, onBack, onRegenerate, isLoading }: DatePlanResultProps) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="px-5 pb-8 space-y-5"
    >
      {/* Header */}
      <motion.div variants={item} className="flex items-center gap-3">
        <button onClick={onBack} className="p-2 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors">
          <ArrowLeft className="w-4 h-4 text-foreground" />
        </button>
        <div className="flex-1">
          <h2 className="text-xl font-serif font-semibold text-foreground">{plan.title}</h2>
          <p className="text-sm text-muted-foreground italic">{plan.tagline}</p>
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div variants={item} className="glass-card-strong rounded-2xl p-5 space-y-4">
        <h3 className="flex items-center gap-2 font-serif font-semibold text-foreground">
          <Clock className="w-4 h-4 text-primary" />
          Your Evening Timeline
        </h3>
        <div className="space-y-0">
          {plan.timeline.map((t, i) => (
            <div key={i} className="flex gap-3 relative">
              {i < plan.timeline.length - 1 && (
                <div className="absolute left-[15px] top-8 bottom-0 w-px bg-border" />
              )}
              <div className="w-8 h-8 rounded-full gradient-romantic flex items-center justify-center flex-shrink-0 text-xs z-10">
                {t.icon}
              </div>
              <div className="pb-5">
                <p className="text-xs font-semibold text-primary">{t.time}</p>
                <p className="font-medium text-foreground text-sm">{t.activity}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Food Recommendations */}
      <motion.div variants={item} className="glass-card-strong rounded-2xl p-5 space-y-3">
        <h3 className="flex items-center gap-2 font-serif font-semibold text-foreground">
          <Utensils className="w-4 h-4 text-primary" />
          Food Recommendations
        </h3>
        <div className="space-y-2">
          {plan.foodRecs.map((f, i) => (
            <div key={i} className="flex justify-between items-center bg-secondary/50 rounded-xl px-4 py-3">
              <div>
                <p className="text-sm font-medium text-foreground">{f.name}</p>
                <p className="text-xs text-muted-foreground">{f.type}</p>
              </div>
              <span className="text-xs font-semibold text-primary">{f.cost}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Cost Breakdown */}
      <motion.div variants={item} className="glass-card-strong rounded-2xl p-5 space-y-3">
        <h3 className="flex items-center gap-2 font-serif font-semibold text-foreground">
          <IndianRupee className="w-4 h-4 text-primary" />
          Estimated Budget
        </h3>
        <div className="space-y-2">
          {plan.costBreakdown.map((c, i) => (
            <div key={i} className="flex justify-between text-sm">
              <span className="text-muted-foreground">{c.item}</span>
              <span className="text-foreground font-medium">{c.cost}</span>
            </div>
          ))}
          <div className="border-t border-border pt-2 flex justify-between text-sm font-bold">
            <span className="text-foreground">Total</span>
            <span className="text-primary">{plan.totalCost}</span>
          </div>
        </div>
      </motion.div>

      {/* Surprise Tips */}
      <motion.div variants={item} className="glass-card-strong rounded-2xl p-5 space-y-3">
        <h3 className="flex items-center gap-2 font-serif font-semibold text-foreground">
          <Gift className="w-4 h-4 text-gold" />
          Romantic Surprise Ideas
        </h3>
        <div className="space-y-2">
          {plan.surpriseTips.map((tip, i) => (
            <div key={i} className="flex items-start gap-2">
              <Heart className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">{tip}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Actions */}
      <motion.div variants={item} className="flex gap-3 pt-2">
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={onRegenerate}
          disabled={isLoading}
          className="flex-1 bg-secondary text-secondary-foreground py-3.5 rounded-2xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-secondary/80 transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
          Regenerate
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.97 }}
          className="flex-1 gradient-romantic text-primary-foreground py-3.5 rounded-2xl font-medium text-sm flex items-center justify-center gap-2 shadow-glow"
        >
          <Bookmark className="w-4 h-4" />
          Save Plan
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default DatePlanResult;
