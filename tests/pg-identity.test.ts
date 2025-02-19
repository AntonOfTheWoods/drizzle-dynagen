import { integer, pgTable } from "drizzle-orm/pg-core";
import { expect, test } from "vitest";
import { diffTestSchemas } from "./schemaDiffer";

// same table - no diff
// 2. identity always/by default - no params +
// 3. identity always/by default - with a few params +
// 4. identity always/by default - with all params +

// diff table with create statement
// 2. identity always/by default - no params +
// 3. identity always/by default - with a few params +
// 4. identity always/by default - with all params +

// diff for drop statement
// 2. identity always/by default - no params, with params +

// diff for alters
// 2. identity always/by default - no params -> add param +
// 3. identity always/by default - with a few params - remove/add/change params +
// 4. identity always/by default - with all params - remove/add/change params +

test("create table: identity always/by default - no params", async () => {
  const from = {};

  const to = {
    users: pgTable("users", {
      id: integer("id").generatedByDefaultAsIdentity(),
    }),
  };

  const { statements, sqlStatements } = await diffTestSchemas(from, to, []);

  expect(statements).toStrictEqual([
    {
      columns: [
        {
          identity: "users_id_seq;byDefault;1;2147483647;1;1;1;false",
          name: "id",
          notNull: true,
          primaryKey: false,
          type: "integer",
        },
      ],
      compositePKs: [],
      compositePkName: "",
      schema: "",
      policies: [],
      isRLSEnabled: false,
      tableName: "users",
      type: "create_table",
      uniqueConstraints: [],
      checkConstraints: [],
    },
  ]);
  expect(sqlStatements).toStrictEqual([
    'CREATE TABLE IF NOT EXISTS "users" (\n\t"id" integer GENERATED BY DEFAULT AS IDENTITY (sequence name "users_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1)\n);\n',
  ]);
});

test("create table: identity always/by default - few params", async () => {
  const from = {};

  const to = {
    users: pgTable("users", {
      id: integer("id").generatedByDefaultAsIdentity({
        name: "custom_seq",
        increment: 4,
      }),
    }),
  };

  const { statements, sqlStatements } = await diffTestSchemas(from, to, []);

  expect(statements).toStrictEqual([
    {
      columns: [
        {
          identity: "custom_seq;byDefault;1;2147483647;4;1;1;false",
          name: "id",
          notNull: true,
          primaryKey: false,
          type: "integer",
        },
      ],
      compositePKs: [],
      compositePkName: "",
      policies: [],
      schema: "",
      isRLSEnabled: false,
      tableName: "users",
      type: "create_table",
      uniqueConstraints: [],
      checkConstraints: [],
    },
  ]);
  expect(sqlStatements).toStrictEqual([
    'CREATE TABLE IF NOT EXISTS "users" (\n\t"id" integer GENERATED BY DEFAULT AS IDENTITY (sequence name "custom_seq" INCREMENT BY 4 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1)\n);\n',
  ]);
});

test("create table: identity always/by default - all params", async () => {
  const from = {};

  const to = {
    users: pgTable("users", {
      id: integer("id").generatedByDefaultAsIdentity({
        name: "custom_seq",
        increment: 4,
        minValue: 3,
        maxValue: 1000,
        cache: 200,
        cycle: false,
      }),
    }),
  };

  const { statements, sqlStatements } = await diffTestSchemas(from, to, []);

  expect(statements).toStrictEqual([
    {
      columns: [
        {
          identity: "custom_seq;byDefault;3;1000;4;3;200;false",
          name: "id",
          notNull: true,
          primaryKey: false,
          type: "integer",
        },
      ],
      compositePKs: [],
      compositePkName: "",
      policies: [],
      isRLSEnabled: false,
      schema: "",
      tableName: "users",
      type: "create_table",
      uniqueConstraints: [],
      checkConstraints: [],
    },
  ]);
  expect(sqlStatements).toStrictEqual([
    'CREATE TABLE IF NOT EXISTS "users" (\n\t"id" integer GENERATED BY DEFAULT AS IDENTITY (sequence name "custom_seq" INCREMENT BY 4 MINVALUE 3 MAXVALUE 1000 START WITH 3 CACHE 200)\n);\n',
  ]);
});

test("no diff: identity always/by default - no params", async () => {
  const from = {
    users: pgTable("users", {
      id: integer("id").generatedByDefaultAsIdentity(),
    }),
  };

  const to = {
    users: pgTable("users", {
      id: integer("id").generatedByDefaultAsIdentity(),
    }),
  };

  const { statements, sqlStatements } = await diffTestSchemas(from, to, []);

  expect(statements).toStrictEqual([]);
  expect(sqlStatements).toStrictEqual([]);
});

test("no diff: identity always/by default - few params", async () => {
  const from = {
    users: pgTable("users", {
      id: integer("id").generatedByDefaultAsIdentity({
        name: "custom_seq",
        increment: 4,
      }),
    }),
  };

  const to = {
    users: pgTable("users", {
      id: integer("id").generatedByDefaultAsIdentity({
        name: "custom_seq",
        increment: 4,
      }),
    }),
  };

  const { statements, sqlStatements } = await diffTestSchemas(from, to, []);

  expect(statements).toStrictEqual([]);
  expect(sqlStatements).toStrictEqual([]);
});

test("no diff: identity always/by default - all params", async () => {
  const from = {
    users: pgTable("users", {
      id: integer("id").generatedByDefaultAsIdentity({
        name: "custom_seq",
        increment: 4,
        minValue: 3,
        maxValue: 1000,
        cache: 200,
        cycle: false,
      }),
    }),
  };

  const to = {
    users: pgTable("users", {
      id: integer("id").generatedByDefaultAsIdentity({
        name: "custom_seq",
        increment: 4,
        minValue: 3,
        maxValue: 1000,
        cache: 200,
        cycle: false,
      }),
    }),
  };

  const { statements, sqlStatements } = await diffTestSchemas(from, to, []);

  expect(statements).toStrictEqual([]);
  expect(sqlStatements).toStrictEqual([]);
});

test("drop identity from a column - no params", async () => {
  const from = {
    users: pgTable("users", {
      id: integer("id").generatedByDefaultAsIdentity(),
    }),
  };

  const to = {
    users: pgTable("users", {
      id: integer("id"),
    }),
  };

  const { statements, sqlStatements } = await diffTestSchemas(from, to, []);

  expect(statements).toStrictEqual([
    {
      columnName: "id",
      schema: "",
      tableName: "users",
      type: "alter_table_alter_column_drop_identity",
    },
  ]);
  expect(sqlStatements).toStrictEqual([`ALTER TABLE "users" ALTER COLUMN "id" DROP IDENTITY;`]);
});

test("drop identity from a column - few params", async () => {
  const from = {
    users: pgTable("users", {
      id: integer("id").generatedByDefaultAsIdentity({
        startWith: 100,
        increment: 3,
      }),
    }),
  };

  const to = {
    users: pgTable("users", {
      id: integer("id"),
    }),
  };

  const { statements, sqlStatements } = await diffTestSchemas(from, to, []);

  expect(statements).toStrictEqual([
    {
      columnName: "id",
      schema: "",
      tableName: "users",
      type: "alter_table_alter_column_drop_identity",
    },
  ]);
  expect(sqlStatements).toStrictEqual([`ALTER TABLE "users" ALTER COLUMN "id" DROP IDENTITY;`]);
});

test("drop identity from a column - all params", async () => {
  const from = {
    users: pgTable("users", {
      id: integer("id").generatedByDefaultAsIdentity({
        startWith: 100,
        increment: 3,
        cache: 100,
        cycle: true,
      }),
    }),
  };

  const to = {
    users: pgTable("users", {
      id: integer("id"),
    }),
  };

  const { statements, sqlStatements } = await diffTestSchemas(from, to, []);

  expect(statements).toStrictEqual([
    {
      columnName: "id",
      schema: "",
      tableName: "users",
      type: "alter_table_alter_column_drop_identity",
    },
  ]);
  expect(sqlStatements).toStrictEqual([`ALTER TABLE "users" ALTER COLUMN "id" DROP IDENTITY;`]);
});

test("alter identity from a column - no params", async () => {
  const from = {
    users: pgTable("users", {
      id: integer("id").generatedByDefaultAsIdentity(),
    }),
  };

  const to = {
    users: pgTable("users", {
      id: integer("id").generatedByDefaultAsIdentity({ startWith: 100 }),
    }),
  };

  const { statements, sqlStatements } = await diffTestSchemas(from, to, []);

  expect(statements).toStrictEqual([
    {
      columnName: "id",
      identity: "users_id_seq;byDefault;1;2147483647;1;100;1;false",
      oldIdentity: "users_id_seq;byDefault;1;2147483647;1;1;1;false",
      schema: "",
      tableName: "users",
      type: "alter_table_alter_column_change_identity",
    },
  ]);
  expect(sqlStatements).toStrictEqual(['ALTER TABLE "users" ALTER COLUMN "id" SET START WITH 100;']);
});

test("alter identity from a column - few params", async () => {
  const from = {
    users: pgTable("users", {
      id: integer("id").generatedByDefaultAsIdentity({ startWith: 100 }),
    }),
  };

  const to = {
    users: pgTable("users", {
      id: integer("id").generatedByDefaultAsIdentity({
        startWith: 100,
        cache: 10,
      }),
    }),
  };

  const { statements, sqlStatements } = await diffTestSchemas(from, to, []);

  expect(statements).toStrictEqual([
    {
      columnName: "id",
      identity: "users_id_seq;byDefault;1;2147483647;1;100;10;false",
      oldIdentity: "users_id_seq;byDefault;1;2147483647;1;100;1;false",
      schema: "",
      tableName: "users",
      type: "alter_table_alter_column_change_identity",
    },
  ]);
  expect(sqlStatements).toStrictEqual(['ALTER TABLE "users" ALTER COLUMN "id" SET CACHE 10;']);
});

test("alter identity from a column - by default to always", async () => {
  const from = {
    users: pgTable("users", {
      id: integer("id").generatedByDefaultAsIdentity(),
    }),
  };

  const to = {
    users: pgTable("users", {
      id: integer("id").generatedAlwaysAsIdentity({
        startWith: 100,
        cache: 10,
      }),
    }),
  };

  const { statements, sqlStatements } = await diffTestSchemas(from, to, []);

  expect(statements).toStrictEqual([
    {
      columnName: "id",
      identity: "users_id_seq;always;1;2147483647;1;100;10;false",
      oldIdentity: "users_id_seq;byDefault;1;2147483647;1;1;1;false",
      schema: "",
      tableName: "users",
      type: "alter_table_alter_column_change_identity",
    },
  ]);
  expect(sqlStatements).toStrictEqual([
    'ALTER TABLE "users" ALTER COLUMN "id" SET GENERATED ALWAYS;',
    'ALTER TABLE "users" ALTER COLUMN "id" SET START WITH 100;',
    'ALTER TABLE "users" ALTER COLUMN "id" SET CACHE 10;',
  ]);
});

test("alter identity from a column - always to by default", async () => {
  const from = {
    users: pgTable("users", {
      id: integer("id").generatedAlwaysAsIdentity(),
    }),
  };

  const to = {
    users: pgTable("users", {
      id: integer("id").generatedByDefaultAsIdentity({
        startWith: 100,
        cache: 10,
      }),
    }),
  };

  const { statements, sqlStatements } = await diffTestSchemas(from, to, []);

  expect(statements).toStrictEqual([
    {
      columnName: "id",
      identity: "users_id_seq;byDefault;1;2147483647;1;100;10;false",
      oldIdentity: "users_id_seq;always;1;2147483647;1;1;1;false",
      schema: "",
      tableName: "users",
      type: "alter_table_alter_column_change_identity",
    },
  ]);
  expect(sqlStatements).toStrictEqual([
    'ALTER TABLE "users" ALTER COLUMN "id" SET GENERATED BY DEFAULT;',
    'ALTER TABLE "users" ALTER COLUMN "id" SET START WITH 100;',
    'ALTER TABLE "users" ALTER COLUMN "id" SET CACHE 10;',
  ]);
});
