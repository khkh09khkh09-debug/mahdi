
const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Email transporter (placeholder)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'star.system@example.com',
    pass: 'password'
  }
});

const apps = [
  { id: 1, name: 'نظام النجوم - Star OS', description: 'نظام تشغيل عالمي متطور يعمل عن طريق النجوم', downloads: 100, file: 'star.os' },
  { id: 2, name: 'القلم النجمي - Star Pen', description: 'القلم الذي سوف يسطر كل العلوم المتطورة ويشفرها', downloads: 50, file: 'star.pen' },
  { id: 3, name: 'ميزات ES6 النجمية - Star ES6', description: 'شيفرة برمجية باستخدام ميزات ES6', downloads: 75, file: 'star.es6' },
  { id: 4, name: 'نظام هواتف النجم - Star Phones', description: 'نظام هواتف متطور يعمل بالنجوم', downloads: 200, file: 'star.light' },
  { id: 5, name: 'عملة النجم - Star Currency', description: 'عملة مالية عالمية تعتمد على نظام النجوم', downloads: 150, file: 'star.currency.js' },
  { id: 6, name: 'خوارزميات النجم - Star Algorithms', description: 'خوارزميات متقدمة لنظام النجوم والعملات', downloads: 80, file: 'star.algorithms.js' },
  { id: 7, name: 'متصفح النجم - Star Browser', description: 'متصفح خاص بنظام النجوم للوصول العالمي', downloads: 120, file: 'star.browser.html' }
];

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
      <meta charset="UTF-8">
      <title>نظام النجوم - Star OS</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; background: linear-gradient(to bottom, #000, #001122); color: white; text-align: center; }
        .star { font-size: 3em; color: #ff0; animation: twinkle 2s infinite; }
        @keyframes twinkle { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        .platforms { margin: 20px; }
        .platform { display: inline-block; margin: 10px; padding: 10px; background: rgba(255,255,255,0.1); border-radius: 5px; }
        .app { border: 1px solid #fff; padding: 10px; margin: 10px; background: rgba(255,255,255,0.1); border-radius: 5px; display: inline-block; }
        button { background: #ff0; color: black; border: none; padding: 5px 10px; cursor: pointer; }
      </style>
    </head>
    <body>
      <h1 class="star">🌟 نظام النجوم - Star OS 🌟</h1>
      <p>نظام تشغيل عالمي متطور. الأنظمة القديمة معطلة، كل شي مرتبط بالنجوم.</p>
      <div class="platforms">
        <div class="platform"><a href="https://twitter.com" style="color: #ff0;">تويتر</a></div>
        <div class="platform"><a href="https://facebook.com" style="color: #ff0;">فيسبوك</a></div>
        <div class="platform"><a href="https://instagram.com" style="color: #ff0;">إنستغرام</a></div>
        <div class="platform"><a href="https://youtube.com" style="color: #ff0;">يوتيوب</a></div>
        <div class="platform"><a href="/store" style="color: #ff0;">متجر النجوم</a></div>
        <div class="platform"><a href="/email" style="color: #ff0;">بريد النجم</a></div>
        <div class="platform"><a href="/services" style="color: #ff0;">خدمات النجم</a></div>
      </div>
      <h2>التطبيقات</h2>
      ${apps.slice(0, 4).map(app => `
        <div class="app">
          <h3>${app.name}</h3>
          <p>${app.description}</p>
          <a href="/download/${app.file}"><button>تحميل</button></a>
        </div>
      `).join('')}
      <p>انضم إلى الثورة النجمية!</p>
    </body>
    </html>
  `);
});

app.get('/services', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
      <meta charset="UTF-8">
      <title>خدمات النجم - Star Services</title>
      <style>body { background: linear-gradient(to bottom, #000, #001122); color: white; margin: 20px; }</style>
    </head>
    <body>
      <h1>خدمات النجم - Star Services</h1>
      <p>خدمات مفعلة: بريد إلكتروني، عملة، خوارزميات، متصفح.</p>
      <ul>
        <li><a href="/email" style="color: #ff0;">بريد النجم</a></li>
        <li><a href="/currency" style="color: #ff0;">عملة النجم</a></li>
        <li><a href="/store" style="color: #ff0;">متجر النجم</a></li>
        <li><a href="/browser" style="color: #ff0;">متصفح النجم</a></li>
      </ul>
      <a href="/" style="color: #ff0;">العودة إلى نظام النجوم</a>
    </body>
    </html>
  `);
});

app.get('/currency', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
      <meta charset="UTF-8">
      <title>عملة النجم - Star Currency</title>
      <style>body { background: linear-gradient(to bottom, #000, #001122); color: white; margin: 20px; }</style>
    </head>
    <body>
      <h1>عملة النجم - Star Currency</h1>
      <p>عملة مالية عالمية تعتمد على نظام النجوم.</p>
      <a href="/" style="color: #ff0;">العودة إلى المتجر</a>
    </body>
    </html>
  `);
});

app.get('/email', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
      <meta charset="UTF-8">
      <title>بريد النجم - Star Email</title>
      <style>body { background: linear-gradient(to bottom, #000, #001122); color: white; margin: 20px; }</style>
    </head>
    <body>
      <h1>بريد النجم - Star Email</h1>
      <form action="/send-email" method="post">
        <label>إلى:</label><br><input type="email" name="to" required style="width: 100%;"><br>
        <label>الموضوع:</label><br><input type="text" name="subject" required style="width: 100%;"><br>
        <label>الرسالة:</label><br><textarea name="message" required style="width: 100%; height: 100px;"></textarea><br>
        <button type="submit" style="background: #ff0; color: black; border: none; padding: 5px 10px;">إرسال</button>
      </form>
      <a href="/" style="color: #ff0;">العودة إلى المتجر</a>
    </body>
    </html>
  `);
});

app.post('/send-email', (req, res) => {
  const { to, subject, message } = req.body;
  const mailOptions = {
    from: 'star.system@example.com',
    to,
    subject,
    text: message
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.send('<p style="color: red;">خطأ في الإرسال: ' + error.message + '</p><a href="/email">العودة</a>');
    } else {
      res.send('<p style="color: green;">تم إرسال البريد بنجاح!</p><a href="/email">العودة</a>');
    }
  });
});

app.get('/api/apps', (req, res) => {
  res.json(apps);
});

app.get('/download/:file', (req, res) => {
  const file = req.params.file;
  const filePath = path.join(__dirname, file);
  res.download(filePath, file, (err) => {
    if (err) {
      res.status(404).send('File not found');
    }
  });
});

app.listen(port, () => {
  console.log(`متجر التطبيقات يعمل على http://localhost:${port}`);
});