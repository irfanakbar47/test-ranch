import { createLogger, format, transports } from 'winston';
import 'winston-daily-rotate-file';

const { combine, timestamp, printf, colorize } = format;

const getLogger = (fileName: string) => {
  const fileLogTransport = new transports.DailyRotateFile({
    filename: `logs/${fileName}-%DATE%.log`,
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '30d',
    format: combine(
      timestamp(),
      printf(({ timestamp, level, message }) => `${timestamp} [${level}]: ${message}`)
    ),
  });

  const consoleTransport = new transports.Console({
    level: process.env.LOG_LEVEL || 'info',
    format: combine(
      colorize(),
      timestamp(),
      printf(({ timestamp, level, message }) => `${timestamp} [${level}]: ${message}`)
    ),
  });

  const logger = createLogger({
    level: 'info',
    format: combine(
      timestamp(),
      printf(({ timestamp, level, message }) => `${timestamp} [${level}]: ${message}`)
    ),
    transports: [fileLogTransport],
  });

  if (process.env.NODE_ENV === 'development') {
    logger.add(consoleTransport);
  }

  return logger;
};

export default getLogger;