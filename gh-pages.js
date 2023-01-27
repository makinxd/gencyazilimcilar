import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/makinxd/gencyazilimcilar', 
  user: {
   name: 'Mustafa Akin', 
   email: '' 
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);