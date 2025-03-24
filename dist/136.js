"use strict";(self.webpackChunkbabylon_project_v3=self.webpackChunkbabylon_project_v3||[]).push([[136],{738:(e,n,i)=>{i(9610).l.IncludesShadersStore.morphTargetsVertexDeclaration="#ifdef MORPHTARGETS\n#ifndef MORPHTARGETS_TEXTURE\n#ifdef MORPHTARGETS_POSITION\nattribute vec3 position{X};\n#endif\n#ifdef MORPHTARGETS_NORMAL\nattribute vec3 normal{X};\n#endif\n#ifdef MORPHTARGETS_TANGENT\nattribute vec3 tangent{X};\n#endif\n#ifdef MORPHTARGETS_UV\nattribute vec2 uv_{X};\n#endif\n#ifdef MORPHTARGETS_UV2\nattribute vec2 uv2_{X};\n#endif\n#elif {X}==0\nuniform int morphTargetCount;\n#endif\n#endif\n"},3361:(e,n,i)=>{i(9610).l.IncludesShadersStore.bonesVertex="#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler,matricesIndices[1])*matricesWeights[1];\n#endif\n#if NUM_BONE_INFLUENCERS>2\ninfluence+=readMatrixFromRawSampler(boneSampler,matricesIndices[2])*matricesWeights[2];\n#endif\n#if NUM_BONE_INFLUENCERS>3\ninfluence+=readMatrixFromRawSampler(boneSampler,matricesIndices[3])*matricesWeights[3];\n#endif\n#if NUM_BONE_INFLUENCERS>4\ninfluence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[0])*matricesWeightsExtra[0];\n#endif\n#if NUM_BONE_INFLUENCERS>5\ninfluence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[1])*matricesWeightsExtra[1];\n#endif\n#if NUM_BONE_INFLUENCERS>6\ninfluence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[2])*matricesWeightsExtra[2];\n#endif\n#if NUM_BONE_INFLUENCERS>7\ninfluence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[3])*matricesWeightsExtra[3];\n#endif\n#else\ninfluence=mBones[int(matricesIndices[0])]*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=mBones[int(matricesIndices[1])]*matricesWeights[1];\n#endif\n#if NUM_BONE_INFLUENCERS>2\ninfluence+=mBones[int(matricesIndices[2])]*matricesWeights[2];\n#endif\n#if NUM_BONE_INFLUENCERS>3\ninfluence+=mBones[int(matricesIndices[3])]*matricesWeights[3];\n#endif\n#if NUM_BONE_INFLUENCERS>4\ninfluence+=mBones[int(matricesIndicesExtra[0])]*matricesWeightsExtra[0];\n#endif\n#if NUM_BONE_INFLUENCERS>5\ninfluence+=mBones[int(matricesIndicesExtra[1])]*matricesWeightsExtra[1];\n#endif\n#if NUM_BONE_INFLUENCERS>6\ninfluence+=mBones[int(matricesIndicesExtra[2])]*matricesWeightsExtra[2];\n#endif\n#if NUM_BONE_INFLUENCERS>7\ninfluence+=mBones[int(matricesIndicesExtra[3])]*matricesWeightsExtra[3];\n#endif\n#endif\nfinalWorld=finalWorld*influence;\n#endif\n#endif\n"},5060:(e,n,i)=>{i(9610).l.IncludesShadersStore.morphTargetsVertex="#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\n#if {X}==0\nfor (int i=0; i<NUM_MORPH_INFLUENCERS; i++) {if (i>=morphTargetCount) break;vertexID=float(gl_VertexID)*morphTargetTextureInfo.x;\n#ifdef MORPHTARGETS_POSITION\npositionUpdated+=(readVector3FromRawSampler(i,vertexID)-position)*morphTargetInfluences[i];\n#endif\n#ifdef MORPHTARGETTEXTURE_HASPOSITIONS\nvertexID+=1.0;\n#endif\n#ifdef MORPHTARGETS_NORMAL\nnormalUpdated+=(readVector3FromRawSampler(i,vertexID) -normal)*morphTargetInfluences[i];\n#endif\n#ifdef MORPHTARGETTEXTURE_HASNORMALS\nvertexID+=1.0;\n#endif\n#ifdef MORPHTARGETS_UV\nuvUpdated+=(readVector3FromRawSampler(i,vertexID).xy-uv)*morphTargetInfluences[i];\n#endif\n#ifdef MORPHTARGETTEXTURE_HASUVS\nvertexID+=1.0;\n#endif\n#ifdef MORPHTARGETS_TANGENT\ntangentUpdated.xyz+=(readVector3FromRawSampler(i,vertexID) -tangent.xyz)*morphTargetInfluences[i];\n#endif\n#ifdef MORPHTARGETTEXTURE_HASTANGENTS\nvertexID+=1.0;\n#endif\n#ifdef MORPHTARGETS_UV2\nuv2Updated+=(readVector3FromRawSampler(i,vertexID).xy-uv2)*morphTargetInfluences[i];\n#endif\n#ifdef MORPHTARGETTEXTURE_HASUV2S\nvertexID+=1.0;\n#endif\n#ifdef MORPHTARGETS_COLOR\ncolorUpdated+=(readVector4FromRawSampler(i,vertexID)-color)*morphTargetInfluences[i];\n#endif\n}\n#endif\n#else\n#ifdef MORPHTARGETS_POSITION\npositionUpdated+=(position{X}-position)*morphTargetInfluences[{X}];\n#endif\n#ifdef MORPHTARGETS_NORMAL\nnormalUpdated+=(normal{X}-normal)*morphTargetInfluences[{X}];\n#endif\n#ifdef MORPHTARGETS_TANGENT\ntangentUpdated.xyz+=(tangent{X}-tangent.xyz)*morphTargetInfluences[{X}];\n#endif\n#ifdef MORPHTARGETS_UV\nuvUpdated+=(uv_{X}-uv)*morphTargetInfluences[{X}];\n#endif\n#ifdef MORPHTARGETS_UV2\nuv2Updated+=(uv2_{X}-uv2)*morphTargetInfluences[{X}];\n#endif\n#ifdef MORPHTARGETS_COLOR\ncolorUpdated+=(color{X}-color)*morphTargetInfluences[{X}];\n#endif\n#endif\n#endif\n"},5523:(e,n,i)=>{i(9610).l.IncludesShadersStore.bakedVertexAnimation="#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME.z;float VATSpeed=BVASNAME.w;float totalFrames=VATEndFrame-VATStartFrame+1.0;float time=bakedVertexAnimationTime*VATSpeed/totalFrames;float frameCorrection=time<1.0 ? 0.0 : 1.0;float numOfFrames=totalFrames-frameCorrection;float VATFrameNum=fract(time)*numOfFrames;VATFrameNum=mod(VATFrameNum+VATOffsetFrame,numOfFrames);VATFrameNum=floor(VATFrameNum);VATFrameNum+=VATStartFrame+frameCorrection;mat4 VATInfluence;VATInfluence=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[0],VATFrameNum)*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\nVATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[1],VATFrameNum)*matricesWeights[1];\n#endif\n#if NUM_BONE_INFLUENCERS>2\nVATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[2],VATFrameNum)*matricesWeights[2];\n#endif\n#if NUM_BONE_INFLUENCERS>3\nVATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[3],VATFrameNum)*matricesWeights[3];\n#endif\n#if NUM_BONE_INFLUENCERS>4\nVATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[0],VATFrameNum)*matricesWeightsExtra[0];\n#endif\n#if NUM_BONE_INFLUENCERS>5\nVATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[1],VATFrameNum)*matricesWeightsExtra[1];\n#endif\n#if NUM_BONE_INFLUENCERS>6\nVATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[2],VATFrameNum)*matricesWeightsExtra[2];\n#endif\n#if NUM_BONE_INFLUENCERS>7\nVATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[3],VATFrameNum)*matricesWeightsExtra[3];\n#endif\nfinalWorld=finalWorld*VATInfluence;}\n#endif\n"},7755:(e,n,i)=>{i.r(n),i.d(n,{glowMapGenerationVertexShader:()=>f});var t=i(9610);i(9707),i(8959),i(7999),i(738),i(1636),i(1218),i(8451),i(5060),i(3298),i(3361),i(5523),i(7314);const r="glowMapGenerationVertexShader",a="attribute vec3 position;\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<morphTargetsVertexGlobalDeclaration>\n#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]\n#include<clipPlaneVertexDeclaration>\n#include<instancesDeclaration>\nuniform mat4 viewProjection;varying vec4 vPosition;\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef DIFFUSE\nvarying vec2 vUVDiffuse;uniform mat4 diffuseMatrix;\n#endif\n#ifdef OPACITY\nvarying vec2 vUVOpacity;uniform mat4 opacityMatrix;\n#endif\n#ifdef EMISSIVE\nvarying vec2 vUVEmissive;uniform mat4 emissiveMatrix;\n#endif\n#ifdef VERTEXALPHA\nattribute vec4 color;varying vec4 vColor;\n#endif\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void)\n{vec3 positionUpdated=position;\n#ifdef UV1\nvec2 uvUpdated=uv;\n#endif\n#ifdef UV2\nvec2 uv2Updated=uv2;\n#endif\n#include<morphTargetsVertexGlobal>\n#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]\n#include<instancesVertex>\n#include<bonesVertex>\n#include<bakedVertexAnimation>\nvec4 worldPos=finalWorld*vec4(positionUpdated,1.0);\n#ifdef CUBEMAP\nvPosition=worldPos;gl_Position=viewProjection*finalWorld*vec4(position,1.0);\n#else\nvPosition=viewProjection*worldPos;gl_Position=vPosition;\n#endif\n#ifdef DIFFUSE\n#ifdef DIFFUSEUV1\nvUVDiffuse=vec2(diffuseMatrix*vec4(uvUpdated,1.0,0.0));\n#endif\n#ifdef DIFFUSEUV2\nvUVDiffuse=vec2(diffuseMatrix*vec4(uv2Updated,1.0,0.0));\n#endif\n#endif\n#ifdef OPACITY\n#ifdef OPACITYUV1\nvUVOpacity=vec2(opacityMatrix*vec4(uvUpdated,1.0,0.0));\n#endif\n#ifdef OPACITYUV2\nvUVOpacity=vec2(opacityMatrix*vec4(uv2Updated,1.0,0.0));\n#endif\n#endif\n#ifdef EMISSIVE\n#ifdef EMISSIVEUV1\nvUVEmissive=vec2(emissiveMatrix*vec4(uvUpdated,1.0,0.0));\n#endif\n#ifdef EMISSIVEUV2\nvUVEmissive=vec2(emissiveMatrix*vec4(uv2Updated,1.0,0.0));\n#endif\n#endif\n#ifdef VERTEXALPHA\nvColor=color;\n#endif\n#include<clipPlaneVertex>\n}";t.l.ShadersStore[r]=a;const f={name:r,shader:a}},7999:(e,n,i)=>{i(9610).l.IncludesShadersStore.morphTargetsVertexGlobalDeclaration="#ifdef MORPHTARGETS\nuniform float morphTargetInfluences[NUM_MORPH_INFLUENCERS];\n#ifdef MORPHTARGETS_TEXTURE \nuniform float morphTargetTextureIndices[NUM_MORPH_INFLUENCERS];uniform vec3 morphTargetTextureInfo;uniform highp sampler2DArray morphTargets;vec3 readVector3FromRawSampler(int targetIndex,float vertexIndex)\n{ \nfloat y=floor(vertexIndex/morphTargetTextureInfo.y);float x=vertexIndex-y*morphTargetTextureInfo.y;vec3 textureUV=vec3((x+0.5)/morphTargetTextureInfo.y,(y+0.5)/morphTargetTextureInfo.z,morphTargetTextureIndices[targetIndex]);return texture(morphTargets,textureUV).xyz;}\nvec4 readVector4FromRawSampler(int targetIndex,float vertexIndex)\n{ \nfloat y=floor(vertexIndex/morphTargetTextureInfo.y);float x=vertexIndex-y*morphTargetTextureInfo.y;vec3 textureUV=vec3((x+0.5)/morphTargetTextureInfo.y,(y+0.5)/morphTargetTextureInfo.z,morphTargetTextureIndices[targetIndex]);return texture(morphTargets,textureUV);}\n#endif\n#endif\n"},8451:(e,n,i)=>{i(9610).l.IncludesShadersStore.morphTargetsVertexGlobal="#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\nfloat vertexID;\n#endif\n#endif\n"},8959:(e,n,i)=>{i(9610).l.IncludesShadersStore.bakedVertexAnimationDeclaration="#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;uniform vec2 bakedVertexAnimationTextureSizeInverted;uniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTexture;\n#ifdef INSTANCES\nattribute vec4 bakedVertexAnimationSettingsInstanced;\n#endif\n#define inline\nmat4 readMatrixFromRawSamplerVAT(sampler2D smp,float index,float frame)\n{float offset=index*4.0;float frameUV=(frame+0.5)*bakedVertexAnimationTextureSizeInverted.y;float dx=bakedVertexAnimationTextureSizeInverted.x;vec4 m0=texture2D(smp,vec2(dx*(offset+0.5),frameUV));vec4 m1=texture2D(smp,vec2(dx*(offset+1.5),frameUV));vec4 m2=texture2D(smp,vec2(dx*(offset+2.5),frameUV));vec4 m3=texture2D(smp,vec2(dx*(offset+3.5),frameUV));return mat4(m0,m1,m2,m3);}\n#endif\n"},9707:(e,n,i)=>{i(9610).l.IncludesShadersStore.bonesDeclaration="#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nuniform highp sampler2D boneSampler;uniform float boneTextureWidth;\n#else\nuniform mat4 mBones[BonesPerMesh];\n#endif\n#ifdef BONES_VELOCITY_ENABLED\nuniform mat4 mPreviousBones[BonesPerMesh];\n#endif\n#ifdef BONETEXTURE\n#define inline\nmat4 readMatrixFromRawSampler(sampler2D smp,float index)\n{float offset=index *4.0;float dx=1.0/boneTextureWidth;vec4 m0=texture2D(smp,vec2(dx*(offset+0.5),0.));vec4 m1=texture2D(smp,vec2(dx*(offset+1.5),0.));vec4 m2=texture2D(smp,vec2(dx*(offset+2.5),0.));vec4 m3=texture2D(smp,vec2(dx*(offset+3.5),0.));return mat4(m0,m1,m2,m3);}\n#endif\n#endif\n#endif\n"}}]);