// The opposite to Exclude is Extract utitlity type that allows you to pick a or multiple members from an union:

export type NumberOrBooleanOrString = number | boolean | string;

export type OnlyBoolean = Extract<NumberOrBooleanOrString, boolean>;

export const isPasswordCorrect: OnlyBoolean = true;
