import { getDB } from "db";

(async () => {
  const db = await getDB();
  const users = db.users;
  await users.sync();
  await users.findOrCreate({ where: { name: "user1" } });
  await users.findOrCreate({ where: { name: "user2" } });

  console.log("done!");
})();
