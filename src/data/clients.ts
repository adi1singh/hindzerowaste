// Client logos, cut from the logo wall on the current site.
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/clients/*.png', { eager: true });

const names: Record<string, string> = {
  credai: 'CREDAI',
  trec: 'TREC',
  'chitale-dairy': 'Chitale Dairy',
  symbiosis: 'Symbiosis International University',
  warana: 'Warana',
  'temple-trust': 'Temple trust (client)',
  'prabhat-dairy': 'Prabhat Dairy',
  'nature-and-care': 'Nature & Care Scientific Solution',
  'dy-patil-group': 'D Y Patil Group',
  'graphic-systems': 'Graphic Systems',
  'sanjay-ghodawat-group': 'Sanjay Ghodawat Group',
  'cane-agro': 'Cane Agro',
  'shree-renuka-sugars': 'Shree Renuka Sugars',
  textan: 'Textan',
  'govind-milk': 'Govind Milk & Milk Products',
  'jyoti-hydrotech': 'Jyoti Hydrotech',
  rekart: 'Rekart',
  'siddharth-industries': 'Siddharth Industries',
  'raj-envicare': 'Raj Envicare',
  'indo-count': 'Indo Count',
  'ss-marketing': 'S.S Marketing',
  kirloskar: 'Kirloskar',
  rieco: 'RIECO',
  centaac: 'Centaac Corporation',
};

export const clients = Object.entries(files)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, mod]) => {
    const key = path.split('/').pop()!.replace(/^\d+-/, '').replace(/\.png$/, '');
    return { name: names[key] ?? key, logo: mod.default };
  });
