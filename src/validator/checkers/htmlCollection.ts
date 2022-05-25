export default (v: any): boolean => {
  const collectionTypes = [HTMLCollection, NodeList];

  const isCollection = collectionTypes.reduce(
    (acc, type) => acc || v instanceof type,
    false,
  );

  return isCollection;
};
