// refactor to reasonable function
const fullTeam = ['Dagmar', 'Robin','Christian', 'Sebastian']
const team1 = []
let team2 =[]

for (let i = 0; i < 2; i++) {
    team1.push(...fullTeam.splice(Math.floor(Math.random() * fullTeam.length),1))
}
for (let i = 0; i < 2; i++) {
    team2 = fullTeam.filter(value => !team1[i].includes(value))
}

console.log(`Team 1 sind ${team1[0]} und ${team1[1]}`)
console.log(`Team 2 sind ${team2[0]} und ${team2[1]}`)
