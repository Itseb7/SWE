const axios = require('axios');

// استبدل بالقيم الصحيحة
const API_TOKEN = 'dsws'; // مفتاح API الخاص بك
const PROJECT_KEY = 'Itseb7_SWE'; // مفتاح المشروع الخاص بك

async function fetchSonarCloudMetrics() {
    try {
        const response = await axios.get('https://sonarcloud.io/api/measures/component', {
            params: {
                component: PROJECT_KEY,
                metricKeys: 'coverage,bugs,vulnerabilities'
            },
            auth: {
                username: API_TOKEN,
                password: '' // لا حاجة لكتابة كلمة مرور
            }
        });
        
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

// استدعاء الدالة
fetchSonarCloudMetrics();