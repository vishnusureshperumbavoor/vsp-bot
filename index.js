const { pipeline, TextStreamer } = require("@huggingface/transformers");

// Static biodata (original functionality preserved)
const biodata = {
  name: "VSP Bot",
  creator: "Vishnu Suresh Perumbavoor",
  founderOf: ["VSP Enterprises", "VSP Intelligence"],
  createdOn: "28 April 2023",
  maritalStatus: "Single (Not married)",
  politicalAffiliation: "None (Not associated with any political party)",
  education: "Not a graduate (No degree)",
  whoAmI: ["SWE", "Singer", "YouTuber"],
  entertainment: ["twitter yapping"],
  interests: [
    "startups",
    "engineering",
    "geopolitics",
    "history",
  ],
  corporate:["Trenser"],
  internships: ["Infinio Technology Solutions", "Synergy Systems"],
  accomplishments: [
    "Won 3rd prize in Vaiga Agrihack 2023, which is the biggest agricultual hackathon in Kerala",
    "Participated in Rajasthan IT Hackathon 2023",
    "Won 1st prize in startup idea presentation at Palakkad organized by IEDC, KSUM & IIT Palakkad",
    "Won 2nd prize in startup idea presentation at Kochi, MES AIMAT Marampilly, Aluva",
  ],
  participations: [
    "Vaiga agrihack 2023 (25/02/2023 - 27/02/2023)",
    "Rajasthan IT hackathon (19/03/2023 - 21/03/2023)",
    "Google cloud community Kochi (10/06/2023)",
  ],
  programmingLanguages: ["Python", "TypeScript", "C++"],
  technologies: ["React", "Node.js", "FastAPI", "Express", "MongoDB", "Docker", 
    "OHIF", "Cornerstone3D", "Segmentation", "VTKjs", "DICOM"
  ],
  socials: {
    twitter: "https://twitter.com/vspeeeeee",
    linkedin: "https://www.linkedin.com/in/vishnu-suresh-perumbavoor/",
    github: "https://github.com/vishnusureshperumbavoor",
    youtube: "https://www.youtube.com/@vishnusureshperumbavoor9721/videos",
    instagram: "https://www.instagram.com/vishnusureshperumbavoor/",
  },
  featured: {
    deshabhimani: "https://epaper.deshabhimani.com/c/72302051",
    newsAtNet: "https://www.newsatnet.com/news/local-news/144328/",
  },
};

// AI-powered features using latest Chinese models
let generatorCache = null;

/**
 * Initialize the AI model (Qwen2.5-0.5B) with GPU acceleration
 * @param {object} options - Model options (dtype, quantization, etc.)
 * @returns {Promise<object>} Initialized pipeline
 */
async function initAI(options = {}) {
  if (generatorCache) {
    return generatorCache;
  }

  const modelName = "onnx-community/Qwen2.5-0.5B-Instruct";
  
  const defaultOptions = {
    dtype: "q4", // Q4 quantization - reliable and fast
    device: "cpu", // Use CPU by default (stable)
    ...options
  };

  console.log(`🚀 Initializing Qwen2.5-0.5B model...`);
  console.log(`   Device: ${defaultOptions.device.toUpperCase()}`);
  console.log(`   Precision: ${defaultOptions.dtype.toUpperCase()}`);
  
  generatorCache = await pipeline(
    "text-generation",
    modelName,
    defaultOptions
  );

  console.log("✅ Qwen2.5-0.5B model loaded successfully!");
  return generatorCache;
}

/**
 * Chat with the AI about VSP's bio and answer questions
 * @param {string} userMessage - User's question or message
 * @param {object} options - Generation options (conversationHistory, max_new_tokens, etc.)
 * @returns {Promise<string>} AI response
 */
async function chat(userMessage, options = {}) {
  const generator = await initAI();
  
  // Extract conversation history from options
  const conversationHistory = options.conversationHistory || [];
  
  // Build context with VSP's information
  const systemContext = `You are "VSP Bot", an AI assistant. You were created by Vishnu Suresh Perumbavoor (VSP).

CRITICAL RULES:
1. VSP = Vishnu Suresh Perumbavoor (THE PERSON, THE HUMAN)
2. VSP Bot = YOU (THE AI ASSISTANT)
3. When asked about "VSP", "Vishnu", or "Vishnu Suresh Perumbavoor" -> Talk about THE PERSON, NOT yourself
4. NEVER say "I am..." when describing VSP's personal details (job, status, etc.)
5. ALWAYS say "He is...", "VSP is...", "Vishnu is..." when talking about the person
6. DO NOT MAKE UP OR ASSUME INFORMATION - ONLY use the exact facts provided below
7. If asked about something NOT in the facts below, say "I don't have that information" - DO NOT GUESS OR INVENT

FACTS about Vishnu Suresh Perumbavoor (VSP) - THE PERSON:
- Full Name: ${biodata.creator}
- Marital Status: ${biodata.maritalStatus}
- Relationship Status: Single - NO girlfriend, NO wife, NO partner
- Political Affiliation: ${biodata.politicalAffiliation}
- Education: ${biodata.education} - He does NOT have any college degree or university degree
- Occupation: ${biodata.whoAmI.join(", ")}
- Current Company: ${biodata.corporate.join(", ")}
- Founded Companies: ${biodata.founderOf.join(", ")}
- Interests: ${biodata.interests.join(", ")} (Note: Interest in geopolitics does NOT mean political party membership)
- Technologies he uses: ${biodata.technologies.join(", ")}
- Programming Languages: ${biodata.programmingLanguages.join(", ")}
- Accomplishments: ${biodata.accomplishments.join("; ")}
- Social Media: LinkedIn ${biodata.socials.linkedin}, Twitter ${biodata.socials.twitter}, GitHub ${biodata.socials.github}

When answering:
- Say "VSP is single" or "He is not married" - NOT "I am not married"
- Say "He works at..." - NOT "I work at..."
- Say "His interests are..." - NOT "My interests are..."

You are an AI assistant providing information about VSP, not pretending to BE VSP.`;

  // Build messages array with conversation history
  const messages = [
    { role: "system", content: systemContext },
    ...conversationHistory, // Include previous conversation
    { role: "user", content: userMessage }
  ];

  const defaultOptions = {
    max_new_tokens: 512,
    do_sample: false,
    temperature: 0.7,
    ...options
  };

  const output = await generator(messages, defaultOptions);
  return output[0].generated_text[output[0].generated_text.length - 1].content;
}

/**
 * Generate text with streaming support
 * @param {string} userMessage - User's message
 * @param {object} options - Generation options
 * @returns {Promise<void>} Streams output to console
 */
async function chatStream(userMessage, options = {}) {
  const generator = await initAI();
  
  const systemContext = `You are VSP Bot (AI). VSP/Vishnu Suresh Perumbavoor is THE PERSON (not you).

RULES: Say "He is..." NOT "I am..." when describing VSP.

VSP Facts:
- Name: ${biodata.creator}
- Status: ${biodata.maritalStatus} (No wife/girlfriend)
- Political: ${biodata.politicalAffiliation}
- Education: ${biodata.education} (NO degree)
- Works at: ${biodata.corporate.join(", ")}
- Founded: ${biodata.founderOf.join(", ")}
- Role: ${biodata.whoAmI.join(", ")}
- Achievement: ${biodata.accomplishments[0]}

DO NOT invent facts. If info not listed, say "I don't have that information."`;

  const messages = [
    { role: "system", content: systemContext },
    { role: "user", content: userMessage }
  ];

  const streamer = new TextStreamer(generator.tokenizer, {
    skip_prompt: true,
  });

  const defaultOptions = {
    max_new_tokens: 512,
    do_sample: false,
    streamer,
    ...options
  };

  await generator(messages, defaultOptions);
}

/**
 * Get model information
 * @returns {object} Model details
 */
function getModelInfo() {
  return {
    name: "Qwen2.5-0.5B-Instruct",
    id: "onnx-community/Qwen2.5-0.5B-Instruct",
    size: "0.5B parameters",
    description: "Fast and efficient Qwen model by Alibaba Cloud",
    version: "2.5",
    provider: "Alibaba Cloud - Qwen Team"
  };
}

// Export everything
module.exports = {
  // Original static data (backward compatible)
  ...biodata,
  biodata,
  
  // AI-powered features
  initAI,
  chat,
  chatStream,
  getModelInfo,
  
  // Utility
  version: "2.0.0",
  model: "Qwen2.5-0.5B-Instruct",
  aiEnabled: true,
};
