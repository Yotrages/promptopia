import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request) => {
    try {
        await connectToDB()
        const Prompts = await Prompt.find({}).populate('creator')
        return new Response(JSON.stringify(Prompts), {status: 200})

    } catch (error) {
        return new Response(JSON.stringify('Failed to fetch all prompts'), {status: 500})
    }
}