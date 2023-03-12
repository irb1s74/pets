declare module '*.scss' {
  const content: Record<string, string>
  export default content
}

declare module '*.svg' {
  import React from 'react'

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
  export default SVG
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'

declare const __IS_DEV__: boolean
declare const __API__: string

type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T
}
