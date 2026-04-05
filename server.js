const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

const apps = [
  { id: 1, name: 'نظام النجوم - Star OS', description: 'نظام تشغيل عالمي متطور يعمل عن طريق النجوم', downloads: 100, file: 'es4.alnagm' },
  { id: 2, name: 'القلم النجمي - Star Pen', description: 'القلم الذي سوف يسطر كل العلوم المتطورة ويشفرها', downloads: 50, file: 'es5.alkalm' },
  { id: 3, name: 'ميزات ES6 النجمية - Star ES6', description: 'شيفرة برمجية باستخدام ميزات ES6', downloads: 75, file: 'es6.ft' },
  { id: 4, name: 'نظام هواتف النجم - Star Phones', description: 'نظام هواتف متطور يعمل بالنجوم', downloads: 200, file: 'e3.non' },
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
      <title>متجر تطبيقات النجوم</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 20px; background: linear-gradient(to bottom, #000, #001122); color: white; }
        .app { border: 1px solid #fff; padding: 10px; margin: 10px; background: rgba(255,255,255,0.1); border-radius: 5px; }
        button { background: #ff0; color: black; border: none; padding: 5px 10px; cursor: pointer; }
      </style>
    </head>
    <body>
      <h1>متجر تطبيقات النجوم - بيئة رقمية جديدة</h1>
      <p>استكشف تطبيقات نظام هواتف النجم وغيرها.</p>
      ${apps.map(app => `
        <div class="app">
          <h2>${app.name}</h2>
          <p>${app.description}</p>
          <p>عدد التحميلات: ${app.downloads}</p>
          <a href="/download/${app.file}"><button>تحميل</button></a>
        </div>
      `).join('')}
      <script>
        // Optional: track downloads
      </script>
    </body>
    </html>
  `);
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