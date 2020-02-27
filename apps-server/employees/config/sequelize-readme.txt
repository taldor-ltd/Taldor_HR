NPM Packages That We Must Have: (make sure they appear in package.json and run "npm install"):
===============================
pg, pg-hstore, sequelize, sequelize-hierarchy 


Global NPM That we must have:
=============================
npm i -g sequelize-auto


Import Models From Databse:
===========================
sequelize-auto -o "./models/db" -d <DB> -h <HOST> -p <PORT> -u <USER> -x <PASS> -e postgres -s <SCHEMA> -a "./config/sequelize-additional-config.json"


Import Stored Procedures:
=========================
This is a manual Job.

1) run the following script:
        
    SELECT n.nspname as "Schema",
        p.proname as "Name",
        pg_catalog.pg_get_function_result(p.oid) as "Result data type",
        pg_catalog.pg_get_function_arguments(p.oid) as "Argument data types"
    FROM pg_catalog.pg_proc p
    JOIN pg_catalog.pg_roles u ON u.oid = p.proowner
    LEFT JOIN pg_catalog.pg_namespace n ON n.oid = p.pronamespace
    where n.nspname = 'hr'

2) copy the functions names into the object located in "src/startup/sb-stored-functions.js"
    keys are in camelCase, values are in snake_case

That's it!