const passwordInput = document.getElementById('password-input');
const strengthBar = document.getElementById('strength-bar');
const feedbackText = document.getElementById('feedback-text');

function getStrength(password) {
    if (!password) {
        return {
            score: 0,
            label: 'Enter a password to start.',
            width: '0%',
            color: 'linear-gradient(90deg, #5eead4, #818cf8)'
        };
    }

    let score = 0;

    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    if (password.length >= 16) score += 1;

    if (score <= 2) {
        return {
            score,
            label: 'Weak password. Add more length and variety.',
            width: '25%',
            color: '#f87171'
        };
    }

    if (score <= 4) {
        return {
            score,
            label: 'Fair password. Slightly stronger mix would help.',
            width: '60%',
            color: '#fbbf24'
        };
    }

    return {
        score,
        label: 'Strong password. Great job!',
        width: '100%',
        color: '#34d399'
    };
}

function updateStrengthMeter() {
    const result = getStrength(passwordInput.value);
    strengthBar.style.width = result.width;
    strengthBar.style.background = result.color;
    feedbackText.textContent = result.label;
}

if (passwordInput && strengthBar && feedbackText) {
    passwordInput.addEventListener('input', updateStrengthMeter);
    updateStrengthMeter();
}
