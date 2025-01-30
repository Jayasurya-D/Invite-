function confirmAttendance() {
    const name = prompt("Please enter your name to confirm attendance:");
    if (name) {
        alert(`Thank you, ${name}! Your attendance has been confirmed.`);
        document.getElementById('surprise').classList.remove('hidden');
    } else {
        alert("Attendance confirmation cancelled.");
    }
}