# Generate SQL creates for `drizzle-orm` objects

The excellent `drizzle-kit` is a powerful tool for managing `SQL` migrations. However, `drizzle-kit` doesn't provide
any API for simply generating `SQL` on the fly. `drizzle-kit`, and all its exports, *require* use on `node`. They
*require* a user to be in front of a CLI, in order to answer questions about, for example, table/column renames, etc.

This means all the excellent code can't be used for runtime dynamic generation in a browser, where you just want to
generate `SQL` from `drizzle-orm` objects. This might be useful for certain situations, like running embedded sql
runtimes like `@electric-sql/pglite`.

This library extracts the `postgresql` dialect version of the generator. It doesn't support any of the other dialects.

## Installation

```bash
pnpm i drizzle-dynagen
```

## Usage
```javascript
import { generateSql } from 'drizzle-dynagen';
import { pgTable, text, uuid } from "drizzle-orm/pg-core";
...
const help = pgTable("help", {
  id: uuid().notNull().primaryKey(),
  title: text().notNull(),
  body: text(),
});

generateSql({ tables: [help] }).then((x) => {
  console.log(x.sqlStatements[0]);
  /* outputs
   CREATE TABLE IF NOT EXISTS "help" (
      "id" uuid PRIMARY KEY NOT NULL,
      "title" text NOT NULL,
      "body" text
   );
  */
});
```

## Code and Copyright

The overwhelming majority of the code was simply extracted from the `drizzle-kit` directory of the `drizzle-orm` repo at
version `drizzle-kit@0.28.1`. The copyright for all that code belongs to `drizzle-team`.

The code was then made `prettier` and re-`lint`ed. Many relevant tests from the `drizzle-kit` package were also
extracted.

Like `drizzle-orm` and `drizzle-kit` as at Dec 2024, this library is licensed under the Apache 2.0 license.

### `json-diff`

[`json-diff`](https://github.com/andreyvit/json-diff) was also copied, de-nodified and converted to typescript
(see lib/json-diff). `json-diff` is © Andrey Tarantsov. Distributed under the MIT license.

## Library type

This repository was adapted from [here](https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma).
