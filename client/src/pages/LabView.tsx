import { useState } from "react";
import { useParams, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, Info, Atom, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export default function LabView() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const [step, setStep] = useState(0);

  // Simplified version of Practical 1: Molecular Modelling
  return (
    <div className="flex flex-col min-h-screen bg-background max-w-md mx-auto">
      <header className="px-4 py-4 flex items-center gap-3 border-b bg-background/80 backdrop-blur-md sticky top-0 z-10">
        <Button variant="ghost" size="icon" onClick={() => setLocation("/labs")}>
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <div>
          <h1 className="font-bold text-sm leading-tight">Practical 1</h1>
          <p className="text-xs text-muted-foreground">Molecular Modelling</p>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        {/* Lab Viewport (Interactive Area) */}
        <div className="h-64 bg-slate-100 dark:bg-slate-900 border-b relative flex items-center justify-center overflow-hidden">
          {/* Placeholder for 3D model or interactive element */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-400 to-transparent background-grid" />
          
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="relative z-10 flex items-center justify-center"
          >
            {step === 0 ? (
              <div className="w-32 h-32 rounded-full border-4 border-dashed border-primary/50 animate-[spin_10s_linear_infinite] flex items-center justify-center">
                <Atom className="w-12 h-12 text-primary" />
              </div>
            ) : (
              <div className="text-center space-y-4">
                {/* Visual representation of Methane */}
                <div className="relative w-40 h-40">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800 rounded-full shadow-lg flex items-center justify-center text-white text-xs font-bold">C</div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-slate-300 rounded-full shadow-md flex items-center justify-center text-xs font-bold text-slate-800">H</div>
                  <div className="absolute bottom-4 left-0 w-8 h-8 bg-slate-300 rounded-full shadow-md flex items-center justify-center text-xs font-bold text-slate-800">H</div>
                  <div className="absolute bottom-4 right-0 w-8 h-8 bg-slate-300 rounded-full shadow-md flex items-center justify-center text-xs font-bold text-slate-800">H</div>
                  <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-8 h-8 bg-slate-300 rounded-full shadow-md flex items-center justify-center text-xs font-bold text-slate-800 opacity-50">H</div>
                  {/* Bonds */}
                  <div className="absolute top-[20%] left-1/2 w-1 h-6 bg-slate-400 -translate-x-1/2"></div>
                </div>
              </div>
            )}
          </motion.div>

          <div className="absolute top-4 right-4 flex gap-2">
            <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full shadow-sm">
              <Info className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Instructions Panel */}
        <div className="flex-1 bg-card px-6 py-6 pb-24 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
          {step === 0 ? (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <h2 className="text-xl font-bold">Part A: The HONC Rule</h2>
              <p className="text-muted-foreground text-sm">
                Before building, remember the valency rules. Hydrogen forms 1 bond, Oxygen 2, Nitrogen 3, and Carbon 4.
              </p>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-xl border border-blue-100 dark:border-blue-900">
                <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-2 text-sm">Task: Build Methane (CH4)</h3>
                <p className="text-sm text-blue-800/80 dark:text-blue-300/80">
                  Select a Carbon atom and attach 4 Hydrogen atoms to satisfy its valency.
                </p>
              </div>

              <Button className="w-full mt-6 h-12" onClick={() => setStep(1)}>Start Building</Button>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Methane Built!</h2>
                <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-md">Correct</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Notice the tetrahedral shape. The bond angles are 109.5°.
              </p>
              
              <div className="space-y-3 mt-4">
                <h3 className="text-sm font-semibold">Observation Logger</h3>
                <input 
                  type="text" 
                  placeholder="Record bond angles or shape observed..." 
                  className="w-full p-3 rounded-xl border bg-background text-sm"
                />
              </div>

              <div className="flex gap-3 mt-6">
                <Button variant="outline" className="flex-1" onClick={() => setStep(0)}>Reset</Button>
                <Button className="flex-1">Next Isomer</Button>
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}
