import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
      ],
      imports: [
        "react",
        {
          "react-router-dom": [
            "useParams",
            "useNavigate"
          ]
        },
        {
          "react": [
            "createContext"
          ]
        }
      ],
      dts: "src/types/auto-imports.d.ts"
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src')
    }
  }
})
