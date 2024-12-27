## [Utility Types](https://dev.to/arafat4693/typescript-utility-types-that-you-must-know-4m6k)
Utility types in Typescript are some predefined generic types that can be used to manipulate or create other new types. These types are available globally in all Typescript projects, so you don't need to add any dependencies to get these going.
- **Partial**: makes everything optional or partial.
- **Required**: The opposite to Partial is Required utility type, which makes everything required.
- **Omit**: You can use the Omit utility type to create a new type from an existing type, however, with some properties removed.
- **Pick**: The opposite of Omit is the Pick utility type that allows you to create a new type that contains only a subset of properties from an existing type.
- **Readonly**: Readonly utility types allow you to create a new type from an existing type set as readonly, which means we cannot modify any property after the initialization.
- **Mutable**: You can also create a Mutable type helper that allows you to convert all readonly types to mutable type.
- **Exclude**: Exclude utility type allows you to create a new type by removing members of an union.
- **Extract**: The opposite to Exclude is Extract utitlity type that allows you to pick a or multiple members from an union.
- **ReturnType**: ReturnType utility type lets you to extract the return type of a function type. It takes a function type as an argument and returns the value type that the function returns.
- **Awaited**: It extracts the resolved value of a Promise type or recursively resolves nested Promise types.