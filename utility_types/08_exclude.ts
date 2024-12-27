// Exclude utility type allows you to create a new type by removing members of an union

type NumberOrString = number | string;

type OnlyNumber = Exclude<NumberOrString, string>

export const a : OnlyNumber = 20;

// Type 'string' is not assignable to type 'number'
// export const b : OnlyNumber = 'jj'



// You can even exclude multiple members of an union:
type NumberOrStringOrBoolean =  number | string | boolean;

type OnlyBoolean = Exclude<NumberOrStringOrBoolean, number | string >

const isValid : OnlyBoolean = true;