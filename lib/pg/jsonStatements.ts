/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Index,
  MatViewWithOption,
  PgSchema,
  PgSquasher,
  View as PgView,
  Policy,
  Role,
  ViewWithOption,
} from "./pgSchema";
import { CommonSquashedSchema } from "./schemaValidator";
import { AlteredColumn, Column, Sequence, Table } from "./snapshotsDiffer";

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
  internals?: any; // MySqlKitInternals;
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

//////

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

//////

export interface JsonDropValueFromEnumStatement {
  type: "alter_type_drop_value";
  name: string;
  schema: string;
  deletedValues: string[];
  newValues: string[];
  columnsWithEnum: { schema: string; table: string; column: string }[];
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
  internal?: any; // MySqlKitInternals | SQLiteKitInternals;
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
  //   fromTable: string;
  //   fromColumns: string[];
  //   toTable: string;
  //   toColumns: string[];
  //   foreignKeyName: string;
  //   onDelete?: string;
  //   onUpdate?: string;
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
  columnGenerated?: { as: string; type: "stored" | "virtual" };
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
  columnGenerated?: { as: string; type: "stored" | "virtual" };
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
  columnGenerated?: { as: string; type: "stored" | "virtual" };
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
  columnGenerated?: { as: string; type: "stored" | "virtual" };
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
} & (
  | {
      materialized: true;
      with: MatViewWithOption;
    }
  | {
      materialized: false;
      with: ViewWithOption;
    }
);

export type JsonAlterViewDropWithOptionStatement = {
  type: "alter_view_drop_with_option";
  schema: string;
  name: string;
} & (
  | {
      materialized: true;
      with: MatViewWithOption;
    }
  | {
      materialized: false;
      with: ViewWithOption;
    }
);

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

export type JsonAlterViewStatement =
  | JsonAlterViewAlterSchemaStatement
  | JsonAlterViewAddWithOptionStatement
  | JsonAlterViewDropWithOptionStatement
  | JsonAlterViewAlterTablespaceStatement
  | JsonAlterViewAlterUsingStatement;

export type JsonAlterColumnStatement =
  | JsonRenameColumnStatement
  | JsonAlterColumnTypeStatement
  | JsonAlterColumnSetDefaultStatement
  | JsonAlterColumnDropDefaultStatement
  | JsonAlterColumnSetNotNullStatement
  | JsonAlterColumnDropNotNullStatement
  | JsonAlterColumnDropOnUpdateStatement
  | JsonAlterColumnSetOnUpdateStatement
  | JsonAlterColumnDropAutoincrementStatement
  | JsonAlterColumnSetAutoincrementStatement
  | JsonAlterColumnSetPrimaryKeyStatement
  | JsonAlterColumnDropPrimaryKeyStatement
  | JsonAlterColumnSetGeneratedStatement
  | JsonAlterColumnDropGeneratedStatement
  | JsonAlterColumnAlterGeneratedStatement
  | JsonAlterColumnSetIdentityStatement
  | JsonAlterColumnAlterIdentityStatement
  | JsonAlterColumnDropIdentityStatement;

export type JsonStatement =
  | JsonRecreateTableStatement
  | JsonAlterColumnStatement
  | JsonCreateTableStatement
  | JsonDropTableStatement
  | JsonRenameTableStatement
  | JsonCreateEnumStatement
  | JsonDropEnumStatement
  | JsonMoveEnumStatement
  | JsonRenameEnumStatement
  | JsonAddValueToEnumStatement
  | JsonDropColumnStatement
  | JsonAddColumnStatement
  | JsonCreateIndexStatement
  | JsonCreateReferenceStatement
  | JsonAlterReferenceStatement
  | JsonDeleteReferenceStatement
  | JsonDropIndexStatement
  | JsonReferenceStatement
  | JsonCreateCompositePK
  | JsonDeleteCompositePK
  | JsonAlterCompositePK
  | JsonCreateUniqueConstraint
  | JsonDeleteUniqueConstraint
  | JsonAlterUniqueConstraint
  | JsonCreateSchema
  | JsonDropSchema
  | JsonRenameSchema
  | JsonAlterTableSetSchema
  | JsonAlterTableRemoveFromSchema
  | JsonAlterTableSetNewSchema
  | JsonPgCreateIndexStatement
  | JsonAlterSequenceStatement
  | JsonDropSequenceStatement
  | JsonCreateSequenceStatement
  | JsonMoveSequenceStatement
  | JsonRenameSequenceStatement
  | JsonDropPolicyStatement
  | JsonCreatePolicyStatement
  | JsonAlterPolicyStatement
  | JsonRenamePolicyStatement
  | JsonEnableRLSStatement
  | JsonDisableRLSStatement
  | JsonRenameRoleStatement
  | JsonCreateRoleStatement
  | JsonDropRoleStatement
  | JsonAlterRoleStatement
  | JsonCreatePgViewStatement
  | JsonDropViewStatement
  | JsonRenameViewStatement
  | JsonAlterViewStatement
  | JsonCreateCheckConstraint
  | JsonDeleteCheckConstraint
  | JsonDropValueFromEnumStatement
  | JsonIndRenamePolicyStatement
  | JsonDropIndPolicyStatement
  | JsonCreateIndPolicyStatement
  | JsonAlterIndPolicyStatement;

export const preparePgCreateTableJson = (
  table: Table,
  // TODO: remove?
  json2: PgSchema,
): JsonCreateTableStatement => {
  const { name, schema, columns, compositePrimaryKeys, uniqueConstraints, checkConstraints, policies, isRLSEnabled } =
    table;
  const tableKey = `${schema || "public"}.${name}`;

  // TODO: @AndriiSherman. We need this, will add test cases
  const compositePkName =
    Object.values(compositePrimaryKeys).length > 0
      ? json2.tables[tableKey].compositePrimaryKeys[
          `${PgSquasher.unsquashPK(Object.values(compositePrimaryKeys)[0]).name}`
        ].name
      : "";

  return {
    type: "create_table",
    tableName: name,
    schema,
    columns: Object.values(columns),
    compositePKs: Object.values(compositePrimaryKeys),
    compositePkName: compositePkName,
    uniqueConstraints: Object.values(uniqueConstraints),
    policies: Object.values(policies),
    checkConstraints: Object.values(checkConstraints),
    isRLSEnabled: isRLSEnabled ?? false,
  };
};

export const prepareDropTableJson = (table: Table): JsonDropTableStatement => {
  return {
    type: "drop_table",
    tableName: table.name,
    schema: table.schema,
    policies: table.policies ? Object.values(table.policies) : [],
  };
};

export const prepareRenameTableJson = (tableFrom: Table, tableTo: Table): JsonRenameTableStatement => {
  return {
    type: "rename_table",
    fromSchema: tableTo.schema,
    toSchema: tableTo.schema,
    tableNameFrom: tableFrom.name,
    tableNameTo: tableTo.name,
  };
};

export const prepareCreateEnumJson = (name: string, schema: string, values: string[]): JsonCreateEnumStatement => {
  return {
    type: "create_type_enum",
    name: name,
    schema: schema,
    values,
  };
};

// https://blog.yo1.dog/updating-enum-values-in-postgresql-the-safe-and-easy-way/
export const prepareAddValuesToEnumJson = (
  name: string,
  schema: string,
  values: { value: string; before: string }[],
): JsonAddValueToEnumStatement[] => {
  return values.map((it) => {
    return {
      type: "alter_type_add_value",
      name: name,
      schema: schema,
      value: it.value,
      before: it.before,
    };
  });
};

export const prepareDropEnumValues = (
  name: string,
  schema: string,
  removedValues: string[],
  json2: PgSchema,
): JsonDropValueFromEnumStatement[] => {
  if (!removedValues.length) return [];

  const affectedColumns: { schema: string; table: string; column: string }[] = [];

  for (const tableKey in json2.tables) {
    const table = json2.tables[tableKey];
    for (const columnKey in table.columns) {
      const column = table.columns[columnKey];
      if (column.type === name && column.typeSchema === schema) {
        affectedColumns.push({
          schema: table.schema || "public",
          table: table.name,
          column: column.name,
        });
      }
    }
  }

  return [
    {
      type: "alter_type_drop_value",
      name: name,
      schema: schema,
      deletedValues: removedValues,
      newValues: json2.enums[`${schema}.${name}`].values,
      columnsWithEnum: affectedColumns,
    },
  ];
};

export const prepareDropEnumJson = (name: string, schema: string): JsonDropEnumStatement => {
  return {
    type: "drop_type_enum",
    name: name,
    schema: schema,
  };
};

export const prepareMoveEnumJson = (name: string, schemaFrom: string, schemaTo: string): JsonMoveEnumStatement => {
  return {
    type: "move_type_enum",
    name: name,
    schemaFrom,
    schemaTo,
  };
};

export const prepareRenameEnumJson = (nameFrom: string, nameTo: string, schema: string): JsonRenameEnumStatement => {
  return {
    type: "rename_type_enum",
    nameFrom,
    nameTo,
    schema,
  };
};

////////////

export const prepareCreateSequenceJson = (seq: Sequence): JsonCreateSequenceStatement => {
  const values = PgSquasher.unsquashSequence(seq.values);
  return {
    type: "create_sequence",
    name: seq.name,
    schema: seq.schema,
    values,
  };
};

export const prepareAlterSequenceJson = (seq: Sequence): JsonAlterSequenceStatement[] => {
  const values = PgSquasher.unsquashSequence(seq.values);
  return [
    {
      type: "alter_sequence",
      schema: seq.schema,
      name: seq.name,
      values,
    },
  ];
};

export const prepareDropSequenceJson = (name: string, schema: string): JsonDropSequenceStatement => {
  return {
    type: "drop_sequence",
    name: name,
    schema: schema,
  };
};

export const prepareMoveSequenceJson = (
  name: string,
  schemaFrom: string,
  schemaTo: string,
): JsonMoveSequenceStatement => {
  return {
    type: "move_sequence",
    name: name,
    schemaFrom,
    schemaTo,
  };
};

export const prepareRenameSequenceJson = (
  nameFrom: string,
  nameTo: string,
  schema: string,
): JsonRenameSequenceStatement => {
  return {
    type: "rename_sequence",
    nameFrom,
    nameTo,
    schema,
  };
};

////////////

export const prepareCreateRoleJson = (role: Role): JsonCreateRoleStatement => {
  return {
    type: "create_role",
    name: role.name,
    values: {
      createDb: role.createDb,
      createRole: role.createRole,
      inherit: role.inherit,
    },
  };
};

export const prepareAlterRoleJson = (role: Role): JsonAlterRoleStatement => {
  return {
    type: "alter_role",
    name: role.name,
    values: {
      createDb: role.createDb,
      createRole: role.createRole,
      inherit: role.inherit,
    },
  };
};

export const prepareDropRoleJson = (name: string): JsonDropRoleStatement => {
  return {
    type: "drop_role",
    name: name,
  };
};

export const prepareRenameRoleJson = (nameFrom: string, nameTo: string): JsonRenameRoleStatement => {
  return {
    type: "rename_role",
    nameFrom,
    nameTo,
  };
};

//////////

export const prepareCreateSchemasJson = (values: string[]): JsonCreateSchema[] => {
  return values.map((it) => {
    return {
      type: "create_schema",
      name: it,
    } as JsonCreateSchema;
  });
};

export const prepareRenameSchemasJson = (values: { from: string; to: string }[]): JsonRenameSchema[] => {
  return values.map((it) => {
    return {
      type: "rename_schema",
      from: it.from,
      to: it.to,
    } as JsonRenameSchema;
  });
};

export const prepareDeleteSchemasJson = (values: string[]): JsonDropSchema[] => {
  return values.map((it) => {
    return {
      type: "drop_schema",
      name: it,
    } as JsonDropSchema;
  });
};

export const prepareRenameColumns = (
  tableName: string,
  // TODO: split for pg and mysql+sqlite without schema
  schema: string,
  pairs: { from: Column; to: Column }[],
): JsonRenameColumnStatement[] => {
  return pairs.map((it) => {
    return {
      type: "alter_table_rename_column",
      tableName: tableName,
      oldColumnName: it.from.name,
      newColumnName: it.to.name,
      schema,
    };
  });
};

export const _prepareDropColumns = (taleName: string, schema: string, columns: Column[]): JsonDropColumnStatement[] => {
  return columns.map((it) => {
    return {
      type: "alter_table_drop_column",
      tableName: taleName,
      columnName: it.name,
      schema,
    };
  });
};

export const _prepareAddColumns = (tableName: string, schema: string, columns: Column[]): JsonAddColumnStatement[] => {
  return columns.map((it) => {
    return {
      type: "alter_table_add_column",
      tableName: tableName,
      column: it,
      schema,
    };
  });
};

export const preparePgAlterColumns = (
  _tableName: string,
  schema: string,
  columns: AlteredColumn[],
  // TODO: remove?
  json2: CommonSquashedSchema,
  action?: "push" | undefined,
): JsonAlterColumnStatement[] => {
  const tableKey = `${schema || "public"}.${_tableName}`;
  const statements: JsonAlterColumnStatement[] = [];
  const dropPkStatements: JsonAlterColumnDropPrimaryKeyStatement[] = [];
  const setPkStatements: JsonAlterColumnSetPrimaryKeyStatement[] = [];

  for (const column of columns) {
    const columnName = typeof column.name !== "string" ? column.name.new : column.name;

    const tableName = json2.tables[tableKey].name;

    // I used any, because those fields are available only for mysql dialect
    // For other dialects it will become undefined, that is fine for json statements
    const columnType = json2.tables[tableKey].columns[columnName].type;
    const columnDefault = json2.tables[tableKey].columns[columnName].default;
    const columnGenerated = json2.tables[tableKey].columns[columnName].generated;
    const columnOnUpdate = (json2.tables[tableKey].columns[columnName] as any).onUpdate;
    const columnNotNull = json2.tables[tableKey].columns[columnName].notNull;
    const columnAutoIncrement = (json2.tables[tableKey].columns[columnName] as any).autoincrement;
    const columnPk = (json2.tables[tableKey].columns[columnName] as any).primaryKey;

    const compositePk = json2.tables[tableKey].compositePrimaryKeys[`${tableName}_${columnName}`];

    if (typeof column.name !== "string") {
      statements.push({
        type: "alter_table_rename_column",
        tableName,
        oldColumnName: column.name.old,
        newColumnName: column.name.new,
        schema,
      });
    }

    if (column.type?.type === "changed") {
      statements.push({
        type: "alter_table_alter_column_set_type",
        tableName,
        columnName,
        newDataType: column.type.new,
        oldDataType: column.type.old,
        schema,
        columnDefault,
        columnOnUpdate,
        columnNotNull,
        columnAutoIncrement,
        columnPk,
      });
    }

    if (
      column.primaryKey?.type === "deleted" ||
      (column.primaryKey?.type === "changed" && !column.primaryKey.new && typeof compositePk === "undefined")
    ) {
      dropPkStatements.push({
        ////
        type: "alter_table_alter_column_drop_pk",
        tableName,
        columnName,
        schema,
      });
    }

    if (column.default?.type === "added") {
      statements.push({
        type: "alter_table_alter_column_set_default",
        tableName,
        columnName,
        newDefaultValue: column.default.value,
        schema,
        columnOnUpdate,
        columnNotNull,
        columnAutoIncrement,
        newDataType: columnType,
        columnPk,
      });
    }

    if (column.default?.type === "changed") {
      statements.push({
        type: "alter_table_alter_column_set_default",
        tableName,
        columnName,
        newDefaultValue: column.default.new,
        oldDefaultValue: column.default.old,
        schema,
        columnOnUpdate,
        columnNotNull,
        columnAutoIncrement,
        newDataType: columnType,
        columnPk,
      });
    }

    if (column.default?.type === "deleted") {
      statements.push({
        type: "alter_table_alter_column_drop_default",
        tableName,
        columnName,
        schema,
        columnDefault,
        columnOnUpdate,
        columnNotNull,
        columnAutoIncrement,
        newDataType: columnType,
        columnPk,
      });
    }

    if (column.notNull?.type === "added") {
      statements.push({
        type: "alter_table_alter_column_set_notnull",
        tableName,
        columnName,
        schema,
        newDataType: columnType,
        columnDefault,
        columnOnUpdate,
        columnNotNull,
        columnAutoIncrement,
        columnPk,
      });
    }

    if (column.notNull?.type === "changed") {
      const type = column.notNull.new
        ? "alter_table_alter_column_set_notnull"
        : "alter_table_alter_column_drop_notnull";
      statements.push({
        type: type,
        tableName,
        columnName,
        schema,
        newDataType: columnType,
        columnDefault,
        columnOnUpdate,
        columnNotNull,
        columnAutoIncrement,
        columnPk,
      });
    }

    if (column.notNull?.type === "deleted") {
      statements.push({
        type: "alter_table_alter_column_drop_notnull",
        tableName,
        columnName,
        schema,
        newDataType: columnType,
        columnDefault,
        columnOnUpdate,
        columnNotNull,
        columnAutoIncrement,
        columnPk,
      });
    }

    if (column.identity?.type === "added") {
      statements.push({
        type: "alter_table_alter_column_set_identity",
        tableName,
        columnName,
        schema,
        identity: column.identity.value,
      });
    }

    if (column.identity?.type === "changed") {
      statements.push({
        type: "alter_table_alter_column_change_identity",
        tableName,
        columnName,
        schema,
        identity: column.identity.new,
        oldIdentity: column.identity.old,
      });
    }

    if (column.identity?.type === "deleted") {
      statements.push({
        type: "alter_table_alter_column_drop_identity",
        tableName,
        columnName,
        schema,
      });
    }

    if (column.generated?.type === "added") {
      statements.push({
        type: "alter_table_alter_column_set_generated",
        tableName,
        columnName,
        schema,
        newDataType: columnType,
        columnDefault,
        columnOnUpdate,
        columnNotNull,
        columnAutoIncrement,
        columnPk,
        columnGenerated,
      });
    }

    if (column.generated?.type === "changed" && action !== "push") {
      statements.push({
        type: "alter_table_alter_column_alter_generated",
        tableName,
        columnName,
        schema,
        newDataType: columnType,
        columnDefault,
        columnOnUpdate,
        columnNotNull,
        columnAutoIncrement,
        columnPk,
        columnGenerated,
      });
    }

    if (column.generated?.type === "deleted") {
      statements.push({
        type: "alter_table_alter_column_drop_generated",
        tableName,
        columnName,
        schema,
        newDataType: columnType,
        columnDefault,
        columnOnUpdate,
        columnNotNull,
        columnAutoIncrement,
        columnPk,
        columnGenerated,
      });
    }

    if (column.primaryKey?.type === "added" || (column.primaryKey?.type === "changed" && column.primaryKey.new)) {
      const wasAutoincrement = statements.filter((it) => it.type === "alter_table_alter_column_set_autoincrement");
      if (wasAutoincrement.length === 0) {
        setPkStatements.push({
          type: "alter_table_alter_column_set_pk",
          tableName,
          schema,
          columnName,
        });
      }
    }

    // if (column.primaryKey?.type === "added") {
    //   statements.push({
    //     type: "alter_table_alter_column_set_primarykey",
    //     tableName,
    //     columnName,
    //     schema,
    //     newDataType: columnType,
    //     columnDefault,
    //     columnOnUpdate,
    //     columnNotNull,
    //     columnAutoIncrement,
    //   });
    // }

    // if (column.primaryKey?.type === "changed") {
    //   const type = column.primaryKey.new
    //     ? "alter_table_alter_column_set_primarykey"
    //     : "alter_table_alter_column_drop_primarykey";

    //   statements.push({
    //     type,
    //     tableName,
    //     columnName,
    //     schema,
    //     newDataType: columnType,
    //     columnDefault,
    //     columnOnUpdate,
    //     columnNotNull,
    //     columnAutoIncrement,
    //   });
    // }

    // if (column.primaryKey?.type === "deleted") {
    //   statements.push({
    //     type: "alter_table_alter_column_drop_primarykey",
    //     tableName,
    //     columnName,
    //     schema,
    //     newDataType: columnType,
    //     columnDefault,
    //     columnOnUpdate,
    //     columnNotNull,
    //     columnAutoIncrement,
    //   });
    // }

    if (column.onUpdate?.type === "added") {
      statements.push({
        type: "alter_table_alter_column_set_on_update",
        tableName,
        columnName,
        schema,
        newDataType: columnType,
        columnDefault,
        columnOnUpdate,
        columnNotNull,
        columnAutoIncrement,
        columnPk,
      });
    }

    if (column.onUpdate?.type === "deleted") {
      statements.push({
        type: "alter_table_alter_column_drop_on_update",
        tableName,
        columnName,
        schema,
        newDataType: columnType,
        columnDefault,
        columnOnUpdate,
        columnNotNull,
        columnAutoIncrement,
        columnPk,
      });
    }
  }

  return [...dropPkStatements, ...setPkStatements, ...statements];
};

export const prepareRenamePolicyJsons = (
  tableName: string,
  schema: string,
  renames: {
    from: Policy;
    to: Policy;
  }[],
): JsonRenamePolicyStatement[] => {
  return renames.map((it) => {
    return {
      type: "rename_policy",
      tableName: tableName,
      oldName: it.from.name,
      newName: it.to.name,
      schema,
    };
  });
};

export const prepareRenameIndPolicyJsons = (
  renames: {
    from: Policy;
    to: Policy;
  }[],
): JsonIndRenamePolicyStatement[] => {
  return renames.map((it) => {
    return {
      type: "rename_ind_policy",
      tableKey: it.from.on!,
      oldName: it.from.name,
      newName: it.to.name,
    };
  });
};

export const prepareCreatePolicyJsons = (
  tableName: string,
  schema: string,
  policies: Policy[],
): JsonCreatePolicyStatement[] => {
  return policies.map((it) => {
    return {
      type: "create_policy",
      tableName,
      data: it,
      schema,
    };
  });
};

export const prepareCreateIndPolicyJsons = (policies: Policy[]): JsonCreateIndPolicyStatement[] => {
  return policies.map((it) => {
    return {
      type: "create_ind_policy",
      tableName: it.on!,
      data: it,
    };
  });
};

export const prepareDropPolicyJsons = (
  tableName: string,
  schema: string,
  policies: Policy[],
): JsonDropPolicyStatement[] => {
  return policies.map((it) => {
    return {
      type: "drop_policy",
      tableName,
      data: it,
      schema,
    };
  });
};

export const prepareDropIndPolicyJsons = (policies: Policy[]): JsonDropIndPolicyStatement[] => {
  return policies.map((it) => {
    return {
      type: "drop_ind_policy",
      tableName: it.on!,
      data: it,
    };
  });
};

export const prepareAlterPolicyJson = (
  tableName: string,
  schema: string,
  oldPolicy: string,
  newPolicy: string,
): JsonAlterPolicyStatement => {
  return {
    type: "alter_policy",
    tableName,
    oldData: oldPolicy,
    newData: newPolicy,
    schema,
  };
};

export const prepareAlterIndPolicyJson = (oldPolicy: Policy, newPolicy: Policy): JsonAlterIndPolicyStatement => {
  return {
    type: "alter_ind_policy",
    oldData: oldPolicy,
    newData: newPolicy,
  };
};

export const preparePgCreateIndexesJson = (
  tableName: string,
  schema: string,
  indexes: Record<string, string>,
  fullSchema: PgSchema,
  action?: "push" | undefined,
): JsonPgCreateIndexStatement[] => {
  if (action === "push") {
    return Object.values(indexes).map((indexData) => {
      const unsquashedIndex = PgSquasher.unsquashIdxPush(indexData);
      const data = fullSchema.tables[`${schema === "" ? "public" : schema}.${tableName}`].indexes[unsquashedIndex.name];
      return {
        type: "create_index_pg",
        tableName,
        data,
        schema,
      };
    });
  }
  return Object.values(indexes).map((indexData) => {
    return {
      type: "create_index_pg",
      tableName,
      data: PgSquasher.unsquashIdx(indexData),
      schema,
    };
  });
};

export const prepareCreateIndexesJson = (
  tableName: string,
  schema: string,
  indexes: Record<string, string>,
  internal?: any, // MySqlKitInternals | SQLiteKitInternals,
): JsonCreateIndexStatement[] => {
  return Object.values(indexes).map((indexData) => {
    return {
      type: "create_index",
      tableName,
      data: indexData,
      schema,
      internal,
    };
  });
};

export const prepareCreateReferencesJson = (
  tableName: string,
  schema: string,
  foreignKeys: Record<string, string>,
): JsonCreateReferenceStatement[] => {
  return Object.values(foreignKeys).map((fkData) => {
    return {
      type: "create_reference",
      tableName,
      data: fkData,
      schema,
    };
  });
};

export const prepareDropReferencesJson = (
  tableName: string,
  schema: string,
  foreignKeys: Record<string, string>,
): JsonDeleteReferenceStatement[] => {
  return Object.values(foreignKeys).map((fkData) => {
    return {
      type: "delete_reference",
      tableName,
      data: fkData,
      schema,
    };
  });
};

// alter should create 2 statements. It's important to make only 1 sql per statement(for breakpoints)
export const prepareAlterReferencesJson = (
  tableName: string,
  schema: string,
  foreignKeys: Record<string, { __old: string; __new: string }>,
): JsonReferenceStatement[] => {
  const stmts: JsonReferenceStatement[] = [];
  Object.values(foreignKeys).map((val) => {
    stmts.push({
      type: "delete_reference",
      tableName,
      schema,
      data: val.__old,
    });

    stmts.push({
      type: "create_reference",
      tableName,
      schema,
      data: val.__new,
    });
  });
  return stmts;
};

export const prepareDropIndexesJson = (
  tableName: string,
  schema: string,
  indexes: Record<string, string>,
): JsonDropIndexStatement[] => {
  return Object.values(indexes).map((indexData) => {
    return {
      type: "drop_index",
      tableName,
      data: indexData,
      schema,
    };
  });
};

export const prepareAddCompositePrimaryKeyPg = (
  tableName: string,
  schema: string,
  pks: Record<string, string>,
): JsonCreateCompositePK[] => {
  return Object.values(pks).map((it) => {
    return {
      type: "create_composite_pk",
      tableName,
      data: it,
      schema,
      constraintName: PgSquasher.unsquashPK(it).name,
    } as JsonCreateCompositePK;
  });
};

export const prepareDeleteCompositePrimaryKeyPg = (
  tableName: string,
  schema: string,
  pks: Record<string, string>,
): JsonDeleteCompositePK[] => {
  return Object.values(pks).map((it) => {
    return {
      type: "delete_composite_pk",
      tableName,
      data: it,
      schema,
      constraintName: PgSquasher.unsquashPK(it).name,
    } as JsonDeleteCompositePK;
  });
};

export const prepareAlterCompositePrimaryKeyPg = (
  tableName: string,
  schema: string,
  pks: Record<string, { __old: string; __new: string }>,
): JsonAlterCompositePK[] => {
  return Object.values(pks).map((it) => {
    return {
      type: "alter_composite_pk",
      tableName,
      old: it.__old,
      new: it.__new,
      schema,
      oldConstraintName: PgSquasher.unsquashPK(it.__old).name,
      newConstraintName: PgSquasher.unsquashPK(it.__new).name,
    } as JsonAlterCompositePK;
  });
};

export const prepareAddUniqueConstraintPg = (
  tableName: string,
  schema: string,
  unqs: Record<string, string>,
): JsonCreateUniqueConstraint[] => {
  return Object.values(unqs).map((it) => {
    return {
      type: "create_unique_constraint",
      tableName,
      data: it,
      schema,
    } as JsonCreateUniqueConstraint;
  });
};

export const prepareDeleteUniqueConstraintPg = (
  tableName: string,
  schema: string,
  unqs: Record<string, string>,
): JsonDeleteUniqueConstraint[] => {
  return Object.values(unqs).map((it) => {
    return {
      type: "delete_unique_constraint",
      tableName,
      data: it,
      schema,
    } as JsonDeleteUniqueConstraint;
  });
};

export const prepareAddCheckConstraint = (
  tableName: string,
  schema: string,
  check: Record<string, string>,
): JsonCreateCheckConstraint[] => {
  return Object.values(check).map((it) => {
    return {
      type: "create_check_constraint",
      tableName,
      data: it,
      schema,
    } as JsonCreateCheckConstraint;
  });
};

export const prepareDeleteCheckConstraint = (
  tableName: string,
  schema: string,
  check: Record<string, string>,
): JsonDeleteCheckConstraint[] => {
  return Object.values(check).map((it) => {
    return {
      type: "delete_check_constraint",
      tableName,
      constraintName: PgSquasher.unsquashCheck(it).name,
      schema,
    } as JsonDeleteCheckConstraint;
  });
};

// add create table changes
// add handler to make drop and add and not alter(looking at __old and __new)
// add serializer for mysql and sqlite + types
// add introspect serializer for pg+sqlite+mysql
// add introspect actual code
// add push sqlite handler
// add push mysql warning if data exists and may have unique conflict
// add release notes
// add docs changes

export const prepareAlterUniqueConstraintPg = (
  tableName: string,
  schema: string,
  unqs: Record<string, { __old: string; __new: string }>,
): JsonAlterUniqueConstraint[] => {
  return Object.values(unqs).map((it) => {
    return {
      type: "alter_unique_constraint",
      tableName,
      old: it.__old,
      new: it.__new,
      schema,
    } as JsonAlterUniqueConstraint;
  });
};

export const preparePgCreateViewJson = (
  name: string,
  schema: string,
  definition: string,
  materialized: boolean,
  withNoData: boolean = false,
  withOption?: any,
  using?: string,
  tablespace?: string,
): JsonCreatePgViewStatement => {
  return {
    type: "create_view",
    name: name,
    schema: schema,
    definition: definition,
    with: withOption,
    materialized: materialized,
    withNoData,
    using,
    tablespace,
  };
};

export const prepareDropViewJson = (name: string, schema?: string, materialized?: boolean): JsonDropViewStatement => {
  const resObject: JsonDropViewStatement = <JsonDropViewStatement>{
    name,
    type: "drop_view",
  };

  if (schema) resObject["schema"] = schema;

  if (materialized) resObject["materialized"] = materialized;

  return resObject;
};

export const prepareRenameViewJson = (
  to: string,
  from: string,
  schema?: string,
  materialized?: boolean,
): JsonRenameViewStatement => {
  const resObject: JsonRenameViewStatement = <JsonRenameViewStatement>{
    type: "rename_view",
    nameTo: to,
    nameFrom: from,
  };

  if (schema) resObject["schema"] = schema;
  if (materialized) resObject["materialized"] = materialized;

  return resObject;
};

export const preparePgAlterViewAlterSchemaJson = (
  to: string,
  from: string,
  name: string,
  materialized?: boolean,
): JsonAlterViewAlterSchemaStatement => {
  const returnObject: JsonAlterViewAlterSchemaStatement = {
    type: "alter_view_alter_schema",
    fromSchema: from,
    toSchema: to,
    name,
  };

  if (materialized) returnObject["materialized"] = materialized;
  return returnObject;
};

export const preparePgAlterViewAddWithOptionJson = (
  name: string,
  schema: string,
  materialized: boolean,
  withOption: MatViewWithOption | ViewWithOption,
): JsonAlterViewAddWithOptionStatement => {
  return {
    type: "alter_view_add_with_option",
    name,
    schema,
    materialized: materialized,
    with: withOption,
  } as JsonAlterViewAddWithOptionStatement;
};

export const preparePgAlterViewDropWithOptionJson = (
  name: string,
  schema: string,
  materialized: boolean,
  withOption: MatViewWithOption | ViewWithOption,
): JsonAlterViewDropWithOptionStatement => {
  return {
    type: "alter_view_drop_with_option",
    name,
    schema,
    materialized: materialized,
    with: withOption,
  } as JsonAlterViewDropWithOptionStatement;
};

export const preparePgAlterViewAlterTablespaceJson = (
  name: string,
  schema: string,
  materialized: boolean,
  to: string,
): JsonAlterViewAlterTablespaceStatement => {
  return {
    type: "alter_view_alter_tablespace",
    name,
    schema,
    materialized: materialized,
    toTablespace: to,
  } as JsonAlterViewAlterTablespaceStatement;
};

export const preparePgAlterViewAlterUsingJson = (
  name: string,
  schema: string,
  materialized: boolean,
  to: string,
): JsonAlterViewAlterUsingStatement => {
  return {
    type: "alter_view_alter_using",
    name,
    schema,
    materialized: materialized,
    toUsing: to,
  } as JsonAlterViewAlterUsingStatement;
};
