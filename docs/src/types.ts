export type Link = Readonly<{
  title: string
  href: string
}>

export type Image = Readonly<{
  title: string
  alt: string
  src: string
}>

export type LinkArray = Link[]

export type ArrayObject<T, K extends string> = T extends Readonly<
  Array<{
    [key in K]: infer U
  }>
>
  ? U
  : never
