function getSortedNode(node) {
   const sortedKeys = Object.keys(node).sort();

   return sortedKeys.reduce((sortedObject, key) => {
      if (node[key] && Object.keys(node[key]).length) {
         node[key] = getSortedNode(node[key]);
      }

      sortedObject[key] = node[key];
      return sortedObject;
   }, {});
}

function sortObjectByKey(object) {
   // prevent sorting circular object
   JSON.stringify(object);

   return getSortedNode(object);
}

const inputObject = {
   za: null,
   a: 1,
   c: 2,
   b: 100,
   ca: {
      z: 10,
      b: 1,
   },
};

console.log(sortObjectByKey(inputObject));
