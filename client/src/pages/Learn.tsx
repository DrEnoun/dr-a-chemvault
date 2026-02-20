import MobileLayout from "@/components/layout/MobileLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { BookOpen, CheckCircle2, Circle, Lock } from "lucide-react";
import { Link } from "wouter";

const WEEKS = [
  {
    id: 1,
    title: "Week 1",
    subtitle: "Intro to Organic Molecules",
    progress: 100,
    status: "completed",
    modules: [
      { id: "w1-1", title: "Atomic Structure & Bonding", type: "concept", completed: true },
      { id: "w1-2", title: "Hybridization (sp3, sp2, sp)", type: "concept", completed: true },
      { id: "w1-3", title: "Functional Groups Overview", type: "concept", completed: true },
    ]
  },
  {
    id: 2,
    title: "Weeks 2-3",
    subtitle: "Hydrocarbons Part I & II",
    progress: 30,
    status: "in-progress",
    modules: [
      { id: "w2-1", title: "Alkanes & Cycloalkanes", type: "concept", completed: true },
      { id: "w2-2", title: "Alkenes & Alkynes", type: "concept", completed: false },
      { id: "w2-3", title: "Aromatic Compounds (Benzene)", type: "concept", completed: false },
      { id: "w2-4", title: "Nomenclature Rules", type: "practice", completed: false },
    ]
  },
  {
    id: 3,
    title: "Weeks 4-5",
    subtitle: "Oxygen & Sulphur Compounds",
    progress: 0,
    status: "in-progress",
    modules: [
      { id: "w4-1", title: "Alcohols & Phenols", type: "concept", completed: false },
      { id: "w4-2", title: "Ethers & Epoxides", type: "concept", completed: false },
      { id: "w4-3", title: "Thiols & Sulphides", type: "concept", completed: false },
    ]
  }
];

export default function Learn() {
  return (
    <MobileLayout>
      <div className="px-6 pt-10 pb-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Vault Chambers</h1>
          <p className="text-muted-foreground mt-1">Unlock concepts chamber by chamber.</p>
        </div>

        {/* Categories */}
        <div className="flex gap-2 py-2 -mx-6 px-6 overflow-x-auto no-scrollbar">
          <Badge className="bg-primary hover:bg-primary px-4 py-1.5 text-sm rounded-full">All Weeks</Badge>
          <Badge variant="outline" className="px-4 py-1.5 text-sm rounded-full bg-background whitespace-nowrap">Functional Groups</Badge>
          <Badge variant="outline" className="px-4 py-1.5 text-sm rounded-full bg-background whitespace-nowrap">Nomenclature</Badge>
          <Badge variant="outline" className="px-4 py-1.5 text-sm rounded-full bg-background whitespace-nowrap">Reactions</Badge>
        </div>

        {/* Pathway */}
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[1.4rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-border before:to-border">
          
          {WEEKS.map((week, index) => (
            <div key={week.id} className="relative flex items-start gap-6 group">
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-11 h-11 rounded-full border-4 border-background bg-card shadow-sm z-10 shrink-0">
                {week.status === 'completed' && <CheckCircle2 className="w-5 h-5 text-primary" />}
                {week.status === 'in-progress' && <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />}
                {week.status === 'locked' && <Lock className="w-4 h-4 text-muted-foreground" />}
              </div>

              {/* Card */}
              <div className="flex-1 pb-6">
                <Card className={`overflow-hidden transition-all duration-300 ${week.status === 'in-progress' ? 'border-primary shadow-md' : 'border-border/50'}`}>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className={`font-bold text-lg ${week.status === 'locked' ? 'text-muted-foreground' : ''}`}>{week.title}</h3>
                        <p className="text-sm text-muted-foreground">{week.subtitle}</p>
                      </div>
                      {week.status !== 'locked' && (
                        <span className="text-xs font-semibold text-primary">{week.progress}%</span>
                      )}
                    </div>
                    
                    {week.status !== 'locked' && (
                      <Progress value={week.progress} className="h-1.5 mt-3 mb-4" />
                    )}

                    <div className="space-y-2 mt-4">
                      {week.modules.map((mod) => (
                        <Link key={mod.id} href={week.status === 'locked' ? '#' : `/lesson/${mod.id}`}>
                          <a className={`flex items-center justify-between p-3 rounded-xl border transition-colors ${week.status === 'locked' ? 'bg-muted/50 border-transparent opacity-50 cursor-not-allowed' : 'bg-card hover:bg-muted/50 cursor-pointer'}`}>
                            <div className="flex items-center gap-3">
                              {mod.completed ? (
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                              ) : (
                                <Circle className="w-4 h-4 text-muted-foreground" />
                              )}
                              <span className={`text-sm font-medium ${mod.completed ? 'text-muted-foreground line-through' : ''}`}>
                                {mod.title}
                              </span>
                            </div>
                            <BookOpen className="w-4 h-4 text-muted-foreground/50" />
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}

        </div>
      </div>
    </MobileLayout>
  );
}
