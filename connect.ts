import pg from "pg"
import { drizzle } from "drizzle-orm/node-postgres";
import { pgTable, serial, text, varchar, date, boolean, timestamp, integer } from "drizzle-orm/pg-core";

const Pool = pg.Pool

const connectionString = "postgresql://postgres:upqVUxABzeaUqIQadpjbBYmJmgpvglIm@monorail.proxy.rlwy.net:58027/railway"

export const pool = new Pool(
    {
        connectionString,
    }
);

export const db = drizzle(pool);

export const users = pgTable('users', {
    user_id: serial('user_id').primaryKey(),
    username: varchar('username', { length: 32 }),
    password: varchar('password', { length: 80 }),
    email: varchar('email', { length: 255 }),
    display_name: varchar('display_name', { length: 32 }),
    created_at: varchar('created_at'),
    active: boolean('active').default(true)
})

export const user_friends = pgTable('user_friends', {
    user_friend_id: serial('user_friend_id').primaryKey(),
    user_id: integer('user_id'),
    friend_id: integer('friend_id'),
    blocked: boolean('blocked').default(false),
    display_name: varchar('display_name', { length: 32 }),
    created_at: varchar('created_at')
})

export const chats = pgTable('chats', {
    chat_id: serial('chat_id').primaryKey(),
    title: varchar('title', { length: 80 }),
    created_at: varchar('created_at')
})

export const user_chats = pgTable('user_chats', {
    user_chat_id: serial('user_chat_id').primaryKey(),
    user_id: integer('user_id'),
    chat_id: integer('chat_id'),
    created_at: varchar('created_at')
})

export const messages = pgTable('messages', {
    message_id: serial('message_id').primaryKey(),
    content: varchar('content', { length: 25000 }),
    reply_username: varchar('reply_username', { length: 32 }),
    reply_content: varchar('reply_content', { length: 25000 }),
    username: varchar('username'),
    chat_id: integer('chat_id'),
    created_at: varchar('created_at')
})

export const comments = pgTable('comments', {
    comment_id: serial('comment_id').primaryKey(),
    email: varchar('email', { length: 255 }),
    content: varchar('content', { length: 25000 }),
    created_at: varchar('created_at')
})