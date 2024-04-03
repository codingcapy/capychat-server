
/*
author: Paul Kim
date: February 14, 2024
Version: 1.0.0
description: users route for CapyChat API server
 */

import express from "express";
import { createUser, getUser, updateUser } from "../controller";

const users = express.Router();

users.route('/').post(createUser);
users.route('/:userId').get(getUser).post(updateUser);

export default users;