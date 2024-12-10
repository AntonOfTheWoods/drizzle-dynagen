import { Index, MatViewWithOption, PgSchema, View as PgView, Policy, Role, ViewWithOption } from './pgSchema';
import { CommonSquashedSchema } from './schemaValidator';
import { AlteredColumn, Column, Sequence, Table } from './snapshotsDiffer';
export interface JsonSqliteCreateTableStatement {
    type: "sqlite_create_table";
    tableName: string;
    columns: Column[];
    referenceData: {
        name: string;
        tableFrom: string;
        columnsFrom: string[];
        tableTo: string;
        columnsTo: string[];
        onUpdate?: string | undefined;
        onDelete?: string | undefined;
    }[];
    compositePKs: string[][];
    uniqueConstraints?: string[];
    checkConstraints?: string[];
}
export interface JsonCreateTableStatement {
    type: "create_table";
    tableName: string;
    schema: string;
    columns: Column[];
    compositePKs: string[];
    compositePkName?: string;
    uniqueConstraints?: string[];
    policies?: string[];
    checkConstraints?: string[];
    internals?: any;
    isRLSEnabled?: boolean;
}
export interface JsonRecreateTableStatement {
    type: "recreate_table";
    tableName: string;
    columns: Column[];
    referenceData: {
        name: string;
        tableFrom: string;
        columnsFrom: string[];
        tableTo: string;
        columnsTo: string[];
        onUpdate?: string | undefined;
        onDelete?: string | undefined;
    }[];
    compositePKs: string[][];
    uniqueConstraints?: string[];
    checkConstraints: string[];
}
export interface JsonDropTableStatement {
    type: "drop_table";
    tableName: string;
    schema: string;
    policies?: string[];
}
export interface JsonRenameTableStatement {
    type: "rename_table";
    fromSchema: string;
    toSchema: string;
    tableNameFrom: string;
    tableNameTo: string;
}
export interface JsonCreateEnumStatement {
    type: "create_type_enum";
    name: string;
    schema: string;
    values: string[];
}
export interface JsonDropEnumStatement {
    type: "drop_type_enum";
    name: string;
    schema: string;
}
export interface JsonMoveEnumStatement {
    type: "move_type_enum";
    name: string;
    schemaFrom: string;
    schemaTo: string;
}
export interface JsonRenameEnumStatement {
    type: "rename_type_enum";
    nameFrom: string;
    nameTo: string;
    schema: string;
}
export interface JsonAddValueToEnumStatement {
    type: "alter_type_add_value";
    name: string;
    schema: string;
    value: string;
    before: string;
}
export interface JsonCreateRoleStatement {
    type: "create_role";
    name: string;
    values: {
        inherit?: boolean;
        createDb?: boolean;
        createRole?: boolean;
    };
}
export interface JsonDropRoleStatement {
    type: "drop_role";
    name: string;
}
export interface JsonRenameRoleStatement {
    type: "rename_role";
    nameFrom: string;
    nameTo: string;
}
export interface JsonAlterRoleStatement {
    type: "alter_role";
    name: string;
    values: {
        inherit?: boolean;
        createDb?: boolean;
        createRole?: boolean;
    };
}
export interface JsonDropValueFromEnumStatement {
    type: "alter_type_drop_value";
    name: string;
    schema: string;
    deletedValues: string[];
    newValues: string[];
    columnsWithEnum: {
        schema: string;
        table: string;
        column: string;
    }[];
}
export interface JsonCreateSequenceStatement {
    type: "create_sequence";
    name: string;
    schema: string;
    values: {
        increment?: string | undefined;
        minValue?: string | undefined;
        maxValue?: string | undefined;
        startWith?: string | undefined;
        cache?: string | undefined;
        cycle?: boolean | undefined;
    };
}
export interface JsonDropSequenceStatement {
    type: "drop_sequence";
    name: string;
    schema: string;
}
export interface JsonMoveSequenceStatement {
    type: "move_sequence";
    name: string;
    schemaFrom: string;
    schemaTo: string;
}
export interface JsonRenameSequenceStatement {
    type: "rename_sequence";
    nameFrom: string;
    nameTo: string;
    schema: string;
}
export interface JsonAlterSequenceStatement {
    type: "alter_sequence";
    name: string;
    schema: string;
    values: {
        increment?: string | undefined;
        minValue?: string | undefined;
        maxValue?: string | undefined;
        startWith?: string | undefined;
        cache?: string | undefined;
        cycle?: boolean | undefined;
    };
}
export interface JsonDropColumnStatement {
    type: "alter_table_drop_column";
    tableName: string;
    columnName: string;
    schema: string;
}
export interface JsonAddColumnStatement {
    type: "alter_table_add_column";
    tableName: string;
    column: Column;
    schema: string;
}
export interface JsonSqliteAddColumnStatement {
    type: "sqlite_alter_table_add_column";
    tableName: string;
    column: Column;
    referenceData?: string;
}
export interface JsonCreatePolicyStatement {
    type: "create_policy";
    tableName: string;
    data: Policy;
    schema: string;
}
export interface JsonCreateIndPolicyStatement {
    type: "create_ind_policy";
    tableName: string;
    data: Policy;
}
export interface JsonDropPolicyStatement {
    type: "drop_policy";
    tableName: string;
    data: Policy;
    schema: string;
}
export interface JsonDropIndPolicyStatement {
    type: "drop_ind_policy";
    tableName: string;
    data: Policy;
}
export interface JsonRenamePolicyStatement {
    type: "rename_policy";
    tableName: string;
    oldName: string;
    newName: string;
    schema: string;
}
export interface JsonIndRenamePolicyStatement {
    type: "rename_ind_policy";
    tableKey: string;
    oldName: string;
    newName: string;
}
export interface JsonEnableRLSStatement {
    type: "enable_rls";
    tableName: string;
    schema: string;
}
export interface JsonDisableRLSStatement {
    type: "disable_rls";
    tableName: string;
    schema: string;
}
export interface JsonAlterPolicyStatement {
    type: "alter_policy";
    tableName: string;
    oldData: string;
    newData: string;
    schema: string;
}
export interface JsonAlterIndPolicyStatement {
    type: "alter_ind_policy";
    oldData: Policy;
    newData: Policy;
}
export interface JsonCreateIndexStatement {
    type: "create_index";
    tableName: string;
    data: string;
    schema: string;
    internal?: any;
}
export interface JsonPgCreateIndexStatement {
    type: "create_index_pg";
    tableName: string;
    data: Index;
    schema: string;
}
export interface JsonReferenceStatement {
    type: "create_reference" | "alter_reference" | "delete_reference";
    data: string;
    schema: string;
    tableName: string;
    isMulticolumn?: boolean;
    columnNotNull?: boolean;
    columnDefault?: string;
    columnType?: string;
}
export interface JsonCreateUniqueConstraint {
    type: "create_unique_constraint";
    tableName: string;
    data: string;
    schema?: string;
    constraintName?: string;
}
export interface JsonDeleteUniqueConstraint {
    type: "delete_unique_constraint";
    tableName: string;
    data: string;
    schema?: string;
    constraintName?: string;
}
export interface JsonAlterUniqueConstraint {
    type: "alter_unique_constraint";
    tableName: string;
    old: string;
    new: string;
    schema?: string;
    oldConstraintName?: string;
    newConstraintName?: string;
}
export interface JsonCreateCheckConstraint {
    type: "create_check_constraint";
    tableName: string;
    data: string;
    schema?: string;
}
export interface JsonDeleteCheckConstraint {
    type: "delete_check_constraint";
    tableName: string;
    constraintName: string;
    schema?: string;
}
export interface JsonCreateCompositePK {
    type: "create_composite_pk";
    tableName: string;
    data: string;
    schema?: string;
    constraintName?: string;
}
export interface JsonDeleteCompositePK {
    type: "delete_composite_pk";
    tableName: string;
    data: string;
    schema?: string;
    constraintName?: string;
}
export interface JsonAlterCompositePK {
    type: "alter_composite_pk";
    tableName: string;
    old: string;
    new: string;
    schema?: string;
    oldConstraintName?: string;
    newConstraintName?: string;
}
export interface JsonAlterTableSetSchema {
    type: "alter_table_set_schema";
    tableName: string;
    schemaFrom: string;
    schemaTo: string;
}
export interface JsonAlterTableRemoveFromSchema {
    type: "alter_table_remove_from_schema";
    tableName: string;
    schema: string;
}
export interface JsonAlterTableSetNewSchema {
    type: "alter_table_set_new_schema";
    tableName: string;
    from: string;
    to: string;
}
export interface JsonCreateReferenceStatement extends JsonReferenceStatement {
    type: "create_reference";
}
export interface JsonAlterReferenceStatement extends JsonReferenceStatement {
    type: "alter_reference";
    oldFkey: string;
}
export interface JsonDeleteReferenceStatement extends JsonReferenceStatement {
    type: "delete_reference";
}
export interface JsonDropIndexStatement {
    type: "drop_index";
    tableName: string;
    data: string;
    schema: string;
}
export interface JsonRenameColumnStatement {
    type: "alter_table_rename_column";
    tableName: string;
    oldColumnName: string;
    newColumnName: string;
    schema: string;
}
export interface JsonAlterColumnTypeStatement {
    type: "alter_table_alter_column_set_type";
    tableName: string;
    columnName: string;
    newDataType: string;
    oldDataType: string;
    schema: string;
    columnDefault: string;
    columnOnUpdate: boolean;
    columnNotNull: boolean;
    columnAutoIncrement: boolean;
    columnPk: boolean;
    columnGenerated?: {
        as: string;
        type: "stored" | "virtual";
    };
}
export interface JsonAlterColumnSetPrimaryKeyStatement {
    type: "alter_table_alter_column_set_pk";
    tableName: string;
    schema: string;
    columnName: string;
}
export interface JsonAlterColumnDropPrimaryKeyStatement {
    type: "alter_table_alter_column_drop_pk";
    tableName: string;
    columnName: string;
    schema: string;
}
export interface JsonAlterColumnSetDefaultStatement {
    type: "alter_table_alter_column_set_default";
    tableName: string;
    columnName: string;
    newDefaultValue: any;
    oldDefaultValue?: any;
    schema: string;
    newDataType: string;
    columnOnUpdate: boolean;
    columnNotNull: boolean;
    columnAutoIncrement: boolean;
    columnPk: boolean;
}
export interface JsonAlterColumnDropDefaultStatement {
    type: "alter_table_alter_column_drop_default";
    tableName: string;
    columnName: string;
    schema: string;
    newDataType: string;
    columnDefault: string;
    columnOnUpdate: boolean;
    columnNotNull: boolean;
    columnAutoIncrement: boolean;
    columnPk: boolean;
}
export interface JsonAlterColumnSetNotNullStatement {
    type: "alter_table_alter_column_set_notnull";
    tableName: string;
    columnName: string;
    schema: string;
    newDataType: string;
    columnDefault: string;
    columnOnUpdate: boolean;
    columnNotNull: boolean;
    columnAutoIncrement: boolean;
    columnPk: boolean;
}
export interface JsonAlterColumnDropNotNullStatement {
    type: "alter_table_alter_column_drop_notnull";
    tableName: string;
    columnName: string;
    schema: string;
    newDataType: string;
    columnDefault: string;
    columnOnUpdate: boolean;
    columnNotNull: boolean;
    columnAutoIncrement: boolean;
    columnPk: boolean;
}
export interface JsonAlterColumnSetGeneratedStatement {
    type: "alter_table_alter_column_set_generated";
    tableName: string;
    columnName: string;
    schema: string;
    newDataType: string;
    columnDefault: string;
    columnOnUpdate: boolean;
    columnNotNull: boolean;
    columnAutoIncrement: boolean;
    columnPk: boolean;
    columnGenerated?: {
        as: string;
        type: "stored" | "virtual";
    };
}
export interface JsonAlterColumnSetIdentityStatement {
    type: "alter_table_alter_column_set_identity";
    tableName: string;
    columnName: string;
    schema: string;
    identity: string;
}
export interface JsonAlterColumnDropIdentityStatement {
    type: "alter_table_alter_column_drop_identity";
    tableName: string;
    columnName: string;
    schema: string;
}
export interface JsonAlterColumnAlterIdentityStatement {
    type: "alter_table_alter_column_change_identity";
    tableName: string;
    columnName: string;
    schema: string;
    identity: string;
    oldIdentity: string;
}
export interface JsonAlterColumnDropGeneratedStatement {
    type: "alter_table_alter_column_drop_generated";
    tableName: string;
    columnName: string;
    schema: string;
    newDataType: string;
    columnDefault: string;
    columnOnUpdate: boolean;
    columnNotNull: boolean;
    columnAutoIncrement: boolean;
    columnPk: boolean;
    columnGenerated?: {
        as: string;
        type: "stored" | "virtual";
    };
    oldColumn?: Column;
}
export interface JsonAlterColumnAlterGeneratedStatement {
    type: "alter_table_alter_column_alter_generated";
    tableName: string;
    columnName: string;
    schema: string;
    newDataType: string;
    columnDefault: string;
    columnOnUpdate: boolean;
    columnNotNull: boolean;
    columnAutoIncrement: boolean;
    columnPk: boolean;
    columnGenerated?: {
        as: string;
        type: "stored" | "virtual";
    };
}
export interface JsonAlterColumnSetOnUpdateStatement {
    type: "alter_table_alter_column_set_on_update";
    tableName: string;
    columnName: string;
    schema: string;
    newDataType: string;
    columnDefault: string;
    columnOnUpdate: boolean;
    columnNotNull: boolean;
    columnAutoIncrement: boolean;
    columnPk: boolean;
}
export interface JsonAlterColumnDropOnUpdateStatement {
    type: "alter_table_alter_column_drop_on_update";
    tableName: string;
    columnName: string;
    schema: string;
    newDataType: string;
    columnDefault: string;
    columnOnUpdate: boolean;
    columnNotNull: boolean;
    columnAutoIncrement: boolean;
    columnPk: boolean;
}
export interface JsonAlterColumnSetAutoincrementStatement {
    type: "alter_table_alter_column_set_autoincrement";
    tableName: string;
    columnName: string;
    schema: string;
    newDataType: string;
    columnDefault: string;
    columnOnUpdate: boolean;
    columnNotNull: boolean;
    columnAutoIncrement: boolean;
    columnPk: boolean;
}
export interface JsonAlterColumnDropAutoincrementStatement {
    type: "alter_table_alter_column_drop_autoincrement";
    tableName: string;
    columnName: string;
    schema: string;
    newDataType: string;
    columnDefault: string;
    columnOnUpdate: boolean;
    columnNotNull: boolean;
    columnAutoIncrement: boolean;
    columnPk: boolean;
}
export interface JsonCreateSchema {
    type: "create_schema";
    name: string;
}
export interface JsonDropSchema {
    type: "drop_schema";
    name: string;
}
export interface JsonRenameSchema {
    type: "rename_schema";
    from: string;
    to: string;
}
export type JsonCreatePgViewStatement = {
    type: "create_view";
} & Omit<PgView, "columns" | "isExisting">;
export interface JsonDropViewStatement {
    type: "drop_view";
    name: string;
    schema?: string;
    materialized?: boolean;
}
export interface JsonRenameViewStatement {
    type: "rename_view";
    nameTo: string;
    nameFrom: string;
    schema: string;
    materialized?: boolean;
}
export interface JsonRenameMySqlViewStatement {
    type: "rename_view";
    nameTo: string;
    nameFrom: string;
    schema: string;
    materialized?: boolean;
}
export interface JsonAlterViewAlterSchemaStatement {
    type: "alter_view_alter_schema";
    fromSchema: string;
    toSchema: string;
    name: string;
    materialized?: boolean;
}
export type JsonAlterViewAddWithOptionStatement = {
    type: "alter_view_add_with_option";
    schema: string;
    name: string;
} & ({
    materialized: true;
    with: MatViewWithOption;
} | {
    materialized: false;
    with: ViewWithOption;
});
export type JsonAlterViewDropWithOptionStatement = {
    type: "alter_view_drop_with_option";
    schema: string;
    name: string;
} & ({
    materialized: true;
    with: MatViewWithOption;
} | {
    materialized: false;
    with: ViewWithOption;
});
export interface JsonAlterViewAlterTablespaceStatement {
    type: "alter_view_alter_tablespace";
    toTablespace: string;
    name: string;
    schema: string;
    materialized: true;
}
export interface JsonAlterViewAlterUsingStatement {
    type: "alter_view_alter_using";
    toUsing: string;
    name: string;
    schema: string;
    materialized: true;
}
export type JsonAlterViewStatement = JsonAlterViewAlterSchemaStatement | JsonAlterViewAddWithOptionStatement | JsonAlterViewDropWithOptionStatement | JsonAlterViewAlterTablespaceStatement | JsonAlterViewAlterUsingStatement;
export type JsonAlterColumnStatement = JsonRenameColumnStatement | JsonAlterColumnTypeStatement | JsonAlterColumnSetDefaultStatement | JsonAlterColumnDropDefaultStatement | JsonAlterColumnSetNotNullStatement | JsonAlterColumnDropNotNullStatement | JsonAlterColumnDropOnUpdateStatement | JsonAlterColumnSetOnUpdateStatement | JsonAlterColumnDropAutoincrementStatement | JsonAlterColumnSetAutoincrementStatement | JsonAlterColumnSetPrimaryKeyStatement | JsonAlterColumnDropPrimaryKeyStatement | JsonAlterColumnSetGeneratedStatement | JsonAlterColumnDropGeneratedStatement | JsonAlterColumnAlterGeneratedStatement | JsonAlterColumnSetIdentityStatement | JsonAlterColumnAlterIdentityStatement | JsonAlterColumnDropIdentityStatement;
export type JsonStatement = JsonRecreateTableStatement | JsonAlterColumnStatement | JsonCreateTableStatement | JsonDropTableStatement | JsonRenameTableStatement | JsonCreateEnumStatement | JsonDropEnumStatement | JsonMoveEnumStatement | JsonRenameEnumStatement | JsonAddValueToEnumStatement | JsonDropColumnStatement | JsonAddColumnStatement | JsonCreateIndexStatement | JsonCreateReferenceStatement | JsonAlterReferenceStatement | JsonDeleteReferenceStatement | JsonDropIndexStatement | JsonReferenceStatement | JsonSqliteCreateTableStatement | JsonSqliteAddColumnStatement | JsonCreateCompositePK | JsonDeleteCompositePK | JsonAlterCompositePK | JsonCreateUniqueConstraint | JsonDeleteUniqueConstraint | JsonAlterUniqueConstraint | JsonCreateSchema | JsonDropSchema | JsonRenameSchema | JsonAlterTableSetSchema | JsonAlterTableRemoveFromSchema | JsonAlterTableSetNewSchema | JsonPgCreateIndexStatement | JsonAlterSequenceStatement | JsonDropSequenceStatement | JsonCreateSequenceStatement | JsonMoveSequenceStatement | JsonRenameSequenceStatement | JsonDropPolicyStatement | JsonCreatePolicyStatement | JsonAlterPolicyStatement | JsonRenamePolicyStatement | JsonEnableRLSStatement | JsonDisableRLSStatement | JsonRenameRoleStatement | JsonCreateRoleStatement | JsonDropRoleStatement | JsonAlterRoleStatement | JsonCreatePgViewStatement | JsonDropViewStatement | JsonRenameViewStatement | JsonAlterViewStatement | JsonCreateCheckConstraint | JsonDeleteCheckConstraint | JsonDropValueFromEnumStatement | JsonIndRenamePolicyStatement | JsonDropIndPolicyStatement | JsonCreateIndPolicyStatement | JsonAlterIndPolicyStatement;
export declare const preparePgCreateTableJson: (table: Table, json2: PgSchema) => JsonCreateTableStatement;
export declare const prepareDropTableJson: (table: Table) => JsonDropTableStatement;
export declare const prepareRenameTableJson: (tableFrom: Table, tableTo: Table) => JsonRenameTableStatement;
export declare const prepareCreateEnumJson: (name: string, schema: string, values: string[]) => JsonCreateEnumStatement;
export declare const prepareAddValuesToEnumJson: (name: string, schema: string, values: {
    value: string;
    before: string;
}[]) => JsonAddValueToEnumStatement[];
export declare const prepareDropEnumValues: (name: string, schema: string, removedValues: string[], json2: PgSchema) => JsonDropValueFromEnumStatement[];
export declare const prepareDropEnumJson: (name: string, schema: string) => JsonDropEnumStatement;
export declare const prepareMoveEnumJson: (name: string, schemaFrom: string, schemaTo: string) => JsonMoveEnumStatement;
export declare const prepareRenameEnumJson: (nameFrom: string, nameTo: string, schema: string) => JsonRenameEnumStatement;
export declare const prepareCreateSequenceJson: (seq: Sequence) => JsonCreateSequenceStatement;
export declare const prepareAlterSequenceJson: (seq: Sequence) => JsonAlterSequenceStatement[];
export declare const prepareDropSequenceJson: (name: string, schema: string) => JsonDropSequenceStatement;
export declare const prepareMoveSequenceJson: (name: string, schemaFrom: string, schemaTo: string) => JsonMoveSequenceStatement;
export declare const prepareRenameSequenceJson: (nameFrom: string, nameTo: string, schema: string) => JsonRenameSequenceStatement;
export declare const prepareCreateRoleJson: (role: Role) => JsonCreateRoleStatement;
export declare const prepareAlterRoleJson: (role: Role) => JsonAlterRoleStatement;
export declare const prepareDropRoleJson: (name: string) => JsonDropRoleStatement;
export declare const prepareRenameRoleJson: (nameFrom: string, nameTo: string) => JsonRenameRoleStatement;
export declare const prepareCreateSchemasJson: (values: string[]) => JsonCreateSchema[];
export declare const prepareRenameSchemasJson: (values: {
    from: string;
    to: string;
}[]) => JsonRenameSchema[];
export declare const prepareDeleteSchemasJson: (values: string[]) => JsonDropSchema[];
export declare const prepareRenameColumns: (tableName: string, schema: string, pairs: {
    from: Column;
    to: Column;
}[]) => JsonRenameColumnStatement[];
export declare const _prepareDropColumns: (taleName: string, schema: string, columns: Column[]) => JsonDropColumnStatement[];
export declare const _prepareAddColumns: (tableName: string, schema: string, columns: Column[]) => JsonAddColumnStatement[];
export declare const preparePgAlterColumns: (_tableName: string, schema: string, columns: AlteredColumn[], json2: CommonSquashedSchema, action?: "push" | undefined) => JsonAlterColumnStatement[];
export declare const prepareRenamePolicyJsons: (tableName: string, schema: string, renames: {
    from: Policy;
    to: Policy;
}[]) => JsonRenamePolicyStatement[];
export declare const prepareRenameIndPolicyJsons: (renames: {
    from: Policy;
    to: Policy;
}[]) => JsonIndRenamePolicyStatement[];
export declare const prepareCreatePolicyJsons: (tableName: string, schema: string, policies: Policy[]) => JsonCreatePolicyStatement[];
export declare const prepareCreateIndPolicyJsons: (policies: Policy[]) => JsonCreateIndPolicyStatement[];
export declare const prepareDropPolicyJsons: (tableName: string, schema: string, policies: Policy[]) => JsonDropPolicyStatement[];
export declare const prepareDropIndPolicyJsons: (policies: Policy[]) => JsonDropIndPolicyStatement[];
export declare const prepareAlterPolicyJson: (tableName: string, schema: string, oldPolicy: string, newPolicy: string) => JsonAlterPolicyStatement;
export declare const prepareAlterIndPolicyJson: (oldPolicy: Policy, newPolicy: Policy) => JsonAlterIndPolicyStatement;
export declare const preparePgCreateIndexesJson: (tableName: string, schema: string, indexes: Record<string, string>, fullSchema: PgSchema, action?: "push" | undefined) => JsonPgCreateIndexStatement[];
export declare const prepareCreateIndexesJson: (tableName: string, schema: string, indexes: Record<string, string>, internal?: any) => JsonCreateIndexStatement[];
export declare const prepareCreateReferencesJson: (tableName: string, schema: string, foreignKeys: Record<string, string>) => JsonCreateReferenceStatement[];
export declare const prepareDropReferencesJson: (tableName: string, schema: string, foreignKeys: Record<string, string>) => JsonDeleteReferenceStatement[];
export declare const prepareAlterReferencesJson: (tableName: string, schema: string, foreignKeys: Record<string, {
    __old: string;
    __new: string;
}>) => JsonReferenceStatement[];
export declare const prepareDropIndexesJson: (tableName: string, schema: string, indexes: Record<string, string>) => JsonDropIndexStatement[];
export declare const prepareAddCompositePrimaryKeySqlite: (tableName: string, pks: Record<string, string>) => JsonCreateCompositePK[];
export declare const prepareDeleteCompositePrimaryKeySqlite: (tableName: string, pks: Record<string, string>) => JsonDeleteCompositePK[];
export declare const prepareAlterCompositePrimaryKeySqlite: (tableName: string, pks: Record<string, {
    __old: string;
    __new: string;
}>) => JsonAlterCompositePK[];
export declare const prepareAddCompositePrimaryKeyPg: (tableName: string, schema: string, pks: Record<string, string>) => JsonCreateCompositePK[];
export declare const prepareDeleteCompositePrimaryKeyPg: (tableName: string, schema: string, pks: Record<string, string>) => JsonDeleteCompositePK[];
export declare const prepareAlterCompositePrimaryKeyPg: (tableName: string, schema: string, pks: Record<string, {
    __old: string;
    __new: string;
}>) => JsonAlterCompositePK[];
export declare const prepareAddUniqueConstraintPg: (tableName: string, schema: string, unqs: Record<string, string>) => JsonCreateUniqueConstraint[];
export declare const prepareDeleteUniqueConstraintPg: (tableName: string, schema: string, unqs: Record<string, string>) => JsonDeleteUniqueConstraint[];
export declare const prepareAddCheckConstraint: (tableName: string, schema: string, check: Record<string, string>) => JsonCreateCheckConstraint[];
export declare const prepareDeleteCheckConstraint: (tableName: string, schema: string, check: Record<string, string>) => JsonDeleteCheckConstraint[];
export declare const prepareAlterUniqueConstraintPg: (tableName: string, schema: string, unqs: Record<string, {
    __old: string;
    __new: string;
}>) => JsonAlterUniqueConstraint[];
export declare const preparePgCreateViewJson: (name: string, schema: string, definition: string, materialized: boolean, withNoData?: boolean, withOption?: any, using?: string, tablespace?: string) => JsonCreatePgViewStatement;
export declare const prepareDropViewJson: (name: string, schema?: string, materialized?: boolean) => JsonDropViewStatement;
export declare const prepareRenameViewJson: (to: string, from: string, schema?: string, materialized?: boolean) => JsonRenameViewStatement;
export declare const preparePgAlterViewAlterSchemaJson: (to: string, from: string, name: string, materialized?: boolean) => JsonAlterViewAlterSchemaStatement;
export declare const preparePgAlterViewAddWithOptionJson: (name: string, schema: string, materialized: boolean, withOption: MatViewWithOption | ViewWithOption) => JsonAlterViewAddWithOptionStatement;
export declare const preparePgAlterViewDropWithOptionJson: (name: string, schema: string, materialized: boolean, withOption: MatViewWithOption | ViewWithOption) => JsonAlterViewDropWithOptionStatement;
export declare const preparePgAlterViewAlterTablespaceJson: (name: string, schema: string, materialized: boolean, to: string) => JsonAlterViewAlterTablespaceStatement;
export declare const preparePgAlterViewAlterUsingJson: (name: string, schema: string, materialized: boolean, to: string) => JsonAlterViewAlterUsingStatement;
