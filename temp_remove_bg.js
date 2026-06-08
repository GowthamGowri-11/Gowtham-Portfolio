const fs = require('fs');
const path = require('path');

const filesToUpdate = {
  'About.css': '.about',
  'Accomplishments.css': '.accomplishments',
  'Contact.css': '.contact',
  'Experience.css': '.experience',
  'Footer.css': '.footer',
  'Projects.css': '.projects',
  'Skills.css': '.skills'
};

for (const [file, selector] of Object.entries(filesToUpdate)) {
  const filePath = path.join('src', 'components', file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Using simple replace since we know the exact string to look for in most files
    // But regex is safer: find the exact selector block and remove background
    const regex = new RegExp(`(\\${selector}\\s*\\{[^}]*?)background:\\s*var\\(--bg-(?:primary|secondary)\\);\\s*`, 'g');
    content = content.replace(regex, '$1');
    fs.writeFileSync(filePath, content);
    console.log('Updated', file);
  }
}
