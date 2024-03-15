
/*
author: Paul Kim
date: February 8, 2024
version: 1.0
description: comments route for CapyTalk API server
 */

import express from "express";
import { createComment } from "../controller";

const comments = express.Router();

comments.route("/").post(createComment);

export default comments;