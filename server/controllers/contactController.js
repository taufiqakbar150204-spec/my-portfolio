import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to messages storage JSON file
const dataDir = path.join(__dirname, '..', 'data');
const messagesFilePath = path.join(dataDir, 'messages.json');

// Ensure data folder and messages.json exist
function ensureDataFile() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(messagesFilePath)) {
    fs.writeFileSync(messagesFilePath, JSON.stringify([], null, 2), 'utf-8');
  }
}

// Helper to read all saved messages
function readSavedMessages() {
  ensureDataFile();
  try {
    const raw = fs.readFileSync(messagesFilePath, 'utf-8');
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

// Helper to save messages
function writeSavedMessages(messages) {
  ensureDataFile();
  fs.writeFileSync(messagesFilePath, JSON.stringify(messages, null, 2), 'utf-8');
}

/**
 * Controller to handle contact form submissions
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const handleContactSubmit = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // 1. Validation: Required fields check
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields (name, email, subject, message) are required.',
      });
    }

    // 2. Validation: Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      });
    }

    // 3. Validation: Message length check
    if (message.trim().length < 5) {
      return res.status(400).json({
        success: false,
        message: 'Message must be at least 5 characters long.',
      });
    }

    // 4. Clean & prepare payload
    const newMessage = {
      id: `MSG-${Date.now()}`,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
      receivedAt: new Date().toISOString(),
    };

    // 5. Persist to server/data/messages.json
    const existingMessages = readSavedMessages();
    existingMessages.unshift(newMessage); // put newest message on top
    writeSavedMessages(existingMessages);

    // 6. Log the incoming message to server console
    console.log('--------------------------------------------------');
    console.log('📬 [NEW CONTACT MESSAGE RECEIVED & SAVED]');
    console.log(`ID:      ${newMessage.id}`);
    console.log(`From:    ${newMessage.name} <${newMessage.email}>`);
    console.log(`Subject: ${newMessage.subject}`);
    console.log(`Time:    ${newMessage.receivedAt}`);
    console.log(`Message:`);
    console.log(newMessage.message);
    console.log('--------------------------------------------------');

    return res.status(200).json({
      success: true,
      message: `Terima kasih, ${newMessage.name}! Pesan Anda telah berhasil kami terima dan tersimpan di server.`,
      data: newMessage,
    });
  } catch (error) {
    console.error('❌ Error handling contact form submission:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error while processing your request. Please try again later.',
    });
  }
};

/**
 * Controller to view all stored contact messages
 * Accessible at GET /api/contact/messages
 */
export const getAllMessages = (req, res) => {
  try {
    const messages = readSavedMessages();

    // If accessed via browser, render a clean modern dark-mode inbox view
    const acceptsHtml = req.headers.accept && req.headers.accept.includes('text/html');
    if (acceptsHtml && req.query.format !== 'json') {
      const itemsHtml = messages.length === 0
        ? `<div style="text-align:center; padding: 60px 20px; color: #64748b;">
             <p style="font-size: 18px; font-weight: 600;">Belum ada pesan masuk.</p>
             <p style="font-size: 14px;">Silakan coba kirim pesan dari form kontak portofolio.</p>
           </div>`
        : messages.map(m => `
            <div style="background: #111827; border: 1px solid #1f293d; border-radius: 14px; padding: 20px; margin-bottom: 16px;">
              <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: 8px;">
                <div>
                  <span style="font-size: 16px; font-weight: 700; color: #f8fafc;">${escapeHtml(m.name)}</span>
                  <span style="color: #10b981; font-size: 13px; font-family: monospace; margin-left: 8px;">&lt;${escapeHtml(m.email)}&gt;</span>
                </div>
                <span style="font-size: 11px; color: #64748b; font-family: monospace;">${new Date(m.receivedAt).toLocaleString('id-ID')}</span>
              </div>
              <div style="font-size: 14px; font-weight: 600; color: #38bdf8; margin-bottom: 8px;">Subjek: ${escapeHtml(m.subject)}</div>
              <div style="font-size: 14px; color: #cbd5e1; line-height: 1.6; white-space: pre-wrap; background: #0b0f19; padding: 14px; border-radius: 10px; border: 1px solid #1e293b;">${escapeHtml(m.message)}</div>
            </div>
          `).join('');

      return res.send(`
        <!DOCTYPE html>
        <html lang="id">
        <head>
          <meta charset="UTF-8">
          <title>Inbox Pesan Masuk - Portfolio Admin</title>
          <style>
            body { font-family: system-ui, sans-serif; background: #090d16; color: #f8fafc; margin: 0; padding: 30px 20px; }
            .container { max-width: 800px; margin: 0 auto; }
            .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #1e293b; padding-bottom: 16px; margin-bottom: 24px; }
            .badge { background: rgba(16,185,129,0.15); color: #10b981; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div>
                <h1 style="margin:0; font-size: 24px;">📬 Inbox Pesan Masuk Portofolio</h1>
                <p style="margin:4px 0 0; font-size: 13px; color: #94a3b8;">Data tersimpan otomatis di <code>server/data/messages.json</code></p>
              </div>
              <span class="badge">${messages.length} Pesan Diterima</span>
            </div>
            ${itemsHtml}
          </div>
        </body>
        </html>
      `);
    }

    return res.status(200).json({
      success: true,
      count: messages.length,
      messages,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve messages.',
    });
  }
};

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
