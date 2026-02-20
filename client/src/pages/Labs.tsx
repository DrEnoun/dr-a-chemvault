import MobileLayout from "@/components/layout/MobileLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Beaker, ShieldAlert, ArrowRight, CheckCircle2, Lock } from "lucide-react";
import { Link } from "wouter";

const PRACTICALS = [
  {
    id: 1,
    title: "Molecular Modelling",
    desc: "Build organic compounds, explore isomers, and understand 3D conformations.",
    status: "available",
    duration: "20 min"
  },
  {
    id: 2,
    title: "Functional Group Analysis",
    desc: "Qualitative chemical tests to identify unknown organic samples safely.",
    status: "available",
    duration: "45 min"
  },
  {
    id: 3,
    title: "Enzyme Specificity",
    desc: "Investigate chemical nature and specificity of biological catalysts.",
    status: "available",
    duration: "30 min"
  },
  {
    id: 4,
    title: "Thin Layer Chromatography",
    desc: "Separate mixtures and calculate Rf values interactively.",
    status: "available",
    duration: "35 min"
  }
];

export default function Labs() {
  return (
    <MobileLayout>
      <div className="px-6 pt-10 pb-6 space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Escape-Room Labs</h1>
          <p className="text-muted-foreground mt-1">Unlock the labs by completing the challenges safely.</p>
        </div>

        {/* Safety Onboarding Card */}
        <Card className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border-red-100 dark:border-red-900 overflow-hidden">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-red-900 dark:text-red-200">Mandatory Safety Quiz</h3>
              <p className="text-xs text-red-700/80 dark:text-red-300/80 mt-1 mb-2">Must complete before unlocking Practical 1.</p>
              <Button size="sm" variant="destructive" className="w-full text-xs h-8">Take Quiz Now</Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h2 className="text-lg font-bold">Lab Manual Modules</h2>
          
          {PRACTICALS.map((prac) => (
            <Card key={prac.id} className={`overflow-hidden transition-all ${prac.status === 'locked' ? 'opacity-75' : 'hover:border-primary/50'}`}>
              <CardContent className="p-0">
                <div className="flex">
                  <div className={`w-2 ${prac.status === 'available' ? 'bg-primary' : 'bg-muted'}`} />
                  <div className="p-5 flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="text-xs font-normal">Practical {prac.id}</Badge>
                      <span className="text-xs font-medium text-muted-foreground">{prac.duration}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-1">{prac.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{prac.desc}</p>
                    
                    {prac.status === 'available' ? (
                      <Link href={`/labs/${prac.id}`}>
                        <Button className="w-full gap-2">
                          Enter Escape Room <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    ) : (
                      <Button variant="secondary" className="w-full gap-2" disabled>
                        <Lock className="w-4 h-4" /> Locked
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MobileLayout>
  );
}
