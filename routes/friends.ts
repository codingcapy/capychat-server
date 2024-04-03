
/*
author: Paul Kim
date: February 14, 2024
Version: 1.0.0
description: friends route for CapyChat API server
 */

import express from "express";
const friends = express.Router();

import { addFriend, getFriends } from "../controller";

friends.route('/').post(addFriend);
friends.route('/:userId').get(getFriends);

export default friends;