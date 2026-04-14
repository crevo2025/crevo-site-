console.log('test.js is executing');
const root = document.getElementById('root');
if (root) {
  const testDiv = document.createElement('div');
  testDiv.style.color = 'pink';
  testDiv.style.fontSize = '24px';
  testDiv.style.textAlign = 'center';
  testDiv.innerHTML = 'test.js is WORKING! (Pink)';
  document.body.appendChild(testDiv);
}
