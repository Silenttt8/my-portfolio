import {
  siHtml5, siCss, siJavascript, siPhp, siMysql, siPython, siOpenjdk,
  siOpencv, siUltralytics, siCisco, siGit, siGithub, siPandas, siXampp,
} from 'simple-icons';

export const SKILL_CATEGORIES = [
  { id: 'technical', label: 'Technical' },
  { id: 'tools', label: 'Tools' },
  { id: 'soft', label: 'Soft Skills' },
];

/* Logo resmi brand (path dari simple-icons) dengan warna asli brand */
const Brand = ({ icon, color }) => (
  <svg viewBox="0 0 24 24" width="30" height="30" role="img" aria-label={icon.title}>
    <path fill={color || `#${icon.hex}`} d={icon.path} />
  </svg>
);

const brand = (icon, name, color) => ({
  name,
  color: color || `#${icon.hex}`,
  svg: <Brand icon={icon} color={color} />,
});

const line = (children, color) => (
  <svg viewBox="0 0 32 32" width="30" height="30" fill="none" stroke={color}
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{children}</svg>
);

export const SKILLS_BY_TAB = {
  technical: [
    brand(siHtml5, 'HTML5'),
    brand(siCss, 'CSS3'),
    brand(siJavascript, 'JavaScript'),
    brand(siPhp, 'PHP', '#8892BF'),
    brand(siMysql, 'MySQL', '#4F9FC4'),
    brand(siPython, 'Python', '#4B8BBE'),
    brand(siOpenjdk, 'Java', '#F89820'),
    brand(siOpencv, 'Computer Vision', '#5C3EE8'),
    brand(siUltralytics, 'YOLOv8', '#C8FF3C'),
  ],
  tools: [
    brand(siCisco, 'Cisco Networking', '#1BA0D7'),
    {
      name: 'Microsoft Office',
      color: '#F25022',
      svg: (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <rect x="2" y="2" width="9.5" height="9.5" fill="#F25022" />
          <rect x="12.5" y="2" width="9.5" height="9.5" fill="#7FBA00" />
          <rect x="2" y="12.5" width="9.5" height="9.5" fill="#00A4EF" />
          <rect x="12.5" y="12.5" width="9.5" height="9.5" fill="#FFB900" />
        </svg>
      ),
    },
    brand(siGit, 'Git', '#F05032'),
    brand(siGithub, 'GitHub', '#F0F0F5'),
    brand(siXampp, 'XAMPP', '#FB7A24'),
    {
      name: 'Business Intelligence',
      color: '#F2C811',
      svg: (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <rect x="3" y="12" width="4.5" height="9" rx="1.2" fill="#F2C811" opacity=".55" />
          <rect x="9.7" y="7" width="4.5" height="14" rx="1.2" fill="#F2C811" opacity=".8" />
          <rect x="16.5" y="3" width="4.5" height="18" rx="1.2" fill="#F2C811" />
        </svg>
      ),
    },
    brand(siPandas, 'Data Preparation', '#9B7BFF'),
  ],
  soft: [
    {
      name: 'Problem Solving', color: '#4ade80',
      svg: line(<path d="M12 24h8M13.5 27h5M16 5a7 7 0 00-4 12.7c.7.5 1 1.3 1 2.1V21h6v-1.2c0-.8.3-1.6 1-2.1A7 7 0 0016 5z" />, '#4ade80'),
    },
    {
      name: 'Communication', color: '#a78bfa',
      svg: line(<><path d="M25 15a8 8 0 01-8 8H9l-4 3V15a8 8 0 018-8h4a8 8 0 018 8z" /><path d="M11 14h8M11 17.5h5" /></>, '#a78bfa'),
    },
    {
      name: 'Adaptability', color: '#38bdf8',
      svg: line(<><path d="M23 10l3-3-3-3" /><path d="M6 14v-2a5 5 0 015-5h15" /><path d="M9 22l-3 3 3 3" /><path d="M26 18v2a5 5 0 01-5 5H6" /></>, '#38bdf8'),
    },
    {
      name: 'Teamwork', color: '#f472b6',
      svg: line(<><circle cx="12" cy="11" r="3.5" /><path d="M5.5 24v-1.5A4.5 4.5 0 0110 18h4a4.5 4.5 0 014.5 4.5V24" /><circle cx="21" cy="12" r="2.8" /><path d="M21.5 18h1.5a3.5 3.5 0 013.5 3.5V24" /></>, '#f472b6'),
    },
  ],
};

