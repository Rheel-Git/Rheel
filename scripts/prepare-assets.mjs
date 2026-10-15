import { mkdir, copyFile } from 'node:fs/promises'

const files = [
  'abuja-infrastructure.webp',
  'food-systems.jpg',
  'group-meeting-hero.jpg',
  'logistics-construction.jpg',
  'odera-muoma.jpg',
  'real-estate-tower.jpg',
  'residential-property.jpg',
  'rheel-group-logo.png',
  'technology-operations.jpg',
  'urban-development.webp',
]

await mkdir('public/assets', { recursive: true })

for (const file of files) {
  await copyFile(file, `public/assets/${file}`)
}
