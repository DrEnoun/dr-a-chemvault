import MobileLayout from "@/components/layout/MobileLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Flame, PlayCircle, BrainCircuit, Beaker, ChevronRight, Search, Bell } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <MobileLayout>
      <div className="px-6 pt-10 pb-6 space-y-8">
        
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Hi, Sarah 👋</h1>
            <p className="text-muted-foreground text-sm">Welcome to the knowledge vault.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" size="icon" className="rounded-full bg-white/50 dark:bg-black/20 backdrop-blur-sm">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full bg-white/50 dark:bg-black/20 backdrop-blur-sm relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full" />
            </Button>
          </div>
        </div>

        {/* Streak & Progress */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel rounded-3xl p-5 flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
              <Flame className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <p className="font-bold text-lg">4 Day Streak!</p>
              <p className="text-xs text-muted-foreground">Keep it up!</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-bold text-xl text-primary">Lv. 3</p>
            <p className="text-xs text-muted-foreground">Novice Chemist</p>
          </div>
        </motion.div>

        {/* Today's Micro-Boost */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Unlock Today's Concept</h2>
            <Badge variant="secondary" className="font-medium">3-5 mins</Badge>
          </div>
          
          <Link href="/learn/week-1/alkanes">
            <motion.div 
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.95 }}
              className="block cursor-pointer"
            >
              <Card className="border-0 shadow-lg bg-gradient-to-br from-primary to-primary/80 text-white overflow-hidden relative">
                <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
                <CardHeader className="pb-2 relative z-10">
                  <div className="flex justify-between items-start">
                    <Badge className="bg-white/20 hover:bg-white/30 text-white border-0">Week 2 • Hydrocarbons</Badge>
                    <PlayCircle className="w-8 h-8 opacity-80" />
                  </div>
                  <CardTitle className="text-2xl mt-2">Alkanes & Isomers</CardTitle>
                  <CardDescription className="text-white/80">
                    Master the foundational skeletons of all drugs.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4 relative z-10">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <span>1 Lesson</span>
                    <span>•</span>
                    <span>1 Quiz</span>
                    <span>•</span>
                    <span>+50 XP</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </Link>
        </section>

        {/* Quick Actions Grid */}
        <section className="grid grid-cols-2 gap-4">
          <Link href="/labs">
            <Card className="cursor-pointer hover:border-primary/50 transition-colors">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center space-y-2">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-blue-600 dark:text-blue-400">
                  <Beaker className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Escape-Room Labs</p>
                  <p className="text-xs text-muted-foreground">Prac 1 Pending</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          
          <Link href="/games">
            <Card className="cursor-pointer hover:border-primary/50 transition-colors">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center space-y-2">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-2xl text-purple-600 dark:text-purple-400">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Vault Games</p>
                  <p className="text-xs text-muted-foreground">Daily Challenge</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </section>

        {/* Upcoming */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Upcoming</h2>
            <Link href="/planner"><span className="text-sm text-primary font-medium">View All</span></Link>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-4 p-3 bg-card rounded-2xl border shadow-sm">
              <div className="flex flex-col items-center justify-center w-12 h-12 bg-muted rounded-xl">
                <span className="text-xs font-bold text-muted-foreground uppercase">OCT</span>
                <span className="text-lg font-bold">12</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm">Lab Report 1 Due</p>
                <p className="text-xs text-muted-foreground">Molecular Modelling</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
            
            <div className="flex items-center gap-4 p-3 bg-card rounded-2xl border shadow-sm">
              <div className="flex flex-col items-center justify-center w-12 h-12 bg-destructive/10 text-destructive rounded-xl">
                <span className="text-xs font-bold uppercase">OCT</span>
                <span className="text-lg font-bold">15</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm">Midterm Test</p>
                <p className="text-xs text-muted-foreground">Weeks 1 - 7</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </div>
        </section>

      </div>
    </MobileLayout>
  );
}
