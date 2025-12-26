#!/usr/bin/env node

// ENV Var Confessional - Where your environment variables come to confess their sins
// Usage: node env-confessional.js

const requiredVars = [
    { name: 'DATABASE_URL', type: 'string', description: 'Where your data sleeps' },
    { name: 'API_KEY', type: 'string', description: 'The magic password' },
    { name: 'NODE_ENV', type: 'string', description: 'Are we pretending to be in production?' },
    { name: 'PORT', type: 'number', description: 'The door number' }
];

console.log('\n🔍 ENVIRONMENT VARIABLE INTERROGATION ROOM 🔍\n');
console.log('Confess your sins, variables! The truth shall set you free...\n');

let allPresent = true;
let sinsFound = 0;

requiredVars.forEach(variable => {
    const value = process.env[variable.name];
    
    if (!value) {
        console.log(`❌ ${variable.name}: MISSING - ${variable.description}`);
        console.log(`   "I confess... I don't exist. I'm a ghost variable."\n`);
        allPresent = false;
        sinsFound++;
        return;
    }
    
    // Type checking - because JavaScript loves surprises
    let typeCorrect = true;
    if (variable.type === 'number') {
        if (isNaN(Number(value))) {
            typeCorrect = false;
            console.log(`⚠️  ${variable.name}: WRONG TYPE - Expected number, got "${value}"`);
            console.log(`   "I confess... I'm a string pretending to be a number. It's complicated."\n`);
            sinsFound++;
        }
    }
    
    if (typeCorrect) {
        console.log(`✅ ${variable.name}: PRESENT - ${variable.description}`);
        console.log(`   "I confess... I'm actually doing my job for once."\n`);
    }
});

console.log('='.repeat(50));

if (allPresent && sinsFound === 0) {
    console.log('🎉 ALL VARIABLES CONFESSED AND ARE INNOCENT!');
    console.log('Your app might actually work this time!');
    process.exit(0);
} else {
    console.log(`😈 FOUND ${sinsFound} ENVIRONMENT SIN(S)`);
    console.log('Your variables need spiritual guidance (and proper configuration)');
    process.exit(1);
}
