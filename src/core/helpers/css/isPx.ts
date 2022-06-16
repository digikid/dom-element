export default (prop: string): boolean => ['width', 'height', 'margin', 'padding'].some((p) => prop.includes(p.toLowerCase()));
