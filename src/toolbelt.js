export const createEntry = (key, fileName, name, description, component) => ({
  [key]: {
    name,
    fileName,
    description,
    component
  }
});

let ids = {};

const getUniqueId = () => {
  const candidateId = Math.round(Math.random() * 1000000);

  if (ids[candidateId]) {
    return getUniqueId();
  }

  ids[candidateId] = true;

  return candidateId;
}

export const constructTree = (maxDeepness, maxNumberOfChildren, minNumOfNodes, deepness = 1) => {
  return new Array(minNumOfNodes).fill(deepness).map((si, i) => {
    const id = getUniqueId();
    const numberOfChildren = deepness === maxDeepness ? 0 : Math.round(Math.random() * maxNumberOfChildren);

    return {
      id,
      name: `Leaf ${id}`,
      children: numberOfChildren ? constructTree(maxDeepness, maxNumberOfChildren, numberOfChildren, deepness + 1) : [],
      state: {
        expanded: numberOfChildren ? Boolean(Math.round(Math.random())) : false,
        favorite: Boolean(Math.round(Math.random())),
        deletable: Boolean(Math.round(Math.random()))
      }
    };
  })
};