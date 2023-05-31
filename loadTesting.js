const http = require('http');

const serverUrl = 'http://localhost:3001/course';
const parallelRequests = 10; // Количество параллельных запросов
const totalRequests = 100; // Общее количество запросов

let completedRequests = 0;

function sendRequest() {
    http.get(serverUrl, (res) => {
        completedRequests++;
        console.log(`Завершен запрос ${completedRequests}/${totalRequests}`);

        res.on('data', () => {
            if (completedRequests === totalRequests) {
                console.log('Тестирование завершено');
            }
        });
    });
}

// Запуск параллельных запросов
for (let i = 0; i < parallelRequests; i++) {
    for (let j = 0; j < totalRequests / parallelRequests; j++) {
        setTimeout(sendRequest, i * 1000);
    }
}
