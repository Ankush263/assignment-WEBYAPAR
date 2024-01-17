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
		name: {
			type: stringify,
		},
		image: {
			type: stringify,
		},
		accepted: {
			type: boolean,
		},
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	}
);
