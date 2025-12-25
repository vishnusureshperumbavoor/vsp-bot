#!/usr/bin/env node

/**
 * VSP Agent - Interactive Chat
 * Continuous conversation with Qwen2.5-0.5B
 */

const vspagent = require('./index');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Conversation history
const conversationHistory = [];

async function startChat() {
  console.clear();
  console.log("\n");
  console.log("  ╔════════════════════════════════════════════════════════════╗");
  console.log("  ║          🤖  VSP Agent - Interactive Chat Mode            ║");
  console.log("  ║              Powered by Qwen2.5-0.5B AI                   ║");
  console.log("  ╚════════════════════════════════════════════════════════════╝");
  console.log("\n");
  
  // Show loading animation
  const spinners = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
  let spinnerIndex = 0;
  let loadingMessage = "Initializing AI model";
  
  const loadingInterval = setInterval(() => {
    process.stdout.write(`\r  ${spinners[spinnerIndex]} ${loadingMessage}...   `);
    spinnerIndex = (spinnerIndex + 1) % spinners.length;
  }, 80);
  
  try {
    // Track loading stages
    let stage = 0;
    const stages = [
      "Initializing AI model",
      "Loading Qwen2.5-0.5B",
      "Setting up GPU acceleration",
      "Preparing model weights",
      "Almost ready"
    ];
    
    const stageInterval = setInterval(() => {
      if (stage < stages.length - 1) {
        stage++;
        loadingMessage = stages[stage];
      }
    }, 1000);
    
    await vspagent.initAI();
    
    clearInterval(loadingInterval);
    clearInterval(stageInterval);
    process.stdout.write("\r" + " ".repeat(80) + "\r");
    
    console.log("  ✅ Model loaded successfully!\n");
  console.log("  ╔════════════════════════════════════════════════════════════╗");
  console.log("  ║  🎯 Chat with VSP Agent about Vishnu Suresh Perumbavoor  ║");
  console.log("  ╠════════════════════════════════════════════════════════════╣");
  console.log("  ║  📝 Commands:                                              ║");
  console.log("  ║     • Type your question and press Enter                  ║");
  console.log("  ║     • Type 'exit' or 'quit' to end conversation           ║");
  console.log("  ║     • Type 'clear' to clear screen & reset history        ║");
  console.log("  ║     • Type 'reset' to reset conversation history          ║");
  console.log("  ║     • Press Ctrl+C to force quit                          ║");
  console.log("  ╚════════════════════════════════════════════════════════════╝");
    console.log();
    
    // Start the conversation loop
    askQuestion();
    
  } catch (error) {
    clearInterval(loadingInterval);
    process.stdout.write("\r" + " ".repeat(80) + "\r");
    console.log("\n");
    console.log("  ╔════════════════════════════════════════════════════════════╗");
    console.log("  ║  ❌ Error: Failed to initialize model                     ║");
    console.log("  ╚════════════════════════════════════════════════════════════╝");
    console.log("\n  Error Details:", error.message);
    console.log("\n  🔧 Troubleshooting:");
    console.log("     1. Check internet connection (first-time download)");
    console.log("     2. Ensure Node.js 18+ is installed");
    console.log("     3. Verify 1-2GB free RAM available");
    console.log("     4. Check disk space (~500MB needed)\n");
    rl.close();
  }
}

function askQuestion() {
  rl.question("\n💬 You: ", async (input) => {
    const question = input.trim();
    
    // Handle exit commands
    if (question.toLowerCase() === 'exit' || question.toLowerCase() === 'quit') {
  console.log("\n");
  console.log("  ╔════════════════════════════════════════════════════════════╗");
  console.log("  ║           👋 Thanks for chatting with VSP Agent!          ║");
  console.log("  ║                      Goodbye! 🚀                           ║");
  console.log("  ╚════════════════════════════════════════════════════════════╝");
      console.log("\n");
      rl.close();
      return;
    }
    
    // Handle clear command
    if (question.toLowerCase() === 'clear') {
      console.clear();
      conversationHistory.length = 0; // Clear history
      console.log("\n  ✨ Chat cleared! Conversation history reset.\n");
      askQuestion();
      return;
    }
    
    // Handle reset command
    if (question.toLowerCase() === 'reset') {
      conversationHistory.length = 0; // Clear history
      console.log("\n  🔄 Conversation history reset!\n");
      askQuestion();
      return;
    }
    
    // Handle empty input
    if (!question) {
      askQuestion();
      return;
    }
    
    try {
      // Show thinking indicator with spinner
      const thinkSpinners = ['⣾', '⣽', '⣻', '⢿', '⡿', '⣟', '⣯', '⣷'];
      let thinkIndex = 0;
      const thinkingInterval = setInterval(() => {
        process.stdout.write(`\r  ${thinkSpinners[thinkIndex]} Thinking...`);
        thinkIndex = (thinkIndex + 1) % thinkSpinners.length;
      }, 100);
      
      const startTime = Date.now();
      
      // Add user message to history
      conversationHistory.push({
        role: "user",
        content: question
      });
      
      // Get AI response with conversation history
      const response = await vspagent.chat(question, {
        max_new_tokens: 300,
        temperature: 0.7,
        conversationHistory: conversationHistory.slice(-10) // Keep last 10 messages
      });
      
      // Add assistant response to history
      conversationHistory.push({
        role: "assistant",
        content: response
      });
      
      const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
      
      // Clear thinking indicator
      clearInterval(thinkingInterval);
      process.stdout.write("\r" + " ".repeat(50) + "\r");
      
      // Display response (simple format)
      console.log("🤖 VSP Agent:", response);
      console.log(`   (${elapsed}s)\n`);
      
    } catch (error) {
      console.error("\n❌ Error:", error.message);
    }
    
    // Ask next question
    askQuestion();
  });
}

// Handle Ctrl+C gracefully
rl.on('SIGINT', () => {
  console.log("\n\n  ⚠️  Interrupted by user. Goodbye! 👋\n");
  process.exit(0);
});

// Start the chat
startChat().catch(console.error);

