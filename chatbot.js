import Chatbot from "https://nhuanlv.github.io/chatbot-phone/updated_embed.js";
	  Chatbot.init({
		"n8nChatUrl": "https://ctybt09.app.n8n.cloud/webhook/bc6e7dd4-1ec4-4c11-89c5-d67f7837d842/chat",
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
			"tooltipMessage": "🤖 Xin chào👋",
			"tooltipBackgroundColor": "#F0F0F9",
			"tooltipTextColor": "#1c1c1c",
			"tooltipFontSize": 14
		  },
		  "chatWindow": {
			"showTitle": true,
			"title": "EDVANGARDE AGENT",
			"titleAvatarSrc": "img/agent2.png",
			"welcomeMessage": "Chào bạn! Mình là SMARTVANTAGE, một chatbot AI chuyên tư vấn điện thoại. Nếu bạn cần tư vấn điện thoại hoặc cần so sánh các mẫu điện thoại với nhau, hãy cho mình biết nhé!☺️",
			"errorMessage": "This is a custom error message",
			"backgroundColor": "#ffffff",
			"height": 600,
			"width": 900,
			"fontSize": 15,
			"starterPrompts": [
			  "Tư vấn tôi điện thoại chơi game.",
			  "Tư vấn tôi điện thoại tầm giá 5 triệu"
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
