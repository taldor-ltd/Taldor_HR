npm i     
    pg
    pg-hstore
    sequelize
    sequelize-hierarchy

npm install -g sequelize-auto

sequelize-auto -o "./models/db" -d <DB> -h <HOST> -p <PORT> -u <USER> -x <PASS> -e postgres -s <SCHEMA> -a "./config/sequelize-additional-config.json"