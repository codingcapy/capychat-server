
/*
author: Paul Kim
date: February 14, 2024
Version: 1.0.0
description: chats route for CapyChat API server
 */

import express from "express";
import { addFriendToChat, createChat, getChat, getChats, getUsersInChat, leaveChat, updateChat } from "../controller";

const chats = express.Router();

chats.route('/').post(createChat);
chats.route('/user/:userId').get(getChats);
chats.route('/:chatId').get(getChat).post(updateChat);
chats.route('/participants/:chatId').get(getUsersInChat);
chats.route('/chat/:chatId').post(leaveChat);
chats.route('/chat/add/:chatId').post(addFriendToChat);

export default chats;