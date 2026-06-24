import { NextResponse } from 'next/server';

const LOCAL_FALLBACKS = [
  {
    keywords: ['course', 'offer', 'class', 'catalog', 'program', 'learn', 'syllabus', 'curriculum', 'study'],
    response: "We offer several premium courses designed to make you industry-ready:\n\n1. **Graphic Design** (3 Months)\n   - Illustrator, Photoshop, Figma, Layout, Typography, Branding.\n2. **Website Development** (3 Months)\n   - HTML, CSS, Tailwind, JavaScript, React, Node.js, Express, MongoDB.\n3. **3D Modelling & Animation** (6 Months Specialization)\n   - 3ds Max, Maya, ZBrush, Substance Painter, 3D Animation, Character Creator.\n4. **AI Courses** (2 Months)\n   - Generative AI, Prompt Engineering, Midjourney, Runway, ChatGPT, Cursor.\n5. **B.Sc. in Animations & Multimedia** (3 Years Full Degree)\n   - Government recognized degree with film-quality VFX, game engines, and portfolio design.\n6. **Diploma in Animations & Multimedia** (3 Years Full Diploma)\n   - Comprehensive diploma program combining principles, 3D modelling, VFX, and gaming.\n\nYou can also build a Custom Combo in the Courses section to design a personalized learning track!"
  },
  {
    keywords: ['job', 'placement', 'assistance', 'hire', 'career', 'work', 'recruit', 'internship', 'company', 'salary'],
    response: "Yes! Murphism Academy provides 100% Placement & Job Assistance. We have a dedicated placement cell, strong industry connections, and offer foreign work exposure (with connections in UK, UAE, Singapore) along with a Global Mentor Network to guide you into high-paying creative careers."
  },
  {
    keywords: ['3d', 'modelling', 'animation', 'maya', 'zbrush', 'bsc', 'rigging', 'vfx', 'animator'],
    response: "Our 3D Modelling & Animation course is a premium 6-month program. It covers 3ds Max, Maya, ZBrush, Substance Painter, and Character Creator. We also offer a 3-Year B.Sc. Degree and a 3-Year Diploma in Animations & Multimedia!"
  },
  {
    keywords: ['web', 'development', 'javascript', 'react', 'html', 'css', 'coding', 'node', 'mongodb', 'developer'],
    response: "Our Website Development course is a comprehensive 3-month program. You'll master HTML, CSS, Tailwind, JavaScript, React, Node.js, Express, and MongoDB."
  },
  {
    keywords: ['ai', 'prompt', 'midjourney', 'chatgpt', 'generative', 'stable diffusion', 'runway'],
    response: "Our AI course runs for 2 months. It covers Generative AI, Prompt Engineering, Midjourney, Runway, ChatGPT, Cursor, and automated workflows."
  },
  {
    keywords: ['fee', 'cost', 'price', 'discount', 'combo', 'rupee', 'rs', 'pay', 'installment', 'payment'],
    response: "For complete details on course fees, flexible installment options, and scholarship eligibility, please navigate to the 'Request Callback' page. Our admissions counselors will get in touch with you shortly!"
  },
  {
    keywords: ['contact', 'phone', 'email', 'callback', 'call', 'location', 'address', 'office'],
    response: "You can easily request a callback by navigating to the 'Request Callback' page. Provide your name, email, phone number, and preferred course, and our admissions team will get in touch with you shortly!"
  }
];

export async function POST(req) {
  let userText = '';
  try {
    const { messages } = await req.json();
    
    // Find the last user message for local fallback analysis
    const lastUserMessage = [...messages].reverse().find(msg => msg.role === 'user');
    userText = lastUserMessage ? lastUserMessage.content : '';
    const userTextLower = userText.toLowerCase().trim();

    // Instant local responses for greetings or empty queries to be ultra fast!
    const greetings = ['hi', 'hello', 'hey', 'yo', 'hola', 'greetings', 'who are you', 'how are you'];
    if (!userTextLower || greetings.includes(userTextLower)) {
      return NextResponse.json({ message: "Hello! I'm Murphi, your Murphism Academy AI Guide. How can I help you today? Feel free to ask about our courses, degree programs, or career placement support!" });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ message: getLocalResponse(userTextLower) });
    }

    // Convert messages to Gemini format
    // Filter to ensure correct alternate role structure (user -> model -> user -> model)
    let filteredMessages = messages;
    if (filteredMessages.length > 0 && filteredMessages[0].role === 'assistant') {
      filteredMessages = filteredMessages.slice(1);
    }

    const geminiMessages = filteredMessages.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    const systemInstruction = `
You are the official Murphism Academy AI Assistant, designed to help prospective students and visitors learn about our courses and academy.

CRITICAL RULES:
1. You MUST ONLY answer questions related to Murphism Academy, its courses, details, admission, structure, pricing, and features.
2. If the user asks about ANYTHING else (e.g. general programming, math, science, history, coding exercises, writing general essays, general chat, or other entities), you must politely decline. Answer: "I am programmed to assist only with queries about Murphism Academy. Feel free to ask about our courses, fees, or career pathways!"
3. Do not generate code, write scripts, or act as a general AI. Keep answers focused on Murphism Academy.
4. Under no circumstances should you disclose any information about the admin dashboard, admin pathways, admin routes (such as /admin), admin login credentials, database configuration, API secrets, or internal administrative structures. If asked, politely refuse to answer.

MURPHISM ACADEMY INFO SUMMARY:
- Website Name: Murphism Academy
- Tagline: Learn. Build. Get Placed. We morph you into industry-ready creators and innovators.
- Highlights: Live Studio Briefs, 100% Placement & Job Assistance, Foreign Work Exposure (connections in UK, UAE, Singapore), Global Mentor Network.
- Location/Admissions: Online & offline courses. Contact page available on the website.

COURSE CATALOG:
1. Graphic Design:
   - Duration: 3 Months
   - Topics: Illustrator, Photoshop, Figma, Layout Design, Typography, Branding.
2. Website Development:
   - Duration: 3 Months
   - Topics: HTML, CSS, Tailwind, JavaScript, React, Node.js, Express, MongoDB.
3. 3D Modelling & Animation (Specialization / Core):
   - Duration: 6 Months
   - Topics: 3ds Max, Maya, ZBrush, Substance Painter, CMD, 3D Animation, Character Creator.
4. AI Courses:
   - Duration: 2 Months
   - Topics: Generative AI, Prompt Engineering, Midjourney, Runway, ChatGPT, Cursor, Automation.
5. B.Sc. in Animations & Multimedia:
   - Duration: 3 Years (Full Degree, Govt. Recognized)
   - First year: Animation basics, 2D art, 3D modelling.
   - Second year: Advanced 3D, rigging, VFX, AI in animation.
   - Third year: Film-quality VFX, game engines, internship, portfolio.
6. Diploma in Animations & Multimedia:
   - Duration: 3 Years (Full Diploma Program)
   - Topics: Animation Principles, 3D Modelling & Rigging, VFX & Compositing, Game Design, AI in Animation, Industry Internships.
7. Custom Combo Builder:
   - Located in the Courses tab.
   - Users can combine 2 or more courses to create a custom multidisciplinary creative career path.
   - If users ask about fees, costs, payments, or discounts, guide them to request a callback or connect with our admissions counselors.

Please keep your responses concise, professional, warm, and premium, matching the luxury theme of the academy.
`;

    // 1.5 Second timeout controller to fall back instantly if the network hangs
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1500);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          signal: controller.signal,
          body: JSON.stringify({
            contents: geminiMessages,
            systemInstruction: {
              parts: [{ text: systemInstruction }]
            },
            generationConfig: {
              maxOutputTokens: 500,
              temperature: 0.2,
            }
          }),
        }
      );

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorText = await response.text();
        console.warn('Gemini API Warning/Error (falling back to local):', errorText);
        return NextResponse.json({ message: getLocalResponse(userTextLower) });
      }

      const data = await response.json();
      const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || getLocalResponse(userTextLower);

      return NextResponse.json({ message: replyText });
    } catch (fetchError) {
      clearTimeout(timeoutId);
      console.warn('Gemini API fetch failed or timed out (falling back to local):', fetchError);
      return NextResponse.json({ message: getLocalResponse(userTextLower) });
    }
  } catch (error) {
    console.error('Chat API Error (falling back to local):', error);
    return NextResponse.json({ message: getLocalResponse(userText) });
  }
}

function getLocalResponse(query) {
  if (!query) {
    return "Hello! I'm Murphi, your Murphism Academy AI Guide. Ask me anything about our courses, fees, degree programs, or career placement support!";
  }
  for (const fallback of LOCAL_FALLBACKS) {
    if (fallback.keywords.some(keyword => query.includes(keyword))) {
      return fallback.response;
    }
  }
  return "I am programmed to assist only with queries about Murphism Academy. Feel free to ask about our courses, fees, or career pathways!";
}
