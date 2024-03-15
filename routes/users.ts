
/*
author: Paul Kim
date: February 8, 2024
version: 1.0
description: users route for CapyTalk API server
 */

import express from "express";
import { createUser, getUser, updateUser } from "../controller";

const users = express.Router();

users.route('/').post(createUser);
users.route('/:userId').get(getUser).post(updateUser);

export default users;