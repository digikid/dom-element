export default (v: any): boolean => {
  const html = new DOMParser().parseFromString(v, 'text/html');
  const nodes = html.body.childNodes;

  return nodes ? Array.from(nodes).some((node) => node.nodeType === 1) : false;
};
