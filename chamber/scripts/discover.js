// Calendar

const calendarDiv = document.getElementById("calendar");

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const today = new Date();
const currentMonth = monthNames[today.getMonth()];

const monthHeading = document.createElement("h2");
monthHeading.textContent = currentMonth + " " + today.getFullYear();

calendarDiv.insertBefore(monthHeading, calendarDiv.firstChild);

    // Sample events to populate the calendar
    const events = [
        { date: '2024-10-25', title: 'Business Networking' },
        { date: '2024-11-02', title: 'Workshop on Marketing' }
    ];

    // Create a basic grid for dates (this can be expanded to a full calendar)
    const calendarGrid = document.createElement('div');
    calendarGrid.style.display = 'grid';
    calendarGrid.style.gridTemplateColumns = 'repeat(7, 1fr)';
    calendarGrid.style.gridGap = '10px';
    
    // Generate dates for October (as an example)
    for (let day = 1; day <= 31; day++) {
        let dayDiv = document.createElement('div');
        dayDiv.textContent = day;
        dayDiv.style.padding = '10px';
        dayDiv.style.backgroundColor = '#fff';
        dayDiv.style.border = '1px solid #ddd';
        dayDiv.style.textAlign = 'center';

        // Check for events on this date
        let event = events.find(event => event.date === `2024-10-${day < 10 ? '0' + day : day}`);
        if (event) {
            dayDiv.style.backgroundColor = '#ffeb3b'; // Highlight event days
            dayDiv.title = event.title; // Show event title on hover
        }

        calendarGrid.appendChild(dayDiv);
    }

    calendarDiv.appendChild(calendarGrid);


    // Initialize data chart
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Free', 'Small Business', 'Corporate', 'Non-Profit'],
            datasets: [{
                label: 'Members',
                data: [12, 19, 3, 5], // Sample data
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


// fundraiser bar

const fundraiserGoal = 10000; // Example: Target amount
    const currentFunds = 6000; // Example: Current amount raised

    // Calculate the progress as a percentage
    const progressPercentage = Math.min((currentFunds / fundraiserGoal) * 100, 100); // Ensure it doesn't go over 100%

    // Update the progress bar width and percentage text
    const progressBar = document.getElementById("progress-bar");
    const percentageText = document.getElementById("fundraiser-percentage");

    progressBar.style.width = progressPercentage + "%"; // Set the width of the progress bar
    percentageText.textContent = Math.floor(progressPercentage) + "%"; // Update the percentage text