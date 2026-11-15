---
title: Handle a chat interaction
sidebar_position: 3
pagination_next: null
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export const toc = [
  {value: 'Prerequisites', id: 'prerequisites', level: 2},
  {value: 'Accept and reply to a chat', id: 'accept-an-interaction', level: 2},
  {value: 'Complete the interaction', id: 'complete-the-interaction', level: 2},
  {value: 'See also', id: 'related-task', level: 2},
];

# Handle a chat interaction

<Tabs defaultValue="microsoft" queryString="style" lazy>
<TabItem value="microsoft" label="Microsoft">

Accept an incoming chat, reply to the customer, and record the outcome.

## Prerequisites {/* #prerequisites */}

- [Set your status to Available](./manage-availability.md#set-your-status-to-available) and confirm your chat queue shows **Ready**.

## Accept and reply to a chat {/* #accept-an-interaction */}

1. In the offer notification, confirm that the channel is **Chat** and that the queue name matches your chat queue.
2. Select **Accept**. The conversation opens in the interaction panel.
3. Review the customer details and available interaction history.
4. In **Message**, enter your reply.
5. Select **Send**. Your reply appears in the conversation.

If the offer expires, stay **Available**. If the next expected offer doesn’t arrive, [troubleshoot missing offers](./manage-availability.md#if-you-are-not-receiving-offers).

## Complete the interaction {/* #complete-the-interaction */}

1. Select **End interaction** when the conversation finishes.
2. In the wrap-up panel, select an outcome code.
3. Summarize what you did and the outcome. Leave out passwords, payment card details, and other sensitive information.

   For example, “Helped the customer reset their password and confirmed they could sign in.”

4. Select **Save and close**.
5. In **Activity history**, open the saved interaction and confirm it shows the outcome code and summary.

If a save error appears, keep the wrap-up panel open and retry. If the error persists, give your supervisor the interaction ID and the error message.

## See also {/* #related-task */}

- [Pause new interactions](./manage-availability.md#pause-new-interactions)

</TabItem>
<TabItem value="google" label="Google">

In Nexus Connect Workspace, accept an incoming chat, reply to the customer, and record the outcome.

## Prerequisites {/* #prerequisites */}

- [Set your status to Available](./manage-availability.md#set-your-status-to-available) and confirm your chat queue shows **Ready**.

## Accept and reply to a chat {/* #accept-an-interaction */}

1. In the offer notification, confirm that the channel is **Chat** and that the queue name matches your chat queue.
2. Click **Accept**. The conversation opens in the interaction panel.
3. Review the customer details and available interaction history.
4. In **Message**, enter your reply.
5. Click **Send**. Your reply appears in the conversation.

If the offer expires, stay **Available**. If the next expected offer doesn’t arrive, [troubleshoot missing offers](./manage-availability.md#if-you-are-not-receiving-offers).

## Complete the interaction {/* #complete-the-interaction */}

1. When the conversation finishes, click **End interaction**.
2. In the wrap-up panel, select an outcome code.
3. Summarize what you did and the outcome. Leave out passwords, payment card details, and other sensitive information.

   For example, “Helped the customer reset their password and confirmed they could sign in.”

4. Click **Save and close**.
5. In **Activity history**, open the saved interaction and confirm it shows the outcome code and summary.

If a save error appears, keep the wrap-up panel open and retry. If the error persists, give your supervisor the interaction ID and the error message.

## See also {/* #related-task */}

- [Pause new interactions](./manage-availability.md#pause-new-interactions)

</TabItem>
</Tabs>
