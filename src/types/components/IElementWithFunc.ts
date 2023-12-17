export interface IElementWithFunc<T> {
  func: (value: string, field: string) => void;
  config: T;
}
