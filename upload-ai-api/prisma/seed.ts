import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.prompt.deleteMany()

  await prisma.prompt.create({
    data: {
      title: 'Título de YouTube',
      template: `Tu función es generar tres títulos para un vídeo de YouTube.

A continuación recibirá una transcripción de este video; utilice esta transcripción para generar los títulos.
A continuación también recibirá una lista de títulos, utilice esta lista como referencia para los títulos que se generarán.

Los títulos deben tener un máximo de 60 caracteres.
Los títulos deben ser llamativos y atractivos para maximizar los clics.

Devuelve SÓLO los tres títulos en formato de lista como en el siguiente ejemplo:
'''
- Título 1
- Título 2
- Título 3
'''

Transcripción:
'''
{transcription}
'''`.trim()
    }
  })

  await prisma.prompt.create({
    data: {
      title: 'Descriptión de YouTube',
      template: `Tu función es generar una descripción sucinta para un vídeo de YouTube.
  
A continuación recibirá una transcripción de este video; utilice esta transcripción para generar la descripción.

La descripción debe tener un máximo de 80 palabras en primera persona conteniendo los puntos principales del vídeo.

Utilice palabras llamativas que capten la atención de quienes leen.

Además, al final de la descripción incluye una lista de 3 a 10 hashtags en letras minúsculas que contengan las palabras clave del vídeo.

La declaración deberá seguir el siguiente formato:
'''
Descripción.

#hashtag1 #hashtag2 #hashtag3 ...
'''

Transcripción:
'''
{transcription}
'''`.trim()
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })