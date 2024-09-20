import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  animations: [
    trigger('bounce', [
      state('start', style({
        transform: 'translateY(0)'
      })),
      state('end', style({
        transform: 'translateY(-20px)'
      })),
      transition('start <=> end', animate('1.5s ease-in-out')),
    ])
  ]
})
export class ServicesComponent {

  bounceState = 'start';

  currentPage = 'WebService'

  pagedatas = [
    {
      img: './images/5.png',
      content: "At [Your Business Name], we specialize in delivering high-performance web applications tailored to your business needs. Whether you're looking for a responsive website, a custom-built platform, or an e-commercesolution,our expert developers ensure seamless functionality, engaging design, and robust security. We combine the latest web technologies with an understanding of user experience to create web applications that drive growth a optimize your online presence.",
      title: 'WebService',
      show: true,
      keyword: ['web application development', 'responsive web design', 'custom web solutions', 'Secure web applications', 'scalable web platforms']
    },
    {
      img: './images/6.png',
      content: "Our mobile application development services are designed to bring your ideas to life on both iOS and Android platforms. From concept to launch, we build intuitive and user-friendly apps that provide exceptional performance. Whether it’s a native app or a cross-platform solution, we ensure your mobile application is optimized for speed, security, and scalability, helping your business stay ahead in the mobile-first world.",
      title: 'Mobile',
      show: false,
      keyword: ['mobile app development', 'iOS app development', 'Android app development', 'Cross-platform mobile apps',
        'mobile app design']
    },
    {
      img: './images/7.png',
      content: "Simplify your business operations with our customized admin applications. Our team builds powerful admin dashboards that give you complete control over your workflows, data, and users. With intuitive designs and advanced functionality, we provide admin solutions that streamline your internal processes and boost productivity. Let us design admin applications that help you efficiently manage every aspect of your business.",
      title: 'Admin',
      show: false,
      keyword: ['admin application design', 'custom admin dashboards', 'business management tools',
        'admin panel development', 'workflow automation.']
    },
    {
      img: './images/5.png',
      content: "We offer end-to-end web development services, from initial concept to launch and beyond. Our team builds dynamic, responsive websites using modern frameworks that ensure a seamless experience across all devices. Whether you need a business website, a custom web app, or an e-commerce platform, we deliver scalable and secure web solutions that meet your specific goals.",
      title: 'Web',
      show: false,
      keyword: ['web development services', 'responsive websites', 'custom web development', 'e-commerce web solutions', 'front-end and back-end development']
    },
    {
      img: './images/9.png',
      content: "We provide comprehensive software support services to keep your applications running smoothly. Our team offers troubleshooting, bug fixes, system upgrades, and ongoing maintenance to ensure your software is always up to date and performing optimally. Whether it's third-party software or a custom application, we are here to help you minimize downtime and maximize performance.",
      title: 'Software',
      show: false,
      keyword: ['software support services', 'application maintenance', 'software troubleshooting', 'system upgrades', 'software optimization.']
    },
    {
      img: './images/5.png',
      content: "Looking for tailored software solutions that perfectly fit your business needs? Our customized software development services are designed to provide solutions that align with your unique requirements. From automation tools to complex enterprise systems, we work closely with you to deliver software that enhances your business operations and drives efficiency.",
      title: 'Customized',
      show: false,
      keyword: ['custom software development', 'be spoke software solutions', 'enterprise software development', 'business automation tools', 'tailor-made software.']
    },
  ]

  getBadgeBackgroundColor(index: number): string {
    const colors = ['#D1E7FF', '#D4EDDA', '#FFF3CD', '#F8D7DA'];
    return colors[index % colors.length];
  }

  // Dynamic text color function
  getBadgeTextColor(index: number): string {
    const colors = ['#004085', '#155724', '#856404', '#721C24'];
    return colors[index % colors.length];
  }
  
  ngOnInit() {
    this.autoBounce();
  }

  toggleBounce() {
    this.bounceState = this.bounceState === 'start' ? 'end' : 'start';
  }

  autoBounce() {
    setInterval(() => {
      this.toggleBounce();
    }, 500);
  }

  pageChange(e: any) {

    this.pagedatas.forEach((data, index) => {
      data.show = data.title === e;
    });

    switch (e) {
      case e = 'WebService':
        this.currentPage = e
        break;
      case e = 'Mobile':
        this.currentPage = e
        break;
      case e = 'Admin':
        this.currentPage = e
        break;
      case e = 'Web':
        this.currentPage = e
        break;
      case e = 'Software':
        this.currentPage = e
        break;
      case e = 'Customized':
        this.currentPage = e
        break;
      default:
    }

    console.log(this.currentPage);

  }

}
