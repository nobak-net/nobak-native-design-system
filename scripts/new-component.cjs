#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Function to prompt the user for input
function prompt(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve =>
    rl.question(query, ans => {
      rl.close();
      resolve(ans.trim());
    })
  );
}

(async () => {
  try {
    // Prompt the user for the component name
    const componentName = await prompt('Enter the Component Name: ');

    if (!componentName) {
      console.error('Component name cannot be empty.');
      process.exit(1);
    }

    // Ensure the component name is valid
    const validName = componentName.replace(/\s+/g, '');
    if (validName !== componentName || /[^A-Za-z0-9_]/.test(componentName)) {
      console.error(
        'Component name must be alphanumeric and cannot contain spaces or special characters.'
      );
      process.exit(1);
    }

    // Adjusted paths to account for script being in 'scripts' folder
    const rootDir = path.join(__dirname, '..'); // Go back one directory to root
    const componentsDir = path.join(rootDir, 'src', 'components');
    const componentDir = path.join(componentsDir, componentName);
    const componentFile = path.join(componentDir, `${componentName}.tsx`);
    const storiesFile = path.join(componentDir, `${componentName}.stories.tsx`);

    // Create the component directory
    if (!fs.existsSync(componentDir)) {
      fs.mkdirSync(componentDir, { recursive: true });
    } else {
      console.error(`Component directory "${componentDir}" already exists.`);
      process.exit(1);
    }

    // Component template
    const componentTemplate = `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ${componentName}Props {
  // Define your props here
}

export const ${componentName}: React.FC<${componentName}Props> = (props) => {
  return (
    <View style={styles.container}>
      <Text>${componentName} Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Styles go here
  },
});
`;

    // Stories template
    const storiesTemplate = `import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { ${componentName} } from './${componentName}';

const ${componentName}Meta: ComponentMeta<typeof ${componentName}> = {
  title: '${componentName}',
  component: ${componentName},
  args: {
    // Default props
  },
};

export default ${componentName}Meta;

export const Default: ComponentStory<typeof ${componentName}> = (args) => <${componentName} {...args} />;
`;

    // Write the component file
    fs.writeFileSync(componentFile, componentTemplate);
    console.log(`Created ${path.relative(rootDir, componentFile)}`);

    // Write the stories file
    fs.writeFileSync(storiesFile, storiesTemplate);
    console.log(`Created ${path.relative(rootDir, storiesFile)}`);

    console.log(`Component "${componentName}" created successfully.`);
  } catch (error) {
    console.error('An error occurred:', error);
  }
})();