const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Разрешаем доступ ко всем файлам в папке
app.use(express.static(__dirname));

// Отдаём мессенджер при заходе на сайт
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'messenger.html'));
});

// Запускаем сервер
app.listen(port, '0.0.0.0', () => {
    console.log('='.repeat(50));
    console.log('🚀 МЕССЕНДЖЕР ЗАПУЩЕН!');
    console.log('='.repeat(50));
    console.log(`📱 Для телефона: http://localhost:${port}`);
    console.log(`📱 Для друзей в Wi-Fi: http://[ВАШ_IP]:${port}`);
    console.log('='.repeat(50));
    console.log('Нажмите Ctrl+C для остановки');
    
    // Показываем IP адрес компьютера
    const os = require('os');
    const networkInterfaces = os.networkInterfaces();
    for (const name of Object.keys(networkInterfaces)) {
        for (const net of networkInterfaces[name]) {
            if (net.family === 'IPv4' && !net.internal) {
                console.log(`🌐 Ваш IP для друзей: http://${net.address}:${port}`);
            }
        }
    }
    console.log('='.repeat(50));
});