export type TMeta = Json; // | Error

export type LogMethod = (message: string, meta?: TMeta) => void;

export interface ILogger {
  fatal: LogMethod;
  error: LogMethod;
  // todo: define final interface
}

// prettier-ignore
export type Json =
  | string
  | number
  | boolean
  | { [key: string]: Json }
  | Array<Json>;
