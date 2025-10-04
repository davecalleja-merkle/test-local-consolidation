const { execSync } = require('child_process');
const fs = require('fs');

async function setupRegistryItems() {
  console.log('🚀 Setting up registry items and components...\n');
  console.log('═══════════════════════════════════════════════════════════\n');
  

    // STEP 2: Install ALL ShadCN components (BEFORE stories)
    console.log('📦 STEP 2: Installing all ShadCN UI components...');
    console.log('💡 Components must be installed BEFORE stories');
    console.log('This will install the complete component library (45+ components).\n');
    try {
      execSync('npx shadcn@latest add --all --yes', { stdio: 'inherit' });
      console.log('\n✅ All ShadCN components installed successfully\n');
    } catch (error) {
      console.error('❌ Failed to install ShadCN components:', error.message);
      console.log('💡 You can manually install components later using: npx shadcn@latest add [component]');
    }

    // STEP 3: Install ShadCN Storybook Stories (after components)
    console.log('📖 STEP 3: Installing ShadCN Storybook stories from @focus registry...');
    console.log('💡 Stories will be co-located with components in: components/ui/{component}/\n');
    
    const shadcnStories = [
      'story-shadcn-accordion', 'story-shadcn-alert', 'story-shadcn-alert-dialog',
      'story-shadcn-aspect-ratio', 'story-shadcn-avatar', 'story-shadcn-badge',
      'story-shadcn-breadcrumb', 'story-shadcn-button', 'story-shadcn-calendar',
      'story-shadcn-card', 'story-shadcn-carousel', 'story-shadcn-chart',
      'story-shadcn-checkbox', 'story-shadcn-collapsible', 'story-shadcn-combobox',
      'story-shadcn-command', 'story-shadcn-context-menu', 'story-shadcn-data-table',
      'story-shadcn-date-picker', 'story-shadcn-dialog', 'story-shadcn-drawer',
      'story-shadcn-dropdown-menu', 'story-shadcn-form', 'story-shadcn-hover-card',
      'story-shadcn-input', 'story-shadcn-input-otp', 'story-shadcn-label',
      'story-shadcn-menubar', 'story-shadcn-navigation-menu', 'story-shadcn-pagination',
      'story-shadcn-popover', 'story-shadcn-progress', 'story-shadcn-radio-group',
      'story-shadcn-scroll-area', 'story-shadcn-select', 'story-shadcn-separator',
      'story-shadcn-sheet', 'story-shadcn-skeleton', 'story-shadcn-slider',
      'story-shadcn-switch', 'story-shadcn-table', 'story-shadcn-tabs',
      'story-shadcn-textarea', 'story-shadcn-toggle', 'story-shadcn-tooltip'
    ];
    
    let successCount = 0;
    let failCount = 0;
    
    console.log('Installing 45 story files...');
    for (const storyName of shadcnStories) {
      try {
        execSync(`npx shadcn@latest add @focus/${storyName} --yes`, { 
          stdio: 'pipe' 
        });
        successCount++;
        process.stdout.write('.');
      } catch (err) {
        failCount++;
      }
    }
    
    console.log(`\n✅ Installed ${successCount}/${shadcnStories.length} ShadCN stories\n`);
    if (failCount > 0) {
      console.log(`⚠️ ${failCount} stories failed (may already exist or component missing)\n`);
    }
  console.log('═══════════════════════════════════════════════════════════');
  console.log('\n✅ Setup complete!\n');
  console.log('📖 Next steps:');
  console.log('   1. Run: pnpm run dev (Start Next.js)');
  console.log('   2. Run: pnpm run storybook (Start Storybook)');
  
}

setupRegistryItems().catch(console.error);