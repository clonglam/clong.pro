// types/mdx.d.ts
declare module "*.mdx" {
  let MDXComponent: (props) => JSX.Element
  export default MDXComponent
}

type MDXComponents = {
  [x: string]: (props) => JSX.Element
}

// type MDXComponents = NestedMDXComponents & {
//   [Key in keyof JSX.IntrinsicElements]?: Component<JSX.IntrinsicElements[Key]>
// } & {
//   /**
//    * If a wrapper component is defined, the MDX content will be wrapped inside of it.
//    */
//   wrapper?: Component<any>
// }
