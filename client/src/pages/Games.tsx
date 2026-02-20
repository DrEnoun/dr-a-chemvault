import MobileLayout from "@/components/layout/MobileLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Trophy, Star, Target, Zap } from "lucide-react";

const GAMES = [
  {
    id: "g1",
    title: "Nomen-Crusher",
    type: "Fill-in-the-blank",
    desc: "Race against time to name IUPAC structures.",
    icon: Target,
    color: "text-blue-500",
    bg: "bg-blue-100 dark:bg-blue-900/30",
    xp: 50
  },
  {
    id: "g2",
    title: "Group Match",
    type: "Sorting",
    desc: "Swipe left/right to match functional groups to drugs.",
    icon: Zap,
    color: "text-yellow-500",
    bg: "bg-yellow-100 dark:bg-yellow-900/30",
    xp: 100
  },
  {
    id: "g3",
    title: "Escape the Lab",
    type: "Escape Room",
    desc: "Solve 3 chemical clues to unlock the next room.",
    icon: Brain,
    color: "text-purple-500",
    bg: "bg-purple-100 dark:bg-purple-900/30",
    xp: 200
  }
];

export default function Games() {
  return (
    <MobileLayout>
      <div className="px-6 pt-10 pb-6 space-y-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Vault Games</h1>
            <p className="text-muted-foreground mt-1">Unlock achievements and earn XP.</p>
          </div>
          <div className="flex flex-col items-center justify-center p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg shadow-orange-500/20 text-white">
            <Trophy className="w-6 h-6 mb-1" />
            <span className="text-xs font-bold">Rank #4</span>
          </div>
        </div>

        {/* Daily Challenge */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-primary to-primary/80 text-white overflow-hidden relative">
          <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
          <CardContent className="p-6 relative z-10">
            <Badge className="bg-white/20 hover:bg-white/30 text-white border-0 mb-3">Daily Challenge</Badge>
            <h2 className="text-2xl font-bold mb-2">Reaction Runner</h2>
            <p className="text-white/80 text-sm mb-4">Complete 10 substitution reactions perfectly to double your XP today.</p>
            <button className="w-full py-3 bg-white text-primary font-bold rounded-xl shadow-sm hover:scale-[1.02] transition-transform">
              Play Now
            </button>
          </CardContent>
        </Card>

        {/* Game Hub */}
        <div>
          <h2 className="text-lg font-bold mb-4">All Games</h2>
          <div className="grid gap-4">
            {GAMES.map((game) => {
              const Icon = game.icon;
              return (
                <Card key={game.id} className="cursor-pointer hover:border-primary/50 transition-colors">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${game.bg} ${game.color} shrink-0`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold">{game.title}</h3>
                        <div className="flex items-center gap-1 text-xs font-bold text-orange-500">
                          <Star className="w-3 h-3 fill-current" />
                          {game.xp}
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-[10px] mb-1">{game.type}</Badge>
                      <p className="text-xs text-muted-foreground line-clamp-1">{game.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
