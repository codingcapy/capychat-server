
/*
author: Paul Kim
date: February 14, 2024
Version: 1.0.0
description: user route for CapyChat API server
 */

import express from "express";
import { validateUser, decryptToken } from "../controller";

const user = express.Router();

user.route('/login').post(validateUser);
user.route('/validation').post(decryptToken);

export default user;