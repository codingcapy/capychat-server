
/*
author: Paul Kim
date: February 14, 2024
Version: 1.0.0
description: users route for CapyChat API server
 */

import express from "express";
import { blockUser, createUser, getUser, getUserFriend, sendRecoveryEmail, sendResetEmail, unblockUser, updateUserPassword, updateUsername } from "../controller";

const users = express.Router();

users.route('/').post(createUser);
users.route('/:userId').get(getUser).post(updateUserPassword);
users.route('/update/:userId').post(updateUsername);
users.route('/block/:friendName').post(blockUser);
users.route('/unblock/:friendName').post(unblockUser);
users.route('/userfriend/:friendName').post(getUserFriend);
users.route('/forgotpassword/:email').post(sendResetEmail);
users.route('/forgotusername/:email').post(sendRecoveryEmail);

export default users;