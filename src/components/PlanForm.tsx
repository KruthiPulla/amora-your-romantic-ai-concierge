import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, IndianRupee, Heart, Sparkles, Send, MessageCircle } from "lucide-react";

const themes = [
  { id: "romantic", label: "Romantic", icon: "💕" },
  { id: "adventurous", label: "Adventurous", icon: "🌄" },
  { id: "foodie", label: "Foodie", icon: "🍽️" },
  { id: "chill", label: "Chill", icon: "☕" },
  { id: "luxury", label: "Luxury", icon: "✨" },
  { id: "surprise", label: "Surprise Me", icon: "🎁" },
];

const budgetOptions = [
  { label: "₹500–1,000", value: "500-1000" },
  { label: "₹1,000–2,500", value: "1000-2500" },
  { label: "₹2,500–5,000", value: "2500-5000" },
  { label: "₹5,000–10,000", value: "5000-10000" },
  { label: "₹10,000+", value: "10000+" },
];

export interface PlanFormData {
  city: string;
  date: string;
  time: string;
  budget: string;
  theme: string;
  specialRequests: string;
}

interface PlanFormProps {
  onSubmit: (data: PlanFormData) => void;
  onInspireMe: () => void;
  isLoading: boolean;
}

const PlanForm = ({ onSubmit, onInspireMe, isLoading }: PlanFormProps) => {
  const [form, setForm] = useState<PlanFormData>({
    city: "",
    date: "",
    time: "",
    budget: "",
    theme: "",
    specialRequests: "",
  });

  const update = (key: keyof PlanFormData, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const canSubmit = form.city && form.date && form.time && form.budget && form.theme;

  const handleSubmit = () => {
    if (canSubmit) onSubmit(form);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-5 pb-8 space-y-5"
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl font-serif font-semibold text-foreground">
          Plan Your Date
        </h2>
        <p className="text-muted-foreground text-sm mt-1">
          Tell us about your perfect evening
        </p>
      </div>

      {/* City */}
      <div className="glass-card rounded-2xl p-4 space-y-2">
        <label className="flex items-center gap-2 text-sm font-medium text-foreground">
          <MapPin className="w-4 h-4 text-primary" />
          City / Place
        </label>
        <input
          type="text"
          placeholder="e.g., Mumbai, Jaipur, Delhi..."
          value={form.city}
          onChange={(e) => update("city", e.target.value)}
          className="w-full bg-background/50 rounded-xl px-4 py-3 text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all placeholder:text-muted-foreground/50"
        />
      </div>

      {/* Date & Time */}
      <div className="grid grid-cols-2 gap-3">
        <div className="glass-card rounded-2xl p-4 space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Calendar className="w-4 h-4 text-primary" />
            Date
          </label>
          <input
            type="date"
            value={form.date}
            onChange={(e) => update("date", e.target.value)}
            className="w-full bg-background/50 rounded-xl px-3 py-3 text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
          />
        </div>
        <div className="glass-card rounded-2xl p-4 space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Clock className="w-4 h-4 text-primary" />
            Start Time
          </label>
          <input
            type="time"
            value={form.time}
            onChange={(e) => update("time", e.target.value)}
            className="w-full bg-background/50 rounded-xl px-3 py-3 text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
          />
        </div>
      </div>

      {/* Budget */}
      <div className="glass-card rounded-2xl p-4 space-y-3">
        <label className="flex items-center gap-2 text-sm font-medium text-foreground">
          <IndianRupee className="w-4 h-4 text-primary" />
          Budget
        </label>
        <div className="flex flex-wrap gap-2">
          {budgetOptions.map((b) => (
            <button
              key={b.value}
              onClick={() => update("budget", b.value)}
              className={`px-3 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                form.budget === b.value
                  ? "gradient-romantic text-primary-foreground shadow-glow scale-105"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {b.label}
            </button>
          ))}
        </div>
      </div>

      {/* Theme */}
      <div className="glass-card rounded-2xl p-4 space-y-3">
        <label className="flex items-center gap-2 text-sm font-medium text-foreground">
          <Heart className="w-4 h-4 text-primary" />
          Date Theme
        </label>
        <div className="grid grid-cols-3 gap-2">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => update("theme", t.id)}
              className={`flex flex-col items-center gap-1 py-3 px-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                form.theme === t.id
                  ? "gradient-romantic text-primary-foreground shadow-glow scale-105"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              <span className="text-lg">{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Special Requests */}
      <div className="glass-card rounded-2xl p-4 space-y-2">
        <label className="flex items-center gap-2 text-sm font-medium text-foreground">
          <MessageCircle className="w-4 h-4 text-primary" />
          Special Requests <span className="text-muted-foreground">(optional)</span>
        </label>
        <textarea
          rows={3}
          placeholder="e.g., Rooftop preferred, vegetarian food only, no crowded places..."
          value={form.specialRequests}
          onChange={(e) => update("specialRequests", e.target.value)}
          className="w-full bg-background/50 rounded-xl px-4 py-3 text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none placeholder:text-muted-foreground/50"
        />
      </div>

      {/* Actions */}
      <div className="space-y-3 pt-2">
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={handleSubmit}
          disabled={!canSubmit || isLoading}
          className="w-full gradient-romantic text-primary-foreground py-4 rounded-2xl font-semibold text-sm shadow-glow flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
          ) : (
            <>
              <Send className="w-4 h-4" />
              Generate My Date Plan
            </>
          )}
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={onInspireMe}
          className="w-full bg-secondary text-secondary-foreground py-3.5 rounded-2xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-secondary/80 transition-colors"
        >
          <Sparkles className="w-4 h-4" />
          Inspire Me ✨
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PlanForm;
