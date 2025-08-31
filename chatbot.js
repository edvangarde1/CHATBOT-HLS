import Chatbot from "https://nhuanlv.github.io/chatbot-phone/updated_embed.js";
	  Chatbot.init({
		"n8nChatUrl": "https://ctybt09.app.n8n.cloud/webhook/2698a38c-1bcb-4a0d-9659-07533500196e/chat",
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
			"welcomeMessage": "Chào bạn! Mình là Edvangarde, một Chatbot AI chuyên tư vấn học liệu của Khoa Khoa học và Công nghệ Giáo dục. Mình có thể hỗ trợ bạn điều gì hãy cho mình biết nhé! 😊",
			"errorMessage": "This is a custom error message",
			"backgroundColor": "#ffffff",
			"height": 600,
			"width": 900,
			"fontSize": 15,
			"starterPrompts": [
			"Tôi cần tài liệu Giải tích 3 phù hợp với cách học của tôi là XEM VIDEO",
            "Tôi cần Đề thi cuối kỳ Nhóm ngành 2 Đại số dễ hiểu nhất giúp tôi đạt điểm từ A đến A+",
            "Tôi cần tìm slide thuyết trình Vật lý đại cương 2 do chuyên viên thiết kế"
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


