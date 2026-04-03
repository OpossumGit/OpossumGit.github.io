// Game state
let players = [];
let currentRound = 0;
let currentMatchIndex = 0;
let matchesInRound = [];

// DOM elements
const configureBtn = document.getElementById('configureBtn');
const nextMatchBtn = document.getElementById('nextMatchBtn');
const configModal = document.getElementById('configModal');
const matchModal = document.getElementById('matchModal');
const winnerModal = document.getElementById('winnerModal');
const playerNamesInput = document.getElementById('playerNamesInput');
const confirmConfigBtn = document.getElementById('confirmConfigBtn');
const cancelConfigBtn = document.getElementById('cancelConfigBtn');
const gameStatus = document.getElementById('gameStatus');
const roundVisualization = document.getElementById('roundVisualization');
const logEntries = document.getElementById('logEntries');
const matchDetails = document.getElementById('matchDetails');
const matchPlayers = document.getElementById('matchPlayers');
const closeWinnerBtn = document.getElementById('closeWinnerBtn');
const winnerName = document.getElementById('winnerName');

// Player class
class Player {
    constructor(name) {
        this.name = name;
        this.lives = 2; // Two sides of the egg
        this.active = true;
    }

    loseLife() {
        this.lives--;
        if (this.lives === 0) {
            this.active = false;
        }
    }

    reset() {
        this.lives = 2;
        this.active = true;
    }
}

// Event listeners
configureBtn.addEventListener('click', openConfigModal);
confirmConfigBtn.addEventListener('click', confirmConfiguration);
cancelConfigBtn.addEventListener('click', closeConfigModal);
nextMatchBtn.addEventListener('click', openNextMatch);
closeWinnerBtn.addEventListener('click', () => {
    closeWinnerModal();
    openConfigModal();
});

// Open configuration modal
function openConfigModal() {
    configModal.classList.add('active');
}

// Close configuration modal
function closeConfigModal() {
    configModal.classList.remove('active');
}

// Close match modal
function closeMatchModal() {
    matchModal.classList.remove('active');
}

// Close winner modal
function closeWinnerModal() {
    winnerModal.classList.remove('active');
}

// Confirm player configuration
function confirmConfiguration() {
    const input = playerNamesInput.value.trim();
    if (!input) {
        alert('Please enter at least one player name!');
        return;
    }

    const names = input.split('\n').filter(name => name.trim() !== '');
    
    if (names.length < 2) {
        alert('Please enter at least 2 players!');
        return;
    }

    // Initialize game
    resetGame();
    players = names.map(name => new Player(name.trim()));
    
    closeConfigModal();
    startNewRound();
}

// Reset game
function resetGame() {
    players = [];
    currentRound = 0;
    currentMatchIndex = 0;
    matchesInRound = [];
    logEntries.innerHTML = '';
    nextMatchBtn.style.display = 'none';
    gameStatus.textContent = '';
    roundVisualization.innerHTML = '';
}

// Shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Start new round
function startNewRound() {
    // Get active players
    const activePlayers = players.filter(p => p.active);
    
    // Check if we have a winner
    if (activePlayers.length === 1) {
        showWinner(activePlayers[0]);
        return;
    }
    
    if (activePlayers.length === 0) {
        alert('No players remaining! This should not happen.');
        return;
    }
    
    // Increment round
    currentRound++;
    currentMatchIndex = 0;
    
    // Randomize player order
    const shuffledPlayers = shuffleArray(activePlayers);
    
    // Create matches in a chain
    matchesInRound = [];
    for (let i = 0; i < shuffledPlayers.length; i++) {
        const attacker = shuffledPlayers[i];
        const defender = shuffledPlayers[(i + 1) % shuffledPlayers.length];
        matchesInRound.push({ attacker, defender });
    }
    
    // Visualize the round
    visualizeRound(shuffledPlayers);
    
    // Show Next Match button
    nextMatchBtn.style.display = 'inline-block';
    
    // Update game status
    gameStatus.textContent = `Round ${currentRound} - ${activePlayers.length} players remaining`;
}

// Visualize the round
function visualizeRound(shuffledPlayers) {
    roundVisualization.innerHTML = '';
    
    const header = document.createElement('div');
    header.className = 'round-header';
    header.textContent = `Round ${currentRound}`;
    roundVisualization.appendChild(header);
    
    const chain = document.createElement('div');
    chain.className = 'player-chain';
    
    shuffledPlayers.forEach((player, index) => {
        const playerItem = document.createElement('div');
        playerItem.className = 'player-item';
        playerItem.innerHTML = `${player.name} <span class="player-lives">(${player.lives})</span>`;
        chain.appendChild(playerItem);
        
        if (index < shuffledPlayers.length - 1) {
            const arrow = document.createElement('div');
            arrow.className = 'arrow';
            arrow.textContent = '→';
            chain.appendChild(arrow);
        }
    });
    
    // Add final arrow back to first player
    const finalArrow = document.createElement('div');
    finalArrow.className = 'arrow';
    finalArrow.textContent = '→';
    chain.appendChild(finalArrow);
    
    const firstPlayerCopy = document.createElement('div');
    firstPlayerCopy.className = 'player-item';
    firstPlayerCopy.style.opacity = '0.5';
    firstPlayerCopy.innerHTML = `${shuffledPlayers[0].name} <span class="player-lives">(${shuffledPlayers[0].lives})</span>`;
    chain.appendChild(firstPlayerCopy);
    
    roundVisualization.appendChild(chain);
}

// Open next match
function openNextMatch() {
    if (currentMatchIndex >= matchesInRound.length) {
        // Round is complete, start new round
        startNewRound();
        return;
    }
    
    const match = matchesInRound[currentMatchIndex];
    
    // Check if either player is already eliminated
    if (!match.attacker.active || !match.defender.active) {
        logSkippedMatch(match.attacker, match.defender);
        currentMatchIndex++;
        openNextMatch();
        return;
    }
    
    // Show match modal
    matchDetails.textContent = `${match.attacker.name}'s egg hits ${match.defender.name}'s egg!`;
    
    matchPlayers.innerHTML = '';
    
    // Create clickable player options
    const attackerDiv = document.createElement('div');
    attackerDiv.className = 'match-player';
    attackerDiv.textContent = match.attacker.name;
    attackerDiv.addEventListener('click', () => selectWinner(match.attacker, match.defender));
    
    const defenderDiv = document.createElement('div');
    defenderDiv.className = 'match-player';
    defenderDiv.textContent = match.defender.name;
    defenderDiv.addEventListener('click', () => selectWinner(match.defender, match.attacker));
    
    matchPlayers.appendChild(attackerDiv);
    matchPlayers.appendChild(defenderDiv);
    
    matchModal.classList.add('active');
}

// Select winner of a match
function selectWinner(winner, loser) {
    closeMatchModal();
    
    // Loser loses one life
    loser.loseLife();
    
    // Log the match
    logMatch(winner, loser);
    
    // Update visualization with new life counts
    updateVisualization();
    
    // Move to next match
    currentMatchIndex++;
    
    // Check if round is complete
    if (currentMatchIndex >= matchesInRound.length) {
        // Hide Next Match button temporarily
        nextMatchBtn.style.display = 'none';
        
        // Wait a moment then start new round
        setTimeout(() => {
            startNewRound();
        }, 500);
    }
}

// Log a match result
function logMatch(winner, loser) {
    const logEntry = document.createElement('div');
    logEntry.className = 'log-entry';
    
    let logText = `<span class="log-winner">${winner.name}</span> defeats <span class="log-loser">${loser.name}</span>`;
    
    if (!loser.active) {
        logText += ` - <strong>${loser.name} is eliminated!</strong>`;
        logEntry.classList.add('elimination');
    }
    
    logEntry.innerHTML = logText;
    logEntries.insertBefore(logEntry, logEntries.firstChild);
}

// Log a skipped match
function logSkippedMatch(attacker, defender) {
    const logEntry = document.createElement('div');
    logEntry.className = 'log-entry';
    logEntry.style.opacity = '0.7';
    
    const eliminated = !attacker.active ? attacker.name : defender.name;
    logEntry.innerHTML = `Match skipped: <span class="log-loser">${eliminated}</span> was already eliminated`;
    
    logEntries.insertBefore(logEntry, logEntries.firstChild);
}

// Update visualization with current life counts
function updateVisualization() {
    const playerItems = document.querySelectorAll('.player-item');
    playerItems.forEach(item => {
        const nameMatch = item.textContent.match(/^(.+?)\s*\(/);
        if (nameMatch) {
            const playerName = nameMatch[1].trim();
            const player = players.find(p => p.name === playerName);
            if (player) {
                item.innerHTML = `${player.name} <span class="player-lives">(${player.lives})</span>`;
            }
        }
    });
}

// Show winner
function showWinner(winner) {
    winnerName.textContent = winner.name;
    winnerModal.classList.add('active');
    nextMatchBtn.style.display = 'none';
    gameStatus.textContent = '🎉 Game Over! 🎉';
}
