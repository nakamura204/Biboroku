---
id: apriori
slug: /apriori
title: apriori
description: この記事ではaprioriを紹介します。
sidebar_position: 2
sidebar_label: apriori

---
# 誤差逆伝播法
誤差関数を最小化させるために各層の重みを更新していくアルゴリズム

## なぜ誤差逆伝播法という名前なのか
 - なぜ誤差？ -> **誤差関数**を最小にするように重みを更新していくため。
 - なぜ逆? -> 下位層の重みを更新したいとき、上位層の重みが計算に絡んでくるため。


## 勾配降下法
勾配の値から重みをどちらに更新するべきかの方向を知り、損失関数の局所、大域最適解に収束させます。
![gradient-decent](/img/gradient-decent.jpeg)
### 勾配降下法の式：
$$ 
\Delta w_{ij}^{l} =  x_i - \eta \frac{\partial E}{\partial w_{ij}^{l}} 
$$

## 具体的な処理の説明
実際に以下に重みを更新する計算例を示す。
誤差関数には2乗誤差関数（N=2とする）活性化関数には恒等関数を採用する。

![mlp](/img/mlp.jpeg)

### 定義
$$
誤差関数: E = \frac{1}{2}\Sigma_{n}(\hat{y_i} - y_i)^2 \\
活性化関数: f^L(u) = u \\
重み付き線形和: u_{j}^{L} = w_{i,j}^{L}z_{i}^{L-1}+w_{i+1,j}^{L}z_{i+1}^{L-1}+w_{i+2,j}^{L}z_{i+2}^{L-1}...\\
$$

$$
w:重み　u:重み付き線形和　z:ニューロンの出力　\\ 
l:層番号　i:層lのニューロン番号　j:層l+1のニューロン番号 
$$

### 出力層

出力層の$z_i$を特別$y_i$とする。
以下、誤差関数Eは重み$w_{i,j}$で直接微分することとができないため、連鎖率の原理より、
$$
\frac{\partial E}{\partial w_{i,j}^{L}} = \frac{\partial E}{\partial z_{i}^{L}} \frac{\partial z_{i}^{L}}{\partial u_{j}^{L}} \frac{\partial u_{j}^{L}}{\partial w_{i,j}^{L}}
$$
と表せる。これは、誤差関数Eがuを通して、重みwの関数としてみることができ、かつzを通してのuの関数：$E(z(u(w)...)...)$としてみることができるためである。（出力層の$z_i$を特別$y_i$)


### 中間層

$$

\frac{\partial E}{\partial w_{i,j}^{l}} = \frac{\partial E}{\partial u_{j}^{l}}\frac{\partial u_{j}^{l}}{\partial w_{i,j}^{l}} ・・・（1）\\
\frac{\partial E}{\partial u_{j}^{l}} = \Sigma_{k}\frac{\partial E}{\partial u_{k}^{l+1}}\frac{\partial u_{k}^{l+1}}{\partial u_{j}^{l}}・・・（2）\\
\frac{\partial u_{k}^{l+1}}{\partial u_{j}^{l}}= \Sigma_{k}\frac {\partial u_{k}^{l+1}}{\partial z_{j}^{l}}\frac{\partial z_{j}^{l}}{\partial u_{j}^{}l}・・・　（3）\\
$$
従って、
$$
\frac{\partial E}{\partial w_{i,j}^{l}} =  \Sigma_{k}\frac{\partial E}{\partial u_{k}^{l+1}}\frac {\partial u_{k}^{l+1}}{\partial z_{j}^{l}}\frac{\partial z_{j}^{l}}{\partial u_{j}^{}l}\frac{\partial u_{j}^{l}}{\partial w_{i,j}^{l}}
$$



tags:
  - deep learning
  - machine learning

keywords:
  - deep learning
  - machine learning
---