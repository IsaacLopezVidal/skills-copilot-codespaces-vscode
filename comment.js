// Create web server
// Date: 2021-01-26
// Creator: Nhat Hoang

const express = require('express');
const router = express.Router();
const path = require('path');

// Import controller
const commentController = require(path.join(__dirname, '..', 'controllers', 'commentController.js'));

// Get all comments
router.get('/', commentController.getAllComments);

// Get all comments of a post
router.get('/post/:postID', commentController.getAllCommentsOfPost);

// Get all comments of a user
router.get('/user/:userID', commentController.getAllCommentsOfUser);

// Get a comment by ID
router.get('/:commentID', commentController.getCommentByID);

// Create a comment
router.post('/', commentController.createComment);

// Update a comment
router.put('/:commentID', commentController.updateComment);

// Delete a comment
router.delete('/:commentID', commentController.deleteComment);

module.exports = router;