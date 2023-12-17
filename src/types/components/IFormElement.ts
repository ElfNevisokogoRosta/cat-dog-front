import { IFormRegisterData } from "./IFormRegisteData";

export interface IFormElement<T> {
  func: (value: IFormRegisterData) => void;
  config: T;
}
