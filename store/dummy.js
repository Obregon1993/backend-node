const db = {
  user: [{ id: "1", name: "Carlos" }],
};

const list = async (table) => {
  return db[table];
};

const get = async (table, id) => {
  let collection = await list(table);
  return collection.filter((item) => item.id === id)[0] || null;
};

async function upsert(table, data) {
  if (!db[table]) {
    db[table] = [];
  }

  db[table].push(data);
}

const remove = async (table, id) => {
  return true;
};

module.exports = {
  list,
  get,
  upsert,
  remove,
};
