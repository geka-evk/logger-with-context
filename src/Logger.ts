import { ILogger, TMeta } from './types';

class Logger implements ILogger {
  fatal(message: string, meta?: TMeta): void {
    console.error(message, meta);
  }

  error(message: string, meta?: TMeta): void {
    console.error(message, meta);
  }
}

export default Logger;
