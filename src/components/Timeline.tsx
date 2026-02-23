import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ScheduleItem } from '../data/schedule';
import { cn } from '../lib/utils';

interface TimelineProps {
  items: ScheduleItem[];
  activeItemId: string | null;
}

export function Timeline({ items, activeItemId }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeItemRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to active item
  useEffect(() => {
    if (activeItemRef.current && containerRef.current) {
      activeItemRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [activeItemId]);

  return (
    <div 
      ref={containerRef}
      className="h-full overflow-y-auto scrollbar-hide py-[40vh] px-6 relative"
      style={{ scrollBehavior: 'smooth' }}
    >
      <div className="space-y-6 relative">
        {/* Vertical Line */}
        <div className="absolute left-[4.5rem] top-0 bottom-0 w-px bg-white/5" />

        {items.map((item) => {
          const isActive = item.id === activeItemId;
          const isPast = !isActive && item.id < (activeItemId || ''); // Simple string comparison works for sequential IDs, but better logic exists. 
          // Actually, let's rely on the parent to pass "status" or just infer from ID if they are sorted.
          // For now, we'll just check if it's active.

          return (
            <motion.div
              key={item.id}
              ref={isActive ? activeItemRef : null}
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0.4,
                scale: isActive ? 1.05 : 1,
                x: isActive ? 10 : 0,
              }}
              className={cn(
                "flex items-center gap-6 group transition-all duration-500",
                isActive ? "text-white" : "text-slate-400"
              )}
            >
              {/* Time */}
              <div className="w-16 text-right font-mono text-sm tracking-wider">
                {item.startTime}
              </div>

              {/* Dot */}
              <div className="relative flex items-center justify-center w-4">
                <motion.div 
                  className={cn(
                    "w-3 h-3 rounded-full border-2 transition-colors duration-500 z-10",
                    isActive 
                      ? "bg-purple-500 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.6)]" 
                      : "bg-[#0f1115] border-slate-700 group-hover:border-slate-500"
                  )}
                >
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-purple-500"
                      animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              </div>

              {/* Content Card */}
              <div 
                className={cn(
                  "flex-1 p-4 rounded-xl border transition-all duration-500 backdrop-blur-sm",
                  isActive 
                    ? "bg-white/5 border-purple-500/30 shadow-lg shadow-purple-900/10" 
                    : "bg-transparent border-transparent group-hover:bg-white/5 group-hover:border-white/5"
                )}
              >
                <h3 className={cn(
                  "font-medium transition-all duration-300",
                  isActive ? "text-lg text-purple-100" : "text-base"
                )}>
                  {item.title}
                </h3>
                {isActive && item.description && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-sm text-slate-400 mt-1"
                  >
                    {item.description}
                  </motion.p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
