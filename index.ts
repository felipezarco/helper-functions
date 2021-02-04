
const one = (variable: any, object?: object | []): any | undefined => {
  return object ? (object as any)[variable] : undefined
}

export default {
  one
}
