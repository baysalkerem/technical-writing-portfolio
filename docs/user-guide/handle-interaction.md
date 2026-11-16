---
title: Handle a chat interaction
sidebar_position: 3
pagination_next: null
---
import {StyleText} from '@site/src/components/WritingStyle';
import WritingStyleSwitch from '@site/src/components/WritingStyleSwitch';

# Handle a chat interaction

<WritingStyleSwitch />

Accept an incoming chat, reply to the customer, and record the outcome. This procedure uses Nexus Connect Workspace in a desktop browser with a mouse.

## Prerequisites

- [Set your status to Available](./manage-availability.md#set-your-status-to-available) and confirm your chat queue shows **Ready**.

## Accept and reply to a chat {/* #accept-an-interaction */}

1. In the offer notification, confirm that the channel is **Chat** and that the queue name matches your chat queue.
2. <StyleText google="Click">Select</StyleText> **Accept**. The conversation opens in the interaction panel.
3. Review the customer details and available interaction history.
4. In **Message**, enter your reply.
5. <StyleText google="Click">Select</StyleText> **Send**. Your reply appears in the conversation.

If the offer expires, stay **Available**. If the next expected offer doesn’t arrive, [troubleshoot missing offers](./manage-availability.md#if-you-are-not-receiving-offers).

## Complete the interaction

1. <StyleText google="When the conversation finishes, click">Select</StyleText> **End interaction**<StyleText google=".">{' when the conversation finishes.'}</StyleText>
2. In the wrap-up panel, select an outcome code.
3. Summarize what you did and the outcome. Leave out passwords, payment card details, and other sensitive information.

   For example, “Helped the customer reset their password and confirmed they could sign in.”

4. <StyleText google="Click">Select</StyleText> **Save and close**.
5. In **Activity history**, open the saved interaction and confirm it shows the outcome code and summary.

If a save error appears, keep the wrap-up panel open and retry. If the error persists, give your supervisor the interaction ID and the error message.

## See also {/* #related-task */}

- [Pause new interactions](./manage-availability.md#pause-new-interactions)
