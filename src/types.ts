export type Json = string | number | boolean | { [x: string]: Json } | Array<Json>;

type LogMethod = (message: string, meta?: Json) => void;

export interface ILogger {
  fatal: LogMethod;
  error: LogMethod;
  // todo:
}
