
/*
author: Paul Kim
date: February 8, 2024
version: 1.0
description: chats route for CapyTalk API server
 */

import express from "express";
import { addFriendToChat, createChat, getChat, getChats, leaveChat, updateChat } from "../controller";

const chats = express.Router();

chats.route('/').post(createChat);
chats.route('/user/:userId').get(getChats);
chats.route('/:chatId').get(getChat).post(updateChat);
chats.route('/chat/:chatId').post(leaveChat);
chats.route('/chat/add/:chatId').post(addFriendToChat);

export default chats;