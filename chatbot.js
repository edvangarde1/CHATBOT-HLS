import Chatbot from "https://edvangarde1.github.io/chatbot/updated_embed.js";
Chatbot.init({
  "n8nChatUrl": "https://nhuan99.app.n8n.cloud/webhook/4eaf2e3a-2316-4e3a-ada4-ed8706f06238/chat",
  "theme": {
    "button": {
      "backgroundColor": "#111173",
      "right": 5,
      "bottom": 15,
      "size": 65,
      "iconColor": "#FFFFFF",
      "customIconSrc": "img/agent2.png",
      "autoWindowOpen": {
        "autoOpen": true,
        "openDelay": 1
      }
    },
    "tooltip": {
      "showTooltip": true,
      "tooltipMessage": "🤖 Xin chào bạn 👋",
      "tooltipBackgroundColor": "#F0F0F9",
      "tooltipTextColor": "#1c1c1c",
      "tooltipFontSize": 14
    },
    "chatWindow": {
      "showTitle": true,
      "title": "EDVANGARDE AGENT",
      "titleAvatarSrc": "img/agent2.png",
      "welcomeMessage": "Chào bạn, bạn đang cần tìm gì ạ?",
      "errorMessage": "This is a custom error message",
      "backgroundColor": "#ffffff",
      "height": 609,
      "width": 500,
      "fontSize": 15,
      "starterPrompts": [
        "Tôi cần Bài giảng Giải tích 1",
        "Tôi cần Giáo trình Đại số"
      ],
      "starterPromptFontSize": 14,
      "clearChatOnReload": false,
      "botMessage": {
        "backgroundColor": "#F0F0F9",
        "textColor": "#050505",
        "showAvatar": true,
        "avatarSrc": "img/agent1.png"
      },
      "userMessage": {
        "backgroundColor": "#F0F0F9",
        "textColor": "#050505",
        "showAvatar": true,
        "avatarSrc": "img/user.png"
      },
      "textInput": {
        "placeholder": "Type your query",
        "backgroundColor": "#ffffff",
        "textColor": "#1e1e1f",
        "sendButtonColor": "#111173",
        "maxChars": 100,
        "maxCharsWarningMessage": "Bạn đã vượt quá giới hạn ký tự. Vui lòng nhập ít hơn 100 ký tự.",
        "autoFocus": false
      }
    }
  }
});
