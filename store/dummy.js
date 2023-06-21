const db = {
  user: [{ id: "1", name: "Carlos" }],
};

const list = async (table) => {
  return db[table] || [];
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
  console.log(db);
}

const remove = async (table, id) => {
  return true;
};

async function query(table, query) {
  let collection = await list(table);
  let keys = Object.keys(query);
  let key = keys[0];
  return collection.filter((item) => item[key] === query[key])[0] || null;
}

module.exports = {
  list,
  get,
  upsert,
  remove,
  query,
};
