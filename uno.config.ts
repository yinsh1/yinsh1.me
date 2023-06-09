// uno.config.ts
import { defineConfig, presetUno, presetIcons, presetTypography, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      prefix: '',
      extraProperties: {
        display: 'inline-block',
        height: '1.2em',
        width: '1.2em',
        'vertical-align': 'text-bottom',
      }
    }),
    presetTypography()
  ],
  transformers: [
    transformerDirectives(),
  ],
})