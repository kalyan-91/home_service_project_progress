'use server'

import { sql } from '@/lib/db'
import { memberById } from '@/lib/team-workspace'

export type ChatMessage = {
  id: string
  authorId: string
  channelId: string | null
  conversationId: string | null
  body: string
  createdAt: string
}

const VALID_MEMBERS = ['asif', 'meera', 'candy', 'meghana']

export async function getMessages(
  scope: { channelId: string } | { conversationId: string },
): Promise<ChatMessage[]> {
  const rows =
    'channelId' in scope
      ? await sql`
          SELECT id, author_id, channel_id, conversation_id, body, created_at
          FROM chat_messages
          WHERE channel_id = ${scope.channelId}
          ORDER BY created_at ASC, id ASC
        `
      : await sql`
          SELECT id, author_id, channel_id, conversation_id, body, created_at
          FROM chat_messages
          WHERE conversation_id = ${scope.conversationId}
          ORDER BY created_at ASC, id ASC
        `
  return rows.map((row) => ({
    id: String(row.id),
    authorId: row.author_id,
    channelId: row.channel_id,
    conversationId: row.conversation_id,
    body: row.body,
    createdAt: row.created_at as string,
  }))
}

export async function sendMessage(input: {
  authorId: string
  body: string
  channelId?: string
  conversationId?: string
}): Promise<ChatMessage | null> {
  const body = input.body.trim()
  if (!body) return null
  if (!VALID_MEMBERS.includes(input.authorId)) throw new Error('Unknown member')
  // Ensure the author resolves to a real member profile.
  memberById(input.authorId)

  const channelId = input.channelId ?? null
  const conversationId = input.conversationId ?? null
  if (!channelId && !conversationId) throw new Error('Missing chat target')

  const [row] = await sql`
    INSERT INTO chat_messages (author_id, channel_id, conversation_id, body)
    VALUES (${input.authorId}, ${channelId}, ${conversationId}, ${body})
    RETURNING id, author_id, channel_id, conversation_id, body, created_at
  `
  return {
    id: String(row.id),
    authorId: row.author_id,
    channelId: row.channel_id,
    conversationId: row.conversation_id,
    body: row.body,
    createdAt: row.created_at as string,
  }
}
