const players = [
    { name: "messi", goals: 30 },
    undefined,
    { name: "ronaldo", goals: 38 },
    { name: "neymar", goals: 29 },
    { name: "Mbappe", goals: 25 },
    { name: "pele", goals: 29 },
];

const filteredPlayers = players.filter(
    (player) => player && player.name && player.goals
);

const maxPlayerGoal = players.reduce((maxPlayer, player) =>
    player?.goals > maxPlayer?.goals ? player : maxPlayer);

const maxPlayerGoalName = maxPlayerGoal?.name;

const maxPlayerGoals = maxPlayerGoal?.goals;


console.log(filteredPlayers);
console.log(maxPlayerGoalName, maxPlayerGoals);
