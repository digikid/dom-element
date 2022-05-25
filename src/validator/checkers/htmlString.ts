export default (v: any): boolean => {
  const html = new DOMParser().parseFromString(v, 'text/html');
  const nodes = Array.from(html.body.childNodes);

  return nodes.some((node) => node.nodeType === 1);
};
