---
id: multi-layer-perceptron
slug: /multi-layer-perceptron
title: MLP
description: この記事では交差検証についてとその種類を紹介します。
sidebar_position: 3
sidebar_label: MLP

---
## MLP
- 一つの入力層と一つ以上のTLU層から構成される隠れ層と最後に出力層と呼ばれるTLU層からなる。
- バックプロパゲーション(誤差逆伝播法)と呼ばれるアルゴリズムを用いて訓練が行われる。この訓練アルゴリズムは誤差を削減するために、個々の接続重みとバイアス項をどのように操作すべきか自動的に計算する。

具体的には以下のような手順で計算が行われる。
- 一度に一個のミニバッチを処理する、アルゴリズムは訓練セット全体を複数回処理する。(ここのパスをエポック（epoch）と呼ぶ)
- ネットワークの入力層にミニバッチを一つずつ渡す。入力層は第一の隠れ層にミニバッチを送る。次に、アルゴリズムはこの層のすべてのニューロンの出力を計算し、結果を次の隠れ層に送る。これを最後の層まで続ける。これが前進パスです。
- 次に、アルゴリズムはネットワークの出力誤差を関数、指標によって測定する。
- 次に、個々の出力接続部が誤差にどれだけ影響を及ぼしているかを計算する。入力層に達するまでこれを繰り替えす。(後退パス)
- 最後に、アルゴリズムは計算した誤差の勾配を使って逆方向に進み、すべての接続重みを更新(誤差が小さくなるように)する。

## 活性化関数

- シグモイド関数:
$f(x) = \frac{1}{1+e^{-x}}$

![sigmoid](/img/sigmoid.gif)

- 双曲線関数:
$f(x) = \frac{e^x - e^{-x}}{e^x+e^{-x}}$

![tanh](/img/hyperbolic.gif)

- ReLU関数:
$f(x)=
\begin{cases}
0, \leq0\\
x, >0
\end{cases}$

![ReLU](/img/ReLU.gif)

## 回帰MLP

## 分類MLP

tags:
  - machine learning
  - Deep learning

keywords:
  - machine learning
  - Deep learning
---