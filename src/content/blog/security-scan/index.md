---
title: "4 common web application security scanning tools
"
tags: ["Security", "Scan", "SAST", "DAST", "Secrets"]
description: "security scanning tools"
author: "Yuan Fang"
date: "2021-06-21"
---

Application security is critical because hackers may utilize the weakness and vulnerabilities to attack web apps. Security scans can help to detect security issues to prevent such threats to happen. Here I would like to summarize 4 common security scanning tools that I used on my single page application.

- SCA - Software Composition Analysis. It involves assessing the use of open-source software within a code repository.  (e.g. Synk)

- Secrets Scanning - Scan for sensitive data that should store securely and in tightly control access  (e.g. stores in AWS secret manager /SSM parameter store), examples of secrets include API keys, encryption keys, OAuth tokens.   (e.g. Secretleaks)
- SAST - Static Application Security Testing. It is a white box method of testing that finds app weakness listed in the OWASP TOP 10. It examines source/static code. Unlike DAST scan which requires a live web app(e.g. Fortify)
- DAST - Dynamic Application Security Testing. It is a black-box testing method of testing that examines a running web app to find vulnerabilities that a hacker could exploit. It is useful only for web app/services(e.g. Fortify)

Source:
- https://www.synopsys.com/blogs/software-security/sast-vs-dast-difference/
- https://insights.sei.cmu.edu/blog/10-types-of-application-security-testing-tools-when-and-how-to-use-them/
