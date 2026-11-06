// Gold Rate Line Chart

const goldChart = new Chart(
    document.getElementById('goldChart'),
    {
        type: 'line',

        data: {
            labels: [
                'Oct 30',
                'Oct 31',
                'Nov 1',
                'Nov 2',
                'Nov 3',
                'Nov 4',
                'Nov 5'
            ],

            datasets: [{
                label: 'Gold Rate',

                data: [
                    12980,
                    12730,
                    12760,
                    12790,
                    12820,
                    13386,
                    13140
                ],

                borderColor: '#b98a3f',
                backgroundColor: 'rgba(226,181,91,0.25)',
                fill: true,
                tension: 0.4
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    }
);


// Customer Registration Bar Chart

const customerChart = new Chart(
    document.getElementById('customerChart'),
    {
        type: 'bar',

        data: {
            labels: [
                'Nov 26',
                'Oct 26',
                'Sep 26',
                'Aug 26'
            ],

            datasets: [
                {
                    label: 'Scheme Joined',
                    data: [18, 190, 210, 120],
                    backgroundColor: '#35b68d'
                },

                {
                    label: 'Sign Up Only',
                    data: [12, 145, 890, 370],
                    backgroundColor: '#e66d55'
                },

                {
                    label: 'Total Signups',
                    data: [30, 335, 1100, 490],
                    backgroundColor: '#655bdd'
                }
            ]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    }
);