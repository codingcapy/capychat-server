
/*
author: Paul Kim
date: February 8, 2024
version: 1.0
description: chats route for CapyTalk API server
 */

import express from "express";
import { createChat, getChat, getChats, leaveChat } from "../controller";

const chats = express.Router();

chats.route('/').post(createChat);
chats.route('/user/:userId').get(getChats);
chats.route('/:chatId').get(getChat).post();
chats.route('/chat/:chatId').post(leaveChat);

export default chats;