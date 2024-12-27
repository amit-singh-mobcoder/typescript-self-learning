// Awaited utility type allows you to extract the resolved type of a promise or other type that uses await.

export type Response = Promise<Promise<string>>;

// Without Awaited
export type UnwrappedResponse = string; // You need to manually figure out the resolved type.

// With Awaited
export type ResolvedResponse = Awaited<Response>; // Automatically resolves to `string`.


/**
Practical Example: Reusable Utility for Async Results
Suppose you are implementing a function to handle async operations and want to type the resolved value dynamically.

async function fetchPost(postId: number): Promise<{ title: string; content: string }> {
    // Simulate an API call
    return { title: "My Post", content: "This is the content of the post." };
}

async function handleAsyncOperation<T>(operation: () => Promise<T>): Promise<T> {
    try {
        const result = await operation();
        console.log("Operation succeeded:", result);
        return result;
    } catch (error) {
        console.error("Operation failed:", error);
        throw error;
    }
}

type Post = Awaited<ReturnType<typeof fetchPost>>;

const postHandler = async () => {
    const post = await handleAsyncOperation(() => fetchPost(1));
    // `post` is automatically inferred as `{ title: string; content: string }`
    console.log(post.title);
};

 */


