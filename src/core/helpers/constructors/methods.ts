export default <T, K extends string>(
  methods: Record<K, any[]>,
  generator: (name: K, ...args: any[]) => T,
): Record<K, T> => Object.entries(methods).reduce((acc, method) => {
  const name = method[0] as K;
  const args = method[1] as any[];

  acc[name] = generator.apply({}, [name, ...args]);

  return acc;
}, {} as Record<K, T>);
