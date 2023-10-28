import { appLog } from "context";
import { Logger } from "typeorm";

export class TypeOrmLogger implements Logger {
	logQuery(query: string, parameters?: any[] | undefined) {
		appLog.debug("[TYPEORM-LOG]:", { query, parameters });
	}

	logQueryError(error: string | Error) {
		appLog.error("[TYPEORM-LOG]: executing query error", error);
	}

	logQuerySlow() {
		// Nothing to do
	}

	logSchemaBuild() {
		// Nothing to do
	}
	logMigration() {
		// Nothing to do
	}
	log() {
		// Nothing to do
	}
}