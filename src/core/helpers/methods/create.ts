export default <T, K extends string, A extends any[] = any[]>(
  methods: Record<K, A>,
  generator: (name: K, ...args: A) => T,
): Record<K, T> => Object.entries(methods).reduce((acc, method) => {
  const name = method[0] as K;
  const args = method[1] as A;

  acc[name] = generator(name, ...args);

  return acc;
}, {} as Record<K, T>);
