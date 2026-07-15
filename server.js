const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Раздаём статику
app.use(express.static(__dirname));

// Главная страница
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'messenger.html'));
});

// Проверка здоровья (для Railway)
app.get('/health', (req, res) => {
    res.send('OK');
});

// Запуск сервера
app.listen(port, '0.0.0.0', () => {
    console.log('🚀 МЕССЕНДЖЕР ЗАПУЩЕН!');
    console.log(`📱 Порт: ${port}`);
});
