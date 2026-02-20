import { useState } from "react";
import { useParams, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Check, Bookmark, Zap, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Mock lesson data
const LESSON_DATA = {
  title: "Alkanes & Cycloalkanes",
  pages: [
    {
      type: "concept",
      title: "The Basics of Alkanes",
      content: "Alkanes are saturated hydrocarbons containing only single bonds between carbon atoms. Their general formula is CnH2n+2.",
      highlight: "They are considered the 'skeleton' of organic molecules.",
      image: "placeholder-alkane.png" // We would generate this
    },
    {
      type: "example",
      title: "Nomenclature (Naming)",
      content: "Find the longest continuous carbon chain. Number the chain from the end nearest to a substituent.",
      example: "2-methylbutane has a 4-carbon main chain (butane) with a methyl group on the 2nd carbon."
    },
    {
      type: "pharma-link",
      title: "Why it matters in Pharmacy",
      content: "Alkane chains often form the lipophilic (fat-loving) portion of a drug molecule. This helps the drug pass through cell membranes.",
      drugExample: "Ibuprofen contains alkyl groups that help it absorb into tissues."
    },
    {
      type: "quiz",
      title: "Quick Check",
      question: "What is the general formula for a non-cyclic alkane?",
      options: ["CnH2n", "CnH2n+2", "CnH2n-2"],
      correct: 1
    },
    {
      type: "recap",
      title: "One-Minute Recap",
      points: [
        "Single bonds only (saturated)",
        "General formula: CnH2n+2",
        "Provides lipophilicity to drugs",
        "Suffix: -ane"
      ]
    }
  ]
};

export default function LessonView() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const lesson = LESSON_DATA;
  const page = lesson.pages[currentPage];
  const progress = ((currentPage + 1) / lesson.pages.length) * 100;

  const handleNext = () => {
    if (currentPage < lesson.pages.length - 1) {
      setCurrentPage(c => c + 1);
      setSelectedAnswer(null);
    } else {
      // Finish lesson
      setLocation("/learn");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background max-w-md mx-auto relative">
      {/* Header */}
      <header className="px-4 py-4 flex items-center justify-between sticky top-0 bg-background/80 backdrop-blur-md z-10">
        <Button variant="ghost" size="icon" onClick={() => setLocation("/learn")}>
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Progress value={progress} className="w-1/2 h-2" />
        <Button variant="ghost" size="icon">
          <Bookmark className="w-5 h-5 text-muted-foreground" />
        </Button>
      </header>

      {/* Content */}
      <main className="flex-1 px-6 py-4 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex-1 flex flex-col"
          >
            {page.type === "concept" && (
              <div className="space-y-6">
                <Badge variant="outline" className="w-fit text-primary border-primary bg-primary/5">Chamber Data</Badge>
                <h1 className="text-3xl font-bold">{page.title}</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">{page.content}</p>
                <div className="p-4 bg-accent/30 rounded-2xl border border-accent">
                  <p className="font-semibold text-accent-foreground flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    {page.highlight}
                  </p>
                </div>
              </div>
            )}

            {page.type === "example" && (
              <div className="space-y-6">
                <Badge variant="outline" className="w-fit text-blue-500 border-blue-500 bg-blue-500/5">Worked Example</Badge>
                <h1 className="text-3xl font-bold">{page.title}</h1>
                <p className="text-lg text-muted-foreground">{page.content}</p>
                <div className="mt-8 p-6 bg-card border shadow-sm rounded-2xl">
                  <p className="font-mono text-sm text-center mb-4 bg-muted p-2 rounded">CH3-CH(CH3)-CH2-CH3</p>
                  <p className="font-medium text-center">{page.example}</p>
                </div>
              </div>
            )}

            {page.type === "pharma-link" && (
              <div className="space-y-6">
                <Badge variant="outline" className="w-fit text-emerald-500 border-emerald-500 bg-emerald-500/5">Pharma Link</Badge>
                <h1 className="text-3xl font-bold">{page.title}</h1>
                <p className="text-lg text-muted-foreground">{page.content}</p>
                <div className="mt-6 flex items-start gap-4 p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-2xl text-emerald-800 dark:text-emerald-200">
                  <Activity className="w-6 h-6 shrink-0 mt-1" />
                  <p className="font-medium">{page.drugExample}</p>
                </div>
              </div>
            )}

            {page.type === "quiz" && (
              <div className="space-y-6">
                <Badge variant="outline" className="w-fit text-purple-500 border-purple-500 bg-purple-500/5">Check-in</Badge>
                <h1 className="text-2xl font-bold">{page.title}</h1>
                <p className="text-xl font-medium">{page.question}</p>
                
                <div className="space-y-3 mt-8">
                  {page.options?.map((opt, i) => (
                    <Button
                      key={i}
                      variant={selectedAnswer === i ? (i === page.correct ? "default" : "destructive") : "outline"}
                      className={`w-full justify-start h-auto py-4 px-6 text-left text-base rounded-xl ${selectedAnswer !== null && i === page.correct ? "bg-green-500 hover:bg-green-600 text-white border-green-500" : ""}`}
                      onClick={() => setSelectedAnswer(i)}
                      disabled={selectedAnswer !== null}
                    >
                      {opt}
                      {selectedAnswer !== null && i === page.correct && <Check className="ml-auto w-5 h-5" />}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {page.type === "recap" && (
              <div className="space-y-6">
                <Badge variant="outline" className="w-fit text-orange-500 border-orange-500 bg-orange-500/5">Cheat Sheet</Badge>
                <h1 className="text-3xl font-bold">{page.title}</h1>
                <ul className="space-y-4 mt-6">
                  {page.points?.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 p-4 bg-card border rounded-xl shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 flex items-center justify-center shrink-0 font-bold text-sm">
                        {i + 1}
                      </div>
                      <span className="font-medium">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Actions */}
      <footer className="p-4 pb-safe bg-background border-t">
        <Button 
          className="w-full h-14 text-lg rounded-2xl shadow-lg shadow-primary/20" 
          onClick={handleNext}
          disabled={page.type === "quiz" && selectedAnswer === null}
        >
          {currentPage === lesson.pages.length - 1 ? "Finish Lesson" : "Continue"}
        </Button>
      </footer>
    </div>
  );
}
