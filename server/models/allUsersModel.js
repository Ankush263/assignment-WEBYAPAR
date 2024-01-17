const mongoose = require('mongoose');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');

const allUserSchema = new mongoose.Schema(
	{
		userId: {
			type: Number,
			required: [true, 'must provied a user id'],
			default: 0,
		},
		password: {
			type: String,
			required: [true, 'please provide a password'],
			minlength: 8,
			select: false,
		},
		role: {
			type: String,
			enum: ['user', 'admin'],
			default: 'user',
		},
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	}
);
