"use strict";(self.webpackChunkbabylon_project_v3=self.webpackChunkbabylon_project_v3||[]).push([[861],{861:(e,n,l)=>{l.r(n),l.d(n,{linePixelShader:()=>r});var a=l(9610);l(6194),l(4581),l(9741),l(7412);const i="linePixelShader",o="#include<clipPlaneFragmentDeclaration>\nuniform vec4 color;\n#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\n#include<logDepthDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<logDepthFragment>\n#include<clipPlaneFragment>\ngl_FragColor=color;\n#define CUSTOM_FRAGMENT_MAIN_END\n}";a.l.ShadersStore[i]=o;const r={name:i,shader:o}}}]);