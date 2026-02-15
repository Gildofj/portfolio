import Android from "@/public/assets/android.svg";
import AndroidStudio from "@/public/assets/androidstudio.svg";
import Angular from "@/public/assets/angular.svg";
import CleanArchitecture from "@/public/assets/clean-architecture.svg";
import Cqrs from "@/public/assets/cqrs.svg";
import Csharp from "@/public/assets/csharp.svg";
import Css from "@/public/assets/css.svg";
import Ddd from "@/public/assets/ddd.svg";
import Docker from "@/public/assets/docker.svg";
import Dotnet from "@/public/assets/dotnet.svg";
import DotnetCore from "@/public/assets/dotnetcore.svg";
import Elixir from "@/public/assets/elixir.svg";
import Express from "@/public/assets/express.svg";
import Figma from "@/public/assets/figma.svg";
import Git from "@/public/assets/git.svg";
import Github from "@/public/assets/github.svg";
import Gradle from "@/public/assets/gradle.svg";
import Heroku from "@/public/assets/heroku.svg";
import Html5 from "@/public/assets/html5.svg";
import Java from "@/public/assets/java.svg";
import Javascript from "@/public/assets/javascript.svg";
import Jest from "@/public/assets/jest.svg";
import JetpackCompose from "@/public/assets/jetpack-compose.svg";
import Kotlin from "@/public/assets/kotlin.svg";
import Linux from "@/public/assets/linux.svg";
import Lua from "@/public/assets/lua.svg";
import MaterialUi from "@/public/assets/materialui.svg";
import Mongodb from "@/public/assets/mongodb.svg";
import Nextjs from "@/public/assets/nextjs.svg";
import Nodejs from "@/public/assets/nodejs.svg";
import Npm from "@/public/assets/npm.svg";
import Postgresql from "@/public/assets/postgresql.svg";
import React from "@/public/assets/react.svg";
import Redis from "@/public/assets/redis.svg";
import Redux from "@/public/assets/redux.svg";
import Rust from "@/public/assets/rust.svg";
import Sqlite from "@/public/assets/sqlite.svg";
import Sqlserver from "@/public/assets/sqlserver.svg";
import StyledComponents from "@/public/assets/styled-components.svg";
import Tailwindcss from "@/public/assets/tailwindcss.svg";
import Typescript from "@/public/assets/typescript.svg";
import Visualstudio from "@/public/assets/visualstudio.svg";
import Vscode from "@/public/assets/vscode.svg";

export const ICONS = {
  android: Android,
  androidstudio: AndroidStudio,
  angular: Angular,
  "clean-architecture": CleanArchitecture,
  cqrs: Cqrs,
  csharp: Csharp,
  css: Css,
  ddd: Ddd,
  docker: Docker,
  dotnet: Dotnet,
  dotnetcore: DotnetCore,
  elixir: Elixir,
  express: Express,
  figma: Figma,
  git: Git,
  github: Github,
  gradle: Gradle,
  heroku: Heroku,
  html5: Html5,
  java: Java,
  javascript: Javascript,
  jest: Jest,
  "jetpack-compose": JetpackCompose,
  kotlin: Kotlin,
  linux: Linux,
  lua: Lua,
  materialui: MaterialUi,
  mongodb: Mongodb,
  nextjs: Nextjs,
  nodejs: Nodejs,
  npm: Npm,
  postgresql: Postgresql,
  react: React,
  redis: Redis,
  redux: Redux,
  rust: Rust,
  sqlite: Sqlite,
  sqlserver: Sqlserver,
  "styled-components": StyledComponents,
  tailwindcss: Tailwindcss,
  typescript: Typescript,
  visualstudio: Visualstudio,
  vscode: Vscode,
} as const;

export type IconName = keyof typeof ICONS;
