const axios = require('axios');
const fs = require('fs');

const YOUR_API_TOKEN = '8109bb25472ef272ebfca554a5e075cb0273c0af'; // استبدل برمز API الخاص بك
const YOUR_PROJECT_KEY = 'Itseb7_SWE'; // استبدل بمفتاح مشروعك

const url = 'https://sonarcloud.io/api/measures/component?component=Itseb7_SWE&metricKeys=coverage,bugs,vulnerabilities';

async function fetchAnalysisReport() {
    try {
        const response = await axios.get(url, {
            auth: {
                username: YOUR_API_TOKEN,
                password: ''
            }
        });

        const metrics = response.data.component.measures;

        let coverage = 0;
        let bugs = 0;
        let vulnerabilities = 0;

        metrics.forEach(metric => {
            switch (metric.metric) {
                case 'coverage':
                    coverage = metric.value;
                    break;
                case 'bugs':
                    bugs = metric.value;
                    break;
                case 'vulnerabilities':
                    vulnerabilities = metric.value;
                    break;
            }
        });

        // إعداد التقرير المفصل
        let report = `  // تغيرت من const إلى let
        تقرير تحليل الكود:
        ======================
        نسبة التغطية: ${coverage}%
        عدد الأخطاء: ${bugs}
        عدد الثغرات: ${vulnerabilities}

        تفاصيل الأخطاء والثغرات:
        ======================
        `;

        // الحصول على تفاصيل الأخطاء والثغرات
        const issuesUrl = 'https://sonarcloud.io/api/issues/search?componentKeys=Itseb7_SWE';
        const issuesResponse = await axios.get(issuesUrl, {
            auth: {
                username: YOUR_API_TOKEN,
                password: ''
            }
        });

        const issues = issuesResponse.data.issues;

        issues.forEach(issue => {
            report += '- ${issue.message} (نوع: ${issue.severity}, الخط: ${issue.line})\n';
        });

        // كتابة التقرير إلى ملف
        fs.writeFileSync('analysis_report.txt', report.trim());
        console.log('تم إنشاء التقرير في analysis_report.txt');

    } catch (error) {
        console.error('خطأ في جلب البيانات:', error.response ? error.response.data : error.message);
    }
}

// استدعاء الدالة
fetchAnalysisReport()