export async function GET() {
  const content = `
# Gildo Junior - Full Stack Developer

> Professional portfolio of Gildo Junior, a senior developer specializing in architecting scalable web and mobile applications.

## Profile Summary
- **Name:** Gildo Junior
- **Role:** Full Stack Developer / Architect
- **Location:** Florianópolis, Brazil
- **Website:** https://gildofj.dev

## Core Tech Stack
- **Backend:** Kotlin, C# (.NET Core), Node.js (Express)
- **Frontend:** ReactJS, NextJS, AngularJS, TypeScript, JavaScript
- **Mobile:** Android (Kotlin/Jetpack Compose), React Native
- **Database:** SQL Server, PostgreSQL

## Architecture & Concepts
- Clean Architecture
- Domain-Driven Design (DDD)
- Docker & DevOps
- Advanced SEO & Performance Optimization

## Presence
- **GitHub:** https://github.com/gildofj
- **LinkedIn:** https://linkedin.com/in/gildofj

## Contact
To get in touch, please use the contact form available at https://gildofj.dev/en-US#contact or https://gildofj.dev/pt-BR#contact.
`.trim();

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
