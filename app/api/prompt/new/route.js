import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req) => {
    try {
        // Parse the request body
        const { userId, prompt, tag } = await req.json();
        if (!userId || !prompt || !tag) {
            return new Response("Invalid input data.", { status: 400 });
        }

        // Connect to the database
        await connectToDB();
        console.log("Database connected successfully");

        // Create a new prompt
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag,
        });

        // Save the prompt to the database
        await newPrompt.save();
        console.log("New prompt created successfully");

        return new Response(JSON.stringify(newPrompt), { status: 201 });
    } catch (error) {
        console.error("Error creating prompt:", error);
        return new Response("Failed to create a new prompt.", { status: 500 });
    }
};
