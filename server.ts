import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory quote log (simulated CRM / mail dispatch)
const quoteSubmissions: Array<{
  id: string;
  createdAt: string;
  data: any;
}> = [];

// API: Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    facility: "Phoenix Pouch Co. - Phoenix AZ",
    activeQuotes: quoteSubmissions.length
  });
});

// API: Handle B2B Quote Submission (RFQ)
app.post("/api/quote", (req, res) => {
  try {
    const { fullName, companyName, email, phone, productLines, estimatedVolume, message } = req.body || {};

    if (!fullName || !email || !companyName) {
      return res.status(400).json({
        success: false,
        message: "Full Name, Company Name, and Email are required to request a quote."
      });
    }

    const refNo = `RFQ-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
    const newSubmission = {
      id: refNo,
      createdAt: new Date().toISOString(),
      data: req.body
    };

    quoteSubmissions.push(newSubmission);

    console.log(`[RFQ Received] ${refNo} from ${companyName} (${email}) for ${productLines?.join(', ') || 'Pouches'}`);

    return res.json({
      success: true,
      referenceNo: refNo,
      message: `Thank you, ${fullName}! Your quote request (${refNo}) has been submitted. A Phoenix Pouch Co. OEM Sales Specialist will review your requirements and respond within 24 business hours.`
    });
  } catch (error: any) {
    console.error("Quote submission error:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while submitting your quote request. Please try again or email sales@phoenixpouch.com directly."
    });
  }
});

// API: Gemini AI Pouch Formulation & Spec Advisor
app.post("/api/ai-spec-consultant", async (req, res) => {
  try {
    const { brandConcept, targetAudience, productCategory, questions } = req.body || {};
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      // Fallback structured guidance if key is not configured
      return res.json({
        recommendation: `Based on your concept for ${brandConcept || 'pouch manufacturing'}, we recommend a starting pilot run of 10,000 cans in standard 0.60g slim pouches with 6mg nicotine or 80mg caffeine, paired with a high-impact Spearmint Freeze or Citrus Surge flavor. Our Phoenix cGMP plant can deliver samples in 5-7 days!`,
        dosageSuggestion: productCategory === 'nicotine' ? '6mg / 9mg Dual Strength' : productCategory === 'caffeine' ? '80mg / 100mg Energy' : 'Focus Blend (50mg L-Theanine + 40mg Caffeine)',
        estimatedTurnaround: '5-7 Days Samples, 2-3 Weeks Production',
        regulatoryNote: 'All pouch products manufactured in our Phoenix, AZ facility strictly adhere to cGMP (21 CFR Part 111/117) and FDA facility registration standards.'
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    const prompt = `You are the Lead Formulation & Contract Manufacturing Specialist at Phoenix Pouch Co., a high-tech US B2B contract manufacturer in Phoenix, Arizona specializing in Private Label Nicotine Pouches, Nootropic Pouches, and Caffeine Pouches.
    
Client Request:
Brand Concept: ${brandConcept || 'New Pouch Brand'}
Product Category: ${productCategory || 'Custom Pouch'}
Target Audience: ${targetAudience || 'B2B Brand Owner'}
Questions / Requirements: ${questions || 'Looking for technical specs & production advice'}

Provide a clear, professional, B2B manufacturing recommendation covering:
1. Recommended Pouch Specifications (Weight: 0.45g/0.60g, Strength/Dosage, Moisture level)
2. Suggested Flavor Pairing for target demographic
3. Suggested Packaging (Can colorway, finish, catch lid)
4. Manufacturing Timeline & MOQ recommendation at Phoenix Pouch Co.

Keep your answer concise, highly professional, encouraging, and structured in bullet points.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return res.json({
      recommendation: response.text,
      estimatedTurnaround: '5-7 Days Samples, 2-3 Weeks Production',
      regulatoryNote: 'All pouch products manufactured in our Phoenix, AZ facility strictly adhere to cGMP (21 CFR Part 111/117) and FDA facility registration standards.'
    });
  } catch (err: any) {
    console.error("AI Spec Consultant error:", err);
    return res.status(500).json({
      error: "Unable to consult AI advisor at this time.",
      details: err?.message
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Phoenix Pouch Co.] B2B Server running on http://localhost:${PORT}`);
  });
}

startServer();
