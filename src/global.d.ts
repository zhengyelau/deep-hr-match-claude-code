declare module '*.png'
declare module '*.jpg'
declare module '*.svg'

interface ImportMetaEnv {
  readonly VITE_APP_ENV?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
