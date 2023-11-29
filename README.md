# Electric SQL and Svelte

This is an example webapp using svelte and electric sql.
```
git clone https://github.com/conorbergin/svelte-electric-app/
cd svelte-electric-app
npm i
npm run dev
```

## The Backend
You only need to start the backend if you are trying to write directly to the sql database, or you want to sync data between instances.

You will need docker-compose v2, your distro might only have v1 in its repo, so check before installing.
```
cd backend
docker compose up
```
You then need to build the database using the sql in `backend/migrations.sql`, one way to do this is to copy and paste the commands into the psql command line. Install psql and run `psql -h localhost -U postgres -p 65432` and enter the password `proxy_password`, if you want to change these values have a look at the `backend/.envrc` file.

You can then add data to the sql tables in psql using commands such as: `INSERT INTO my_items (id, name) VALUES (gen_random_uuid(),"hello");`.

## Modifying
If you want to change the application you will need to define your own database. You can create a new postgres instance and create your own tables and electrify them using `ALTER TABLE my_table ENABLE ELECTRIC;` note that this will only work if the table has a uuid as a primary key.

After your databse is set up you need to generate the typescript client bindings using:
```
npx electric-sql generate
```
