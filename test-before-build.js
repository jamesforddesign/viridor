const { exec } = require('child_process');

function runCommand(command) {
    return new Promise((resolve, reject) => {
        const process = exec(command, (error, stdout) => {
            if (error) {
                reject({ error, stdout });
            } else {
                resolve({ stdout });
            }
        });

        // Forward output to the parent process
        process.stdout.pipe(process.stdout);
    });
}

// Run test suite and build if successful
async function runTestsAndBuild() {
    try {
        console.log('Running test suite...');
        await runCommand('npm test');
        
        console.log('Test suite passed. Proceeding with build...');
        await runCommand('npm run build');
    
        console.log('Build completed successfully.');
    } catch (result) {
        console.log('Output', result.stdout);
        console.error('Test suite failed. Build process aborted.');
    
        // Exit with failure code
        process.exit(1);
    }
}

runTestsAndBuild();