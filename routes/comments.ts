
/*
author: Paul Kim
date: February 14, 2024
Version: 1.0.0
description: comments route for CapyChat API server
 */

import express from "express";
import { createComment } from "../controller";

const comments = express.Router();

comments.route("/").post(createComment);

export default comments;