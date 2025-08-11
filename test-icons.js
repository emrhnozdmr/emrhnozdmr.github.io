// This is a small script to log all available icons in lucide-react
import * as lucide from 'lucide-react';
console.log(Object.keys(lucide).filter(key => key.toLowerCase().includes('shield')));