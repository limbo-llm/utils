import type { ChatMessageBuilder, ChatPromptBuilder } from "limbo";

/** Removes all nodes of type "image" from a message */
export function removeImageNodesFromMessage(message: ChatMessageBuilder) {
	for (const node of message.getNodes()) {
		if (node.type === "image") {
			message.removeNode(node);
		}
	}
}

/** Removes all nodes of type "image" from the messages in a chat prompt */
export function removeImageNodesFromChatPrompt(chatPromptBuilder: ChatPromptBuilder) {
	for (const message of chatPromptBuilder.getMessages()) {
		removeImageNodesFromMessage(message);
	}
}

/** Removes all nodes of type "tool_call" from a message in a chat prompt */
export function removeToolCallNodesFromMessage(message: ChatMessageBuilder) {
	for (const node of message.getNodes()) {
		if (node.type === "tool_call") {
			message.removeNode(node);
		}
	}
}

/** Removes all nodes of type "tool_call" from the messages in a chat prompt */
export function removeToolCallNodesFromChatPrompt(chatPromptBuilder: ChatPromptBuilder) {
	for (const message of chatPromptBuilder.getMessages()) {
		removeToolCallNodesFromMessage(message);
	}
}
