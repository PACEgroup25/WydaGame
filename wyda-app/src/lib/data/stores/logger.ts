enum LogLevel {
    DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3
}

class Logger {
    private static instance: Logger
    private context?: string

    private constructor(context?: string) {
        this.context = context
    }

    static shared(context?: string): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger(context)
        } else {
            Logger.instance.context = context
        }
        return Logger.instance
    }

    private prefix(level: string): string {
        // const timestamp = new Date().toISOString();
        // return `${timestamp} ${level} ${contextStr}${message}`;
        // Using spaces instead of tabs because tabs are redendered in varing sizes
        if (!this.context) {
            return `${level}    `
        }
        return `${level}    ${this.context}    `
    }

    group(...label: any[]): void {
        console.group(this.prefix("GROUP"), ...label)
    }

    groupEnd(): void {
        console.groupEnd()
    }

    table(tabularData: any, properties?: readonly string[]): void {
        console.table(tabularData, properties)
    }

    debug(...messages): void {
        console.debug(this.prefix(LogLevel[LogLevel.DEBUG]), ...messages)
    }

    info(...messages): void {
        console.info(this.prefix(LogLevel[LogLevel.INFO]), ...messages)
    }

    warn(...messages): void {
        console.warn(this.prefix(LogLevel[LogLevel.WARN]), ...messages)
    }

    error(...messages): void {
        console.error(this.prefix(LogLevel[LogLevel.ERROR]), ...messages)
    }

    log(...messages): void {
        console.log(this.prefix(LogLevel[LogLevel.INFO]), ...messages)
    }

    raw(...messages): void {
        console.log(...messages)
    }
}

export { Logger, LogLevel }
