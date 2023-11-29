export default [
  {
    "statements": [
      "CREATE TABLE \"person\" (\n  \"id\" TEXT NOT NULL,\n  \"name\" TEXT NOT NULL,\n  \"age\" INTEGER NOT NULL,\n  CONSTRAINT \"person_pkey\" PRIMARY KEY (\"id\")\n) WITHOUT ROWID;\n",
      "-- Toggles for turning the triggers on and off\nINSERT OR IGNORE INTO _electric_trigger_settings(tablename,flag) VALUES ('main.person', 1);",
      "  /* Triggers for table person */\n\n  -- ensures primary key is immutable\n  DROP TRIGGER IF EXISTS update_ensure_main_person_primarykey;",
      "CREATE TRIGGER update_ensure_main_person_primarykey\n  BEFORE UPDATE ON \"main\".\"person\"\nBEGIN\n  SELECT\n    CASE\n      WHEN old.\"id\" != new.\"id\" THEN\n      \t\tRAISE (ABORT, 'cannot change the value of column id as it belongs to the primary key')\n    END;\nEND;",
      "-- Triggers that add INSERT, UPDATE, DELETE operation to the _opslog table\nDROP TRIGGER IF EXISTS insert_main_person_into_oplog;",
      "CREATE TRIGGER insert_main_person_into_oplog\n   AFTER INSERT ON \"main\".\"person\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.person')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'person', 'INSERT', json_object('id', new.\"id\"), json_object('age', new.\"age\", 'id', new.\"id\", 'name', new.\"name\"), NULL, NULL);\nEND;",
      "DROP TRIGGER IF EXISTS update_main_person_into_oplog;",
      "CREATE TRIGGER update_main_person_into_oplog\n   AFTER UPDATE ON \"main\".\"person\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.person')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'person', 'UPDATE', json_object('id', new.\"id\"), json_object('age', new.\"age\", 'id', new.\"id\", 'name', new.\"name\"), json_object('age', old.\"age\", 'id', old.\"id\", 'name', old.\"name\"), NULL);\nEND;",
      "DROP TRIGGER IF EXISTS delete_main_person_into_oplog;",
      "CREATE TRIGGER delete_main_person_into_oplog\n   AFTER DELETE ON \"main\".\"person\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.person')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'person', 'DELETE', json_object('id', old.\"id\"), NULL, json_object('age', old.\"age\", 'id', old.\"id\", 'name', old.\"name\"), NULL);\nEND;"
    ],
    "version": "20231127162729_851"
  },
  {
    "statements": [
      "CREATE TABLE \"club\" (\n  \"id\" TEXT NOT NULL,\n  \"name\" TEXT NOT NULL,\n  \"age\" INTEGER NOT NULL,\n  CONSTRAINT \"club_pkey\" PRIMARY KEY (\"id\")\n) WITHOUT ROWID;\n",
      "-- Toggles for turning the triggers on and off\nINSERT OR IGNORE INTO _electric_trigger_settings(tablename,flag) VALUES ('main.club', 1);",
      "  /* Triggers for table club */\n\n  -- ensures primary key is immutable\n  DROP TRIGGER IF EXISTS update_ensure_main_club_primarykey;",
      "CREATE TRIGGER update_ensure_main_club_primarykey\n  BEFORE UPDATE ON \"main\".\"club\"\nBEGIN\n  SELECT\n    CASE\n      WHEN old.\"id\" != new.\"id\" THEN\n      \t\tRAISE (ABORT, 'cannot change the value of column id as it belongs to the primary key')\n    END;\nEND;",
      "-- Triggers that add INSERT, UPDATE, DELETE operation to the _opslog table\nDROP TRIGGER IF EXISTS insert_main_club_into_oplog;",
      "CREATE TRIGGER insert_main_club_into_oplog\n   AFTER INSERT ON \"main\".\"club\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.club')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'club', 'INSERT', json_object('id', new.\"id\"), json_object('age', new.\"age\", 'id', new.\"id\", 'name', new.\"name\"), NULL, NULL);\nEND;",
      "DROP TRIGGER IF EXISTS update_main_club_into_oplog;",
      "CREATE TRIGGER update_main_club_into_oplog\n   AFTER UPDATE ON \"main\".\"club\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.club')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'club', 'UPDATE', json_object('id', new.\"id\"), json_object('age', new.\"age\", 'id', new.\"id\", 'name', new.\"name\"), json_object('age', old.\"age\", 'id', old.\"id\", 'name', old.\"name\"), NULL);\nEND;",
      "DROP TRIGGER IF EXISTS delete_main_club_into_oplog;",
      "CREATE TRIGGER delete_main_club_into_oplog\n   AFTER DELETE ON \"main\".\"club\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.club')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'club', 'DELETE', json_object('id', old.\"id\"), NULL, json_object('age', old.\"age\", 'id', old.\"id\", 'name', old.\"name\"), NULL);\nEND;"
    ],
    "version": "20231127162730_110"
  },
  {
    "statements": [
      "CREATE TABLE \"clubperson\" (\n  \"id\" TEXT NOT NULL,\n  \"person_id\" TEXT NOT NULL,\n  \"club_id\" TEXT NOT NULL,\n  CONSTRAINT \"clubperson_pkey\" PRIMARY KEY (\"id\")\n) WITHOUT ROWID;\n",
      "-- Toggles for turning the triggers on and off\nINSERT OR IGNORE INTO _electric_trigger_settings(tablename,flag) VALUES ('main.clubperson', 1);",
      "  /* Triggers for table clubperson */\n\n  -- ensures primary key is immutable\n  DROP TRIGGER IF EXISTS update_ensure_main_clubperson_primarykey;",
      "CREATE TRIGGER update_ensure_main_clubperson_primarykey\n  BEFORE UPDATE ON \"main\".\"clubperson\"\nBEGIN\n  SELECT\n    CASE\n      WHEN old.\"id\" != new.\"id\" THEN\n      \t\tRAISE (ABORT, 'cannot change the value of column id as it belongs to the primary key')\n    END;\nEND;",
      "-- Triggers that add INSERT, UPDATE, DELETE operation to the _opslog table\nDROP TRIGGER IF EXISTS insert_main_clubperson_into_oplog;",
      "CREATE TRIGGER insert_main_clubperson_into_oplog\n   AFTER INSERT ON \"main\".\"clubperson\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.clubperson')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'clubperson', 'INSERT', json_object('id', new.\"id\"), json_object('club_id', new.\"club_id\", 'id', new.\"id\", 'person_id', new.\"person_id\"), NULL, NULL);\nEND;",
      "DROP TRIGGER IF EXISTS update_main_clubperson_into_oplog;",
      "CREATE TRIGGER update_main_clubperson_into_oplog\n   AFTER UPDATE ON \"main\".\"clubperson\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.clubperson')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'clubperson', 'UPDATE', json_object('id', new.\"id\"), json_object('club_id', new.\"club_id\", 'id', new.\"id\", 'person_id', new.\"person_id\"), json_object('club_id', old.\"club_id\", 'id', old.\"id\", 'person_id', old.\"person_id\"), NULL);\nEND;",
      "DROP TRIGGER IF EXISTS delete_main_clubperson_into_oplog;",
      "CREATE TRIGGER delete_main_clubperson_into_oplog\n   AFTER DELETE ON \"main\".\"clubperson\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.clubperson')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'clubperson', 'DELETE', json_object('id', old.\"id\"), NULL, json_object('club_id', old.\"club_id\", 'id', old.\"id\", 'person_id', old.\"person_id\"), NULL);\nEND;"
    ],
    "version": "20231127162730_288"
  }
]