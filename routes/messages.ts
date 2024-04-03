
/*
author: Paul Kim
date: February 14, 2024
Version: 1.0.0
description: messages route for CapyChat API server
 */

import express from "express";
import { createMessage, getMessages, updateMessage } from "../controller";

const messages = express.Router();

messages.route('/').post(createMessage);
messages.route('/update/:messageId').post(updateMessage);
messages.route('/:chatId').get(getMessages);

export default messages;