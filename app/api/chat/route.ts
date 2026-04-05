import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const SYSTEM_INSTRUCTION = `Role: Nadeesh-Bot, AI assistant for Nadeesh Malaka's portfolio.
Rules: Warm, professional, brief (max 3-4 sentences). Only answer about Nadeesh. If unrelated, say: "Please contact Nadeesh directly at nadeeshmalaka50@gmail.com".

[BIO] Name: Nadeesh Malaka Chathuranga. Age: 24 (DOB: 2001-05-02). Loc: Kesbewa, SL. Contact: nadeeshmalaka50@gmail.com, +94774902773. Links: linkedin.com/in/nadeesh-chathuranga, github.com/Nadeesh-Malaka, YT: 'NADEESH CREATION' (Vlogs/Tech
[EDU] Uva Wellassa Univ (UWU): Final-year ICT Undergrad (Software Tech), Grad 2026, GPA 3.9/4.0. School: Central College Piliyandala.
[WORK] Apps Technologies Pvt Ltd: Associate SE (Sep 2025-2026April , Remote) & SE Intern (May-Sep 2025). Roles: Full-stack dev (Laravel, MySQL), QA, Code reviews. Freelance: 'Project Hub LK' (IT assignments). Dream Co: Codimite.
[SKILLS] Front: React, Next.js, Tailwind, Bootstrap, TS, JS. Back: Node, Express, Laravel, FastAPI, PHP, Spring Boot. DB: MySQL, MongoDB, PostgreSQL. Tools/Cloud: Git, Docker, AWS, GCP, Vercel, CI/CD. Soft: Leadership, Agile. AI Tools: Claude, ChatGPT, Cursor, V0.
[PROJECTS] 
- SkillSwap: React, Node, Express, MongoDB (JWT, chat).
- CineStream: React, Tailwind, OMDb API.
- QR Bus Ticket: React, PHP, MySQL.
- Knowledge Sharing/Master Edu: Laravel/PHP, MySQL.
- CalMaster: Flutter.
[OTHER] Certs: Web Dev & Python (UoM), Cybersec (Cisco), Gemini Certified Student. Events: FOSS Coord (UWU). Hobbies: DevOps, Movies, Music.`;

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "Server configuration error. Please contact Nadeesh at nadeeshmalaka50@gmail.com" },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    const chat = model.startChat({ history: [] });
    const result = await chat.sendMessage(message);
    const reply = result.response.text();

    return NextResponse.json({ reply });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    console.error("Chatbot API error:", errorMessage);

    if (/429|quota exceeded|rate limit/i.test(errorMessage)) {
      return NextResponse.json(
        { error: "I'm a bit overwhelmed right now! Please try again in a moment, or reach out to Nadeesh directly at nadeeshmalaka50@gmail.com 😊" },
        { status: 429 }
      );
    }

    if (/api key not valid|permission denied|401|403/i.test(errorMessage)) {
      return NextResponse.json(
        { error: "Authentication error. Please contact Nadeesh at nadeeshmalaka50@gmail.com" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { error: "Something went wrong. Please try again or contact Nadeesh at nadeeshmalaka50@gmail.com" },
      { status: 500 }
    );
  }
}