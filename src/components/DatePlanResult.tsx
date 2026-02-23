import { motion } from "framer-motion";
import { ArrowLeft, Clock, IndianRupee, RefreshCw, Bookmark, Utensils, Gift, MapPin } from "lucide-react";

export interface DatePlan {
  title: string;
  tagline: string;
  description: string;
  theme: string;
  timeline: { time: string; activity: string; detail: string; icon: string }[];
  foodRecs: { name: string; type: string; cost: string; address?: string }[];
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
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const DatePlanResult = ({ plan, onBack, onRegenerate, isLoading }: DatePlanResultProps) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="px-5 pb-8 space-y-4"
    >
      {/* Header */}
      <motion.div variants={item} className="flex items-center gap-3">
        <button onClick={onBack} className="p-2 rounded-xl bg-secondary/60 transition-colors">
          <ArrowLeft className="w-4 h-4 text-foreground" />
        </button>
        <div className="flex-1">
          <h2 className="text-lg font-serif font-semibold text-foreground">{plan.title}</h2>
          <p className="text-xs text-muted-foreground">{plan.tagline}</p>
        </div>
      </motion.div>

      {/* Description */}
      <motion.div variants={item} className="bg-card rounded-2xl p-4 border border-border">
        <p className="text-sm text-foreground/80 leading-relaxed">{plan.description}</p>
      </motion.div>

      {/* Timeline */}
      <motion.div variants={item} className="bg-card rounded-2xl p-4 border border-border space-y-3">
        <h3 className="flex items-center gap-2 text-sm font-serif font-semibold text-foreground">
          <Clock className="w-3.5 h-3.5 text-primary" />
          Timeline
        </h3>
        <div className="space-y-0">
          {plan.timeline.map((t, i) => (
            <div key={i} className="flex gap-3 relative">
              {i < plan.timeline.length - 1 && (
                <div className="absolute left-[13px] top-7 bottom-0 w-px bg-border" />
              )}
              <div className="w-[26px] h-[26px] rounded-full bg-secondary flex items-center justify-center flex-shrink-0 text-xs z-10">
                {t.icon}
              </div>
              <div className="pb-4 flex-1">
                <p className="text-[11px] font-medium text-primary">{t.time}</p>
                <p className="font-medium text-foreground text-sm">{t.activity}</p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Food Recommendations */}
      <motion.div variants={item} className="bg-card rounded-2xl p-4 border border-border space-y-3">
        <h3 className="flex items-center gap-2 text-sm font-serif font-semibold text-foreground">
          <Utensils className="w-3.5 h-3.5 text-primary" />
          Where to Eat
        </h3>
        <div className="space-y-2">
          {plan.foodRecs.map((f, i) => (
            <div key={i} className="flex justify-between items-start bg-secondary/30 rounded-xl px-3 py-2.5">
              <div>
                <p className="text-sm font-medium text-foreground">{f.name}</p>
                <p className="text-[11px] text-muted-foreground">{f.type}</p>
                {f.address && (
                  <p className="text-[11px] text-muted-foreground/70 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-2.5 h-2.5" />
                    {f.address}
                  </p>
                )}
              </div>
              <span className="text-xs font-medium text-primary">{f.cost}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Cost Breakdown */}
      <motion.div variants={item} className="bg-card rounded-2xl p-4 border border-border space-y-2">
        <h3 className="flex items-center gap-2 text-sm font-serif font-semibold text-foreground">
          <IndianRupee className="w-3.5 h-3.5 text-primary" />
          Budget
        </h3>
        <div className="space-y-1.5">
          {plan.costBreakdown.map((c, i) => (
            <div key={i} className="flex justify-between text-xs">
              <span className="text-muted-foreground">{c.item}</span>
              <span className="text-foreground">{c.cost}</span>
            </div>
          ))}
          <div className="border-t border-border pt-1.5 flex justify-between text-sm font-semibold">
            <span className="text-foreground">Total</span>
            <span className="text-primary">{plan.totalCost}</span>
          </div>
        </div>
      </motion.div>

      {/* Surprise Tips */}
      <motion.div variants={item} className="bg-card rounded-2xl p-4 border border-border space-y-2">
        <h3 className="flex items-center gap-2 text-sm font-serif font-semibold text-foreground">
          <Gift className="w-3.5 h-3.5 text-accent" />
          Surprise Ideas
        </h3>
        <div className="space-y-1.5">
          {plan.surpriseTips.map((tip, i) => (
            <p key={i} className="text-xs text-muted-foreground pl-1">• {tip}</p>
          ))}
        </div>
      </motion.div>

      {/* Actions */}
      <motion.div variants={item} className="flex gap-3 pt-1">
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={onRegenerate}
          disabled={isLoading}
          className="flex-1 bg-secondary/60 text-foreground py-3 rounded-2xl text-sm flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`} />
          Regenerate
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.97 }}
          className="flex-1 gradient-romantic text-primary-foreground py-3 rounded-2xl text-sm flex items-center justify-center gap-2"
        >
          <Bookmark className="w-3.5 h-3.5" />
          Save Plan
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default DatePlanResult;
