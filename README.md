# Santiago Souza Nava

PhD Student in Analytical Chemistry & Research Associate at BOKU University and FFoQSI in Vienna, Austria.

I work at the intersection of analytical chemistry, small-molecule metabolomics, and scientific computing. My current research uses untargeted LC-HRMS profiling to investigate phenolic biomarkers in wine and food authenticity.

## Current Research

- Developing reproducible Python pipelines for LC-HRMS metabolomics
- Benchmarking five metabolomics data-processing tools across Agilent QTOF and Thermo Orbitrap platforms
- Profiling small molecules and identifying phenolic biomarkers in wine
- Applying QC metrics, PCA, and PLS-DA for data-quality assessment and biomarker discovery
- Working with feature detection, peak alignment, adduct annotation, missing-value handling, and QC-based filtering

## Selected Projects

- [Small-Molecule Metabolomics & Food Authenticity](https://ssouzanava.github.io/projects/food-authenticity.html) — PhD research, methods, and posters
- [Predictive Modeling of Stroke Risk](https://ssouzanava.github.io/projects/stroke-risk.html) — MSc project with an interactive R Shiny dashboard and thesis
- [WGS-GATK](https://github.com/ssouzanava/WGS-GATK) — germline variant analysis pipeline

## Technical Skills

- **Metabolomics and mass spectrometry:** LC-HRMS/MS, Agilent QTOF, Thermo Orbitrap, untargeted metabolomics, phenolic compounds, MS/MS fragmentation, and compound annotation
- **Data processing:** MZmine, MS-DIAL, XCMS, Compound Discoverer, MassHunter, feature detection, peak alignment, adduct annotation, and QC-based filtering
- **Statistics and machine learning:** PCA, PLS-DA, Welch's t-test, QC metrics, feature selection, and machine learning
- **Programming and workflows:** Python, R, Bash, SQL, Nextflow, and scientific software development
- **Bioinformatics and laboratory:** Bioconductor, GATK, NGS, PCR/qPCR, DNA/RNA extraction, and Sanger sequencing
- **Visualization and infrastructure:** R Shiny, Docker, AWS, and Git/GitHub

## Links

- [Personal website](https://ssouzanava.github.io)
- [LinkedIn](https://www.linkedin.com/in/santiagosouza/)
- [GitHub](https://github.com/ssouzanava)

## Website Development

The website is a static HTML site hosted on GitHub Pages. Tailwind CSS is compiled ahead of time; it is not loaded from the Tailwind CDN. The theme follows the visitor's system light/dark preference until they choose a theme with the toggle, and that choice is saved in their browser.

Requirements: Node.js and npm.

```bash
npm ci
npm run build
```

Commit the generated `assets/css/styles.css` along with any changes that use Tailwind classes. The standalone stylesheets `assets/css/project-pages.css`, `assets/css/contact.css`, and `assets/css/skills.css` are maintained directly.

Keep `sitemap.xml` updated when adding or removing public pages; `robots.txt` points crawlers to the sitemap.
