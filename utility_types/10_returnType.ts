// ReturnType utility type lets you to extract the return type of a function type. It takes a function type as an argument and returns the value type that the function returns.


export function add(a: number, b: number): number {
    return a + b;
}
  
export type AddReturnType = ReturnType<typeof add>;
// type AddReturnType = number;
  
// ---
  
export function addStr(a: string, b: string): string{
    return a + b;
}
  
export type AddReturnType2 = ReturnType<typeof addStr>;
// type AddReturnType2 = string;