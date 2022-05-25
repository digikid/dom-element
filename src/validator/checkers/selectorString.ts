export default (v: any): boolean => {
  try {
    document.createDocumentFragment().querySelector(v as any);
  } catch {
    return false;
  }
  return true;
};
