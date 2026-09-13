/**
 * Portfolio content lives here so the page layout can evolve without mixing
 * presentation code and personal/project details. Update links or copy here
 * when a project is published in the Personal Project Hub.
 */
export type ProjectCategory = 'Circuits' | 'Research' | 'Embedded' | 'Robotics';

export interface Project {
  title: string;
  /** A project can appear under every discipline it meaningfully represents. */
  categories: ProjectCategory[];
  date: string;
  summary: string;
  highlights: string[];
  link: string;
  featured?: boolean;
}

export const projectHubUrl = 'https://github.com/mhigman/Personal-Project-Hub';

export const projects: Project[] = [
  { title: 'Compute-In-Memory Validation', categories: ['Research', 'Circuits'], date: '2026', summary: 'A matrix-free validation framework for resistive and capacitive crossbar architectures.', highlights: ['O(n³) → O(n²) simulations', '~48× faster than iterative SPICE'], link: projectHubUrl, featured: true },
  { title: 'Sallen-Key Sensitivity Analysis', categories: ['Circuits', "Research"], date: '2026', summary: 'Filter-stage designs with provably minimal sensitivity and a tolerance-bound ripple analysis.', highlights: ['Analytical proof', 'Monte Carlo validation', 'LTspice'], link: projectHubUrl },
  { title: 'Weighted Attack Graph', categories: ['Research'], date: '2024 — 2025', summary: 'An interactive 3D attack-graph framework that prioritizes remediation using weighted risk signals.', highlights: ['Provisional No. 63/662,344', 'Severity + likelihood + protection'], link: `${projectHubUrl}/tree/main/Curiousity-Gauntlet-And-Provisional-Patent` },
  { title: 'JSON AST IoT Interpreter', categories: ['Embedded'], date: '2024', summary: 'A C++ Arduino library that executes MIT App Inventor block code from a custom JSON syntax tree.', highlights: ['32 KB RAM target', 'BLE and serial control', 'Recursive parser'], link: `${projectHubUrl}/tree/main/MIT-App-Inventor-Parser-JSON`, featured: true },
  { title: 'SCARA Arm Controller', categories: ['Robotics'], date: '2023', summary: 'Brushless-motor controls for precise arm positioning in quantum-computing chip fabrication.', highlights: ['Tuned PID', 'CAN bus', 'Lower-cost motor integration'], link: `${projectHubUrl}/tree/main/University-of-Arkansas-SCARA-Code` },
];

export const skills = ['Python', 'C/C++', 'MATLAB', 'KiCad', 'LTspice', 'Arduino', 'Analog design', 'Circuit prototyping', 'PCB bring-up', 'PID control', 'CAN bus', 'BLE / Serial'];

export const contact = { email: 'milesbhigman@gmail.com', linkedin: 'https://www.linkedin.com/in/miles-higman/', github: 'https://github.com/mhigman' };
