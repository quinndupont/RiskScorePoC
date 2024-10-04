// app.js

document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('token-name');
    const suggestionsDiv = document.getElementById('suggestions');
    let tokensList = [];

    // Load tokens from JSON file on initialization
    fetch('data/crypto_vendors.json')
        .then(response => response.json())
        .then(data => {
            // Flatten the tokens from the vendors
            tokensList = Object.values(data).flat();
        });

    // Autocomplete handler
    inputField.addEventListener('input', () => {
        const query = inputField.value.toLowerCase();
        suggestionsDiv.innerHTML = '';
        if (query.length > 0) {
            const suggestions = tokensList.filter(token => token.toLowerCase().includes(query));
            suggestions.forEach(item => {
                const suggestion = document.createElement('div');
                suggestion.textContent = item;
                suggestion.onclick = () => {
                    inputField.value = item;
                    suggestionsDiv.innerHTML = '';
                };
                suggestionsDiv.appendChild(suggestion);
            });
        }
    });
});

// Function to get risk score
function getRiskScore() {
    const tokenName = document.getElementById('token-name').value;
    let score;
    let description;

    if (tokenName.startsWith('http')) {
        score = 'Scam';
        description = 'Unknown tokens are considered high risk';
    } else if (['Bitcoin', 'Ethereum'].includes(tokenName)) {
        score = 'Approved';
        description = 'Token is approved for investment';
    } else if (['Monero', 'ZCash', 'Dash'].includes(tokenName)) {
        score = 'Dangerous';
        description = 'Unlisted but known token';
    } else if (['OneCoin', 'Bitconnect'].includes(tokenName)) {
        score = 'Scam';
        description = 'Known scam token';
    } else {
        score = 'Risky';
        description = 'Token is listed by some vendors';
    }

    // Display the result
    document.getElementById('risk-score-result').innerHTML = `
        <h3>Token: ${tokenName}</h3>
        <p><strong>Risk Score:</strong> ${score}</p>
        <p><strong>Description:</strong> ${description}</p>
    `;
}
