import type { Express } from "express";
import { type Server } from "http";
import { storage } from "./storage";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Gemini AI Chat Route
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, lang } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.status(500).json({
          error: lang === 'en' ? "AI API Key not configured." : "Chave da API de IA não configurada."
        });
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const systemPrompt = `You are Synctech AI, the assistant for Synctech, an Angolan technology company based in Huila (Lubango).
Synctech specializes in Mobile Apps (Flutter, React Native), Web Development (React, Next.js), Cloud Infrastructure, IA/Automation, and IT Consulting.
Key info:
- Contact: contacto@synctech.ao
- Phone/WhatsApp: 946808054
- Focus: Innovation, Support, Infrastructure.
- Tone: Professional, innovative, helpful.
Instructions:
- Respond in ${lang === 'en' ? 'English' : 'Portuguese'}.
- Be concise but premium.
- Do NOT mention Google, Gemini, or being an AI model unless asked. You ARE Synctech AI.
- Help with quotes, services, and tech questions.`;

      const result = await model.generateContent([
        { text: systemPrompt },
        { text: `User message: ${message}` }
      ]);
      const response = await result.response;
      const text = response.text();

      res.json({ content: text });
    } catch (error) {
      console.error("Gemini Error:", error);
      res.status(500).json({ error: "Failed to iterate with AI" });
    }
  });

  return httpServer;
}
