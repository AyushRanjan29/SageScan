import Review from "../models/Review.js";
import { generateAIResponse } from "../services/geminiService.js";
import { SYSTEM_PROMPT_ANALYZE } from "../prompts/analyzePrompt.js";
import { SYSTEM_PROMPT_EXPLAIN } from "../prompts/explainPrompt.js";
import { SYSTEM_PROMPT_FIX } from "../prompts/fixPrompt.js";

export const analyzeCode = async (req, res, next) => {
    try {
    const { code, language } = req.body;

    if (!code || !code.trim()) {
        return res.status(400).json({
        message: "Code is required"
        });
    }

    if (!language) {
        return res.status(400).json({
        message: "Language is required"
        });
    }

    const prompt = `${SYSTEM_PROMPT_ANALYZE} + Language: ${language} + Code to review: ${code}`;

    const aiResponse = await generateAIResponse(prompt);

    let analysis;

    try {
        analysis = JSON.parse(aiResponse);
    } catch {
        return res.status(502).json({
        message: "AI returned invalid JSON",
        rawResponse: aiResponse
        });
    }

    const review = await Review.create({
        language,
        code,
        overallScore: analysis.overallScore,
        analysis
    });

    res.status(201).json({
        reviewId: review._id,
        ...analysis
    });

    } catch (error) {
    next(error);
    }
};

export const explainCode = async (req, res, next) => {
    try {
    const { code, language } = req.body;

    if (!code || !code.trim()) {
        return res.status(400).json({
        message: "Code is required"
        });
    }

    if (!language) {
        return res.status(400).json({
            message: "Language is required"
        });
    }
    
    const prompt = `${SYSTEM_PROMPT_EXPLAIN} + Language: ${language} + Code to explain: ${code}`;
    
    const explanation = await generateAIResponse(prompt);
    
    res.json({explanation});
    
} catch (error) {
    next(error);
}
};

export const fixCode = async (req, res, next) => {
    try {
        const { code, language } = req.body;
        
        if (!code || !code.trim()) {
            return res.status(400).json({
        message: "Code is required"
        });
    }

    if (!language) {
        return res.status(400).json({
            message: "Language is required"
        });
    }

    const prompt = `${SYSTEM_PROMPT_FIX} + Language: ${language} + Code to fix: ${code}`;

    const fixedCode = await generateAIResponse(prompt);

    res.json({fixedCode});

    } catch (error) {
    next(error);
    }
};