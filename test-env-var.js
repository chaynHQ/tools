// This script checks for the GITHUB_TOKEN environment variable.

// Log all environment variables to the console for a detailed look
// console.log("All environment variables:", process.env);

// Check specifically for GITHUB_TOKEN
const githubToken = process.env.GITHUB_TOKEN;

if (githubToken) {
  console.log('✅ Success: GITHUB_TOKEN is available.');
  console.log('Token length:', githubToken.length);
  // Log the first few and last few characters for verification without exposing the full token
  console.log(
    'Token snippet:',
    githubToken.substring(0, 5) + '...' + githubToken.substring(githubToken.length - 5),
  );
} else {
  console.log('❌ Error: GITHUB_TOKEN is NOT available.');
  console.log('This means the token is not being passed correctly to the Node.js process.');
  process.exit(1); // Exit with a non-zero code to fail the step
}

// Log a success message for the workflow
console.log('Node.js script completed successfully.');
