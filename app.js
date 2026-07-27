// Register Service Worker for PWA offline capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(err => {
            console.log('Service Worker registration failed:', err);
        });
    });
}

// Navigation Logic
function openModule(moduleId) {
    document.getElementById('main-menu').classList.add('hidden');
    
    // Hide all modules
    const modules = document.querySelectorAll('.module');
    modules.forEach(mod => mod.classList.add('hidden'));
    
    // Show selected module
    document.getElementById(moduleId).classList.remove('hidden');
}

function goHome() {
    const modules = document.querySelectorAll('.module');
    modules.forEach(mod => mod.classList.add('hidden'));
    document.getElementById('main-menu').classList.remove('hidden');
}

// Life: Daily Goal Logic
function saveGoal() {
    const goalInput = document.getElementById('daily-goal').value;
    const now = new Date();
    const hour = now.getHours();

    // Logic: If past 8PM, save as tomorrow's goal
    const targetDate = (hour >= 20) ? "tomorrow" : "today";
    
    // In a full app, this would use localForage encrypted storage
    localStorage.setItem('currentGoal', goalInput);
    localStorage.setItem('goalDate', now.toISOString());
    
    alert(`Goal set for ${targetDate}! We will check in at 8PM.`);
}

// Car: MPG Control Logic (Conceptual)
function calculateMPGControlChart(mpgHistory) {
    /* 
      To calculate UCL and LCL mathematically:
      1. Calculate average MPG (Mean).
      2. Calculate standard deviation (σ) of the MPG history.
      3. UCL = Mean + (3 * σ)
      4. LCL = Mean - (3 * σ)
      
      If new MPG < LCL: Trigger "Check engine/tire pressure" alarm.
      If new MPG > UCL: Trigger "Did you forget to log a fill-up?" prompt.
    */
}
