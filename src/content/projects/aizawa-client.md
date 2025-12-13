---
title: Aizawa (Client)
published: 2022-12-05
description: Command-line webshell client that executes payloads through HTTP headers to help attackers bypass WAF/IDS.
role: Creator & Maintainer
techStack: [PYTHON, CLI]
repoUrl: https://github.com/elliottophellia/aizawa
---

Aizawa is a command-line webshell client designed to execute commands through HTTP headers. It communicates via HTTP headers to execute commands discreetly, making it a handy tool when testing WAF/IDS behavior or hardened PHP environments.

## What it does
- Issues commands over HTTP headers to minimize noisy payloads.
- Helps security researchers validate bypass techniques in isolated environments.
- Works seamlessly with the Aizawa webshell family.

## Highlights
- Built for researchers who need repeatable, scriptable command execution.
- Lightweight and easy to drop into lab pipelines.
- Documented payload flow for transparency and teaching.

## Links
::github{repo="elliottophellia/aizawa"}
