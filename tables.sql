create table "user" (
    "id" SERIAL PRIMARY KEY,
    "username" character varying NOT NULL,
    "password" character varying NOT NULL,
    "email" character varying NOT NULL
);

create table "product" (
    "id" SERIAL PRIMARY KEY,
    "handle" character varying NOT NULL,
    "title" character varying NOT NULL,
    "description" character varying NOT NULL,
    "sku" character varying NOT NULL,
    "grams" integer NOT NULL,
    "stock" integer NOT NULL,
    "price" numeric NOT NULL,
    "compare_price" numeric NOT NULL,
    "barcode" character varying NOT NULL
);