// hashmap (map) operations.
function createHashMapExample() {
  const hashMap = new Map();
  hashMap.set("India", 130);
  hashMap.set("Nepal", 3);
  hashMap.set("Aus", 10);
  hashMap.set("Aus", 50);
  return hashMap;
}

function searchHashMapKey(hashMap, key) {
  return hashMap.has(key);
}

function searchHashMapValue(hashMap, value) {
  return Array.from(hashMap.values()).includes(value);
}

function deleteHashMapKey(hashMap, key) {
  hashMap.delete(key);
  return hashMap;
}

// hashset implementation.
function createHashSetExample() {
  const hashSet = new Set();
  hashSet.add(3);
  hashSet.add(1);
  hashSet.add(3);
  hashSet.add(5);
  hashSet.add(9);
  return hashSet;
}

function searchHashSetValue(hashSet, value) {
  return hashSet.has(value);
}

function deleteHashSetValue(hashSet, value) {
  hashSet.delete(value);
  return hashSet;
}
