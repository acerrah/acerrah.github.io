// Sticky header
window.onscroll = () => {
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);};

// ScrollReveal
const sr = ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 0
});

// Ana başlıklar ve container'lar
sr.reveal('.home-content', { origin: 'left', delay: 200 });


const logo = document.querySelector('.logo');
const originalText = logo.textContent;

logo.addEventListener('mouseenter', () => {
    logo.style.opacity = '0';
    setTimeout(() => {
        logo.textContent = 'CERRAH';
        logo.style.opacity = '1';
    }, 200);
});

logo.addEventListener('mouseleave', () => {
    logo.style.opacity = '0';
    setTimeout(() => {
        logo.textContent = originalText;
        logo.style.opacity = '1';
    }, 200);
});

// Language switching functionality
const langSwitch = document.getElementById('langSwitch');
const navLinks = document.querySelectorAll('.navbar a');
const translations = {
    en: {
        home: {
            title: "Hi, I'm <span>Cerrah</span>",
            role: "DevOps Engineer",
            description: "Currently working at Mono Bilişim. Proficient in Linux, containerization, and automation technologies. Currently managing Proxmox servers, implementing CI/CD pipelines, and optimizing infrastructure for scalability and efficiency.",
            button: "Let's Talk"
        },
        about: {
            title: "About <span>Me</span>",
            name: "Ali Erdem Cerrah",
            description: "My journey into the world of technology began in high school, when I started working on autonomous vehicles and robotics. The thrill and excitement of engaging with such advanced technologies sparked a deep-rooted passion within me, leading me to pursue a degree in Computer Engineering. Now I find myself studying at Üsküdar University and 42 Ecole, where I'm not just focusing on academic learning, but actively developing my software skills. In addition to my personal growth, I am a firm believer in the power of teamwork and entrepreneurship. Alongside a dedicated team, I'm working on a multitude of products and projects for our own start-ups. In essence, my journey is a testament to the convergence of passion, knowledge, and collaboration. Every day, we're pushing boundaries, creating, innovating, and shaping the future of technology."
        },
        education: {
            title: "My <span>Journey</span>",
            experience: "Experience",
            education: "Education",
            experiences: {
                mono: {
                    title: "DevOps Engineer - Mono Bilişim",
                    date: "Sep 2024 - Present",
                    description: "Managing CI/CD pipelines, ensuring high availability for PostgreSQL and Redis clusters, developing Ansible playbooks, and maintaining cloud infrastructure. Implementing monitoring solutions with Grafana and providing technical support for production environments."
                },
                arvis: {
                    title: "Deeptech/AI R&D Intern - ArVis Technology",
                    date: "Jul 2024 - Aug 2024",
                    description: "Managed AWS servers for AI development, led team projects, and developed innovative solutions including a robot dog swarm and image processing models using deep differentiable logic gate networks on FPGA."
                },
                robot: {
                    title: "Team Lead - The Complete Robot AUV Team",
                    date: "Oct 2023 - Aug 2024",
                    description: "Led the development of autonomous underwater vehicle projects, coordinating team efforts and implementing technical solutions for competitive robotics challenges."
                }
            },
            educations: {
                university: {
                    title: "Computer Engineering - Üsküdar University",
                    date: "2022 - 2026",
                    description: "Pursuing Computer Engineering with 100% Scholarship and 100% English instruction. Currently maintaining a 3.65 GPA while developing strong technical foundations in software development and systems engineering."
                },
                ecole: {
                    title: "Computer Science - 42 İstanbul",
                    date: "2022 - 2024",
                    description: "Participating in 42's innovative peer-to-peer learning program, focusing on practical programming skills and collaborative problem-solving through hands-on projects."
                }
            }
        },
        skills: {
            title: "My <span>Skills</span>",
            technical: "Technical Skills",
            professional: "Professional Skills",
            technicalSkills: {
                devops: {
                    title: "DevOps & Cloud",
                    skills: "AWS (EC2, S3, RDS), Docker, Kubernetes (K3s, K8s, RKE2), Longhorn, Jenkins CI/CD, GitLab CI/CD, Terraform, Ansible (Playbooks, AWX)"
                },
                programming: {
                    title: "Programming",
                    skills: "Golang, Python, C/C++, JavaScript, PHP, Bash, Git"
                },
                sysadmin: {
                    title: "System Administration",
                    skills: "Linux (Debian, CentOS), Windows Server, Cloudinit, Cloudbase-init, Proxmox VE, Network configuration, Security hardening, SSL/TLS"
                },
                database: {
                    title: "Database & Message Brokers",
                    skills: "PostgreSQL (replication, WAL-G), Redis, MongoDB, MySQL, Consul, Kafka (Kraft), RabbitMQ"
                },
                loadbalancing: {
                    title: "Load Balancing & Web",
                    skills: "Caddy, HAProxy, Traefik, WordPress, WordOps"
                },
                monitoring: {
                    title: "Monitoring & Logging",
                    skills: "ELK Stack, LGTM Stack (Loki, Grafana, Tempo, Mimir), Zabbix, Uptime Kuma"
                },
                collaboration: {
                    title: "Collaboration Tools",
                    skills: "GitLab, Zulip, Redmine, Jitsi"
                }
            },
            professionalSkills: {
                projectManagement: {
                    title: "Project Management",
                    skills: "Agile methodologies, Team leadership, Risk assessment"
                },
                problemSolving: {
                    title: "Problem Solving",
                    skills: "Analytical thinking, Debug optimization, System architecture"
                },
                communication: {
                    title: "Communication",
                    skills: "Technical documentation, Team collaboration, Client relations"
                },
                research: {
                    title: "Research & Development",
                    skills: "Innovation strategies, Technology evaluation, Proof of concepts"
                },
                business: {
                    title: "Business Acumen",
                    skills: "Strategic planning, Resource optimization, Process improvement"
                },
                learning: {
                    title: "Continuous Learning",
                    skills: "Adaptability to new technologies, Self-directed learning, Knowledge sharing"
                },
                timeManagement: {
                    title: "Time Management",
                    skills: "Prioritization, Deadline management, Work-life balance"
                },
                criticalThinking: {
                    title: "Critical Thinking",
                    skills: "Root cause analysis, Decision making, Strategic evaluation"
                }
            }
        },
        contact: {
            title: "Contact <span>Me!</span>",
            button: "Send Mail"
        },
        footer: {
            copyright: "Copyright &copy; 2023 by Ifmai & Acerrah | All Rights Reserved"
        }
    },
    tr: {
        home: {
            title: "Merhaba, Ben <span>Cerrah</span>",
            role: "DevOps Mühendisi",
            description: "Şu anda Mono Bilişim'de çalışıyorum. Linux, konteynerizasyon ve otomasyon teknolojilerinde uzmanım. Proxmox sunucularını yönetiyor, CI/CD süreçlerini uyguluyor ve altyapıyı ölçeklenebilirlik ve verimlilik için optimize ediyorum.",
            button: "İletişime Geç"
        },
        about: {
            title: "Hakkımda",
            name: "Ali Erdem Cerrah",
            description: "Teknoloji dünyasına yolculuğum, lisede otonom araçlar ve robotik üzerinde çalışmaya başladığımda başladı. Bu ileri teknolojilerle uğraşmanın verdiği heyecan ve coşku, bende derin köklü bir tutku uyandırdı ve beni Bilgisayar Mühendisliği okumaya yönlendirdi. Şu anda Üsküdar Üniversitesi ve 42 Ecole'de eğitim görüyorum ve sadece akademik öğrenmeye odaklanmıyor, aynı zamanda yazılım becerilerimi aktif olarak geliştiriyorum. Kişisel gelişimimin yanı sıra, ekip çalışması ve girişimciliğin gücüne inanan biriyim. Özverili bir ekiple birlikte, kendi start-up'larımız için çeşitli ürün ve projeler üzerinde çalışıyoruz. Özünde, yolculuğum tutku, bilgi ve işbirliğinin birleşiminin bir kanıtı. Her gün sınırları zorluyor, yaratıyor, yenilik yapıyor ve teknolojinin geleceğini şekillendiriyoruz."
        },
        education: {
            title: "Benim <span>Yolculuğum</span>",
            experience: "Deneyim",
            education: "Eğitim",
            experiences: {
                mono: {
                    title: "DevOps Mühendisi - Mono Bilişim",
                    date: "Eyl 2024 - Günümüz",
                    description: "CI/CD süreçlerini yönetme, PostgreSQL ve Redis kümeleri için yüksek erişilebilirlik sağlama, Ansible playbook'ları geliştirme ve bulut altyapısını sürdürme. Grafana ile izleme çözümleri uygulama ve üretim ortamları için teknik destek sağlama."
                },
                arvis: {
                    title: "Deeptech/AI AR-GE Stajyeri - ArVis Technology",
                    date: "Tem 2024 - Ağu 2024",
                    description: "AI geliştirme için AWS sunucularını yönetti, takım projelerine liderlik etti ve FPGA üzerinde derin diferansiyellenebilir mantık kapı ağları kullanarak robot köpek sürüsü ve görüntü işleme modelleri dahil yenilikçi çözümler geliştirdi."
                },
                robot: {
                    title: "Takım Lideri - The Complete Robot AUV Takımı",
                    date: "Eki 2023 - Ağu 2024",
                    description: "Otonom su altı aracı projelerinin geliştirilmesine liderlik etti, takım çalışmalarını koordine etti ve rekabetçi robotik yarışmaları için teknik çözümler uyguladı."
                }
            },
            educations: {
                university: {
                    title: "Bilgisayar Mühendisliği - Üsküdar Üniversitesi",
                    date: "2022 - 2026",
                    description: "%100 Burslu ve %100 İngilizce eğitim ile Bilgisayar Mühendisliği eğitimi alıyorum. Yazılım geliştirme ve sistem mühendisliğinde güçlü teknik temeller geliştirirken 3.65 GPA'yi koruyorum."
                },
                ecole: {
                    title: "Bilgisayar Bilimleri - 42 İstanbul",
                    date: "2022 - 2024",
                    description: "42'nin yenilikçi akran öğrenme programına katılarak, uygulamalı projeler aracılığıyla pratik programlama becerileri ve işbirlikçi problem çözme üzerine odaklanıyorum."
                }
            }
        },
        skills: {
            title: "Benim <span>Yeteneklerim</span>",
            technical: "Teknik Yetenekler",
            professional: "Profesyonel Yetenekler",
            technicalSkills: {
                devops: {
                    title: "DevOps & Bulut",
                    skills: "AWS (EC2, S3, RDS), Docker, Kubernetes (K3s, K8s, RKE2), Longhorn, Jenkins CI/CD, GitLab CI/CD, Terraform, Ansible (Playbooks, AWX)"
                },
                programming: {
                    title: "Programlama",
                    skills: "Golang, Python, C/C++, JavaScript, PHP, Bash, Git"
                },
                sysadmin: {
                    title: "Sistem Yönetimi",
                    skills: "Linux (Debian, CentOS), Windows Server, Cloudinit, Cloudbase-init, Proxmox VE, Ağ yapılandırması, Güvenlik sıkılaştırma, SSL/TLS"
                },
                database: {
                    title: "Veritabanı & Mesaj Aracıları",
                    skills: "PostgreSQL (replikasyon, WAL-G), Redis, MongoDB, MySQL, Consul, Kafka (Kraft), RabbitMQ"
                },
                loadbalancing: {
                    title: "Yük Dengeleme & Web",
                    skills: "Caddy, HAProxy, Traefik, WordPress, WordOps"
                },
                monitoring: {
                    title: "İzleme & Günlükleme",
                    skills: "ELK Stack, LGTM Stack (Loki, Grafana, Tempo, Mimir), Zabbix, Uptime Kuma"
                },
                collaboration: {
                    title: "İşbirliği Araçları",
                    skills: "GitLab, Zulip, Redmine, Jitsi"
                }
            },
            professionalSkills: {
                projectManagement: {
                    title: "Proje Yönetimi",
                    skills: "Çevik metodolojiler, Takım liderliği, Risk değerlendirmesi"
                },
                problemSolving: {
                    title: "Problem Çözme",
                    skills: "Analitik düşünme, Hata ayıklama optimizasyonu, Sistem mimarisi"
                },
                communication: {
                    title: "İletişim",
                    skills: "Teknik dokümantasyon, Takım işbirliği, Müşteri ilişkileri"
                },
                research: {
                    title: "Araştırma & Geliştirme",
                    skills: "İnovasyon stratejileri, Teknoloji değerlendirmesi, Konsept kanıtlama"
                },
                business: {
                    title: "İş Zekası",
                    skills: "Stratejik planlama, Kaynak optimizasyonu, Süreç iyileştirme"
                },
                learning: {
                    title: "Sürekli Öğrenme",
                    skills: "Yeni teknolojilere uyum, Kendi kendine öğrenme, Bilgi paylaşımı"
                },
                timeManagement: {
                    title: "Zaman Yönetimi",
                    skills: "Önceliklendirme, Teslim tarihi yönetimi, İş-yaşam dengesi"
                },
                criticalThinking: {
                    title: "Eleştirel Düşünme",
                    skills: "Kök neden analizi, Karar verme, Stratejik değerlendirme"
                }
            }
        },
        contact: {
            title: "İletişime Geç",
            button: "Mail Gönder"
        },
        footer: {
            copyright: "Telif Hakkı &copy; 2023 Ifmai & Acerrah | Tüm Hakları Saklıdır"
        }
    }
};

let currentLang = 'en';

function updateContent(lang) {
    // Update navigation text
    navLinks.forEach(link => {
        if (link.dataset[lang]) {
            if (link.id !== 'langSwitch') {
                link.textContent = link.dataset[lang];
            }
        }
    });

    // Update main content sections
    document.querySelector('.home-content h1').innerHTML = translations[lang].home.title;
    document.querySelector('.text-animate h3').textContent = translations[lang].home.role;
    document.querySelector('.home-content p').textContent = translations[lang].home.description;
    document.querySelector('.home-content .btn').textContent = translations[lang].home.button;

    // About section
    document.querySelector('.about .heading').innerHTML = translations[lang].about.title;
    document.querySelector('.about-content h3').textContent = translations[lang].about.name;
    document.querySelector('.about-content p').textContent = translations[lang].about.description;

    // Education section
    document.querySelector('.education .heading').innerHTML = translations[lang].education.title;
    document.querySelectorAll('.education-column .title')[0].textContent = translations[lang].education.experience;
    document.querySelectorAll('.education-column .title')[1].textContent = translations[lang].education.education;

    // Update experience items
    const experienceContents = document.querySelectorAll('.education-column:first-child .education-content');
    const experiences = [translations[lang].education.experiences.mono, translations[lang].education.experiences.arvis, translations[lang].education.experiences.robot];
    experienceContents.forEach((content, index) => {
        content.querySelector('h3').textContent = experiences[index].title;
        content.querySelector('p').textContent = experiences[index].description;
    });

    // Update education items
    const educationContents = document.querySelectorAll('.education-column:last-child .education-content');
    const educations = [translations[lang].education.educations.university, translations[lang].education.educations.ecole];
    educationContents.forEach((content, index) => {
        content.querySelector('h3').textContent = educations[index].title;
        content.querySelector('p').textContent = educations[index].description;
    });

    // Skills section
    document.querySelector('.skills .heading').innerHTML = translations[lang].skills.title;
    document.querySelectorAll('.skills-column .title')[0].textContent = translations[lang].skills.technical;
    document.querySelectorAll('.skills-column .title')[1].textContent = translations[lang].skills.professional;

    // Update technical skills
    const technicalSkills = document.querySelectorAll('.skills-column:first-child .skill-item');
    const techSkillsData = Object.values(translations[lang].skills.technicalSkills);
    technicalSkills.forEach((item, index) => {
        item.querySelector('h3').textContent = techSkillsData[index].title;
        item.querySelector('p').textContent = techSkillsData[index].skills;
    });

    // Update professional skills
    const professionalSkills = document.querySelectorAll('.skills-column:last-child .skill-item');
    const profSkillsData = Object.values(translations[lang].skills.professionalSkills);
    professionalSkills.forEach((item, index) => {
        item.querySelector('h3').textContent = profSkillsData[index].title;
        item.querySelector('p').textContent = profSkillsData[index].skills;
    });

    // Contact section
    document.querySelector('.contact .heading').innerHTML = translations[lang].contact.title;
    document.querySelector('.contact .btn').textContent = translations[lang].contact.button;

    // Footer
    document.querySelector('.footer-text p').innerHTML = translations[lang].footer.copyright;
}

langSwitch.addEventListener('click', (e) => {
    e.preventDefault();
    currentLang = currentLang === 'en' ? 'tr' : 'en';
    langSwitch.textContent = currentLang === 'en' ? 'TR' : 'EN';
    updateContent(currentLang);
}); 
