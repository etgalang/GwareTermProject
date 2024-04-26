const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    submittedAt: { type: Date, default: Date.now }
});

const subscriptionSchema = new mongoose.Schema({
    email: String,
    subscribedAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);
const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = { Contact, Subscription };
