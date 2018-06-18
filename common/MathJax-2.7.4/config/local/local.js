/* -*- Mode: Javascript; indent-tabs-mode:nil; js-indent-level: 2 -*- */
/* vim: set ts=2 et sw=2 tw=80: */

/*************************************************************
 *
 *  MathJax/config/local/local.js
 *  
 *  Include changes and configuration local to your installation
 *  in this file.  For example, common macros can be defined here
 *  (see below).  To use this file, add "local/local.js" to the
 *  config array in MathJax.js or your MathJax.Hub.Config() call.
 *
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2009-2018 The MathJax Consortium
 * 
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */


MathJax.Hub.Register.StartupHook("TeX Jax Ready",function () {
  var TEX = MathJax.InputJax.TeX;

  // place macros here.  E.g.:
  //   TEX.Macro("R","{\\bf R}");
  //   TEX.Macro("op","\\mathop{\\rm #1}",1); // a macro with 1 parameter

  // ギリシャ文字
  TEX.Macro("a","\\alpha");
  TEX.Macro("b","\\beta");
  TEX.Macro("e","\\varepsilon");
  TEX.Macro("l","\\lambda");
  TEX.Macro("t","\\tau");
  TEX.Macro("ph","\\varphi");
  TEX.Macro("ps","\\psi");
  TEX.Macro("D","\\Delta");
  TEX.Macro("L","\\Lambda");

  // 黒板文字
  TEX.Macro("C","\\mathbb{C}");
  TEX.Macro("G","\\mathbb{G}");
  TEX.Macro("H","\\mathbb{H}");
  TEX.Macro("R","\\mathbb{R}");
  TEX.Macro("Z","\\mathbb{Z}");
  TEX.Macro("Rn","{\\mathbb R}^n");
  TEX.Macro("RN","{\\mathbb R}^N");

  // 筆記体
  TEX.Macro("cF","\\mathcal{F}");

  // 括弧
  TEX.Macro("par","\\left( #1 \\right)", 1);
  TEX.Macro("br","\\left\\{ #1 \\right\\}", 1);

  // オーバーライン, アンダーライン
  TEX.Macro("ol","\\overline{#1}", 1);

  // ドット
  TEX.Macro("c","\\cdot");
  TEX.Macro("cd","\\cdots");
  TEX.Macro("ld","\\ldots");
  TEX.Macro("vd","\\vdots");

  // 写像記号
  TEX.Macro("uto","\\overset{#1}{\\longrightarrow}", 1);
  TEX.Macro("cln","\\, \\colon \\,");

  // 集合記号
  TEX.Macro("emset","\\emptyset");
  TEX.Macro("Cup","\\bigcup");
  TEX.Macro("Qup","\\bigsqcup");
  TEX.Macro("ss","\\subset");
  TEX.Macro("sp","\\supset");
  TEX.Macro("set","\\left\\{ #1 \\; \\middle| \\; #2 \\right\\}", 2);

  // 論理記号
  TEX.Macro("all","\\forall");
  TEX.Macro("equ","\\, \\Leftrightarrow \\,");
  TEX.Macro("ex","\\exists");
  TEX.Macro("imp","\\, \\Rightarrow \\,");
  TEX.Macro("impL","\\, \\Leftarrow \\,");

  // いろいろな記号
  TEX.Macro("cc","\\circ");
  TEX.Macro("oo","\\infty");
  TEX.Macro("rd","\\partial");

  // 逆数
  TEX.Macro("phinv","\\varphi^{-1}");
  TEX.Macro("psinv","\\psi^{-1}");

  // 自作記号
  TEX.Macro("astsum","\\sideset{}{^*}\\sum_{#1 \\phantom{*}}", 1);
  TEX.Macro("Coo","C^{\\infty}");
  TEX.Macro("nm","\\left\\| #1 \\right\\|", 1);
  TEX.Macro("rec","\\frac{1}{#1}", 1);
  TEX.Macro("summ","\\sum_{\\substack{#1 \\\\ #2}}", 2);
  TEX.Macro("supp","\\mathop{\\rm supp}");

  // 環境
  TEX.Macro("bcs","\\begin{cases}");
  TEX.Macro("ecs","\\end{cases}");
});

MathJax.Ajax.loadComplete("[MathJax]/config/local/local.js");
