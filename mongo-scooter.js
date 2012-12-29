
/** pages indexes **/
db.getCollection("pages").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** users indexes **/
db.getCollection("users").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** pages records **/
db.getCollection("pages").insert({
  "_id": "1",
  "display_order": 1,
  "title": "Home",
  "url": "\/"
});
db.getCollection("pages").insert({
  "_id": "2",
  "display_order": 2,
  "title": "Users",
  "url": "\/users"
});

/** system.indexes records **/
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "scooter.users",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "scooter.pages",
  "name": "_id_"
});

/** users records **/
db.getCollection("users").insert({
  "_id": "1",
  "first_name": "Art",
  "last_name": "Vandelay",
  "username": "NYCArch"
});
db.getCollection("users").insert({
  "_id": "2",
  "first_name": "Cal",
  "last_name": "Varnson",
  "username": "CalV"
});
