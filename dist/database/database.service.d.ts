import { OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Pool, QueryResult } from 'pg';
export declare class DatabaseService implements OnModuleInit, OnModuleDestroy {
    private pool;
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
    getPool(): Pool | null;
    query<T extends any = any>(text: string, params?: any[]): Promise<QueryResult<T>>;
    private ensureSchema;
}
