// Radar chart for skills
if(document.getElementById('skillChart')) {
    const ctx = document.getElementById('skillChart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Speed', 'Explosivity', 'Strategy', 'Shots', 'Technique', 'Leader'],
            datasets: [{
                label: 'Skill Levels',
                data: [60, 70, 50, 80, 65, 75],
                backgroundColor: 'rgba(66,133,244,0.2)',
                borderColor: '#4285F4',
                pointBackgroundColor: '#4285F4'
            }]
        },
        options: {
            scales: {
                r: {
                    beginAtZero: true,
                    suggestedMax: 100
                }
            }
        }
    });
}

// Field data for create match page
const fields = [
    {name: 'Central Park', schedule: ['10:00', '12:00', '14:00']},
    {name: 'East Field', schedule: ['09:00', '11:00', '13:00']},
    {name: 'West Court', schedule: ['08:00', '10:00', '16:00']}
];

function renderFields() {
    const container = document.getElementById('fields');
    if(!container) return;
    fields.forEach(f => {
        const div = document.createElement('div');
        div.className = 'field';
        div.innerHTML = `<h3>${f.name}</h3>`;
        const schedule = document.createElement('div');
        schedule.className = 'schedule';
        schedule.innerHTML = '<strong>Available:</strong> ' + f.schedule.join(', ');
        div.appendChild(schedule);
        container.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', renderFields);
