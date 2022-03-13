const singularOrPlural = (option: any, type: string) => {
  if (option === 1) {
    return `${type}`;
  }
  return `${type}s`;
};

export default singularOrPlural;
