import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const AI = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

export const generateAIResponse = async (prompt) => {
    const response = await AI.models.generateContent({
    model: "gemini-3.5-flash-lite",
    contents: prompt
    });

    return response.text;
};