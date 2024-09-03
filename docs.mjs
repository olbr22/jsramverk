import openDb from './db/database.mjs';

const docs = {
    getAll: async function getAll() {
        let db = await openDb();

        try {
            return await db.all('SELECT rowid as id, * FROM documents');
        } catch (e) {
            console.error(e);

            return [];
        } finally {
            await db.close();
        }
    },

    getOne: async function getOne(id) {
        let db = await openDb();

        try {
            return await db.get('SELECT rowid as id, * FROM documents WHERE rowid=?', id);
        } catch (e) {
            console.error(e);

            return {};
        } finally {
            await db.close();
        }
    },

    addOne: async function addOne(body) {
        let db = await openDb();

        try {
            return await db.run(
                'INSERT INTO documents (title, content) VALUES (?, ?)',
                body.title,
                body.content,
            );
        } catch (e) {
            console.error(e);
        } finally {
            await db.close();
        }
    },

    /**
     * Updates a document with a given id
     * @param {number} id 
     * @param {object} body 
     * @returns boolean
     */
    putOne: async function (id, body) {
        let db = await openDb();

        try {
            return await db.run(
                'UPDATE documents SET title=?, content=? WHERE rowid=?',
                body.title,
                body.content,
                id,
            );
        } catch (e) {
            console.error(e);
            return false;
        } finally {
            await db.close();
        }
        return true;
    }
};

export default docs;
