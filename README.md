# vsp-bot npm package 🤖 AI-Powered Edition

## Description

This npm package provides information about [Vishnu Suresh Perumbavoor](https://vishnusureshperumbavoor.github.io/V-S-P/) with **AI-powered conversational capabilities** using **Qwen2.5-0.5B** by Alibaba Cloud.

### 🆕 What's New in v2.0

- ✅ **AI-Powered Conversations** - Chat with an AI that knows all about VSP
- ✅ **Qwen2.5-0.5B** - Fast and efficient model by Alibaba Cloud (500M parameters)
- ✅ **Lightweight** - Only ~500MB model download
- ✅ **Streaming Support** - Real-time response streaming
- ✅ **Backward Compatible** - Original static data API still works
- ✅ **Runs Locally** - No API keys needed, runs on your machine via Transformers.js

## Prerequisites

- Node.js 18+ (for ESM support in Transformers.js)
- 1-2GB RAM
- Internet connection (first run only, to download ~500MB model)

## Installation

```bash
npm install vsp-bot
```

## Quick Start

### 🎯 Interactive Chat via CLI (Recommended!)

After installing, chat directly from command line:

```bash
# Install globally
npm install -g vsp-bot

# Start chatting! (two commands work)
vsp-bot
# or
vspbot
```

**Or install locally and use:**

```bash
# Install in your project
npm install vsp-bot

# Run chat
npx vsp-bot
# or
npm run chat
```

This starts an interactive conversation where you can ask multiple questions in a row!

---

### Option 1: Static Data (Original Feature - Backward Compatible)

```javascript
const vspbot = require('vsp-bot');

// Access static biodata
console.log(vspbot.name);        // "VSP Bot"
console.log(vspbot.creator);     // "Vishnu Suresh Perumbavoor"
console.log(vspbot.biodata);     // Full biodata object
console.log(vspbot.socials);     // Social media links
```

### Option 2: AI-Powered Chat (New Feature 🚀)

```javascript
const vspbot = require('vsp-bot');

async function chat() {
  // Initialize AI (first time downloads model ~500MB)
  await vspbot.initAI();
  
  // Ask questions about VSP
  const response = await vspbot.chat("Who is Vishnu Suresh Perumbavoor?");
  console.log(response);
  
  // Ask about accomplishments
  const response2 = await vspbot.chat("Tell me about VSP's achievements");
  console.log(response2);
  
  // Get social media info
  const response3 = await vspbot.chat("How can I connect with VSP?");
  console.log(response3);
}

chat();
```

### Option 3: Interactive Continuous Chat (Best! 🎯)

```bash
# Run the interactive chat interface
node chat.js
```

This gives you a **real continuous conversation**:

```
🤖 VSP Bot - Interactive Chat Mode
============================================================
✅ Model loaded successfully!
============================================================

💬 You: Who is VSP?
🤖 VSP Bot: Vishnu Suresh Perumbavoor is an engineer, entrepreneur...

💬 You: What hackathons did he win?
🤖 VSP Bot: He won 3rd prize in Vaiga Agrihack 2023...

💬 You: Tell me more about his work
🤖 VSP Bot: He works at Trenser and has experience with...

💬 You: exit
👋 Thanks for chatting! Goodbye!
```

### Option 4: Streaming Chat

```javascript
const vspbot = require('vsp-bot');

async function streamChat() {
  await vspbot.initAI();
  
  // Streaming response (real-time output)
  await vspbot.chatStream("Tell me about VSP's hackathon achievements");
}

streamChat();
```

## API Reference

### Static Data (Original API)

All original properties are available:

```javascript
vspbot.name              // "VSP Bot"
vspbot.creator           // "Vishnu Suresh Perumbavoor"
vspbot.founderOf         // "VSP dot AI"
vspbot.createdOn         // "28 April 2023"
vspbot.whoIsHe           // Array of roles
vspbot.interests         // Array of interests
vspbot.entertainments    // Array of entertainment preferences
vspbot.internships       // Array of internships
vspbot.placement         // Current placement
vspbot.accomplishments   // Array of accomplishments
vspbot.participations    // Array of event participations
vspbot.socials           // Object with social media links
vspbot.featured          // Featured media links
vspbot.biodata           // Complete biodata object
```

### AI-Powered Methods (New)

#### `initAI(options?)`

Initialize the Qwen2.5-0.5B AI model.

**Parameters:**
- `options` (object, optional): Model options
  - `dtype` (string): Data type/quantization. Default: `"q4"`
  - `device` (string): Device to use. Default: `"auto"`

**Returns:** Promise<Pipeline>

**Example:**
```javascript
// Initialize with default settings
await vspbot.initAI();

// Custom options
await vspbot.initAI({
  dtype: "q4",
  device: "cpu"
});
```

#### `chat(userMessage, options?)`

Chat with the AI bot about VSP.

**Parameters:**
- `userMessage` (string): Your question or message
- `options` (object, optional): Generation options
  - `max_new_tokens` (number): Maximum tokens to generate. Default: 512
  - `temperature` (number): Sampling temperature. Default: 0.7
  - `do_sample` (boolean): Enable sampling. Default: false

**Returns:** Promise<string> - AI response

**Example:**
```javascript
const response = await vspbot.chat(
  "What are VSP's interests?",
  { max_new_tokens: 256, temperature: 0.8 }
);
```

#### `chatStream(userMessage, options?)`

Stream AI responses in real-time (outputs to console).

**Parameters:**
- `userMessage` (string): Your question
- `options` (object, optional): Same as `chat()`

**Returns:** Promise<void>

**Example:**
```javascript
await vspbot.chatStream("Tell me about VSP's achievements");
// Output streams to console in real-time
```

#### `getModelInfo()`

Get information about the AI model being used.

**Returns:** Object with model details

**Example:**
```javascript
const modelInfo = vspbot.getModelInfo();
console.log(modelInfo.name);        // "Qwen2.5-0.5B-Instruct"
console.log(modelInfo.size);        // "0.5B parameters"
console.log(modelInfo.provider);    // "Alibaba Cloud - Qwen Team"
```

## AI Model

**Qwen2.5-0.5B-Instruct** by Alibaba Cloud

| Feature | Details |
|---------|---------|
| **Size** | 0.5B parameters (~500MB download) |
| **Speed** | ⚡⚡⚡⚡ Very Fast |
| **Quality** | ⭐⭐⭐ Good |
| **RAM** | 1-2GB |
| **Provider** | Alibaba Cloud - Qwen Team |
| **Model ID** | `onnx-community/Qwen2.5-0.5B-Instruct` |

**Why Qwen2.5-0.5B?**
- ✅ Lightweight and fast
- ✅ Great for conversational AI
- ✅ Excellent multilingual support (English & Chinese)
- ✅ Low resource requirements
- ✅ Optimized with ONNX and quantization

## Examples

### Basic Usage

```javascript
const vspbot = require('vsp-bot');

// Check if AI is enabled
console.log('AI Enabled:', vspbot.aiEnabled);    // true
console.log('Version:', vspbot.version);         // "2.0.0"

// Use static data
console.log('Creator:', vspbot.creator);
console.log('LinkedIn:', vspbot.socials.linkedin);
```

### AI Chat Examples

```javascript
const vspbot = require('vsp-bot');

async function examples() {
  // Initialize once
  await vspbot.initAI();
  
  // Example 1: General info
  const resp1 = await vspbot.chat("Who is VSP?");
  
  // Example 2: Specific questions
  const resp2 = await vspbot.chat("What hackathons did VSP participate in?");
  
  // Example 3: Social media
  const resp3 = await vspbot.chat("Give me VSP's social media links");
  
  // Example 4: Interests
  const resp4 = await vspbot.chat("What does VSP like to do?");
}

examples();
```

### Interactive Chat via Terminal

```bash
# If installed globally
vsp-bot

# If installed locally
npx vsp-bot

# Or using npm script
npm run chat
```

This opens an interactive chat interface where you can have continuous conversations with vspbot!

## Performance Tips

1. **First Run**: Model downloads on first use (~500MB). Subsequent runs are instant.
2. **Memory**: Uses ~1-2GB RAM during inference
3. **Caching**: Model is initialized once and cached for subsequent calls
4. **Storage**: Model cached in `~/.cache/huggingface/` (~500MB disk space needed)

## How It Works

1. **Transformers.js**: Uses HuggingFace Transformers.js for Node.js
2. **ONNX Runtime**: Model runs via ONNX Runtime (optimized inference)
3. **Local Execution**: Everything runs locally, no API calls needed
4. **Qwen2.5**: Latest model from Alibaba Cloud's Qwen team
5. **Multilingual**: Supports both English and Chinese natively
6. **Quantization**: Q4 quantization for faster inference and smaller size

## Troubleshooting

### Error: Module not found

```bash
# Make sure transformers is installed
npm install @huggingface/transformers
```

### Model download fails

- Check internet connection
- Model downloads to `~/.cache/huggingface/` by default
- Need ~500MB free disk space

### Out of memory

- Close other memory-intensive applications
- Reduce `max_new_tokens` in chat options (try 128 or 256)
- Restart Node.js process

## Backward Compatibility

✅ All original v1.x features work unchanged:

```javascript
const vspbot = require('vsp-bot');

// v1.x code still works perfectly
console.log(vspbot);              // Shows all properties
console.log(vspbot.name);         // "VSP Bot"
console.log(vspbot.creator);      // "Vishnu Suresh Perumbavoor"
console.log(vspbot.socials);      // Social links object
```

## Version History

### v2.0.0 (Latest) - AI-Powered Edition
- Added AI chat capabilities powered by Qwen2.5-0.5B
- Fast and lightweight model (500M parameters)
- Streaming responses support
- Transformers.js integration
- Local execution (no API keys)

### v1.0.x
- Original static biodata API
- Basic information export

## Technical Details

- **Framework**: Transformers.js v3.3.0+
- **Model**: Qwen2.5-0.5B-Instruct (ONNX format)
- **Quantization**: Q4 (4-bit quantization for efficiency)
- **Runtime**: ONNX Runtime
- **Languages**: English, Chinese (multilingual support)
- **Model Size**: ~500MB download
- **Memory Usage**: 1-2GB RAM during inference

## Contact

For any inquiries or support, you can reach out to [Vishnu Suresh Perumbavoor](https://vishnusureshperumbavoor.github.io/V-S-P/)

[![LinkedIn][linkedin-shield]][linkedin-url]
[![github][github-shield]][github-url]
[![Twitter][twitter-shield]][twitter-url]
[![Linktree][linktree-shield]][linktree-url]
[![Instagram][instagram-shield]][instagram-url]
[![GMail][gmail-shield]][gmail-url]

## License

ISC

## Credits

- Created by: Vishnu Suresh Perumbavoor
- AI Model: Qwen2.5-0.5B by Alibaba Cloud
- Framework: HuggingFace Transformers.js
- ONNX Models: onnx-community

---

**🚀 Powered by Qwen2.5-0.5B - Alibaba Cloud's Latest AI Model**

[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/vishnu-suresh-perumbavoor/
[twitter-shield]: https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white
[twitter-url]: https://twitter.com/in/vspeeeeee
[instagram-shield]: https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white
[instagram-url]: https://www.instagram.com/vishnusureshperumbavoor/
[linktree-shield]: https://img.shields.io/badge/linktree-39E09B?style=for-the-badge&logo=linktree&logoColor=white
[linktree-url]: https://linktr.ee/vishnusureshperumbavoor2.0
[github-shield]: https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
[github-url]: https://github.com/vishnusureshperumbavoor
[gmail-shield]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[gmail-url]: mailto:vishnusureshperumbavoor@gmail.com
