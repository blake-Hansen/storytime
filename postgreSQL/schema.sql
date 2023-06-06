DROP TABLE IF EXISTS account CASCADE;
DROP TABLE IF EXISTS story CASCADE;

CREATE TABLE IF NOT EXISTS account (
  id BIGSERIAL PRIMARY KEY,
  email TEXT,
  password TEXT,
  name TEXT
);

CREATE TABLE IF NOT EXISTS story (
  id BIGSERIAL PRIMARY KEY,
  account_id INT REFERENCES account (id),
  storyone TEXT,
  storytwo TEXT,
  storythree TEXT
);


CREATE INDEX email on account(email);
CREATE INDEX account_id on story(account_id);
