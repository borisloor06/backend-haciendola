create table "user" (
    "id" SERIAL PRIMARY KEY,
    "username" character varying NOT NULL,
    "password" character varying NOT NULL,
    "email" character varying NOT NULL
);