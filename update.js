const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace Logos & Names
html = html.replace(/>FS\.</g, '>AD.<');
html = html.replace(/I'M FILBERT/g, "I'M ALEX DOE");
html = html.replace(/IT Support \/ Front End Dev \/ Bussiness Owner/g, 'Creative Developer / UI/UX Designer');

// Replace Hero Description & Resume
html = html.replace(/Graduated from Tarumanagara University.*?work in a team\./s, 'Welcome to my portfolio template! I am a passionate creative developer with a keen eye for clean, minimalist design and seamless user experiences. I love building responsive websites and turning complex problems into elegant solutions.');
html = html.replace(/\.\/assets\/Filbert-Resume\.pdf/g, '#');

// Replace Images
html = html.replace(/assets\/hero img\/profile\.webp/g, 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80" style="border-radius: 50%; object-fit: cover;');
html = html.replace(/\.\/assets\/profile-2\.webp/g, 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80" style="border-radius: 2rem; object-fit: cover;');

// Replace Experience/Education Summary
html = html.replace(/1\+ years <br \/>Administration, IT Support <br \/>\s*Front End Dev, Financial Consultant/g, '3+ years <br />Frontend Development <br />UI/UX Design');
html = html.replace(/B\.Sc\. Bachelors Degree <br \/>Tarumanagara University <br \/>\s*2018 - 2022/g, 'B.Sc. Bachelors Degree <br />University of Design & Tech <br />2018 - 2022');

// Replace Working Experience
html = html.replace(/Saltpartners Group/g, 'Creative Agency Co.');
html = html.replace(/Financial and Insurance Consultant/g, 'Lead Frontend Developer');
html = html.replace(/Jun 2023 - Sep 2023/g, 'Jan 2023 - Present');

html = html.replace(/PT\. Uruz Solusi Teknologi/g, 'Tech Startup Inc.');
html = html.replace(/IT Front End/g, 'UI/UX Engineer');
html = html.replace(/Nov 2022 - Apr 2023/g, 'Nov 2021 - Dec 2022');

html = html.replace(/PT\. Vysco Indo Pratama/g, 'Digital Solutions LLC');
html = html.replace(/Staff Administration/g, 'Frontend Intern');
html = html.replace(/May 2022 - Oct 2022/g, 'Jun 2021 - Oct 2021');

html = html.replace(/Orang Tua Group/g, 'Design Studio');
html = html.replace(/IT Support Intern/g, 'UI/UX Intern');
html = html.replace(/Sep 2021 - Dec 2021/g, 'Jan 2021 - May 2021');

// Replace Education section
html = html.replace(/Tarumanagara University/g, 'University of Design & Tech');
html = html.replace(/Bachelor Degree - Information Technology \/ Computer Science/g, 'Bachelor Degree - Computer Science');
html = html.replace(/SMA Kristen Kalam Kudus II Kosambi/g, 'Creative High School');
html = html.replace(/Senior High School - IPS/g, 'High School Diploma');
html = html.replace(/SMP Kristen Kalam Kudus III Kosambi/g, 'Middle School');

// Clean up Projects & URLs
html = html.replace(/https:\/\/github\.com\/Frtsnts10\/Pokemon_tugas/g, '#');
html = html.replace(/\.\/assets\/projects\/Pokemon\.png/g, 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80');
html = html.replace(/\.\/assets\/projects\/Ramie\.png/g, 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80');

// Replace Footer
html = html.replace(/2023 Filbert Portfolio\. All Rights Reserved\./g, '2024 Alex Doe Portfolio Template. Open Source MIT License.');

fs.writeFileSync('index.html', html);
console.log('Update HTML successful!');