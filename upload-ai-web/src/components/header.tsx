import { Github } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function Header() {
    return (
        <header className="px-6 py-3 flex items-center justify-between border-b">
            <h1 className="text-xl font-bold">upload<span className="text-violet-500">.ai</span></h1>

            <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">
                Desarollado con 💜 en el NLW de Rocketseat
            </span>

            <Separator orientation="vertical" className="h-6" />

            <Button
                variant="outline"
                className="hover:bg-primary/10 hover:border-primary"
                onClick={() => window.open("https://github.com/esiammd/upload.ai", "_blank")}
            >
                <Github className="w-4 h-4 mr-2" />
                Github
            </Button>
            </div>
        </header>
    );
}