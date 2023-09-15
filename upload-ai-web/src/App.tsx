import { Github, FileVideo, Upload, Wand2 } from "lucide-react";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Slider } from "./components/ui/slider";

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload<span className="text-violet-500">.ai</span></h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Desarollado con 💜 en el NLW de Rocketseat
          </span>

          <Separator orientation="vertical" className="h-6" />

          <Button variant="outline" className="hover:bg-primary/10 hover:border-primary">
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </header>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className=" grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-4 leading-relaxed "
              placeholder="Incluya el prompt para IA..."
            />
            <Textarea
              className="resize-none p-4 leading-relaxed "
              placeholder="Resultado generado por IA..."
              readOnly
            />
          </div>

          <p className="text-sm text-muted-foreground">
            Recuerda: puedes usar la variable <code className="text-violet-500">
              {'{ transcripción }'}
            </code> en tu prompt para agregar el contenido de transcripción
            del vídeo seleccionado.
          </p>
        </div>

        <aside className="w-80 space-y-6">
          <form className="space-y-6">
            <label
              htmlFor="video"
              className="border flex rounded-lg aspect-video cursor-pointer
              border-dashed text-sm flex-col gap-2 items-center justify-center
              text-muted-foreground hover:bg-primary/10 hover:border-primary"
            >
              <FileVideo className="w-4 h-4" />
              Seleccione un vídeo
            </label>

            <Separator />

            <div className="space-y-4">
              <Label htmlFor="transcription_prompt">Prompt de transcripción</Label>
              <Textarea
                id="transcription_prompt"
                className="h-20 leading-relaxed resize-none"
                placeholder="Incluye las palabras clave mencionadas en el vídeo separadas por comas ( , )"
              />

              <Button type="submit" className="w-full">
                Subir vídeo
                <Upload className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <input type="file" id="video" accept="video/mp4" className="sr-only" />
          </form>

          <Separator />

          <form className="space-y-6">
            <div className="space-y-4">
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione un prompt..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">Título de YouTube</SelectItem>
                  <SelectItem value="description">Descripción de YouTube</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <Label>Modelo</Label>
              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16K</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic">
                Podrás personalizar esta opción pronto.
              </span>
            </div>

            <Separator />

            <div className="space-y-4">
              <Label>Temperatura</Label>
              <Slider min={0} max={1} step={0.1} />
              <span className="block text-xs text-muted-foreground italic">
                Los valores más altos tienden a hacer que el resultado sea más
                creativo y con posibles errores.
              </span>
            </div>

            <Separator />

            <Button type="submit" className="w-full">
              Ejecutar
              <Wand2 className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  )
}
